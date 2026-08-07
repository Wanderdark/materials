window.LeagueListening = window.LeagueListening || {};

window.LeagueListening.GAME_CONFIG = Object.freeze({
  maxVideoPlays: 2,
  answerSeconds: 20,
  jokersPerRound: 2,
  timeFreezeSeconds: 15,
  defaultRoundLimit: 10,
  streak: Object.freeze({ bonusAt: 3, bonusPoints: 50, jokerAt: 5 }),
  score: Object.freeze({ withSubtitles: 100, withoutSubtitles: 200, difficultyMultiplier: Object.freeze({ easy: 0.5, medium: 1 }) }),
  rosterPointRatio: Object.freeze({ gamePoints: 100, rosterPoints: 3 })
});

window.LeagueListening.teamColors = ["blue", "green", "orange"];
