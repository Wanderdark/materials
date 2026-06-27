window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-paragraph-2",
  activity: "paragraph-choice",
  title: "DESCRIBE THE PERSON",
  imagePath: "images/physical-appearance/exercise2.webp",
  sentences: [
    {
      segments: [
        { options: ["He", "She"], answer: "She" },
        { text: " is a " },
        { options: ["young", "old"], answer: "young" },
        { text: " girl and she is " },
        { options: ["short", "medium-height"], answer: "medium-height" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "She is " },
        { options: ["overweight", "slim"], answer: "slim" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "She " },
        { options: ["is", "has got"], answer: "has got" },
        { text: " dark " },
        { options: ["long", "short"], answer: "long" },
        { text: " " },
        { options: ["straight", "wavy"], answer: "straight" },
        { text: " hair." }
      ]
    },
    {
      segments: [
        { text: "She wears a " },
        { options: ["pink", "white"], answer: "pink" },
        { text: " t-shirt and blue " },
        { options: ["skirt", "jeans"], answer: "jeans" },
        { text: "." }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
