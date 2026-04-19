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

function WorldsTab({ worlds }: { worlds: typeof worlds }) {
  const [selected, setSelected] = useState<number | null>(null);

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
                <button className="mt-3 w-full py-2 rounded-xl font-black text-sm transition-all animate-bounce-in" style={{ background: "linear-gradient(135deg,#FFD700,#FF8C00)", color: "#1a1200" }}>
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
            { value: "4,858", label: "Игроков", color: "#00CC44" },
            { value: "4", label: "Миров", color: "#00A2FF" },
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