(function () {
  const QUICK_GAME_TARGETS = {
    15: [200, 400, 650],
    20: [300, 500, 900],
    25: [300, 700, 1100],
    30: [400, 800, 1300]
  };

  function getQuickGameTargets(wordCount) {
    const targets = QUICK_GAME_TARGETS[Number(wordCount)] || QUICK_GAME_TARGETS[15];
    return [...targets];
  }

  window.WordCrushStarTargets = {
    getQuickGameTargets
  };
})();
