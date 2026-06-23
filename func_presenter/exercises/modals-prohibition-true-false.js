const modalsProhibitionTrueFalseExercise = window.exerciseActivityModules.trueFalseGrid({
  id: "modals-prohibition-true-false",
  title: "TRUE - FALSE",
  supports(functionModule) {
    return functionModule.id === "modals-prohibition";
  },
  statements: [
      ["You mustn't run in the classroom.", true],
      ["You can't shout in the library.", true],
      ["You can't run in the corridors.", true],
      ["You mustn't throw trash around.", true],
      ["You can't fight.", true],
      ["You mustn't chew gum in the lesson!", true],
      ["You can't make noise in the classroom.", true],
      ["You mustn't eat and drink in the lesson.", true],
      ["You must run in the classroom.", false],
      ["You must shout in the library.", false],
      ["You must run in the corridors.", false],
      ["You can throw trash around.", false],
      ["You can fight.", false],
      ["You can chew gum in the lesson!", false],
      ["You must make noise in the classroom.", false],
      ["You can eat and drink in the lesson.", false]
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(modalsProhibitionTrueFalseExercise);
