const goingToPlansNameTags = {
  BENJAMIN: { x: 100, y: 150, baseWidth: 650, baseHeight: 370 },
  OLIVIA: { x: 300, y: 20, baseWidth: 650, baseHeight: 370 },
  DANIEL: { x: 450, y: 30, baseWidth: 650, baseHeight: 370 },
  HANNAH: { x: 170, y: 35, baseWidth: 650, baseHeight: 370 },
  AVA: { x: 220, y: 155, baseWidth: 650, baseHeight: 370 },
  ZOE: { x: 330, y: 155, baseWidth: 650, baseHeight: 370 },
  ELLA: { x: 440, y: 145, baseWidth: 650, baseHeight: 370 },
  DAVID: { x: 550, y: 145, baseWidth: 650, baseHeight: 370 }
};

const goingToPlansSentenceBuildItems = [
  {
    imagePathOnShow: "images/common/skiing-daniel-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "I / go skiing" }],
    revealSentence: "<I'm> <going to> go skiing."
  },
  {
    imagePathOnShow: "images/common/ride-bike-hannah-2.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "She / ride bike" }],
    revealSentence: "Hannah <is> <going to> ride a bike."
  },
  {
    imagePathOnShow: "images/goingto-plans/watch-northern-lights.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "We / watch northern lights" }],
    revealSentence: "We <are> <going to> watch northern lights."
  },
  {
    imagePathOnShow: "images/common/scuba-diving-benjamin-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "I / do scuba diving" }],
    revealSentence: "<I'm> <going to> do scuba diving."
  },
  {
    imagePathOnShow: "images/common/go-hiking-hannah-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "She / go hiking in the mountains" }],
    revealSentence: "Hannah <is> <going to> go hiking in the mountains."
  },
  {
    imagePathOnShow: "images/common/fishing-jack-father-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "Jack and his father / go fishing" }],
    revealSentence: "They <are> <going to> go fishing."
  },
  {
    imagePathOnShow: "images/common/stay-in-tent-hannah-chloe-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "They / stay in tent" }],
    revealSentence: "Hannah and Chloe <are> <going to> stay in a tent."
  },
  {
    imagePathOnShow: "images/common/visit-grandparents-jack-1.webp",
    imageButton: true,
    revealButton: true,
    parts: [{ text: "He / visit grandparents" }],
    revealSentence: "Jack <is> <going to> visit his grandparents."
  }
];

const goingToPlansCharacters = [
  {
    name: "BENJAMIN",
    question: "What are you <going to> do on holiday?",
    imagePath: "images/goingto-plans/benjamin-seaside.webp",
    sentence: "I  <am going to> relax at the seaside."
  },
  {
    name: "OLIVIA",
    question: "What are you <going to> do on holiday?",
    imagePath: "images/common/take-photos-olivia-1.webp",
    sentence: "I <am going to> take photos of the Eiffel Tower."
  },
  {
    name: "DANIEL",
    question: "What is Daniel <going to> do on holiday?",
    imagePath: "images/goingto-plans/daniel-amusement-park.webp",
    sentence: "Daniel is <going to> have fun at the amusement park."
  },
  {
    name: "HANNAH",
    question: "What is Hannah <going to> do on holiday?",
    imagePath: "images/common/climb-mountain-hannah-1.webp",
    sentence: "Hannah is <going to> climb a hill at the canyon."
  },
  {
    name: "CHOOSE\nONE",
    passive: true
  },
  {
    name: "AVA",
    question: "What is Ava <going to> do on holiday?",
    imagePath: "images/goingto-plans/ava-zoo.webp",
    sentence: "Ava is <going to> visit the zoo."
  },
  {
    name: "ZOE",
    question: "What is Zoe <going to> do on holiday?",
    imagePath: "images/common/visit-museum-zoe-1.webp",
    sentence: "Zoe is <going to> explore a historical museum."
  },
  {
    name: "ELLA",
    question: "What is Ella <going to> do on holiday?",
    imagePath: "images/common/build-sandcastle-ella-1.webp",
    sentence: "Ella is <going to> build a sandcastle."
  },
  {
    name: "DAVID",
    question: "What is David <going to> do on holiday?",
    imagePath: "images/common/ride-camel-david-1.webp",
    sentence: "David is <going to> go to the desert and ride camels."
  }
];

