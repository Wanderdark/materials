const dailyRoutineVideoCharacters = [
  {
    name: "AVA",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_daily_routine.mp4",
    questions: [
      { text: "Ava gets up at seven every morning.", answer: true },
      { text: "Ava brushes her teeth only in the evening.", answer: false, correction: "Ava brushes her teeth every morning." },
      { text: "Ava leaves home for school at half past eight.", answer: true },
      { text: "Ava's lessons start at ten o'clock.", answer: false, correction: "Ava's lessons start at nine o'clock." },
      { text: "Ava spends time with Buddy after school.", answer: true },
      { text: "Ava visits an animal shelter every Sunday.", answer: false, correction: "Ava often visits an animal shelter at weekends." }
    ]
  },
  {
    name: "BENJAMIN",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_benjamin_daily_routine.mp4",
    questions: [
      { text: "Benjamin usually gets up at half past seven.", answer: true },
      { text: "Benjamin walks to school every day.", answer: false, correction: "Benjamin usually rides his scooter to school." },
      { text: "Benjamin's school finishes at three o'clock.", answer: true },
      { text: "Benjamin goes skateboarding before doing his homework.", answer: false, correction: "Benjamin does his homework before going skateboarding." },
      { text: "Benjamin often goes swimming at weekends.", answer: true },
      { text: "Benjamin visits school on Sundays.", answer: false, correction: "Benjamin likes walking in nature on Sundays." }
    ]
  },
  {
    name: "ELLA",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_daily_routine.mp4",
    questions: [
      { text: "Ella has breakfast with Sunny.", answer: true },
      { text: "Ella gets home in the afternoon.", answer: true },
      { text: "Ella often listens to music after school.", answer: true },
      { text: "Ella sometimes plays the piano.", answer: false, correction: "Ella sometimes plays the guitar." },
      { text: "Ella's family always has dinner together.", answer: true },
      { text: "Ella goes to bed at nine o'clock.", answer: false, correction: "Ella goes to bed at ten o'clock." }
    ]
  },
  {
    name: "EMMA",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_emma_daily_routine.mp4",
    questions: [
      { text: "Science is Emma's favourite subject.", answer: true },
      { text: "Emma's lessons start at half past eight.", answer: false, correction: "Emma's lessons start at nine o'clock." },
      { text: "Emma usually helps her mum at home after school.", answer: true },
      { text: "Emma loves cooking in the morning.", answer: false, correction: "Emma loves cooking in the evening." },
      { text: "Emma often bakes with her mum at weekends.", answer: true },
      { text: "Emma plays board games with her mum on Sundays.", answer: false, correction: "Emma plays board games with her dad on Sundays." }
    ]
  },
  {
    name: "CHLOE",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_chloe_daily_routine.mp4",
    questions: [
      { text: "Chloe usually gets up at seven on weekdays.", answer: true },
      { text: "Chloe leaves home for school at eight o'clock.", answer: false, correction: "Chloe leaves home for school at half past eight." },
      { text: "Art is Chloe's favourite subject.", answer: true },
      { text: "Chloe always does her homework after school.", answer: true },
      { text: "Chloe usually plays the guitar after school.", answer: false, correction: "Chloe usually plays the piano after school." },
      { text: "Chloe usually goes to bed at ten o'clock.", answer: true }
    ]
  },
  {
    name: "HANNAH",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_hannah_daily_routine.mp4",
    questions: [
      { text: "Hannah always has a healthy breakfast.", answer: true },
      { text: "Art is Hannah's favourite lesson.", answer: false, correction: "P.E. is Hannah's favourite lesson." },
      { text: "Hannah often goes cycling after doing her homework.", answer: true },
      { text: "Hannah usually goes to bed at eleven o'clock.", answer: false, correction: "Hannah usually goes to bed at ten o'clock." },
      { text: "Hannah often goes hiking at weekends.", answer: true },
      { text: "Hannah sometimes goes camping with Emma.", answer: false, correction: "Hannah sometimes goes camping with her family." }
    ]
  },
  {
    name: "MIA",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_mia_daily_routine.mp4",
    questions: [
      { text: "English is Mia's favourite subject.", answer: true },
      { text: "Mia has breakfast after school.", answer: false, correction: "Mia always has breakfast before school." },
      { text: "Mia has lunch at the school canteen with Zoe.", answer: true },
      { text: "Mia leaves school at half past two in the afternoon.", answer: true },
      { text: "Mia writes in her diary after doing her homework.", answer: true },
      { text: "Mia bakes cookies with her mum on weekdays.", answer: false, correction: "Mia sometimes bakes cookies with her mum on Sundays." }
    ]
  },
  {
    name: "NOAH",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_noah_daily_routine.mp4",
    questions: [
      { text: "Noah usually gets up at seven o'clock.", answer: true },
      { text: "Noah leaves home for school at nine o'clock.", answer: false, correction: "Noah leaves home for school at half past eight." },
      { text: "Maths is Noah's favourite subject.", answer: true },
      { text: "Noah does his homework before school.", answer: false, correction: "Noah does his homework after school." },
      { text: "Noah usually practises chess after school.", answer: true },
      { text: "Noah goes to the zoo on Sundays.", answer: false, correction: "Noah sometimes visits museums on Sundays." }
    ]
  },
  {
    name: "OLIVIA",
    videoUrl: "https://media.adilhoca.com/video/5_personal_life_olivia_daily_routine.mp4",
    questions: [
      { text: "Olivia usually gets up at seven o'clock.", answer: true },
      { text: "Olivia's lessons start at half past eight.", answer: false, correction: "Olivia's lessons start at nine o'clock." },
      { text: "Art is Olivia's favourite subject.", answer: true },
      { text: "Olivia leaves school at about two o'clock.", answer: true },
      { text: "Olivia always goes to the cinema on Sundays.", answer: false, correction: "Olivia often goes to the cinema at weekends." },
      { text: "Olivia usually goes to bed at ten o'clock.", answer: true }
    ]
  }
];

