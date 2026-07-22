// Presence flow guide:
// - flow: "append" keeps previous sentence boxes and adds the new one below.
// - flow: "replace-current" hides only the previous sentence box.
// - flow: "replace-all" clears all visible sentence boxes before showing this one.
// - defaultFlow on a slide applies a flow to every next step unless an item has its own flow.
// - nextButton: false hides the continue button after that sentence.
// - nextButtonLabel: "NEXT" changes the continue button text for that sentence.
const wasWereGrade7Function = {
  id: "was-were-grade7",
  grade: 7,
  unit: 3,
  title: "Past Form of To Be: Was / Were",
  description: "",
  exercises: ["was-were-choice"],
  sentences: [
    {
      id: "was-were-now-past",
      presenceSlide: true,
      kicker: "NOW AND PAST",
      title: "",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      visualBrief: "Was and were rule table.",
      showAllItems: false,
      listClass: "inline-choice-list was-were-compare-list",
      items: [
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/daniel2.webp",
          parts: [
            { text: "I " },
            { text: "am", className: "presence-mint" },
            { text: " 12 years old now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/daniel.webp",
          parts: [
            { text: "I " },
            { text: "was", className: "presence-yellow" },
            { text: " 11 years old last year." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/olivia.webp",
          parts: [
            { text: "She " },
            { text: "is", className: "presence-yellow" },
            { text: " in the classroom at the moment." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/goingto-plans/olivia-visit-tower.webp",
          parts: [
            { text: "She " },
            { text: "was", className: "presence-yellow" },
            { text: " in Paris last week." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/ben-luc-dav13.webp",
          parts: [
            { text: "They " },
            { text: "are", className: "presence-mint" },
            { text: " in the sixth grade now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/ben-luc-dav12.webp",
          parts: [
            { text: "They " },
            { text: "were", className: "presence-yellow" },
            { text: " in the fifth grade last year." }
          ]
        },
        {
          fontSize: "24px",
          flow: "replace-all",
          imagePathOnShow: "images/was-were/hannahnow.webp",
          parts: [
            { text: "She " },
            { text: "is", className: "presence-yellow" },
            { text: " happy today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/hannahyesterday.webp",
          parts: [
            { text: "She " },
            { text: "was", className: "presence-yellow" },
            { text: " sad yesterday." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/avaatschool.webp",
          parts: [
            { text: "We " },
            { text: "are", className: "presence-yellow" },
            { text: " at school now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/avaathome.webp",
          parts: [
            { text: "We " },
            { text: "were", className: "presence-yellow" },
            { text: " at home one hour ago." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/benjaminnow.webp",
          parts: [
            { text: "The weather " },
            { text: "is", className: "presence-yellow" },
            { text: " sunny today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/benjaminyesterday.webp",
          parts: [
            { text: "The weather " },
            { text: "was", className: "presence-yellow" },
            { text: " rainy yesterday." }
          ]
        },
        {
          fontSize: "24px",
          flow: "replace-all",
          imagePathOnShow: "images/was-were/noahnow.webp",
          parts: [
            { text: "You " },
            { text: "are", className: "presence-mint" },
            { text: " very busy today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/noahyesterday.webp",
          parts: [
            { text: "You " },
            { text: "were", className: "presence-yellow" },
            { text: " free last weekend." }
          ]
        },
      
      ]
    },
    {
      id: "was-were-popup-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "Choose the past form.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      visualBrief: "Choose was or were.",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/mialibrary.webp",
          segments: [
            { text: "She " },
            { options: ["is", "was"], answer: "was" },
            { text: " at the library yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/lucasethantired.webp",
          segments: [
            { text: "We " },
            { options: ["was", "were"], answer: "were" },
            { text: " tired after the match." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/dirty.webp",
          segments: [
            { text: "The classroom " },
            { options: ["was", "were"], answer: "was" },
            { text: " dirty this morning." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          flow: "replace-current",
          nextButton: false,
          segments: [
            { text: "They " },
            { options: ["are", "were"], answer: "were" },
            { text: " at the cinema yesterday." }
          ]
        }
      ]
    },
    {
      id: "was-were-negative",
      presenceSlide: true,
      kicker: "NEGATIVE SENTENCES",
      title: "Wasn't and weren't.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable2.webp",
      visualBrief: "Negative form of was and were.",
      showAllItems: false,
      items: [
        {
          flow: "replace-current",
          parts: [
            { text: "He " },
            { text: "was", className: "presence-yellow" },
            { text: " at school." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "He " },
            { text: "wasn't", className: "presence-red" },
            { text: " at home." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "They " },
            { text: "were", className: "presence-yellow" },
            { text: " happy." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "They " },
            { text: "weren't", className: "presence-red" },
            { text: " sad." }
          ]
        },
         {
          flow: "append",
          parts: [
            { text: "He " },
            { text: "was", className: "presence-yellow" },
            { text: " at the stadium." }
          ]
        },
        {
          flow: "append",
          nextButton: false,
          parts: [
            { text: "He " },
            { text: "wasn't", className: "presence-red" },
            { text: " at home." }
          ]
        }
      ]
    },
    {
      id: "was-were-questions",
      presenceSlide: true,
      kicker: "QUESTIONS",
      title: "Questions and short answers.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable3.webp",
      visualBrief: "Questions with was and were.",
      showAllItems: false,
      items: [
        {
          flow: "replace-current",
          parts: [
            { text: "Was", className: "presence-yellow" },
            { text: " he at school yesterday?" }
          ],
          answerParts: [
            { text: "Yes, he " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, he " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          parts: [
            { text: "Were", className: "presence-yellow" },
            { text: " they tired after the match?" }
          ],
          answerParts: [
            { text: "Yes, they " },
            { text: "were", className: "presence-yellow" },
            { text: ". / No, they " },
            { text: "weren't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          parts: [
            { text: "Was", className: "presence-yellow" },
            { text: " she happy?" }
          ],
          answerParts: [
            { text: "Yes, she " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, she " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          nextButton: false,
          parts: [
            { text: "Were", className: "presence-yellow" },
            { text: " you at home?" }
          ],
          answerParts: [
            { text: "Yes, I " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, I " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        }
      ]
    },
    {
      id: "was-were-final-practice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT OPTION",
      title: "Choose was, were, wasn't or weren't.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable.webp",
      visualBrief: "Final practice for was and were.",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "I " },
            { options: ["am", "was"], answer: "was" },
            { text: " very tired after the match yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The students " },
            { options: ["are","was","were"], answer: "were" },
            { text: " in the classroom yesterday morning." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "My sister " },
            { options: ["wasn't", "isn't"], answer: "wasn't" },
            { text: " at home last night." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "We " },
            { options: ["aren't", "weren't"], answer: "weren't" },
            { text: " late for school yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The weather " },
            { options: ["is", "was","were"], answer: "was" },
            { text: " cold and rainy last weekend." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Is", "Was","Were"], answer: "Was" },
            { text: " your teacher at school yesterday?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Was", "Were"], answer: "Were" },
            { text: " the children happy after the school trip?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The books " },
            { options: ["wasn't", "weren't"], answer: "weren't" },
            { text: " on the teacher's desk." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Is", "Was"], answer: "Was" },
            { text: " the English exam difficult yesterday?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          nextButton: false,
          segments: [
            { text: "You " },
            { options: ["wasn't", "weren't"], answer: "were" },
            { text: " in the school garden during the break." }
          ]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(wasWereGrade7Function);
