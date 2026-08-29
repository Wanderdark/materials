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
    },
    {
      id: "frequency-video-ava-olivia",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_olivia.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Do you paint in the evenings?" }] }, { speaker: "OLIVIA", parts: [{ text: "I " }, { answer: "sometimes", choices: ["always", "sometimes"] }, { text: " paint before bed." }] }] }
    },
    {
      id: "frequency-video-ella-sunny",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_sunny.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "No, still no, fine, you " }, { answer: "always", choices: ["often", "always"] }, { text: " win." }] }] }
    },
    {
      id: "frequency-video-hannah-storm",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_hannah_storm.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Storm " }, { answer: "always", choices: ["always", "usually"] }, { text: " listens to me, Storm, come here, Well, " }, { answer: "usually", choices: ["sometimes", "usually"] }, { text: "." }] }] }
    },
    {
      id: "frequency-video-daniel-benjamin",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_daniel_benjamin.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ answer: "How often", choices: ["When", "How often"] }, { text: " do you ride your scooter?" }] }, { speaker: "DANIEL", parts: [{ text: "I ride it every " }, { answer: "afternoon", choices: ["morning", "afternoon"] }, { text: "." }] }] }
    },
    {
      id: "frequency-video-ella-chloe",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_chloe.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Do you eat cupcakes for breakfast?" }] }, { speaker: "CHLOE", parts: [{ text: "No, I " }, { answer: "rarely", choices: ["never", "rarely"] }, { text: " eat them in the morning." }] }] }
    },
    {
      id: "frequency-video-emma-mia",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_emma_mia.mp4", lines: [{ speaker: "MIA", parts: [{ answer: "How often", choices: ["What time", "How often"] }, { text: " do you bake cookies?" }] }, { speaker: "EMMA", parts: [{ text: "I " }, { answer: "usually", choices: ["always", "usually"] }, { text: " bake on Sundays." }] }] }
    },
    {
      id: "frequency-video-ella-ethan",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_ethan.mp4", lines: [{ speaker: "ETHAN", parts: [{ text: "Do you pack your bag at night?" }] }, { speaker: "ELLA", parts: [{ answer: "Usually", choices: ["Often", "Usually"] }, { text: ", but I forgot my notebook again!" }] }] }
    },
    {
      id: "frequency-video-mia-zoe",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_mia_zoe.mp4", lines: [{ speaker: "ZOE", parts: [{ text: "Do you watch television in the afternoon?" }] }, { speaker: "MIA", parts: [{ text: "I " }, { answer: "seldom", choices: ["seldom", "never"] }, { text: " watch it, I " }, { answer: "usually", choices: ["always", "usually"] }, { text: " read." }] }] }
    },
    {
      id: "frequency-video-olivia-victoria",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_olivia_victoria.mp4", lines: [{ speaker: "VICTORIA", parts: [{ answer: "How often", choices: ["Why", "How often"] }, { text: " do you take photos?" }] }, { speaker: "OLIVIA", parts: [{ text: "I take photos " }, { answer: "everytime", choices: ["once a day", "everytime"] }, { text: "!" }] }] }
    },
    {
      id: "frequency-video-noah-victoria",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_noah_victoria.mp4", lines: [{ speaker: "NOAH", parts: [{ text: "Do you always use that move?" }] }, { speaker: "VICTORIA", parts: [{ text: "No, I " }, { answer: "rarely", choices: ["never", "rarely"] }, { text: " use it." }] }] }
    },
    {
      id: "frequency-video-ava-hannah",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_hannah.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "You bring a map when you hike, don't you?" }] }, { speaker: "AVA", parts: [{ answer: "Always", choices: ["Never", "Always"] }, { text: ", so I " }, { answer: "never", choices: ["always", "never"] }, { text: " get lost." }] }] }
    },
    {
      id: "frequency-video-ella-benjamin",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ella_benjamin.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Do you walk in the park?" }] }, { speaker: "BENJAMIN", parts: [{ text: "I " }, { answer: "often", choices: ["often", "sometimes"] }, { text: " come here after dinner." }] }] }
    },
    {
      id: "frequency-video-mia-giulia",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_mia_giulia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "You " }, { answer: "usually", choices: ["usually", "never"] }, { text: " cook at this time, Mum." }] }] }
    },
    {
      id: "frequency-video-benjamin-oliver",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_benjamin_oliver.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "You " }, { answer: "usually", choices: ["always", "usually"] }, { text: " swim in the morning, Dad." }] }] }
    },
    {
      id: "frequency-video-lucas-brazil",
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/countries_lucas.mp4", lines: [{ speaker: "LUCAS", parts: [{ text: "Hi, I'm Lucas, I'm from Brazil, Brazil has won the World Cup " }, { answer: "five", choices: ["five", "four"] }, { text: " times!" }] }] }
    }
  ]
};

