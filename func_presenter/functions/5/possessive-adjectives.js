const possessiveAdjectivesFunction = {
  id: "possessive-adjectives",
  grade: 5,
  unit: 3,
  title: "Possessive Adjectives",
  description: "",
  exercises: ["possessive-adjectives-fill-blank", "possessive-adjectives-choice", "possessive-adjectives-simon-says"],
  sentences: [
    {
      id: "possessive-adjectives-table",
      presenceSlide: true,
      focus: "POSSESSIVE ADJECTIVES",
      kicker: "SUBJECT -> POSSESSIVE ADJECTIVE",
      title: "Possessive Adjectives",
      compactTitle: true,
      imagePath: "images/possessive-adjectives/pronoun_table.webp",
      imageClass: "wide-clean-visual",
      visualBrief: "A subject and possessive adjectives table.",
      items: [
        { parts: [{ text: "Possessive adjectives come before a noun.", className: "presence-yellow" }] }
      ]
    },
    {
      id: "possessive-adjectives-examples-1",
      presenceSlide: true,
      noVisual: true,
      focus: "EXAMPLES",
      kicker: "POSSESSIVE ADJECTIVES",
      title: "Examples",
      compactTitle: true,
      items: [
        { parts: [{ text: "I -> my", className: "presence-yellow" }, { text: " | This is " }, { text: "my", className: "presence-mint" }, { text: " schoolbag." }] },
        { parts: [{ text: "You -> your", className: "presence-yellow" }, { text: " | Is this " }, { text: "your", className: "presence-mint" }, { text: " pencil?" }] }
      ]
    },
    {
      id: "possessive-adjectives-examples-2",
      presenceSlide: true,
      noVisual: true,
      focus: "EXAMPLES",
      kicker: "POSSESSIVE ADJECTIVES",
      title: "More examples",
      compactTitle: true,
      items: [
        { parts: [{ text: "He -> his", className: "presence-yellow" }, { text: " | He rides " }, { text: "his", className: "presence-mint" }, { text: " bicycle everyday." }] },
        { parts: [{ text: "She -> her", className: "presence-yellow" }, { text: " | She writes " }, { text: "her", className: "presence-mint" }, { text: " diary everyday." }] },
        { parts: [{ text: "It -> its", className: "presence-yellow" }, { text: " | My cat is playing with " }, { text: "its", className: "presence-mint" }, { text: " ball." }] }
      ]
    },
    {
      id: "possessive-adjectives-examples-3",
      presenceSlide: true,
      noVisual: true,
      focus: "EXAMPLES",
      kicker: "POSSESSIVE ADJECTIVES",
      title: "More examples",
      compactTitle: true,
      items: [
        { parts: [{ text: "We -> our", className: "presence-yellow" }, { text: " | " }, { text: "Our", className: "presence-mint" }, { text: " classroom is very clean." }] },
        { parts: [{ text: "You -> your", className: "presence-yellow" }, { text: " | Is this " }, { text: "your", className: "presence-mint" }, { text: " pencil?" }] },
        { parts: [{ text: "They -> their", className: "presence-yellow" }, { text: " | " }, { text: "Their", className: "presence-mint" }, { text: " house is very big." }] }
      ]
    },
    {
      id: "possessive-adjectives-replace-1",
      presenceSlide: true,
      noVisual: true,
      focus: "REPLACE",
      kicker: "REPLACE THE NOUN",
      title: "Choose the possessive adjective.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { kind: "replace-choice", sourceParts: [{ text: "This is " }, { text: "Emma's", className: "presence-underlined" }, { text: " school bag." }], targetParts: [{ text: "This is " }, { text: "..." }, { text: " school bag." }], choices: ["my", "his", "her"], answer: "her" },
        { kind: "replace-choice", sourceParts: [{ text: "We like " }, { text: "Jack and Noah's", className: "presence-underlined" }, { text: " classroom." }], targetParts: [{ text: "We like " }, { text: "..." }, { text: " classroom." }], choices: ["our", "my", "their"], answer: "their" },
        { kind: "replace-choice", sourceParts: [{ text: "The " }, { text: "cat's", className: "presence-underlined" }, { text: " tail is very long." }], targetParts: [{ text: "..." }, { text: " tail is very long." }], choices: ["Its", "my", "your"], answer: "Its" }
      ]
    },
    {
      id: "possessive-adjectives-replace-2",
      presenceSlide: true,
      noVisual: true,
      focus: "REPLACE",
      kicker: "REPLACE THE NOUN",
      title: "Choose the possessive adjective.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { kind: "replace-choice", sourceParts: [{ text: "I can't find " }, { text: "Hannah's", className: "presence-underlined" }, { text: " books." }], targetParts: [{ text: "I can't find " }, { text: "..." }, { text: " books." }], choices: ["their", "her", "his"], answer: "her" },
        { kind: "replace-choice", sourceParts: [{ text: "Is this " }, { text: "you and Lily's", className: "presence-underlined" }, { text: " pencil case?" }], targetParts: [{ text: "Is this " }, { text: "..." }, { text: " pencil case?" }], choices: ["your", "my", "his"], answer: "your" },
        { kind: "replace-choice", sourceParts: [{ text: "Ben and I", className: "presence-underlined" }, { text: " like English teacher." }], targetParts: [{ text: "..." }, { text: " English teacher is very kind." }], choices: ["his", "her", "our"], answer: "our" }
      ]
    },
    {
      id: "possessive-adjectives-choose-1",
      presenceSlide: true,
      noVisual: true,
      focus: "CHOOSE",
      kicker: "CHOOSE CORRECT OPTION",
      title: "Choose the correct option.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { parts: [{ text: "This is ______ pencil case." }], choices: ["my", "me"], answer: "my" },
        { parts: [{ text: "Jack has a new bicycle. ______ bicycle is blue." }], choices: ["his", "him"], answer: "his" },
        { parts: [{ text: "Emma is wearing a red dress. ______ dress is beautiful." }], choices: ["her", "she"], answer: "her" },
        { parts: [{ text: "The dog is playing with ______ ball." }], choices: ["it", "its"], answer: "its" },
        { parts: [{ text: "We love our classroom. ______ classroom is very clean." }], choices: ["us", "our"], answer: "our" },
        { parts: [{ text: "Hannah and Chloe are best friends. ______ teacher is very kind." }], choices: ["their", "them"], answer: "their" }
      ]
    },
    {
      id: "possessive-adjectives-fill-1",
      presenceSlide: true,
      noVisual: true,
      focus: "FILL",
      kicker: "FILL THE BLANKS",
      title: "Fill the Blanks.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { parts: [{ text: "I have a new school bag. ______ school bag is blue." }], answerParts: [{ text: "I have a new school bag. " }, { text: "My", className: "presence-mint" }, { text: " school bag is blue." }], answerReveal: true },
        { parts: [{ text: "Emma is my friend. ______ hair is long and black." }], answerParts: [{ text: "Emma is my friend. " }, { text: "Her", className: "presence-mint" }, { text: " hair is long and black." }], answerReveal: true },
        { parts: [{ text: "Jack has a football. ______ football is new." }], answerParts: [{ text: "Jack has a football. " }, { text: "His", className: "presence-mint" }, { text: " football is new." }], answerReveal: true },
        { parts: [{ text: "We love our teacher. ______ lessons are always fun." }], answerParts: [{ text: "We love our teacher. " }, { text: "Our", className: "presence-mint" }, { text: " lessons are always fun." }], answerReveal: true },
        { parts: [{ text: "The cat is sleeping. ______ bed is very soft." }], answerParts: [{ text: "The cat is sleeping. " }, { text: "Its", className: "presence-mint" }, { text: " bed is very soft." }], answerReveal: true },
        { parts: [{ text: "Hannah and Chloe are classmates. ______ classroom is on the second floor." }], answerParts: [{ text: "Hannah and Chloe are classmates. " }, { text: "Their", className: "presence-mint" }, { text: " classroom is on the second floor." }], answerReveal: true }
      ]
    },
    {
      id: "possessive-adjectives-mistake-1",
      presenceSlide: true,
      noVisual: true,
      focus: "MISTAKE",
      kicker: "FIND THE MISTAKE",
      title: "Correct the sentence.",
      compactTitle: true,
      replaceCurrentItem: true,
      items: [
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Jack has a new bike. Her bike is very fast." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Jack has a new bike. His bike is very fast." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Emma is my sister. His hair is long and black." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Emma is my sister. Her hair is long and black." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "We love our school. Their school is very big." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "We love our school. Our school is very big." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "The dog is playing with his ball." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "The dog is playing with its ball." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "Hannah and Chloe are classmates. Her classroom is on the second floor." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "Hannah and Chloe are classmates. Their classroom is on the second floor." }], answerReveal: true },
        { parts: [{ text: "Wrong: ", className: "presence-red" }, { text: "I have a new pencil case. Your pencil case is blue." }], answerParts: [{ text: "Correct: ", className: "presence-mint" }, { text: "I have a new pencil case. My pencil case is blue." }], answerReveal: true }
      ]
    },
    {
      id: "possessive-video-emma-chloe-sandwich",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/school_trip_lunch_time_emma_chloe.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "Would you like half of " }, { answer: "my", choices: ["my", "your"] }, { text: " sandwich?" }] }, { speaker: "CHLOE", parts: [{ text: "Yes, please, I'm still a bit hungry." }] }] }
    },
    {
      id: "possessive-video-benjamin-hannah-bike",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/benjamin_hannah.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "Can I borrow " }, { answer: "your", choices: ["my", "your"] }, { text: " bike please?" }] }, { speaker: "HANNAH", parts: [{ text: "Sorry, I need it." }] }] }
    },
    {
      id: "possessive-video-ava-buddy",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/introduce_ava.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Hi, I'm Ava. This is my dog. " }, { answer: "His", choices: ["His", "my"] }, { text: " name is Buddy." }] }] }
    },
    {
      id: "possessive-video-olivia-chloe-toy",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_olivia_chloe.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Is that Luna's toy mouse?" }] }, { speaker: "CHLOE", parts: [{ text: "Yes, it's " }, { answer: "her", choices: ["his", "her"] }, { text: " favorite toy." }] }] }
    },
    {
      id: "possessive-video-hannah-lars-bags",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_hannah_lars.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "What are you packing, Dad?" }] }, { speaker: "LARS", parts: [{ text: "I'm preparing " }, { answer: "our", choices: ["our", "their"] }, { text: " camping bags." }] }] }
    },
    {
      id: "possessive-video-ava-chloe-shark",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ava_chloe.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Which animal has the biggest teeth?" }] }, { speaker: "AVA", parts: [{ text: "The great white shark has some of the biggest; " }, { answer: "their", choices: ["my", "their"] }, { text: " teeth are seven centimetres long!" }] }] }
    },
    {
      id: "possessive-video-zoe-mia-telescope",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_zoe_mia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "Is this your telescope?" }] }, { speaker: "ZOE", parts: [{ text: "Yes, " }, { answer: "my", choices: ["my", "your"] }, { text: " father bought it." }] }] }
    },
    {
      id: "possessive-video-ella-olivia-ticket",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/school_trip_arrival_ella_olivia.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "I can't find " }, { answer: "my", choices: ["my", "her"] }, { text: " ticket." }] }] }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(possessiveAdjectivesFunction);
