window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(window.exerciseActivityModules.trueFalseGrid({
  id: "physical-appearance-true-false-2",
  title: "TRUE OR FALSE?",
  imagePath: "images/physical-appearance/exercise6.webp",
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  },
  statements: [
    ["She is a child.", true],
    ["She is slim.", true],
    ["She has got long wavy blonde hair.", true],
    ["She wears a white sweater.", true],
    ["She wears a skirt.", true],
    ["She wears white trainers.", true],
    ["She has got short hair.", false],
    ["She has got dark hair.", false],
    ["She has eyeglasses.", false],
    ["She wears a t-shirt.", false],
    ["She wears black shoes.", false],
    ["She is an old woman.", false]
  ]
}));
