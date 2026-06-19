(function () {
  const ROWS = 5;
  const COLS = 3;
  const BOARD_SIZE = ROWS * COLS;
  const COLORS = ["red", "green", "blue", "purple"];
  const MATCH_SCORE = 100;
  const COMBO_SCORE = 50;
  const COMBO_CHAIN_LIMIT = 20;
  const INITIAL_COMBO_CELL_LIMIT = 0;
  const BOARD_COMPLETE_BONUS = 1000;
  const TIME_BONUS_PER_SECOND = 10;
  const GAME_SECONDS = 180;

  function createInitialState() {
    return {
      rows: ROWS,
      cols: COLS,
      boardSize: BOARD_SIZE,
      colors: COLORS,
      score: 0,
      wordScore: 0,
      comboScore: 0,
      boardBonus: 0,
      timeBonus: 0,
      matches: 0,
      wrongs: 0,
      advLives: null,
      advMaxLives: null,
      advEnemyHp: null,
      advEnemyMaxHp: null,
      advWordPool: null,
      combos: 0,
      comboBest: 0,
      reachedStars: [false, false, false],
      secondsLeft: GAME_SECONDS,
      isRunning: false,
      isPaused: false,
      isResolving: false,
      selectedEnglishId: null,
      selectedTurkishId: null,
      lockedTurkishId: null,
      wordBank: [],
      activeWords: [],
      englishGrid: [],
      turkishCards: []
    };
  }

  window.WordCrushState = {
    ROWS,
    COLS,
    BOARD_SIZE,
    COLORS,
    MATCH_SCORE,
    COMBO_SCORE,
    COMBO_CHAIN_LIMIT,
    INITIAL_COMBO_CELL_LIMIT,
    BOARD_COMPLETE_BONUS,
    TIME_BONUS_PER_SECOND,
    GAME_SECONDS,
    createInitialState
  };
})();
