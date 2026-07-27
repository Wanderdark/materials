(function () {
  const exercise = {
    id: "ride-with-hannah-countables",
    title: "RIDE WITH HANNAH",
    activity: "mini-game",
    url: "mini-games/ride_with_hannah/index.html?return=../../index.html",
    gameConfig: {
      instructionMode: "random",
      durationSeconds: 60,
      startingHearts: 3,
      heartsPerPoint: 5,
      countableWords: [
        "BEANS",
        "SALAD",
        "CROISSANT",
        "MUSHROOM",
        "PANCAKE",
        "PEPPER",
        "BISCUIT",
        "COOKIE",
        "LEMON",
        "PIE",
        "NUT",
        "CORN",
        "LETTUCE"
      ],
      uncountableWords: [
        "MILK",
        "WATER",
        "JAM",
        "SUGAR",
        "BUTTER",
        "SALT",
        "FLOUR",
        "GARLIC",
        "MEAT",
        "OIL",
        "BAKING POWDER",
        "CINNAMON",
        "SPICES",
        "DOUGH"
      ]
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
