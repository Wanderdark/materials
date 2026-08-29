const makingSimpleInquiriesGrade8Function = {
  id: "making-simple-inquiries",
  grade: 8,
  unit: 2,
  title: "Making Simple Inquiries",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "making-simple-inquiries-question-words",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "inquiry-reveal",
        items: [
          { word: "Who", meaning: "Kim", example: "Who is the sender of the mail?", tone: "#e9f900", textColor: "#0b1e52" },
          { word: "What", meaning: "Ne?", example: "What do you have for breakfast?", tone: "#1010ec" },
          { word: "What time", meaning: "Saat kaçta?", example: "What time does the event start?", tone: "#ee1b13" },
          { word: "When", meaning: "Ne zaman?", example: "When is your birthday?", tone: "#f6c68f", textColor: "#0b1e52" },
          { word: "Where", meaning: "Nerede?", example: "Where do you go on holidays?", tone: "#118f08" },
          { word: "Why", meaning: "Niye?", example: "Why do you like him?", tone: "#7a0d0d" },
          { word: "How", meaning: "Nasıl?", example: "How do you spend your weekends?", tone: "#1515ae" },
          { word: "How often", meaning: "Ne sıklıkla?", example: "How often do you go to the cinema?", tone: "#99128c" },
          { word: "What kind of", meaning: "Ne tür?", example: "What kind of music do you listen to?", tone: "#e30ce2" }
        ]
      }
    },
    {
      id: "inquiry-olivia-movies",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Mia", text: "_____ do you watch movies with your mum?" },
          { speaker: "Olivia", text: "On Sunday evenings." }
        ],
        answer: "When",
        choices: ["Where", "What", "Who", "When"]
      }
    },
    {
      id: "inquiry-benjamin-denmark",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Lucas", text: "_____ are you from?" },
          { speaker: "Benjamin", text: "I am from Denmark." }
        ],
        answer: "Where",
        choices: ["When", "Why", "How often", "Where"]
      }
    },
    {
      id: "inquiry-ethan-rock-music",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Daniel", text: "_____ do you like rock music?" },
          { speaker: "Ethan", text: "Because it is energetic and I love loud guitar sounds." }
        ],
        answer: "Why",
        choices: ["What", "What time", "Where", "Why"]
      }
    },
    {
      id: "inquiry-noah-lessons",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Benjamin", text: "_____ do your lessons start?" },
          { speaker: "Noah", text: "At 9 a.m." }
        ],
        answer: "What time",
        choices: ["Where", "Who", "How", "What time"]
      }
    },
    {
      id: "inquiry-hannah-school-bike",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Ava", text: "_____ do you go to school?" },
          { speaker: "Hannah", text: "I ride my bike to school every day." }
        ],
        answer: "How",
        choices: ["When", "Why", "What time", "How"]
      }
    },
    {
      id: "inquiry-ava-mother-work",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Chloe", text: "_____ does your mother work?" },
          { speaker: "Ava", text: "She works at an animal clinic." }
        ],
        answer: "Where",
        choices: ["Why", "How", "When", "Where"]
      }
    },
    {
      id: "inquiry-ella-pop-music",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Olivia", text: "_____ music do you listen to?" },
          { speaker: "Ella", text: "I usually listen to pop music." }
        ],
        answer: "What kind of",
        choices: ["Why", "Where", "Who", "What kind of"]
      }
    },
    {
      id: "inquiry-olivia-breakfast",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Chloe", text: "_____ do you have for breakfast?" },
          { speaker: "Olivia", text: "I usually have blueberry pancakes for breakfast." }
        ],
        answer: "What",
        choices: ["Why", "Where", "When", "What"]
      }
    },
    {
      id: "inquiry-ella-pop-frequency",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Chloe", text: "_____ do you listen to pop music?" },
          { speaker: "Ella", text: "I listen to it every day after school." }
        ],
        answer: "How often",
        choices: ["How", "Where", "Who", "How often"]
      }
    },
    {
      id: "inquiry-hannah-family",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Daniel", text: "_____ gets up early in your family?" },
          { speaker: "Hannah", text: "My mum, Ingrid, does. She goes to work early." }
        ],
        answer: "Who",
        choices: ["Where", "When", "What time", "Who"]
      }
    },
    {
      id: "inquiry-zoe-stargazing",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Benjamin", text: "_____ do you enjoy stargazing?" },
          { speaker: "Zoe", text: "On clear evenings." }
        ],
        answer: "When",
        choices: ["Why", "Where", "Who", "When"]
      }
    },
    {
      id: "inquiry-ava-weekends",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Lucas", text: "_____ do you like doing at weekends?" },
          { speaker: "Ava", text: "I enjoy visiting animal shelters and taking care of animals." }
        ],
        answer: "What",
        choices: ["Where", "When", "Who", "What"]
      }
    },
    {
      id: "inquiry-mia-diary",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Hannah", text: "_____ do you organise your ideas?" },
          { speaker: "Mia", text: "I write them in my diary." }
        ],
        answer: "How",
        choices: ["Where", "Who", "When", "How"]
      }
    },
    {
      id: "inquiry-victoria-puzzles",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Jack", text: "_____ do you solve puzzles?" },
          { speaker: "Victoria", text: "Every weekend." }
        ],
        answer: "How often",
        choices: ["Why", "Where", "What time", "How often"]
      }
    },
    {
      id: "inquiry-daniel-adventure-parks",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Mia", text: "_____ do you like to spend time?" },
          { speaker: "Daniel", text: "At adventure parks." }
        ],
        answer: "Where",
        choices: ["Why", "Who", "What time", "Where"]
      }
    },
    {
      id: "inquiry-jack-fishing",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Olivia", text: "_____ in your family likes fishing?" },
          { speaker: "Jack", text: "My dad and I do." }
        ],
        answer: "Who",
        choices: ["Where", "What", "How", "Who"]
      }
    },
    {
      id: "inquiry-david-family-holidays",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Chloe", text: "_____ do you like to go on family holidays?" },
          { speaker: "David", text: "I like going to the beach with my family." }
        ],
        answer: "Where",
        choices: ["What", "When", "Who", "Where"]
      }
    },
    {
      id: "inquiry-benjamin-orange-juice",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Ethan", text: "_____ drink do you like?" },
          { speaker: "Benjamin", text: "I like orange juice." }
        ],
        answer: "What kind of",
        choices: ["Where", "When", "Who", "What kind of"]
      }
    },
    {
      id: "inquiry-lucas-football-why",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Zoe", text: "_____ do you enjoy playing football?" },
          { speaker: "Lucas", text: "Because I like teamwork and competition." }
        ],
        answer: "Why",
        choices: ["Where", "When", "How often", "Why"]
      }
    },
    {
      id: "inquiry-emma-baking",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        lines: [
          { speaker: "Daniel", text: "_____ do you usually start baking on Saturdays?" },
          { speaker: "Emma", text: "At ten in the morning." }
        ],
        answer: "What time",
        choices: ["Where", "Who", "Why", "What time"]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(makingSimpleInquiriesGrade8Function);