function buildDailyRoutineVideoHubItems() {
  return dailyRoutineVideoCharacters.map((character) => ({
    kind: "category-list",
    parts: [{ text: character.name }],
    dailyRoutineVideoCharacter: character
  }));
}

const simplePresentDailyRoutinesFunction = {
  id: "simple-present-daily-routines",
  grade: 5,
  unit: 3,
  title: "The Simple Present Tense: Describing Daily Routines or Habits",
  description: "",
  exercises: ["simple-present-daily-routines-choice", "simple-present-daily-routines-mistake", "simple-present-daily-routines-jumbled"],
  returnToSetupOnComplete: true,
  sentences: [
    {
      id: "get-up",
      presenceSlide: true,
      visualStyle: "speech-bubble",
      kicker: "MY DAILY ROUTINE",
      title: "I get up at 7 o'clock.",
      imagePath: "images/daily-routines/getup.webp",
      visualBrief: "A child getting up in the morning."
    },
    {
      id: "wash-face",
      presenceSlide: true,
      visualStyle: "speech-bubble",
      kicker: "MY DAILY ROUTINE",
      title: "Then, I always wash my face.",
      imagePath: "images/daily-routines/washface.webp",
      visualBrief: "A child washing his face."
    },
    {
      id: "brush-teeth",
      presenceSlide: true,
      visualStyle: "speech-bubble",
      kicker: "MY DAILY ROUTINE",
      title: "Then, I brush my teeth.",
      imagePath: "images/daily-routines/brushteeth.webp",
      visualBrief: "A child brushing his teeth."
    },
    {
      id: "have-breakfast",
      presenceSlide: true,
      kicker: "BREAKFAST TIME",
      title: "I have breakfast with my sister.",
      imagePath: "images/daily-routines/havebreakfast.webp",
      visualBrief: "Two children having breakfast."
    },
    {
      id: "breakfast-drinks",
      presenceSlide: true,
      kicker: "HABITS",
      title: "Breakfast Habits",
      imagePath: "images/daily-routines/havebreakfast.webp",
      visualBrief: "Two children having breakfast.",
      showAllItems: true,
      items: [
        { parts: [{ text: "I always drink orange juice at breakfast." }] },
        {
          parts: [
            { text: "My sister, Laura usually drink" },
            { text: "s", className: "presence-ending-s" },
            { text: " milk and sometimes she drink" },
            { text: "s", className: "presence-ending-s" },
            { text: " tea." }
          ]
        }
      ]
    },
    {
      id: "laura-brushes",
      presenceSlide: true,
      kicker: "DAILY ROUTINES",
      titleParts: [
        { text: "Laura always brush" },
        { text: "es", className: "presence-ending-es" },
        { text: " her teeth after breakfast." }
      ],
      imagePath: "images/daily-routines/brushesteeth.webp",
      visualBrief: "Laura brushing her teeth after breakfast."
    },
    {
      id: "get-dressed",
      presenceSlide: true,
      kicker: "BEFORE SCHOOL",
      title: "Then, I get dressed.",
      imagePath: "images/daily-routines/getdressed.webp",
      visualBrief: "A child getting dressed for school.",
      items: [
        { parts: [{ text: "I always wear clean school uniforms." }] }
      ]
    },
    {
      id: "arrive-school",
      presenceSlide: true,
      kicker: "SCHOOL TIME",
      title: "We arrive at school at 9 o'clock.",
      imagePath: "images/daily-routines/arriveschool.webp",
      visualBrief: "Children arriving at school."
    },
    {
      id: "dont-go-by-bus",
      presenceSlide: true,
      kicker: "NEGATIVE FORM",
      titleParts: [
        { text: "We " },
        { text: "don't", className: "presence-negative-dont" },
        { text: " go to school by bus." }
      ],
      imagePath: "images/daily-routines/arriveschool.webp",
      visualBrief: "Children arriving at school.",
      items: [
        { parts: [{ text: "We always walk." }] }
      ]
    },
    {
      id: "lesson-question",
      presenceSlide: true,
      noVisual: true,
      kicker: "ASKING ABOUT TIME",
      title: "What time does the lessons start?"
    },
    {
      id: "first-lesson",
      presenceSlide: true,
      kicker: "SCHOOL TIMETABLE",
      titleParts: [
        { text: "First Lesson start" },
        { text: "s", className: "presence-ending-s" },
        { text: " at half past nine and we have lessons until 12 p.m." }
      ],
      imagePath: "../images/6/1/47.webp",
      visualBrief: "A school timetable or classroom lesson visual."
    },
    {
      id: "school-lunch",
      presenceSlide: true,
      kicker: "LUNCH TIME",
      title: "I have lunch at the school canteen.",
      imagePath: "images/daily-routines/havelunch.webp",
      visualBrief: "A child having lunch at the school canteen."
    },
    {
      id: "laura-doesnt-lunch",
      presenceSlide: true,
      kicker: "NEGATIVE FORM",
      titleParts: [
        { text: "Laura " },
        { text: "doesn't", className: "presence-negative-doesnt" },
        { text: " have lunch at school." }
      ],
      imagePath: "images/daily-routines/haslunch.webp",
      visualBrief: "Laura having lunch out with her friend Lucy."
    },
    {
      id: "laura-lunch-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      title: "Laura ... out with her friend Lucy.",
      imagePath: "images/daily-routines/haslunch.webp",
      visualBrief: "Laura having lunch out with her friend Lucy.",
      items: [
        {
          parts: [{ text: "Laura ... out with her friend Lucy." }],
          hidePrompt: true,
          choices: ["have lunch", "has lunch"],
          answer: "has lunch"
        }
      ]
    },
    {
      id: "after-school-question",
      presenceSlide: true,
      noVisual: true,
      kicker: "ASKING ABOUT ROUTINES",
      title: "What do you do after school?"
    },
    {
      id: "come-home",
      presenceSlide: true,
      kicker: "AFTER SCHOOL",
      title: "I come back home after school.",
      imagePath: "images/daily-routines/comehome.webp",
      visualBrief: "A child coming back home after school."
    },
    {
      id: "dont-play-football",
      presenceSlide: true,
      noVisual: true,
      kicker: "NEGATIVE FORM",
      titleParts: [
        { text: "I " },
        { text: "don't", className: "presence-negative-dont" },
        { text: " play football after school." }
      ],
      items: [
        {
          parts: [
            { text: "I " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " like playing football." }
          ]
        }
      ]
    },
    {
      id: "video-games-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      title: "I ... video games and relax.",
      imagePath: "../images/6/1/40.webp",
      visualBrief: "A child playing video games.",
      items: [
        {
          parts: [{ text: "I ... video games and relax." }],
          hidePrompt: true,
          choices: ["play", "plays"],
          answer: "play"
        }
      ]
    },
    {
      id: "laura-doesnt-play-video-games",
      presenceSlide: true,
      noVisual: true,
      kicker: "NEGATIVE FORM",
      titleParts: [
        { text: "Laura " },
        { text: "doesn't", className: "presence-negative-doesnt" },
        { text: " play video games." }
      ]
    },
    {
      id: "reads-book-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      title: "My sister ... a book.",
      imagePath: "images/daily-routines/readsbook.webp",
      visualBrief: "Laura reading a book.",
      items: [
        {
          parts: [{ text: "My sister ... a book." }],
          hidePrompt: true,
          choices: ["read", "reads"],
          answer: "reads"
        }
      ]
    },
    {
      id: "homework-question",
      presenceSlide: true,
      noVisual: true,
      kicker: "ASKING ABOUT ROUTINES",
      title: "When do you do your homeworks?"
    },
    {
      id: "do-homework",
      presenceSlide: true,
      kicker: "EVENING ROUTINE",
      title: "I do my homeworks at the evening.",
      imagePath: "images/daily-routines/dohomework.webp",
      visualBrief: "A child doing homework in the evening."
    },
    {
      id: "have-dinner",
      presenceSlide: true,
      kicker: "FAMILY TIME",
      title: "We always have dinner together.",
      imagePath: "images/daily-routines/havedinner.webp",
      visualBrief: "A family having dinner together."
    },
    {
      id: "watches-tv-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      title: "Laura ... TV, she likes watching TV.",
      imagePath: "images/daily-routines/watchestv.webp",
      visualBrief: "Laura watching TV.",
      items: [
        {
          parts: [{ text: "Laura ... TV, she likes watching TV." }],
          hidePrompt: true,
          choices: ["watch", "watches"],
          answer: "watches"
        }
      ]
    },
    {
      id: "dont-watch-tv-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      titleParts: [
        { text: "I ... watch TV. I " },
        { text: "don't", className: "presence-negative-dont" },
        { text: " like watching it." }
      ],
      imagePath: "images/daily-routines/watchestv.webp",
      visualBrief: "Laura watching TV.",
      items: [
        {
          parts: [
            { text: "I ... watch TV. I " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " like watching it." }
          ],
          hidePrompt: true,
          choices: ["don't", "doesn't"],
          answer: "don't"
        }
      ]
    },
    {
      id: "listen-music",
      presenceSlide: true,
      kicker: "NIGHT ROUTINE",
      title: "I listen to some music and prepare to sleep.",
      imagePath: "images/daily-routines/listenmusic.webp",
      visualBrief: "A child listening to music before sleep."
    },
    {
      id: "go-to-bed",
      presenceSlide: true,
      kicker: "SLEEP EARLY",
      title: "I never go to bed late.",
      imagePath: "images/daily-routines/gotobed.webp",
      visualBrief: "A child going to bed early.",
      items: [
        { parts: [{ text: "I always sleep early." }] }
      ]
    },
    {
      id: "laura-doesnt-sleep-early-choice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT FORM",
      title: "Laura ... early.",
      imagePath: "images/daily-routines/gotobed.webp",
      visualBrief: "A child going to bed early.",
      items: [
        {
          parts: [{ text: "Laura ... early." }],
          hidePrompt: true,
          choices: ["doesn't sleep", "sleeps"],
          answer: "doesn't sleep"
        },
        {
          parts: [
            { text: "She always go" },
            { text: "es", className: "presence-ending-es" },
            { text: " to bed late." }
          ]
        }
      ]
    },
    {
      id: "daily-routines-video-hub",
      presenceSlide: true,
      dailyRoutineVideoHub: true,
      focus: "CHOOSE ONE",
      kicker: "DAILY ROUTINES",
      title: "Click a character to watch and answer the questions.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-6.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Choose a character.",
      showAllItems: true,
      listClass: "character-hub-grid daily-routine-character-hub-grid",
      items: buildDailyRoutineVideoHubItems()
    },
    {
      id: "laura-plays-guitar",
      presenceSlide: true,
      kicker: "THIRD PERSON SINGULAR",
      titleParts: [
        { text: "Laura play" },
        { text: "s", className: "presence-ending-s" },
        { text: " the guitar." }
      ],
      imagePath: "images/daily-routines/playsguitar.webp",
      visualBrief: "Laura playing the guitar."
    },
    {
      id: "review-positive-plural-pronouns",
      presenceSlide: true,
      kicker: "RULE REVIEW",
      title: "I / You / We / They",
      note: "Use the base form of the verb.",
      imagePath: "images/daily-routines/ruletable.webp",
      visualBrief: "A simple present tense rule table.",
      showAllItems: true,
      items: [
        { parts: [{ text: "I get up early." }] },
        { parts: [{ text: "You walk to school." }] },
        { parts: [{ text: "We have dinner together." }] },
        { parts: [{ text: "They play football after school." }] }
      ]
    },
    {
      id: "review-positive-third-person",
      presenceSlide: true,
      kicker: "RULE REVIEW",
      title: "He / She / It",
      note: "Add -s or -es to the verb.",
      imagePath: "images/daily-routines/ruletable.webp",
      visualBrief: "A simple present tense rule table.",
      showAllItems: true,
      items: [
        {
          parts: [
            { text: "He play" },
            { text: "s", className: "presence-ending-s" },
            { text: " the guitar." }
          ]
        },
        {
          parts: [
            { text: "She read" },
            { text: "s", className: "presence-ending-s" },
            { text: " a book." }
          ]
        },
        {
          parts: [
            { text: "It start" },
            { text: "s", className: "presence-ending-s" },
            { text: " at half past nine." }
          ]
        },
        {
          parts: [
            { text: "Laura watch" },
            { text: "es", className: "presence-ending-es" },
            { text: " TV." }
          ]
        }
      ]
    },
    {
      id: "review-negative-plural-pronouns",
      presenceSlide: true,
      kicker: "RULE REVIEW",
      title: "I / You / We / They + don't",
      note: "Use don't + base verb.",
      imagePath: "images/daily-routines/ruletable.webp",
      visualBrief: "A simple present tense rule table.",
      showAllItems: true,
      items: [
        {
          parts: [
            { text: "I " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " watch TV." }
          ]
        },
        {
          parts: [
            { text: "You " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " go to school by bus." }
          ]
        },
        {
          parts: [
            { text: "We " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " play football." }
          ]
        },
        {
          parts: [
            { text: "They " },
            { text: "don't", className: "presence-negative-dont" },
            { text: " have lunch at school." }
          ]
        }
      ]
    },
    {
      id: "review-negative-third-person",
      presenceSlide: true,
      kicker: "RULE REVIEW",
      title: "He / She / It + doesn't",
      note: "Use doesn't + base verb.",
      imagePath: "images/daily-routines/ruletable.webp",
      visualBrief: "A simple present tense rule table.",
      showAllItems: true,
      items: [
        {
          parts: [
            { text: "He " },
            { text: "doesn't", className: "presence-negative-doesnt" },
            { text: " play football." }
          ]
        },
        {
          parts: [
            { text: "She " },
            { text: "doesn't", className: "presence-negative-doesnt" },
            { text: " have lunch at school." }
          ]
        },
        {
          parts: [
            { text: "It " },
            { text: "doesn't", className: "presence-negative-doesnt" },
            { text: " start late." }
          ]
        },
        {
          parts: [
            { text: "Laura " },
            { text: "doesn't", className: "presence-negative-doesnt" },
            { text: " sleep early." }
          ]
        }
      ]
    },
    {
      id: "review-questions",
      presenceSlide: true,
      noVisual: true,
      kicker: "QUESTIONS",
      title: "Questions",
      showAllItems: true,
      items: [
        {
          parts: [
            { text: "Do", className: "presence-question-do" },
            { text: " you play football?" }
          ],
          answerParts: [
            { text: "Yes, I " },
            { text: "do", className: "presence-question-do" },
            { text: ". / No, I " },
            { text: "don't", className: "presence-negative-dont" },
            { text: "." }
          ]
        },
        {
          parts: [
            { text: "Do", className: "presence-question-do" },
            { text: " they study English?" }
          ],
          answerParts: [
            { text: "Yes, they " },
            { text: "do", className: "presence-question-do" },
            { text: "." }
          ]
        },
        {
          parts: [
            { text: "Does", className: "presence-question-does" },
            { text: " he play football?" }
          ],
          answerParts: [
            { text: "Yes, he " },
            { text: "does", className: "presence-question-does" },
            { text: ". / No, he " },
            { text: "doesn't", className: "presence-negative-doesnt" },
            { text: "." }
          ]
        },
        {
          parts: [
            { text: "Does", className: "presence-question-does" },
            { text: " Laura brush her teeth?" }
          ],
          answerParts: [
            { text: "Yes, she " },
            { text: "does", className: "presence-question-does" },
            { text: "." }
          ]
        },
        {
          parts: [
            { text: "Does", className: "presence-question-does" },
            { text: " Tom have breakfast?" }
          ],
          answerParts: [
            { text: "Yes, he " },
            { text: "does", className: "presence-question-does" },
            { text: "." }
          ]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(simplePresentDailyRoutinesFunction);
