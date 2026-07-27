const countableUncountableFunction = {
  id: "countable-uncountable",
  grade: 5,
  unit: 6,
  title: "Countable and Uncountable Nouns",
  description: "",
  exercises: ["ride-with-hannah-countables", "quantity-choice", "quantity-snap", "countable-uncountable-sort"],
  sentences: [
    {
      id: "countable-uncountable-hub",
      presenceSlide: true,
      kicker: "NOUNS",
      title: "Choose a category.",
      compactTitle: true,
      imagePath: "images/countable-uncountable/countable_single.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Choose an item to show its visual.",
      categoryHub: {
        countableHoverImage: "images/countable-uncountable/countable_single.webp",
        uncountableHoverImage: "images/countable-uncountable/uncountable_single.webp",
        countable: [
          { label: "COOKIE", imagePath: "images/countable-uncountable/cookie.webp", visualBrief: "A cookie.", caption: "a cookie" },
          { label: "CROISSANT", imagePath: "images/countable-uncountable/croissant.webp", visualBrief: "A croissant.", caption: "a croissant" },
          { label: "LEMON", imagePath: "images/countable-uncountable/lemon.webp", visualBrief: "A lemon.", caption: "a lemon" },
          { label: "MUSHROOM", imagePath: "images/countable-uncountable/mushroom.webp", visualBrief: "A mushroom.", caption: "a mushroom" },
          { label: "PANCAKE", imagePath: "images/countable-uncountable/pancake.webp", visualBrief: "A pancake.", caption: "a pancake" }
        ],
        uncountable: [
          { label: "WATER", imagePath: "images/countable-uncountable/water.webp", visualBrief: "Water.", caption: "some water" },
          { label: "MILK", imagePath: "images/countable-uncountable/milk.webp", visualBrief: "Milk.", caption: "some milk" },
          { label: "SALT", imagePath: "images/countable-uncountable/salt.webp", visualBrief: "Salt.", caption: "some salt" },
          { label: "SUGAR", imagePath: "images/countable-uncountable/sugar.webp", visualBrief: "Sugar.", caption: "some sugar" },
          { label: "FLOUR", imagePath: "images/countable-uncountable/flour.webp", visualBrief: "Flour.", caption: "some flour" }
        ]
      }
    },
    {
      id: "some-countable-uncountable-hub",
      presenceSlide: true,
      kicker: "SOME",
      titleParts: [
        { text: "We use " },
        { text: "SOME", className: "presence-yellow" },
        { text: " with countable and uncountable nouns." }
      ],
      compactTitle: true,
      imagePath: "images/countable-uncountable/some_placeholder.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Choose an item to see SOME with nouns.",
      categoryHub: {
        countable: [
          { label: "COOKIES", imagePath: "images/countable-uncountable/somecookies.webp", visualBrief: "Cookies.", caption: "There <are> some cookies." },
          { label: "CROISSANTS", imagePath: "images/countable-uncountable/somecroissants.webp", visualBrief: "Croissants.", caption: "There <are> some croissants." },
          { label: "LEMONS", imagePath: "images/countable-uncountable/somelemons.webp", visualBrief: "Lemons.", caption: "There <are> some lemons." },
          { label: "MUSHROOMS", imagePath: "images/countable-uncountable/somemushrooms.webp", visualBrief: "Mushrooms.", caption: "There <are> some mushrooms." },
          { label: "PANCAKES", imagePath: "images/countable-uncountable/somepancakes.webp", visualBrief: "Pancakes.", caption: "There <are> some pancakes." }
        ],
        uncountable: [
          { label: "WATER", imagePath: "images/countable-uncountable/somewater.webp", visualBrief: "Water.", caption: "There <is> some water." },
          { label: "MILK", imagePath: "images/countable-uncountable/somemilk.webp", visualBrief: "Milk.", caption: "There <is> some milk." },
          { label: "SALT", imagePath: "images/countable-uncountable/salt.webp", visualBrief: "Salt.", caption: "There <is> some salt." },
          { label: "SUGAR", imagePath: "images/countable-uncountable/sugar.webp", visualBrief: "Sugar.", caption: "There <is> some sugar." },
          { label: "FLOUR", imagePath: "images/countable-uncountable/flour.webp", visualBrief: "Flour.", caption: "There <is> some flour." }
        ]
      }
    },
    {
      id: "any-negative-countable-uncountable-hub",
      presenceSlide: true,
      kicker: "ANY",
      titleParts: [
        { text: "We use " },
        { text: "ANY", className: "presence-yellow" },
        { text: " in negative sentences." }
      ],
      compactTitle: true,
      imagePath: "images/countable-uncountable/ayny_placeholder.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Choose an item to see ANY in negative sentences.",
      categoryHub: {
        countable: [
          { label: "COOKIE", imagePath: "images/countable-uncountable/anycookie.webp", visualBrief: "No cookie.", caption: { question: "<Are there> <any> cookies?", answer: "No, there <aren't> <any> cookies." } },
          { label: "CROISSANT", imagePath: "images/countable-uncountable/anycroissant.webp", visualBrief: "No croissant.", caption: "There <aren't> any croissants." },
          { label: "LEMON", imagePath: "images/countable-uncountable/anylemon.webp", visualBrief: "No lemon.", caption: { question: "<Are there> <any> lemons?", answer: "No, there <aren't> <any> lemons." } },
          { label: "MUSHROOM", imagePath: "images/countable-uncountable/anymushroom.webp", visualBrief: "No mushroom.", caption: "There <aren't> any mushrooms." },
          { label: "PANCAKES", imagePath: "images/countable-uncountable/anypancakes.webp", visualBrief: "No pancakes.", caption: "There <aren't> any pancakes." }
        ],
        uncountable: [
          { label: "WATER", imagePath: "images/countable-uncountable/anywater.webp", visualBrief: "No water.", caption: { question: "<Is there> <any> water?", answer: "No, there <isn't> <any> water." } },
          { label: "MILK", imagePath: "images/countable-uncountable/anymilk.webp", visualBrief: "No milk.", caption: { question: "<Is there> <any> milk?", answer: "No, there <isn't> <any> milk." } },
          { label: "SALT", imagePath: "images/countable-uncountable/anysalt.webp", visualBrief: "No salt.", caption: "There <isn't> any salt." },
          { label: "SUGAR", imagePath: "images/countable-uncountable/anysugar.webp", visualBrief: "No sugar.", caption: "There <isn't> any sugar." },
          { label: "FLOUR", imagePath: "images/countable-uncountable/anyflour.webp", visualBrief: "No flour.", caption: "There <isn't> any flour." }
        ]
      }
    },
    {
      id: "some-any-choice-practice",
      presenceSlide: true,
      imagePath: "images/countable-uncountable/somelemons.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Lemons.",
      kicker: "CHOOSE CORRECT ONE",
      titleParts: [
        { text: "Choose " },
        { text: "SOME", className: "presence-yellow" },
        { text: " or " },
        { text: "ANY", className: "presence-yellow" },
        { text: "." }
      ],
      compactTitle: true,
      replaceCurrentItem: true,
      listClass: "some-any-single-choice-list",
      items: [
        { imagePathOnShow: "images/countable-uncountable/somelemons.webp", parts: [{ text: "There are ____ lemons." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/somemilk.webp", parts: [{ text: "There is ____ milk." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/anycookie.webp", parts: [{ text: "There aren't ____ cookies." }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/anymilk.webp", parts: [{ text: "There isn't ____ milk." }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/somemushrooms.webp", parts: [{ text: "Are there ____ mushrooms?" }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/somewater.webp", parts: [{ text: "Is there ____ water?" }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/salt.webp", parts: [{ text: "There is ____ salt." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/somecroissants.webp", parts: [{ text: "There are ____ croissants." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/anysugar.webp", parts: [{ text: "There isn't ____ sugar." }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/somepancakes.webp", parts: [{ text: "There are ____ pancakes." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/flour.webp", parts: [{ text: "Is there ____ flour?" }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/somewater.webp", parts: [{ text: "There is ____ water." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/anycroissant.webp", parts: [{ text: "There aren't ____ croissants." }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/somecookies.webp", parts: [{ text: "Are there ____ cookies?" }], choices: ["some", "any"], answer: "any" },
        { imagePathOnShow: "images/countable-uncountable/flour.webp", parts: [{ text: "There is ____ flour." }], choices: ["some", "any"], answer: "some" },
        { imagePathOnShow: "images/countable-uncountable/somemushrooms.webp", parts: [{ text: "There are ____ mushrooms." }], choices: ["some", "any"], answer: "some" }
      ]
    },
    {
      id: "how-many-how-much-hub",
      presenceSlide: true,
      kicker: "QUESTIONS",
      titleParts: [
        { text: "Ask with " },
        { text: "HOW MANY", className: "presence-yellow" },
        { text: " and " },
        { text: "HOW MUCH", className: "presence-yellow" },
        { text: "." }
      ],
      compactTitle: true,
      imagePath: "images/countable-uncountable/howmany-howmuch_placeholder.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Choose an item to ask a quantity question.",
      categoryHub: {
        countable: [
          {
            label: "LEMONS",
            imagePath: "images/countable-uncountable/somelemons.webp",
            visualBrief: "Three lemons.",
            caption: { question: "<How many> lemons <are there>?", answer: "There <are> three lemons." }
          },
          {
            label: "COOKIES",
            imagePath: "images/countable-uncountable/somecookies.webp",
            visualBrief: "Some cookies.",
            caption: { question: "<How many> cookies <are there>?", answer: "There <are> five cookies." }
          },
          {
            label: "CROISSANTS",
            imagePath: "images/countable-uncountable/somecroissants.webp",
            visualBrief: "Some croissants.",
            caption: { question: "<How many> croissants <are there>?", answer: "There <are> two croissants." }
          },
          {
            label: "MUSHROOMS",
            imagePath: "images/countable-uncountable/somemushrooms.webp",
            visualBrief: "Some mushrooms.",
            caption: { question: "<How many> mushrooms <are there>?", answer: "There <are> four mushrooms." }
          },
          {
            label: "PANCAKES",
            imagePath: "images/countable-uncountable/somepancakes.webp",
            visualBrief: "Some pancakes.",
            caption: { question: "<How many> pancakes <are there>?", answer: "There <are> four pancakes." }
          }
        ],
        uncountable: [
          {
            label: "MILK",
            imagePath: "images/countable-uncountable/somemilk.webp",
            visualBrief: "Some milk.",
            caption: { question: "<How much> milk <is there>?", answer: "There <is> <some> milk." }
          },
          {
            label: "WATER",
            imagePath: "images/countable-uncountable/somewater.webp",
            visualBrief: "Some water.",
            caption: { question: "<How much> water <is there>?", answer: "There <is> <some> water." }
          },
          {
            label: "SALT",
            imagePath: "images/countable-uncountable/salt.webp",
            visualBrief: "Some salt.",
            caption: { question: "<How much> salt <is there>?", answer: "There <is> <some> salt." }
          },
          {
            label: "SUGAR",
            imagePath: "images/countable-uncountable/sugar.webp",
            visualBrief: "Some sugar.",
            caption: { question: "<How much> sugar <is there>?", answer: "There <is> <some> sugar." }
          },
          {
            label: "FLOUR",
            imagePath: "images/countable-uncountable/flour.webp",
            visualBrief: "Some flour.",
            caption: { question: "<How much> flour <is there>?", answer: "There <is> <some> flour." }
          }
        ]
      }
    },
    {
      id: "emma-bakes-pie-examples",
      presenceSlide: true,
      kicker: "APPLE PIE",
      title: "Emma bakes a pie.",
      compactTitle: true,
      imagePath: "images/countable-uncountable/emma-bakes-pie.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Emma is baking an apple pie.",
      pieDialogue: {
        dialogues: [
          {
            question: "<How many> apples does Emma need to make an apple pie?",
            answer: "She needs four apples."
          },
          {
            question: "<Is there> <any> flour?",
            answer: "Yes, there is."
          },
          {
            question: "<Is there> <any> salt?",
            answer: "No, there isn't."
          }
        ],
        choices: [
          {
            segments: [
              { options: ["How many", "How much"], answer: "How many" },
              { text: " apples are there?" }
            ]
          },
          {
            segments: [
              { text: "There is " },
              { options: ["some", "any"], answer: "some" },
              { text: " flour." }
            ]
          },
          {
            segments: [
              { text: "There isn't " },
              { options: ["some", "any"], answer: "any" },
              { text: " milk." }
            ]
          },
          {
            segments: [
              { options: ["How many", "How much"], answer: "How much" },
              { text: " sugar does she need?" }
            ]
          },
          {
            segments: [
              { text: "She needs " },
              { options: ["some", "any"], answer: "some" },
              { text: " baking powder." }
            ]
          }
        ]
      }
    },
    {
      id: "how-many-how-much-fill-blanks",
      presenceSlide: true,
      kicker: "FILL THE BLANKS",
      title: "Fill the blanks with HOW MANY or HOW MUCH.",
      compactTitle: true,
      imagePath: "images/countable-uncountable/ex_eggs.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Eggs.",
      listClass: "inline-choice-list",
      replaceCurrentItem: true,
      items: [
        {
          kind: "inline-choice",
          segments: [
            { options: ["How many", "How much"], answer: "How many" },
            { text: " eggs do you need?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/countable-uncountable/ex_flour.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " flour do you need for the cake?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/countable-uncountable/ex_milk.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " milk is there in the fridge?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "../images/0/12/16.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How many" },
            { text: " tomatoes do you need for the salad?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "../images/8/3/31.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " flour is there in this home-made bread?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/countable-uncountable/ex_sugar.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " sugar does the chef need?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "../images/0/12/2.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " butter do you need for the rice?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/countable-uncountable/somewater.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " water does she need to cook pasta?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/countable-uncountable/somelemons.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How many" },
            { text: " lemons do you need for the lemonade?" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "../images/5/6/7.webp",
          segments: [
            { options: ["How many", "How much"], answer: "How much" },
            { text: " oil do you need to cook the meal?" }
          ]
        }
      ]
    },
    {
      id: "countable-uncountable-quantities",
      presenceSlide: true,
      kicker: "QUANTITIES",
      titleParts: [
        { text: "Use " },
        { text: "A FEW / MANY", className: "presence-yellow" },
        { text: " and " },
        { text: "A LITTLE / MUCH", className: "presence-yellow" },
        { text: "." }
      ],
      imagePath: "images/countable-uncountable/lemon_tp.webp",
      imageClass: "count-noun-placeholder",
      visualBrief: "Lemon quantity.",
      categoryHub: {
        countableHoverImage: "images/countable-uncountable/lemon_tp.webp",
        countable: [
          {
            label: "A FEW",
            repeatImagePath: "images/countable-uncountable/lemon_tp.webp",
            repeatCount: 2,
            visualBrief: "A few lemons.",
            caption: "<a few> lemons"
          },
          {
            label: "SOME",
            repeatImagePath: "images/countable-uncountable/lemon_tp.webp",
            repeatCount: 3,
            visualBrief: "Some lemons.",
            caption: "<some> lemons"
          },
          {
            label: "MANY",
            repeatImagePath: "images/countable-uncountable/lemon_tp.webp",
            repeatCount: 5,
            visualBrief: "Many lemons.",
            caption: "<many> lemons"
          },
          {
            label: "A LOT",
            repeatImagePath: "images/countable-uncountable/lemon_tp.webp",
            repeatCount: 10,
            visualBrief: "A lot of lemons.",
            caption: "<a lot of> lemons"
          }
        ],
        uncountable: [
          {
            label: "A LITTLE",
            imagePath: "images/countable-uncountable/milk_20_percent.webp",
            visualBrief: "A little milk.",
            caption: "<a little> milk"
          },
          {
            label: "SOME",
            imagePath: "images/countable-uncountable/milk_40_percent.webp",
            visualBrief: "Some milk.",
            caption: "<some> milk"
          },
          {
            label: "MUCH",
            imagePath: "images/countable-uncountable/milk_80_percent.webp",
            visualBrief: "Much milk.",
            caption: "<much> milk"
          },
          {
            label: "A LOT OF",
            imagePath: "images/countable-uncountable/3_bottle_milk.webp",
            visualBrief: "A lot of milk.",
            caption: "<a lot of> milk"
          }
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(countableUncountableFunction);
