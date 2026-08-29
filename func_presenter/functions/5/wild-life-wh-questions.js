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
    },
    {
      id: "wild-life-wh-video-daniel-lucas-tiger",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_daniel_lucas.mp4", lines: [{ speaker: "DANIEL", parts: [{ answer: "What", choices: ["What", "where"] }, { text: " do they eat?" }] }, { speaker: "LUCAS", parts: [{ text: "Meat. A tiger can eat about forty kilos in one meal!" }] }] }
    },
    {
      id: "wild-life-wh-video-mia-zoe-gorillas",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_mia_zoe2.mp4", lines: [{ speaker: "MIA", parts: [{ answer: "Where", choices: ["What", "Where"] }, { text: " do gorillas live?" }] }, { speaker: "ZOE", parts: [{ text: "They live in forests in Africa. They build a new bed every night!" }] }] }
    },
    {
      id: "wild-life-wh-video-ella-olivia-whales",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_olivia2.mp4", lines: [{ speaker: "ELLA", parts: [{ answer: "Where", choices: ["What", "Where"] }, { text: " do whales live?" }] }, { speaker: "OLIVIA", parts: [{ text: "They live in oceans all around the world. They travel thousands of kilometres every year!" }] }] }
    },
    {
      id: "wild-life-wh-video-chloe-olivia-crocodiles",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_chloe_olivia.mp4", lines: [{ speaker: "CHLOE", parts: [{ answer: "Where", choices: ["Where", "what"] }, { text: " do crocodiles sleep?" }] }, { speaker: "OLIVIA", parts: [{ text: "Sometimes underwater. They can stay there for hours!" }] }] }
    }
  ]
};

const wildLifeWhQuestionsVideoStartIndex = wildLifeWhQuestionsFunction.sentences.findIndex(
  (item) => item.id === "wild-life-wh-video-daniel-lucas-tiger"
);
const wildLifeWhQuestionsVideoItems = wildLifeWhQuestionsFunction.sentences
  .slice(wildLifeWhQuestionsVideoStartIndex, wildLifeWhQuestionsVideoStartIndex + 4)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

wildLifeWhQuestionsFunction.sentences.splice(
  wildLifeWhQuestionsVideoStartIndex,
  wildLifeWhQuestionsVideoItems.length,
  {
    id: "wild-life-wh-questions-video-hub",
    noVisual: true,
    simplePresentVideoHub: {
      title: "WATCH AND COMPLETE",
      items: wildLifeWhQuestionsVideoItems
    }
  }
);

window.functionModules = window.functionModules || [];
window.functionModules.push(wildLifeWhQuestionsFunction);
