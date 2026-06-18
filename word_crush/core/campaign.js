(function () {
  const LEVELS = [
    { level: 1, units: [1], target: { 1: 10, 2: 5, 3: 0 } },
    { level: 2, units: [1, 2], target: { 1: 8, 2: 5, 3: 2 } },
    { level: 3, units: [1, 2, 3], target: { 1: 6, 2: 6, 3: 3 } },
    { level: 4, units: [1, 2, 3, 4], target: { 1: 5, 2: 7, 3: 3 } },
    { level: 5, units: [1, 2, 3, 4, 5], target: { 1: 4, 2: 7, 3: 4 } },
    { level: 6, units: [1, 2, 3, 4, 5, 6], target: { 1: 4, 2: 6, 3: 5 } },
    { level: 7, units: [1, 2, 3, 4, 5, 6, 7], target: { 1: 3, 2: 6, 3: 6 } },
    { level: 8, units: [1, 2, 3, 4, 5, 6, 7, 8], target: { 1: 3, 2: 5, 3: 7 } },
    { level: 9, units: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: { 1: 2, 2: 6, 3: 7 } },
    { level: 10, units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: { 1: 2, 2: 5, 3: 8 } }
  ];
  const STAR_THRESHOLDS = [2500, 5000, 7500];

  function showCampaign() {
    const profile = window.WordCrushProfile.getProfile();
    if (!profile) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    renderCampaign();
    window.WordCrushScreens.showScreen("campaign-screen");
  }

  function renderCampaign() {
    const profile = window.WordCrushProfile.getProfile() || {};
    const grade = Number(profile.grade) || 6;
    const progress = window.WordCrushProfile.getCampaignProgress();
    const grid = document.getElementById("campaign-level-grid");
    const subtitle = document.getElementById("campaign-subtitle");
    if (subtitle) subtitle.textContent = `GRADE ${grade} - 10 LEVELS`;
    if (!grid) return;

    grid.innerHTML = "";
    LEVELS.forEach((config) => {
      const saved = progress.levels[String(config.level)] || {};
      const locked = config.level > (progress.unlockedLevel || 1);
      const button = document.createElement("button");
      const completed = Boolean(saved.completed);
      const perfectStars = Number(saved.stars) >= 3;
      button.className = `campaign-level-card${locked ? " locked" : ""}${completed ? " completed" : ""}${perfectStars ? " perfect" : ""}`;
      button.type = "button";
      button.disabled = locked;
      button.innerHTML = `
        <strong>LEVEL ${config.level}</strong>
        <span>UNITS ${config.units[0]}-${config.units[config.units.length - 1]}</span>
        <em>${starsText(saved.stars || 0)}</em>
        <b>BEST ${saved.bestScore || 0}</b>
      `;
      button.addEventListener("click", () => startLevel(config.level));
      grid.appendChild(button);
    });
  }

  function startLevel(levelNumber) {
    const config = LEVELS.find((level) => level.level === levelNumber);
    const profile = window.WordCrushProfile.getProfile();
    if (!config || !profile) return;

    const grade = Number(profile.grade) || 6;
    const words = buildLevelWords(grade, config);
    if (words.length < window.WordCrushAdapter.BOARD_WORD_COUNT) {
      if (window.ToastManager) {
        window.ToastManager.show("NOT ENOUGH WORDS FOR THIS LEVEL");
      }
      return;
    }

    window.WordCrushGame.startGame({
      words,
      profile,
      runType: "campaign",
      campaignId: "campaign-1",
      campaignLevel: levelNumber,
      campaignTotalLevels: LEVELS.length,
      levelNumber
    });
  }

  function buildLevelWords(grade, config) {
    const pool = window.WordCrushAdapter.buildWordPool({
      grades: [grade],
      units: config.units,
      categories: []
    });
    const selected = [];
    const usedIds = new Set();
    const usedTerms = new Set();

    [1, 2, 3].forEach((diff) => {
      pickDiffWords(pool, diff, config.target[diff], selected, usedIds, usedTerms, true);
    });

    const total = window.WordCrushAdapter.BOARD_WORD_COUNT;
    for (const diff of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiffWords(pool, diff, total - selected.length, selected, usedIds, usedTerms, true);
    }

    for (const diff of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiffWords(pool, diff, total - selected.length, selected, usedIds, usedTerms, false);
    }

    return shuffle(selected).slice(0, total);
  }

  function pickDiffWords(pool, diff, count, selected, usedIds, usedTerms, respectConflicts) {
    if (count <= 0) return;
    const candidates = shuffle(pool.filter((word) => Number(word.diff) === diff && !usedIds.has(word.id)));

    for (const word of candidates) {
      if (selected.length >= window.WordCrushAdapter.BOARD_WORD_COUNT || count <= 0) return;
      if (respectConflicts && conflictsWith(word, usedTerms)) continue;
      selected.push(word);
      usedIds.add(word.id);
      getTerms(word).forEach((term) => usedTerms.add(term));
      count -= 1;
    }
  }

  function recordResult(state) {
    if (!state || state.runType !== "campaign") return;
    const level = Number(state.campaignLevel);
    const completed = (state.turkishCards || []).length === 0;
    const stars = completed ? starsForScore(state.score) : 0;
    window.WordCrushProfile.updateCampaignProgress(level, state.score, stars, completed);
  }

  function starsForScore(score) {
    return STAR_THRESHOLDS.reduce((stars, threshold) => score >= threshold ? stars + 1 : stars, 0);
  }

  function starsText(stars) {
    const safeStars = Math.max(0, Math.min(3, Number(stars) || 0));
    return "⭐".repeat(safeStars) + "☆".repeat(3 - safeStars);
  }

  function conflictsWith(word, usedTerms) {
    return getTerms(word).some((term) => usedTerms.has(term));
  }

  function getTerms(word) {
    const terms = Array.isArray(word.conflictTerms) ? word.conflictTerms : [];
    return unique([word.en, ...terms].map(normalizeTerm).filter(Boolean));
  }

  function normalizeTerm(value) {
    return String(value || "").trim().toLocaleUpperCase("en-US").replace(/\s+/g, " ");
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function unique(items) {
    return [...new Set(items)];
  }

  window.WordCrushCampaign = {
    LEVELS,
    showCampaign,
    renderCampaign,
    startLevel,
    buildLevelWords,
    recordResult,
    starsForScore
  };
})();
