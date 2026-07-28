(function () {
  const exercise = {
    id: "ride-with-hannah-countables",
    title: "RIDE WITH HANNAH",
    activity: "mini-game",
    url: "mini-games/ride_with_hannah/index.html?return=../../index.html",
    gameConfig: {
      instructionMode: "random",
      durationSeconds: 90,
      startingHearts: 3,
      heartsPerPoint: 5,
      wordSet: {
        id: "countable-uncountable",
        source: "./functions/countable_uncountable/words.js"
      }
    },
    supports(functionModule) {
      return functionModule?.id === "countable-uncountable" &&
        functionModule?.grade === 5 &&
        functionModule?.unit === 6;
    }
  };

  window.exerciseModules = window.exerciseModules || [];
  window.exerciseModules.push(exercise);
})();
