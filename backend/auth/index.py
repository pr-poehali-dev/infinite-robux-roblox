"""
Авторизация игроков: регистрация, вход, выход, получение профиля.
"""
import json
import os
import hashlib
import secrets
import psycopg2

SCHEMA = os.environ.get("MAIN_DB_SCHEMA", "t_p46821773_infinite_robux_roblo")

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Session-Token",
}


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


def make_token() -> str:
    return secrets.token_hex(32)


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    method = event.get("httpMethod", "GET")
    params = event.get("queryStringParameters") or {}
    action = params.get("action", "")
    body = {}
    if event.get("body"):
        body = json.loads(event["body"])

    # GET /auth?action=me — получить профиль по токену
    if method == "GET" and action == "me":
        token = (event.get("headers") or {}).get("X-Session-Token", "")
        if not token:
            return {"statusCode": 401, "headers": CORS_HEADERS, "body": json.dumps({"error": "Нет токена"})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"SELECT u.id, u.username, u.email, u.robux, u.level, u.xp, u.avatar, u.created_at "
            f"FROM {SCHEMA}.sessions s JOIN {SCHEMA}.users u ON s.user_id = u.id "
            f"WHERE s.token = %s AND s.expires_at > NOW()",
            (token,)
        )
        row = cur.fetchone()
        conn.close()
        if not row:
            return {"statusCode": 401, "headers": CORS_HEADERS, "body": json.dumps({"error": "Сессия устарела"})}
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({
                "id": row[0], "username": row[1], "email": row[2],
                "robux": row[3], "level": row[4], "xp": row[5],
                "avatar": row[6], "created_at": str(row[7])
            })
        }

    # POST /auth?action=register
    if method == "POST" and action == "register":
        username = (body.get("username") or "").strip()
        email = (body.get("email") or "").strip().lower()
        password = body.get("password") or ""

        if not username or not email or not password:
            return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Заполни все поля"})}
        if len(username) < 3:
            return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Никнейм минимум 3 символа"})}
        if len(password) < 6:
            return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Пароль минимум 6 символов"})}

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"SELECT id FROM {SCHEMA}.users WHERE username = %s OR email = %s", (username, email))
        if cur.fetchone():
            conn.close()
            return {"statusCode": 409, "headers": CORS_HEADERS, "body": json.dumps({"error": "Никнейм или email уже занят"})}

        pw_hash = hash_password(password)
        cur.execute(
            f"INSERT INTO {SCHEMA}.users (username, email, password_hash) VALUES (%s, %s, %s) RETURNING id",
            (username, email, pw_hash)
        )
        user_id = cur.fetchone()[0]
        token = make_token()
        cur.execute(
            f"INSERT INTO {SCHEMA}.sessions (user_id, token) VALUES (%s, %s)",
            (user_id, token)
        )
        conn.commit()
        conn.close()
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"token": token, "username": username, "robux": 1250, "level": 1, "xp": 0, "avatar": "🧑"})
        }

    # POST /auth?action=login
    if method == "POST" and action == "login":
        login = (body.get("login") or "").strip().lower()
        password = body.get("password") or ""

        if not login or not password:
            return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "Заполни все поля"})}

        pw_hash = hash_password(password)
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"SELECT id, username, robux, level, xp, avatar FROM {SCHEMA}.users "
            f"WHERE (email = %s OR username = %s) AND password_hash = %s",
            (login, login, pw_hash)
        )
        row = cur.fetchone()
        if not row:
            conn.close()
            return {"statusCode": 401, "headers": CORS_HEADERS, "body": json.dumps({"error": "Неверный логин или пароль"})}

        user_id, username, robux, level, xp, avatar = row
        token = make_token()
        cur.execute(
            f"INSERT INTO {SCHEMA}.sessions (user_id, token) VALUES (%s, %s)",
            (user_id, token)
        )
        cur.execute(f"UPDATE {SCHEMA}.users SET last_login = NOW() WHERE id = %s", (user_id,))
        conn.commit()
        conn.close()
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"token": token, "username": username, "robux": robux, "level": level, "xp": xp, "avatar": avatar})
        }

    # POST /auth?action=logout
    if method == "POST" and action == "logout":
        token = (event.get("headers") or {}).get("X-Session-Token", "")
        if token:
            conn = get_conn()
            cur = conn.cursor()
            cur.execute(f"UPDATE {SCHEMA}.sessions SET expires_at = NOW() WHERE token = %s", (token,))
            conn.commit()
            conn.close()
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": json.dumps({"ok": True})}

    return {"statusCode": 404, "headers": CORS_HEADERS, "body": json.dumps({"error": "Не найдено"})}
