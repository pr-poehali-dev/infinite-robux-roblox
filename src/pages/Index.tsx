import { useState } from "react";
import Icon from "@/components/ui/icon";

const WORLDS_IMG = "https://cdn.poehali.dev/projects/b59acf8d-3d5d-46f0-ad85-cc4939d98c24/files/86f22661-5955-4f48-9bad-c282bc6b7539.jpg";
const SHOP_IMG = "https://cdn.poehali.dev/projects/b59acf8d-3d5d-46f0-ad85-cc4939d98c24/files/1c8508ea-8c79-479a-ad7c-094d3460f56d.jpg";
const FRIENDS_IMG = "https://cdn.poehali.dev/projects/b59acf8d-3d5d-46f0-ad85-cc4939d98c24/files/3b4fa1a8-44c6-459a-b77a-dbd15719c3a1.jpg";
const BRAINROT_IMG = "https://cdn.poehali.dev/projects/b59acf8d-3d5d-46f0-ad85-cc4939d98c24/files/3364b6c2-896f-4a50-9e0f-b804290e740f.jpg";

type Tab = "home" | "worlds" | "shop" | "profile" | "friends";

const quests = [
  { id: 1, title: "Первые шаги", desc: "Войди в игровой мир впервые", reward: 50, progress: 100, done: true, icon: "🚀" },
  { id: 2, title: "Охотник", desc: "Победи 10 монстров", reward: 150, progress: 70, done: false, icon: "⚔️" },
  { id: 3, title: "Строитель", desc: "Построй свой первый дом", reward: 200, progress: 30, done: false, icon: "🏠" },
  { id: 4, title: "Исследователь", desc: "Посети 5 разных миров", reward: 300, progress: 40, done: false, icon: "🗺️" },
  { id: 5, title: "Богач", desc: "Накопи 1000 монет", reward: 500, progress: 15, done: false, icon: "💰" },
];

const worlds = [
  { id: 1, name: "Остров Приключений", players: 1243, rating: 4.9, tag: "Хит", tagColor: "#FF4444", img: WORLDS_IMG },
  { id: 2, name: "Магазин Чудес", players: 892, rating: 4.7, tag: "Новый", tagColor: "#00CC44", img: SHOP_IMG },
  { id: 3, name: "Мир Друзей", players: 2156, rating: 5.0, tag: "Топ", tagColor: "#9B59FF", img: FRIENDS_IMG },
  { id: 4, name: "Подземелье Теней", players: 567, rating: 4.5, tag: "Сложно", tagColor: "#FF8C00", img: WORLDS_IMG },
  { id: 5, name: "Укради Брейнрот", players: 9999, rating: 5.0, tag: "🧠 ВИРУС", tagColor: "#FF00FF", img: BRAINROT_IMG },
];

const shopItems = [
  { id: 1, name: "Шляпа Мага", price: 99, oldPrice: 149, category: "Шапки", emoji: "🎩", color: "#9B59FF" },
  { id: 2, name: "Меч Дракона", price: 249, oldPrice: null, category: "Оружие", emoji: "⚔️", color: "#FF4444" },
  { id: 3, name: "Крылья Ангела", price: 399, oldPrice: 599, category: "Спина", emoji: "🪽", color: "#00A2FF" },
  { id: 4, name: "Броня Рыцаря", price: 199, oldPrice: null, category: "Тело", emoji: "🛡️", color: "#FFD700" },
  { id: 5, name: "Ботинки Ниндзя", price: 79, oldPrice: 120, category: "Ноги", emoji: "👟", color: "#00CC44" },
  { id: 6, name: "Маска Клоуна", price: 59, oldPrice: null, category: "Лицо", emoji: "🤡", color: "#FF8C00" },
];

const friends = [
  { id: 1, name: "КорольИгр2025", status: "online", world: "Остров Приключений", avatar: "👑", level: 42 },
  { id: 2, name: "НинзяПро", status: "online", world: "Подземелье Теней", avatar: "🥷", level: 38 },
  { id: 3, name: "МагДракон", status: "offline", world: null, avatar: "🧙", level: 55 },
  { id: 4, name: "РобоБот3000", status: "online", world: "Мир Друзей", avatar: "🤖", level: 29 },
  { id: 5, name: "СуперСтроитель", status: "away", world: null, avatar: "⚒️", level: 17 },
];

const robuxPacks = [
  { amount: 400, price: "149₽", bonus: null, color: "from-blue-500 to-blue-700" },
  { amount: 800, price: "249₽", bonus: "+80 бонус", color: "from-purple-500 to-purple-700" },
  { amount: 1700, price: "449₽", bonus: "+170 бонус", color: "from-orange-500 to-red-600" },
  { amount: 4500, price: "999₽", bonus: "+450 бонус", color: "from-yellow-400 to-orange-500" },
];

