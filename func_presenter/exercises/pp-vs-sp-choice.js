window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "pp-vs-sp-choice",
  activity: "paragraph-choice",
  title: "CHOOSE CORRECT OPTION",
  pages: [
    {
      imagePath: "../images/5/4/8.webp",
      sentences: [
        {
          segments: [
            { text: "We always " },
            { options: ["go", "going", "goes"], answer: "go" },
            { text: " to the beach on Sundays." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/picnic.webp",
      sentences: [
        {
          segments: [
            { text: "Emma is " },
            { options: ["having", "has"], answer: "having" },
            { text: " a picnic with her friends now." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/hannah-barbeque.webp",
      sentences: [
        {
          segments: [
            { text: "Hannah " },
            { options: ["have", "having", "has"], answer: "has" },
            { text: " a barbecue with her family every Sunday." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/visit.webp",
      sentences: [
        {
          segments: [
            { text: "Jack " },
            { options: ["visiting", "visit", "visits"], answer: "visits" },
            { text: " his grandparents once a week." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/organizeparty.webp",
      sentences: [
        {
          segments: [
            { text: "Emma is " },
            { options: ["organising", "organises"], answer: "organising" },
            { text: " a birthday party for Chloe now." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/hannahzoe.webp",
      sentences: [
        {
          segments: [
            { text: "Hannah and Zoe are " },
            { options: ["camp", "camps", "camping"], answer: "camping" },
            { text: " in the forest today." }
          ]
        }
      ]
    },
    {
      imagePath: "images/present-progressive/jackfishing.webp",
      sentences: [
        {
          segments: [
            { text: "Jack " },
            { options: ["go", "goes", "is going"], answer: "goes" },
            { text: " fishing with his father every weekend." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/23.webp",
      sentences: [
        {
          segments: [
            { text: "I " },
            { options: ["write", "am writing", "is writing"], answer: "am writing" },
            { text: " in my diary at the moment." }
          ]
        }
      ]
    }
  ],
  supports(functionModule) {
    return false;
  }
});
