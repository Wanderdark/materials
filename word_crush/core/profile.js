(function () {
  const SAVE_KEY = "word_crush_sp_v1";
  const AVATAR_BASE = "../word_overlord/";
  const AVATARS = ["Blaze", "Frost", "Grace", "Louis", "Mara", "Nova", "Orion", "Pixie", "Rex", "Terra"];
  const BAD_NAMES = [
    "FUCK", "SHIT", "BITCH", "CUNT", "COCK", "DICK", "PUSSY", "NIGGER", "FAGGOT", "WHORE",
    "SLUT", "PORN", "SEX", "NUDE", "NAKED", "PENIS", "VAGINA", "RAPE", "OROSPU", "YARRAK",
    "SIK", "SIKTIR", "AMK", "AQ", "GOT", "AMCIK", "BOK", "IBNE", "GAVAT", "KAHPE",
    "SEREFSIZ", "PIC", "OC", "TOP", "MEME"
  ];
  const SHORT_BAD_TOKENS = ["AM", "OC", "AQ", "MK", "SG"];
  const COMPACT_BAD_PATTERNS = [
    "AMBITI",
    "AMYALAMA",
    "AMYALA",
    "AMGOT",
    "AMK",
    "AMCIK",
    "AMINA",
    "AMINI",
    "AMINAK",
    "AMINAKOY",
    "AMINAKOYIM"
  ];

  let save = load();
  let draft = save.profile ? { ...save.profile } : { name: "", avatar: "Blaze", grade: 6 };

  function fresh() {
    return {
      version: 1,
      profile: null,
      stats: {
        totalScore: 0,
        bestScore: 0,
        runsCompleted: 0,
        totalCorrect: 0,
        totalWrong: 0,
        bestStreak: 0,
        perfectRuns: 0,
        dailyBoardsCompleted: 0,
        quickRunsCompleted: 0
      },
      campaign: {
        unlockedLevel: 1,
        levels: {}
      },
      daily: null,
      achievementScore: 0,
      unlockedAchievements: [],
      claimedAchievements: [],
      chainStartStats: {},
      uuid: null
    };
  }

  function load() {
    try {
      const data = { ...fresh(), ...JSON.parse(localStorage.getItem(SAVE_KEY) || "{}") };
      data.stats = { ...fresh().stats, ...(data.stats || {}) };
      data.campaign = { ...fresh().campaign, ...(data.campaign || {}) };
      data.campaign.levels = data.campaign.levels || {};
      if (data.profile && !data.profile.grade) data.profile.grade = 6;
      if (!Array.isArray(data.unlockedAchievements)) data.unlockedAchievements = [];
      if (!Array.isArray(data.claimedAchievements)) data.claimedAchievements = [];
      if (typeof data.chainStartStats !== 'object' || !data.chainStartStats) data.chainStartStats = {};
      return data;
    } catch (error) {
      return fresh();
    }
  }

  function store() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  }

  function avatarPath(name, size = "head") {
    return `${AVATAR_BASE}avatars/AV_Anime_${name}${size ? `_${size}` : ""}.webp`;
  }

  function showCharacterCreate() {
    draft = save.profile ? { ...save.profile } : { name: "", avatar: "Blaze", grade: 6 };
    if (!draft.grade) draft.grade = 6;
    const input = document.getElementById("sp-char-name");
    if (input) input.value = draft.name || "";
    renderAvatarGrid();
    renderGradeGrid();
    window.WordCrushScreens.showScreen("sp-char");
  }

  function showHub() {
    if (!getProfile()) {
      showCharacterCreate();
      return;
    }

    applyProfileToHud();
    if (window.WordCrushDaily) {
      window.WordCrushDaily.ensureDaily();
      window.WordCrushDaily.render();
    }
    window.WordCrushScreens.showScreen("hub-screen");
    setTimeout(() => window.WCAchievements?.updateHubGlow?.(), 0);
  }

  function renderAvatarGrid() {
    const grid = document.getElementById("sp-char-avatars");
    if (grid) {
      grid.innerHTML = AVATARS.map((avatar) => (
        `<button class="wo-avatar${draft.avatar === avatar ? " active" : ""}" onclick="spPickAvatar('${avatar}')">` +
        `<img src="${avatarPath(avatar)}" class="${avatar === "Nova" || avatar === "Terra" ? "wo-head-flip" : ""}" alt="">` +
        `${avatar.toUpperCase()}</button>`
      )).join("");
    }

    const preview = document.getElementById("sp-char-prev");
    if (preview) preview.src = avatarPath(draft.avatar, "");
    const name = document.getElementById("sp-char-prev-name");
    if (name) name.textContent = draft.avatar.toUpperCase();
  }

  function pickAvatar(avatar) {
    draft.avatar = avatar;
    renderAvatarGrid();
  }

  function renderGradeGrid() {
    const grid = document.getElementById("sp-char-grades");
    if (!grid) return;
    const grades = window.WordCrushAdapter?.getGrades?.() || [6, 7, 8];
    grid.innerHTML = grades.map((grade) => (
      `<button class="wo-grade${Number(draft.grade) === Number(grade) ? " active" : ""}" onclick="spPickGrade(${Number(grade)})">GRADE ${grade}</button>`
    )).join("");
  }

  function pickGrade(grade) {
    draft.grade = Number(grade) || 6;
    renderGradeGrid();
  }

  function confirmCharacter() {
    const input = document.getElementById("sp-char-name");
    const warning = document.getElementById("sp-char-warn");
    draft.name = (input?.value || "").trim().toUpperCase();

    if (!draft.name) {
      setWarning(warning, "ENTER A PLAYER NAME");
      return;
    }

    if (isBadProfileName(draft.name)) {
      setWarning(warning, "INAPPROPRIATE NAME - CHOOSE ANOTHER");
      return;
    }

    setWarning(warning, "");
    save = { ...fresh(), profile: { ...draft, grade: Number(draft.grade) || 6 } };
    store();
    applyProfileToHud();
    showHub();
  }

  function showProfile() {
    const profile = getProfile();
    if (!profile) {
      showCharacterCreate();
      return;
    }

    const stats = save.stats || fresh().stats;
    const campaign = getCampaignProgress();
    const campaignLevels = Object.values(campaign.levels || {});
    const campaignStars = campaignLevels.reduce((total, level) => total + (Number(level.stars) || 0), 0);
    const completedCampaignLevels = campaignLevels.filter((level) => level.completed).length;
    const score = Number(stats.totalScore) || 0;
    const rank = getRank(score);
    const rankImg = document.getElementById("sp-rank-img");
    const rankName = document.getElementById("sp-rank-name");
    const avatar = document.getElementById("sp-profile-avatar");

    if (rankImg) { rankImg.src = rank.img; rankImg.alt = rank.name; }
    if (rankName) rankName.textContent = rank.name;
    if (avatar) {
      avatar.src = avatarPath(profile.avatar, "head");
      avatar.classList.toggle("wo-head-flip", profile.avatar === "Nova" || profile.avatar === "Terra");
    }

    setText("sp-profile-name", profile.name);
    setText("sp-profile-grade", `WORD GEMORIA - SINGLE PLAYER - GRADE ${Number(profile.grade) || 6}`);
    setText("sp-profile-score", String(playerScore()));
    if (window.WCAchievements) {
      const bc = window.WCAchievements.badgeCount();
      setText("sp-profile-achievements", `${bc.earned}/${bc.total}`);
      const ac = window.WCAchievements.achievementCount();
      setText("sp-profile-ach-score", `${ac.earned}/${ac.total}`);
    }
    setText("sp-profile-campaigns", completedCampaignLevels >= 10 ? "1" : "0");

    const items = [
      ["BEST SCORE", stats.bestScore || 0],
      ["RUNS COMPLETED", stats.runsCompleted || 0],
      ["CORRECT WORDS", stats.totalCorrect || 0],
      ["WRONG MATCHES", stats.totalWrong || 0],
      ["BEST CHAIN", stats.bestStreak || 0],
      ["PERFECT RUNS", stats.perfectRuns || 0],
      ["CAMPAIGN STARS", campaignStars],
      ["DAILY BOARDS", stats.dailyBoardsCompleted || 0]
    ];
    const statsNode = document.getElementById("sp-profile-stats");
    if (statsNode) {
      statsNode.innerHTML = items.map(([label, value]) => (
        `<div><strong>${value}</strong><span>${label}</span></div>`
      )).join("");
    }

    window.WordCrushScreens.showScreen("sp-profile");
  }

  function recordRun(gameState) {
    if (!save.profile || !gameState || gameState.profileRecorded) {
      return;
    }

    gameState.profileRecorded = true;
    const stats = { ...fresh().stats, ...(save.stats || {}) };
    const score = Number(gameState.score) || 0;
    stats.totalScore += score;
    stats.bestScore = Math.max(stats.bestScore, score);
    stats.runsCompleted += 1;
    stats.totalCorrect += Number(gameState.matches) || 0;
    stats.totalWrong += Number(gameState.wrongs) || 0;
    stats.bestStreak = Math.max(stats.bestStreak, Number(gameState.comboBest) || 0);
    if ((Number(gameState.wrongs) || 0) === 0 && (Number(gameState.matches) || 0) >= (gameState.boardSize || 15)) {
      stats.perfectRuns += 1;
    }
    if (gameState.runType === 'quick') {
      stats.quickRunsCompleted = (stats.quickRunsCompleted || 0) + 1;
    }
    save.stats = stats;
    store();
    setTimeout(() => window.WCAchievements?.checkAndNotify?.(), 400);
  }

  function getCampaignProgress() {
    save.campaign = { ...fresh().campaign, ...(save.campaign || {}) };
    save.campaign.levels = save.campaign.levels || {};
    return save.campaign;
  }

  function updateCampaignProgress(level, score, stars, completed) {
    const campaign = getCampaignProgress();
    const key = String(level);
    const existing = campaign.levels[key] || {};
    campaign.levels[key] = {
      bestScore: Math.max(Number(existing.bestScore) || 0, Number(score) || 0),
      stars: Math.max(Number(existing.stars) || 0, Number(stars) || 0),
      completed: Boolean(existing.completed || completed)
    };

    if (completed && level >= (campaign.unlockedLevel || 1) && level < 10) {
      campaign.unlockedLevel = level + 1;
    }

    save.campaign = campaign;
    store();
  }

  function getDailyProgress() {
    return save.daily || null;
  }

  function setDailyProgress(daily) {
    save.daily = daily;
    store();
  }

  function claimDailyReward(reward) {
    const stats = { ...fresh().stats, ...(save.stats || {}) };
    stats.totalScore += Number(reward) || 0;
    stats.dailyBoardsCompleted += 1;
    save.stats = stats;
    store();
  }

  function resetProgress() {
    save = fresh();
    draft = { name: "", avatar: "Blaze", grade: 6 };
    store();
  }

  function applyProfileToHud() {
    const profile = getProfile();
    if (!profile) return;
    const src = avatarPath(profile.avatar, "head");
    const avatar = document.getElementById("sp-hud-avatar");
    if (avatar) { avatar.src = src; avatar.title = profile.name; }
    const chartAvatar = document.getElementById("sp-hud-avatar-chart");
    if (chartAvatar) {
      chartAvatar.src = src;
      chartAvatar.classList.toggle("wo-head-flip", profile.avatar === "Nova" || profile.avatar === "Terra");
    }
    const scoreEl = document.getElementById("profile-chart-score");
    if (scoreEl) scoreEl.textContent = playerScore();
  }

  function getProfile() {
    return save.profile;
  }

  function setWarning(element, text) {
    if (element) element.textContent = text;
  }

  function setText(id, text) {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  }

  function getRank(score) {
    const ranks = [
      { name: "LEGEND OF LIGHT", img: "ranks/legend_of_light.webp", threshold: 500000 },
      { name: "GEM OVERLORD",    img: "ranks/gem_overlord.webp",    threshold: 350000 },
      { name: "CRYSTAL LORD",    img: "ranks/crystal_lord.webp",    threshold: 250000 },
      { name: "RADIANT CHAMPION",img: "ranks/radiant_champion.webp",threshold: 175000 },
      { name: "JEWEL MASTER",    img: "ranks/jewel_master.webp",    threshold: 120000 },
      { name: "CRYSTAL KEEPER",  img: "ranks/crystal_keeper.webp",  threshold: 80000  },
      { name: "GEM CRAFTER",     img: "ranks/gem_crafter.webp",     threshold: 50000  },
      { name: "GEM COLLECTOR",   img: "ranks/gem_collector.webp",   threshold: 25000  },
      { name: "CRYSTAL SEEKER",  img: "ranks/crystal_seeker.webp",  threshold: 10000  },
      { name: "SPARK",           img: "ranks/spark.webp",           threshold: 0      },
    ];
    return ranks.find(r => score >= r.threshold) || ranks[ranks.length - 1];
  }

  function isBadProfileName(raw) {
    const normalizedWithSpaces = normalizeProfileName(raw, true);
    const compact = normalizeProfileName(raw, false);
    const tokens = normalizedWithSpaces.split(" ").filter(Boolean);

    if (BAD_NAMES.some((word) => compact.includes(word))) {
      return true;
    }

    if (COMPACT_BAD_PATTERNS.some((word) => compact.includes(word))) {
      return true;
    }

    return tokens.some((token) => SHORT_BAD_TOKENS.includes(token));
  }

  function normalizeProfileName(raw, keepSpaces) {
    const value = String(raw || "")
      .toUpperCase()
      .replace(/4/g, "A")
      .replace(/3/g, "E")
      .replace(/0/g, "O")
      .replace(/1/g, "I")
      .replace(/5/g, "S")
      .replace(/7/g, "T")
      .replace(/\$/g, "S")
      .replace(/@/g, "A")
      .replace(/İ/g, "I")
      .replace(/Ş/g, "S")
      .replace(/Ğ/g, "G")
      .replace(/Ü/g, "U")
      .replace(/Ö/g, "O")
      .replace(/Ç/g, "C")
      .replace(/Ä°/g, "I")
      .replace(/Å/g, "S")
      .replace(/Ä/g, "G")
      .replace(/Ãœ/g, "U")
      .replace(/Ã–/g, "O")
      .replace(/Ã‡/g, "C");

    return keepSpaces
      ? value.replace(/[^A-Z]+/g, " ").trim()
      : value.replace(/[^A-Z]/g, "");
  }

  function badName(raw) {
    const normalized = raw
      .toUpperCase()
      .replace(/4/g, "A")
      .replace(/3/g, "E")
      .replace(/0/g, "O")
      .replace(/1/g, "I")
      .replace(/5/g, "S")
      .replace(/7/g, "T")
      .replace(/\$/g, "S")
      .replace(/@/g, "A")
      .replace(/İ/g, "I")
      .replace(/Ş/g, "S")
      .replace(/Ğ/g, "G")
      .replace(/Ü/g, "U")
      .replace(/Ö/g, "O")
      .replace(/Ç/g, "C")
      .replace(/[^A-Z]/g, "");

    return BAD_NAMES.some((word) => normalized.includes(word));
  }

  function playerScore() {
    return (Number((save.stats || {}).totalScore) || 0) + (Number(save.achievementScore) || 0);
  }

  function getRawSave() {
    return save;
  }

  function setAchievementField(key, value) {
    save[key] = value;
  }

  window.WordCrushProfile = {
    showCharacterCreate,
    showHub,
    showProfile,
    confirmCharacter,
    pickAvatar,
    applyProfileToHud,
    recordRun,
    resetProgress,
    getProfile,
    getCampaignProgress,
    updateCampaignProgress,
    getDailyProgress,
    setDailyProgress,
    claimDailyReward,
    avatarPath,
    playerScore,
    getRawSave,
    setAchievementField,
    getRank,
    store
  };

  window.spShowCharCreate = showCharacterCreate;
  window.spConfirmNew = confirmCharacter;
  window.spPickAvatar = pickAvatar;
  window.spPickGrade = pickGrade;
  window.spProfile = showProfile;
  window.spBackToMenu = () => window.WordCrushScreens.showScreen("menu-screen");
})();