const goingToPlansChoiceCharacters = [
  {
    name: "BENJAMIN",
    question: "What is Benjamin <going to> do on holiday?",
    imagePath: "images/common/swim-benjamin-2.webp",
    segments: [
      { text: "Benjamin is " },
      { text: "going to", className: "freq-highlight" },
      { text: " " },
      { options: ["collect seashells", "swim"], answer: "swim" },
      { text: "." }
    ]
  },
  {
    name: "OLIVIA",
    question: "What is Olivia <going to> do on holiday?",
    imagePath: "images/goingto-plans/olivia-visit-tower.webp",
    segments: [
      { text: "Olivia is " },
      { text: "going to", className: "freq-highlight" },
      { text: " visit Eiffel " },
      { options: ["tower", "bridge"], answer: "tower" },
      { text: "." }
    ]
  },
  {
    name: "DANIEL",
    question: "What is Daniel <going to> do on holiday?",
    imagePath: "images/common/ride-rollercoaster-daniel-1.webp",
    segments: [
      { text: "Daniel is " },
      { text: "going to", className: "freq-highlight" },
      { text: " ride the fastest " },
      { options: ["wave swinger", "roller coaster"], answer: "roller coaster" },
      { text: "." }
    ]
  },
  {
    name: "HANNAH",
    question: "What is Hannah <going to> do on holiday?",
    imagePath: "images/goingto-plans/hannah-valley.webp",
    segments: [
      { text: "Hannah is " },
      { text: "going to", className: "freq-highlight" },
      { text: " " },
      { options: ["explore a valley", "ride a camel"], answer: "explore a valley" },
      { text: "." }
    ]
  },
  {
    name: "CHOOSE\nONE",
    passive: true
  },
  {
    name: "AVA",
    question: "What is Ava <going to> do on holiday?",
    imagePath: "images/goingto-plans/ava-national-park.webp",
    segments: [
      { text: "Ava is " },
      { text: "going to", className: "freq-highlight" },
      { text: " visit a " },
      { options: ["national park", "zoo"], answer: "national park" },
      { text: "." }
    ]
  },
  {
    name: "ZOE",
    question: "What is Zoe <going to> do on holiday?",
    imagePath: "images/common/sightseeing-zoe-1.webp",
    segments: [
      { text: "Zoe is " },
      { text: "going to", className: "freq-highlight" },
      { text: " " },
      { options: ["stay at home", "join a sightseeing tour"], answer: "join a sightseeing tour" },
      { text: "." }
    ]
  },
  {
    name: "ELLA",
    question: "What is Ella <going to> do on holiday?",
    imagePath: "images/common/eat-icecream-ella-1.webp",
    segments: [
      { text: "Ella is " },
      { text: "going to", className: "freq-highlight" },
      { text: " eat ice cream at the " },
      { options: ["seaside", "desert"], answer: "seaside" },
      { text: "." }
    ]
  },
  {
    name: "DAVID",
    question: "What is David <going to> do on holiday?",
    imagePath: "images/goingto-plans/david-island.webp",
    segments: [
      { text: "David is " },
      { text: "going to", className: "freq-highlight" },
      { text: " explore " },
      { options: ["an island", "a canyon"], answer: "an island" },
      { text: "." }
    ]
  }
];

