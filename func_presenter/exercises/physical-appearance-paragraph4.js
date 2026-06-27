window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-paragraph-4",
  activity: "paragraph-choice",
  title: "DESCRIBE THE PERSON",
  imagePath: "images/physical-appearance/exercise4.webp",
  sentences: [
    {
      segments: [
        { text: "She is an " },
        { options: ["young", "old"], answer: "young" },
        { text: " girl." }
      ]
    },
    {
      segments: [
        { text: "She " },
        { options: ["is", "has got"], answer: "is" },
        { text: " " },
        { options: ["fat", "slim"], answer: "slim" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "She has got " },
        { options: ["blonde", "red"], answer: "red" },
        { text: " long " },
        { options: ["straight", "wavy"], answer: "wavy" },
        { text: " hair." }
      ]
    },
    {
      segments: [
        { text: "She " },
        { options: ["wears", "doesn't wear"], answer: "doesn't wear" },
        { text: " a hat." }
      ]
    },
    {
      segments: [
        { text: "She wears a green t-shirt, " },
        { options: ["black trousers", "blue jeans"], answer: "blue jeans" },
        { text: " and white " },
        { options: ["boots", "shoes"], answer: "shoes" },
        { text: "." }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
