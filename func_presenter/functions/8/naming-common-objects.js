const namingCommonObjectsGrade8Function = {
  id: "naming-common-objects",
  grade: 8,
  unit: 3,
  title: "Describing Simple Processes",
  compactPresentationTitle: true,
  description: "",
  exercises: [],
  sentences: [
    {
      id: "describing-simple-processes-index",
      presenceSlide: true,
      noVisual: true,
      simpleProcessIndex: {
        title: "UNIT INDEX",
        items: [
          { label: "KITCHEN TOOLS", targetId: "kitchen-tools-split-image-word-match" },
          { label: "INGREDIENTS", targetId: "ingredients-split-image-word-match" },
          { label: "COOKING METHODS", targetId: "cooking-methods-split-image-word-match" },
          { label: "DESCRIBING SIMPLE PROCESSES", targetId: "process-expression-reveal" }
        ]
      }
    },
    {
      id: "kitchen-tools-split-image-word-match",
      presenceSlide: true,
      splitImageWordMatch: {
        title: "KITCHEN TOOLS",
        items: [
          { id: "frying-pan", label: "frying pan", imagePath: "../images/8/3/4.webp" },
          { id: "rolling-pin", label: "rolling pin", imagePath: "images/common/rolling_pin.webp" },
          { id: "baking-tray", label: "baking tray", imagePath: "../images/8/3/30.webp" },
          { id: "strainer", label: "strainer", imagePath: "../images/8/3/29.webp" },
          { id: "oven-stove", label: "oven / stove", imagePath: "../images/8/3/21.webp" },
          { id: "teaspoon-tablespoon", label: "teaspoon / tablespoon", imagePath: "../images/8/3/9.webp", compactLabel: true },
          { id: "knife", label: "knife", imagePath: "../images/8/3/3.webp" },
          { id: "mixing-bowl", label: "mixing bowl", imagePath: "../images/8/3/5.webp" }
        ]
      }
    },
    {
      id: "ingredients-split-image-word-match",
      presenceSlide: true,
      splitImageWordMatch: {
        title: "INGREDIENTS",
        items: [
          { id: "corn", label: "corn", imagePath: "../images/5/6/54.webp" },
          { id: "cauliflower", label: "cauliflower", imagePath: "images/common/cauliflower.webp" },
          { id: "pepper", label: "pepper", imagePath: "../images/8/3/40.webp" },
          { id: "cabbage", label: "cabbage", imagePath: "images/common/cabbage.webp" },
          { id: "onion", label: "onion", imagePath: "images/common/onion.webp" },
          { id: "garlic", label: "garlic", imagePath: "../images/8/3/56.webp" },
          { id: "eggplant", label: "eggplant", imagePath: "images/common/eggplant.webp" },
          { id: "mushroom", label: "mushroom", imagePath: "images/countable-uncountable/somemushrooms.webp" }
        ]
      }
    },
    {
      id: "ingredients-protein-split-image-word-match",
      presenceSlide: true,
      splitImageWordMatch: {
        title: "INGREDIENTS",
        items: [
          { id: "orzo", label: "orzo", imagePath: "images/common/orzo.webp" },
          { id: "pistachios", label: "pistachios", imagePath: "images/common/pistachios.webp" },
          { id: "meat", label: "meat", imagePath: "../images/8/3/34.webp" },
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" },
          { id: "chicken", label: "chicken", imagePath: "../images/8/3/19.webp" },
          { id: "rice", label: "rice", imagePath: "images/common/rice.webp" },
          { id: "salt", label: "salt", imagePath: "../images/8/3/35.webp" },
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" }
        ]
      }
    },
    {
      id: "recipe-vegetable-soup",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "VEGETABLE SOUP",
        ingredients: ["corn", "cauliflower", "cabbage", "salt"],
        question: "What does this recipe contain?",
        answerId: "cauliflower",
        choices: [
          { id: "cauliflower", label: "cauliflower", imagePath: "images/common/cauliflower.webp" },
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" },
          { id: "meat", label: "meat", imagePath: "../images/8/3/34.webp" },
          { id: "pistachios", label: "pistachios", imagePath: "images/common/pistachios.webp" }
        ]
      }
    },
    {
      id: "recipe-mushroom-orzo",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "MUSHROOM ORZO",
        ingredients: ["orzo", "mushrooms", "onion", "garlic", "salt"],
        question: "Which picture shows an ingredient in this recipe?",
        answerId: "mushroom",
        choices: [
          { id: "mushroom", label: "mushroom", imagePath: "images/countable-uncountable/somemushrooms.webp" },
          { id: "cauliflower", label: "cauliflower", imagePath: "images/common/cauliflower.webp" },
          { id: "rice", label: "rice", imagePath: "images/common/rice.webp" },
          { id: "chicken", label: "chicken", imagePath: "../images/8/3/19.webp" }
        ]
      }
    },
    {
      id: "recipe-pepper-chicken",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "PEPPER CHICKEN",
        ingredients: ["chicken", "pepper", "onion", "salt"],
        question: "What do you need to make pepper chicken?",
        answerId: "chicken",
        choices: [
          { id: "chicken", label: "chicken", imagePath: "../images/8/3/19.webp" },
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" },
          { id: "eggplant", label: "eggplant", imagePath: "images/common/eggplant.webp" },
          { id: "corn", label: "corn", imagePath: "../images/5/6/54.webp" }
        ]
      }
    },
    {
      id: "recipe-grilled-fish-rice",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "GRILLED FISH WITH RICE",
        ingredients: ["grilled fish", "rice", "garlic", "salt"],
        question: "What does this recipe contain?",
        answerId: "rice",
        choices: [
          { id: "rice", label: "rice", imagePath: "images/common/rice.webp" },
          { id: "orzo", label: "orzo", imagePath: "images/common/orzo.webp" },
          { id: "corn", label: "corn", imagePath: "../images/5/6/54.webp" },
          { id: "cabbage", label: "cabbage", imagePath: "images/common/cabbage.webp" }
        ]
      }
    },
    {
      id: "recipe-eggplant-meat-bake",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "EGGPLANT AND MEAT BAKE",
        ingredients: ["eggplant", "meat", "onion", "garlic", "salt"],
        question: "Which picture shows an ingredient in this recipe?",
        answerId: "meat",
        choices: [
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" },
          { id: "meat", label: "meat", imagePath: "../images/8/3/34.webp" },
          { id: "chicken", label: "chicken", imagePath: "../images/8/3/19.webp" },
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" }
        ]
      }
    },
    {
      id: "recipe-seafood-rice",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "SEAFOOD RICE",
        ingredients: ["seafood", "rice", "pepper", "garlic", "salt"],
        question: "What do you need to make seafood rice?",
        answerId: "seafood",
        choices: [
          { id: "chicken", label: "chicken", imagePath: "../images/8/3/19.webp" },
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" },
          { id: "meat", label: "meat", imagePath: "../images/8/3/34.webp" },
          { id: "mushroom", label: "mushroom", imagePath: "images/countable-uncountable/somemushrooms.webp" }
        ]
      }
    },
    {
      id: "recipe-corn-cabbage-salad",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "CORN AND CABBAGE SALAD",
        ingredients: ["corn", "cabbage", "onion", "pepper", "salt"],
        question: "What does this recipe contain?",
        answerId: "cabbage",
        choices: [
          { id: "cauliflower", label: "cauliflower", imagePath: "images/common/cauliflower.webp" },
          { id: "eggplant", label: "eggplant", imagePath: "images/common/eggplant.webp" },
          { id: "cabbage", label: "cabbage", imagePath: "images/common/cabbage.webp" },
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" }
        ]
      }
    },
    {
      id: "recipe-pistachio-cake",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "PISTACHIO CAKE",
        ingredients: ["flour", "eggs", "butter", "sugar", "pistachios"],
        question: "What are the ingredients of a pistachio cake?",
        answerId: "pistachio-cake-set",
        choices: [
          { id: "vegetable-set", label: "corn, pepper, rice and salt", images: [
            { label: "corn", imagePath: "../images/5/6/54.webp" }, { label: "pepper", imagePath: "../images/8/3/40.webp" }, { label: "rice", imagePath: "images/common/rice.webp" }, { label: "salt", imagePath: "../images/8/3/35.webp" }
          ] },
          { id: "pistachio-cake-set", label: "flour, eggs, butter and pistachios", images: [
            { label: "flour", imagePath: "images/countable-uncountable/ex_flour.webp" }, { label: "eggs", imagePath: "images/countable-uncountable/ex_eggs.webp" }, { label: "butter", imagePath: "images/countable-uncountable/butter_tp_alot.webp" }, { label: "pistachios", imagePath: "images/common/pistachios.webp" }
          ] },
          { id: "meat-set", label: "meat, eggplant, onion and garlic", images: [
            { label: "meat", imagePath: "../images/8/3/34.webp" }, { label: "eggplant", imagePath: "images/common/eggplant.webp" }, { label: "onion", imagePath: "images/common/onion.webp" }, { label: "garlic", imagePath: "../images/8/3/56.webp" }
          ] },
          { id: "seafood-set", label: "seafood, rice, garlic and salt", images: [
            { label: "seafood", imagePath: "images/common/seafood.webp" }, { label: "rice", imagePath: "images/common/rice.webp" }, { label: "garlic", imagePath: "../images/8/3/56.webp" }, { label: "salt", imagePath: "../images/8/3/35.webp" }
          ] }
        ]
      }
    },
    {
      id: "recipe-cauliflower-bake",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "CAULIFLOWER BAKE",
        ingredients: ["cauliflower", "cheese", "cream", "garlic", "salt"],
        question: "What do you need to make a cauliflower bake?",
        answerId: "cheese",
        choices: [
          { id: "cream", label: "cream", imagePath: "images/common/cream.webp" },
          { id: "cheese", label: "cheese", imagePath: "images/common/cheese.webp" },
          { id: "butter", label: "butter", imagePath: "images/countable-uncountable/butter_tp_alot.webp" },
          { id: "eggplant", label: "eggplant", imagePath: "images/common/eggplant.webp" }
        ]
      }
    },
    {
      id: "recipe-tomato-pasta-sauce",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "TOMATO PASTA SAUCE",
        ingredients: ["tomatoes", "orzo", "onion", "garlic", "olive oil", "salt"],
        question: "Which picture shows an ingredient in this recipe?",
        answerId: "tomato",
        choices: [
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" },
          { id: "cabbage", label: "cabbage", imagePath: "images/common/cabbage.webp" },
          { id: "tomato", label: "tomato", imagePath: "images/common/tomato.webp" },
          { id: "pistachios", label: "pistachios", imagePath: "images/common/pistachios.webp" }
        ]
      }
    },
    {
      id: "recipe-corn-cabbage-salad-not-ingredient",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "CORN AND CABBAGE SALAD",
        ingredients: ["corn", "cabbage", "onion", "pepper", "salt"],
        question: "Which one isn't an ingredient in this recipe?",
        answerId: "grilled-fish",
        choices: [
          { id: "corn", label: "corn", imagePath: "../images/5/6/54.webp" },
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" },
          { id: "cabbage", label: "cabbage", imagePath: "images/common/cabbage.webp" },
          { id: "onion", label: "onion", imagePath: "images/common/onion.webp" }
        ]
      }
    },
    {
      id: "recipe-mushroom-orzo-not-ingredient",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "MUSHROOM ORZO",
        ingredients: ["orzo", "mushrooms", "onion", "garlic", "salt"],
        question: "Which one isn't an ingredient in this recipe?",
        answerId: "seafood",
        choices: [
          { id: "mushroom", label: "mushroom", imagePath: "images/countable-uncountable/somemushrooms.webp" },
          { id: "orzo", label: "orzo", imagePath: "images/common/orzo.webp" },
          { id: "seafood", label: "seafood", imagePath: "images/common/seafood.webp" },
          { id: "garlic", label: "garlic", imagePath: "../images/8/3/56.webp" }
        ]
      }
    },
    {
      id: "recipe-eggplant-meat-bake-not-ingredient",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "EGGPLANT AND MEAT BAKE",
        ingredients: ["eggplant", "meat", "onion", "garlic", "salt"],
        question: "Which one isn't an ingredient in this recipe?",
        answerId: "pistachios",
        choices: [
          { id: "eggplant", label: "eggplant", imagePath: "images/common/eggplant.webp" },
          { id: "meat", label: "meat", imagePath: "../images/8/3/34.webp" },
          { id: "pistachios", label: "pistachios", imagePath: "images/common/pistachios.webp" },
          { id: "garlic", label: "garlic", imagePath: "../images/8/3/56.webp" }
        ]
      }
    },
    {
      id: "recipe-grilled-fish-rice-not-ingredient",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "GRILLED FISH WITH RICE",
        ingredients: ["grilled fish", "rice", "garlic", "salt"],
        question: "Which one isn't an ingredient in this recipe?",
        answerId: "cauliflower",
        choices: [
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" },
          { id: "rice", label: "rice", imagePath: "images/common/rice.webp" },
          { id: "salt", label: "salt", imagePath: "../images/8/3/35.webp" },
          { id: "cauliflower", label: "cauliflower", imagePath: "images/common/cauliflower.webp" }
        ]
      }
    },
    {
      id: "recipe-pistachio-cake-not-ingredient",
      presenceSlide: true,
      recipeIngredientQuiz: {
        recipeName: "PISTACHIO CAKE",
        ingredients: ["flour", "eggs", "butter", "sugar", "pistachios"],
        question: "Which one isn't an ingredient in this recipe?",
        answerId: "grilled-fish",
        choices: [
          { id: "flour", label: "flour", imagePath: "images/countable-uncountable/ex_flour.webp" },
          { id: "eggs", label: "eggs", imagePath: "images/countable-uncountable/ex_eggs.webp" },
          { id: "butter", label: "butter", imagePath: "images/countable-uncountable/butter_tp_alot.webp" },
          { id: "grilled-fish", label: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" }
        ]
      }
    },
    {
      id: "recipe-question-language-guide",
      presenceSlide: true,
      recipeQuestionInfo: {
        title: "ASKING ABOUT INGREDIENTS",
        isFinalPage: false,
        items: [
          {
            explanation: "To ask about all the ingredients, say:",
            sentenceHtml: "What are the <u>ingredients</u> of pasta?"
          },
          {
            explanation: "To ask what food has inside, say:",
            sentenceHtml: "What does this soup <u>contain</u>?"
          },
          {
            explanation: "To ask what you need to make something, say:",
            sentenceHtml: "What do you <u>need</u> to make a cake?"
          }
        ]
      }
    },
    {
      id: "recipe-question-language-guide-continued",
      presenceSlide: true,
      recipeQuestionInfo: {
        title: "ASKING ABOUT INGREDIENTS",
        isFinalPage: false,
        items: [
          {
            explanation: "To ask if an ingredient is necessary, say:",
            sentenceHtml: "Do we <u>have to</u> use butter?"
          },
          {
            explanation: "To choose between two amounts, say:",
            sentenceHtml: "Do we use three <u>or</u> four eggs?"
          },
          {
            explanation: "When an ingredient is finished, say:",
            sentenceHtml: "We don't have any sugar <u>left</u>."
          }
        ]
      }
    },
    {
      id: "cooking-methods-split-image-word-match",
      presenceSlide: true,
      splitImageWordMatch: {
        title: "COOKING METHODS",
        items: [
          { id: "bake", label: "bake", imagePath: "../images/8/3/1.webp" },
          { id: "roast", label: "roast", imagePath: "../images/8/3/19.webp" },
          { id: "boil", label: "boil", imagePath: "../images/8/3/7.webp" },
          { id: "grill", label: "grill", imagePath: "../images/8/3/13.webp" },
          { id: "fry", label: "fry", imagePath: "../images/8/3/4.webp" },
          { id: "steam", label: "steam", imagePath: "images/common/steam.webp" }
        ]
      }
    },
    {
      id: "cooking-methods-dialogue-test",
      presenceSlide: true,
      testQuestion: {
        hidePromptLabel: true,
        randomizeQuestions: true,
        questions: [
          {
            lines: [
              { speaker: "Chloe", text: "Mum, can we make chicken and potatoes for dinner?" },
              { speaker: "Camille", text: "Of course, but you need to go to the market first because _____." }
            ],
            answer: "We don't have any chicken at home.",
            choices: ["Chicken is very popular.", "We don't have any chicken at home.", "I cook chicken every day.", "The potatoes are delicious."]
          },
          {
            lines: [
              { speaker: "Olivia", text: "_____ do you usually cook fish?" },
              { speaker: "Emma", text: "I usually fry it." }
            ],
            answer: "How",
            choices: ["Why", "How", "Where", "What time"]
          },
          {
            lines: [
              { speaker: "Hannah", text: "_____ vegetables are there in this pizza recipe?" },
              { speaker: "Chloe", text: "Two: tomato and mushroom." }
            ],
            answer: "How many",
            choices: ["How much", "How often", "How many", "What"]
          },
          {
            lines: [
              { speaker: "Mia", text: "_____ is in this cupcake?" },
              { speaker: "Ava", text: "Eggs, flour, baking powder and sugar." }
            ],
            answer: "What",
            choices: ["When", "What", "Why", "How"]
          },
          {
            lines: [
              { speaker: "Chloe", text: "_____ flour do we need for this cake?" },
              { speaker: "Emma", text: "We need two cups." }
            ],
            answer: "How much",
            choices: ["How many", "Where", "How much", "When"]
          },
          {
            lines: [
              { speaker: "Ella", text: "_____ do we need a baking tray?" },
              { speaker: "Hannah", text: "To bake the cookies in the oven." }
            ],
            answer: "Why",
            choices: ["What", "When", "Why", "Where"]
          },
          {
            lines: [
              { speaker: "Victoria", text: "_____ do we cook rice for this recipe?" },
              { speaker: "Zoe", text: "We boil it in water." }
            ],
            answer: "How",
            choices: ["Where", "How", "Why", "When"]
          },
          {
            lines: [
              { speaker: "Emma", text: "_____ do we need to make pancakes?" },
              { speaker: "Hannah", text: "Eggs, milk, flour and butter." }
            ],
            answer: "What",
            choices: ["Why", "How many", "What", "When"]
          },
          {
            lines: [
              { speaker: "Zoe", text: "_____ tool do we use to drain pasta?" },
              { speaker: "Olivia", text: "We use a strainer." }
            ],
            answer: "Which",
            choices: ["How", "Which", "Where", "When"]
          },
          {
            lines: [
              { speaker: "Ava", text: "_____ do we need a mixing bowl?" },
              { speaker: "Mia", text: "To mix all the ingredients together." }
            ],
            answer: "Why",
            choices: ["What time", "Where", "Why", "How many"]
          },
          {
            lines: [
              { speaker: "Ava", text: "_____ do we need to make vegetable soup?" },
              { speaker: "Emma", text: "We need onions, potatoes, carrots and salt." }
            ],
            answer: "What",
            choices: ["How much", "What", "When", "Why"]
          },
          {
            lines: [
              { speaker: "Mia", text: "_____ cooking method do we use for corn?" },
              { speaker: "Hannah", text: "We boil it in water." }
            ],
            answer: "Which",
            choices: ["When", "How", "Which", "Where"]
          },
          {
            lines: [
              { speaker: "Chloe", text: "_____ do we cook vegetables without oil?" },
              { speaker: "Camille", text: "We steam them." }
            ],
            answer: "How",
            choices: ["How", "What", "Why", "Where"]
          },
          {
            lines: [
              { speaker: "Olivia", text: "_____ do we use to mix the cake ingredients?" },
              { speaker: "Emma", text: "We use a mixing bowl." }
            ],
            answer: "What",
            choices: ["When", "How many", "What", "Why"]
          },
          {
            lines: [
              { speaker: "Zoe", text: "_____ salt do we need for the soup?" },
              { speaker: "Mia", text: "We need one teaspoon." }
            ],
            answer: "How much",
            choices: ["How many", "Where", "How much", "What time"]
          },
          {
            lines: [
              { speaker: "Mia", text: "Can you help me put these hot chocolate steps in the correct order?" },
              { speaker: "Giulia", text: "Sure! Here are the steps:\nI. Then, stir the mixture for two minutes.\nII. First, pour two cups of milk into a pot.\nIII. Next, add cocoa powder and sugar.\nIV. Finally, pour the hot chocolate into a mug and serve it warm." }
            ],
            answer: "II - III - I - IV",
            choices: ["III - II - IV - I", "II - III - I - IV", "I - IV - II - III", "IV - I - III - II"]
          }
        ]
      }
    },
    {
      id: "process-expression-reveal",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "process-expression-reveal",
        heading: "WE USE THESE EXPRESSIONS",
        footer: "To describe simple processes.",
        items: [
          { expression: "FIRST,", meaning: "Öncelikle," },
          { expression: "SECOND,", meaning: "İkinci olarak," },
          { expression: "NEXT,", meaning: "Ardından," },
          { expression: "THEN,", meaning: "Sonra," },
          { expression: "AFTER THAT,", meaning: "Ondan sonra," },
          { expression: "FINALLY,", meaning: "Son olarak," }
        ]
      }
    },
    {
      id: "process-step-questions-reveal",
      presenceSlide: true,
      sequentialBoxes: {
        interaction: "process-expression-reveal",
        heading: "BASİT BİR SÜRECİ ANLATIRKEN;",
        splitAt: 3,
        items: [
          { expression: "FIRST STEP", meaning: "İlk adım" },
          { expression: "SECOND STEP", meaning: "İkinci adım" },
          { expression: "LAST STEP", meaning: "Son adım" },
          { questionParts: [{ text: "What is the " }, { text: "last step", highlight: true }, { text: " of the recipe?" }] },
          { questionParts: [{ text: "What is the step " }, { text: "after", highlight: true }, { text: " ...?" }] },
          { questionParts: [{ text: "Which picture shows the step " }, { text: "before", highlight: true }, { text: " ...?" }] }
        ]
      }
    },
    {
      id: "potato-chips-scrambled-video",
      presenceSlide: true,
      title: "POTATO CHIPS",
      compactTitle: true,
      imagePath: "../images/8/3/4.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_cooking_potato_chips.mp4",
        scrambledDialogue: true,
        autoOpen: true
      },
      visualBrief: "Watch how to make potato chips.",
      listClass: "process-dialogue-list",
      items: [
        {
          parts: [{ text: "First, slice three potatoes and add some salt on them." }]
        },
        {
          parts: [{ text: "Then, heat some oil in a pan and put the sliced potatoes in it." }]
        },
        {
          parts: [{ text: "After that, fry the potatoes for twelve to thirteen minutes." }]
        },
        {
          parts: [{ text: "Finally, take the potatoes out of the pan and serve." }]
        }
      ]
    },
    {
      id: "vegetable-pizza-scrambled-steps",
      presenceSlide: true,
      title: "VEGETABLE PIZZA",
      compactTitle: true,
      imagePath: "images/expressing-preferences/pizza.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_cooking_pizza_emma.mp4",
        scrambledDialogue: true,
        autoOpen: true
      },
      visualBrief: "Watch how to make vegetable pizza.",
      listClass: "process-dialogue-list",
      items: [
        {
          parts: [{ text: "First, chop some tomatoes, pepper, onion and mushroom." }]
        },
        {
          parts: [{ text: "Then, fry all the vegetables in a pan for 15 minutes." }]
        },
        {
          parts: [{ text: "After that, put the fried vegetables onto the pizza bread and add some cheese on it." }]
        },
        {
          parts: [{ text: "Next, bake the pizza for 10 minutes and take it out." }]
        },
        {
          parts: [{ text: "Finally, serve it hot." }]
        }
      ]
    },
    {
      id: "fried-eggs-scrambled-steps",
      presenceSlide: true,
      title: "FRIED EGGS",
      compactTitle: true,
      imagePath: "images/common/fried_eggs.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_cooking_fried_eggs_hannah.mp4",
        scrambledDialogue: true,
        autoOpen: true
      },
      visualBrief: "Watch how to cook fried eggs.",
      listClass: "process-dialogue-list",
      items: [
        {
          parts: [{ text: "First, heat some oil in a pan." }]
        },
        {
          parts: [{ text: "Then, crack two eggs." }]
        },
        {
          parts: [{ text: "After that, pour the eggs directly into the pan." }]
        },
        {
          parts: [{ text: "Next, fry the eggs for five minutes." }]
        },
        {
          parts: [{ text: "Finally, serve it hot and enjoy it." }]
        }
      ]
    },
    {
      id: "menemen-scrambled-steps",
      presenceSlide: true,
      title: "MENEMEN",
      compactTitle: true,
      imagePath: "images/common/menemen.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Menemen.",
      listClass: "process-dialogue-list",
      scrambledDialogue: true,
      items: [
        {
          parts: [{ text: "First, chop some pepper, onion and tomatoes." }]
        },
        {
          parts: [{ text: "Next, heat some oil in a pan and add all the vegetables." }]
        },
        {
          parts: [{ text: "Then, fry the vegetables for 10 minutes." }]
        },
        {
          parts: [{ text: "After that, crack two eggs and pour them over the fried vegetables." }]
        },
        {
          parts: [{ text: "Finally, fry them together for 5 minutes and serve it hot." }]
        }
      ]
    },
    {
      id: "cake-scrambled-steps",
      presenceSlide: true,
      title: "CAKE",
      compactTitle: true,
      imagePath: "images/common/cake.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Cake.",
      listClass: "process-dialogue-list",
      scrambledDialogue: true,
      items: [
        {
          parts: [{ text: "First, put some sugar, flour, baking powder and cocoa into a bowl, and mix them." }]
        },
        {
          parts: [{ text: "Next, add some yoghurt, oil and eggs to the mixture, and stir well." }]
        },
        {
          parts: [{ text: "Then, bake the mixture at 180°C for 40 minutes." }]
        },
        {
          parts: [{ text: "After that, let the cake cool down for 5 minutes." }]
        },
        {
          parts: [{ text: "Finally, serve it warm." }]
        }
      ]
    },
    {
      id: "cupcakes-scrambled-steps",
      presenceSlide: true,
      title: "CUPCAKES",
      compactTitle: true,
      imagePath: "images/expressing-preferences/cupcake.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_cooking_cupcakes_chloe.mp4",
        scrambledDialogue: true,
        autoOpen: true
      },
      visualBrief: "Watch how to make cupcakes.",
      listClass: "process-dialogue-list",
      items: [
        {
          parts: [{ text: "First, heat the oven to 180°C." }]
        },
        {
          parts: [{ text: "Then, mix two eggs with a cup of sugar." }]
        },
        {
          parts: [{ text: "After that, add some milk, flour, oil and baking powder." }]
        },
        {
          parts: [{ text: "Next, mix the ingredients and pour the mixture into cupcake papers." }]
        },
        {
          parts: [{ text: "Finally, bake the cupcakes for 30 minutes." }]
        }
      ]
    },
    {
      id: "ayran-scrambled-video",
      presenceSlide: true,
      title: "AYRAN",
      compactTitle: true,
      imagePath: "images/common/ayran.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_cooking_ayran_olivia.mp4",
        scrambledDialogue: true,
        autoOpen: true
      },
      visualBrief: "Watch how to make ayran.",
      listClass: "process-dialogue-list",
      items: [
        {
          parts: [{ text: "First, put the yoghurt into a bowl." }]
        },
        {
          parts: [{ text: "Then, add salt to it." }]
        },
        {
          parts: [{ text: "After that, pour water into the mixture." }]
        },
        {
          parts: [{ text: "Next, stir the mixture." }]
        },
        {
          parts: [{ text: "Finally, pour the mixture into a glass and serve it cold." }]
        }
      ]
    },
    {
      id: "recipe-language-reveal",
      presenceSlide: true,
      noVisual: true,
      sequentialBoxes: {
        interaction: "recipe-language-reveal",
        title: "HOW TO ASK ABOUT A RECIPE",
        groups: [
          {
            heading: "",
            items: [
              { parts: [{ text: "Do you know " }, { text: "how to cook", highlight: true }, { text: " ...?" }] },
              { parts: [{ text: "Can you tell me the " }, { text: "process", highlight: true }, { text: " of cooking ...?" }] },
              { parts: [{ text: "What is the " }, { text: "recipe", highlight: true }, { text: " for ...?" }] }
            ]
          },
          {
            heading: "IF WE DON'T KNOW HOW TO COOK:",
            items: [
              { parts: [{ text: "I don't know " }, { text: "how to cook it", highlight: true }, { text: "." }] }
            ]
          },
          {
            heading: "TO COMMENT ON A RECIPE'S DIFFICULTY:",
            items: [
              { parts: [{ text: "It is " }, { text: "difficult", highlight: true }, { text: " to cook." }] },
              { parts: [{ text: "It is " }, { text: "easy", highlight: true }, { text: " to cook." }] }
            ]
          }
        ]
      }
    },
    {
      id: "food-comments-reveal",
      presenceSlide: true,
      noVisual: true,
      sequentialBoxes: {
        interaction: "recipe-language-reveal",
        title: "COMMENTING ON FOOD",
        groups: [
          {
            heading: "",
            items: [
              { parts: [{ text: "It looks " }, { text: "delicious", highlight: true }, { text: "!" }] },
              { parts: [{ text: "It smells " }, { text: "great", highlight: true }, { text: "!" }] },
              { parts: [{ text: "You should definitely " }, { text: "try it", highlight: true }, { text: "." }] }
            ]
          }
        ]
      }
    }
  ]
};

