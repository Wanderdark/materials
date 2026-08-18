const superlativesFunction = {
  id: "superlatives",
  grade: 5,
  unit: 7,
  title: "Comparative and Superlative Adjectives",
  description: "",
  exercises: ["superlatives-choice", "superlatives-jumbled"],
  sentences: [
    {
      id: "comparatives-intro",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "ADJECTIVE + -er than",
      imagePath: "images/comperatives/ruletable.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "tall → tall" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/giraffe-zebra.webp",
            sentence: "A giraffe is <taller> than a zebra.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "short → short" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/penguin-ostrich.webp",
            sentence: "A penguin is <shorter> than an ostrich.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "fast → fast" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/cheetah-wolf.webp",
            sentence: "A cheetah is <faster> than a wolf.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "er", className: "presence-yellow" }, { text: " than" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "strong → strong" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/gorilla-chimpanzee.webp",
            sentence: "A gorilla is <stronger> than a chimpanzee.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "long → long" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/python-cobra.webp",
            sentence: "A python is <longer> than a cobra.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "big → bigg" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/elephant-lion.webp",
            sentence: "An elephant is <bigger> than a lion.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "comparatives-followup-popup",
      presenceSlide: true,
      title: "CHOOSE AN OPTION",
      compactTitle: true,
      imagePath: "images/comperatives/ruletable.webp",
      showAllItems: true,
      listClass: "inline-choice-list comparatives-followup-list",
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "A tiger is " },
            { options: ["slower", "faster"], answer: "faster" },
            { text: " than an elephant." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "A giraffe is " },
            { options: ["taller", "shorter"], answer: "taller" },
            { text: " than a zebra." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "An elephant is " },
            { options: ["bigger", "smaller"], answer: "bigger" },
            { text: " than a tiger." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "A tiger is " },
            { options: ["quieter", "more dangerous"], answer: "more dangerous" },
            { text: " than a zebra." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "A zebra is " },
            { options: ["quicker", "stronger"], answer: "quicker" },
            { text: " than an elephant." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "A tiger is " },
            { options: ["scarier", "weaker"], answer: "scarier" },
            { text: " than a giraffe." }
          ]
        }
      ]
    },
    {
      id: "superlatives-practice",
      presenceSlide: true,
      kicker: "COMPARATIVES & SUPERLATIVES",
      title: "-er than / the ...-est",
      imagePath: "images/comperatives/ruletable2b.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross ppt-comp-triple",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "tall → tall" }, { text: "er", className: "presence-yellow" }, { text: " → the tall" }, { text: "est", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/giraffe-tallest.webp",
            topSentence: "TALL - TALLER - THE TALLEST",
            sentence: "Giraffe is <the tallest> animal in the savanna.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "strong → strong" }, { text: "er", className: "presence-yellow" }, { text: " → the strong" }, { text: "est", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/lion-strongest.webp",
            topSentence: "STRONG - STRONGER - THE STRONGEST",
            sentence: "The lion is <the strongest> animal in the jungle..",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "fast → fast" }, { text: "er", className: "presence-yellow" }, { text: " → the fast" }, { text: "est", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/cheetah-fastest.webp",
            topSentence: "FAST - FASTER - THE FASTEST",
            sentence: "The cheetah is <the fastest> land animal in the world.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "er", className: "presence-yellow" }, { text: " / -" }, { text: "est", className: "presence-yellow" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "big → big" }, { text: "ger", className: "presence-yellow" }, { text: " → the big" }, { text: "gest", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/elephant-biggest.webp",
            topSentence: "BIG - BIGGER - THE BIGGEST",
            sentence: "The elephant is <the biggest> animal on land.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "slow → slow" }, { text: "er", className: "presence-yellow" }, { text: " → the slow" }, { text: "est", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/turtle-slowest.webp",
            topSentence: "SLOW - SLOWER - THE SLOWEST",
            sentence: "The turtle is <the slowest> animal in the race",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "small → small" }, { text: "er", className: "presence-yellow" }, { text: " → the small" }, { text: "est", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/hummingbird.webp",
            topSentence: "SMALL - SMALLER - THE SMALLEST.",
            sentence: "The hummingbird is <the smallest> bird in the world.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        }
      ]
    },
    {
      id: "superlatives-more-most",
      presenceSlide: true,
      kicker: "COMPARATIVES & SUPERLATIVES",
      title: "more + ADJ + than / the most + ADJ",
      imagePath: "images/comperatives/ruletable3b.webp",
      showAllItems: true,
      listClass: "ppt-comp-diamond",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "beautiful" }],
          overlayData: {
            imagePath: "images/comperatives/butterfly.webp",
            topSentence: "A butterfly is <more beautiful> than a beetle.",
            sentence: "The butterfly is <the most beautiful> insect.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "dangerous" }],
          overlayData: {
            imagePath: "images/comperatives/shark.webp",
            topSentence: "A shark is <more dangerous> than a dolphin.",
            sentence: "The shark is <the most dangerous> animal in the ocean.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "more", className: "presence-yellow" }, { text: " ... / " }, { text: "the most", className: "presence-yellow" }, { text: " ..." }]
        },
        {
          kind: "category-list",
          parts: [{ text: "colorful" }],
          overlayData: {
            imagePath: "images/comperatives/parrot.webp",
            topSentence: "A parrot is <more colorful> than a pigeon.",
            sentence: "The parrot is <the most colorful> bird.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "intelligent" }],
          overlayData: {
            imagePath: "images/comperatives/dolphin.webp",
            topSentence: "A dolphin is <more intelligent> than a whale.",
            sentence: "The dolphin is <the most intelligent> animal in the ocean.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "superlatives-video-chloe-luna-elephant",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_chloe_luna.mp4", lines: [{ speaker: "PRESENTER", parts: [{ text: "The African elephant is " }, { answer: "the heaviest", choices: ["the tallest", "the heaviest"] }, { text: " land animal in the world." }] }] }
    },
    {
      id: "superlatives-video-benjamin-oliver-dolphins",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_benjamin_oliver.mp4", lines: [{ speaker: "PRESENTER", parts: [{ text: "Dolphins are " }, { answer: "the most intelligent", choices: ["the largest", "the most intelligent"] }, { text: " animals in the ocean." }] }] }
    },
    {
      id: "superlatives-video-ella-olivia-giraffe",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_olivia3.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "The giraffe is the " }, { answer: "tallest", choices: ["taller", "tallest"] }, { text: " animal in the world, right?" }] }, { speaker: "OLIVIA", parts: [{ text: "Yep, it can be almost six metres tall." }] }] }
    },
    {
      id: "superlatives-video-benjamin-jack-lions",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_benjamin_jack2.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "Lions have the " }, { answer: "loudest", choices: ["loudest", "louder"] }, { text: " roars, right? We can hear a lion's roar from eight kilometres away." }] }] }
    },
    {
      id: "superlatives-video-ava-chloe-shark",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ava_chloe.mp4", lines: [{ speaker: "PRESENTER", parts: [{ text: "The great white shark has " }, { answer: "the biggest", choices: ["the biggest", "the smallest"] }, { text: " teeth among ocean animals." }] }] }
    },
    {
      id: "superlatives-video-hannah-ingrid-horses",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_hannah_ingrid.mp4", lines: [{ speaker: "PRESENTER", parts: [{ text: "Horses have the " }, { answer: "biggest", choices: ["most beautiful", "biggest"] }, { text: " eyes of all land animals!" }] }] }
    },
    {
      id: "superlatives-video-jack-fastest-fish",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_jack.mp4", lines: [{ speaker: "JACK", parts: [{ text: "The " }, { answer: "fastest", choices: ["fastest", "biggest"] }, { text: " fish is coming, luckiest catch ever." }] }] }
    },
    {
      id: "comparatives-student-reveal",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "Make superlatives!",
      imagePath: "images/comperatives/cheetah-fastest.webp",
      showAllItems: true,
      listClass: "ppt-comp-reveal-list",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "THE CHEETAH / FAST" },],
          revealImage: "images/comperatives/cheetah-fastest.webp",
          revealSentences: ["The cheetah is <the fastest> animal."]
        },
        {
          kind: "category-list",
          parts: [{ text: "GIRAFFE / TALL" },],
          revealImage: "images/comperatives/giraffe-tallest.webp",
          revealSentences: ["The giraffee is <the tallest> animal."]
        },
        {
          kind: "category-list",
          parts: [{ text: "SHARK / DANGEROUS" },],
          revealImage: "images/comperatives/shark.webp",
          revealSentences: ["Shark is <the most dangerous> sea animal"]
        },
        {
          kind: "category-list",
          parts: [{ text: "WINTER / COLD / SEASON" },],
          revealImage: "images/comperatives/winter-colder-than-summer.webp",
          revealSentences: ["Winter is <the coldest> season."]
        },
     
        {
          kind: "category-list",
          parts: [{ text: "CHEETAH / FAST / LAND" },],
          revealImage: "images/comperatives/cheetah-fastest.webp",
          revealSentences: ["The cheetah is <the fastest> animal on land"]
        },
        {
          kind: "category-list",
          parts: [{ text: "BUTTERFLY / BEAUTIFUL / INSECT" },],
          revealImage: "images/comperatives/butterfly.webp",
          revealSentences: ["The butterfly is <the most beautiful> insect"]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(superlativesFunction);
