(function () {
  const exercise = {
    id: "ride-with-hannah-singular-plurals",
    title: "RIDE WITH HANNAH",
    activity: "mini-game",
    url: "mini-games/ride_with_hannah/index.html?return=../../index.html",
    gameConfig: {
      instructionMode: "random",
      durationSeconds: 90,
      startingHearts: 3,
      heartsPerPoint: 5,
      wordSet: {
        id: "singular-plurals",
        source: "./functions/singular_plural/words.js"
      }
    },
    supports(functionModule) {
      return functionModule?.id === "singular-plurals" &&
        functionModule?.grade === 5 &&
        functionModule?.unit === 1;
    }
  };

  window.exerciseModules = window.exerciseModules || [];
  window.exerciseModules.push(exercise);
})();
