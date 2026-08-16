const thereIsAreUnit5Function = {
  id: "there-is-are-unit5",
  grade: 5,
  unit: 5,
  title: "There Is / There Are",
  description: "",
  exercises: ["there-is-are-unit5-sort", "there-is-are-unit5-true-false"],
  returnToSetupOnComplete: false,
  sentences: [
    {
      id: "chloe-home-intro",
      presenceSlide: true,
      focus: "HOME",
      kicker: "CHLOE'S HOME",
      title: "Look and answer.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-home.webp",
      visualBrief: "Chloe's house.",
      items: [
        {
          parts: [{ text: "Where do you live?", className: "presence-yellow" }]
        },
        {
          parts: [{ text: "I live in a large house.", className: "presence-white" }]
        },
        {
          parts: [{ text: "How many rooms are there in your house?", className: "presence-yellow" }]
        },
        {
          parts: [{ text: "There are three rooms.", className: "presence-mint" }]
        },
        {
          parts: [
            { text: "There is a " },
            { text: "sitting room", className: "presence-room-link", swapImage: "images/thereis-thereare/chloe-sitting-room.webp" },
            { text: " and there is a " },
            { text: "large kitchen", className: "presence-room-link", swapImage: "images/thereis-thereare/chloe-kitchen.webp" },
            { text: " and " },
            { text: "bathroom", className: "presence-room-link", swapImage: "images/thereis-thereare/chloe-bathroom.webp" },
            { text: " in it." }
          ]
        }
      ]
    },
    {
      id: "chloe-house-map",
      presenceSlide: true,
      focus: "HOUSE PARTS",
      kicker: "CHLOE'S HOUSE",
      title: "Click a room.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-home.webp",
      visualBrief: "Chloe's house.",
      showAllItems: true,
      listClass: "house-room-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "LIVING ROOM" }],
          overlayData: {
            imagePath: "images/thereis-thereare/chloe-sitting-room.webp",
            sentence: "<There is> a large living room in our house.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "BATHROOM" }],
          overlayData: {
            imagePath: "images/thereis-thereare/chloe-bathroom.webp",
            sentence: "<There is> a bathroom in our house.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "KITCHEN" }],
          overlayData: {
            imagePath: "images/thereis-thereare/chloe-kitchen.webp",
            sentence: "<There is> a large kitchen in our house.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHLOE'S HOUSE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "BEDROOM" }],
          overlayData: {
            imagePath: "images/thereis-thereare/chloe-bedroom.webp",
            sentence: "<There are> two bedrooms in our house.",
            imageAspect: "16/9",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "DINING ROOM" }],
          overlayData: {
            sentence: "<There isn't> a dining room in our house.",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "BALCONY" }],
          overlayData: {
            imagePath: "images/thereis-thereare/chloe-balcony.webp",
            sentence: "<There is> a balcony in our house.",
            imageAspect: "1/1",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "GARAGE" }],
          overlayData: {
            sentence: "<There isn't> a garage in our house.",
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "TERRACE" }],
          overlayData: {
            sentence: "<There isn't> a terrace in our house.",
            overlaySize: true
          }
        }
      ]
    },
    {
      id: "table-examples",
      presenceSlide: true,
      focus: "THERE IS / ARE",
      kicker: "SITTING ROOM",
      title: "What can you see?",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-sitting-room.webp",
      visualBrief: "Chloe's sitting room.",
      listClass: "sitting-room-list",
      hotspotMode: true,
      items: [
        { hotspots: [{ x: 73, y: 313 }], parts: [{ text: "There is", className: "presence-mint" }, { text: " a sofa." }] },
        { hotspots: [{ x: 400, y: 325 }], parts: [{ text: "There are", className: "presence-blue" }, { text: " two armchairs." }] },
        { hotspots: [{ x: 435, y: 170 }], parts: [{ text: "There is", className: "presence-mint" }, { text: " a piano." }] },
        { hotspots: [{ x: 150, y: 100 }, { x: 375, y: 105 }], parts: [{ text: "There are", className: "presence-blue" }, { text: " two bookcases." }] },
        { hotspots: [{ x: 488, y: 200 }], parts: [{ text: "There is", className: "presence-mint" }, { text: " a lamp." }] },
        { hotspots: [{ x: 220, y: 315 }], pauseAfterReveal: true, parts: [{ text: "There is", className: "presence-mint" }, { text: " a table." }] },
        { clearPreviousOnShow: true, titleOverride: "What can't you see?", parts: [{ text: "There isn't", className: "presence-red" }, { text: " a bed." }] },
        { parts: [{ text: "There isn't", className: "presence-red" }, { text: " a chair." }] }
      ]
    },
    {
      id: "desk-question-models",
      presenceSlide: true,
      focus: "IS THERE?",
      kicker: "IN THE SITTING ROOM",
      title: "Questions and Short Answers",
      imagePath: "images/thereis-thereare/chloe-sitting-room.webp",
      visualBrief: "Chloe's sitting room.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a fireplace in the sitting room?" }],
          answerParts: [{ text: "Yes, there is. ", className: "presence-mint" }, { text: "Short answer: Yes, there is.", className: "presence-mint" }]
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a bed in the sitting room?" }],
          answerParts: [{ text: "No, " }, { text: "there isn't.", className: "presence-red" }, { text: " Short answer: No, there isn't.", className: "presence-red" }]
        }
      ]
    },
    {
      id: "kitchen-what-can-you-see",
      presenceSlide: true,
      focus: "THERE IS / ARE",
      kicker: "KITCHEN",
      title: "What can you see?",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-kitchen.webp",
      visualBrief: "Chloe's kitchen.",
      listClass: "inline-choice-list",
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "There are three " },
            { options: ["chairs", "lamps"], answer: "chairs" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There are two " },
            { options: ["lamps", "dishwashers"], answer: "lamps" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There " },
            { options: ["is", "isn't"], answer: "isn't" },
            { text: " a piano." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There is a " },
            { options: ["fridge", "fireplace", "armchair"], answer: "fridge" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There " },
            { options: ["is", "isn't"], answer: "is" },
            { text: " a dishwasher." }
          ]
        }
      ]
    },
    {
      id: "bathroom-quick-check",
      presenceSlide: true,
      focus: "CHECK",
      kicker: "QUICK CHECK · TABLE",
      title: "Choose the correct answer.",
      kicker: "QUICK CHECK - BATHROOM",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-bathroom.webp",
      visualBrief: "Chloe's bathroom.",
      items: [
        { parts: [{ text: "Is there a bath tube?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
        { parts: [{ text: "Is there a washing machine?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." },
        { parts: [{ text: "Are there two mirrors?" }], choices: ["Yes, there are.", "No, there aren't."], answer: "Yes, there are." }
      ]
    },
    {
      id: "bedroom-popup-practice",
      presenceSlide: true,
      focus: "THERE IS / ARE",
      kicker: "BEDROOM",
      title: "What can you see?",
      compactTitle: true,
      imagePath: "images/thereis-thereare/chloe-room.webp",
      imageAspect: "16 / 9",
      imageFit: "cover",
      visualBrief: "A bedroom.",
      listClass: "inline-choice-list",
      replaceCurrentItem: true,
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "There " },
            { options: ["is", "are"], answer: "is" },
            { text: " a bed." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There is a " },
            { options: ["television", "wardrobe"], answer: "wardrobe" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There is a " },
            { options: ["studying desk", "fireplace"], answer: "studying desk" },
            { text: " and " },
            { options: ["a", "two"], answer: "a" },
            { text: " chair." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "Is there a fridge? " },
            { options: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "Are there any pillows? " },
            { options: ["Yes, there are.", "No, there aren't."], answer: "Yes, there are." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "There is a " },
            { options: ["dishwasher", "bookcase"], answer: "bookcase" },
            { text: " in the bedroom." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "How many beds are there? There " },
            { options: ["is", "are"], answer: "is" },
            { text: " one " },
            { options: ["bed", "beds"], answer: "bed" },
            { text: "." }
          ]
        }
      ]
    },
    {
      id: "desk-quick-check",
      presenceSlide: true,
      focus: "CHECK",
      kicker: "QUICK CHECK · DESK",
      title: "Choose the correct answer.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/desk.webp",
      visualBrief: "Classroom objects on a desk.",
      items: [
        { parts: [{ text: "Is there a notebook on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
        { parts: [{ text: "Is there a ruler on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." },
        { parts: [{ text: "Is there a pencil on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." }
      ]
    },
    {
      id: "schoolbag-quick-check",
      presenceSlide: true,
      focus: "CHECK",
      kicker: "QUICK CHECK · SCHOOLBAG",
      title: "Choose the correct answer.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/schoolbag.webp",
      visualBrief: "Classroom objects inside a schoolbag.",
      items: [
        { parts: [{ text: "Is there a scissors in the schoolbag?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
        { parts: [{ text: "Is there a sharpener in the schoolbag?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." },
        { parts: [{ text: "Is there a dictionary in the schoolbag?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." }
      ]
    },
    {
      id: "desk-final-check",
      presenceSlide: true,
      focus: "CHECK",
      kicker: "QUICK CHECK · DESK",
      title: "Choose the correct answer.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/desk.webp",
      visualBrief: "Classroom objects on a desk.",
      items: [
        { parts: [{ text: "Is there a ruler on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." },
        { parts: [{ text: "Is there a notebook on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
        { parts: [{ text: "Is there a glue stick on the desk?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." }
      ]
    },
    {
      id: "timetable-is-there-1",
      presenceSlide: true,
      focus: "TIMETABLE",
      kicker: "TIMETABLE - IS THERE?",
      title: "Look at the timetable.",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a Science lesson on Monday?" }],
          answerParts: [{ text: "Yes, there is.", className: "presence-mint" }, { text: " There is a Science lesson on Monday.", className: "presence-white" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " an Art lesson on Monday?" }],
          answerParts: [{ text: "No, there isn't.", className: "presence-red" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-are-there-1",
      presenceSlide: true,
      focus: "TIMETABLE",
      kicker: "TIMETABLE - ARE THERE?",
      title: "Singular or plural?",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "Are there", className: "presence-blue" }, { text: " English lessons on Wednesday?" }],
          answerParts: [{ text: "Yes, there are.", className: "presence-mint" }, { text: " There are two English lessons on Wednesday.", className: "presence-white" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Are there", className: "presence-blue" }, { text: " Music lessons on Tuesday?" }],
          answerParts: [{ text: "No, there aren't.", className: "presence-red" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-is-are-there-2",
      presenceSlide: true,
      focus: "TIMETABLE",
      kicker: "TIMETABLE - YES / NO",
      title: "Ask and answer.",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a Computer lesson on Friday?" }],
          answerParts: [{ text: "Yes, there is.", className: "presence-mint" }, { text: " There is a Computer lesson on Friday.", className: "presence-white" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Are there", className: "presence-blue" }, { text: " Maths lessons on Monday?" }],
          answerParts: [{ text: "Yes, there are.", className: "presence-mint" }, { text: " There are two Maths lessons on Monday.", className: "presence-white" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-is-are-there-3",
      presenceSlide: true,
      focus: "TIMETABLE",
      kicker: "TIMETABLE - YES / NO",
      title: "Check the day.",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a P.E. lesson on Thursday?" }],
          answerParts: [{ text: "Yes, there is.", className: "presence-mint" }, { text: " There is a P.E. lesson on Thursday.", className: "presence-white" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Are there", className: "presence-blue" }, { text: " Social Studies lessons on Wednesday?" }],
          answerParts: [{ text: "No, there aren't.", className: "presence-red" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-is-are-there-4",
      presenceSlide: true,
      focus: "TIMETABLE",
      kicker: "TIMETABLE - FINAL CHECK",
      title: "One more look.",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "Are there", className: "presence-blue" }, { text: " Science lessons on Thursday?" }],
          answerParts: [{ text: "Yes, there are.", className: "presence-mint" }, { text: " There are two Science lessons on Thursday.", className: "presence-white" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " an Art lesson on Friday?" }],
          answerParts: [{ text: "Yes, there is.", className: "presence-mint" }, { text: " There is an Art lesson on Friday.", className: "presence-white" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-how-many-model",
      presenceSlide: true,
      focus: "HOW MANY?",
      kicker: "TIMETABLE - HOW MANY?",
      title: "How many lessons are there?",
      compactTitle: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        {
          parts: [{ text: "How many", className: "presence-yellow" }, { text: " lessons are there in a week?" }],
          answerParts: [{ text: "There are 30 lessons in a week.", className: "presence-mint" }],
          answerReveal: true
        },
        {
          parts: [{ text: "How many", className: "presence-yellow" }, { text: " Art lessons are there in a week?" }],
          answerParts: [{ text: "There are 2 Art lessons in a week.", className: "presence-mint" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "timetable-how-many-check",
      presenceSlide: true,
      focus: "HOW MANY?",
      kicker: "TIMETABLE - HOW MANY CHECK",
      title: "Choose the correct number.",
      compactTitle: true,
      replaceCurrentItem: true,
      imagePath: "images/telling-time/timetable.webp",
      visualBrief: "A weekly school timetable.",
      items: [
        { parts: [{ text: "How many Science lessons are there in a week?" }], choices: ["5", "7", "9"], answer: "7" },
        { parts: [{ text: "How many English lessons are there in a week?" }], choices: ["4", "6", "8"], answer: "6" },
        { parts: [{ text: "How many Maths lessons are there in a week?" }], choices: ["2", "4", "6"], answer: "4" },
        { parts: [{ text: "How many Computer lessons are there in a week?" }], choices: ["2", "3", "5"], answer: "3" },
        { parts: [{ text: "How many P.E. lessons are there in a week?" }], choices: ["1", "2", "4"], answer: "2" }
      ]
    }
  ]
};

thereIsAreUnit5Function.sentences = thereIsAreUnit5Function.sentences.slice(
  0,
  thereIsAreUnit5Function.sentences.findIndex((slide) => slide.id === "bedroom-popup-practice") + 1
);

thereIsAreUnit5Function.sentences.push(
  {
    id: "unit5-classroom-life-ella-olivia-bag-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ella_olivia.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Is there " }, { answer: "a dictionary", choices: ["a notebook", "a dictionary"] }, { text: " in your bag?" }] }, { speaker: "OLIVIA", parts: [{ text: "Yes, " }, { answer: "there is", choices: ["there is", "there isn't"] }, { text: ". You can borrow it." }] }] }
  },
  {
    id: "unit5-classroom-life-chloe-scissors-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_classroom_life_chloe.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Are there any scissors in the " }, { answer: "bookcase", choices: ["bag", "bookcase"] }, { text: "?" }] }, { speaker: "ART TEACHER", parts: [{ text: "Yes, there " }, { answer: "are", choices: ["is", "are"] }, { text: ". They're next to the glue." }] }] }
  },
  {
    id: "unit5-classroom-life-daniel-victoria-seats-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_classroom_life_daniel_victoria.mp4", lines: [{ speaker: "DANIEL", parts: [{ answer: "Are there", choices: ["Is there", "Are there"] }, { text: " any free seats near the smartboard?" }] }, { speaker: "VICTORIA", parts: [{ answer: "Yes", choices: ["Yes", "no"] }, { text: ", there are two." }] }] }
  },
  {
    id: "unit5-classroom-life-ava-classroom-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ava.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Is there a " }, { answer: "teacher", choices: ["teacher", "student"] }, { text: " in the classroom?" }] }, { speaker: "ASSISTANT HEADMASTER", parts: [{ text: "Yes, there " }, { answer: "is", choices: ["are", "is"] }, { text: ". She's beside the bookcase." }] }] }
  },
  {
    id: "unit5-personal-life-ava-olivia-paint-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_olivia.mp4", lines: [{ speaker: "AVA", parts: [{ answer: "There is", choices: ["There is", "there isn't"] }, { text: " a yellow paint on your nose." }] }] }
  },
  {
    id: "unit5-city-life-emma-hannah-octopus-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_emma_hannah.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "There " }, { answer: "are", choices: ["is", "are"] }, { text: " three hearts in an octopus." }] }, { speaker: "HANNAH", parts: [{ text: "Yes, and its blood is blue." }] }] }
  },
  {
    id: "unit5-city-life-mia-zoe-ferris-wheel-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_mia_zoe2.mp4", lines: [{ speaker: "MIA", parts: [{ answer: "There is", choices: ["There is", "there are"] }, { text: " a giant Ferris wheel over there." }] }, { speaker: "ZOE", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " bumper cars near the gate." }] }] }
  },
  {
    id: "unit5-city-life-hannah-benjamin-car-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_benjamin.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Mom, " }, { answer: "there is", choices: ["there is", "there are"] }, { text: " Benjamin in that blue car!" }] }, { speaker: "BENJAMIN", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " no cars between us!" }] }] }
  },
  {
    id: "unit5-city-life-hannah-lars-waterfall-video",
    videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_lars2.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Dad, " }, { answer: "there is", choices: ["there isn't", "there is"] }, { text: " a waterfall down there!" }] }, { speaker: "LARS", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " eagles above the valley." }] }] }
  }
);

window.functionModules = window.functionModules || [];
window.functionModules.push(thereIsAreUnit5Function);
