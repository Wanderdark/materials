(function () {
  const COLOR_SETS = {
    four: ["red", "green", "blue", "purple"],
    five: ["red", "green", "blue", "purple", "orange"],
    six: ["red", "green", "blue", "purple", "orange", "darkblue"]
  };

  const CAMPAIGNS = {
    newcomer: {
      id: "newcomer",
      title: "NEWCOMER CAMPAIGN",
      label: "CAMPAIGN 1",
      levels: [
        { level: 1,  units: [1],                          wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 10, 2: 5, 3: 0 }, colors: COLOR_SETS.four },
        { level: 2,  units: [1, 2],                        wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 8,  2: 5, 3: 2 }, colors: COLOR_SETS.four },
        { level: 3,  units: [1, 2, 3],                     wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 6,  2: 6, 3: 3 }, colors: COLOR_SETS.four },
        { level: 4,  units: [1, 2, 3, 4],                  wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 5,  2: 7, 3: 3 }, colors: COLOR_SETS.four },
        { level: 5,  units: [1, 2, 3, 4, 5],               wordTarget: 20, seconds: 180, stars: [250, 520,  850],  target: { 1: 4,  2: 7, 3: 4 }, colors: COLOR_SETS.four },
        { level: 6,  units: [1, 2, 3, 4, 5, 6],            wordTarget: 20, seconds: 180, stars: [250, 520,  850],  target: { 1: 4,  2: 6, 3: 5 }, colors: COLOR_SETS.four },
        { level: 7,  units: [1, 2, 3, 4, 5, 6, 7],         wordTarget: 20, seconds: 180, stars: [250, 520,  850],  target: { 1: 3,  2: 6, 3: 6 }, colors: COLOR_SETS.four },
        { level: 8,  units: [1, 2, 3, 4, 5, 6, 7, 8],      wordTarget: 25, seconds: 180, stars: [300, 650, 1100],  target: { 1: 3,  2: 5, 3: 7 }, colors: COLOR_SETS.four },
        { level: 9,  units: [1, 2, 3, 4, 5, 6, 7, 8, 9],   wordTarget: 25, seconds: 180, stars: [300, 650, 1100],  target: { 1: 2,  2: 6, 3: 7 }, colors: COLOR_SETS.four },
        { level: 10, units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], wordTarget: 30, seconds: 180, stars: [400, 800, 1350], target: { 1: 2,  2: 5, 3: 8 }, colors: COLOR_SETS.four }
      ]
    },
    experienced: {
      id: "experienced",
      title: "EXPERIENCED CAMPAIGN",
      label: "CAMPAIGN 2",
      levels: [
        { level: 1,  units: [1],                          wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 8, 2: 5, 3: 2 }, colors: COLOR_SETS.five },
        { level: 2,  units: [1, 2],                        wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 7, 2: 5, 3: 3 }, colors: COLOR_SETS.five },
        { level: 3,  units: [1, 2, 3],                     wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 6, 2: 5, 3: 4 }, colors: COLOR_SETS.five },
        { level: 4,  units: [1, 2, 3, 4],                  wordTarget: 15, seconds: 180, stars: [200, 400,  650],  target: { 1: 5, 2: 5, 3: 5 }, colors: COLOR_SETS.five },
        { level: 5,  units: [1, 2, 3, 4, 5],               wordTarget: 20, seconds: 165, stars: [250, 520,  850],  target: { 1: 4, 2: 5, 3: 6 }, colors: COLOR_SETS.six },
        { level: 6,  units: [1, 2, 3, 4, 5, 6],            wordTarget: 20, seconds: 165, stars: [250, 520,  850],  target: { 1: 3, 2: 5, 3: 7 }, colors: COLOR_SETS.six },
        { level: 7,  units: [1, 2, 3, 4, 5, 6, 7],         wordTarget: 20, seconds: 165, stars: [250, 520,  850],  target: { 1: 2, 2: 6, 3: 7 }, colors: COLOR_SETS.six },
        { level: 8,  units: [1, 2, 3, 4, 5, 6, 7, 8],      wordTarget: 25, seconds: 150, stars: [300, 650, 1100],  target: { 1: 1, 2: 7, 3: 7 }, colors: COLOR_SETS.six },
        { level: 9,  units: [1, 2, 3, 4, 5, 6, 7, 8, 9],   wordTarget: 25, seconds: 150, stars: [300, 650, 1100],  target: { 1: 0, 2: 7, 3: 8 }, colors: COLOR_SETS.six },
        { level: 10, units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], wordTarget: 30, seconds: 150, stars: [400, 800, 1350], target: { 1: 0, 2: 5, 3: 10 }, colors: COLOR_SETS.six }
      ]
    }
  };

  const LEVELS = CAMPAIGNS.newcomer.levels;
  let selectedCampaignId = "newcomer";
  let selectedLevelNumber = 1;

  function showCampaignSelect() {
    const profile = window.WordCrushProfile.getProfile();
    if (!profile) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    window.WordCrushScreens.showScreen("campaign-select-screen");
  }

  function showCampaign(campaignId = selectedCampaignId) {
    const profile = window.WordCrushProfile.getProfile();
    if (!profile) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    selectedCampaignId = CAMPAIGNS[campaignId] ? campaignId : "newcomer";
    renderCampaign();
    window.WordCrushScreens.showScreen("campaign-screen");
  }

  function activeCampaign() {
    return CAMPAIGNS[selectedCampaignId] || CAMPAIGNS.newcomer;
  }

  function renderCampaign() {
    const campaign = activeCampaign();
    const profile = window.WordCrushProfile.getProfile() || {};
    const grade = Number(profile.grade) || 6;
    const progress = window.WordCrushProfile.getCampaignProgress(campaign.id);
    const grid = document.getElementById("campaign-level-grid");
    setText("campaign-title", campaign.title);
    setText("campaign-subtitle", `GRADE ${grade} - 10 LEVELS`);
    if (!grid) return;

    grid.innerHTML = "";
    campaign.levels.forEach((config) => {
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
        <em>${starText(saved.stars || 0)}</em>
        <b>BEST ${saved.bestScore || 0}</b>
      `;
      button.addEventListener("click", () => showLevelReady(config.level));
      grid.appendChild(button);
    });
  }

  function showLevelReady(levelNumber) {
    const campaign = activeCampaign();
    const config = campaign.levels.find((level) => level.level === levelNumber);
    const progress = window.WordCrushProfile.getCampaignProgress(campaign.id);
    const saved = progress.levels[String(levelNumber)] || {};
    const locked = !config || levelNumber > (progress.unlockedLevel || 1);
    if (locked) return;

    selectedLevelNumber = levelNumber;
    setText("campaign-ready-title", `${campaign.label} - LEVEL ${levelNumber}`);
    setText("campaign-ready-subtitle", `UNITS ${config.units[0]}-${config.units[config.units.length - 1]} - ${config.wordTarget} WORDS - ${config.colors.length} GEMS`);
    setText("campaign-ready-best", `YOUR BEST: ${Number(saved.bestScore) || 0} POINTS`);

    const earnedStars = Math.max(0, Math.min(3, Number(saved.stars) || 0));
    const starRows = document.getElementById("campaign-ready-stars");
    if (starRows) {
      starRows.innerHTML = [
        [1, config.stars[0], "COMPLETE THE LEVEL"],
        [2, config.stars[1], "GOOD PERFORMANCE"],
        [3, config.stars[2], "MASTER PERFORMANCE"]
      ].map(([stars, points, description]) => {
        const completed = earnedStars >= stars;
        return `
          <div class="campaign-ready-star${completed ? " completed" : ""}">
            <span>${starText(stars)}</span>
            <strong>${points} PTS</strong>
            <small>${description}</small>
            ${completed ? '<b class="campaign-ready-check">&check;</b>' : ""}
          </div>
        `;
      }).join("");
    }

    const startButton = document.getElementById("campaign-ready-start");
    if (startButton) {
      startButton.textContent = saved.completed ? "REPLAY LEVEL" : "START LEVEL";
    }

    window.WordCrushScreens.showScreen("campaign-ready-screen");
  }

  function startSelectedLevel() {
    startLevel(selectedLevelNumber, selectedCampaignId);
  }

  function startLevel(levelNumber, campaignId = selectedCampaignId) {
    selectedCampaignId = CAMPAIGNS[campaignId] ? campaignId : "newcomer";
    const campaign = activeCampaign();
    const config = campaign.levels.find((level) => level.level === levelNumber);
    const profile = window.WordCrushProfile.getProfile();
    if (!config || !profile) return;

    const grade = Number(profile.grade) || 6;
    const boardSize = window.WordCrushAdapter.BOARD_WORD_COUNT;
    const wordTarget = config.wordTarget || boardSize;
    const allWords = buildLevelWords(grade, config, wordTarget);

    if (allWords.length < boardSize) {
      if (window.ToastManager) {
        window.ToastManager.show("NOT ENOUGH WORDS FOR THIS LEVEL");
      }
      return;
    }

    const firstBoard = allWords.slice(0, boardSize);
    const refillQueue = allWords.slice(boardSize);

    window.WordCrushGame.startGame({
      words: firstBoard,
      profile,
      runType: "campaign",
      campaignId: campaign.id,
      campaignLevel: levelNumber,
      campaignTotalLevels: campaign.levels.length,
      campaignRefillQueue: refillQueue,
      campaignStarThresholds: config.stars,
      gameSeconds: config.seconds,
      gemColors: config.colors,
      levelNumber
    });
  }

  function buildLevelWords(grade, config, total) {
    total = total || window.WordCrushAdapter.BOARD_WORD_COUNT;
    const pool = window.WordCrushAdapter.buildWordPool({
      grades: [grade],
      units: config.units,
      categories: []
    });
    const selected = [];
    const usedIds = new Set();
    const usedTerms = new Set();

    [1, 2, 3].forEach((diff) => {
      pickDiffWords(pool, diff, config.target[diff], selected, usedIds, usedTerms, true, total);
    });

    for (const diff of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiffWords(pool, diff, total - selected.length, selected, usedIds, usedTerms, true, total);
    }

    for (const diff of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiffWords(pool, diff, total - selected.length, selected, usedIds, usedTerms, false, total);
    }

    return shuffle(selected).slice(0, total);
  }

  function pickDiffWords(pool, diff, count, selected, usedIds, usedTerms, respectConflicts, cap) {
    if (count <= 0) return;
    cap = cap || window.WordCrushAdapter.BOARD_WORD_COUNT;
    const candidates = shuffle(pool.filter((word) => Number(word.diff) === diff && !usedIds.has(word.id)));

    for (const word of candidates) {
      if (selected.length >= cap || count <= 0) return;
      if (respectConflicts && conflictsWith(word, usedTerms)) continue;
      selected.push(word);
      usedIds.add(word.id);
      getTerms(word).forEach((term) => usedTerms.add(term));
      count -= 1;
    }
  }

  function recordResult(state) {
    if (!state || state.runType !== "campaign") return;
    const campaignId = state.campaignId || "newcomer";
    const campaign = CAMPAIGNS[campaignId] || CAMPAIGNS.newcomer;
    const level = Number(state.campaignLevel);
    const completed = (state.turkishCards || []).length === 0;
    const config = campaign.levels.find(l => l.level === level);
    const thresholds = config?.stars || [200, 400, 650];
    const stars = completed ? starsForScore(state.score, thresholds) : 0;
    window.WordCrushProfile.updateCampaignProgress(campaign.id, level, state.score, stars, completed, campaign.levels.length);
    if (stars >= 1) window.WordCrushFirebase?.submitScore();
  }

  function starsForScore(score, thresholds) {
    thresholds = thresholds || [200, 400, 650];
    return thresholds.reduce((stars, threshold) => score >= threshold ? stars + 1 : stars, 0);
  }

  function starText(stars) {
    const safeStars = Math.max(0, Math.min(3, Number(stars) || 0));
    return "\u2605".repeat(safeStars) + "\u2606".repeat(3 - safeStars);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
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
    CAMPAIGNS,
    LEVELS,
    showCampaignSelect,
    showCampaign,
    renderCampaign,
    showLevelReady,
    startLevel,
    startSelectedLevel,
    buildLevelWords,
    recordResult,
    starsForScore
  };
})();