const goingToPlansPlanCheckItems = [
  {
    character: "Benjamin",
    plan: "relax at the seaside",
    options: ["relax at the seaside", "visit a national park", "build a sandcastle"]
  },
  {
    character: "Olivia",
    plan: "take photos of the Eiffel Tower",
    options: ["climb a hill", "take photos of the Eiffel Tower", "visit a national park"]
  },
  {
    character: "Daniel",
    plan: "have fun at the amusement park",
    options: ["visit a museum", "have fun at the amusement park", "relax at the seaside"]
  },
  {
    character: "Hannah",
    plan: "climb a hill",
    options: ["visit a museum", "relax at the seaside", "climb a hill"]
  },
  {
    character: "Ava",
    plan: "visit the zoo",
    options: ["swim", "explore an island", "visit the zoo"]
  },
  {
    character: "Zoe",
    plan: "visit a museum",
    options: ["visit a museum", "climb a hill", "ride a roller coaster"]
  },
  {
    character: "Ella",
    plan: "build a sandcastle",
    options: ["visit a national park", "take photos of the Eiffel Tower", "build a sandcastle"]
  },
  {
    character: "David",
    plan: "ride camels",
    options: ["visit the zoo", "ride camels", "have fun at the amusement park"]
  },
  {
    character: "Benjamin",
    plan: "swim",
    options: ["take photos of the Eiffel Tower", "swim", "ride camels"]
  },
  {
    character: "Olivia",
    plan: "visit Eiffel Tower",
    options: ["ride a roller coaster", "explore an island", "visit Eiffel Tower"]
  },
  {
    character: "Daniel",
    plan: "ride a roller coaster",
    options: ["ride a roller coaster", "swim", "build a sandcastle"]
  },
  {
    character: "Hannah",
    plan: "explore a valley",
    options: ["explore a valley", "eat ice cream at the seaside", "visit the zoo"]
  },
  {
    character: "Ava",
    plan: "visit a national park",
    options: ["ride camels", "visit a national park", "build a sandcastle"]
  },
  {
    character: "Zoe",
    plan: "join a sightseeing tour",
    options: ["relax at the seaside", "join a sightseeing tour", "explore a valley"]
  },
  {
    character: "Ella",
    plan: "eat ice cream at the seaside",
    options: ["eat ice cream at the seaside", "swim", "explore a valley"]
  },
  {
    character: "David",
    plan: "explore an island",
    options: ["visit a museum", "join a sightseeing tour", "explore an island"]
  }
];

const goingToPlansDialoguePortraits = {
  DANIEL: "images/dialogue/daniel_front.webp",
  DAVID: "images/dialogue/david_front.webp",
  ELLA: "images/dialogue/ella_head_right.webp"
};

function buildGoingToPlansHubItems(characters, useChoices = false) {
  return characters.map((character) => ({
    kind: "category-list",
    parts: [{ text: character.name }],
    nameTag: character.nameTag || goingToPlansNameTags[character.name],
    ...(character.passive ? {} : {
      overlayData: {
        question: character.question,
        imagePath: character.imagePath,
        thoughtPortrait: goingToPlansDialoguePortraits[character.name] || `images/dialogue/${character.name.toLowerCase()}_right.webp`,
        imageAspect: "1 / 1",
        imageFit: "cover",
        overlaySize: true,
        ...(useChoices
          ? { interactiveSentences: [{ segments: character.segments }] }
          : { sentence: character.sentence })
      }
    })
  }));
}

function buildGoingToPlansPlanCheckItems(items) {
  return items.map((item) => ({
    kind: "inline-choice",
    imageButton: true,
    imageButtonLabel: item.character.toUpperCase(),
    imagePathOnShow: `images/dialogue/${item.character.toLowerCase()}_front.webp`,
    visualBrief: `${item.character}'s portrait.`,
    segments: [
      { text: `${item.character} is ` },
      { text: "going to", className: "freq-highlight" },
      { text: " " },
      { options: item.options, answer: item.plan },
      { text: "." }
    ]
  }));
}