export default function Index() {
  const [tab, setTab] = useState<Tab>("home");
  const [robux] = useState(1250);
  const [level] = useState(23);
  const [xp] = useState(6700);
  const [maxXp] = useState(10000);
  const [inventory, setInventory] = useState<number[]>([1]);

  const navItems: { id: Tab; label: string; emoji: string }[] = [
    { id: "home", label: "Главная", emoji: "🏠" },
    { id: "worlds", label: "Миры", emoji: "🌍" },
    { id: "shop", label: "Магазин", emoji: "🛒" },
    { id: "profile", label: "Профиль", emoji: "👤" },
    { id: "friends", label: "Друзья", emoji: "👥" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md" style={{ background: "rgba(10,18,40,0.92)" }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-spin-slow">🎮</span>
            <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", background: "linear-gradient(90deg,#FFD700,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              RobloxМир
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,215,0,0.15)", border: "1.5px solid rgba(255,215,0,0.4)" }}>
              <span>💎</span>
              <span className="font-black text-yellow-400">{robux.toLocaleString()}</span>
              <span className="text-xs text-yellow-400/70 font-bold">ROBUX</span>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: "linear-gradient(135deg,#9B59FF,#00A2FF)" }}>
              🧑
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {tab === "home" && <HomeTab level={level} xp={xp} maxXp={maxXp} robux={robux} quests={quests} onNavigate={setTab} />}
        {tab === "worlds" && <WorldsTab worlds={worlds} />}
        {tab === "shop" && <ShopTab items={shopItems} packs={robuxPacks} inventory={inventory} setInventory={setInventory} robux={robux} />}
        {tab === "profile" && <ProfileTab level={level} xp={xp} maxXp={maxXp} robux={robux} quests={quests} inventory={inventory} items={shopItems} />}
        {tab === "friends" && <FriendsTab friends={friends} onlineFriends={friends.filter(f => f.status === "online").length} />}
      </main>

      {/* Bottom Nav */}
      <nav className="sticky bottom-0 border-t border-border/50 backdrop-blur-md z-50" style={{ background: "rgba(10,18,40,0.95)" }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-around">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className="nav-btn flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all"
              style={{ color: tab === item.id ? "hsl(38 100% 55%)" : "hsl(220 20% 60%)" }}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="text-xs font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

function HomeTab({ level, xp, maxXp, quests, onNavigate }: { level: number; xp: number; maxXp: number; robux: number; quests: typeof quests; onNavigate: (t: Tab) => void }) {
  const xpPct = Math.round((xp / maxXp) * 100);

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #1a1f5e 0%, #0d1b4b 50%, #1a0a3e 100%)", border: "2px solid rgba(155,89,255,0.3)" }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #9B59FF, transparent)", transform: "translate(20%, -20%)" }} />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #00A2FF, transparent)", transform: "translate(-20%, 20%)" }} />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-white/60 font-semibold mb-1">Добро пожаловать, игрок!</p>
              <h1 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2rem", lineHeight: 1.2 }} className="shimmer-text">
                Готов к приключениям?
              </h1>
            </div>
            <div className="text-5xl animate-float">🚀</div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-black text-white/70">УРОВЕНЬ {level}</span>
              <span className="text-xs font-bold text-yellow-400">{xp.toLocaleString()} / {maxXp.toLocaleString()} XP</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="quest-bar h-full" style={{ width: `${xpPct}%` }} />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button onClick={() => onNavigate("worlds")} className="flex-1 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }}>
              🌍 Играть!
            </button>
            <button onClick={() => onNavigate("shop")} className="flex-1 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-105 border" style={{ borderColor: "rgba(155,89,255,0.5)", color: "white", background: "rgba(155,89,255,0.2)" }}>
              🛒 Магазин
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Уровень", value: level, emoji: "⭐", color: "#FFD700" },
          { label: "Монеты", value: "1,250", emoji: "💎", color: "#00A2FF" },
          { label: "Квесты", value: `${quests.filter(q => q.done).length}/${quests.length}`, emoji: "📜", color: "#00CC44" },
        ].map(stat => (
          <div key={stat.label} className="roblox-card p-3 text-center">
            <div className="text-2xl mb-1">{stat.emoji}</div>
            <div className="font-black text-lg" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-muted-foreground font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quests */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.3rem" }} className="text-white">📜 Квесты</h2>
          <span className="badge-roblox" style={{ background: "rgba(0,204,68,0.2)", color: "#00CC44", border: "1px solid rgba(0,204,68,0.4)" }}>
            {quests.filter(q => q.done).length} выполнено
          </span>
        </div>
        <div className="space-y-3">
          {quests.map(q => (
            <div key={q.id} className="roblox-card p-4 flex items-center gap-3">
              <div className="text-2xl flex-shrink-0">{q.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-sm text-white">{q.title}</span>
                  {q.done && <span className="badge-roblox" style={{ background: "rgba(0,204,68,0.2)", color: "#00CC44", border: "1px solid rgba(0,204,68,0.4)" }}>✓ Готово</span>}
                </div>
                <p className="text-xs text-muted-foreground font-semibold mb-2">{q.desc}</p>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="quest-bar h-full" style={{ width: `${q.progress}%` }} />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-muted-foreground">{q.progress}%</span>
                  <span className="text-xs font-black text-yellow-400">+{q.reward} 💎</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const worldDetails: Record<number, { desc: string; events: string[]; rewards: string[]; danger: string }> = {
  1: { desc: "Исследуй острова, сражайся с пиратами и ищи сокровища!", events: ["⚔️ Битва с пиратами", "🏝️ Поиск сокровищ", "🌊 Морской шторм"], rewards: ["💎 +120 монет", "⭐ +500 XP", "🎁 Редкий сундук"], danger: "Средняя" },
  2: { desc: "Торгуй, строй магазины и стань богатейшим купцом!", events: ["🛒 Аукцион редкостей", "📦 Доставка товаров", "💰 Золотая лихорадка"], rewards: ["💎 +200 монет", "⭐ +300 XP", "🏆 Значок Купца"], danger: "Низкая" },
  3: { desc: "Знакомься с игроками со всего мира и строй вместе!", events: ["🤝 Турнир гильдий", "🏗️ Совместная стройка", "🎉 Вечеринка в мире"], rewards: ["💎 +80 монет", "⭐ +200 XP", "👥 +5 друзей"], danger: "Нет" },
  4: { desc: "Тёмные подземелья полны монстров и тайн. Только для смелых!", events: ["👹 Рейд на босса", "🔦 Поиск в темноте", "💀 Выживание 10 волн"], rewards: ["💎 +350 монет", "⭐ +800 XP", "⚔️ Оружие Тьмы"], danger: "Высокая" },
  5: { desc: "Хаотичный мир брейнрота! Укради самый редкий брейнрот до того, как это сделают другие!", events: ["🧠 Охота за брейнротом", "🤪 Битва мемов", "🌀 Вихрь безумия"], rewards: ["💎 +999 монет", "⭐ +1337 XP", "🧠 Легендарный Брейнрот"], danger: "МАКСИМАЛЬНАЯ" },
};

// ===== BRAINROT MINIGAMES =====

const BRAINROTS = ["🧠","🤪","💀","🫠","👾","🤡","👻","🦧","🐸","😵","🌀","🎪","🤯","👁️","🫃"];

function BrainrotHunt({ onBack, onWin }: { onBack: () => void; onWin: (score: number) => void }) {
  const [caught, setCaught] = useState<number[]>([]);
  const [positions] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: BRAINROTS[Math.floor(Math.random() * BRAINROTS.length)],
      top: `${10 + Math.random() * 75}%`,
      left: `${5 + Math.random() * 85}%`,
      delay: `${Math.random() * 2}s`,
      rare: Math.random() < 0.2,
    }))
  );
  const [timeLeft, setTimeLeft] = useState(20);
  const [done, setDone] = useState(false);

  useState(() => {
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(t); setDone(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  });

  const catchBrainrot = (id: number) => {
    if (caught.includes(id) || done) return;
    setCaught(prev => [...prev, id]);
  };

  const score = caught.reduce((acc, id) => acc + (positions[id]?.rare ? 150 : 50), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none" style={{ background: "linear-gradient(135deg,#1a0050,#3d0070,#1a0030)" }}>
      <div className="absolute top-0 left-0 right-0 z-20 p-3 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.5)" }}>
        <button onClick={onBack} className="px-3 py-1.5 rounded-xl font-black text-xs" style={{ background: "rgba(255,68,68,0.3)", color: "#FF4444" }}>← Назад</button>
        <div style={{ fontFamily: "'Fredoka One', cursive" }} className="text-white text-base">🧠 Охота за брейнротом</div>
        <div className="text-right">
          <div className="font-black text-yellow-400 text-sm">{caught.length} / {positions.length}</div>
          <div className={`text-xs font-black ${timeLeft <= 5 ? "text-red-400 animate-pulse" : "text-white/60"}`}>⏱ {timeLeft}с</div>
        </div>
      </div>

      <div className="absolute inset-0 top-14">
        {positions.map(pos => (
          <button key={pos.id} onClick={() => catchBrainrot(pos.id)}
            className="absolute transition-all duration-150 active:scale-50"
            style={{ top: pos.top, left: pos.left, fontSize: pos.rare ? "2.8rem" : "2rem",
              animation: `float ${2 + Math.random()}s ease-in-out ${pos.delay} infinite`,
              opacity: caught.includes(pos.id) ? 0 : 1,
              filter: pos.rare ? "drop-shadow(0 0 10px #FF00FF)" : "none",
              transform: caught.includes(pos.id) ? "scale(0)" : "scale(1)",
            }}>
            {pos.emoji}
            {pos.rare && !caught.includes(pos.id) && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black" style={{ color: "#FF00FF", whiteSpace: "nowrap" }}>РЕДКИЙ!</div>
            )}
          </button>
        ))}
      </div>

      {done && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center" style={{ background: "rgba(0,0,0,0.85)" }}>
          <div className="text-6xl mb-4 animate-bounce">🧠</div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2rem" }} className="text-white mb-2">Охота завершена!</h2>
          <p className="text-white/70 font-semibold mb-1">Поймано: <span className="text-yellow-400 font-black">{caught.length}</span> брейнротов</p>
          <p className="font-black text-2xl text-yellow-400 mb-6">+{score} очков</p>
          <div className="flex gap-3">
            <button onClick={onBack} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Назад</button>
            <button onClick={() => onWin(score)} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "linear-gradient(135deg,#FF00FF,#9B59FF)", color: "white" }}>Забрать награду!</button>
          </div>
        </div>
      )}
    </div>
  );
}

