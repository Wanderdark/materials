const comparativesFunction = {
  id: "comparatives",
  grade: 5,
  unit: 5,
  title: "Comparatives of Adjectives",
  description: "",
  exercises: ["comparatives-choice", "comparatives-sort", "comparatives-true-false", "comparatives-lucky-spin", "comparatives-jumbled"],
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
            imagePath: "images/comperatives/ella-taller-than-zoe.webp",
            sentence: "Ella is <taller> than Zoe.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "short → short" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/lucas-taller-than-noah.webp",
            sentence: "Noah is <shorter> than Lucas.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "fast → fast" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
            sentence: "Hannah is <faster> than Daniel.",
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
            imagePath: "images/comperatives/lucas-stronger-than-noah.webp",
            sentence: "Lucas is <stronger> than Noah.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "long → long" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
            sentence: "Chloe's hair is <longer> than Zoe's hair.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "big → bigg" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/big-small-houses.webp",
            sentence: "Chloe's house is <bigger> than Mia's house.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "comparatives-practice",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "ADJECTIVE + -er than",
      imagePath: "images/comperatives/ruletable2.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "tall → tall" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/lucas-taller-than-noah.webp",
            sentence: "Lucas is <taller> than Noah.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "short → short" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/ella-taller-than-zoe.webp",
            sentence: "Zoe is <shorter> than Ella.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "slow → slow" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
            sentence: "Daniel is <slower> than Hannah.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "er", className: "presence-yellow" }, { text: " than" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "weak → weak" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/lucas-stronger-than-noah.webp",
            sentence: "Noah is <weaker> than Lucas.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "short → short" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
            sentence: "Zoe's hair is <shorter> than Chloe's hair.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "small → small" }, { text: "er", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/comperatives/big-small-houses.webp",
            sentence: "Mia's house is <smaller> than Chloe's house.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        }
      ]
    },
    {
      id: "comparatives-more",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "more + ADJECTIVE + than",
      imagePath: "images/comperatives/ruletable3.webp",
      showAllItems: true,
      listClass: "ppt-comp-diamond",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "comfortable" }],
          overlayData: {
            imagePath: "images/comperatives/armchairvssofa.webp",
            sentence: "The sofa is <more comfortable> than the armchair.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "crowded" }],
          overlayData: {
            imagePath: "images/comperatives/villagevscity.webp",
            sentence: "Cities are <more crowded> than villages.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "more", className: "presence-yellow" }, { text: " ... than" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "peaceful" }],
          overlayData: {
            imagePath: "images/comperatives/villagevscity.webp",
            sentence: "Villages are <more peaceful> than cities.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "beautiful" }],
          overlayData: {
            imagePath: "images/comperatives/castlevsflat.webp",
            sentence: "The castle is <more beautiful> than the flat.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "comparatives-questions",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "more + ADJECTIVE + than",
      imagePath: "images/comperatives/ruletable3.webp",
      showAllItems: true,
      listClass: "ppt-comp-diamond",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "short" }],
          overlayData: {
            question: "<Which one> is short<er>? Skyscrapers or flats?",
            imagePath: "images/comperatives/skyscraper-flat.webp",
            sentence: "Flats are <shorter> than skyscrapers.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "fast" }],
          overlayData: {
            question: "<Which one> is fast<er>? Cheetahs or Rabbits?",
            imagePath: "images/comperatives/cheetah-faster-than-rabbit.webp",
            sentence: "A cheetah is <faster> than a rabbit.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "COMPARATIVES" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "expensive" }],
          overlayData: {
            question: "<Which one> is <more> expensive? a motorcycle or a bicycle?",
            imagePath: "images/comperatives/expensive-cheap.webp",
            sentence: "A motorcycle is <more expensive> than a bicycle.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "cold" }],
          overlayData: {
            question: "<Which one> is cold<er>? Winter or Summer?",
            imagePath: "images/comperatives/winter-colder-than-summer.webp",
            sentence: "Winter is <colder> than summer.",
            imageAspect: "1/1", overlaySize: true, revealMode: true
          }
        }
      ]
    },
    {
      id: "comparatives-video-ella-sunny",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ella_sunny2.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Try again, but try " }, { answer: "better", choices: ["gooder", "better"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-hannah-emma-street-fair",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_emma.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "The street fair's music is getting " }, { answer: "louder", choices: ["quieter", "louder"] }, { text: "." }] }, { speaker: "EMMA", parts: [{ text: "Good, we must be getting " }, { answer: "closer", choices: ["closer", "farther"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-zoe-mia-house",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_zoe_mia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "This wooden house looks " }, { answer: "more beautiful", choices: ["beautifuler", "more beautiful"] }, { text: " than that flat." }] }, { speaker: "ZOE", parts: [{ text: "Yes, but the flat is " }, { answer: "more modern", choices: ["moderner", "more modern"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-zoe-mia-flat",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_zoe_mia2.mp4", lines: [{ speaker: "MIA", parts: [{ text: "That flat is much taller " }, { answer: "than", choices: ["to", "than"] }, { text: " the wooden house." }] }, { speaker: "ZOE", parts: [{ text: "True, but the wooden house looks " }, { answer: "more traditional", choices: ["more traditional", "traditionaler"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-noah-ethan-tv",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_noah_ethan.mp4", lines: [{ speaker: "NOAH", parts: [{ text: "This TV is " }, { answer: "bigger", choices: ["faster", "bigger"] }, { text: " than that one." }] }, { speaker: "ETHAN", parts: [{ text: "Yes, but that one is more advanced and " }, { answer: "more expensive", choices: ["more cheap", "more expensive"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-chloe-ava-giraffe",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_chloe_ava.mp4", lines: [{ speaker: "AVA", parts: [{ text: "The giraffe is " }, { answer: "taller", choices: ["shorter", "taller"] }, { text: " than the zebra." }] }] }
    },
    {
      id: "comparatives-video-lucas-jack-sharks",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_lucas_jack.mp4", lines: [{ speaker: "JACK", parts: [{ text: "Yes, and sharks are " }, { answer: "older", choices: ["slower", "older"] }, { text: " than trees." }] }] }
    },
    {
      id: "comparatives-video-ella-daniel-roller-coaster",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_ella_daniel.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "The roller coaster is " }, { answer: "faster", choices: ["slower", "faster"] }, { text: " than the bumper cars." }] }, { speaker: "ELLA", parts: [{ text: "I agree, but the bumper cars are " }, { answer: "funnier", choices: ["older", "funnier"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-ella-daniel-bumper-cars",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_ella_daniel2.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "You were right! This is really " }, { answer: "faster", choices: ["faster", "slower"] }, { text: " and " }, { answer: "funnier", choices: ["funnier", "more boring"] }, { text: " than the bumper cars!" }] }] }
    },
    {
      id: "comparatives-video-hannah-lars-bridge",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_lars.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "This bridge is " }, { answer: "higher", choices: ["high", "higher"] }, { text: " than I expected!" }] }, { speaker: "LARS", parts: [{ text: "And " }, { answer: "less dangerous", choices: ["less dangerous", "more dangerous"] }, { text: " than the last one!" }] }] }
    },
    {
      id: "comparatives-video-jack-callum-fish",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_jack_callum.mp4", lines: [{ speaker: "JACK", parts: [{ text: "I can catch a " }, { answer: "bigger", choices: ["big", "bigger"] }, { text: " fish than that." }] }] }
    },
    {
      id: "comparatives-video-chloe-julien-trex",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_chloe_julien.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "T rex is " }, { answer: "bigger", choices: ["bigger", "big"] }, { text: " than I expected!" }] }, { speaker: "JULIEN", parts: [{ text: "And its teeth are " }, { answer: "longer", choices: ["tall", "longer"] }, { text: " than your hand." }] }] }
    },
    {
      id: "comparatives-video-daniel-elena-sled",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_daniel_elena.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "Mom, my sled is " }, { answer: "faster", choices: ["expensive", "faster"] }, { text: " than yours!" }] }] }
    },
    {
      id: "comparatives-video-mia-giulia-pizza",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_mia_giulia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "Your pizza is " }, { answer: "bigger", choices: ["smaller", "bigger"] }, { text: " than mine." }] }, { speaker: "GIULIA", parts: [{ text: "But yours looks more delicious." }] }] }
    },
    {
      id: "comparatives-video-chloe-camille-flower",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_chloe_camille.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Mom, my flower is " }, { answer: "taller", choices: ["taller", "long"] }, { text: " than yours." }] }, { speaker: "CAMILLE", parts: [{ text: "Yes, but mine has " }, { answer: "more", choices: ["more", "less"] }, { text: " flowers." }] }] }
    },
    {
      id: "comparatives-video-ella-olivia-skyscraper",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_ella_olivia2.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "That skyscraper is " }, { answer: "taller", choices: ["shorter", "taller"] }, { text: " than the tower." }] }, { speaker: "OLIVIA", parts: [{ text: "Yes, but the tower is much older." }] }] }
    },
    {
      id: "comparatives-video-daniel-lucas-gym",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_daniel_lucas.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "This place is " }, { answer: "bigger", choices: ["faster", "bigger"] }, { text: " than our school gym." }] }, { speaker: "LUCAS", parts: [{ text: "Yeah, I already feel " }, { answer: "stronger", choices: ["more expensive", "stronger"] }, { text: "." }] }] }
    },
    {
      id: "comparatives-video-daniel-hannah-storm",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_daniel_hannah.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "My scooter is so fast!" }] }, { speaker: "HANNAH", parts: [{ text: "But Storm is " }, { answer: "faster", choices: ["faster", "slower"] }, { text: "!" }] }] }
    },
    {
      id: "comparatives-video-jack-david-fishing-rod",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_jack_david.mp4", lines: [{ speaker: "DAVID", parts: [{ text: "Your dad's fishing rod is " }, { answer: "taller", choices: ["shorter", "taller"] }, { text: " than you." }] }] }
    },
    {
      id: "comparatives-video-ella-sunny-penguins",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ella_sunny2.mp4", lines: [{ speaker: "PRESENTER", parts: [{ text: "Some penguins can live in places " }, { answer: "colder", choices: ["colder", "hotter"] }, { text: " than minus fifty degrees!" }] }, { speaker: "ELLA", parts: [{ text: "That cold?" }] }] }
    },
    {
      id: "comparatives-student-reveal",
      presenceSlide: true,
      kicker: "COMPARATIVES",
      title: "Compare them!",
      imagePath: "images/comperatives/rabbit-faster-turtle.webp",
      showAllItems: true,
      listClass: "ppt-comp-reveal-list",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "A RABBIT / A TURTLE / " }, { text: "SLOW", className: "presence-yellow" }],
          revealImage: "images/comperatives/rabbit-faster-turtle.webp",
          revealSentences: ["A turtle is <slower> than a rabbit."]
        },
        {
          kind: "category-list",
          parts: [{ text: "A SKYSCRAPER / A FLAT / " }, { text: "TALL", className: "presence-yellow" }],
          revealImage: "images/comperatives/skyscraper-flat.webp",
          revealSentences: ["Skyscrapers are <taller> than flats."]
        },
        {
          kind: "category-list",
          parts: [{ text: "A SPORT CAR / A MOTORCYCLE / " }, { text: "EXPENSIVE", className: "presence-yellow" }],
          revealImage: "images/comperatives/car-expensive-motor.webp",
          revealSentences: ["A sport car is <more expensive> than a motorcycle."]
        },
        {
          kind: "category-list",
          parts: [{ text: "SUMMER / WINTER / " }, { text: "HOT", className: "presence-yellow" }],
          revealImage: "images/comperatives/winter-colder-than-summer.webp",
          revealSentences: ["Summer is <hotter> than winter."]
        },
        {
          kind: "category-list",
          parts: [{ text: "TOWN / CITY / " }, { text: "QUIET", className: "presence-yellow" }],
          revealImage: "images/comperatives/town-quieter-than-city.webp",
          revealSentences: ["Towns are <quieter> than cities.", "Cities are <noisier> than towns."]
        },
        {
          kind: "category-list",
          parts: [{ text: "A BICYCLE / A MOTORCYCLE / " }, { text: "CHEAP", className: "presence-yellow" }],
          revealImage: "images/comperatives/expensive-cheap.webp",
          revealSentences: ["A bicycle is <cheaper> than a motorcycle."]
        },
        {
          kind: "category-list",
          parts: [{ text: "A PLANE / A TRAIN / " }, { text: "FAST", className: "presence-yellow" }],
          revealImage: "images/comperatives/plane-faster-train.webp",
          revealSentences: ["A plane is <faster> than a train."]
        },
        {
          kind: "category-list",
          parts: [{ text: "AN ARMCHAIR / A SOFA / " }, { text: "COMFORTABLE", className: "presence-yellow" }],
          revealImage: "images/comperatives/armchairvssofa.webp",
          revealSentences: ["An armchair is <more comfortable> than a sofa."]
        }
      ]
    }
  ]
};

const comparativesVideoStartIndex = comparativesFunction.sentences.findIndex(
  (item) => item.id === "comparatives-video-ella-sunny"
);
const comparativesVideoItems = comparativesFunction.sentences
  .slice(comparativesVideoStartIndex, comparativesVideoStartIndex + 20)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

comparativesFunction.sentences.splice(comparativesVideoStartIndex, comparativesVideoItems.length, {
  id: "comparatives-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: comparativesVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(comparativesFunction);
