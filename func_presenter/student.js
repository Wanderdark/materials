/* ================================================================
   STUDENT GAME LAYER v3 — word_crush-grade systems adapted for the
   Grammar Presenter: anime avatar creation with profanity filter,
   claim-based achievements + chain badges, military rank ladder,
   3-tier daily quests, word_crush toast stack (ui/toast.js, verbatim).
   Activates ONLY via ?mode=student (site homepage "I'm a Student").
   Teacher entry (?mode=teacher) or direct URL: module exits at once.
   Shared assets: ../word_overlord/avatars, ../word_overlord/ranks,
   ../word_crush/sounds/star.mp3, ../word_crush/badges,
   ../modules/profanity-filter.js, toast.js (ToastManager).
   ================================================================ */
(() => {
  "use strict";

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");
  if (mode === "student") sessionStorage.setItem("fpStudentMode", "1");
  if (mode === "teacher") sessionStorage.removeItem("fpStudentMode");
  if (sessionStorage.getItem("fpStudentMode") !== "1") return;

  const STORE_KEY = "fpStudentProfile";
  const AVATARS = ["Blaze", "Frost", "Grace", "Louis", "Mara", "Nova", "Orion", "Pixie", "Rex", "Terra"];
  const FLIPPED_AVATARS = new Set(["Nova", "Terra"]);
  const AVATAR_BASE = "../word_overlord/avatars/";
  const avatarPath = (name, size = "head") => `${AVATAR_BASE}AV_Anime_${name}${size === "head" ? "_head" : ""}.webp`;
  const STAR_SOUND = "../word_crush/sounds/star.mp3";
  const BADGE_BASE = "../word_crush/badges/";
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const playStar = () => new Audio(STAR_SOUND).play().catch(() => {});

  /* ---------- Ranks (word_overlord military ladder, rescaled + 3x spaced) ---------- */
  const RANKS = [
    { name: "FULL GENERAL",       tr: "Orgeneral",  img: "marshall",           threshold: 6000 },
    { name: "LIEUTENANT GENERAL", tr: "Korgeneral", img: "full_general",       threshold: 4500 },
    { name: "MAJOR GENERAL",      tr: "Tümgeneral", img: "major_general",      threshold: 3300 },
    { name: "BRIGADIER GENERAL",  tr: "Tuğgeneral", img: "lieutenant_general", threshold: 2400 },
    { name: "COLONEL",            tr: "Albay",      img: "colonel",            threshold: 1650 },
    { name: "LIEUTENANT COLONEL", tr: "Yarbay",     img: "lieutenant_colonel", threshold: 1080 },
    { name: "MAJOR",              tr: "Binbaşı",    img: "major",              threshold: 660 },
    { name: "CAPTAIN",            tr: "Yüzbaşı",    img: "captain",            threshold: 360 },
    { name: "FIRST LIEUTENANT",   tr: "Üsteğmen",   img: "firstlieutenant",    threshold: 180 },
    { name: "LIEUTENANT",         tr: "Teğmen",     img: "lieutenant",         threshold: 75 },
    { name: "SECOND LIEUTENANT",  tr: "Asteğmen",   img: "second_lieutenant",  threshold: 0 }
  ];
  const rankImg = (rank) => `../word_overlord/ranks/${rank.img}.webp`;
  const getRank = (score) => RANKS.find((rank) => score >= rank.threshold) || RANKS[RANKS.length - 1];
  const getNextRank = (score) => [...RANKS].reverse().find((rank) => rank.threshold > score) || null;

  /* ---------- Achievements (claim-based, word_crush style) ---------- */
  const ACHIEVEMENTS = [
    { id: "hero", group: "FIRST STEPS", icon: "🎭", title: "New Hero", desc: "Create your character.", reward: 5, test: (p) => Boolean(p.name), progress: (p) => [p.name ? 1 : 0, 1] },
    { id: "first", group: "FIRST STEPS", icon: "⭐", title: "First Spark", desc: "Give your first correct answer.", reward: 2, test: (p) => p.correctTotal >= 1, progress: (p) => [p.correctTotal, 1] },
    { id: "warmup", group: "FIRST STEPS", icon: "🔆", title: "Warming Up", desc: "Give 25 correct answers.", reward: 5, test: (p) => p.correctTotal >= 25, progress: (p) => [p.correctTotal, 25] },
    { id: "c100", group: "SHARP MIND", icon: "🧠", title: "Sharp Mind", desc: "Give 100 correct answers.", reward: 10, test: (p) => p.correctTotal >= 100, progress: (p) => [p.correctTotal, 100] },
    { id: "c250", group: "SHARP MIND", icon: "🎓", title: "Grammar Student", desc: "Give 250 correct answers.", reward: 15, test: (p) => p.correctTotal >= 250, progress: (p) => [p.correctTotal, 250] },
    { id: "c500", group: "SHARP MIND", icon: "🦉", title: "Wise Owl", desc: "Give 500 correct answers.", reward: 25, test: (p) => p.correctTotal >= 500, progress: (p) => [p.correctTotal, 500] },
    { id: "c1000", group: "SHARP MIND", icon: "🌟", title: "Grammar Master", desc: "Give 1000 correct answers.", reward: 50, badge: "brilliant", test: (p) => p.correctTotal >= 1000, progress: (p) => [p.correctTotal, 1000] },
    { id: "p100", group: "TREASURE", icon: "🪙", title: "Coin Pouch", desc: "Reach 100 points.", reward: 10, test: (p) => p.points >= 100, progress: (p) => [p.points, 100] },
    { id: "p300", group: "TREASURE", icon: "💰", title: "Treasure Chest", desc: "Reach 300 points.", reward: 20, test: (p) => p.points >= 300, progress: (p) => [p.points, 300] },
    { id: "p700", group: "TREASURE", icon: "📦", title: "Big Stash", desc: "Reach 700 points.", reward: 35, test: (p) => p.points >= 700, progress: (p) => [p.points, 700] },
    { id: "p1500", group: "TREASURE", icon: "👑", title: "Royal Vault", desc: "Reach 1500 points.", reward: 60, badge: "perfection", test: (p) => p.points >= 1500, progress: (p) => [p.points, 1500] },
    { id: "s5", group: "ON FIRE", icon: "🔥", title: "Hot Streak", desc: "5 correct answers in a row.", reward: 5, test: (p) => p.bestStreak >= 5, progress: (p) => [p.bestStreak, 5] },
    { id: "s10", group: "ON FIRE", icon: "🚀", title: "Unstoppable", desc: "10 correct answers in a row.", reward: 10, test: (p) => p.bestStreak >= 10, progress: (p) => [p.bestStreak, 10] },
    { id: "s20", group: "ON FIRE", icon: "⚡", title: "Lightning Brain", desc: "20 correct answers in a row.", reward: 25, test: (p) => p.bestStreak >= 20, progress: (p) => [p.bestStreak, 20] },
    { id: "s35", group: "ON FIRE", icon: "☄️", title: "Comet Run", desc: "35 correct answers in a row.", reward: 50, badge: "speedy", test: (p) => p.bestStreak >= 35, progress: (p) => [p.bestStreak, 35] },
    { id: "t1", group: "QUESTS", icon: "📋", title: "First Quest", desc: "Claim your first daily quest.", reward: 5, test: (p) => p.tasksClaimed >= 1, progress: (p) => [p.tasksClaimed, 1] },
    { id: "t10", group: "QUESTS", icon: "📅", title: "Quest Hunter", desc: "Claim 10 daily quests.", reward: 15, test: (p) => p.tasksClaimed >= 10, progress: (p) => [p.tasksClaimed, 10] },
    { id: "t30", group: "QUESTS", icon: "🗓️", title: "Quest Legend", desc: "Claim 30 daily quests.", reward: 30, badge: "star", test: (p) => p.tasksClaimed >= 30, progress: (p) => [p.tasksClaimed, 30] },
    { id: "m3", group: "QUESTS", icon: "🏅", title: "Perfect Days", desc: "Finish all 3 quests on 3 different days.", reward: 25, test: (p) => p.dailyMasterCount >= 3, progress: (p) => [p.dailyMasterCount, 3] },
    { id: "d3", group: "LOYALTY", icon: "🌱", title: "Coming Back", desc: "Play on 3 different days.", reward: 10, test: (p) => p.daysPlayed.length >= 3, progress: (p) => [p.daysPlayed.length, 3] },
    { id: "d7", group: "LOYALTY", icon: "🌿", title: "Regular", desc: "Play on 7 different days.", reward: 20, test: (p) => p.daysPlayed.length >= 7, progress: (p) => [p.daysPlayed.length, 7] },
    { id: "d15", group: "LOYALTY", icon: "🌳", title: "True Explorer", desc: "Play on 15 different days.", reward: 40, badge: "untouchable", test: (p) => p.daysPlayed.length >= 15, progress: (p) => [p.daysPlayed.length, 15] },
    { id: "comeback", group: "SECRET", icon: "🃏", title: "Comeback Kid", desc: "Answer correctly right after 3 wrong answers.", reward: 10, secret: true, test: (p) => Boolean(p.comebackDone), progress: (p) => [p.comebackDone ? 1 : 0, 1] }
  ];

  /* ---------- Daily quests (3 tiers, date-hash selection) ---------- */
  const QUEST_POOLS = {
    easy: [
      { id: "e-c6", row: "correct", metric: "correct", label: "Give 6 correct answers", target: 6 },
      { id: "e-p10", row: "points", metric: "points", label: "Earn 10 points", target: 10 },
      { id: "e-s3", row: "streak", metric: "streak", label: "Get 3 correct in a row", target: 3 },
      { id: "e-c9", row: "correct", metric: "correct", label: "Give 9 correct answers", target: 9 }
    ],
    medium: [
      { id: "m-c15", row: "correct", metric: "correct", label: "Give 15 correct answers", target: 15 },
      { id: "m-p20", row: "points", metric: "points", label: "Earn 20 points", target: 20 },
      { id: "m-s6", row: "streak", metric: "streak", label: "Get 6 correct in a row", target: 6 },
      { id: "m-p25", row: "points", metric: "points", label: "Earn 25 points", target: 25 }
    ],
    hard: [
      { id: "h-c30", row: "correct", metric: "correct", label: "Give 30 correct answers", target: 30 },
      { id: "h-p40", row: "points", metric: "points", label: "Earn 40 points", target: 40 },
      { id: "h-s10", row: "streak", metric: "streak", label: "Get 10 correct in a row", target: 10 },
      { id: "h-c40", row: "correct", metric: "correct", label: "Give 40 correct answers", target: 40 }
    ]
  };
  const TIER_REWARDS = { easy: 5, medium: 12, hard: 25 };
  const TIER_LABELS = { easy: "EASY", medium: "MEDIUM", hard: "HARD" };

  function hashString(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    return Math.abs(hash);
  }

  /* ---------- Profile ---------- */
  function defaultProfile() {
    return {
      version: 2,
      name: "",
      avatar: "",
      points: 0,
      correctTotal: 0,
      wrongTotal: 0,
      streak: 0,
      bestStreak: 0,
      wrongRun: 0,
      comebackDone: false,
      tasksClaimed: 0,
      dailyMasterCount: 0,
      daysPlayed: [],
      unlocked: [],
      claimed: [],
      lastRank: "SPARK",
      daily: null
    };
  }

  let achFilter = "active";
  let profile = defaultProfile();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      profile = { ...defaultProfile(), ...saved };
      if (saved.version !== 2) {
        // v1 migration: keep stats, old class-avatar slugs are invalid now.
        if (!AVATARS.includes(profile.avatar)) profile.avatar = "";
        profile.unlocked = [];
        profile.claimed = [];
        profile.daily = null;
        profile.version = 2;
        if (saved.achievements) delete profile.achievements;
      }
    }
  } catch { /* corrupt storage -> fresh profile */ }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(profile)); } catch { /* ignore */ }
  }

  function ensureDaily() {
    const key = todayKey();
    if (profile.daily?.date === key) return;
    const usedRows = new Set();
    const quests = {};
    ["easy", "medium", "hard"].forEach((tier) => {
      const pool = QUEST_POOLS[tier];
      let index = hashString(`${key}-${tier}`) % pool.length;
      for (let step = 0; step < pool.length && usedRows.has(pool[index].row); step += 1) index = (index + 1) % pool.length;
      usedRows.add(pool[index].row);
      quests[tier] = { ...pool[index], tier, claimed: false };
    });
    profile.daily = { date: key, pointsToday: 0, correctToday: 0, bestStreakToday: 0, quests, masterCounted: false };
    save();
  }

  function markDayPlayed() {
    const key = todayKey();
    if (!profile.daysPlayed.includes(key)) {
      profile.daysPlayed.push(key);
      if (profile.daysPlayed.length > 400) profile.daysPlayed = profile.daysPlayed.slice(-400);
    }
  }

  function questProgress(quest) {
    const daily = profile.daily;
    if (!daily) return 0;
    if (quest.metric === "points") return daily.pointsToday;
    if (quest.metric === "correct") return daily.correctToday;
    return daily.bestStreakToday;
  }

  const questReached = (quest) => questProgress(quest) >= quest.target;

  function hasClaimables() {
    ensureDaily();
    const questReady = Object.values(profile.daily.quests).some((quest) => !quest.claimed && questReached(quest));
    const achievementReady = profile.unlocked.some((id) => !profile.claimed.includes(id));
    return questReady || achievementReady;
  }

  /* ---------- CSS ---------- */
  const css = `
  .sg-hud { position: fixed; left: 14px; bottom: 92px; z-index: 90; display: flex; align-items: center; gap: 10px; padding: 7px 16px 7px 8px; border: 1px solid rgba(255, 216, 77, .45); border-radius: 999px; background: rgba(8, 16, 40, .94); cursor: pointer; box-shadow: 0 14px 34px rgba(0, 0, 0, .4); transition: transform .15s ease, border-color .15s ease; }
  .sg-hud:hover { transform: translateY(-2px); border-color: rgba(255, 216, 77, .85); }
  .sg-hud .sg-ava { position: relative; width: 42px; height: 42px; }
  .sg-hud .sg-ava img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 2px solid var(--u2-gold, #ffd84d); background: #0a142f; }
  .sg-hud .sg-ava .sg-alert { position: absolute; top: -3px; right: -3px; width: 13px; height: 13px; border-radius: 50%; border: 2px solid #08102a; background: var(--u2-gold, #ffd84d); box-shadow: 0 0 10px rgba(255, 216, 77, .9); display: none; }
  .sg-hud.has-claim .sg-ava .sg-alert { display: block; }
  .sg-hud .sg-name { color: #f4f7ff; font-weight: 900; font-size: 13px; letter-spacing: .04em; max-width: 110px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sg-hud .sg-points { color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 21px; font-weight: 800; line-height: 1; }
  .sg-hud .sg-points.bump { animation: sgBump .3s ease; }
  .sg-hud .sg-rank-mini { width: 30px; height: 30px; object-fit: contain; }
  @keyframes sgBump { 40% { transform: scale(1.35); } }
  .sg-flip { transform: scaleX(-1); }
  .sg-hud.sg-hidden { display: none; }
  .presentation-header:has(.sg-header-chip) { position: relative; padding-left: 262px; }
  .sg-header-chip { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 6px; border: 1px solid rgba(255, 216, 77, .45); border-radius: 999px; background: rgba(10, 20, 47, .85); cursor: pointer; transition: border-color .15s ease, box-shadow .15s ease; }
  .sg-header-chip:hover { border-color: rgba(255, 216, 77, .85); }
  .sg-header-chip.has-claim { border-color: rgba(255, 216, 77, .9); box-shadow: 0 0 14px rgba(255, 216, 77, .45); }
  .sg-header-chip img.sg-hava { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 2px solid var(--u2-gold, #ffd84d); background: #0a142f; }
  .sg-header-chip .sg-name { color: #f4f7ff; font-weight: 900; font-size: 12px; letter-spacing: .03em; max-width: 88px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sg-header-chip .sg-points { color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 19px; font-weight: 800; line-height: 1; }
  .sg-header-chip .sg-points.bump { animation: sgBump .3s ease; }
  .sg-header-chip .sg-rank-mini { width: 26px; height: 26px; object-fit: contain; }
  .sg-float { position: fixed; z-index: 430; transform: translate(-50%, 0); color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 44px; font-weight: 800; letter-spacing: .04em; text-shadow: 0 3px 14px rgba(0, 0, 0, .7), 0 0 26px rgba(255, 216, 77, .45); pointer-events: none; animation: sgFloat 1.25s ease-out forwards; }
  @keyframes sgFloat {
    0% { opacity: 0; transform: translate(-50%, 8px) scale(.7); }
    16% { opacity: 1; transform: translate(-50%, -14px) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -120px) scale(1); }
  }
  .sg-ach-tabs { display: flex; gap: 8px; }
  .sg-ach-tab { padding: 6px 14px; border: 1px solid #2b4084; border-radius: 999px; background: #101f47; color: #8fa6d9; font-size: 11px; font-weight: 900; letter-spacing: .08em; cursor: pointer; transition: border-color .15s ease, color .15s ease, background-color .15s ease; }
  .sg-ach-tab.active { border-color: rgba(255, 216, 77, .7); background: rgba(255, 216, 77, .1); color: var(--u2-gold, #ffd84d); }
  .sg-ach-empty { margin: 6px 0 0; color: #8fa6d9; font-size: 13px; font-weight: 700; }
  .sg-overlay { position: fixed; inset: 0; z-index: 400; display: flex; align-items: center; justify-content: center; padding: 24px; background: rgba(2, 7, 23, .88); }
  .sg-card { position: relative; width: min(780px, 100%); max-height: 92vh; overflow-y: auto; padding: clamp(24px, 4vh, 40px) clamp(20px, 3vw, 38px); border: 1px solid rgba(255, 216, 77, .4); border-radius: 26px; background: #0d1b39; box-shadow: 0 30px 80px rgba(0, 0, 0, .5); }
  .sg-kicker { margin: 0 0 6px; color: var(--u2-gold, #ffd84d); font-size: 12px; font-weight: 900; letter-spacing: .2em; }
  .sg-title { margin: 0 0 18px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(26px, 3vw, 38px); font-weight: 800; letter-spacing: .04em; }
  .sg-close { position: absolute; top: 14px; right: 14px; width: 40px; height: 40px; border: 1px solid #2b4084; border-radius: 12px; background: #12234e; color: #d9e4ff; font-size: 18px; font-weight: 900; cursor: pointer; }
  .sg-name-input { width: 100%; box-sizing: border-box; margin-bottom: 6px; padding: 14px 16px; border: 1px solid #2b4084; border-radius: 14px; background: #0a142f; color: #f4f7ff; font-size: 18px; font-weight: 800; }
  .sg-name-input:focus { outline: 2px solid var(--u2-gold, #ffd84d); }
  .sg-name-error { min-height: 18px; margin: 0 0 10px; color: #ff8066; font-size: 12.5px; font-weight: 800; }
  .sg-avatar-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; margin-bottom: 20px; }
  .sg-avatar { padding: 6px; border: 2px solid #2b4084; border-radius: 16px; background: #101f47; cursor: pointer; transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease; }
  .sg-avatar img { width: 100%; aspect-ratio: 1; border-radius: 12px; object-fit: cover; display: block; }
  .sg-avatar span { display: block; margin-top: 4px; color: #8fa6d9; font-size: 10px; font-weight: 900; letter-spacing: .1em; text-align: center; }
  .sg-avatar:hover { transform: translateY(-2px); border-color: #4a66c0; }
  .sg-avatar.selected { border-color: var(--u2-gold, #ffd84d); box-shadow: 0 0 20px rgba(255, 216, 77, .35); }
  .sg-avatar.selected span { color: var(--u2-gold, #ffd84d); }
  .sg-start { width: 100%; padding: 16px; border: 0; border-radius: 14px; background: var(--u2-grad-gold, #ffd84d); color: #14183a; font-family: var(--font-display, sans-serif); font-size: 20px; font-weight: 800; letter-spacing: .08em; cursor: pointer; }
  .sg-start:disabled { opacity: .35; cursor: not-allowed; }
  .sg-rank-card { display: flex; align-items: center; gap: 16px; padding: 14px 16px; margin-bottom: 16px; border: 1px solid rgba(255, 216, 77, .35); border-radius: 18px; background: linear-gradient(135deg, rgba(255, 216, 77, .10), rgba(10, 20, 47, 0) 60%), #0a142f; }
  .sg-rank-card img { width: 64px; height: 64px; object-fit: contain; }
  .sg-rank-card .sg-rank-name { display: block; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 24px; font-weight: 800; letter-spacing: .06em; }
  .sg-rank-card .sg-rank-next { display: block; margin-top: 3px; color: #8fa6d9; font-size: 11.5px; font-weight: 800; }
  .sg-rank-bar { height: 7px; margin-top: 7px; border-radius: 999px; background: #16295a; overflow: hidden; }
  .sg-rank-bar i { display: block; height: 100%; border-radius: inherit; background: var(--u2-grad-gold, #ffd84d); }
  .sg-profile-head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
  .sg-profile-head img { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 3px solid var(--u2-gold, #ffd84d); }
  .sg-profile-head strong { display: block; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 25px; font-weight: 800; letter-spacing: .04em; }
  .sg-stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
  .sg-stat { padding: 11px 8px; border: 1px solid rgba(143, 166, 255, .18); border-radius: 14px; background: #0a142f; text-align: center; }
  .sg-stat b { display: block; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 24px; font-weight: 800; line-height: 1.05; }
  .sg-stat span { color: #8fa6d9; font-size: 9.5px; font-weight: 900; letter-spacing: .12em; }
  .sg-section { display: flex; align-items: center; justify-content: space-between; margin: 4px 0 10px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 19px; font-weight: 800; letter-spacing: .08em; }
  .sg-quest { display: grid; gap: 7px; padding: 12px 14px; margin-bottom: 8px; border: 1px solid rgba(143, 166, 255, .18); border-radius: 14px; background: #0a142f; }
  .sg-quest.ready { border-color: rgba(255, 216, 77, .65); box-shadow: 0 0 18px rgba(255, 216, 77, .15); }
  .sg-quest.claimed { border-color: rgba(101, 230, 184, .5); opacity: .85; }
  .sg-quest-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .sg-quest-tier { flex: 0 0 auto; padding: 2px 9px; border-radius: 999px; font-size: 9.5px; font-weight: 900; letter-spacing: .12em; }
  .sg-quest-tier.easy { background: rgba(101, 230, 184, .16); color: #65e6b8; }
  .sg-quest-tier.medium { background: rgba(111, 181, 255, .16); color: #6fb5ff; }
  .sg-quest-tier.hard { background: rgba(255, 122, 200, .16); color: #ff7ac8; }
  .sg-quest-label { flex: 1; color: #d9e4ff; font-size: 13.5px; font-weight: 800; }
  .sg-quest.claimed .sg-quest-label { color: #65e6b8; }
  .sg-claim-btn { flex: 0 0 auto; padding: 7px 14px; border: 0; border-radius: 999px; background: var(--u2-grad-gold, #ffd84d); color: #14183a; font-size: 12px; font-weight: 900; letter-spacing: .05em; cursor: pointer; }
  .sg-claim-btn:hover { transform: translateY(-1px); }
  .sg-quest-status { flex: 0 0 auto; color: #8fa6d9; font-size: 12px; font-weight: 900; }
  .sg-quest.claimed .sg-quest-status { color: #65e6b8; }
  .sg-quest-bar { height: 6px; border-radius: 999px; background: #16295a; overflow: hidden; }
  .sg-quest-bar i { display: block; height: 100%; border-radius: inherit; background: var(--u2-grad-gold, #ffd84d); }
  .sg-quest.claimed .sg-quest-bar i { background: #65e6b8; }
  .sg-ach-group { margin: 14px 0 8px; color: #8fa6d9; font-size: 10.5px; font-weight: 900; letter-spacing: .18em; }
  .sg-ach-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; }
  .sg-ach { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid rgba(143, 166, 255, .18); border-radius: 14px; background: #0a142f; opacity: .45; }
  .sg-ach.unlocked { opacity: 1; border-color: rgba(255, 216, 77, .6); box-shadow: 0 0 16px rgba(255, 216, 77, .12); }
  .sg-ach.claimed { opacity: 1; border-color: rgba(101, 230, 184, .45); }
  .sg-ach em { flex: 0 0 auto; font-style: normal; font-size: 24px; }
  .sg-ach-body { flex: 1; min-width: 0; }
  .sg-ach strong { display: block; color: #f4f7ff; font-size: 12.5px; font-weight: 900; }
  .sg-ach span { display: block; color: #8fa6d9; font-size: 10.5px; font-weight: 700; line-height: 1.3; }
  .sg-ach-bar { height: 4px; margin-top: 5px; border-radius: 999px; background: #16295a; overflow: hidden; }
  .sg-ach-bar i { display: block; height: 100%; background: var(--u2-grad-gold, #ffd84d); }
  .sg-ach.claimed .sg-ach-bar i { background: #65e6b8; }
  .sg-ach .sg-done { flex: 0 0 auto; color: #65e6b8; font-size: 16px; font-weight: 900; }
  .sg-change { margin-top: 18px; padding: 12px 18px; border: 1px solid rgba(255, 216, 77, .45); border-radius: 12px; background: rgba(255, 216, 77, .07); color: var(--u2-gold, #ffd84d); font-weight: 900; letter-spacing: .05em; cursor: pointer; }
  .sg-badge-overlay { z-index: 410; }
  .sg-badge-card { display: flex; flex-direction: column; align-items: center; width: min(420px, 100%); text-align: center; }
  .sg-badge-card img { width: 160px; height: 160px; object-fit: contain; margin: 8px 0 14px; filter: drop-shadow(0 12px 30px rgba(255, 216, 77, .4)); }
  .sg-badge-card h2 { margin: 0 0 6px; }
  .sg-badge-card p { margin: 0 0 20px; color: #8fa6d9; font-size: 14px; font-weight: 700; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  /* ---------- UI helpers ---------- */
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  function showToast(message) {
    if (window.ToastManager) window.ToastManager.show(message);
  }

  function showBadgeReveal(achievement) {
    if (!achievement.badge) return;
    closeOverlays();
    const overlay = el("div", "sg-overlay sg-badge-overlay");
    const card = el("div", "sg-card sg-badge-card");
    card.append(
      el("p", "sg-kicker", "BADGE UNLOCKED"),
      el("img", "", ""),
      el("h2", "sg-title", achievement.title),
      el("p", "", achievement.desc)
    );
    card.querySelector("img").src = `${BADGE_BASE}${achievement.badge}.webp`;
    card.querySelector("img").alt = achievement.title;
    const ok = el("button", "sg-start", "AWESOME!");
    ok.type = "button";
    ok.addEventListener("click", closeOverlays);
    card.append(ok);
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlays(); });
    overlay.append(card);
    document.body.append(overlay);
  }

  const hud = el("button", "sg-hud");
  hud.type = "button";
  hud.innerHTML = `<span class="sg-ava"><img alt=""><i class="sg-alert"></i></span><span class="sg-name"></span><b class="sg-points">0</b><img class="sg-rank-mini" alt="">`;
  document.body.append(hud);

  const headerChip = el("button", "sg-header-chip");
  headerChip.type = "button";
  headerChip.innerHTML = `<img class="sg-hava" alt=""><span class="sg-name"></span><b class="sg-points">0</b><img class="sg-rank-mini" alt="">`;
  headerChip.addEventListener("click", () => openPanel());

  let lastPointer = null;
  document.addEventListener("pointerdown", (event) => {
    lastPointer = { x: event.clientX, y: event.clientY };
  }, true);

  const activeChip = () => (headerChip.isConnected ? headerChip : hud);

  function updateHud(bump = false) {
    const rank = getRank(profile.points);
    const claimable = hasClaimables();
    [hud, headerChip].forEach((chip) => {
      const avatarImg = chip.querySelector(".sg-ava img, img.sg-hava");
      if (avatarImg) {
        avatarImg.src = avatarPath(profile.avatar || AVATARS[0]);
        avatarImg.classList.toggle("sg-flip", FLIPPED_AVATARS.has(profile.avatar));
      }
      const nameEl = chip.querySelector(".sg-name");
      if (nameEl) nameEl.textContent = profile.name || "PLAYER";
      const rankMini = chip.querySelector(".sg-rank-mini");
      if (rankMini) rankMini.src = rankImg(rank);
      chip.classList.toggle("has-claim", claimable);
      const pointsEl = chip.querySelector(".sg-points");
      pointsEl.textContent = profile.points;
      if (bump) {
        pointsEl.classList.remove("bump");
        void pointsEl.offsetWidth;
        pointsEl.classList.add("bump");
      }
    });
  }

  function floatPoints(text) {
    let x;
    let y;
    if (lastPointer) {
      x = lastPointer.x;
      y = lastPointer.y - 16;
    } else {
      const rect = activeChip().getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top - 6;
    }
    const float = el("span", "sg-float", text);
    float.style.left = `${x}px`;
    float.style.top = `${y}px`;
    document.body.append(float);
    float.addEventListener("animationend", () => float.remove());
  }

  function syncChipPlacement() {
    const setup = document.getElementById("setupScreen");
    const onSetup = setup && !setup.classList.contains("hidden");
    if (onSetup) {
      headerChip.remove();
      hud.classList.remove("sg-hidden");
      return;
    }
    const section = [...document.querySelectorAll("main.app-shell > section")].find((node) => !node.classList.contains("hidden"));
    const header = section?.querySelector(".presentation-header");
    if (header) {
      if (headerChip.parentElement !== header) header.append(headerChip);
      hud.classList.add("sg-hidden");
    } else {
      headerChip.remove();
      hud.classList.remove("sg-hidden");
    }
  }

  const screenObserver = new MutationObserver(syncChipPlacement);
  document.querySelectorAll("main.app-shell > section").forEach((section) => {
    screenObserver.observe(section, { attributes: true, attributeFilter: ["class"] });
  });

  function closeOverlays() {
    document.querySelectorAll(".sg-overlay").forEach((node) => node.remove());
  }

  function checkRankUp() {
    const rank = getRank(profile.points);
    if (rank.name !== profile.lastRank) {
      const climbed = RANKS.findIndex((r) => r.name === rank.name) < RANKS.findIndex((r) => r.name === profile.lastRank);
      profile.lastRank = rank.name;
      save();
      if (climbed) {
        showToast(`⭐ RANK UP! You are now ${rank.name}!`);
        playStar();
      }
    }
  }

  /* ---------- Character creation ---------- */
  const NAME_ERRORS = {
    empty: "Please write your name.",
    too_long: "That name is too long (max 14).",
    invalid_characters: "Please use letters only.",
    inappropriate: "Please choose a nicer name 😅"
  };

  function openCreation() {
    closeOverlays();
    const overlay = el("div", "sg-overlay");
    const card = el("div", "sg-card");
    card.append(
      el("p", "sg-kicker", "STUDENT PROFILE"),
      el("h2", "sg-title", profile.name ? "Change your character" : "Create your character")
    );
    const input = document.createElement("input");
    input.className = "sg-name-input";
    input.maxLength = 14;
    input.placeholder = "Your name...";
    input.value = profile.name || "";
    const error = el("p", "sg-name-error", "");
    card.append(input, error);
    let selected = profile.avatar || "";
    const grid = el("div", "sg-avatar-grid");
    AVATARS.forEach((name) => {
      const flip = FLIPPED_AVATARS.has(name) ? " class=\"sg-flip\"" : "";
      const btn = el("button", `sg-avatar${name === selected ? " selected" : ""}`, `<img src="${avatarPath(name)}" alt="${name}"${flip}><span>${name.toUpperCase()}</span>`);
      btn.type = "button";
      btn.addEventListener("click", () => {
        selected = name;
        grid.querySelectorAll(".sg-avatar").forEach((node) => node.classList.remove("selected"));
        btn.classList.add("selected");
        refreshStart();
      });
      grid.append(btn);
    });
    card.append(grid);
    const start = el("button", "sg-start", profile.name ? "SAVE" : "START ADVENTURE");
    start.type = "button";
    const refreshStart = () => { start.disabled = !(input.value.trim() && selected); };
    refreshStart();
    input.addEventListener("input", () => { error.textContent = ""; refreshStart(); });
    start.addEventListener("click", () => {
      const name = input.value.trim();
      const check = window.ProfanityFilter
        ? window.ProfanityFilter.validate(name, { maxLength: 14 })
        : { valid: Boolean(name), reason: name ? null : "empty" };
      if (!check.valid) {
        error.textContent = NAME_ERRORS[check.reason] || NAME_ERRORS.invalid_characters;
        input.focus();
        return;
      }
      profile.name = name.toUpperCase();
      profile.avatar = selected;
      save();
      updateHud();
      closeOverlays();
      evaluateAchievements();
      updateHud();
    });
    card.append(start);
    overlay.append(card);
    document.body.append(overlay);
    input.focus();
  }

  /* ---------- Profile panel ---------- */
  function openPanel() {
    closeOverlays();
    ensureDaily();
    const overlay = el("div", "sg-overlay");
    const card = el("div", "sg-card");
    const close = el("button", "sg-close", "✕");
    close.type = "button";
    close.addEventListener("click", closeOverlays);
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlays(); });
    card.append(close, el("p", "sg-kicker", "STUDENT PROFILE"));

    const flip = FLIPPED_AVATARS.has(profile.avatar) ? " class=\"sg-flip\"" : "";
    card.append(el("div", "sg-profile-head", `
      <img src="${avatarPath(profile.avatar || AVATARS[0])}" alt=""${flip}>
      <div><strong>${profile.name || "PLAYER"}</strong></div>
    `));

    const rank = getRank(profile.points);
    const next = getNextRank(profile.points);
    const span = next ? next.threshold - rank.threshold : 1;
    const into = next ? profile.points - rank.threshold : 1;
    const percent = next ? Math.min(100, Math.round((into / span) * 100)) : 100;
    card.append(el("div", "sg-rank-card", `
      <img src="${rankImg(rank)}" alt="">
      <div style="flex:1;min-width:0">
        <span class="sg-rank-name">${rank.name} <small style="font-size:.55em;opacity:.7">(${rank.tr})</small></span>
        <span class="sg-rank-next">${next ? `${next.threshold - profile.points} points to ${next.name}` : "Highest rank reached!"}</span>
        <div class="sg-rank-bar"><i style="width:${percent}%"></i></div>
      </div>
    `));

    card.append(el("div", "sg-stat-row", `
      <div class="sg-stat"><b>${profile.points}</b><span>POINTS</span></div>
      <div class="sg-stat"><b>${profile.correctTotal}</b><span>CORRECT</span></div>
      <div class="sg-stat"><b>${profile.bestStreak}</b><span>BEST STREAK</span></div>
      <div class="sg-stat"><b>${profile.daysPlayed.length}</b><span>DAYS</span></div>
    `));

    card.append(el("h3", "sg-section", "📅 DAILY QUESTS"));
    ["easy", "medium", "hard"].forEach((tier) => {
      const quest = profile.daily.quests[tier];
      const progress = Math.min(questProgress(quest), quest.target);
      const percentQ = Math.round((progress / quest.target) * 100);
      const ready = !quest.claimed && questReached(quest);
      const row = el("div", `sg-quest${quest.claimed ? " claimed" : ready ? " ready" : ""}`);
      const top = el("div", "sg-quest-top", `
        <span class="sg-quest-tier ${tier}">${TIER_LABELS[tier]}</span>
        <span class="sg-quest-label">${quest.label}</span>
      `);
      if (ready) {
        const claim = el("button", "sg-claim-btn", `CLAIM +${TIER_REWARDS[tier]}`);
        claim.type = "button";
        claim.addEventListener("click", () => claimQuest(tier));
        top.append(claim);
      } else {
        top.append(el("span", "sg-quest-status", quest.claimed ? `✓ +${TIER_REWARDS[tier]}` : `${progress} / ${quest.target}`));
      }
      row.append(top, el("div", "sg-quest-bar", `<i style="width:${quest.claimed ? 100 : percentQ}%"></i>`));
      card.append(row);
    });

    const achHeading = el("h3", "sg-section");
    achHeading.append(el("span", "", "🏆 ACHIEVEMENTS"));
    const tabs = el("div", "sg-ach-tabs");
    const achWrap = el("div", "");
    const tabActive = el("button", "sg-ach-tab", "ACTIVE");
    const tabCompleted = el("button", "sg-ach-tab", "COMPLETED");
    tabActive.type = "button";
    tabCompleted.type = "button";
    tabs.append(tabActive, tabCompleted);
    achHeading.append(tabs);
    card.append(achHeading, achWrap);

    const renderAchievements = () => {
      tabActive.classList.toggle("active", achFilter === "active");
      tabCompleted.classList.toggle("active", achFilter === "completed");
      achWrap.replaceChildren();
      let shown = 0;
      const groups = [...new Set(ACHIEVEMENTS.map((a) => a.group))];
      groups.forEach((group) => {
        const items = ACHIEVEMENTS.filter((achievement) => {
          const claimed = profile.claimed.includes(achievement.id);
          return achievement.group === group && (achFilter === "completed" ? claimed : !claimed);
        });
        if (!items.length) return;
        achWrap.append(el("div", "sg-ach-group", group));
        const grid = el("div", "sg-ach-grid");
        items.forEach((achievement) => {
          const unlocked = profile.unlocked.includes(achievement.id);
          const claimed = profile.claimed.includes(achievement.id);
          const [value, target] = achievement.progress(profile);
          const percentA = Math.min(100, Math.round((Math.min(value, target) / target) * 100));
          const hidden = achievement.secret && !unlocked;
          const row = el("div", `sg-ach${claimed ? " claimed" : unlocked ? " unlocked" : ""}`);
          row.append(el("em", "", hidden ? "❓" : achievement.icon));
          row.append(el("div", "sg-ach-body", `
            <strong>${hidden ? "???" : achievement.title}${!hidden && achievement.badge ? " 🎖️" : ""}</strong>
            <span>${hidden ? "Secret achievement" : achievement.desc}</span>
            <div class="sg-ach-bar"><i style="width:${claimed ? 100 : percentA}%"></i></div>
          `));
          if (unlocked && !claimed) {
            const claim = el("button", "sg-claim-btn", `+${achievement.reward}`);
            claim.type = "button";
            claim.addEventListener("click", () => claimAchievement(achievement.id));
            row.append(claim);
          } else if (claimed) {
            row.append(el("span", "sg-done", "✓"));
          }
          grid.append(row);
          shown += 1;
        });
        achWrap.append(grid);
      });
      if (!shown) {
        achWrap.append(el("p", "sg-ach-empty", achFilter === "completed"
          ? "No completed achievements yet. Keep playing!"
          : "All achievements completed! 🎉"));
      }
    };
    tabActive.addEventListener("click", () => { achFilter = "active"; renderAchievements(); });
    tabCompleted.addEventListener("click", () => { achFilter = "completed"; renderAchievements(); });
    renderAchievements();

    const change = el("button", "sg-change", "CHANGE CHARACTER");
    change.type = "button";
    change.addEventListener("click", openCreation);
    card.append(change);
    overlay.append(card);
    document.body.append(overlay);
  }

  hud.addEventListener("click", openPanel);

  /* ---------- Claims ---------- */
  function claimQuest(tier) {
    const quest = profile.daily.quests[tier];
    if (!quest || quest.claimed || !questReached(quest)) return;
    quest.claimed = true;
    profile.points += TIER_REWARDS[tier];
    profile.daily.pointsToday += TIER_REWARDS[tier];
    profile.tasksClaimed += 1;
    if (!profile.daily.masterCounted && Object.values(profile.daily.quests).every((q) => q.claimed)) {
      profile.daily.masterCounted = true;
      profile.dailyMasterCount += 1;
    }
    save();
    playStar();
    floatPoints(`+${TIER_REWARDS[tier]}`);
    evaluateAchievements();
    checkRankUp();
    updateHud(true);
    openPanel();
  }

  function claimAchievement(id) {
    const achievement = ACHIEVEMENTS.find((a) => a.id === id);
    if (!achievement || profile.claimed.includes(id) || !profile.unlocked.includes(id)) return;
    profile.claimed.push(id);
    profile.points += achievement.reward;
    if (profile.daily) profile.daily.pointsToday += achievement.reward;
    save();
    playStar();
    floatPoints(`+${achievement.reward}`);
    evaluateAchievements();
    checkRankUp();
    updateHud(true);
    if (achievement.badge) showBadgeReveal(achievement);
    else openPanel();
  }

  /* ---------- Progress engine ---------- */
  function evaluateAchievements() {
    ACHIEVEMENTS.forEach((achievement) => {
      if (!profile.unlocked.includes(achievement.id) && achievement.test(profile)) {
        profile.unlocked.push(achievement.id);
        showToast(`${achievement.icon} ${achievement.title} · READY TO CLAIM`);
      }
    });
    save();
  }

  function notifyReadyQuests() {
    Object.values(profile.daily.quests).forEach((quest) => {
      if (!quest.claimed && !quest.notified && questReached(quest)) {
        quest.notified = true;
        showToast(`📅 Quest ready: ${quest.label}`);
      }
    });
  }

  window.StudentGame = {
    onCorrect() {
      ensureDaily();
      markDayPlayed();
      profile.points += 1;
      profile.correctTotal += 1;
      profile.streak += 1;
      profile.bestStreak = Math.max(profile.bestStreak, profile.streak);
      if (profile.wrongRun >= 3) profile.comebackDone = true;
      profile.wrongRun = 0;
      profile.daily.pointsToday += 1;
      profile.daily.correctToday += 1;
      profile.daily.bestStreakToday = Math.max(profile.daily.bestStreakToday, profile.streak);
      floatPoints("+1");
      notifyReadyQuests();
      evaluateAchievements();
      checkRankUp();
      updateHud(true);
    },
    onWrong() {
      profile.streak = 0;
      profile.wrongTotal += 1;
      profile.wrongRun += 1;
      save();
    }
  };

  /* ---------- Boot ---------- */
  ensureDaily();
  syncChipPlacement();
  updateHud();
  if (!profile.name || !profile.avatar) openCreation();
  else evaluateAchievements();
  updateHud();
})();
