window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-paragraph-3",
  activity: "paragraph-choice",
  title: "DESCRIBE THE PERSON",
  imagePath: "images/physical-appearance/exercise3.webp",
  sentences: [
    {
      segments: [
        { text: "He is an " },
        { options: ["young", "old"], answer: "old" },
        { text: " " },
        { options: ["boy", "man"], answer: "man" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "He " },
        { options: ["is", "has got"], answer: "is" },
        { text: " " },
        { options: ["fat", "slim"], answer: "fat" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "He has got " },
        { options: ["blonde", "brown"], answer: "brown" },
        { text: " short hair." }
      ]
    },
    {
      segments: [
        { text: "He wears a blue " },
        { options: ["sweater", "t-shirt"], answer: "t-shirt" },
        { text: " and black " },
        { options: ["jumpers", "trousers"], answer: "trousers" },
        { text: "." }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