function BrainrotBattle({ onBack, onWin }: { onBack: () => void; onWin: (score: number) => void }) {
  const [playerHp, setPlayerHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(120);
  const [log, setLog] = useState<string[]>(["⚔️ Битва началась! Атакуй!"]);
  const [turn, setTurn] = useState<"player" | "enemy" | "done">("player");
  const [shaking, setShaking] = useState(false);
  const enemy = { name: "Мегабрейнрот", emoji: "🧠", maxHp: 120 };

  const attacks = [
    { name: "Мем-удар", emoji: "💥", dmg: [15, 25] as [number, number], color: "#FF4444" },
    { name: "Брейнрот-взрыв", emoji: "🌀", dmg: [20, 35] as [number, number], color: "#FF00FF" },
    { name: "Скибиди-удар", emoji: "🤪", dmg: [10, 20] as [number, number], color: "#FFD700" },
  ];

  const attack = (atk: typeof attacks[0]) => {
    if (turn !== "player") return;
    const dmg = atk.dmg[0] + Math.floor(Math.random() * (atk.dmg[1] - atk.dmg[0]));
    const newEnemyHp = Math.max(0, enemyHp - dmg);
    setEnemyHp(newEnemyHp);
    setShaking(true);
    setTimeout(() => setShaking(false), 400);
    const newLog = [`${atk.emoji} ${atk.name}: -${dmg} HP врагу!`, ...log.slice(0, 4)];
    if (newEnemyHp <= 0) { setLog(["🏆 Мегабрейнрот повержен! Победа!", ...newLog]); setTurn("done"); return; }
    setLog(newLog);
    setTurn("enemy");
    setTimeout(() => {
      const edm = 10 + Math.floor(Math.random() * 20);
      const newPHp = Math.max(0, playerHp - edm);
      setPlayerHp(newPHp);
      setLog(prev => [`😵 Враг атакует: -${edm} HP!`, ...prev.slice(0, 4)]);
      if (newPHp <= 0) { setTurn("done"); return; }
      setTurn("player");
    }, 1000);
  };

  const score = Math.max(0, Math.round((enemy.maxHp - enemyHp) * 5 + playerHp * 3));
  const won = enemyHp <= 0;

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden" style={{ background: "linear-gradient(180deg,#200040,#400020,#200040)" }}>
      <div className="p-3 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.5)" }}>
        <button onClick={onBack} className="px-3 py-1.5 rounded-xl font-black text-xs" style={{ background: "rgba(255,68,68,0.3)", color: "#FF4444" }}>← Назад</button>
        <div style={{ fontFamily: "'Fredoka One', cursive" }} className="text-white">🤪 Битва с брейнротом</div>
        <div className="w-16" />
      </div>

      <div className="flex-1 flex flex-col px-4 gap-3 py-2 overflow-y-auto">
        <div className="roblox-card p-4 text-center">
          <div className={`text-6xl mb-2 transition-all ${shaking ? "animate-bounce" : "animate-float"}`} style={{ filter: "drop-shadow(0 0 20px #FF00FF)" }}>{enemy.emoji}</div>
          <div style={{ fontFamily: "'Fredoka One', cursive" }} className="text-white text-lg">{enemy.name}</div>
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-red-400 font-black">❤️ HP врага</span>
              <span className="text-white font-bold">{enemyHp}/{enemy.maxHp}</span>
            </div>
            <div className="h-4 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(enemyHp / enemy.maxHp) * 100}%`, background: "linear-gradient(90deg,#FF00FF,#FF4444)" }} />
            </div>
          </div>
        </div>

        <div className="roblox-card p-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-green-400 font-black">🧑 Твой HP</span>
            <span className="text-white font-bold">{playerHp}/100</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${playerHp}%`, background: "linear-gradient(90deg,#00CC44,#00A2FF)" }} />
          </div>
        </div>

        <div className="roblox-card p-3 space-y-1">
          {log.map((l, i) => (
            <div key={i} className="text-xs font-semibold" style={{ color: i === 0 ? "white" : "rgba(255,255,255,0.4)" }}>{l}</div>
          ))}
        </div>

        {turn === "player" && (
          <div className="grid grid-cols-3 gap-2">
            {attacks.map(atk => (
              <button key={atk.name} onClick={() => attack(atk)}
                className="p-3 rounded-xl text-center transition-all active:scale-95 hover:scale-105"
                style={{ background: `${atk.color}33`, border: `1.5px solid ${atk.color}66`, color: "white" }}>
                <div className="text-2xl mb-1">{atk.emoji}</div>
                <div className="text-xs font-black leading-tight">{atk.name}</div>
                <div className="text-xs mt-1" style={{ color: atk.color }}>-{atk.dmg[0]}~{atk.dmg[1]}</div>
              </button>
            ))}
          </div>
        )}
        {turn === "enemy" && (
          <div className="roblox-card p-4 text-center animate-pulse">
            <p className="text-white/70 font-black">Враг атакует... 😰</p>
          </div>
        )}
      </div>

      {turn === "done" && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center" style={{ background: "rgba(0,0,0,0.85)" }}>
          <div className="text-6xl mb-4 animate-bounce">{won ? "🏆" : "💀"}</div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2rem" }} className={won ? "text-yellow-400" : "text-red-400"}>
            {won ? "Победа!" : "Поражение!"}
          </h2>
          <p className="text-white/70 font-semibold mt-2 mb-1">{won ? "Брейнрот побеждён!" : "Ты проиграл брейнроту..."}</p>
          {won && <p className="font-black text-2xl text-yellow-400 mb-6">+{score} очков</p>}
          <div className="flex gap-3 mt-4">
            <button onClick={onBack} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Назад</button>
            {won && <button onClick={() => onWin(score)} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }}>Забрать!</button>}
          </div>
        </div>
      )}
    </div>
  );
}

function BrainrotVortex({ onBack, onWin }: { onBack: () => void; onWin: (score: number) => void }) {
  const [active, setActive] = useState(true);
  const [score, setScore] = useState(0);
  const [tapped, setTapped] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [items, setItems] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i, emoji: BRAINROTS[Math.floor(Math.random() * BRAINROTS.length)],
      x: 10 + Math.random() * 75, y: 15 + Math.random() * 65, alive: true,
    }))
  );

  useState(() => {
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(t); setActive(false); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  });

  const tap = (id: number) => {
    if (!active) return;
    setItems(prev => prev.map(it => it.id === id ? { ...it, alive: false } : it));
    setScore(s => s + 77);
    setTapped(t => t + 1);
    setTimeout(() => {
      setItems(prev => prev.map(it => it.id === id ? {
        ...it, alive: true,
        x: 10 + Math.random() * 75, y: 15 + Math.random() * 65,
        emoji: BRAINROTS[Math.floor(Math.random() * BRAINROTS.length)],
      } : it));
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" style={{ background: "radial-gradient(circle at center,#3d0060,#1a0040,#000020)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[200, 280, 360].map((size, i) => (
          <div key={i} className="absolute rounded-full border" style={{
            width: size, height: size,
            borderColor: `rgba(255,0,255,${0.15 - i * 0.04})`,
            animation: `spin-slow ${6 + i * 3}s linear infinite ${i % 2 ? "reverse" : ""}`,
          }} />
        ))}
        <div className="text-7xl animate-spin-slow" style={{ filter: "drop-shadow(0 0 30px #FF00FF)" }}>🌀</div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-20 p-3 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.6)" }}>
        <button onClick={onBack} className="px-3 py-1.5 rounded-xl font-black text-xs" style={{ background: "rgba(255,68,68,0.3)", color: "#FF4444" }}>← Назад</button>
        <div style={{ fontFamily: "'Fredoka One', cursive" }} className="text-white">🌀 Вихрь безумия</div>
        <div className="text-right">
          <div className="font-black text-yellow-400 text-sm">×{tapped}</div>
          <div className={`text-xs font-black ${timeLeft <= 5 ? "text-red-400 animate-pulse" : "text-white/60"}`}>⏱ {timeLeft}с</div>
        </div>
      </div>

      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center">
        <div className="font-black text-3xl shimmer-text">{score}</div>
        <div className="text-xs text-white/50 font-bold">ОЧКИ</div>
      </div>

      {items.map(it => it.alive && (
        <button key={it.id} onClick={() => tap(it.id)}
          className="absolute z-10 transition-all duration-150 active:scale-50"
          style={{ top: `${it.y}%`, left: `${it.x}%`, fontSize: "2.5rem",
            animation: `float ${1.5 + Math.random()}s ease-in-out infinite`,
            filter: "drop-shadow(0 0 8px #FF00FF)",
          }}>
          {it.emoji}
        </button>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-black text-sm z-20">ТЫЧ ПО БРЕЙНРОТАМ!</div>

      {!active && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center" style={{ background: "rgba(0,0,0,0.85)" }}>
          <div className="text-6xl mb-4 animate-bounce">🌀</div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2rem" }} className="shimmer-text mb-2">Вихрь стих!</h2>
          <p className="text-white/70 font-semibold mb-1">Тычков: <span className="text-yellow-400 font-black">{tapped}</span></p>
          <p className="font-black text-2xl text-yellow-400 mb-6">+{score} очков</p>
          <div className="flex gap-3">
            <button onClick={onBack} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Назад</button>
            <button onClick={() => onWin(score)} className="px-6 py-2.5 rounded-xl font-black" style={{ background: "linear-gradient(135deg,#FF00FF,#9B59FF)", color: "white" }}>Забрать!</button>
          </div>
        </div>
      )}
    </div>
  );
}

function BrainrotWorld({ onExit }: { onExit: () => void }) {
  const [minigame, setMinigame] = useState<"menu" | "hunt" | "battle" | "vortex">("menu");
  const [totalScore, setTotalScore] = useState(0);
  const [wonGames, setWonGames] = useState<string[]>([]);

  const win = (game: string, score: number) => {
    setTotalScore(s => s + score);
    setWonGames(prev => prev.includes(game) ? prev : [...prev, game]);
    setMinigame("menu");
  };

  if (minigame === "hunt") return <BrainrotHunt onBack={() => setMinigame("menu")} onWin={(s) => win("hunt", s)} />;
  if (minigame === "battle") return <BrainrotBattle onBack={() => setMinigame("menu")} onWin={(s) => win("battle", s)} />;
  if (minigame === "vortex") return <BrainrotVortex onBack={() => setMinigame("menu")} onWin={(s) => win("vortex", s)} />;

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto" style={{ background: "linear-gradient(135deg,#1a0050,#3d0070,#0a0030)" }}>
      <div className="absolute inset-0 opacity-10">
        <img src={BRAINROT_IMG} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(26,0,80,0.85),rgba(61,0,112,0.9))" }} />

      <div className="relative z-10 p-4 flex items-center justify-between">
        <button onClick={onExit} className="flex items-center gap-2 px-3 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(255,68,68,0.2)", color: "#FF4444", border: "1px solid rgba(255,68,68,0.4)" }}>
          <Icon name="LogOut" size={14} /> Выйти
        </button>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.2rem", color: "#FF00FF" }} className="animate-pulse">🧠 Укради Брейнрот</div>
        <div className="px-3 py-1.5 rounded-full" style={{ background: "rgba(255,215,0,0.15)", border: "1.5px solid rgba(255,215,0,0.4)" }}>
          <span className="text-xs text-yellow-400 font-black">⭐ {totalScore}</span>
        </div>
      </div>

      <div className="relative z-10 flex-1 px-4 pb-6 space-y-4">
        <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(255,0,255,0.1)", border: "2px solid rgba(255,0,255,0.3)" }}>
          <div className="text-5xl mb-2 animate-spin-slow">🌀</div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem" }} className="text-white mb-1">Мир абсолютного безумия</h2>
          <p className="text-white/60 text-sm font-semibold">Выбери активность и заработай брейнрот-очки!</p>
          {wonGames.length > 0 && (
            <div className="mt-2 flex justify-center gap-2 flex-wrap">
              {wonGames.map(g => <span key={g} className="badge-roblox" style={{ background: "rgba(0,255,0,0.2)", color: "#00FF88", border: "1px solid rgba(0,255,0,0.4)" }}>✓ {g === "hunt" ? "Охота" : g === "battle" ? "Битва" : "Вихрь"}</span>)}
            </div>
          )}
        </div>

        {[
          { id: "hunt" as const, emoji: "🧠", title: "Охота за брейнротом", desc: "Лови брейнротов по всему экрану за 20 секунд! Редкие стоят больше.", reward: "до +2250 очков", color: "#9B59FF" },
          { id: "battle" as const, emoji: "🤪", title: "Битва с брейнротом", desc: "Пошаговая битва с Мегабрейнротом. Выбирай атаки и побеждай!", reward: "до +999 очков", color: "#FF00FF" },
          { id: "vortex" as const, emoji: "🌀", title: "Вихрь безумия", desc: "Тычь по летающим брейнротам пока не кончится время!", reward: "до +1500 очков", color: "#00A2FF" },
        ].map(mg => (
          <button key={mg.id} onClick={() => setMinigame(mg.id)}
            className="w-full text-left rounded-2xl p-4 transition-all hover:scale-102 active:scale-98 flex items-center gap-4"
            style={{ background: `${mg.color}18`, border: `2px solid ${mg.color}44` }}>
            <div className="text-5xl flex-shrink-0 animate-float">{mg.emoji}</div>
            <div className="flex-1">
              <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.1rem", color: mg.color }}>{mg.title}</div>
              <p className="text-white/60 text-xs font-semibold mt-0.5">{mg.desc}</p>
              <div className="mt-2 inline-block px-2 py-0.5 rounded-full text-xs font-black" style={{ background: `${mg.color}33`, color: mg.color }}>
                💎 {mg.reward}
              </div>
            </div>
            <Icon name="ChevronRight" size={20} style={{ color: mg.color, opacity: 0.7 }} />
          </button>
        ))}
      </div>
    </div>
  );
}

// ===== GENERIC WORLD SCREEN =====
function GenericWorldScreen({ world, onExit }: { world: typeof worlds[0]; onExit: () => void }) {
  const [phase, setPhase] = useState<"loading" | "playing">("loading");
  const [hp] = useState(100);
  const [score, setScore] = useState(0);
  const details = worldDetails[world.id];

  useState(() => {
    const t = setTimeout(() => setPhase("playing"), 2000);
    return () => clearTimeout(t);
  });

  if (phase === "loading") {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg,#0a0a1a,#1a0a3e,#0a1a3e)" }}>
        <div className="text-6xl mb-6 animate-bounce">🚀</div>
        <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.8rem" }} className="shimmer-text mb-2">Загружаем мир...</h2>
        <p className="text-white/60 font-semibold mb-8">{world.name}</p>
        <div className="w-64 h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="quest-bar h-full animate-pulse" style={{ width: "70%" }} />
        </div>
        <p className="text-xs text-white/40 font-bold mt-3">Телепортация игрока...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "linear-gradient(180deg,#0a0a1a 0%,#0d1b4b 100%)" }}>
      <div className="absolute inset-0 opacity-20">
        <img src={world.img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.95) 0%, rgba(5,10,30,0.6) 60%, rgba(5,10,30,0.8) 100%)" }} />

      <div className="relative z-10 p-4 flex items-center justify-between">
        <button onClick={onExit} className="flex items-center gap-2 px-3 py-2 rounded-xl font-black text-sm" style={{ background: "rgba(255,68,68,0.2)", color: "#FF4444", border: "1px solid rgba(255,68,68,0.4)" }}>
          <Icon name="LogOut" size={14} /> Выйти
        </button>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.1rem" }} className="text-white">{world.name}</div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,215,0,0.15)", border: "1.5px solid rgba(255,215,0,0.4)" }}>
          <span className="text-xs text-yellow-400 font-black">⭐ {score}</span>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 gap-4">
        <div className="relative animate-float">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{ background: "linear-gradient(135deg,#9B59FF,#00A2FF)", boxShadow: "0 0 30px rgba(155,89,255,0.5)" }}>🧑</div>
          <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-black" style={{ background: "#FFD700", color: "#1a1200" }}>ЛВЛ 23</div>
        </div>
        <div className="w-48">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-red-400 font-black">❤️ HP</span>
            <span className="text-white font-bold">{hp}/100</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="h-full rounded-full" style={{ width: `${hp}%`, background: "linear-gradient(90deg,#FF4444,#FF8C00)" }} />
          </div>
        </div>
        <div className="w-full max-w-sm space-y-2">
          {details.events.map((ev, i) => (
            <button key={ev} onClick={() => setScore(s => s + (i + 1) * 10)}
              className="w-full p-3 rounded-xl font-black text-sm text-white text-left flex items-center gap-3 transition-all active:scale-95"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span className="text-xl">{ev.split(" ")[0]}</span>
              <div>
                <div className="font-black">{ev.slice(ev.indexOf(" ") + 1)}</div>
                <div className="text-xs text-white/50 font-semibold">+{(i + 1) * 10} очков</div>
              </div>
              <Icon name="ChevronRight" size={16} className="ml-auto opacity-50" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 p-4">
        <div className="roblox-card p-3 flex items-center justify-between">
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-semibold">Опасность</div>
            <div className="font-black text-sm" style={{ color: details.danger === "Нет" ? "#00CC44" : details.danger === "Низкая" ? "#00A2FF" : details.danger === "Средняя" ? "#FFD700" : "#FF8C00" }}>{details.danger}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-semibold">Игроков</div>
            <div className="font-black text-sm text-white">👥 {world.players.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-semibold">Награды</div>
            <div className="font-black text-sm text-yellow-400">{details.rewards[0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorldScreen({ world, onExit }: { world: typeof worlds[0]; onExit: () => void }) {
  if (world.id === 5) return <BrainrotWorld onExit={onExit} />;
  return <GenericWorldScreen world={world} onExit={onExit} />;
}

function WorldsTab({ worlds }: { worlds: typeof worlds }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeWorld, setActiveWorld] = useState<typeof worlds[0] | null>(null);

  if (activeWorld) {
    return <WorldScreen world={activeWorld} onExit={() => setActiveWorld(null)} />;
  }

  return (
    <div className="space-y-5 animate-slide-up">
      <div>
        <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.6rem" }} className="text-white">🌍 Игровые Миры</h2>
        <p className="text-muted-foreground text-sm font-semibold">Выбери мир для приключений</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {worlds.map(world => (
          <div key={world.id} className="world-card" style={{ height: 220 }} onClick={() => setSelected(selected === world.id ? null : world.id)}>
            <img src={world.img} alt={world.name} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 z-10">
              <span className="badge-roblox text-white" style={{ background: world.tagColor }}>
                {world.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
              <h3 className="font-black text-white text-lg leading-tight">{world.name}</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-white/80 font-bold">👥 {world.players.toLocaleString()}</span>
                <span className="text-xs text-yellow-400 font-bold">⭐ {world.rating}</span>
              </div>
              {selected === world.id && (
                <button
                  onClick={e => { e.stopPropagation(); setActiveWorld(world); }}
                  className="mt-3 w-full py-2 rounded-xl font-black text-sm transition-all animate-bounce-in hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }}>
                  🚀 Войти в мир!
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="roblox-card p-4">
        <h3 className="font-black text-white mb-3">🔥 Сейчас в сети</h3>
        <div className="flex items-center gap-4">
          {[
            { value: "14,858", label: "Игроков", color: "#00CC44" },
            { value: "5", label: "Миров", color: "#00A2FF" },
            { value: "24/7", label: "Онлайн", color: "#FFD700" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && <div className="h-10 w-px bg-border" />}
              <div className="text-center">
                <div className="font-black text-2xl" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-muted-foreground font-semibold">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopTab({ items, packs, inventory, setInventory }: { items: typeof shopItems; packs: typeof robuxPacks; inventory: number[]; setInventory: (v: number[]) => void; robux: number }) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = ["Все", "Шапки", "Оружие", "Тело", "Спина", "Ноги", "Лицо"];
  const filtered = activeCategory === "Все" ? items : items.filter(i => i.category === activeCategory);

  return (
    <div className="space-y-5 animate-slide-up">
      <div>
        <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.6rem" }} className="text-white">🛒 Магазин</h2>
        <p className="text-muted-foreground text-sm font-semibold">Уникальные предметы для твоего аватара</p>
      </div>

      <div className="roblox-card p-4">
        <h3 className="font-black text-white mb-3">💎 Пополнить Robux</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {packs.map(pack => (
            <button key={pack.amount} className={`p-3 rounded-xl bg-gradient-to-b ${pack.color} text-white text-center transition-all hover:scale-105 hover:shadow-lg`}>
              <div className="font-black text-lg">{pack.amount}</div>
              <div className="text-xs opacity-80 font-bold">ROBUX</div>
              {pack.bonus && <div className="text-xs font-black mt-1 bg-white/20 rounded px-1">{pack.bonus}</div>}
              <div className="mt-2 font-black text-sm">{pack.price}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-black transition-all"
            style={activeCategory === cat
              ? { background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }
              : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filtered.map(item => {
          const owned = inventory.includes(item.id);
          return (
            <div key={item.id} className="roblox-card p-4 flex flex-col items-center text-center">
              <div className="text-5xl mb-2 animate-float" style={{ animationDelay: `${item.id * 0.3}s` }}>{item.emoji}</div>
              <div className="font-black text-sm text-white mb-0.5">{item.name}</div>
              <div className="text-xs text-muted-foreground font-semibold mb-3">{item.category}</div>
              {item.oldPrice && (
                <div className="text-xs text-muted-foreground line-through mb-0.5">{item.oldPrice} 💎</div>
              )}
              <button
                onClick={() => !owned && setInventory([...inventory, item.id])}
                className={`w-full py-2 rounded-xl font-black text-sm transition-all ${owned ? "cursor-default" : "hover:scale-105"}`}
                style={owned
                  ? { background: "rgba(0,204,68,0.2)", color: "#00CC44", border: "1px solid rgba(0,204,68,0.4)" }
                  : { background: `linear-gradient(135deg,${item.color}aa,${item.color})`, color: "white" }}>
                {owned ? "✓ Куплено" : `${item.price} 💎`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProfileTab({ level, xp, maxXp, robux, quests, inventory, items }: { level: number; xp: number; maxXp: number; robux: number; quests: typeof quests; inventory: number[]; items: typeof shopItems }) {
  const xpPct = Math.round((xp / maxXp) * 100);
  const ownedItems = items.filter(i => inventory.includes(i.id));

  const stats = [
    { label: "Побед", value: "147", emoji: "🏆" },
    { label: "Смертей", value: "43", emoji: "💀" },
    { label: "Убийств", value: "312", emoji: "⚔️" },
    { label: "Часов", value: "89", emoji: "⏰" },
    { label: "Миров", value: "4", emoji: "🌍" },
    { label: "Друзей", value: "5", emoji: "👥" },
  ];

  return (
    <div className="space-y-5 animate-slide-up">
      <div className="roblox-card p-6 text-center" style={{ background: "linear-gradient(135deg, #1a1f5e, #0d1b4b)" }}>
        <div className="w-24 h-24 rounded-2xl mx-auto mb-3 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg,#9B59FF,#00A2FF)" }}>
          🧑
        </div>
        <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem" }} className="text-white">КорольИгрок</h2>
        <p className="text-muted-foreground text-sm font-semibold">@kingplayer2025</p>

        <div className="flex justify-center gap-4 mt-3">
          <div className="text-center">
            <div className="font-black text-lg text-yellow-400">⭐ {level}</div>
            <div className="text-xs text-muted-foreground font-semibold">Уровень</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="font-black text-lg text-blue-400">💎 {robux.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground font-semibold">Robux</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground font-bold">XP: {xp.toLocaleString()}</span>
            <span className="text-yellow-400 font-bold">{maxXp.toLocaleString()}</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="quest-bar h-full animate-pulse-glow" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.3rem" }} className="text-white mb-3">📊 Статистика</h3>
        <div className="grid grid-cols-3 gap-3">
          {stats.map(s => (
            <div key={s.label} className="roblox-card p-3 text-center">
              <div className="text-xl mb-1">{s.emoji}</div>
              <div className="font-black text-base text-white">{s.value}</div>
              <div className="text-xs text-muted-foreground font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.3rem" }} className="text-white mb-3">🎒 Инвентарь ({ownedItems.length})</h3>
        {ownedItems.length === 0 ? (
          <div className="roblox-card p-8 text-center">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-muted-foreground font-semibold">Инвентарь пуст — загляни в магазин!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {ownedItems.map(item => (
              <div key={item.id} className="roblox-card p-3 text-center">
                <div className="text-3xl mb-1">{item.emoji}</div>
                <div className="text-xs font-black text-white">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.category}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.3rem" }} className="text-white mb-3">🏅 Достижения</h3>
        <div className="space-y-2">
          {quests.filter(q => q.done).map(q => (
            <div key={q.id} className="roblox-card p-3 flex items-center gap-3">
              <div className="text-2xl">{q.icon}</div>
              <div className="flex-1">
                <div className="font-black text-sm text-white">{q.title}</div>
                <div className="text-xs text-muted-foreground">{q.desc}</div>
              </div>
              <span className="badge-roblox" style={{ background: "rgba(255,215,0,0.2)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.4)" }}>
                +{q.reward} 💎
              </span>
            </div>
          ))}
          {quests.filter(q => q.done).length === 0 && (
            <div className="roblox-card p-6 text-center">
              <p className="text-muted-foreground font-semibold">Пока нет достижений — выполняй квесты!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FriendsTab({ friends, onlineFriends }: { friends: typeof friends; onlineFriends: number }) {
  const [search, setSearch] = useState("");
  const filtered = friends.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

  const statusColor: Record<string, string> = {
    online: "#00CC44",
    offline: "#666",
    away: "#FF8C00",
  };

  const statusLabel: Record<string, string> = {
    online: "В сети",
    offline: "Не в сети",
    away: "Отошёл",
  };

  return (
    <div className="space-y-5 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.6rem" }} className="text-white">👥 Друзья</h2>
          <p className="text-muted-foreground text-sm font-semibold">{onlineFriends} из {friends.length} онлайн</p>
        </div>
        <button className="px-4 py-2 rounded-xl font-black text-sm transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#9B59FF,#00A2FF)", color: "white" }}>
          + Добавить
        </button>
      </div>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Найти друга..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl font-semibold text-sm outline-none"
          style={{ background: "hsl(var(--muted))", color: "white", border: "1.5px solid hsl(var(--border))" }}
        />
      </div>

      <div className="space-y-3">
        {filtered.map(friend => (
          <div key={friend.id} className="roblox-card p-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg, hsl(var(--muted)), hsl(220 40% 28%))" }}>
                {friend.avatar}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background" style={{ background: statusColor[friend.status] }} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm text-white truncate">{friend.name}</span>
                <span className="badge-roblox flex-shrink-0" style={{ background: "rgba(155,89,255,0.2)", color: "#9B59FF", border: "1px solid rgba(155,89,255,0.4)" }}>
                  Ур. {friend.level}
                </span>
              </div>
              <div className="text-xs font-semibold mt-0.5" style={{ color: statusColor[friend.status] }}>
                {statusLabel[friend.status]}
                {friend.world && <span className="text-muted-foreground"> · {friend.world}</span>}
              </div>
            </div>

            <div className="flex gap-2">
              {friend.status === "online" && (
                <button className="px-3 py-1.5 rounded-lg font-black text-xs transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#00CC44,#00A855)", color: "white" }}>
                  Играть
                </button>
              )}
              <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-105" style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}>
                <Icon name="MessageCircle" size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="roblox-card p-5 text-center" style={{ border: "2px dashed hsl(var(--border))" }}>
        <div className="text-3xl mb-2 animate-float">🎮</div>
        <h3 className="font-black text-white mb-1">Позови друзей!</h3>
        <p className="text-muted-foreground text-sm font-semibold mb-3">Играй вместе и получай бонусные монеты</p>
        <button className="px-6 py-2 rounded-xl font-black text-sm transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }}>
          📋 Скопировать ссылку
        </button>
      </div>
    </div>
  );
}