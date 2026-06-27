window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(window.exerciseActivityModules.trueFalseGrid({
  id: "physical-appearance-true-false",
  title: "TRUE OR FALSE?",
  imagePath: "images/physical-appearance/exercise5.webp",
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  },
  statements: [
    ["He is a young man.", true],
    ["He is well-built.", true],
    ["He has got dark wavy hair.", true],
    ["He doesn't wear eyeglasses.", true],
    ["He has got a beard.", true],
    ["He wears black boots.", true],
    ["He has got short blonde hair.", false],
    ["He wears a white t-shirt and blue jeans.", false],
    ["He is overweight.", false],
    ["He has got straight hair.", false],
    ["He wears a hat.", false],
    ["He is an old man.", false]
  ]
}));