const frequencyAdverbsGrade7VideoStartIndex = frequencyAdverbsGrade7Function.sentences.findIndex(
  (item) => item.id === "frequency-video-ava-olivia"
);
const frequencyAdverbsGrade7VideoItems = frequencyAdverbsGrade7Function.sentences
  .slice(frequencyAdverbsGrade7VideoStartIndex, frequencyAdverbsGrade7VideoStartIndex + 15)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

frequencyAdverbsGrade7Function.sentences.splice(
  frequencyAdverbsGrade7VideoStartIndex,
  frequencyAdverbsGrade7VideoItems.length,
  {
    id: "frequency-adverbs-grade7-video-hub",
    noVisual: true,
    simplePresentVideoHub: {
      title: "WATCH AND COMPLETE",
      items: frequencyAdverbsGrade7VideoItems
    }
  }
);

const frequencyExpressionRevealGrade7Slide = {
  id: "frequency-expressions-grade7-click-reveal",
  noVisual: true,
  frequencyExpressionReveal: {
    rows: [
      ["once", "a", "day"],
      ["twice", "a", "week"],
      ["thrice\nthree times", "a", "month"],
      ["four times", "a", "year"]
    ]
  }
};

const frequencyExpressionGrade7TestSlide = {
  id: "frequency-expression-grade7-test",
  presenceSlide: true,
  exerciseLink: "frequency-adverbs-choice-grade7",
  postExerciseSlideId: "frequency-adverbs-grade7-video-hub",
  testQuestion: {
    promptLabel: "FREQUENCY EXPRESSION",
    randomizeQuestions: true,
    questions: [
      { targetExpression: "once a day", answer: "günde bir kere", choices: ["günde bir kere", "günde iki kere", "haftada bir kere", "ayda bir kere"] },
      { targetExpression: "twice a month", answer: "ayda iki kere", choices: ["ayda iki kere", "ayda bir kere", "haftada iki kere", "yılda iki kere"] },
      { targetExpression: "three times a week", answer: "haftada üç kere", choices: ["haftada üç kere", "haftada iki kere", "ayda üç kere", "yılda üç kere"] },
      { targetExpression: "four times a year", answer: "yılda dört kere", choices: ["yılda dört kere", "yılda üç kere", "ayda dört kere", "haftada dört kere"] },
      { targetExpression: "once a month", answer: "ayda bir kere", choices: ["ayda bir kere", "ayda iki kere", "haftada bir kere", "yılda bir kere"] },
      { targetExpression: "twice a day", answer: "günde iki kere", choices: ["günde iki kere", "günde bir kere", "haftada iki kere", "ayda iki kere"] },
      { targetExpression: "everyday", answer: "her gün", choices: ["her gün", "her hafta", "her ay", "her yıl"] },
      { targetExpression: "every morning", answer: "her sabah", choices: ["her sabah", "her akşam", "her hafta", "her gün"] },
      { targetExpression: "every evening", answer: "her akşam", choices: ["her akşam", "her sabah", "her gün", "her hafta"] },
      { targetExpression: "every week", answer: "her hafta", choices: ["her hafta", "her gün", "her ay", "her yıl"] },
      { targetExpression: "every month", answer: "her ay", choices: ["her ay", "her hafta", "her gün", "her yıl"] },
      { targetExpression: "every year", answer: "her yıl", choices: ["her yıl", "her ay", "her hafta", "her gün"] }
    ]
  }
};

frequencyAdverbsGrade7Function.sentences.splice(
  frequencyAdverbsGrade7VideoStartIndex,
  0,
  frequencyExpressionRevealGrade7Slide,
  frequencyExpressionGrade7TestSlide
);

window.functionModules = window.functionModules || [];
window.functionModules.push(frequencyAdverbsGrade7Function);
