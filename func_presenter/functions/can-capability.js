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
      imagePath: "images/can-ability/collage-photo.webp",
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
              { question: "SIGNATURE ACTIVITY", imagePath: "images/can-ability/benjamin-swim.webp", sentence: "Benjamin <can> swim very well." }
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
              { question: "HOBBY", imagePath: "images/simple-present-like/olivia-painting.webp", sentence: "Olivia <can> draw and paint pictures" }
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
              { question: "SIGNATURE ACTIVITY", imagePath: "images/can-ability/ethan-violin.webp", sentence: "Ethan <can> play violin." }
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
              { question: "HOBBY", imagePath: "images/can-ability/chloe-play-piano.webp", sentence: "Chloe <can> play piano." }
            
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
              { question: "HOBBY", imagePath: "images/simple-present-like/noah-problems.webp", sentence: "Noah <can> do puzzles quickly." }
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
              { question: "HOBBY", imagePath: "images/can-ability/hannah-bike.webp", sentence: "Hannah <can> ride bicycle very well." }
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
              { question: "SIGNATURE ACTIVITY", imagePath: "images/simple-present-like/ella-sing-songs.webp", sentence: "Ella <can> sing very well." }
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
              { question: "HOBBY", imagePath: "../images/5/6/15.webp", sentence: "Emma <can> cook very well " }
            ]
          }
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(canCapabilityFunction);