const goingToPlansFunction = {
  id: "going-to-plans",
  grade: 5,
  unit: 8,
  title: "Be Going To Future Tense: Plans",
  description: "",
  exercises: ["going-to-plans-am-is-are"],
  sentences: [
    {
      id: "going-to-plans-character-hub",
      presenceSlide: true,
      focus: "CHOOSE ONE",
      kicker: "HOLIDAY PLANS",
      title: "Click a character to see their plan.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-2.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "What are their holiday plans?",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildGoingToPlansHubItems(goingToPlansCharacters)
    },
    {
      id: "going-to-plans-plan-check-1",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "CHECK THE PLAN",
      title: "Who is going to do what?",
      compactTitle: true,
      imagePath: "images/dialogue/benjamin_front.webp",
      imageClass: "going-to-portrait-visual",
      visualBrief: "Choose the correct plan.",
      showAllItems: true,
      listClass: "inline-choice-list going-to-plan-check-list",
      items: buildGoingToPlansPlanCheckItems(goingToPlansPlanCheckItems.slice(0, 4))
    },
    {
      id: "going-to-plans-plan-check-2",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "CHECK THE PLAN",
      title: "Who is going to do what?",
      compactTitle: true,
      imagePath: "images/dialogue/ava_front.webp",
      imageClass: "going-to-portrait-visual",
      visualBrief: "Choose the correct plan.",
      showAllItems: true,
      listClass: "inline-choice-list going-to-plan-check-list",
      items: buildGoingToPlansPlanCheckItems(goingToPlansPlanCheckItems.slice(4, 8))
    },
    {
      id: "going-to-plans-choice-hub",
      presenceSlide: true,
      focus: "CHOOSE ONE",
      kicker: "HOLIDAY PLANS",
      title: "Choose the correct plan",
      compactTitle: true,
      imagePath: "images/common/collage-photo-2.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "What are their holiday plans?",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildGoingToPlansHubItems(goingToPlansChoiceCharacters, true)
    },
    {
      id: "going-to-plans-plan-check-3",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "CHECK THE PLAN",
      title: "Who is going to do what?",
      compactTitle: true,
      imagePath: "images/dialogue/benjamin_front.webp",
      imageClass: "going-to-portrait-visual",
      visualBrief: "Choose the correct plan.",
      showAllItems: true,
      listClass: "inline-choice-list going-to-plan-check-list",
      items: buildGoingToPlansPlanCheckItems(goingToPlansPlanCheckItems.slice(8, 12))
    },
    {
      id: "going-to-plans-plan-check-4",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "CHECK THE PLAN",
      title: "Who is going to do what?",
      compactTitle: true,
      imagePath: "images/dialogue/ava_front.webp",
      imageClass: "going-to-portrait-visual",
      visualBrief: "Choose the correct plan.",
      showAllItems: true,
      listClass: "inline-choice-list going-to-plan-check-list",
      items: buildGoingToPlansPlanCheckItems(goingToPlansPlanCheckItems.slice(12, 16))
    },
    {
      id: "going-to-plans-video-hannah-emma-valley",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_hannah_emma.mp4",
        lines: [{ speaker: "EMMA", parts: [{ text: "What are you going to do?" }] }, { speaker: "HANNAH", parts: [{ text: "I'm going to " }, { answer: "explore the valley", choices: ["explore the valley", "go camping"] }] }]
      }
    },
    {
      id: "going-to-plans-video-benjamin-jack-reef",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_benjamin_jack.mp4",
        lines: [{ speaker: "BENJAMIN", parts: [{ text: "Are we going to see the " }, { answer: "sand dunes", choices: ["sand dunes", "coral reef"] }, { text: "?" }] }, { speaker: "JACK", parts: [{ text: "Yes, we're going to go " }, { answer: "scuba diving", choices: ["snorkelling", "scuba diving"] }] }]
      }
    },
    {
      id: "going-to-plans-video-daniel-lucas-desert",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_daniel_lucas.mp4",
        lines: [{ speaker: "LUCAS", parts: [{ text: "What are we " }, { answer: "going to do", choices: ["doing", "going to do"] }, { text: " in the desert?" }] }, { speaker: "DANIEL", parts: [{ text: "We're " }, { answer: "going to ride", choices: ["riding", "going to ride"] }, { text: " a camel!" }] }]
      }
    },
    {
      id: "going-to-plans-video-benjamin-david-canyon",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_benjamin_david.mp4",
        lines: [{ speaker: "BENJAMIN", parts: [{ text: "What are we going to do on our trip?" }] }, { speaker: "DAVID", parts: [{ text: "We're going to explore " }, { answer: "this amazing canyon", choices: ["the waterfalls", "this amazing canyon"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-ella-charlotte-coast",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ella_charlotte.mp4",
        lines: [{ speaker: "ELLA", parts: [{ text: "What are we going to do on the " }, { answer: "coast", choices: ["coast", "island"] }, { text: "?" }] }, { speaker: "CHARLOTTE", parts: [{ text: "We're going to go " }, { answer: "sightseeing", choices: ["shopping", "sightseeing"] }] }]
      }
    },
    {
      id: "going-to-plans-video-chloe-emma-grandparents",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_chloe_emma.mp4",
        lines: [{ speaker: "CHLOE", parts: [{ text: "What are you going to do at half term?" }] }, { speaker: "EMMA", parts: [{ text: "I'm going to visit my " }, { answer: "grandparents", choices: ["parents", "grandparents"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-ella-olivia-beach",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ella_olivia.mp4",
        lines: [{ speaker: "OLIVIA", parts: [{ text: "Are you going to the beach on vacation?" }] }, { speaker: "ELLA", parts: [{ text: "Yes, I'm " }, { answer: "going to swim", choices: ["going to swim", "swimming"] }, { text: " every day!" }] }]
      }
    },
    {
      id: "going-to-plans-video-mia-victoria-london",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_mia_victoria.mp4",
        lines: [{ speaker: "MIA", parts: [{ text: "Where are you going to go this mid-term holiday?" }] }, { speaker: "VICTORIA", parts: [{ text: "We are going to visit " }, { answer: "London", choices: ["London", "Paris"] }] }]
      }
    },
    {
      id: "going-to-plans-video-ava-hannah-norway",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ava_hannah.mp4",
        lines: [{ speaker: "AVA", parts: [{ text: "Where are you going to go on " }, { answer: "vacation", choices: ["vacation", "mid-term"] }, { text: "?" }] }, { speaker: "HANNAH", parts: [{ text: "I'm going to Norway, it's " }, { answer: "cold", choices: ["hot", "cold"] }, { text: " there!" }] }]
      }
    },
    {
      id: "going-to-plans-video-ethan-noah-mountain",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ethan_noah.mp4",
        lines: [{ speaker: "NOAH", parts: [{ text: "What are we going to do there?" }] }, { speaker: "ETHAN", parts: [{ text: "We're going to climb that " }, { answer: "mountain", choices: ["mountain", "hill"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-daniel-jack-question",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_daniel_jack.mp4",
        lines: [{ speaker: "JACK", parts: [{ answer: "What", choices: ["What", "Where"] }, { text: " are you going to do on the mid-term holiday?" }] }]
      }
    },
    {
      id: "going-to-plans-video-mia-zoe-summer",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_mia_zoe.mp4",
        lines: [{ speaker: "ZOE", parts: [{ text: "Where are you going to go this summer?" }] }, { speaker: "MIA", parts: [{ text: "I'm going to stay at " }, { answer: "home", choices: ["home", "the seaside"] }] }]
      }
    },
    {
      id: "going-to-plans-video-ethan-lucas-weekend",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ethan_lucas.mp4",
        lines: [{ speaker: "ETHAN", parts: [{ text: "What are you going to do this weekend?" }] }, { speaker: "LUCAS", parts: [{ text: "I'm going to visit the " }, { answer: "amusement park", choices: ["museum", "amusement park"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-emma-sophie-zoo",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_emma_sophie.mp4",
        lines: [{ speaker: "EMMA", parts: [{ text: "What are we going to do this weekend?" }] }, { speaker: "SOPHIE", parts: [{ text: "We're going to visit " }, { answer: "the zoo", choices: ["your grandparents", "the zoo"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-benjamin-oliver-volleyball",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_benjamin_oliver.mp4",
        lines: [{ speaker: "OLIVER", parts: [{ text: "What are you going to do at the beach?" }] }, { speaker: "BENJAMIN", parts: [{ text: "I'm " }, { answer: "going to play", choices: ["play", "going to play"] }, { text: " beach volleyball!" }] }]
      }
    },
    {
      id: "going-to-plans-video-olivia-fiona-weekend",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_olivia_fiona.mp4",
        lines: [{ speaker: "FIONA", parts: [{ text: "What are we going to do " }, { answer: "tomorrow", choices: ["tomorrow", "this weekend"] }, { text: "?" }] }, { speaker: "OLIVIA", parts: [{ text: "We're going to go " }, { answer: "sightseeing", choices: ["to the zoo", "sightseeing"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-ava-amina-kenya",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ava_amina_buddy.mp4",
        lines: [{ speaker: "AVA", parts: [{ text: "Where are we going to go this summer?" }] }, { speaker: "AMINA", parts: [{ text: "We're going to visit " }, { answer: "Kenya", choices: ["London", "Kenya"] }] }]
      }
    },
    {
      id: "going-to-plans-video-chloe-julien-camille-sandcastle",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_chloe_julien_camille.mp4",
        lines: [{ speaker: "JULIEN", parts: [{ text: "What are you going to do today?" }] }, { speaker: "CHLOE", parts: [{ text: "I'm going to " }, { answer: "build a giant sandcastle", choices: ["collect sea shells", "build a giant sandcastle"] }] }]
      }
    },
    {
      id: "going-to-plans-video-mia-giulia-sandcastle",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_mia_giulia.mp4",
        lines: [{ speaker: "GIULIA", parts: [{ text: "What are you going to do now?" }] }, { speaker: "MIA", parts: [{ text: "I'm going to " }, { answer: "collect seashells", choices: ["collect seashells", "build a sandcastle"] }] }]
      }
    },
    {
      id: "going-to-plans-video-ella-charlotte-roller-coaster",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ella_charlotte2.mp4",
        lines: [{ speaker: "CHARLOTTE", parts: [{ text: "What are you going to ride first?" }] }, { speaker: "ELLA", parts: [{ text: "I'm going to ride the " }, { answer: "roller coaster", choices: ["bumper cars", "roller coaster"] }, { text: "!" }] }]
      }
    },
    {
      id: "going-to-plans-video-david-valeria-lake",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_david_valeria.mp4",
        lines: [{ speaker: "DAVID", parts: [{ answer: "What", choices: ["What", "Where"] }, { text: " are we going to camp?" }] }, { speaker: "VALERIA", parts: [{ text: "Where do you want?" }] }, { speaker: "DAVID", parts: [{ text: "By the " }, { answer: "lake", choices: ["sea", "lake"] }] }]
      }
    },
    {
      id: "going-to-plans-video-zoe-nikos-meteor-shower",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_zoe_nikos.mp4",
        lines: [{ speaker: "ZOE", parts: [{ text: "What are we going to watch " }, { answer: "this weekend", choices: ["tomorrow", "this weekend"] }, { text: "?" }] }, { speaker: "NIKOS", parts: [{ text: "We're going to watch " }, { answer: "a meteor shower", choices: ["the stars", "a meteor shower"] }] }]
      }
    },
    {
      id: "going-to-plans-build-sentences",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "MAKE SENTENCES",
      title: "Use the clues to build sentences.",
      compactTitle: true,
      imagePath: "images/common/skiing-daniel-1.webp",
      imageClass: "going-to-build-visual",
      visualBrief: "Look at the image, use the clue, then reveal the sentence.",
      showAllItems: true,
      listClass: "going-to-builder-list",
      items: goingToPlansSentenceBuildItems.slice(0, 4)
    },
    {
      id: "going-to-plans-build-sentences-2",
      presenceSlide: true,
      focus: "GOING TO",
      kicker: "MAKE SENTENCES",
      title: "Use the clues to build sentences.",
      compactTitle: true,
      imagePath: "images/goingto-plans/hannah-hiking-mountains.webp",
      imageClass: "going-to-build-visual",
      visualBrief: "Look at the image, use the clue, then reveal the sentence.",
      showAllItems: true,
      listClass: "going-to-builder-list",
      items: goingToPlansSentenceBuildItems.slice(4)
    }
  ]
};

const goingToPlansVideoStartIndex = goingToPlansFunction.sentences.findIndex(
  (item) => item.id === "going-to-plans-video-hannah-emma-valley"
);
const goingToPlansVideoItems = goingToPlansFunction.sentences
  .slice(goingToPlansVideoStartIndex, goingToPlansVideoStartIndex + 22)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

goingToPlansFunction.sentences.splice(goingToPlansVideoStartIndex, goingToPlansVideoItems.length, {
  id: "going-to-plans-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: goingToPlansVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(goingToPlansFunction);
