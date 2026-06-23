const imperativesTrueFalseExercise = window.exerciseActivityModules.trueFalseGrid({
  id: "imperatives-true-false",
  title: "TRUE - FALSE",
  supports(functionModule) {
    return functionModule.id === "imperatives-do-dont";
  },
  statements: [
    ["Don't run in the classroom!", true],
    ["Don't shout in the library.", true],
    ["Don't be rude to your classmates!", true],
    ["Don't chew gum in the lesson!", true],
    ["Follow and obey the rules!", true],
    ["Raise your hand to speak!", true],
    ["Don't eat and drink in the lesson.", true],
    ["Listen to your teacher carefully!", true],
    ["Be kind to your friends!", true],
    ["Keep your classroom tidy!", true],
    ["Run in the classroom!", false],
    ["Shout in the library!", false],
    ["Be rude to your classmates!", false],
    ["Chew gum in the lesson!", false],
    ["Don't follow and obey the rules!", false],
    ["Don't raise your hand to speak!", false],
    ["Eat and drink in the lesson!", false],
    ["Don't listen to your teacher carefully!", false],
    ["Don't be kind to your friends!", false],
    ["Don't keep your classroom tidy!", false]
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(imperativesTrueFalseExercise);
