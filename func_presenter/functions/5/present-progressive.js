const _ppVsSpExercise = {
  id: "pp-vs-sp-choice",
  activity: "paragraph-choice",
  title: "CHOOSE CORRECT OPTION",
  pages: [
    {
      imagePath: "../images/5/4/8.webp",
      sentences: [{ segments: [{ text: "We always " }, { options: ["go", "going", "goes"], answer: "go" }, { text: " to the beach on Sundays." }] }]
    },
    {
      imagePath: "../images/5/4/22.webp",
      sentences: [{ segments: [{ text: "Emma is " }, { options: ["having", "has"], answer: "having" }, { text: " a picnic with her friends now." }] }]
    },
    {
      imagePath: "../images/5/4/5.webp",
      sentences: [{ segments: [{ text: "Hannah " }, { options: ["have", "having", "has"], answer: "has" }, { text: " a barbecue with her family every Sunday." }] }]
    },
    {
      imagePath: "../images/5/4/29.webp",
      sentences: [{ segments: [{ text: "Benjamin " }, { options: ["visiting", "visit", "visits"], answer: "visits" }, { text: " his grandparents once a week." }] }]
    },
    {
      imagePath: "images/present-progressive/organizeparty.webp",
      sentences: [{ segments: [{ text: "Emma is " }, { options: ["organising", "organises"], answer: "organising" }, { text: " a birthday party for Chloe now." }] }]
    },
    {
      imagePath: "../images/5/4/15.webp",
      sentences: [{ segments: [{ text: "Hannah and Emma are " }, { options: ["camp", "camps", "camping"], answer: "camping" }, { text: " in the forest today." }] }]
    },
    {
      imagePath: "../images/5/4/18.webp",
      sentences: [{ segments: [{ text: "Jack " }, { options: ["go", "goes", "is going"], answer: "goes" }, { text: " fishing with his father every weekend." }] }]
    },
    {
      imagePath: "../images/5/4/23.webp",
      sentences: [{ segments: [{ text: "I " }, { options: ["write", "am writing", "is writing"], answer: "am writing" }, { text: " in my diary at the moment." }] }]
    }
  ],
  supports() { return false; }
};

