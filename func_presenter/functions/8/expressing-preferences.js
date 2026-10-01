const expressingPreferencesGrade8Function = {
  id: "expressing-preferences",
  grade: 8,
  unit: 2,
  title: "Expressing Preferences",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "amusement-park-preferences",
      preferenceComparison: {
        scenePath: "images/expressing-preferences/amusement_park.webp",
        options: [
          { label: "ROLLER COASTER", imagePath: "images/expressing-preferences/roller_coaster.webp", tone: "blue" },
          { label: "BUMPER CARS", imagePath: "images/expressing-preferences/bumper_car.webp", tone: "amber" }
        ],
        expressions: ["PREFER", "WOULD RATHER"]
      }
    },
    {
      id: "prefer-roller-coaster-to-bumper-car",
      preferenceComparison: {
        layout: "sentence",
        scenePath: "images/expressing-preferences/amusement_park.webp",
        options: [
          { label: "ROLLER COASTER", imagePath: "images/expressing-preferences/roller_coaster.webp", tone: "blue" },
          { label: "BUMPER CAR", imagePath: "images/expressing-preferences/bumper_car.webp", tone: "amber" }
        ],
        sentenceTiles: [
          { text: "I PREFER", tone: "intro" },
          { text: "ROLLER COASTER", tone: "choice", result: "correct" },
          { text: "TO", tone: "connector" },
          { text: "BUMPER CAR", tone: "other", result: "wrong" }
        ]
      }
    },
    {
      id: "prefer-pc-to-playstation",
      preferenceComparison: {
        layout: "sentence",
        scenePath: "images/expressing-preferences/pc_vs_ps.webp",
        options: [
          { label: "PC", imagePath: "images/expressing-preferences/pc.webp", tone: "blue" },
          { label: "PLAYSTATION", imagePath: "images/expressing-preferences/playstation.webp", tone: "amber" }
        ],
        sentenceTiles: [
          { text: "I PREFER", tone: "intro" },
          { text: "PC", tone: "choice", result: "correct" },
          { text: "TO", tone: "connector" },
          { text: "PLAYSTATION", tone: "other", result: "wrong" }
        ]
      }
    },
    {
      id: "prefer-rock-music-to-rap-music",
      preferenceComparison: {
        layout: "sentence",
        scenePath: "images/expressing-preferences/concert.webp",
        options: [
          { label: "ROCK MUSIC", imagePath: "images/expressing-preferences/rock.webp", tone: "blue" },
          { label: "RAP MUSIC", imagePath: "images/expressing-preferences/rap.webp", tone: "amber" }
        ],
        sentenceTiles: [
          { text: "SHE PREFERS", tone: "intro" },
          { text: "ROCK MUSIC", tone: "choice", result: "correct" },
          { text: "TO", tone: "connector" },
          { text: "RAP MUSIC", tone: "other", result: "wrong" }
        ]
      }
    },
    {
      id: "prefer-reading-to-watching-tv",
      preferenceComparison: {
        layout: "double-sentence",
        scenePath: "images/expressing-preferences/mia_read_book.webp",
        sentenceRows: [
          [
            { text: "I PREFER", tone: "intro" },
            { text: "READING A BOOK", tone: "choice", result: "correct" },
            { text: "TO", tone: "connector" },
            { text: "WATCHING TV", tone: "other", result: "wrong" }
          ],
          [
            { text: "I WOULD RATHER", tone: "intro" },
            { text: "READ A BOOK", tone: "choice" },
            { text: "THAN", tone: "connector" },
            { text: "WATCH TV", tone: "other" }
          ]
        ]
      }
    },
    {
      id: "question-chips-or-onion-rings",
      preferenceComparison: {
        layout: "question",
        scenePath: "images/expressing-preferences/mia_zoe.webp",
        question: "Do you prefer Chips or Onion Rings?",
        options: [
          { label: "CHIPS", imagePath: "images/expressing-preferences/chips.webp" },
          { label: "ONION RINGS", imagePath: "images/expressing-preferences/onion_rings.webp" }
        ]
      }
    },
    {
      id: "chips-and-onion-rings-dialogue",
      preferenceComparison: {
        layout: "dialogue",
        scenePath: "images/expressing-preferences/mia_zoe.webp",
        dialogues: [
          {
            name: "MIA",
            portraitPath: "../olivias_movie_memories/assets/portraits/mia.webp",
            text: "I prefer chips, please"
          },
          {
            name: "ZOE",
            portraitPath: "../olivias_movie_memories/assets/portraits/zoe.webp",
            text: "I would rather have onion rings, please"
          }
        ]
      }
    },
    {
      id: "question-basketball-or-football",
      preferenceComparison: {
        layout: "question",
        scenePath: "images/expressing-preferences/coach.webp",
        question: "Which one do you prefer? Basketball or Football?",
        options: [
          { label: "BASKETBALL", imagePath: "images/expressing-preferences/basketball.webp" },
          { label: "FOOTBALL", imagePath: "images/expressing-preferences/football.webp" }
        ]
      }
    },
    {
      id: "basketball-and-football-dialogue",
      preferenceComparison: {
        layout: "dialogue",
        scenePath: "images/expressing-preferences/coach.webp",
        dialogues: [
          {
            name: "LUCAS",
            portraitPath: "../olivias_movie_memories/assets/portraits/lucas.webp",
            text: "I prefer football to basketball."
          },
          {
            name: "DANIEL",
            portraitPath: "../olivias_movie_memories/assets/portraits/daniel.webp",
            text: "I would rather play basketball than football."
          }
        ]
      }
    },
    {
      id: "student-question-car-or-motorbike",
      noVisual: true,
      preferenceComparison: {
        layout: "student-question",
        question: "Which one do you prefer?",
        options: [
          { label: "DRIVE A CAR", imagePath: "images/expressing-preferences/sports_car.webp", preferForm: "driving a car", ratherForm: "drive a car" },
          { label: "RIDE A MOTORBIKE", imagePath: "images/expressing-preferences/motorbike.webp", preferForm: "riding a motorbike", ratherForm: "ride a motorbike" }
        ],
        answers: [
          "I prefer {preferredGerund} to {otherGerund}.",
          "I would rather {preferredBase} than {otherBase}."
        ]
      }
    },
    {
      id: "student-question-pizza-or-spaghetti",
      noVisual: true,
      preferenceComparison: {
        layout: "student-question",
        question: "Which one do you prefer?",
        options: [
          { label: "EAT PIZZA", imagePath: "images/expressing-preferences/pizza.webp", preferForm: "eating pizza", ratherForm: "eat pizza" },
          { label: "EAT SPAGHETTI", imagePath: "images/expressing-preferences/sphagetti.webp", preferForm: "eating spaghetti", ratherForm: "eat spaghetti" }
        ],
        answers: [
          "I prefer {preferredGerund} to {otherGerund}.",
          "I would rather {preferredBase} than {otherBase}."
        ]
      }
    },
    {
      id: "student-question-cruise-or-seaside-holiday",
      noVisual: true,
      preferenceComparison: {
        layout: "student-question",
        question: "Which one do you prefer?",
        options: [
          { label: "CRUISE HOLIDAY", imagePath: "images/expressing-preferences/cruise_holiday.webp", preferForm: "going on a cruise holiday", ratherForm: "go on a cruise holiday" },
          { label: "SEASIDE HOLIDAY", imagePath: "images/expressing-preferences/seaside_holiday.webp", preferForm: "going on a seaside holiday", ratherForm: "go on a seaside holiday" }
        ],
        answers: [
          "I prefer {preferredGerund} to {otherGerund}.",
          "I would rather {preferredBase} than {otherBase}."
        ]
      }
    },
    {
      id: "ava-favourites-video-practice",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE AVA'S PREFERENCES",
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_ava_14.mp4",
        portraitPath: "images/avatars/v2/ava.webp",
        portraitAlt: "Ava",
        sequentialLines: true,
        lines: [
          {
            speaker: "AVA",
            parts: [
              { text: "She would rather " },
              { answer: "help animals", choices: ["watching TV","play football","help animals"] },
              { text: " " },
              { answer: "than", choices: ["to", "than"] },
              { text: " go shopping." }
            ]
          },
          {
            speaker: "AVA",
            parts: [
              { text: "She would rather " },
              { answer: "walk in nature", choices: ["walk in nature","walking in nature","read a book"] },
              { text: " than spend time in crowded places." }
            ]
          },
          {
            speaker: "AVA",
            parts: [
              { text: "She prefers " },
              { answer: "eating salad", choices: ["eat salad","eating salad","eating pizza"] },
              { text: " to eating fast food." }
            ]
          }
        ]
      }
    },
    {
      id: "benjamin-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_benjamin_14.mp4",
        portraitPath: "images/avatars/v2/benjamin.webp",
        portraitAlt: "Benjamin",
        sequentialLines: true,
        lines: [
          {
            speaker: "BENJAMIN",
            parts: [
              { text: "He prefers " },
              { answer: "swimming in the sea", choices: ["swimming in the sea","play football","playing basketball"] },
              { text: " " },
              { answer: "to", choices: ["to", "than"] },
              { text: " swimming in the pool." }
            ]
          },
          {
            speaker: "BENJAMIN",
            parts: [
              { text: "He would rather " },
              { answer: "ride his scooter", choices: ["riding his scooter","play video games","ride his scooter"] },
              { text: " than walk." }
            ]
          },
          {
            speaker: "BENJAMIN",
            parts: [
              { text: "He prefers " },
              { answer: "relaxing on the beach", choices: ["relax on the beach","relaxing on the beach","playing volleyball"] },
              { text: " to joining activities." }
            ]
          }
        ]
      }
    },
    {
      id: "chloe-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_chloe_14.mp4",
        portraitPath: "images/avatars/v2/chloe.webp",
        portraitAlt: "Chloe",
        sequentialLines: true,
        lines: [
          {
            speaker: "CHLOE",
            parts: [
              { text: "She prefers " },
              { answer: "eating cupcakes", choices: ["eat cupcakes","eating cupcakes","eating sandwiches"] },
              { text: " " },
              { answer: "to", choices: ["to", "than"] },
              { text: " eating other desserts." }
            ]
          },
          {
            speaker: "CHLOE",
            parts: [
              { text: "She prefers " },
              { answer: "attending art lessons", choices: ["attending art lessons","attend music lessons","attending drama lessons"] },
              { text: " to attending physical education classes." }
            ]
          },
          {
            speaker: "CHLOE",
            parts: [
              { text: "She prefers " },
              { answer: "enjoying spring", choices: ["enjoy spring","enjoying autumn","enjoying spring"] },
              { text: " to enjoying other seasons." }
            ]
          }
        ]
      }
    },
    {
      id: "david-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_david_14.mp4",
        portraitPath: "images/avatars/v2/david.webp",
        portraitAlt: "David",
        sequentialLines: true,
        lines: [
          {
            speaker: "DAVID",
            parts: [
              { text: "He would rather " },
              { answer: "travel", choices: ["watching TV","play basketball","travel"] },
              { text: " " },
              { answer: "than", choices: ["to", "than"] },
              { text: " stay at home." }
            ]
          },
          {
            speaker: "DAVID",
            parts: [
              { text: "He prefers " },
              { answer: "camping", choices: ["camp","camping","cycling"] },
              { text: " to staying in a hotel." }
            ]
          },
          {
            speaker: "DAVID",
            parts: [
              { text: "He prefers " },
              { answer: "eating fish", choices: ["eating fish","eat fish","eating pasta"] },
              { text: " to eating meat." }
            ]
          }
        ]
      }
    },
    {
      id: "ella-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_ella_14.mp4",
        portraitPath: "images/avatars/v2/ella.webp",
        portraitAlt: "Ella",
        sequentialLines: true,
        lines: [
          {
            speaker: "ELLA",
            parts: [
              { text: "She would rather " },
              { answer: "eat pasta", choices: ["eat pasta","eating salad","eat soup"] },
              { text: " than eat pizza." }
            ]
          },
          {
            speaker: "ELLA",
            parts: [
              { text: "She would rather " },
              { answer: "sing", choices: ["singing","dance","sing"] },
              { text: " than play the piano." }
            ]
          },
          {
            speaker: "ELLA",
            parts: [
              { text: "She prefers " },
              { answer: "enjoying summer", choices: ["enjoy summer","enjoying summer","enjoying spring"] },
              { text: " to enjoying winter." }
            ]
          }
        ]
      }
    },
    {
      id: "emma-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_emma_14.mp4",
        portraitPath: "images/avatars/v2/emma.webp",
        portraitAlt: "Emma",
        sequentialLines: true,
        lines: [
          {
            speaker: "EMMA",
            parts: [
              { text: "She prefers " },
              { answer: "cooking at home", choices: ["cook at home","watching TV","cooking at home"] },
              { text: " " },
              { answer: "to", choices: ["to", "than"] },
              { text: " eating out." }
            ]
          },
          {
            speaker: "EMMA",
            parts: [
              { text: "She would rather " },
              { answer: "study science", choices: ["study science","studying science","study history"] },
              { text: " than study languages." }
            ]
          }
        ]
      }
    },
    {
      id: "ethan-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_ethan_14.mp4",
        portraitPath: "images/avatars/v2/ethan.webp",
        portraitAlt: "Ethan",
        sequentialLines: true,
        lines: [
          {
            speaker: "ETHAN",
            parts: [
              { text: "He would rather " },
              { answer: "play the drums", choices: ["playing the drums","play the drums","play football"] },
              { text: " than play the violin." }
            ]
          },
          {
            speaker: "ETHAN",
            parts: [
              { text: "He prefers " },
              { answer: "playing golf", choices: ["play tennis","playing golf","playing basketball"] },
              { text: " to playing football." }
            ]
          },
          {
            speaker: "ETHAN",
            parts: [
              { text: "He prefers " },
              { answer: "reading mystery books", choices: ["read mystery books","reading comics","reading mystery books"] },
              { text: " to reading adventure books." }
            ]
          }
        ]
      }
    },
    {
      id: "hannah-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_hannah_14.mp4",
        portraitPath: "images/avatars/v2/hannah.webp",
        portraitAlt: "Hannah",
        sequentialLines: true,
        lines: [
          {
            speaker: "HANNAH",
            parts: [
              { text: "She prefers " },
              { answer: "eating grilled meat", choices: ["eating grilled meat","eat grilled meat","eating vegetable soup"] },
              { text: " to eating all other foods." }
            ]
          },
          {
            speaker: "HANNAH",
            parts: [
              { text: "She would rather " },
              { answer: "ride her horse", choices: ["riding her horse","play basketball","ride her horse"] },
              { text: " than cycle." }
            ]
          }
        ]
      }
    },
    {
      id: "mia-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_mia_14.mp4",
        portraitPath: "images/avatars/v2/mia.webp",
        portraitAlt: "Mia",
        sequentialLines: true,
        lines: [
          {
            speaker: "MIA",
            parts: [
              { text: "She prefers " },
              { answer: "writing in her diary", choices: ["write a letter","writing in her diary","drawing pictures"] },
              { text: " to posting on social media." }
            ]
          },
          {
            speaker: "MIA",
            parts: [
              { text: "She would rather " },
              { answer: "read a novel", choices: ["read a novel","reading a novel","draw a picture"] },
              { text: " than listen to music." }
            ]
          },
          {
            speaker: "MIA",
            parts: [
              { text: "She prefers " },
              { answer: "visiting quiet places", choices: ["visiting quiet places","visit quiet places","visiting museums"] },
              { text: " to visiting crowded places." }
            ]
          }
        ]
      }
    },
    {
      id: "olivia-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_olivia_14.mp4",
        portraitPath: "images/avatars/v2/olivia.webp",
        portraitAlt: "Olivia",
        sequentialLines: true,
        lines: [
          {
            speaker: "OLIVIA",
            parts: [
              { text: "She prefers " },
              { answer: "taking photos", choices: ["take notes","taking photos","playing tennis"] },
              { text: " to painting pictures." }
            ]
          },
          {
            speaker: "OLIVIA",
            parts: [
              { text: "She prefers " },
              { answer: "listening to instrumental music", choices: ["listen to instrumental music","listening to podcasts","listening to instrumental music"] },
              { text: " to listening to music with vocals." }
            ]
          },
          {
            speaker: "OLIVIA",
            parts: [
              { text: "She would rather " },
              { answer: "go to the cinema", choices: ["going to the cinema","go to the cinema","go swimming"] },
              { text: " than watch TV." }
            ]
          }
        ]
      }
    },
    {
      id: "victoria-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_victoria_14.mp4",
        portraitPath: "images/avatars/v2/victoria.webp",
        portraitAlt: "Victoria",
        sequentialLines: true,
        lines: [
          {
            speaker: "VICTORIA",
            parts: [
              { text: "She prefers " },
              { answer: "coding", choices: ["coding","code","playing chess"] },
              { text: " to hanging out with friends." }
            ]
          },
          {
            speaker: "VICTORIA",
            parts: [
              { text: "She would rather " },
              { answer: "play chess", choices: ["playing chess","go swimming","play chess"] },
              { text: " than read books." }
            ]
          }
        ]
      }
    },
    {
      id: "zoe-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/8_preferences_zoe_14.mp4",
        portraitPath: "images/avatars/v2/zoe.webp",
        portraitAlt: "Zoe",
        sequentialLines: true,
        lines: [
          {
            speaker: "ZOE",
            parts: [
              { text: "She prefers " },
              { answer: "listening to soft music", choices: ["listen to soft music","reading a novel","listening to soft music"] },
              { text: " to listening to loud music." }
            ]
          },
          {
            speaker: "ZOE",
            parts: [
              { text: "She would rather " },
              { answer: "solve a crossword puzzle", choices: ["solve a crossword puzzle","watching TV","read a comic"] },
              { text: " " },
              { answer: "than", choices: ["to", "than"] },
              { text: " play a video game." }
            ]
          },
          {
            speaker: "ZOE",
            parts: [
              { text: "She prefers " },
              { answer: "stargazing", choices: ["stargaze","stargazing","drawing pictures"] },
              { text: " to watching TV." }
            ]
          }
        ]
      }
    },
    {
      id: "preference-table-test-sample",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Salad", "Hamburger", "Cupcake", "Pizza"],
        rows: [
          { name: "Ava", preferences: { Salad: true, Hamburger: false } },
          { name: "Benjamin", preferences: { Hamburger: true, Pizza: false } },
          { name: "Chloe", preferences: { Salad: false, Cupcake: true } },
          { name: "Daniel", preferences: { Hamburger: false, Pizza: true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Ava would rather eat salad than hamburger.", correct: true },
          { text: "Benjamin prefers pizza to hamburger.", correct: false },
          { text: "Chloe would rather eat salad than cupcake.", correct: false },
          { text: "Daniel prefers hamburger to pizza.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-david-ella-emma-ethan",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Grilled Fish", "Pasta", "Vegetable Soup", "Steak"],
        rows: [
          { name: "David", preferences: { "Grilled Fish": true, Steak: false } },
          { name: "Ella", preferences: { Pasta: true, "Vegetable Soup": false } },
          { name: "Emma", preferences: { Pasta: false, "Vegetable Soup": true } },
          { name: "Ethan", preferences: { "Grilled Fish": false, Steak: true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "David would rather eat grilled fish than steak.", correct: true },
          { text: "Ella prefers vegetable soup to pasta.", correct: false },
          { text: "Emma would rather eat pasta than vegetable soup.", correct: false },
          { text: "Ethan prefers grilled fish to steak.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-hannah-jack-lucas-mia",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Barbecue", "Sandwich", "Spaghetti", "Chocolate Cookies"],
        rows: [
          { name: "Hannah", preferences: { Barbecue: true, Sandwich: false } },
          { name: "Jack", preferences: { Sandwich: true, Spaghetti: false } },
          { name: "Lucas", preferences: { Barbecue: false, Spaghetti: true } },
          { name: "Mia", preferences: { Sandwich: false, "Chocolate Cookies": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Hannah would rather eat barbecue than sandwich.", correct: true },
          { text: "Jack prefers spaghetti to sandwich.", correct: false },
          { text: "Lucas would rather eat barbecue than spaghetti.", correct: false },
          { text: "Mia prefers sandwich to chocolate cookies.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-noah-olivia-victoria-zoe",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Chicken Wrap", "Blueberry Pancakes", "Sushi", "Mushroom Pizza"],
        rows: [
          { name: "Noah", preferences: { "Chicken Wrap": true, Sushi: false } },
          { name: "Olivia", preferences: { "Blueberry Pancakes": true, Sushi: false } },
          { name: "Victoria", preferences: { "Blueberry Pancakes": false, Sushi: true } },
          { name: "Zoe", preferences: { "Chicken Wrap": false, "Mushroom Pizza": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Olivia prefers blueberry pancakes to sushi.", correct: true },
          { text: "Noah would rather eat sushi than chicken wrap.", correct: false },
          { text: "Victoria prefers blueberry pancakes to sushi.", correct: false },
          { text: "Zoe would rather eat chicken wrap than mushroom pizza.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-ava-emma-jack-olivia",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Salad", "Vegetable Soup", "Sandwich", "Blueberry Pancakes"],
        rows: [
          { name: "Ava", preferences: { Salad: true, Sandwich: false } },
          { name: "Emma", preferences: { "Vegetable Soup": true, Sandwich: false } },
          { name: "Jack", preferences: { Salad: false, Sandwich: true } },
          { name: "Olivia", preferences: { "Vegetable Soup": false, "Blueberry Pancakes": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Emma would rather eat vegetable soup than sandwich.", correct: true },
          { text: "Ava prefers sandwich to salad.", correct: false },
          { text: "Jack would rather eat salad than sandwich.", correct: false },
          { text: "Olivia prefers vegetable soup to blueberry pancakes.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-benjamin-ethan-lucas-zoe",
      preferenceTableTest: {
        tableLabel: "Food preferences",
        columns: ["Hamburger", "Steak", "Spaghetti", "Mushroom Pizza"],
        rows: [
          { name: "Benjamin", preferences: { Hamburger: true, Steak: false } },
          { name: "Ethan", preferences: { Steak: true, Spaghetti: false } },
          { name: "Lucas", preferences: { Hamburger: false, Spaghetti: true } },
          { name: "Zoe", preferences: { Steak: false, "Mushroom Pizza": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Zoe prefers mushroom pizza to steak.", correct: true },
          { text: "Benjamin would rather eat steak than hamburger.", correct: false },
          { text: "Ethan prefers spaghetti to steak.", correct: false },
          { text: "Lucas would rather eat hamburger than spaghetti.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-actions-ava-benjamin-chloe-daniel",
      preferenceTableTest: {
        tableLabel: "Activity preferences",
        columns: ["Animal Care", "Riding a Scooter", "Dancing", "Skiing"],
        rows: [
          { name: "Ava", preferences: { "Animal Care": true, "Riding a Scooter": false } },
          { name: "Benjamin", preferences: { "Riding a Scooter": true, Dancing: false } },
          { name: "Chloe", preferences: { Dancing: true, Skiing: false } },
          { name: "Daniel", preferences: { "Animal Care": false, Skiing: true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Chloe prefers dancing to skiing.", correct: true },
          { text: "Ava would rather ride a scooter than take care of animals.", correct: false },
          { text: "Benjamin prefers dancing to riding a scooter.", correct: false },
          { text: "Daniel would rather take care of animals than ski.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-actions-david-ella-emma-ethan",
      preferenceTableTest: {
        tableLabel: "Activity preferences",
        columns: ["Travelling", "Singing", "Cooking", "Playing Drums"],
        rows: [
          { name: "David", preferences: { Travelling: true, Singing: false } },
          { name: "Ella", preferences: { Singing: true, Cooking: false } },
          { name: "Emma", preferences: { Cooking: true, "Playing Drums": false } },
          { name: "Ethan", preferences: { Travelling: false, "Playing Drums": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Ethan would rather play drums than travel.", correct: true },
          { text: "David prefers singing to travelling.", correct: false },
          { text: "Ella would rather cook than sing.", correct: false },
          { text: "Emma prefers playing drums to cooking.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-actions-hannah-jack-lucas-mia",
      preferenceTableTest: {
        tableLabel: "Activity preferences",
        columns: ["Cycling", "Gardening", "Playing Football", "Writing a Diary"],
        rows: [
          { name: "Hannah", preferences: { Cycling: true, Gardening: false } },
          { name: "Jack", preferences: { Gardening: true, "Playing Football": false } },
          { name: "Lucas", preferences: { Cycling: false, "Playing Football": true } },
          { name: "Mia", preferences: { Gardening: false, "Writing a Diary": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Mia prefers writing in her diary to gardening.", correct: true },
          { text: "Hannah would rather garden than cycle.", correct: false },
          { text: "Jack prefers playing football to gardening.", correct: false },
          { text: "Lucas would rather cycle than play football.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-actions-noah-olivia-victoria-zoe",
      preferenceTableTest: {
        tableLabel: "Activity preferences",
        columns: ["Studying", "Taking Photos", "Coding", "Crossword Puzzles"],
        rows: [
          { name: "Noah", preferences: { Studying: true, "Taking Photos": false } },
          { name: "Olivia", preferences: { "Taking Photos": true, Coding: false } },
          { name: "Victoria", preferences: { Coding: true, "Crossword Puzzles": false } },
          { name: "Zoe", preferences: { Studying: false, "Crossword Puzzles": true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Victoria would rather code than solve crossword puzzles.", correct: true },
          { text: "Noah prefers taking photos to studying.", correct: false },
          { text: "Olivia would rather code than take photos.", correct: false },
          { text: "Zoe prefers studying to solving crossword puzzles.", correct: false }
        ]
      }
    },
    {
      id: "preference-table-test-actions-secondary-hobbies",
      preferenceTableTest: {
        tableLabel: "Activity preferences",
        columns: ["Birdwatching", "Playing the Piano", "Playing Basketball", "Hiking"],
        rows: [
          { name: "Ava", preferences: { Birdwatching: true, "Playing the Piano": false } },
          { name: "Chloe", preferences: { "Playing the Piano": true, "Playing Basketball": false } },
          { name: "Daniel", preferences: { "Playing Basketball": true, Hiking: false } },
          { name: "Hannah", preferences: { Birdwatching: false, Hiking: true } }
        ],
        prompt: "CHOOSE THE CORRECT SENTENCE",
        choices: [
          { text: "Daniel prefers playing basketball to hiking.", correct: true },
          { text: "Ava would rather play the piano than watch birds.", correct: false },
          { text: "Chloe prefers playing basketball to playing the piano.", correct: false },
          { text: "Hannah would rather watch birds than hike.", correct: false }
        ]
      }
    }
  ]
};

const preferenceVideoItems = expressingPreferencesGrade8Function.sentences
  .filter((item) => item.id?.endsWith("-favourites-video-practice"))
  .map((item) => ({
    name: item.videoDialogue.portraitAlt,
    avatarPath: `images/avatars/v2/${item.videoDialogue.portraitAlt.toLowerCase()}.webp`,
    videoDialogue: item.videoDialogue
  }));
const firstPreferenceVideoIndex = expressingPreferencesGrade8Function.sentences.findIndex(
  (item) => item.id?.endsWith("-favourites-video-practice")
);
expressingPreferencesGrade8Function.sentences.splice(firstPreferenceVideoIndex, preferenceVideoItems.length, {
  id: "favourites-video-hub",
  noVisual: true,
  preferenceVideoHub: {
    title: "CHOOSE A CHARACTER",
    items: preferenceVideoItems
  }
});

const expressingPreferencesWatchCompleteItems = [
  {
    id: "preferences-video-ava-chloe-rain",
    speakers: ["AVA", "CHLOE"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_ava_chloe5.mp4",
      lines: [
        { speaker: "AVA", parts: [{ text: "I enjoy walking in the rain." }] },
        { speaker: "CHLOE", parts: [{ text: "I " }, { answer: "prefer", choices: ["prefer", "would rather"] }, { text: " staying dry!" }] }
      ]
    }
  },
  {
    id: "preferences-video-ella-olivia-singing",
    speakers: ["ELLA", "OLIVIA"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_ella_olivia7.mp4",
      lines: [
        { speaker: "ELLA", parts: [{ text: "Would you like to sing this one?" }] },
        { speaker: "OLIVIA", parts: [{ text: "I " }, { answer: "prefer", choices: ["prefer", "would rather"] }, { text: " listening to singing." }] },
        { speaker: "ELLA", parts: [{ text: "Fine! I'll sing then!" }] }
      ]
    }
  },
  {
    id: "preferences-video-hannah-emma-picnic",
    speakers: ["HANNAH", "EMMA"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/8_preferences_hannah_emma2.mp4",
      lines: [
        { speaker: "EMMA", parts: [{ text: "I'd rather " }, { answer: "have", choices: ["have", "having"] }, { text: " a picnic first." }] },
        { speaker: "HANNAH", parts: [{ text: "I prefer " }, { answer: "going", choices: ["go", "going"] }, { text: " for a hike first." }] }
      ]
    }
  },
  {
    id: "preferences-video-hannah-emma-theatre",
    speakers: ["HANNAH", "EMMA"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/8_preferences_hannah_emma.mp4",
      lines: [
        { speaker: "EMMA", parts: [{ text: "Let's watch a movie." }] },
        { speaker: "HANNAH", parts: [{ text: "I " }, { answer: "would rather", choices: ["prefer", "would rather"] }, { text: " go to the theatre than the cinema." }] }
      ]
    }
  },
  {
    id: "preferences-video-mia-zoe-comedies",
    speakers: ["MIA", "ZOE"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/8_preferences_mia_zoe.mp4",
      lines: [
        { speaker: "ZOE", parts: [{ text: "How about watching the horror movie?" }] },
        { speaker: "MIA", parts: [{ text: "No way! I prefer comedies " }, { answer: "to", choices: ["to", "than"] }, { text: " horror movies." }] },
        { speaker: "ZOE", parts: [{ text: "Afraid?" }] }
      ]
    }
  },
  {
    id: "preferences-video-chloe-luna-pillows",
    speakers: ["CHLOE", "LUNA"],
    videoDialogue: {
      title: "WATCH, THEN COMPLETE THE DIALOGUE",
      videoUrl: "https://media.adilhoca.com/video/8_preferences_chloe_luna.mp4",
      lines: [
        { speaker: "CHLOE", parts: [{ text: "Which one do you prefer, red pillow " }, { answer: "or", choices: ["to", "or"] }, { text: " white pillow? So you " }, { answer: "prefer", choices: ["hate", "prefer"] }, { text: " my bag. Great!" }] }
      ]
    }
  }
];

expressingPreferencesGrade8Function.sentences.push({
  id: "expressing-preferences-watch-complete-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: expressingPreferencesWatchCompleteItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(expressingPreferencesGrade8Function);