const namingCommonObjectsRecipeOrder = [
  "recipe-vegetable-soup",
  "recipe-mushroom-orzo-not-ingredient",
  "recipe-mushroom-orzo",
  "recipe-grilled-fish-rice-not-ingredient",
  "recipe-pepper-chicken",
  "recipe-corn-cabbage-salad-not-ingredient",
  "recipe-grilled-fish-rice",
  "recipe-eggplant-meat-bake-not-ingredient",
  "recipe-eggplant-meat-bake",
  "recipe-pistachio-cake-not-ingredient",
  "recipe-seafood-rice",
  "recipe-corn-cabbage-salad",
  "recipe-pistachio-cake",
  "recipe-cauliflower-bake",
  "recipe-tomato-pasta-sauce"
];

namingCommonObjectsGrade8Function.sentences.sort((left, right) => {
  const orderOf = (sentence) => {
    if (sentence.id === "describing-simple-processes-index") return Number.MIN_SAFE_INTEGER;
    if (sentence.id === "food-comments-reveal") return Number.MAX_SAFE_INTEGER;
    if (sentence.id === "recipe-language-reveal") return Number.MAX_SAFE_INTEGER - 1;
    if (sentence.id === "cake-scrambled-steps") return Number.MAX_SAFE_INTEGER - 2;
    if (sentence.id === "menemen-scrambled-steps") return Number.MAX_SAFE_INTEGER - 3;
    if (sentence.id === "ayran-scrambled-video") return Number.MAX_SAFE_INTEGER - 4;
    if (sentence.id === "cupcakes-scrambled-steps") return Number.MAX_SAFE_INTEGER - 5;
    if (sentence.id === "fried-eggs-scrambled-steps") return Number.MAX_SAFE_INTEGER - 7;
    if (sentence.id === "vegetable-pizza-scrambled-steps") return Number.MAX_SAFE_INTEGER - 6;
    if (sentence.id === "potato-chips-scrambled-video") return Number.MAX_SAFE_INTEGER - 8;
    if (sentence.id === "process-step-questions-reveal") return Number.MAX_SAFE_INTEGER - 9;
    if (sentence.id === "process-expression-reveal") return Number.MAX_SAFE_INTEGER - 10;
    if (sentence.id === "cooking-methods-dialogue-test") return Number.MAX_SAFE_INTEGER - 11;
    if (sentence.id === "cooking-methods-split-image-word-match") return Number.MAX_SAFE_INTEGER - 12;
    if (sentence.recipeQuestionInfo) return Number.MAX_SAFE_INTEGER - 13;
    const order = namingCommonObjectsRecipeOrder.indexOf(sentence.id);
    return order < 0 ? -1 : order;
  };
  return orderOf(left) - orderOf(right);
});

window.functionModules.push(namingCommonObjectsGrade8Function);
