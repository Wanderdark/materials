const pronounMemoryExercise = window.exerciseActivityModules.pronounMemory({
  id: "pronoun-memory",
  title: "PRONOUN MEMORY",
  supports(functionModule) {
    return functionModule.id === "to-be-present";
  },
  imageGroups: {
    he: ["images/tobe-present/1.webp", "images/tobe-present/13.webp", "images/tobe-present/14.webp"],
    she: ["images/tobe-present/8.webp", "images/tobe-present/15.webp", "images/tobe-present/16.webp"],
    it: ["images/tobe-present/17.webp", "images/tobe-present/18.webp", "images/tobe-present/19.webp", "images/tobe-present/20.webp"],
    they: ["images/tobe-present/21.webp", "images/tobe-present/22.webp", "images/tobe-present/23.webp", "images/tobe-present/24.webp"]
  },
  levels: [
    { count: 1, revealMs: 0, points: 10 },
    { count: 1, revealMs: 2000, points: 20 },
    { count: 2, revealMs: 3000, points: 30 },
    { count: 2, revealMs: 2000, points: 40 },
    { count: 3, revealMs: 3000, points: 50 },
    { count: 3, revealMs: 2000, points: 60 },
    { count: 4, revealMs: 4000, points: 70 },
    { count: 4, revealMs: 3000, points: 80 },
    { count: 5, revealMs: 5000, points: 90 },
    { count: 5, revealMs: 4000, points: 100 }
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(pronounMemoryExercise);
