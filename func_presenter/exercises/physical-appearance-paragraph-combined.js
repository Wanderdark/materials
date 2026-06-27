window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-paragraph-combined",
  activity: "paragraph-choice",
  title: "CHOOSE CORRECT OPTION",
  pages: [
    {
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
      ]
    },
    {
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
      ]
    },
    {
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
      ]
    },
    {
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
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
