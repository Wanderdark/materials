const canCapabilityFunction = {
  id: "can-capability",
  grade: 5,
  unit: 7,
  title: 'Can for Capability',
  description: "",
  exercises: ["can-capability-choice"],
  sentences: [
    {
      id: "can-capability-examples",
      presenceSlide: true,
      focus: "CAN",
      kicker: "CAPABILITY",
      title: "What can animals do?",
      compactTitle: true,
      replaceCurrentItem: true,
      imagePath: "../images/0/11/9.webp",
      visualBrief: "Animal capability examples.",
      items: [
        {
          kind: "capability-line",
          imagePathOnShow: "../images/0/11/9.webp",
          parts: [{ text: "Fish " }, { text: "can", className: "presence-yellow" }, { text: " swim." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "images/can-ability/monkey-climb.webp",
          parts: [{ text: "Monkeys " }, { text: "can", className: "presence-yellow" }, { text: " climb trees." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "images/can-ability/kangoroo-jump.webp",
          parts: [{ text: "Kangaroos " }, { text: "can", className: "presence-yellow" }, { text: " jump." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "images/can-ability/eagle-fly.webp",
          parts: [{ text: "Eagles " }, { text: "can", className: "presence-yellow" }, { text: " fly." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "../images/0/11/17.webp",
          parts: [{ text: "Cheetahs " }, { text: "can", className: "presence-yellow" }, { text: " run very fast." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "../images/5/7/15.webp",
          parts: [{ text: "Penguins " }, { text: "can't", className: "presence-yellow" }, { text: " fly." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "images/can-ability/lion-cant-climb.webp",
          parts: [{ text: "Lions " }, { text: "can't", className: "presence-yellow" }, { text: " climb trees." }]
        },
        {
          kind: "capability-line",
          imagePathOnShow: "images/can-ability/elephant-cant-jump.webp",
          parts: [{ text: "Elephants " }, { text: "can't", className: "presence-yellow" }, { text: " jump." }]
        }
      ]
    },
    {
      id: "can-capability-can-cant-check",
      presenceSlide: true,
      focus: "CAN / CAN'T",
      kicker: "QUICK CHECK",
      title: "Choose can or can't.",
      compactTitle: true,
      replaceCurrentItem: true,
      imagePath: "../images/0/11/7.webp",
      visualBrief: "Can and can't sentence check.",
      listClass: "can-capability-choice-list",
      items: [
        {
          imagePathOnShow: "images/can-ability/lion-attack.webp",
          parts: [{ text: "A lion ____ attack animals in the jungle." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/0/11/10.webp",
          parts: [{ text: "A tiger ____ move fast." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "images/can-ability/monkey-climb.webp",
          parts: [{ text: "A monkey ____ climb trees." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/0/11/6.webp",
          parts: [{ text: "A parrot ____ talk and imitate." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/5/7/16.webp",
          parts: [{ text: "A seagull ____ fly." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/0/11/9.webp",
          parts: [{ text: "Fishes ____ swim." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "images/can-ability/kangoroo-jump.webp",
          parts: [{ text: "Kangaroos ____ jump." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "images/can-ability/eagle-fly.webp",
          parts: [{ text: "Eagles ____ fly fast." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/0/11/17.webp",
          parts: [{ text: "Cheetahs ____ run very fast." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/5/7/15.webp",
          parts: [{ text: "Penguins ____ swim." }],
          choices: ["can", "can't"],
          answer: "can"
        },
        {
          imagePathOnShow: "../images/0/11/3.webp",
          parts: [{ text: "Snakes ____ poison." }],
          choices: ["can", "can't"],
          answer: "can"
        }
      ]
    },
    {
      id: "can-capability-character-hub",
      presenceSlide: true,
      focus: "CHOOSE ONE",
      kicker: "OUR CLASSROOM UNIVERSE",
      title: "Click a character.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-1.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Characters and their abilities.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "BENJAMIN" }],
          nameTag: { x: 150, y: 30, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/common/swim-benjamin-1.webp", sentence: "Benjamin <can> swim very well." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "OLIVIA" }],
          nameTag: { x: 510, y: 170, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "HOBBY", imagePath: "images/common/paint-olivia-1.webp", sentence: "Olivia <can> draw and paint pictures" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ETHAN" }],
          nameTag: { x: 165, y: 145, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/common/play-violin-ethan-1.webp", sentence: "Ethan <can> play violin." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHLOE" }],
          nameTag: { x: 250, y: 30, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "HOBBY", imagePath: "images/common/play-piano-chloe-1.webp", sentence: "Chloe <can> play piano." }
            
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHOOSE\nONE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "NOAH" }],
          nameTag: { x: 410, y: 155, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "HOBBY", imagePath: "images/common/solve-puzzles-noah-1.webp", sentence: "Noah <can> do puzzles quickly." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "HANNAH" }],
          nameTag: { x: 290, y: 155, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "HOBBY", imagePath: "images/common/ride-bike-hannah-1.webp", sentence: "Hannah <can> ride bicycle very well." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ELLA" }],
          nameTag: { x: 375, y: 40, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/common/sing-ella-1.webp", sentence: "Ella <can> sing very well." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "EMMA" }],
          nameTag: { x: 480, y: 40, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            imageAspect: "1 / 1",
            imageFit: "cover",
            steps: [
              { question: "HOBBY", imagePath: "images/common/cook-emma-1.webp", sentence: "Emma <can> cook very well " }
            ]
          }
        }
      ]
    },
    {
      id: "can-capability-video-ella-sunny-parrots",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_sunny.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Parrots " }, { answer: "can", choices: ["can", "can't"] }, { text: " imitate sounds." }] }] }
    },
    {
      id: "can-capability-video-hannah-storm-jump",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_hannah_storm.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Storm " }, { answer: "can", choices: ["can", "can't"] }, { text: " jump really high." }] }] }
    },
    {
      id: "can-capability-video-jack-benjamin-catch",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_jack_benjamin.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "Benjamin " }, { answer: "can't", choices: ["can", "can't"] }, { text: " catch everything." }] }] }
    },
    {
      id: "can-capability-video-hannah-elephants",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_hannah.mp4", lines: [{ speaker: "GUIDE", parts: [{ text: "Elephants " }, { answer: "can", choices: ["can", "can't"] }, { text: " swim very well." }] }] }
    },
    {
      id: "can-capability-video-ella-olivia-penguins",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_olivia.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Penguins " }, { answer: "can", choices: ["can", "can't"] }, { text: " swim fast." }] }, { speaker: "OLIVIA", parts: [{ text: "They " }, { answer: "can't", choices: ["can", "can't"] }, { text: " fly." }] }] }
    },
    {
      id: "can-capability-video-chloe-emma-cookie",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_chloe_emma.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Chloe " }, { answer: "can't", choices: ["can", "can't"] }, { text: " catch the cookie with her mouth." }] }] }
    },
    {
      id: "can-capability-video-benjamin-lucas-cheetahs",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_benjamin_lucas.mp4", lines: [{ speaker: "LUCAS", parts: [{ text: "Cheetahs " }, { answer: "can", choices: ["can", "can't"] }, { text: " run really fast." }] }] }
    },
    {
      id: "can-capability-video-noah-lucas-lift",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_noah_lucas.mp4", lines: [{ speaker: "NOAH", parts: [{ text: "So, can you lift that?" }] }, { speaker: "LUCAS", parts: [{ text: "Well, I " }, { answer: "can't", choices: ["can", "can't"] }, { text: "." }] }] }
    },
    {
      id: "can-capability-video-mia-crocodiles",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_mia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "Crocodiles " }, { answer: "can", choices: ["can", "can't"] }, { text: " live for months without food." }] }] }
    },
    {
      id: "can-capability-video-daniel-snakes",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_daniel.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "Snakes " }, { answer: "can", choices: ["can", "can't"] }, { text: " smell with their tongue, but Daniel " }, { answer: "can't", choices: ["can", "can't"] }, { text: "." }] }] }
    },
    {
      id: "can-capability-video-ella-sunny-olivia-parrots",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_sunny_olivia.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Some parrots " }, { answer: "can", choices: ["can", "can't"] }, { text: " learn hundreds of words, but it seems my parrot " }, { answer: "can't", choices: ["can", "can't"] }, { text: "." }] }] }
    },
    {
      id: "can-capability-video-chloe-chameleons",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_chloe.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Chameleons " }, { answer: "can", choices: ["can", "can't"] }, { text: " move their eyes in different directions!" }] }] }
    },
    {
      id: "can-capability-video-victoria-pixel-password",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_victoria_pixel.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "I " }, { answer: "can't", choices: ["can", "can't"] }, { text: " remember my password." }] }] }
    },
    {
      id: "can-capability-video-ella-sunny-read",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_sunny3.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Sunny " }, { answer: "can", choices: ["can", "can't"] }, { text: " read." }] }] }
    }
  ]
};

const canCapabilityVideoStartIndex = canCapabilityFunction.sentences.findIndex(
  (item) => item.id === "can-capability-video-ella-sunny-parrots"
);
const canCapabilityVideoItems = canCapabilityFunction.sentences
  .slice(canCapabilityVideoStartIndex, canCapabilityVideoStartIndex + 14)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

canCapabilityFunction.sentences.splice(canCapabilityVideoStartIndex, canCapabilityVideoItems.length, {
  id: "can-capability-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: canCapabilityVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(canCapabilityFunction);
