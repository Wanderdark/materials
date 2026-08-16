const thereIsAreFunction = {
  id: "there-is-are",
  grade: 5,
  unit: 2,
  title: "There Is / There Are",
  description: "",
  exercises: ["there-is-are-timetable-true-false"],
  returnToSetupOnComplete: true,
  sentences: [
    {
      id: "table-examples",
      presenceSlide: true,
      focus: "THERE IS / ARE",
      kicker: "ON THE TABLE",
      titleParts: [
        { text: "There is / There are", className: "presence-yellow" }
      ],
      imagePath: "images/thereis-thereare/table.webp",
      visualBrief: "Classroom objects on a table.",
      items: [
        { parts: [{ text: "There is", className: "presence-mint" }, { text: " a " }, { text: "ruler", className: "presence-white" }, { text: " on the table." }] },
        { parts: [{ text: "There is", className: "presence-mint" }, { text: " a glue stick on the table." }] },
        { parts: [{ text: "There isn't", className: "presence-red" }, { text: " a pencil on the table." }] },
        { parts: [{ text: "There are", className: "presence-blue" }, { text: " two books on the table." }] },
        { parts: [{ text: "There are", className: "presence-blue" }, { text: " two rubbers on the table." }] }
      ]
    },
    {
      id: "desk-question-models",
      presenceSlide: true,
      focus: "IS THERE?",
      kicker: "ON THE DESK",
      title: "Questions and Short Answers",
      imagePath: "images/thereis-thereare/desk.webp",
      visualBrief: "Classroom objects on a desk.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a notebook on the desk?" }],
          answerParts: [{ text: "Yes, there is a notebook on the desk. " }, { text: "Short answer: Yes, there is.", className: "presence-mint" }]
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a ruler on the desk?" }],
          answerParts: [{ text: "No, " }, { text: "there isn't", className: "presence-red" }, { text: " a ruler on the desk. " }, { text: "Short answer: No, there isn't.", className: "presence-red" }]
        }
      ]
    },
    {
      id: "schoolbag-scissors-sharpener",
      presenceSlide: true,
      focus: "REVEAL",
      kicker: "IN THE SCHOOLBAG",
      title: "Look and Answer",
      imagePath: "images/thereis-thereare/schoolbag.webp",
      visualBrief: "Classroom objects inside a schoolbag.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a scissors in the schoolbag?" }],
          answerParts: [{ text: "Yes, there is a scissors in the schoolbag.", className: "presence-mint" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a sharpener in the schoolbag?" }],
          answerParts: [{ text: "No, " }, { text: "there isn't", className: "presence-red" }, { text: " a sharpener in the schoolbag." }],
          answerReveal: true
        }
      ]
    },
    {
      id: "schoolbag-dictionary-marker",
      presenceSlide: true,
      focus: "REVEAL",
      kicker: "IN THE SCHOOLBAG",
      title: "Look and Answer",
      imagePath: "images/thereis-thereare/schoolbag.webp",
      visualBrief: "Classroom objects inside a schoolbag.",
      items: [
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a dictionary in the schoolbag?" }],
          answerParts: [{ text: "Yes, there is a dictionary in the schoolbag.", className: "presence-mint" }],
          answerReveal: true
        },
        {
          parts: [{ text: "Is there", className: "presence-yellow" }, { text: " a board marker in the schoolbag?" }],
          answerParts: [{ text: "Yes, there is a board marker in the schoolbag.", className: "presence-mint" }],
          answerReveal: true
        }
      ]
    },
    {
      id: "table-quick-check",
      presenceSlide: true,
      focus: "CHECK",
      kicker: "QUICK CHECK · TABLE",
      title: "Choose the correct answer.",
      compactTitle: true,
      imagePath: "images/thereis-thereare/table.webp",
      visualBrief: "Classroom objects on a table.",
      items: [
        { parts: [{ text: "Is there a ruler on the table?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
        { parts: [{ text: "Is there a pencil on the table?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "No, there isn't." },
        { parts: [{ text: "Is there a glue stick on the table?" }], choices: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." }
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
    },
    {
      id: "classroom-life-ella-olivia-bag-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ella_olivia.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Is there " }, { answer: "a dictionary", choices: ["a notebook", "a dictionary"] }, { text: " in your bag?" }] },
          { speaker: "OLIVIA", parts: [{ text: "Yes, " }, { answer: "there is", choices: ["there is", "there isn't"] }, { text: ". You can borrow it." }] }
        ]
      }
    },
    {
      id: "classroom-life-chloe-scissors-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_chloe.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ text: "Are there any scissors in the " }, { answer: "bookcase", choices: ["bag", "bookcase"] }, { text: "?" }] },
          { speaker: "ART TEACHER", parts: [{ text: "Yes, there " }, { answer: "are", choices: ["is", "are"] }, { text: ". They're next to the glue." }] }
        ]
      }
    },
    {
      id: "classroom-life-daniel-victoria-seats-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_daniel_victoria.mp4",
        lines: [
          { speaker: "DANIEL", parts: [{ answer: "Are there", choices: ["Is there", "Are there"] }, { text: " any free seats near the smartboard?" }] },
          { speaker: "VICTORIA", parts: [{ answer: "Yes", choices: ["Yes", "no"] }, { text: ", there are two." }] }
        ]
      }
    },
    {
      id: "classroom-life-ava-classroom-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ava.mp4",
        lines: [
          { speaker: "AVA", parts: [{ text: "Is there a " }, { answer: "teacher", choices: ["teacher", "student"] }, { text: " in the classroom?" }] },
          { speaker: "ASSISTANT HEADMASTER", parts: [{ text: "Yes, there " }, { answer: "is", choices: ["are", "is"] }, { text: ". She's beside the bookcase." }] }
        ]
      }
    },
    {
      id: "personal-life-ava-olivia-paint-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_olivia.mp4",
        lines: [
          { speaker: "AVA", parts: [{ answer: "There is", choices: ["There is", "there isn't"] }, { text: " a yellow paint on your nose." }] }
        ]
      }
    },
    {
      id: "city-life-emma-hannah-octopus-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_emma_hannah.mp4",
        lines: [
          { speaker: "EMMA", parts: [{ text: "There " }, { answer: "are", choices: ["is", "are"] }, { text: " three hearts in an octopus." }] },
          { speaker: "HANNAH", parts: [{ text: "Yes, and its blood is blue." }] }
        ]
      }
    },
    {
      id: "city-life-mia-zoe-ferris-wheel-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_mia_zoe2.mp4",
        lines: [
          { speaker: "MIA", parts: [{ answer: "There is", choices: ["There is", "there are"] }, { text: " a giant Ferris wheel over there." }] },
          { speaker: "ZOE", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " bumper cars near the gate." }] }
        ]
      }
    },
    {
      id: "city-life-hannah-benjamin-car-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_benjamin.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "Mom, " }, { answer: "there is", choices: ["there is", "there are"] }, { text: " Benjamin in that blue car!" }] },
          { speaker: "BENJAMIN", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " no cars between us!" }] }
        ]
      }
    },
    {
      id: "city-life-hannah-lars-waterfall-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_city_hannah_lars2.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "Dad, " }, { answer: "there is", choices: ["there isn't", "there is"] }, { text: " a waterfall down there!" }] },
          { speaker: "LARS", parts: [{ text: "And " }, { answer: "there are", choices: ["there is", "there are"] }, { text: " eagles above the valley." }] }
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(thereIsAreFunction);
