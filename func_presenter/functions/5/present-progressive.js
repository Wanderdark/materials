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
      imagePath: "../images/5/4/26.webp",
      visualBrief: "Present progressive tense intro.",
      showAllItems: true,
      listClass: "ppt-verb-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "swim  →  swim" }, { text: "ming", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/present-progressive/readbooks.webp",
            sentence: "I am <reading> a book."
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "dance  →  danc" }, { text: "ing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "../images/5/4/17.webp",
            sentence: "Chloe is <dancing>."
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
            imagePath: "../images/5/4/13.webp",
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
            imagePath: "../images/5/4/20.webp",
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
            question: "What is Olivia doing?",
            imagePath: "../images/5/4/14.webp",
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
            question: "What is Ava doing?",
            imagePath: "../images/5/4/24.webp",
            interactiveSentences: [
              {
                segments: [
                  { text: "Ava " },
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
      id: "pp-vs-simple-present",
      presenceSlide: true,
      kicker: "PRESENT PROGRESSIVE",
      title: "PRESENT PROGRESSIVE vs. SIMPLE PRESENT",
      exerciseObj: _ppVsSpExercise,
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
                imagePath: "../images/5/4/27.webp",
                caption: "Olivia take<s> photos in the park every weekend."
              },
              right: {
                imagePath: "../images/5/4/14.webp",
                revealSentence: "She <is> play<ing> the piano at home today."
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
                imagePath: "../images/5/4/18.webp",
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
      id: "pp-fill-blank-bridge",
      bridgeSlide: true,
      exerciseLink: "present-progressive-fill-blank"
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(presentProgressiveFunction);
