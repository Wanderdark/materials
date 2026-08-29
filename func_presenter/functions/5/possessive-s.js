const possessiveSFunction = {
  id: "possessive-s",
  grade: 5,
  unit: 5,
  title: "Possessive -s & Simple Present for Habitual Actions",
  description: "",
  exercises: [],
  returnToSetupOnComplete: true,
  sentences: [
    {
      id: "possessive-s-objects",
      presenceSlide: true,
      focus: "POSSESSIVE -S",
      kicker: "OBJECTS",
      title: "Click an object.",
      compactTitle: true,
      imagePath: "images/possessive-s/hannah-bike.webp",
      visualBrief: "Objects that belong to different people.",
      showAllItems: true,
      listClass: "house-room-grid possessive-s-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "BICYCLE" }],
          overlayData: {
            imagePath: "images/possessive-s/hannah-bike.webp",
            sentence: "This is Hannah<'s> bicycle. She rides it to school every day.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "PIANO" }],
          overlayData: {
            imagePath: "images/possessive-s/chloe-piano.webp",
            sentence: "This is Chloe<'s> piano. She practices every evening.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "FOOTBALL" }],
          overlayData: {
            imagePath: "images/possessive-s/lucas-ball.webp",
            sentence: "This is Lucas<'s> football. He practices after school every afternoon.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "OBJECTS" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "ROBOT" }],
          overlayData: {
            imagePath: "images/possessive-s/emma-robot.webp",
            sentence: "This is Emma<'s> robot. She built it for the STEM Club.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CAMERA" }],
          overlayData: {
            imagePath: "images/possessive-s/olivia-camera.webp",
            sentence: "This is Olivia<'s> camera. She enjoys taking beautiful photos.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "SCOOTER" }],
          overlayData: {
            imagePath: "images/possessive-s/bejamin-scooter.webp",
            sentence: "This is Benjamin<'s> scooter. He rides it to school every morning.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "VIOLIN" }],
          overlayData: {
            imagePath: "images/possessive-s/ethan-violin.webp",
            sentence: "This is Ethan<'s> violin. He practices every evening.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "DIARY" }],
          overlayData: {
            imagePath: "images/possessive-s/mia-diary.webp",
            sentence: "This is Mia<'s> diary. She writes in it every night.",
            imageAspect: "1/1",
            overlaySize: true
          }
        }
      ]
    },
    {
      id: "possessive-s-adjective-bridge",
      presenceSlide: true,
      focus: "POSSESSIVE ADJECTIVES",
      kicker: "POSSESSIVE -S + HIS / HER",
      title: "Choose the correct possessive adjective.",
      compactTitle: true,
      imagePath: "images/possessive-s/hannah-bike.webp",
      imageClass: "inline-choice-visual",
      visualBrief: "Hannah's bicycle.",
      replaceCurrentItem: true,
      listClass: "inline-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/hannah-bike.webp",
          segments: [
            { text: "This is Hannah" },
            { text: "'s", className: "presence-yellow" },
            { text: " bicycle. This is " },
            { options: ["his", "her", "him"], answer: "her" },
            { text: " bicycle." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/chloe-piano.webp",
          segments: [
            { text: "This is Chloe" },
            { text: "'s", className: "presence-yellow" },
            { text: " piano. This is " },
            { options: ["his", "her", "him"], answer: "her" },
            { text: " piano." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/lucas-ball.webp",
          segments: [
            { text: "This is Lucas" },
            { text: "'s", className: "presence-yellow" },
            { text: " football. This is " },
            { options: ["his", "her", "him"], answer: "his" },
            { text: " football." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/emma-robot.webp",
          segments: [
            { text: "This is Emma" },
            { text: "'s", className: "presence-yellow" },
            { text: " robot. This is " },
            { options: ["his", "her", "him"], answer: "her" },
            { text: " robot." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/olivia-camera.webp",
          segments: [
            { text: "This is Olivia" },
            { text: "'s", className: "presence-yellow" },
            { text: " camera. This is " },
            { options: ["his", "her", "him"], answer: "her" },
            { text: " camera." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/bejamin-scooter.webp",
          segments: [
            { text: "This is Benjamin" },
            { text: "'s", className: "presence-yellow" },
            { text: " scooter. This is " },
            { options: ["his", "her", "him"], answer: "his" },
            { text: " scooter." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/ethan-violin.webp",
          segments: [
            { text: "This is Ethan" },
            { text: "'s", className: "presence-yellow" },
            { text: " violin. This is " },
            { options: ["his", "her", "him"], answer: "his" },
            { text: " violin." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/possessive-s/mia-diary.webp",
          segments: [
            { text: "This is Mia" },
            { text: "'s", className: "presence-yellow" },
            { text: " diary. This is " },
            { options: ["his", "her", "him"], answer: "her" },
            { text: " diary." }
          ]
        }
      ]
    },
    {
      id: "possessive-s-my-to-name",
      presenceSlide: true,
      focus: "POSSESSIVE -S",
      kicker: "MY OBJECT -> NAME'S OBJECT",
      title: "Listen and reveal.",
      compactTitle: true,
      imagePath: "images/possessive-s/hannah-bike.webp",
      imageClass: "inline-choice-visual",
      visualBrief: "Hannah's bicycle.",
      speechText: "This is my bike.",
      speakerName: "HANNAH",
      replaceCurrentItem: true,
      listClass: "inline-choice-list possessive-reveal-list",
      items: [
        {
          imagePathOnShow: "images/possessive-s/hannah-bike.webp",
          speechText: "This is my bike.",
          speakerName: "HANNAH",
          parts: [
            { text: "This is Hannah" },
            { text: "'s", className: "presence-yellow" },
            { text: " bike." }
          ]
        },
        {
          imagePathOnShow: "images/possessive-s/chloe-piano.webp",
          speechText: "This is my piano.",
          speakerName: "CHLOE",
          parts: [{ text: "What is Chloe saying?" }],
          answerParts: [
            { text: "This is Chloe" },
            { text: "'s", className: "presence-yellow" },
            { text: " piano." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/lucas-ball.webp",
          speechText: "This is my football.",
          speakerName: "LUCAS",
          parts: [{ text: "What is Lucas saying?" }],
          answerParts: [
            { text: "This is Lucas" },
            { text: "'s", className: "presence-yellow" },
            { text: " football." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/emma-robot.webp",
          speechText: "This is my robot.",
          speakerName: "EMMA",
          parts: [{ text: "What is Emma saying?" }],
          answerParts: [
            { text: "This is Emma" },
            { text: "'s", className: "presence-yellow" },
            { text: " robot." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/olivia-camera.webp",
          speechText: "This is my camera.",
          speakerName: "OLIVIA",
          parts: [{ text: "What is Olivia saying?" }],
          answerParts: [
            { text: "This is Olivia" },
            { text: "'s", className: "presence-yellow" },
            { text: " camera." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/bejamin-scooter.webp",
          speechText: "This is my scooter.",
          speakerName: "BENJAMIN",
          parts: [{ text: "What is Benjamin saying?" }],
          answerParts: [
            { text: "This is Benjamin" },
            { text: "'s", className: "presence-yellow" },
            { text: " scooter." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/ethan-violin.webp",
          speechText: "This is my violin.",
          speakerName: "ETHAN",
          parts: [{ text: "What is Ethan saying?" }],
          answerParts: [
            { text: "This is Ethan" },
            { text: "'s", className: "presence-yellow" },
            { text: " violin." }
          ],
          answerReveal: true
        },
        {
          imagePathOnShow: "images/possessive-s/mia-diary.webp",
          speechText: "This is my diary.",
          speakerName: "MIA",
          parts: [{ text: "What is Mia saying?" }],
          answerParts: [
            { text: "This is Mia" },
            { text: "'s", className: "presence-yellow" },
            { text: " diary." }
          ],
          answerReveal: true
        }
      ]
    },
    {
      id: "possessive-s-whose-questions",
      presenceSlide: true,
      focus: "WHOSE?",
      kicker: "WHOSE OBJECT IS THIS?",
      title: "Choose the correct answer.",
      compactTitle: true,
      imagePath: "images/possessive-s/camera.webp",
      imageClass: "inline-choice-visual",
      visualBrief: "A camera.",
      replaceCurrentItem: true,
      listClass: "description-choice-list",
      items: [
        {
          imagePathOnShow: "images/possessive-s/camera.webp",
          parts: [{ text: "Whose camera is this?" }],
          choices: ["It's Hannah's camera.", "It's Olivia's camera.", "It is Mia's camera."],
          answer: "It's Olivia's camera.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/bike.webp",
          parts: [{ text: "Whose bike is this?" }],
          choices: ["It's Hannah's bike.", "It's Chloe's bike.", "It is Emma's bike."],
          answer: "It's Hannah's bike.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/diary.webp",
          parts: [{ text: "Whose diary is this?" }],
          choices: ["It's Mia's diary.", "It's Olivia's diary.", "It is Hannah's diary."],
          answer: "It's Mia's diary.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/piano.webp",
          parts: [{ text: "Whose piano is this?" }],
          choices: ["It's Chloe's piano.", "It's Emma's piano.", "It is Mia's piano."],
          answer: "It's Chloe's piano.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/football.webp",
          parts: [{ text: "Whose football is this?" }],
          choices: ["It's Lucas's football.", "It's Benjamin's football.", "It is Ethan's football."],
          answer: "It's Lucas's football.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/violin.webp",
          parts: [{ text: "Whose violin is this?" }],
          choices: ["It's Ethan's violin.", "It's Lucas's violin.", "It is Benjamin's violin."],
          answer: "It's Ethan's violin.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/scooter.webp",
          parts: [{ text: "Whose scooter is this?" }],
          choices: ["It's Benjamin's scooter.", "It's Lucas's scooter.", "It is Ethan's scooter."],
          answer: "It's Benjamin's scooter.",
          shuffleChoices: true
        },
        {
          imagePathOnShow: "images/possessive-s/robot.webp",
          parts: [{ text: "Whose robot is this?" }],
          choices: ["It's Emma's robot.", "It's Chloe's robot.", "It is Olivia's robot."],
          answer: "It's Emma's robot.",
          shuffleChoices: true
        }
      ]
    },
    {
      id: "possessive-s-video-olivia-chloe-luna",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_olivia_chloe.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Is that " }, { answer: "Luna's", choices: ["Luna's", "Luna"] }, { text: " toy mouse?" }] }, { speaker: "CHLOE", parts: [{ text: "Yes, it's her favorite toy." }] }] }
    },
    {
      id: "possessive-s-video-benjamin-lucas-daniel",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_benjamin_lucas.mp4", lines: [{ speaker: "LUCAS", parts: [{ answer: "Daniel's", choices: ["Daniel's", "Daniels"] }, { text: " sports bag is still here." }] }, { speaker: "BENJAMIN", parts: [{ text: "Again?" }] }, { speaker: "LUCAS", parts: [{ text: "Yep, he'll be back in a minute." }] }] }
    },
    {
      id: "possessive-s-video-olivia-fiona-wig",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_olivia_fiona.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Mom, is that the " }, { answer: "customer's", choices: ["customer's", "customer"] }, { text: " wig?" }] }, { speaker: "FIONA", parts: [{ text: "No, it's the " }, { answer: "mannequin's", choices: ["mannequin's", "mannequins"] }, { text: "." }] }] }
    },
    {
      id: "possessive-s-video-ava-chloe-woman",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_ava_chloe.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "That " }, { answer: "woman's", choices: ["woman's", "woman"] }, { text: " bag is still on the bench." }] }, { speaker: "AVA", parts: [{ text: "She hasn't noticed, excuse me!" }] }, { speaker: "WOMAN", parts: [{ text: "Thank you, sweetie." }] }] }
    },
    {
      id: "possessive-s-video-jack-david-dad",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_jack_david.mp4", lines: [{ speaker: "DAVID", parts: [{ text: "Your " }, { answer: "dad's", choices: ["dad's", "dads"] }, { text: " fishing rod is taller than you." }] }, { speaker: "JACK", parts: [{ text: "Yeah, and he still expects me to carry it." }] }] }
    },
    {
      id: "possessive-s-video-david-valeria-suitcase",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_david_valeria.mp4", lines: [{ speaker: "DAVID", parts: [{ text: "Mom, is that the " }, { answer: "guest's", choices: ["guest's", "guests"] }, { text: " suitcase?" }] }, { speaker: "VALERIA", parts: [{ text: "Yes, it's the " }, { answer: "magician's", choices: ["magician's", "magician"] }, { text: "." }] }] }
    }
  ]
};

const possessiveSVideoStartIndex = possessiveSFunction.sentences.findIndex(
  (item) => item.id === "possessive-s-video-olivia-chloe-luna"
);
const possessiveSVideoItems = possessiveSFunction.sentences
  .slice(possessiveSVideoStartIndex, possessiveSVideoStartIndex + 6)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

possessiveSFunction.sentences.splice(possessiveSVideoStartIndex, possessiveSVideoItems.length, {
  id: "possessive-s-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: possessiveSVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(possessiveSFunction);
