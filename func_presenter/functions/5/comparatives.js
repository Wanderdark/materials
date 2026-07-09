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

window.functionModules = window.functionModules || [];
window.functionModules.push(comparativesFunction);
