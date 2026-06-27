window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(window.exerciseActivityModules.trueFalseGrid({
  id: "physical-appearance-true-false-combined",
  title: "TRUE OR FALSE?",
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  },
  pages: [
    {
      imagePath: "images/physical-appearance/exercise5.webp",
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
    },
    {
      imagePath: "images/physical-appearance/exercise6.webp",
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
    },
    {
      imagePath: "images/physical-appearance/exercise7.webp",
      statements: [
        ["He is a boy.", true],
        ["He is young.", true],
        ["He is slim.", true],
        ["He has got short blonde hair.", true],
        ["He wears a red t-shirt.", true],
        ["He wears white trainers.", true],
        ["He has got dark hair.", false],
        ["He wears a blue t-shirt.", false],
        ["He wears black jeans.", false],
        ["He wears black shoes.", false],
        ["He has got long hair.", false],
        ["He is an old man.", false]
      ]
    },
    {
      imagePath: "images/physical-appearance/exercise8.webp",
      statements: [
        ["She is plump.", true],
        ["She has got long wavy brown hair.", true],
        ["She wears a yellow t-shirt.", true],
        ["She wears blue jeans.", true],
        ["She wears white trainers.", true],
        ["She carries a backpack.", true],
        ["She is slim.", false],
        ["She has got short hair.", false],
        ["She has got blonde hair.", false],
        ["She wears a red t-shirt.", false],
        ["She wears black trousers.", false],
        ["She wears eye glasses.", false]
      ]
    }
  ]
}));
