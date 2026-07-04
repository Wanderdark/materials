const wildLifeHubButtonStyles = {
  centerLong: {
    fontSize: "clamp(17px, 1.65vw, 26px)",
    letterSpacing: ".045em"
  }
};

const wildLifeWhQuestionsFunction = {
  id: "wild-life-wh-questions",
  grade: 5,
  unit: 7,
  title: 'Wh- Questions',
  description: "",
  exercises: ["guess-the-animal", "wild-life-wh-choice", "wild-life-species-sort"],
  sentences: [
    {
      id: "wild-life-lion-wh-hub",
      presenceSlide: true,
      focus: "WH",
      kicker: "WILD LIFE",
      title: "LION- King of the animals.",
      compactTitle: true,
      imagePath: "images/wild-life-wh-questions/lion-savana.webp",
      imageClass: "wide-clean-visual",
      visualBrief: "Wild life question hub placeholder.",
      showAllItems: true,
      listClass: "standard-hub-cross wild-life-wh-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "HABITAT" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/lion-savana.webp", sentence: "" },
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/lion-savana.webp", sentence: "They live in the savanna." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "DIET" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/lion-eat-meat.webp", sentence: "" },
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/lion-eat-meat.webp", sentence: "It eats meat." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "LION" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "SPECIES" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What type of animal is it?", imagePath: "../images/5/7/2.webp", sentence: "" },
              { question: "What type of animal is it?", imagePath: "../images/5/7/2.webp", sentence: "It is a mammal." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "BODY PART" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/lion-sharp.webp", sentence: "" },
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/lion-sharp.webp", sentence: "It has got sharp teeth." }
            ]
          }
        }
      ]
    },
    {
      id: "wild-life-crocodile-wh-hub",
      presenceSlide: true,
      focus: "WH",
      kicker: "WILD LIFE",
      title: "CROCODILES – River Hunters ",
      compactTitle: true,
      imagePath: "images/wild-life-wh-questions/croc-river.webp",
      imageClass: "wide-clean-visual",
      visualBrief: "Wild life question hub placeholder.",
      showAllItems: true,
      listClass: "standard-hub-cross wild-life-wh-grid wild-life-crocodile-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "HABITAT" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/croc-river.webp", sentence: "" },
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/croc-river.webp", sentence: "It lives in the river." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "DIET" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/croc-fish.webp", sentence: "" },
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/croc-fish.webp", sentence: "It eats meat." }
            ]
          }
        },
        {
          kind: "category-list",
          ...wildLifeHubButtonStyles.centerLong,
          parts: [{ text: "CROCODILE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "SPECIES" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What type of animal is it?", imagePath: "images/wild-life-wh-questions/croc-reptile.webp", sentence: "" },
              { question: "What type of animal is it?", imagePath: "images/wild-life-wh-questions/croc-reptile.webp", sentence: "It is a reptile." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "BODY PART" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/croc-scales.webp", sentence: "" },
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/croc-scales.webp", sentence: "It has got scales." }
            ]
          }
        }
      ]
    },
    {
      id: "wild-life-eagle-wh-hub",
      presenceSlide: true,
      focus: "WH",
      kicker: "WILD LIFE",
      title: "EAGLE - Hunter of the sky.",
      compactTitle: true,
      imagePath: "images/wild-life-wh-questions/eagle-habitat.webp",
      imageClass: "wide-clean-visual",
      visualBrief: "Wild life question hub placeholder.",
      showAllItems: true,
      listClass: "standard-hub-cross wild-life-wh-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "HABITAT" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/eagle-habitat.webp", sentence: "" },
              { question: "Where does it live?", imagePath: "images/wild-life-wh-questions/eagle-habitat.webp", sentence: "It lives in the mountain." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "DIET" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/eagle-diet.webp", sentence: "" },
              { question: "What does it eat?", imagePath: "images/wild-life-wh-questions/eagle-diet.webp", sentence: "It eats meat." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "EAGLE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "SPECIES" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What type of animal is it?", imagePath: "images/wild-life-wh-questions/eagle-species.webp", sentence: "" },
              { question: "What type of animal is it?", imagePath: "images/wild-life-wh-questions/eagle-species.webp", sentence: "It is a bird." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "BODY PART" }],
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/eagle-body-part.webp", sentence: "" },
              { question: "What has it got?", imagePath: "images/wild-life-wh-questions/eagle-body-part.webp", sentence: "It has got wings." }
            ]
          }
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(wildLifeWhQuestionsFunction);
