(function () {
  const WORD_COUNTS = [15, 20, 25, 30];
  const BASE_STARS = [200, 400, 650];
  let selectedCount = 15;

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
    document.getElementById("quick-custom-choice").hidden = true;
  }

  function showCustomGame() {
    selectedCount = 15;
    document.getElementById("quick-mode-choice").hidden = true;
    document.getElementById("quick-custom-choice").hidden = false;
    renderCustomChoices();
  }

  function renderCustomChoices() {
    const container = document.getElementById("quick-word-counts");
    if (!container) return;

    container.innerHTML = "";
    WORD_COUNTS.forEach((count) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = String(count);
      button.classList.toggle("active", count === selectedCount);
      button.addEventListener("click", () => {
        selectedCount = count;
        renderCustomChoices();
      });
      container.appendChild(button);
    });

    const stars = starThresholds(selectedCount);
    const preview = document.getElementById("quick-star-preview");
    if (preview) preview.textContent = `STAR TARGETS: ${stars.join(" / ")}`;
  }

  function startQuickGame() {
    startGame(15, false);
  }

  function startCustomGame() {
    startGame(selectedCount, true);
  }

  function startGame(wordCount, customGame) {
    const profile = window.WordCrushProfile.getProfile();
    if (!profile) return;

    const pool = wordPoolForProfile(profile);
    if (pool.length < wordCount) {
      window.ToastManager?.show(`NOT ENOUGH WORDS FOR ${wordCount} WORDS`);
      return;
    }

    window.WordCrushGame.startGame({
      words: pool,
      profile,
      runType: "quick",
      quickWordTarget: wordCount,
      starThresholds: starThresholds(wordCount),
      customGame
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
    return BASE_STARS.map((threshold) => Math.round((threshold * wordCount / 15) / 100) * 100);
  }

  window.WordCrushQuickMode = {
    show,
    showChoices,
    showCustomGame,
    startQuickGame,
    startCustomGame
  };
})();
