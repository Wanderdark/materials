const timeSetterExercise = window.exerciseActivityModules.timeSetter({
  id: "time-setter",
  title: "SET THE TIME",
  supports(functionModule) {
    return functionModule.id === "to-be-telling-time";
  },
  guidedRounds: [0, 15, 30, 0, 15],
  timeTypes: [
    { minutes: [0] },
    { minutes: [15] },
    { minutes: [30] },
    { minutes: [5, 10, 20] },
    { minutes: [45] }
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(timeSetterExercise);
