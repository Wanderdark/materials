(function () {
  const TIERS = ["easy", "medium", "hard"];
  let returnScreen = "hub";
  let countdownTimer = null;

  function showDailyBoard(from = "hub") {
    if (!window.WordCrushProfile.getProfile()) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    returnScreen = from;
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
    const date = document.getElementById("daily-date");
    const reward = document.getElementById("daily-reward");
    const board = document.getElementById("daily-board");
    const claim = document.getElementById("daily-claim-btn");

    if (date) date.textContent = `TODAY - ${daily.date}`;
    if (reward) reward.textContent = `+${dailyReward()}`;
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
      claim.disabled = !dailyComplete() || daily.claimed;
      claim.classList.toggle("countdown", Boolean(daily.claimed));
      claim.textContent = daily.claimed
        ? `CHECK BACK IN ${dailyCountdown()}`
        : dailyComplete()
          ? `CLAIM +${dailyReward()} SCORE`
          : "IN PROGRESS";
    }

    updateHubBadge();
  }

  function recordRun(state) {
    if (!state || state.dailyRecorded || !window.WordCrushProfile.getProfile()) return;
    state.dailyRecorded = true;

    const completed = (state.turkishCards || []).length === 0;
    const stars = starsForScore(state.score);
    const before = dailyCompletedCount();

    addDaily("correctAnswers", Number(state.matches) || 0);
    addDaily("runScore", Number(state.score) || 0, "max");
    addDaily("bestStreak", Number(state.comboBest) || 0, "max");
    if (completed) addDaily("completedLevels", 1);
    if (completed && state.runType === "campaign") addDaily("campaignLevels", 1);
    if (completed && stars > 0) addDaily("stars", stars);
    if (completed && stars >= 3) addDaily("threeStarLevels", 1);
    if (completed && Number(state.wrongs) === 0) addDaily("noMistakeLevels", 1);

    const gained = dailyCompletedCount() - before;
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
    if (window.WordCrushAudio) window.WordCrushAudio.play("star");
    if (window.ToastManager) window.ToastManager.show(`DAILY QUESTS CLAIMED +${reward} SCORE`);
    render();
  }

  function ensureDaily() {
    if (!window.WordCrushProfile.getProfile()) return null;
    const date = dailyDateKey();
    let daily = window.WordCrushProfile.getDailyProgress();
    if (!daily || daily.date !== date) {
      const ids = {};
      TIERS.forEach((tier) => {
        const quest = pickDailyQuest(tier, date);
        if (quest) ids[tier] = quest.id;
      });
      daily = { date, ids, progress: {}, claimed: false };
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
    const end = new Date(now);
    end.setHours(24, 0, 0, 0);
    const ms = Math.max(0, end - now);
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
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

  function pickDailyQuest(tier, date) {
    const pool = dailyPool()[tier] || [];
    if (!pool.length) return null;
    const index = Math.abs(hash(`${date}-${tier}`)) % pool.length;
    return pool[index];
  }

  function dailyPool() {
    return window.WordCrushDailyTasks || {};
  }

  function dailyDateKey() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function starsForScore(score) {
    return [2500, 5000, 7500].reduce((stars, threshold) => Number(score) >= threshold ? stars + 1 : stars, 0);
  }

  function hash(text) {
    return String(text).split("").reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);
  }

  function updateHubBadge() {
    const button = document.getElementById("daily-board-btn");
    if (!button) return;
    const daily = ensureDaily();
    if (!daily) return;
    button.classList.toggle("daily-claimed", Boolean(daily.claimed));
    button.dataset.dailyProgress = daily.claimed ? "DONE" : `${dailyCompletedCount()}/3`;
    button.classList.toggle("hub-chart-glow", dailyComplete() && !daily.claimed);
  }

  function renderIfVisible() {
    const screen = document.getElementById("daily-screen");
    if (screen?.classList.contains("open")) render();
    else updateHubBadge();
  }

  function startCountdown() {
    window.clearInterval(countdownTimer);
    countdownTimer = window.setInterval(() => {
      const daily = ensureDaily();
      if (!daily) return;
      if (!daily.claimed) return;
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
