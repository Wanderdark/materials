window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-paragraph-1",
  activity: "paragraph-choice",
  title: "DESCRIBE THE PERSON",
  imagePath: "images/physical-appearance/exercise1.webp",
  sentences: [
    {
      segments: [
        { text: "He is " },
        { options: ["a young", "an old"], answer: "a young" },
        { text: " man." }
      ]
    },
    {
      segments: [
        { text: "He " },
        { options: ["is", "has got"], answer: "is" },
        { text: " tall and " },
        { options: ["slim", "fat"], answer: "slim" },
        { text: "." }
      ]
    },
    {
      segments: [
        { text: "He " },
        { options: ["is", "has got"], answer: "has got" },
        { text: " short " },
        { options: ["curly", "straight"], answer: "curly" },
        { text: " blonde hair." }
      ]
    },
    {
      segments: [
        { text: "He " },
        { options: ["has", "doesn't have"], answer: "has" },
        { text: " eyeglasses." }
      ]
    },
    {
      segments: [
        { text: "He wears a white " },
        { options: ["t-shirt", "raincoat"], answer: "t-shirt" },
        { text: " and blue jeans." }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
