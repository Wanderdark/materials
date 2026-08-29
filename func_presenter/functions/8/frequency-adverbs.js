const frequencyAdverbsGrade8Function = {
  id: "frequency-adverbs-grade8",
  grade: 8,
  unit: 2,
  title: "Adverbs of Frequency",
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
        { text: " does Lucas go jogging?" }
      ],
      imagePath: "images/frequency-adverbs/lucas_jogging.webp",
      visualBrief: "He goes jogging."
    },
    {
      id: "freq-ex-1-a",
      presenceSlide: true,
      kicker: "ALWAYS",
      titleParts: [
        { text: "Lucas " },
        { text: "always", className: "freq-highlight" },
        { text: " goes jogging." }
      ],
      note: "He goes jogging everyday.",
      imagePath: "images/frequency-adverbs/lucas_jogging.webp",
      visualBrief: "Lucas going jogging."
    },
    {
      id: "freq-ex-2",
      presenceSlide: true,
      kicker: "USUALLY",
      titleParts: [
        { text: "Ella " },
        { text: "usually", className: "freq-highlight" },
        { text: " meets friends after school." }
      ],
      imagePath: "images/frequency-adverbs/friends.webp",
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
        { text: "They  " },
        { text: "sometimes", className: "freq-highlight" },
        { text: " eat lunch at the cafeteria." }
      ],
      imagePath: "images/frequency-adverbs/eatout.webp",
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
            question: "<How often> do you go swimming?",
            imagePath: "images/frequency-adverbs/daniel_swim.webp",
            sentences: [
              "I <rarely> go swimming.",
              "Daniel go<es> swimming <once a week.>"
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
      videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_ava_olivia.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Do you paint in the evenings?" }] }, { speaker: "OLIVIA", parts: [{ text: "I " }, { answer: "sometimes", choices: ["always", "sometimes"] }, { text: " paint before bed." }] }] },
      exerciseLink: "frequency-adverbs-choice-grade7"
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

const frequencyAdverbsGrade8VideoStartIndex = frequencyAdverbsGrade8Function.sentences.findIndex(
  (item) => item.id === "frequency-video-ava-olivia"
);
const frequencyAdverbsGrade8VideoItems = frequencyAdverbsGrade8Function.sentences
  .slice(frequencyAdverbsGrade8VideoStartIndex, frequencyAdverbsGrade8VideoStartIndex + 15)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

frequencyAdverbsGrade8Function.sentences.splice(
  frequencyAdverbsGrade8VideoStartIndex,
  frequencyAdverbsGrade8VideoItems.length,
  {
    id: "frequency-adverbs-grade8-video-hub",
    noVisual: true,
    simplePresentVideoHub: {
      title: "WATCH AND COMPLETE",
      items: frequencyAdverbsGrade8VideoItems
    }
  }
);

const frequencyExpressionRevealSlide = {
  id: "frequency-expressions-click-reveal",
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
frequencyAdverbsGrade8Function.sentences.splice(
  frequencyAdverbsGrade8VideoStartIndex,
  0,
  frequencyExpressionRevealSlide,
  {
    id: "frequency-expression-once-a-day-test",
    presenceSlide: true,
    exerciseLink: "frequency-adverbs-choice-grade7",
    postExerciseSlideId: "frequency-adverbs-grade8-video-hub",
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
  }
);

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-canon-final-test",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    hideQuestionTitle: true,
    randomizeQuestions: true,
    questions: [
      { lines: [{ speaker: "Hannah", text: "I love cycling. I _____ ride my bike." }], answer: "often", choices: ["often", "hardly ever"] },
      { lines: [{ speaker: "Ethan", text: "I love rock music. I _____ listen to it." }], answer: "often", choices: ["often", "never"] },
      { lines: [{ speaker: "Chloe", text: "I love dancing. I _____ go to dance class." }], answer: "usually", choices: ["usually", "rarely"] },
      { lines: [{ speaker: "Emma", text: "I love cooking. I _____ help in the kitchen." }], answer: "often", choices: ["often", "never"] },
      { lines: [{ speaker: "Ava", text: "I care about animals. I _____ visit animal shelters on weekends." }], answer: "always", choices: ["always", "hardly ever"] },
      { lines: [{ speaker: "Lucas", text: "I love playing football. I _____ train after school." }], answer: "always", choices: ["always", "never"] },
      { lines: [{ speaker: "Noah", text: "I love studying. I _____ do my homework." }], answer: "always", choices: ["always", "rarely"] },
      { lines: [{ speaker: "Olivia", text: "I love taking photos. I _____ carry my camera." }], answer: "usually", choices: ["usually", "never"] },
      { lines: [{ speaker: "Victoria", text: "I love coding. I _____ work on coding projects." }], answer: "often", choices: ["often", "hardly ever"] },
      { lines: [{ speaker: "Benjamin", text: "I enjoy riding my scooter. I _____ ride it at weekends." }], answer: "often", choices: ["often", "never"] },
      { lines: [{ speaker: "Zoe", text: "I don't like loud music. I _____ go to loud concerts." }], answer: "never", choices: ["never", "usually"] },
      { lines: [{ speaker: "Mia", text: "I'm a bit shy. I _____ speak in front of people." }], answer: "rarely", choices: ["rarely", "always"] },
      { lines: [{ speaker: "Jack", text: "I don't enjoy football. I _____ play it." }], answer: "never", choices: ["never", "often"] },
      { lines: [{ speaker: "Ella", text: "I don't like getting up early. I _____ get up early at weekends." }], answer: "rarely", choices: ["rarely", "usually"] },
      { lines: [{ speaker: "Daniel", text: "I don't like waiting in long lines. I _____ visit crowded amusement parks." }], answer: "hardly ever", choices: ["hardly ever", "often"] },
      { lines: [{ speaker: "Emma", text: "I am afraid of fast rides. I _____ ride roller coasters." }], answer: "never", choices: ["never", "usually"] },
      { lines: [{ speaker: "Noah", text: "I don't enjoy sports activities. I _____ play sports." }], answer: "seldom", choices: ["seldom", "always"] },
      { lines: [{ speaker: "Victoria", text: "I don't enjoy reading books. I _____ read novels." }], answer: "hardly ever", choices: ["hardly ever", "often"] },
      { lines: [{ speaker: "Ava", text: "I don't like crowded places. I _____ go to busy shopping centres." }], answer: "rarely", choices: ["rarely", "usually"] },
      { lines: [{ speaker: "David", text: "I think being honest is important. I _____ trust people who lie." }], answer: "never", choices: ["never", "always"] },
      { lines: [{ speaker: "Hannah", text: "I love riding horse. I ride my horse _____." }], answer: "twice a week", choices: ["twice a week", "rarely"] },
      { lines: [{ speaker: "Chloe", text: "I love dancing. I go to dance class _____." }], answer: "once a week", choices: ["once a week", "twice a month"] },
      { lines: [{ speaker: "Olivia", text: "I enjoy watching movies at the cinema. I go there _____." }], answer: "once a week", choices: ["once a year", "once a week"] },
      { lines: [{ speaker: "Benjamin", text: "I enjoy swimming. I attend swimming courses _____." }], answer: "twice a week", choices: ["never", "twice a week"] },
      { lines: [{ speaker: "Lucas", text: "I love playing football. I play football _____." }], answer: "three times a week", choices: ["three times a week", "once a month"] }
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-talk-about-people-one",
  presenceSlide: true,
  keepNextLabel: true,
  sequentialBoxes: {
    interaction: "answer-reveal",
    questions: [
      { question: "Who always wears trendy clothes?", people: ["Olivia"], answer: "Olivia always wears trendy clothes." },
      { question: "Who has an impressive voice?", people: ["Ella"], answer: "Ella has an impressive voice." },
      { question: "Who usually comes to school late?", people: ["Ella"], answer: "Ella usually comes to school late." },
      { question: "Who often prefers being alone?", people: ["Mia", "Zoe"], answer: "Mia and Zoe often prefer being alone." },
      { question: "Who usually tries different sports and activities?", people: ["Daniel"], answer: "Daniel usually tries different sports and activities." }
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-talk-about-people-two",
  presenceSlide: true,
  sequentialBoxes: {
    interaction: "answer-reveal",
    questions: [
      { question: "Who likes playing musical instruments?", people: ["Ethan", "Chloe"], answer: "Ethan and Chloe like playing musical instruments." },
      { question: "Who likes listening to loud music?", people: ["Ethan"], answer: "Ethan likes listening to loud music." },
      { question: "Who is a bookworm?", people: ["Mia"], answer: "Mia is a bookworm. She likes reading lots of books." },
      { question: "Who likes being physically active?", people: ["Hannah"], answer: "Hannah likes being physically active." },
      { question: "Who is a computer nerd?", people: ["Victoria"], answer: "Victoria is a computer nerd." }
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-ava-fast-food",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Olivia", text: "_____" },
      { speaker: "Ava", text: "I prefer healthy food, so I hardly ever eat fast food." }
    ],
    answer: "How often do you eat fast food?",
    randomizeChoices: false,
    choices: [
      "How often do you train?",
      "What time do you sleep?",
      "When do you do homework?",
      "How often do you eat fast food?"
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-benjamin-fruit",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Chloe", text: "How often do you eat fruit?" },
      { speaker: "Benjamin", text: "_____" }
    ],
    answer: "I know it is wrong, but I seldom eat fruit.",
    choices: [
      "I never eat junk food.",
      "I know it is wrong, but I seldom eat fruit.",
      "Fruit is my favourite.",
      "I drink milk every day."
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-hannah-school",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [{ speaker: "Hannah", text: "My school is far away from our house. _____" }],
    answer: "So I ride my bike to school every day.",
    choices: [
      "I hardly ever walk to school.",
      "After I go to school in the morning.",
      "So I ride my bike to school every day.",
      "Because I like riding my bike to school."
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-mia-walk",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Zoe", text: "_____" },
      { speaker: "Mia", text: "To be honest, I go for a walk once a month." }
    ],
    answer: "How often do you go for a walk?",
    choices: [
      "Where do you go for a walk?",
      "What do you have as a snack?",
      "How often do you go for a walk?",
      "Why do you like staying at home?"
    ]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-chloe-dancing",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Benjamin", text: "How often do you practise dancing?" },
      { speaker: "Chloe", text: "I practise dancing _____." }
    ],
    answer: "twice a week",
    choices: ["in the music room", "with my friends", "twice a week", "because it makes me happy"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-lucas-football",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Daniel", text: "_____" },
      { speaker: "Lucas", text: "I play football three times a week." }
    ],
    answer: "How often do you play football?",
    choices: ["What sport do you play?", "How often do you play football?", "Where do you play football?", "Who do you play football with?"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-noah-sports",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Daniel", text: "Do you like sports?" },
      { speaker: "Noah", text: "Not really. I _____ do sports." }
    ],
    answer: "seldom",
    choices: ["always", "often", "seldom", "every day"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-benjamin-swimming",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Ava", text: "How often do you go swimming?" },
      { speaker: "Benjamin", text: "I go swimming _____." }
    ],
    answer: "twice a week",
    choices: ["twice a week", "at the sports centre", "with my father", "because it is fun"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-ethan-rock-music",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Chloe", text: "_____" },
      { speaker: "Ethan", text: "Because I love loud guitar sounds." }
    ],
    answer: "Why do you listen to rock music?",
    choices: ["Where do you listen to rock music?", "Why do you listen to rock music?", "When do you listen to rock music?", "How often do you listen to rock music?"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-zoe-crosswords",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Mia", text: "What do you usually do before bed?" },
      { speaker: "Zoe", text: "I usually _____." }
    ],
    answer: "solve crossword puzzles",
    choices: ["solve crossword puzzles", "go to loud concerts", "ride a horse", "play football"]
  }
});

frequencyAdverbsGrade8Function.sentences.push({
  id: "frequency-adverbs-question-hannah-active",
  presenceSlide: true,
  testQuestion: {
    hidePromptLabel: true,
    lines: [
      { speaker: "Olivia", text: "_____" },
      { speaker: "Hannah", text: "I often go hiking and ride my bike." }
    ],
    answer: "What do you often do to stay active?",
    choices: ["What do you often do to stay active?", "How often do you go hiking?", "Where do you ride your bike?", "Who do you go hiking with?"]
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(frequencyAdverbsGrade8Function);
