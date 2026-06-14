/* Word Overlord prototype LEVEL recipes. */
(function createWordOverlordLevelConfig() {
  const EASY = 1;
  const MEDIUM = 2;
  const HARD = 3;

  const LENGTH_CURVE = Object.freeze([3, 4, 4, 5, 6, 7, 8, 8, 9, 10]);
  const DIFFICULTY_RECIPES = Object.freeze({
    1: [EASY, EASY, EASY, EASY, EASY, EASY, EASY, EASY, EASY, EASY],
    2: [EASY, EASY, EASY, EASY, EASY, EASY, EASY, MEDIUM, EASY, MEDIUM],
    3: [EASY, EASY, EASY, EASY, EASY, MEDIUM, EASY, MEDIUM, MEDIUM, MEDIUM],
    4: [EASY, EASY, EASY, MEDIUM, EASY, MEDIUM, MEDIUM, EASY, MEDIUM, HARD],
    5: [EASY, EASY, MEDIUM, EASY, MEDIUM, MEDIUM, EASY, MEDIUM, HARD, HARD],
    6: [EASY, MEDIUM, EASY, MEDIUM, HARD, MEDIUM, EASY, HARD, MEDIUM, HARD],
    7: [EASY, MEDIUM, HARD, MEDIUM, HARD, MEDIUM, EASY, HARD, MEDIUM, HARD],
    8: [EASY, MEDIUM, HARD, MEDIUM, HARD, MEDIUM, HARD, HARD, MEDIUM, HARD],
    9: [MEDIUM, HARD, MEDIUM, HARD, HARD, MEDIUM, HARD, HARD, MEDIUM, HARD],
    10: [MEDIUM, HARD, HARD, MEDIUM, HARD, HARD, HARD, HARD, HARD, HARD],
  });

  window.WordOverlordLevelConfig = Object.freeze({
    LENGTH_CURVE,
    DIFFICULTY_RECIPES,
    getDifficultyRecipe(level) {
      return DIFFICULTY_RECIPES[Math.max(1, Math.min(10, Number(level) || 1))].slice();
    },
  });
})();
