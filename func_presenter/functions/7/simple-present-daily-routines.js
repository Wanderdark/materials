const simplePresentDailyRoutinesGrade7Function = {
  id: "simple-present-daily-routines-grade7",
  grade: 7,
  unit: 2,
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
window.functionModules.push(simplePresentDailyRoutinesGrade7Function);
