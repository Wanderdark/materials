(() => {
  window.LeagueListening = window.LeagueListening || {};
  const sources = { correct: "assets/sounds/correct.mp3", wrong: "assets/sounds/wrong.mp3" };

  function playAnswerSound(isCorrect) {
    const sound = new Audio(isCorrect ? sources.correct : sources.wrong);
    sound.play().catch(() => {});
  }

  window.LeagueListening.playAnswerSound = playAnswerSound;
})();