const presentProgressiveFunction = {
  id: "present-progressive",
  grade: 5,
  unit: 4,
  title: "Present Progressive Tense",
  description: "",
  exercises: ["present-progressive-fill-blank", "present-progressive-choice", "present-progressive-jumbled"],
  sentences: [
    {
      id: "present-progressive-intro",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "VERB + ING",
      imagePath: "images/present-progressive/whataretheydoing.webp",
      visualBrief: "Present progressive tense intro.",
      showAllItems: true,
      listClass: "ppt-verb-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "read  →  read" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/present-progressive/readbooks.webp",
            sentence: "I am <reading> a book."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "do  →  do" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/present-progressive/dohomework.webp",
            sentence: "Noah is <doing> homework."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "ING", className: "presence-yellow" }],
          swapImage: "images/present-progressive/ruletable.webp"
        },
        {
          kind: "category-list",
          parts: [{ text: "ride  →  rid" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/present-progressive/ridescooter.webp",
            sentence: "Daniel is <riding> a scooter."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "play  →  play" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "../images/5/4/21.webp",
            sentence: "They are <playing> football."
          }
        }
      ]
    },
    {
      id: "present-progressive-examples-2",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "VERB + ING",
      imagePath: "images/present-progressive/ruletable.webp",
      visualBrief: "Present progressive rule table.",
      showAllItems: true,
      listClass: "ppt-verb-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "ride  →  rid" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What is Hannah doing?",
            imagePath: "../images/5/4/16.webp",
            sentence: "She <is> rid<ing> a bicycle."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "drink  →  drink" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What are you doing?",
            imagePath: "images/present-progressive/drinkcoffee.webp",
            sentence: "I'm drink<ing> hot chocolate."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "ING", className: "presence-yellow" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "swim  →  swimm" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What is Benjamin doing?",
            imagePath: "images/common/swim-benjamin-1.webp",
            sentence: "He <is> swimm<ing>."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "have  →  hav" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What are they doing?",
            imagePath: "../images/5/4/11.webp",
            sentence: "They <are> hav<ing> a party."
          }
        }
      ]
    },
    {
      id: "present-progressive-interactive",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "Let's practice!",
      imagePath: "images/present-progressive/ruletable.webp",
      visualBrief: "Present progressive rule table.",
      showAllItems: true,
      listClass: "ppt-verb-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "ride  →  rid" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What is Hannah doing?",
            imagePath: "images/common/ride-bike-hannah-1.webp",
            interactiveSentences: [
              {
                segments: [
                  { text: "She " },
                  { options: ["am", "is", "are"], answer: "is" },
                  { text: " " },
                  { options: ["rides", "riding"], answer: "riding" },
                  { text: " a bicycle." }
                ]
              }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "take  →  tak" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What are you doing?",
            imagePath: "images/present-progressive/takecareofdog.webp",
            interactiveSentences: [
              {
                segments: [
                  { text: "I " },
                  { options: ["am", "is", "are"], answer: "am" },
                  { text: " " },
                  { options: ["take", "takes", "taking"], answer: "taking" },
                  { text: " care of my dog now." }
                ]
              }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "ING", className: "presence-yellow" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "water  →  water" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What is Jack doing?",
            imagePath: "images/common/water-flowers-jack-13-1.webp",
            interactiveSentences: [
              {
                segments: [
                  { text: "Jack " },
                  { options: ["am", "is", "are"], answer: "is" },
                  { text: " " },
                  { options: ["waters", "watering", "wateri"], answer: "watering" },
                  { text: " the flowers in the garden." }
                ]
              }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "do  →  do" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            question: "What are Ethan and Jack doing?",
            imagePath: "images/present-progressive/dohomeworks.webp",
            interactiveSentences: [
              {
                segments: [
                  { text: "They " },
                  { options: ["am", "is", "are"], answer: "are" },
                  { text: " " },
                  { options: ["doing", "do", "does"], answer: "doing" },
                  { text: " homeworks now." }
                ]
              }
            ]
          }
        }
      ],
      exerciseLink: "present-progressive-choice"
    },
    {
      id: "present-progressive-what-doing",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "What are they doing?",
      compactTitle: true,
      imagePath: "images/present-progressive/whataretheydoing.webp",
      showAllItems: true,
      listClass: "ppt-character-list",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "Hannah" }],
          revealSentence: "Hannah <is> rid<ing> a bicycle."
        },
        {
          kind: "category-list",
          parts: [{ text: "Olivia" }],
          revealSentence: "Olivia <is> tak<ing> a photo."
        },
        {
          kind: "category-list",
          parts: [{ text: "Chloe" }],
          revealSentence: "Chloe <is> danc<ing>."
        },
        {
          kind: "category-list",
          parts: [{ text: "Daniel" }],
          revealSentence: "Daniel <is> rid<ing> his scooter."
        },
        {
          kind: "category-list",
          parts: [{ text: "Benjamin" }],
          revealSentence: "Benjamin <is> read<ing> a book."
        }
      ]
    },
    {
      id: "present-progressive-video-chloe-luna",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_chloe_luna.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Luna, what " }, { answer: "are", choices: ["is", "are"] }, { text: " you doing? Fine, you play it, I'll listen." }] }] }
    },
    {
      id: "present-progressive-video-emma-chloe-foam",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/school_life_emma_chloe.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "The foam is " }, { answer: "rising", choices: ["rise", "rising"] }, { text: " too fast." }] }, { speaker: "CHLOE", parts: [{ text: "I'll move the books!" }] }] }
    },
    {
      id: "present-progressive-video-ella-olivia-sunny",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/school_life_olivia_ella_sunny.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Sunny took my ribbon!" }] }, { speaker: "OLIVIA", parts: [{ text: "He's " }, { answer: "flying", choices: ["flying", "flies"] }, { text: " toward the fountain!" }] }] }
    },
    {
      id: "present-progressive-video-olivia-balloon",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_school_life_ella_olivia_2.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "My balloon " }, { answer: "is", choices: ["is", "are"] }, { text: " getting away." }] }] }
    },
    {
      id: "present-progressive-video-victoria-pixel",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_victoria_pixel.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "Great, you are " }, { answer: "coding", choices: ["code", "coding"] }, { text: " now?" }] }] }
    },
    {
      id: "present-progressive-video-emma-david-worksheets",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/classroom_life_emma_david.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "The worksheets " }, { answer: "are", choices: ["am", "is", "are"] }, { text: " flying everywhere." }] }, { speaker: "DAVID", parts: [{ text: "I've got the last one!" }] }] }
    },
    {
      id: "present-progressive-video-chloe-ella-olivia",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_chloe_ella_olivia.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Chloe, what " }, { answer: "are", choices: ["am", "is", "are"] }, { text: " you doing?" }] }, { speaker: "CHLOE", parts: [{ text: "Just " }, { answer: "having", choices: ["have", "having"] }, { text: " fun." }] }] }
    },
    {
      id: "present-progressive-video-chloe-luna-reading",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_chloe_luna2.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Heyyy, I " }, { answer: "am", choices: ["am", "is", "are"] }, { text: " reading here." }] }] }
    },
    {
      id: "present-progressive-video-hannah-lars-packing",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_hannah_lars.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "What " }, { answer: "are", choices: ["is", "are"] }, { text: " you packing, Dad?" }] }, { speaker: "LARS", parts: [{ text: "I'm " }, { answer: "preparing", choices: ["prepare", "preparing"] }, { text: " our camping bags." }] }] }
    },
    {
      id: "present-progressive-video-ella-charlotte-sunny",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_ella_charlotte_sunny.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "What are you " }, { answer: "playing", choices: ["play", "playing"] }, { text: ", Mum?" }] }, { speaker: "CHARLOTTE", parts: [{ text: "I " }, { answer: "am", choices: ["am", "is", "are"] }, { text: " practising a new song." }] }] }
    },
    {
      id: "present-progressive-video-hannah-lars-ingrid",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_hannah_lars_ingrid.mp4", lines: [{ speaker: "INGRID", parts: [{ text: "We " }, { answer: "are", choices: ["is", "are"] }, { text: " driving to the forest, aren't we?" }] }, { speaker: "HANNAH", parts: [{ text: "Yeyyy, Barbecue time!" }] }] }
    },
    {
      id: "present-progressive-video-victoria-monica",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_victoria_monica.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "You're " }, { answer: "working", choices: ["working", "works"] }, { text: " at home today, aren't you, Mum?" }] }, { speaker: "MONICA", parts: [{ text: "Yes, I'm finishing an important task." }] }, { speaker: "VICTORIA", parts: [{ text: "Do you need any help?" }] }] }
    },
    {
      id: "present-progressive-video-ethan-james",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_ethan_james.mp4", lines: [{ speaker: "ETHAN", parts: [{ text: "You're " }, { answer: "reading", choices: ["read", "reading"] }, { text: " the sports page, aren't you, Dad?" }] }, { speaker: "JAMES", parts: [{ text: "Yes, I am, I " }, { answer: "am", choices: ["am", "is", "are"] }, { text: " checking the golf results." }] }] }
    },
    {
      id: "present-progressive-video-emma-sophie",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_emma_sophie.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "What " }, { answer: "are", choices: ["is", "are"] }, { text: " you cooking, Mum?" }] }, { speaker: "SOPHIE", parts: [{ text: "I'm " }, { answer: "cooking", choices: ["cook", "cooking"] }, { text: " vegetable soup, dear." }] }] }
    },
    {
      id: "present-progressive-video-chloe-julien",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_chloe_julien.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "What are you " }, { answer: "doing", choices: ["do", "doing"] }, { text: ", Dad?" }] }, { speaker: "JULIEN", parts: [{ text: "I " }, { answer: "am", choices: ["am", "is", "are"] }, { text: " organising the living room." }] }] }
    },
    {
      id: "present-progressive-video-victoria-pixel-fun",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/fun_victoria_pixel.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "What " }, { answer: "am", choices: ["am", "are"] }, { text: " I doing wrong?" }] }] }
    },
    {
      id: "pp-vs-simple-present",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "PRESENT PROGRESSIVE vs. SIMPLE PRESENT",
      compactTitle: true,
      imagePath: "images/present-progressive/ruletable.webp",
      showAllItems: true,
      listClass: "ppt-verb-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "ride" }],
          overlayData: {
            comparison: {
              left: {
                imagePath: "../images/5/4/16.webp",
                imageScale: 0.6,
                caption: "I ride my bicycle to school every day."
              },
              right: {
                imagePath: "images/present-progressive/gobybus.webp",
                revealSentence: "But I <am> go<ing> to school by bus today."
              }
            }
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "take" }],
          overlayData: {
            comparison: {
              left: {
                imagePath: "images/present-progressive/takephoto.webp",
                imageScale: 0.6,
                caption: "Olivia take<s> photos in the park every weekend."
              },
              right: {
                imagePath: "images/present-progressive/paint.webp",
                revealSentence: "She <is> paint<ing> at home today."
              }
            }
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "VS" }],
          toggleImages: ["images/present-progressive/ruletable.webp", "images/present-progressive/ruletable2.webp"]
        },
        {
          kind: "category-list",
          parts: [{ text: "go" }],
          overlayData: {
            comparison: {
              left: {
                imagePath: "images/present-progressive/jackfishing.webp",
                imageScale: 0.6,
                caption: "Jack goe<s> fish<ing> with his father every weekend."
              },
              right: {
                imagePath: "images/present-progressive/fishing.webp",
                revealSentence: "But today he <is> fish<ing> alone."
              }
            }
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "play" }],
          overlayData: {
            comparison: {
              left: {
                imagePath: "images/present-progressive/playsoccer.webp",
                imageScale: 0.6,
                caption: "Ethan and Jack always play football after school."
              },
              right: {
                imagePath: "images/present-progressive/dohomeworks.webp",
                revealSentence: "But today they <are> do<ing> homeworks in the library."
              }
            }
          }
        }
      ]
    },
    {
      id: "present-progressive-vs-simple-video-mia-giulia",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_mia_giulia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "You usually cook at this time, Mum." }] }, { speaker: "GIULIA", parts: [{ text: "Yes, but I'm " }, { answer: "reading", choices: ["read", "reads", "reading"] }, { text: " the newspaper now." }] }] }
    },
    {
      id: "present-progressive-vs-simple-video-chloe-camille-julien",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_chloe_camille_julien.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "You usually bake cakes, Mum." }] }, { speaker: "CAMILLE", parts: [{ text: "Yes, but I'm " }, { answer: "making", choices: ["make", "makes", "making"] }, { text: " pancakes now." }] }] }
    },
    {
      id: "present-progressive-vs-simple-video-benjamin-oliver",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_benjamin_oliver.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "You usually swim in the morning, Dad." }] }, { speaker: "OLIVER", parts: [{ text: "Yes, but I'm " }, { answer: "resting", choices: ["rest", "rests", "resting"] }, { text: " today." }] }] }
    },
    {
      id: "present-progressive-vs-simple-video-daniel-javier",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_daniel_javier.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "You usually fix cars, Dad." }] }, { speaker: "JAVIER", parts: [{ text: "Yes, but I'm " }, { answer: "fixing", choices: ["fix", "fixes", "fixing"] }, { text: " my bicycle today." }] }] }
    },
    {
      id: "present-progressive-vs-simple-video-lucas-gabriel",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_lucas_gabriel.mp4", lines: [{ speaker: "LUCAS", parts: [{ text: "You usually work on Saturdays, Dad." }] }, { speaker: "GABRIEL", parts: [{ text: "Yes, but we're " }, { answer: "having", choices: ["have", "has", "having"] }, { text: " a picnic today." }] }, { speaker: "LUCAS", parts: [{ text: "Yesss!" }] }] }
    },
    {
      id: "present-progressive-vs-simple-video-benjamin-oliver-emily",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_benjamin_oliver_emily.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "You always plan holidays for other people, Mum." }] }, { speaker: "EMILY", parts: [{ text: "Yes, but I'm " }, { answer: "planning", choices: ["plan", "plans", "planning"] }, { text: " for us today." }] }, { speaker: "BENJAMIN", parts: [{ text: "This one looks so cool!" }] }] }
    }
  ]
};

const presentProgressiveVideoHubItems = (startId, count) => {
  const startIndex = presentProgressiveFunction.sentences.findIndex((item) => item.id === startId);
  return {
    startIndex,
    items: presentProgressiveFunction.sentences.slice(startIndex, startIndex + count).map((item) => ({
      id: item.id,
      speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
      videoDialogue: item.videoDialogue
    }))
  };
};

const presentProgressiveFirstVideoHub = presentProgressiveVideoHubItems("present-progressive-video-chloe-luna", 16);
presentProgressiveFunction.sentences.splice(presentProgressiveFirstVideoHub.startIndex, presentProgressiveFirstVideoHub.items.length, {
  id: "present-progressive-video-hub-1",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: presentProgressiveFirstVideoHub.items
  }
});

const presentProgressiveSecondVideoHub = presentProgressiveVideoHubItems("present-progressive-vs-simple-video-mia-giulia", 6);
presentProgressiveFunction.sentences.splice(presentProgressiveSecondVideoHub.startIndex, presentProgressiveSecondVideoHub.items.length, {
  id: "present-progressive-video-hub-2",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: presentProgressiveSecondVideoHub.items
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(presentProgressiveFunction);
