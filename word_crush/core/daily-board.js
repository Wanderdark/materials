(function () {
  const TIERS = ["easy", "medium", "hard"];
  const DAILY_RULE_VERSION = 3;
  let returnScreen = "hub";
  let countdownTimer = null;

  function showDailyBoard(from = "hub") {
    if (!window.WordCrushProfile.getProfile()) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    returnScreen = from;
    const daily = ensureDaily();
    if (daily?.alertSeen !== true) {
      daily.alertSeen = true;
      window.WordCrushProfile.setDailyProgress(daily);
    }
    render();
    window.WordCrushScreens.showScreen("daily-screen");
    startCountdown();
  }

  function closeDailyBoard() {
    if (returnScreen === "campaign" && window.WordCrushCampaign) {
      window.WordCrushCampaign.showCampaign();
      return;
    }

    window.WordCrushProfile.showHub();
  }

  function render() {
    const daily = ensureDaily();
    if (!daily) return;
    startCountdown();
    const date = document.getElementById("daily-date");
    const reward = document.getElementById("daily-reward");
    const board = document.getElementById("daily-board");
    const claim = document.getElementById("daily-claim-btn");
    const countdown = document.getElementById("daily-countdown-line");
    const complete = dailyComplete();
    const timeText = countdownText(complete);

    if (date) date.textContent = `TODAY - ${daily.date}`;
    if (reward) reward.textContent = `+${dailyReward()}`;
    if (countdown) countdown.textContent = timeText;
    if (board) {
      board.innerHTML = TIERS.map((tier) => {
        const quest = dailyQuest(tier);
        const progress = quest ? dailyProgress(quest) : 0;
        const done = quest && progress >= quest.target;
        const pct = quest ? Math.min(100, Math.round((progress / quest.target) * 100)) : 0;
        return `
          <article class="daily-row ${tier}${done ? " done" : ""}">
            <div class="daily-check">${done ? "✓" : ""}</div>
            <div class="daily-main">
              <strong>${quest?.title || "No quest"}</strong>
              <div class="daily-progress"><i style="width:${pct}%"></i></div>
              <span>${progress}/${quest?.target || 0}</span>
            </div>
          </article>
        `;
      }).join("");
    }

    if (claim) {
      claim.disabled = !complete || daily.claimed;
      claim.classList.toggle("countdown", Boolean(daily.claimed));
      claim.textContent = daily.claimed
        ? "CLAIMED"
        : complete
          ? `CLAIM +${dailyReward()} SCORE`
          : "IN PROGRESS";
    }

    updateHubBadge();
  }

  function recordRun(state) {
    if (!state || state.dailyRecorded || !window.WordCrushProfile.getProfile()) return;
    state.dailyRecorded = true;

    const adventureCompleted = state.runType === "adventure" && Number(state.advEnemyHp) <= 0;
    const boardCompleted = (state.turkishCards || []).length === 0;
    const completed = state.runType === "adventure" ? adventureCompleted : boardCompleted;
    const stars = starsForScore(state.score);
    const before = dailyCompletedCount();

    addDaily("correctAnswers", Number(state.matches) || 0);
    addDaily("runScore", Number(state.score) || 0, "max");
    addDaily("bestStreak", Number(state.comboBest) || 0, "max");
    if (completed && state.runType !== "adventure") addDaily("completedLevels", 1);
    if (completed && state.runType === "campaign") addDaily("campaignLevels", 1);
    if (adventureCompleted) addDaily("adventureNodes", 1);
    if (adventureCompleted && state.advNodeType === "elite") addDaily("adventureElites", 1);
    if (adventureCompleted && state.advNodeType === "boss") addDaily("adventureRuns", 1);
    if (completed && state.runType !== "adventure" && stars > 0) addDaily("stars", stars);
    if (completed && state.runType !== "adventure" && stars >= 3) addDaily("threeStarLevels", 1);
    if (completed && state.runType !== "adventure" && Number(state.wrongs) === 0) addDaily("noMistakeLevels", 1);

    const gained = dailyCompletedCount() - before;
    if (gained > 0 && dailyComplete()) {
      const daily = ensureDaily();
      daily.alertSeen = false;
      window.WordCrushProfile.setDailyProgress(daily);
    }
    if (gained > 0 && window.ToastManager) {
      window.ToastManager.show(dailyComplete() ? "ALL DAILY QUESTS COMPLETED - CLAIM REWARD" : `${gained} DAILY QUEST COMPLETED`);
    }

    renderIfVisible();
  }

  function claimDailyReward() {
    const daily = ensureDaily();
    if (!daily) return;
    if (daily.claimed || !dailyComplete()) return;

    const reward = dailyReward();
    daily.claimed = true;
    window.WordCrushProfile.setDailyProgress(daily);
    window.WordCrushProfile.claimDailyReward(reward);
    window.WordCrushFirebase?.submitScore();
    if (window.WordCrushAudio) window.WordCrushAudio.play("star");
    if (window.ToastManager) window.ToastManager.show(`DAILY QUESTS CLAIMED +${reward} SCORE`);
    render();
  }

  function ensureDaily() {
    if (!window.WordCrushProfile.getProfile()) return null;
    const date = dailyDateKey();
    let daily = window.WordCrushProfile.getDailyProgress();
    if (!daily || daily.date !== date || daily.ruleVersion !== DAILY_RULE_VERSION) {
      const ids = {};
      const usedRows = new Set();
      TIERS.forEach((tier) => {
        const quest = pickDailyQuest(tier, date, usedRows);
        if (quest) {
          ids[tier] = quest.id;
          if (quest.row !== undefined && quest.row !== null) {
            usedRows.add(Number(quest.row));
          }
        }
      });
      daily = { date, ruleVersion: DAILY_RULE_VERSION, ids, progress: {}, claimed: false };
      Object.values(ids).forEach((id) => {
        daily.progress[id] = 0;
      });
      window.WordCrushProfile.setDailyProgress(daily);
    }
    return daily;
  }

  function dailyQuest(tier) {
    const daily = ensureDaily();
    if (!daily) return null;
    const id = daily.ids?.[tier];
    return (dailyPool()[tier] || []).find((quest) => quest.id === id) || null;
  }

  function dailyReward() {
    return TIERS.reduce((sum, tier) => sum + (dailyQuest(tier)?.reward || 0), 0);
  }

  function dailyProgress(quest) {
    const daily = ensureDaily();
    if (!daily) return 0;
    return Math.min(quest.target, Number(daily.progress?.[quest.id]) || 0);
  }

  function dailyComplete() {
    if (!ensureDaily()) return false;
    return TIERS.every((tier) => {
      const quest = dailyQuest(tier);
      return quest && dailyProgress(quest) >= quest.target;
    });
  }

  function dailyCompletedCount() {
    if (!ensureDaily()) return 0;
    return TIERS.filter((tier) => {
      const quest = dailyQuest(tier);
      return quest && dailyProgress(quest) >= quest.target;
    }).length;
  }

  function dailyCountdown() {
    const now = new Date();
    const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0, 0));
    const ms = Math.max(0, end - now);
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function countdownText(complete = dailyComplete()) {
    return `${complete ? "REFRESH IN" : "ENDS IN"} ${dailyCountdown()}`;
  }

  function addDaily(type, value, mode = "add") {
    const daily = ensureDaily();
    if (!daily) return;
    TIERS.map(dailyQuest).filter(Boolean).filter((quest) => quest.type === type).forEach((quest) => {
      const current = Number(daily.progress[quest.id]) || 0;
      daily.progress[quest.id] = Math.min(quest.target, mode === "max" ? Math.max(current, value) : current + value);
    });
    window.WordCrushProfile.setDailyProgress(daily);
  }

  function pickDailyQuest(tier, date, usedRows = new Set()) {
    const fullPool = dailyPool()[tier] || [];
    const pool = fullPool.filter((quest) => !usedRows.has(Number(quest.row)));
    const source = pool.length ? pool : fullPool;
    if (!source.length) return null;
    const index = Math.abs(hash(`${date}-${tier}`)) % source.length;
    return source[index];
  }

  function dailyPool() {
    return window.WordCrushDailyTasks || {};
  }

  function dailyDateKey() {
    const date = new Date();
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
  }

  function starsForScore(score) {
    return [200, 400, 650].reduce((stars, threshold) => Number(score) >= threshold ? stars + 1 : stars, 0);
  }

  function hash(text) {
    return String(text).split("").reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);
  }

  function updateHubBadge() {
    const button = document.getElementById("daily-board-btn");
    if (!button) return;
    const daily = ensureDaily();
    if (!daily) return;
    const complete = dailyComplete();
    button.classList.toggle("daily-claimed", complete);
    button.dataset.dailyProgress = countdownText(complete);
    button.classList.toggle("hub-chart-attention", complete && !daily.claimed && !daily.alertSeen);
  }

  function renderIfVisible() {
    const screen = document.getElementById("daily-screen");
    if (screen?.classList.contains("open")) render();
    else updateHubBadge();
  }

  function startCountdown() {
    if (countdownTimer) return;
    window.clearInterval(countdownTimer);
    countdownTimer = window.setInterval(() => {
      const daily = ensureDaily();
      if (!daily) return;
      renderIfVisible();
    }, 1000);
  }

  window.WordCrushDaily = {
    showDailyBoard,
    closeDailyBoard,
    claimDailyReward,
    recordRun,
    ensureDaily,
    render
  };
})();
