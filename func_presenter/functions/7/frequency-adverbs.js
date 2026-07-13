const frequencyAdverbsGrade7Function = {
  id: "frequency-adverbs-grade7",
  grade: 7,
  unit: 2,
  title: "Adverbs of Frequency",
  description: "Expressing how often something happens using adverbs of frequency.",
  returnToSetupOnComplete: true,
  exercises: ["frequency-adverbs-choice-grade7", "frequency-adverbs-jumbled"],
  sentences: [
    {
      id: "frequency-adverbs-intro",
      presenceSlide: true,
      kicker: "ADVERBS OF FREQUENCY",
      title: "HOW OFTEN?",
      imagePath: "images/frequency-adverbs/frequency-adverbs.webp",
      visualBrief: "A frequency adverbs chart.",
      showAllItems: true,
      listClass: "freq-adverb-list",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "ALWAYS" }],
          overlayData: {
            question: "How often do you brush your teeth?",
            imagePath: "images/common/brush-teeth-benjamin-13-1.webp",
            sentence: "I <always> brush my teeth."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "USUALLY" }],
          overlayData: {
            question: "How often do you read books?",
            imagePath: "images/common/read-book-mia-13-1.webp",
            sentence: "I <usually> read books after dinner."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "OFTEN" }],
          overlayData: {
            question: "How often do you do homework?",
            imagePath: "images/common/study-noah-1.webp",
            sentence: "I <often> do homework after school."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "SOMETIMES" }],
          overlayData: {
            question: "How often do you play video games?",
            imagePath: "images/common/play-video-games-victoria-13-1.webp",
            sentence: "I <sometimes> play video games after school."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "SELDOM (RARELY)" }],
          overlayData: {
            question: "How often do you eat sweets?",
            imagePath: "images/frequency-adverbs/rarely-eat-sweets.webp",
            sentence: "I <rarely> eat sweets."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "NEVER" }],
          overlayData: {
            question: "How often do you play football?",
            imagePath: "images/frequency-adverbs/neverplayfootball.webp",
            sentence: "I <never> play football. I hate it."
          }
        }
      ]
    },
    {
      id: "freq-ex-1-q",
      presenceSlide: true,
      kicker: "HOW OFTEN?",
      titleParts: [
        { text: "How often", className: "freq-highlight" },
        { text: " does he go jogging?" }
      ],
      imagePath: "../images/7/2/30.webp",
      visualBrief: "He goes jogging."
    },
    {
      id: "freq-ex-1-a",
      presenceSlide: true,
      kicker: "ALWAYS",
      titleParts: [
        { text: "He " },
        { text: "always", className: "freq-highlight" },
        { text: " goes jogging." }
      ],
      note: "She goes jogging everyday.",
      imagePath: "../images/7/2/30.webp",
      visualBrief: "Jack going jogging."
    },
    {
      id: "freq-ex-2",
      presenceSlide: true,
      kicker: "USUALLY",
      titleParts: [
        { text: "She " },
        { text: "usually", className: "freq-highlight" },
        { text: " meets friends after school." }
      ],
      imagePath: "../images/6/1/45.webp",
      visualBrief: "Meeting friends after school."
    },
    {
      id: "freq-ex-3",
      presenceSlide: true,
      kicker: "USUALLY",
      titleParts: [
        { text: "He " },
        { text: "usually", className: "freq-highlight" },
        { text: " wears sunglasses in summer." }
      ],
      imagePath: "images/frequency-adverbs/wearsunglasses.webp",
      visualBrief: "Wearing sunglasses in summer."
    },
    {
      id: "freq-ex-4",
      presenceSlide: true,
      kicker: "SOMETIMES",
      titleParts: [
        { text: "She " },
        { text: "sometimes", className: "freq-highlight" },
        { text: " eats lunch out." }
      ],
      imagePath: "images/frequency-adverbs/havelunchout.webp",
      visualBrief: "Eating lunch out."
    },
    {
      id: "freq-ex-5",
      presenceSlide: true,
      kicker: "NEVER",
      titleParts: [
        { text: "He " },
        { text: "never", className: "freq-highlight" },
        { text: " gets up late." }
      ],
      imagePath: "../images/6/1/29.webp",
      visualBrief: "Getting up early."
    },
    {
      id: "freq-frequency-expressions",
      presenceSlide: true,
      kicker: "HOW OFTEN?",
      imagePath: "../images/6/1/18.webp",
      visualBrief: "Frequency expressions visual.",
      title: "FREQUENCY EXPRESSIONS",
      showAllItems: true,
      listClass: "freq-adverb-list",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "ALWAYS · EVERYDAY" }],
          overlayData: {
            question: "<How often> do you play video games?",
            imagePath: "images/common/play-video-games-victoria-13-1.webp",
            sentences: [
              "I <always> play video games.",
              "I play video games <every day.>"
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ONCE" }],
          overlayData: {
            question: "<How often> do you draw pictures?",
            imagePath: "../images/6/1/13.webp",
            sentences: [
              "I <rarely> draw pictures.",
              "I draw pictures <once a week.>"
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "TWICE" }],
          overlayData: {
            question: "<How often> do you play soccer?",
            imagePath: "../images/6/1/17.webp",
            sentences: [
              "I <sometimes> play soccer.",
              "I play soccer <twice a week.>"
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "THREE TIMES" }],
          overlayData: {
            question: "<How often> do you brush your teeth?",
            imagePath: "images/daily-routines/brushteeth.webp",
            sentences: [
              "I brush my teeth <three times a day.>"
            ]
          }
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(frequencyAdverbsGrade7Function);
