(function () {
  const SETTINGS_KEY = "wc_custom_game_settings";
  const WORD_COUNTS = [15, 20, 25, 30, "endless"];
  const TIME_OPTIONS = [180, 120, 90, "endless"];
  let selectedCount = 15;
  let selectedTime = 180;

  function show() {
    if (!window.WordCrushProfile.getProfile()) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    showChoices();
    window.WordCrushScreens.showScreen("quick-mode-screen");
  }

  function showChoices() {
    document.getElementById("quick-mode-choice").hidden = false;
    document.getElementById("quick-mode-choice-footer").hidden = false;
    document.getElementById("quick-custom-choice").hidden = true;
    setTitle("QUICK GAME");
  }

  function showCustomGame() {
    ({ wordCount: selectedCount, timeLimit: selectedTime } = loadSettings());
    document.getElementById("quick-mode-choice").hidden = true;
    document.getElementById("quick-mode-choice-footer").hidden = true;
    document.getElementById("quick-custom-choice").hidden = false;
    setTitle("CUSTOM GAME");
    renderCustomChoices();
  }

  function renderCustomChoices() {
    const container = document.getElementById("quick-word-counts");
    if (!container) return;

    container.innerHTML = "";
    WORD_COUNTS.forEach((count) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = count === "endless" ? "ENDLESS" : String(count);
      button.classList.toggle("active", count === selectedCount);
      button.addEventListener("click", () => {
        selectedCount = count;
        saveSettings();
        renderCustomChoices();
      });
      container.appendChild(button);
    });

    const timeContainer = document.getElementById("quick-time-options");
    timeContainer.innerHTML = "";
    TIME_OPTIONS.forEach((time) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = time === "endless" ? "ENDLESS" : formatTimeOption(time);
      button.classList.toggle("active", time === selectedTime);
      button.addEventListener("click", () => {
        selectedTime = time;
        saveSettings();
        renderCustomChoices();
      });
      timeContainer.appendChild(button);
    });

    const preview = document.getElementById("quick-star-preview");
    if (!preview) return;

    if (selectedCount === "endless" && selectedTime === "endless") {
      preview.textContent = "ENDLESS PRACTICE: NO STARS - PROGRESS BAR LOCKED";
      return;
    }

    const starCount = selectedCount === "endless" ? 30 : selectedCount;
    preview.textContent = `STAR TARGETS: ${starThresholds(starCount).join(" / ")}`;
  }

  function startQuickGame() {
    startGame(15, false);
  }

  function startCustomGame() {
    saveSettings();
    startGame(selectedCount, true, selectedTime);
  }

  function startGame(wordCount, customGame, timeLimit = 180) {
    const profile = window.WordCrushProfile.getProfile();
    if (!profile) return;

    const pool = wordPoolForProfile(profile);
    const endlessWords = wordCount === "endless";
    const endlessTime = timeLimit === "endless";
    const requiredWords = endlessWords ? 15 : wordCount;
    if (pool.length < requiredWords) {
      window.ToastManager?.show(`NOT ENOUGH WORDS FOR ${requiredWords} WORDS`);
      return;
    }

    const starCount = endlessWords ? 30 : wordCount;
    const endlessPractice = endlessWords && endlessTime;

    window.WordCrushGame.startGame({
      words: pool,
      profile,
      runType: "quick",
      quickWordTarget: endlessWords ? null : wordCount,
      gameSeconds: endlessTime ? null : timeLimit,
      starThresholds: endlessPractice ? null : starThresholds(starCount),
      customGame,
      practiceMode: customGame,
      endlessWords,
      endlessTime,
      disableStars: endlessPractice
    });
  }

  function wordPoolForProfile(profile) {
    const grade = Number(profile.grade) || 6;
    const units = window.WordCrushAdapter.getUnits([grade]);
    return window.WordCrushAdapter.buildWordPool({
      grades: [grade],
      units,
      categories: []
    });
  }

  function starThresholds(wordCount) {
    return window.WordCrushStarTargets?.getQuickGameTargets(wordCount) || [200, 400, 650];
  }

  function formatTimeOption(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return remainder ? `${minutes}:${String(remainder).padStart(2, "0")}` : `${minutes}:00`;
  }

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
      const wordCount = WORD_COUNTS.includes(saved.wordCount) ? saved.wordCount : 15;
      const timeLimit = TIME_OPTIONS.includes(saved.timeLimit) ? saved.timeLimit : 180;
      return { wordCount, timeLimit };
    } catch (_) {
      return { wordCount: 15, timeLimit: 180 };
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({
        wordCount: selectedCount,
        timeLimit: selectedTime
      }));
    } catch (_) {}
  }

  function setTitle(value) {
    const title = document.getElementById("quick-mode-title");
    if (title) title.textContent = value;
  }

  window.WordCrushQuickMode = {
    show,
    showChoices,
    showCustomGame,
    startQuickGame,
    startCustomGame
  };
})();
