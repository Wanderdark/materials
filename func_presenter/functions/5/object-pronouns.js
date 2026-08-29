const objectPronounsFunction = {
  id: "object-pronouns",
  grade: 5,
  unit: 2,
  title: "Object Pronouns",
  description: "",
  exercises: ["object-pronouns-fill-blank", "object-pronouns-choice"],
  sentences: [
    {
      id: "object-pronoun-table",
      presenceSlide: true,
      focus: "OBJECT PRONOUNS",
      kicker: "SUBJECT -> OBJECT",
      title: "Subject and Object Pronouns",
      compactTitle: true,
      imagePath: "images/object-pronouns/pronoun_table.webp",
      imageClass: "wide-clean-visual",
      visualBrief: "A subject pronouns and object pronouns table.",
      items: [
        { parts: [{ text: "Use object pronouns after verbs and prepositions.", className: "presence-yellow" }] }
      ]
    },
    {
      id: "object-pronoun-examples-1",
      presenceSlide: true,
      noVisual: true,
      focus: "EXAMPLES",
      kicker: "OBJECT PRONOUNS",
      title: "Examples",
      compactTitle: true,
      items: [
        { parts: [{ text: "I -> me", className: "presence-yellow" }, { text: " | Please give " }, { text: "me", className: "presence-mint" }, { text: " your pencil." }] },
        { parts: [{ text: "He -> him", className: "presence-yellow" }, { text: " | I help " }, { text: "him", className: "presence-mint" }, { text: "." }] },
        { parts: [{ text: "She -> her", className: "presence-yellow" }, { text: " | I like " }, { text: "her", className: "presence-mint" }, { text: "." }] }
      ]
    },
    {
      id: "object-pronoun-examples-2",
      presenceSlide: true,
      noVisual: true,
      focus: "EXAMPLES",
      kicker: "OBJECT PRONOUNS",
      title: "More examples",
      compactTitle: true,
      items: [
        { parts: [{ text: "It -> it", className: "presence-yellow" }, { text: " | Give the dog a bone. Give " }, { text: "it", className: "presence-mint" }, { text: " a bone." }] },
        { parts: [{ text: "We -> us", className: "presence-yellow" }, { text: " | Tell " }, { text: "us", className: "presence-mint" }, { text: " a joke." }] },
        { parts: [{ text: "They -> them", className: "presence-yellow" }, { text: " | Cook " }, { text: "them", className: "presence-mint" }, { text: " a cookie." }] }
      ]
    },
    {
      id: "dialogue-can-i-borrow",
      presenceSlide: true,
      focus: "DIALOGUE",
      kicker: "DIALOGUE PRACTICE",
      title: "Can you give me a pencil?",
      compactTitle: true,
      showAllItems: true,
      imagePath: "images/object-pronouns/caniborrow.webp",
      visualBrief: "A student asks to borrow a pencil.",
      items: [
        { parts: [{ text: "A: Can you give " }, { text: "me", className: "presence-mint" }, { text: " a pencil, please?" }] },
        { parts: [{ text: "B: Sorry, they're Laura's pencils. Please ask " }, { text: "her", className: "presence-mint" }, { text: "." }] },
        { parts: [{ text: "A: OK." }] }
      ]
    },
    {
      id: "dialogue-can-i-join",
      presenceSlide: true,
      focus: "DIALOGUE",
      kicker: "DIALOGUE PRACTICE",
      title: "Can I join your group?",
      compactTitle: true,
      showAllItems: true,
      imagePath: "images/object-pronouns/canijoin.webp",
      visualBrief: "A student asks to join a group.",
      items: [
        { parts: [{ text: "A: Can I join your group?" }] },
        { parts: [{ text: "B: Yes! You can join " }, { text: "us", className: "presence-mint" }, { text: "." }] }
      ]
    },
    {
      id: "replace-the-noun-1",
      presenceSlide: true,
      noVisual: true,
      focus: "REPLACE",
      kicker: "REPLACE THE NOUN",
      title: "Choose the object pronoun.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { kind: "replace-choice", sourceParts: [{ text: "Give the ruler to " }, { text: "Mary", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Give the ruler to " }, { text: "..." }], choices: ["her", "him", "them"], answer: "her" },
        { kind: "replace-choice", sourceParts: [{ text: "Help " }, { text: "Peter", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Help " }, { text: "..." }], choices: ["her", "him", "it"], answer: "him" },
        { kind: "replace-choice", sourceParts: [{ text: "Call " }, { text: "the students", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Call " }, { text: "..." }], choices: ["us", "them", "him"], answer: "them" }
      ]
    },
    {
      id: "replace-the-noun-2",
      presenceSlide: true,
      noVisual: true,
      focus: "REPLACE",
      kicker: "REPLACE THE NOUN",
      title: "Choose the object pronoun.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { kind: "replace-choice", sourceParts: [{ text: "Listen to " }, { text: "your teacher", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Listen to " }, { text: "..." }], choices: ["him", "he", "they"], answer: "him" },
        { kind: "replace-choice", sourceParts: [{ text: "Wait for " }, { text: "Emma and Lucy", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Wait for " }, { text: "..." }], choices: ["her", "them", "us"], answer: "them" },
        { kind: "replace-choice", sourceParts: [{ text: "Open " }, { text: "the book", className: "presence-underlined" }, { text: "." }], targetParts: [{ text: "Open " }, { text: "..." }], choices: ["it", "them", "her"], answer: "it" }
      ]
    },
    {
      id: "choose-correct-option-1",
      presenceSlide: true,
      noVisual: true,
      focus: "CHOOSE",
      kicker: "CHOOSE CORRECT OPTION",
      title: "Choose the correct option.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Can you help ...?" }], choices: ["me", "I"], answer: "me" },
        { parts: [{ text: "The teacher is talking to ..." }], choices: ["them", "they"], answer: "them" },
        { parts: [{ text: "Everybody likes ..." }], choices: ["her", "she"], answer: "her" }
      ]
    },
    {
      id: "choose-correct-option-2",
      presenceSlide: true,
      noVisual: true,
      focus: "CHOOSE",
      kicker: "CHOOSE CORRECT OPTION",
      title: "Choose the correct option.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Can you see ...?" }], choices: ["him", "he"], answer: "him" },
        { parts: [{ text: "Please wait for ..." }], choices: ["us", "we"], answer: "us" },
        { parts: [{ text: "I know ... very well." }], choices: ["them", "they"], answer: "them" }
      ]
    },
    {
      id: "choose-correct-option-3",
      presenceSlide: true,
      noVisual: true,
      focus: "CHOOSE",
      kicker: "CHOOSE CORRECT OPTION",
      title: "Choose the correct option.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Can you open ...?" }], choices: ["it", "its"], answer: "it" },
        { parts: [{ text: "She gives ... a notebook." }], choices: ["him", "he"], answer: "him" },
        { parts: [{ text: "The teacher calls ..." }], choices: ["us", "we"], answer: "us" }
      ]
    },
    {
      id: "choose-correct-option-4",
      presenceSlide: true,
      noVisual: true,
      focus: "CHOOSE",
      kicker: "CHOOSE CORRECT OPTION",
      title: "Choose the correct option.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Can you hear ...?" }], choices: ["me", "I"], answer: "me" }
      ]
    },
    {
      id: "fill-the-blanks-1",
      presenceSlide: true,
      noVisual: true,
      focus: "FILL",
      kicker: "FILL THE BLANKS",
      title: "Reveal the object pronoun.",
      compactTitle: true,
      items: [
        { parts: [{ text: "I can't find my pencil. Can you help ____?" }], answerParts: [{ text: "I can't find my pencil. Can you help " }, { text: "me", className: "presence-mint" }, { text: "?" }], answerReveal: true },
        { parts: [{ text: "This is my teacher. I like ____ very much." }], answerParts: [{ text: "This is my teacher. I like " }, { text: "him", className: "presence-mint" }, { text: " very much." }], answerReveal: true },
        { parts: [{ text: "Mary is absent today. Can you call ____?" }], answerParts: [{ text: "Mary is absent today. Can you call " }, { text: "her", className: "presence-mint" }, { text: "?" }], answerReveal: true },
        { parts: [{ text: "The students are doing exercises. The teacher is helping _____." }], answerParts: [{ text: "The students are doing exercises. The teacher is helping " }, { text: "them", className: "presence-mint" }, { text: "." }], answerReveal: true }
      ]
    },
    {
      id: "fill-the-blanks-2",
      presenceSlide: true,
      noVisual: true,
      focus: "FILL",
      kicker: "FILL THE BLANKS",
      title: "Reveal the object pronoun.",
      compactTitle: true,
      items: [
        { parts: [{ text: "We are in the canteen. Come join _____." }], answerParts: [{ text: "We are in the canteen. Come join " }, { text: "us", className: "presence-mint" }, { text: "." }], answerReveal: true },
        { parts: [{ text: "You are my best friend. I love _____." }], answerParts: [{ text: "You are my best friend. I love " }, { text: "you", className: "presence-mint" }, { text: "." }], answerReveal: true },
        { parts: [{ text: "The cat is hungry. Can you feed _____?" }], answerParts: [{ text: "The cat is hungry. Can you feed " }, { text: "it", className: "presence-mint" }, { text: "?" }], answerReveal: true },
        { parts: [{ text: "I need your crayons. Can I borrow _____?" }], answerParts: [{ text: "I need your crayons. Can I borrow " }, { text: "them", className: "presence-mint" }, { text: "?" }], answerReveal: true }
      ]
    },
    {
      id: "find-the-mistake-1",
      presenceSlide: true,
      noVisual: true,
      focus: "MISTAKE",
      kicker: "FIND THE MISTAKE",
      title: "Correct the sentence.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "I like she." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "I like her." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Can you help I?" }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Can you help me?" }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "We see they every day." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "We see them every day." }], answerReveal: true }
      ]
    },
    {
      id: "find-the-mistake-2",
      presenceSlide: true,
      noVisual: true,
      focus: "MISTAKE",
      kicker: "FIND THE MISTAKE",
      title: "Correct the sentence.",
      compactTitle: true,
      items: [
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Ask he." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Ask him." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Give the book to she." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Give the book to her." }], answerReveal: true }
      ]
    },
    {
      id: "classroom-life-mia-dictionary-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_mia.mp4",
        lines: [
          { speaker: "MIA", parts: [{ text: "Can I borrow the dictionary?" }] },
          { speaker: "ENGLISH TEACHER", parts: [{ text: "Yes, take " }, { answer: "it", choices: ["it", "him"] }, { text: "." }] },
          { speaker: "MIA", parts: [{ text: "Thank you." }] }
        ]
      }
    },
    {
      id: "classroom-life-emma-sheets-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_emma.mp4",
        lines: [
          { speaker: "SCIENCE TEACHER", parts: [{ text: "Emma, give these sheets to the class, please." }] },
          { speaker: "EMMA", parts: [{ text: "Sure, I'll hand " }, { answer: "them", choices: ["it", "them"] }, { text: " out." }] },
          { speaker: "SCIENCE TEACHER", parts: [{ text: "Thank you." }] }
        ]
      }
    },
    {
      id: "personal-life-ella-chloe-cupcakes-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_chloe.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Do you eat cupcakes for breakfast?" }] },
          { speaker: "CHLOE", parts: [{ text: "No, I rarely eat " }, { answer: "them", choices: ["her", "them"] }, { text: " in the morning." }] }
        ]
      }
    },
    {
      id: "classroom-life-lucas-balls-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_lucas.mp4",
        lines: [
          { speaker: "COACH", parts: [{ text: "Lucas, bring me the balls, please." }] },
          { speaker: "LUCAS", parts: [{ text: "Okay, I'll get " }, { answer: "them", choices: ["him", "them"] }, { text: "." }] },
          { speaker: "COACH", parts: [{ text: "Thanks." }] }
        ]
      }
    },
    {
      id: "classroom-life-emma-ethan-study-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_emma_ethan.mp4",
        lines: [
          { speaker: "EMMA", parts: [{ text: "When do you study science?" }] },
          { speaker: "ETHAN", parts: [{ text: "I study " }, { answer: "it", choices: ["us", "it"] }, { text: " every afternoon." }] }
        ]
      }
    },
    {
      id: "family-life-benjamin-emily-us-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_family_life_benjamin_oliver_emily.mp4",
        lines: [
          { speaker: "BENJAMIN", parts: [{ text: "You always plan holidays for other people, Mum." }] },
          { speaker: "EMILY", parts: [{ text: "Yes, but I’m planning for " }, { answer: "us", choices: ["them", "us"] }, { text: " today." }] }
        ]
      }
    },
    {
      id: "zoe-mia-lend-me-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/zoe_mia_1.mp4",
        lines: [
          { speaker: "ZOE", parts: [{ text: "Hi Mia, can you lend " }, { answer: "me", choices: ["him", "me"] }, { text: " your new novel please?" }] },
          { speaker: "MIA", parts: [{ text: "Sure, you can have it." }] }
        ]
      }
    },
    {
      id: "best-friend-zoe-her-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_zoe.mp4",
        lines: [
          { speaker: "ZOE", parts: [{ text: "She is shy and thoughtful. I can always rely on " }, { answer: "her", choices: ["him", "her"] }, { text: ". She is my best friend." }] }
        ]
      }
    },
    {
      id: "best-friend-ethan-him-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ethan.mp4",
        lines: [
          { speaker: "ETHAN", parts: [{ text: "He is thoughtful and reliable. I can always count on " }, { answer: "him", choices: ["him", "you"] }, { text: "." }] }
        ]
      }
    }
  ]
};

const objectPronounsVideoStartIndex = objectPronounsFunction.sentences.findIndex(
  (item) => item.id === "classroom-life-mia-dictionary-video"
);
const objectPronounsVideoItems = objectPronounsFunction.sentences
  .slice(objectPronounsVideoStartIndex, objectPronounsVideoStartIndex + 9)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

objectPronounsFunction.sentences.splice(objectPronounsVideoStartIndex, objectPronounsVideoItems.length, {
  id: "object-pronouns-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: objectPronounsVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(objectPronounsFunction);
