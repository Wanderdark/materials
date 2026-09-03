const makingSimpleInquiriesGrade8Function = {
  id: "making-simple-inquiries",
  grade: 8,
  unit: 3,
  title: "Making Simple Inquiries",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "making-simple-inquiries-food-questions-1",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "inquiry-reveal",
        layoutClass: "inquiry-reveal-large",
        answerOnly: true,
        items: [
          {
            word: "What's your favorite snack or dish?",
            meaning: "(Favori atıştırmalığın veya yemeğin ne?)",
            example: "It is potato chips.",
            tone: "#e9f900",
            textColor: "#0b1e52"
          },
          {
            word: "Why do you like kadayıf?",
            meaning: "(Neden kadayıf seviyorsun?)",
            example: "Because I have a sweet tooth.",
            tone: "#7a0d0d"
          },
          {
            word: "How often do you eat fish?",
            meaning: "(Ne sıklıkla balık yersin?)",
            example: "Twice a week.",
            tone: "#99128c"
          },
          {
            word: "Which country does it belong to?",
            meaning: "(Hangi ülkeye ait bir yemek?)",
            example: "It is a traditional Turkish dish. It is very popular in France, too.",
            tone: "#118f08"
          }
        ]
      }
    },
    {
      id: "making-simple-inquiries-food-questions-2",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "inquiry-reveal",
        layoutClass: "inquiry-reveal-large inquiry-reveal-compact",
        answerOnly: true,
        items: [
          {
            word: "Which cuisine do you prefer?",
            meaning: "(Hangi yemeği tercih edersin?)",
            example: "I prefer vegetable dishes. Zucchini is my favorite.",
            tone: "#e30ce2"
          },
          {
            word: "How many vegetables are there in the recipe?",
            meaning: "(Tarifte kaç sebze var?)",
            example: "Two. Potato and onions.",
            tone: "#1515ae"
          },
          {
            word: "How long does it take to bake cookies?",
            meaning: "(Kurabiyelerin pişmesi ne kadar sürüyor?)",
            example: "It takes about 20 minutes.",
            tone: "#ee1b13"
          },
          {
            word: "What is the popular traditional dish of Japan?",
            meaning: "(Japonya'nın popüler geleneksel yemeği nedir?)",
            example: "Sushi is a very popular\ntraditional dish in Japan.",
            tone: "#f6c68f",
            textColor: "#0b1e52"
          }
        ]
      }
    },
    {
      id: "making-simple-inquiries-question-answer-match",
      presenceSlide: true,
      questionAnswerMatch: {
        title: "MATCH QUESTIONS AND ANSWERS",
        items: [
          { id: "fruit-and-vegetables", question: "Why do you prefer eating fruit and vegetables?", answer: "Because they are healthy." },
          { id: "cook-fish", question: "How do you usually cook fish?", answer: "I usually grill it." },
          { id: "pizza-country", question: "Which country does pizza belong to?", answer: "It is a traditional Italian dish." },
          { id: "serve-brownies", question: "How do you serve brownies?", answer: "I serve them warm." },
          { id: "cupcake-ingredients", question: "What are the ingredients of a cupcake?", answer: "Sugar, eggs, flour, baking powder, oil and milk." },
          { id: "baking-preference", question: "Do you prefer baking cookies or a cake?", answer: "I prefer baking cookies." }
        ]
      }
    },
    {
      id: "making-simple-inquiries-question-answer-match-2",
      presenceSlide: true,
      questionAnswerMatch: {
        title: "MATCH QUESTIONS AND ANSWERS",
        items: [
          { id: "make-salad", question: "What do you need to make a salad?", answer: "You need tomatoes, cucumbers and olive oil." },
          { id: "cook-pasta", question: "How do you usually cook pasta?", answer: "I usually boil it." },
          { id: "cake-eggs", question: "How many eggs do you need for this cake?", answer: "You need three eggs." },
          { id: "sushi-country", question: "Which country does sushi belong to?", answer: "It is a traditional Japanese dish." },
          { id: "like-brownies", question: "Why do you like brownies?", answer: "Because they are sweet and delicious." },
          { id: "serve-soup", question: "How do you serve soup?", answer: "I serve it hot." }
        ]
      }
    },
    {
      id: "making-simple-inquiries-question-answer-match-3",
      presenceSlide: true,
      questionAnswerMatch: {
        title: "MATCH QUESTIONS AND ANSWERS",
        items: [
          { id: "cut-vegetables", question: "What do you use to cut vegetables?", answer: "I use a knife." },
          { id: "cook-potatoes", question: "How do you cook potatoes?", answer: "I fry them in a pan." },
          { id: "make-pancakes", question: "What do you need to make pancakes?", answer: "You need eggs, flour, milk and sugar." },
          { id: "menemen-tomatoes", question: "How many tomatoes do you need for menemen?", answer: "You need three tomatoes." },
          { id: "bake-cupcakes", question: "How long does it take to bake cupcakes?", answer: "It takes about thirty minutes." },
          { id: "prefer-grilled-fish", question: "Why do you prefer grilled fish?", answer: "Because it is healthy and delicious." }
        ]
      }
    },
    {
      id: "making-simple-inquiries-answer-reveal-one",
      presenceSlide: true,
      keepNextLabel: true,
      sequentialBoxes: {
        interaction: "answer-reveal",
        questions: [
          { question: "Who can cook tasty dishes?", people: ["Emma"], answer: "Emma can cook tasty dishes." },
          { question: "Who has a sweet tooth?", people: ["Chloe"], answer: "Chloe has a sweet tooth." },
          { question: "Who can make delicious desserts?", people: ["Chloe"], answer: "Chloe can make delicious desserts." },
          { question: "Who likes eating seafood?", people: ["David"], answer: "David likes eating seafood." },
          { question: "Who is a vegan? (Who hates eating meat)?", people: ["Ava"], answer: "Ava is a vegan. She hates eating meat." }
        ]
      }
    },
    {
      id: "making-simple-inquiries-answer-reveal-two",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "answer-reveal",
        questions: [
          { question: "Who has healthy eating habits?", people: ["Ava"], answer: "Ava has healthy eating habits." },
          { question: "Who never cooks?", people: ["Victoria"], answer: "Victoria never cooks." },
          { question: "Who likes trying different traditional dishes?", people: ["Hannah"], answer: "Hannah likes trying different traditional dishes." },
          { question: "Who hates junk food?", people: ["Ava"], answer: "Ava hates junk food." },
          { question: "Who knows how to cook mantı?", people: ["Mia"], answer: "Mia knows how to cook mantı." }
        ]
      }
    },
    {
      id: "making-simple-inquiries-final-test",
      presenceSlide: true,
      testQuestion: {
        questions: [
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Chloe", text: "_____ do you eat noodles?" },
              { speaker: "Emma", text: "Twice a week." }
            ],
            answer: "How often",
            choices: ["Why", "How often", "Where", "When"]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Hannah", text: "_____ country does sushi belong to?" },
              { speaker: "Ava", text: "It is a traditional Japanese dish." }
            ],
            answer: "Which",
            choices: ["Why", "Which", "Where", "When"]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Mia", text: "_____ is your favorite snack, Olivia?" },
              { speaker: "Olivia", text: "It is blueberry pancakes." }
            ],
            answer: "What",
            choices: ["Why", "How many", "How often", "What"]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Chloe", text: "_____ do you like vegetable soup, Emma?" },
              { speaker: "Emma", text: "I like it because it is healthy." }
            ],
            answer: "Why",
            choices: ["How often", "Where", "Why", "When"]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Olivia", text: "_____ do you have chocolate cookies, Mia?" },
              { speaker: "Mia", text: "I usually have them twice a week." }
            ],
            answer: "How often",
            choices: ["Where", "How often", "When", "Why"]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Chloe", text: "_____" },
              { speaker: "Emma", text: "There are four: corn, cauliflower, cabbage and salt." }
            ],
            answer: "How many ingredients are there in vegetable soup?",
            choices: [
              "How many ingredients are there in vegetable soup?",
              "How often do you eat vegetable soup?",
              "What do you need to make vegetable soup?",
              "How do you serve vegetable soup?"
            ]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Ava", text: "How often do you bake cupcakes at home, Chloe?" },
              { speaker: "Chloe", text: "Not very often, because _____." }
            ],
            answer: "It's too hard to make.",
            choices: ["My family has a sweet tooth.", "I always bake them after school.", "It's too hard to make.", "Cupcakes are my favorite dessert."]
          },
          {
            hidePromptLabel: true,
            lines: [
              { speaker: "Hannah", text: "_____?" },
              { speaker: "Victoria", text: "Japan and Italy." }
            ],
            answer: "Which countries do sushi and pizza belong to?",
            choices: [
              "Which countries do sushi and pizza belong to?",
              "How often do people eat sushi and pizza?",
              "What ingredients do you need for sushi and pizza?",
              "How do you make sushi and pizza?"
            ]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "You want to make a mushroom omelette, but you do not know the steps. What do you say?" }
            ],
            answer: "Could you tell me how to make it?",
            choices: ["Could you tell me how to make it?", "Would you like a mushroom omelette?", "What is the name of this dish?", "How often do you eat omelettes?"]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "Your friend comes to your home for lunch. You serve a bowl of tomato soup. What do you say?" }
            ],
            answer: "Enjoy your meal!",
            choices: ["Make yourself at home.", "Have a nice trip.", "Enjoy your meal!", "See you tomorrow."]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "Your friend wants to be healthier, but often eats sugary snacks. What do you say?" }
            ],
            answer: "You should choose fruit and vegetables.",
            choices: ["You should choose fruit and vegetables.", "You should eat more chocolate cookies.", "You shouldn't drink water.", "You should stay indoors."]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "Your friend makes mushroom pasta, and you want to know which ingredients they used. What do you ask?" }
            ],
            answer: "What is in it?",
            choices: ["What is your favorite snack?", "What is in it?", "When do you usually eat it?", "How often do you cook it?"]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "Your friend offers you a chicken wrap, but you do not like chicken. How do you politely refuse?" }
            ],
            answer: "Thank you, but I don't like chicken.",
            choices: ["Sounds delicious!", "Thank you, but I don't like chicken.", "Sorry, I can't cook chicken.", "Great idea, let's eat it."]
          },
          {
            promptLabel: "SITUATION",
            lines: [
              { speaker: "Situation", text: "Your friend offers you blueberry pancakes. They are your favorite snack. What do you say to accept the offer?" }
            ],
            answer: "I'd love some, thanks!",
            choices: ["No, thanks. I don't like them.", "I'd love some, thanks!", "I hope you enjoy them.", "I can't make pancakes."]
          }
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(makingSimpleInquiriesGrade8Function);
