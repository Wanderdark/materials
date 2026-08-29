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
        videoUrl: "https://media.adilhoca.com/video/favorites_ava.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/ava.webp",
        portraitAlt: "Ava",
        sequentialLines: true,
        lines: [
          {
            speaker: "AVA",
            parts: [
              { text: "She prefers " },
              { slot: true, answers: ["green"] },
              { text: " to " },
              { slot: true, answers: ["purple", "red", "blue"] },
              { text: "." }
            ],
            imageChoices: [
              { value: "green", imagePath: "images/expressing-preferences/green.webp" },
              { value: "purple", imagePath: "images/expressing-preferences/purple.webp" },
              { value: "red", imagePath: "images/expressing-preferences/red.webp" },
              { value: "blue", imagePath: "images/expressing-preferences/blue.webp" }
            ]
          },
          {
            speaker: "AVA",
            parts: [
              { text: "She prefers " },
              { slot: true, answers: ["salad"] },
              { text: " to " },
              { slot: true, answers: ["steak", "spaghetti", "hamburger"] },
              { text: "." }
            ],
            imageChoices: [
              { value: "salad", imagePath: "images/expressing-preferences/salad.webp" },
              { value: "steak", imagePath: "images/expressing-preferences/steak.webp" },
              { value: "spaghetti", imagePath: "images/expressing-preferences/sphagetti.webp" },
              { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }
            ]
          },
          {
            speaker: "AVA",
            parts: [
              { text: "She would rather study " },
              { slot: true, answers: ["English"] },
              { text: " than " },
              { slot: true, answers: ["Maths", "science", "PE"] },
              { text: "." }
            ],
            imageChoices: [
              { value: "English", imagePath: "images/expressing-preferences/english.webp" },
              { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" },
              { value: "science", imagePath: "images/expressing-preferences/science.webp" },
              { value: "PE", imagePath: "images/expressing-preferences/pe.webp" }
            ]
          },
          {
            speaker: "AVA",
            parts: [
              { text: "She prefers " },
              { slot: true, answers: ["spring"] },
              { text: " to " },
              { slot: true, answers: ["Winter", "autumn", "summer"] },
              { text: "." }
            ],
            imageChoices: [
              { value: "spring", imagePath: "images/expressing-preferences/spring.webp" },
              { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" },
              { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" },
              { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }
            ]
          }
        ]
      }
    },
    {
      id: "benjamin-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_benjamin.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/benjamin.webp",
        portraitAlt: "Benjamin",
        sequentialLines: true,
        lines: [
          {
            speaker: "BENJAMIN",
            parts: [{ text: "Benjamin prefers " }, { slot: true, answers: ["blue"] }, { text: " to " }, { slot: true, answers: ["green", "purple", "red"] }, { text: "." }],
            imageChoices: [{ value: "blue", imagePath: "images/expressing-preferences/blue.webp" }, { value: "green", imagePath: "images/expressing-preferences/green.webp" }, { value: "purple", imagePath: "images/expressing-preferences/purple.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }]
          },
          {
            speaker: "BENJAMIN",
            parts: [{ text: "Benjamin would rather eat " }, { slot: true, answers: ["hamburgers"] }, { text: " than " }, { slot: true, answers: ["salad", "steak", "spaghetti"] }, { text: "." }],
            imageChoices: [{ value: "hamburgers", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }, { value: "spaghetti", imagePath: "images/expressing-preferences/sphagetti.webp" }]
          },
          {
            speaker: "BENJAMIN",
            parts: [{ text: "Benjamin prefers " }, { slot: true, answers: ["P.E."] }, { text: " to " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "P.E.", imagePath: "images/expressing-preferences/pe.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "BENJAMIN",
            parts: [{ text: "Benjamin prefers " }, { slot: true, answers: ["summer"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "autumn"] }, { text: "." }],
            imageChoices: [{ value: "summer", imagePath: "images/expressing-preferences/summer.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }]
          }
        ]
      }
    },
    {
      id: "chloe-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_chloe.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/chloe.webp",
        portraitAlt: "Chloe",
        sequentialLines: true,
        lines: [
          {
            speaker: "CHLOE",
            parts: [{ text: "Chloe prefers " }, { slot: true, answers: ["pink"] }, { text: " to " }, { slot: true, answers: ["green", "purple", "red"] }, { text: "." }],
            imageChoices: [{ value: "pink", imagePath: "images/expressing-preferences/pink.webp" }, { value: "green", imagePath: "images/expressing-preferences/green.webp" }, { value: "purple", imagePath: "images/expressing-preferences/purple.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }]
          },
          {
            speaker: "CHLOE",
            parts: [{ text: "Chloe prefers " }, { slot: true, answers: ["cupcake"] }, { text: " to " }, { slot: true, answers: ["blueberry pancakes", "chocolate cookies", "apple pie"] }, { text: "." }],
            imageChoices: [{ value: "cupcake", imagePath: "images/expressing-preferences/cupcake.webp" }, { value: "blueberry pancakes", imagePath: "images/expressing-preferences/blueberry_pancakes.webp" }, { value: "chocolate cookies", imagePath: "images/expressing-preferences/chocolate_cookies.webp" }, { value: "apple pie", imagePath: "images/expressing-preferences/apple_pie.webp" }]
          },
          {
            speaker: "CHLOE",
            parts: [{ text: "Chloe prefers " }, { slot: true, answers: ["arts"] }, { text: " to " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "arts", imagePath: "../song_presenter/images/arts.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "CHLOE",
            parts: [{ text: "Chloe prefers " }, { slot: true, answers: ["spring"] }, { text: " to " }, { slot: true, answers: ["Winter", "autumn", "summer"] }, { text: "." }],
            imageChoices: [{ value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "david-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_david.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/david.webp",
        portraitAlt: "David",
        sequentialLines: true,
        lines: [
          {
            speaker: "DAVID",
            parts: [{ text: "David prefers " }, { slot: true, answers: ["navy blue"] }, { text: " to " }, { slot: true, answers: ["red", "orange", "yellow"] }, { text: "." }],
            imageChoices: [{ value: "navy blue", imagePath: "images/expressing-preferences/navy_blue.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }, { value: "yellow", imagePath: "images/expressing-preferences/yellow.webp" }]
          },
          {
            speaker: "DAVID",
            parts: [{ text: "David would rather eat " }, { slot: true, answers: ["grilled fish"] }, { text: " than " }, { slot: true, answers: ["steak", "pasta", "salad"] }, { text: "." }],
            imageChoices: [{ value: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }, { value: "pasta", imagePath: "images/expressing-preferences/pasta.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }]
          },
          {
            speaker: "DAVID",
            parts: [{ text: "David would rather study " }, { slot: true, answers: ["geography"] }, { text: " than " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "geography", imagePath: "images/expressing-preferences/geography.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "DAVID",
            parts: [{ text: "David prefers " }, { slot: true, answers: ["summer"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "autumn"] }, { text: "." }],
            imageChoices: [{ value: "summer", imagePath: "images/expressing-preferences/summer.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }]
          }
        ]
      }
    },
    {
      id: "ella-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_ella.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/ella.webp",
        portraitAlt: "Ella",
        sequentialLines: true,
        lines: [
          {
            speaker: "ELLA",
            parts: [{ text: "Ella prefers " }, { slot: true, answers: ["yellow"] }, { text: " to " }, { slot: true, answers: ["navy blue", "red", "orange"] }, { text: "." }],
            imageChoices: [{ value: "yellow", imagePath: "images/expressing-preferences/yellow.webp" }, { value: "navy blue", imagePath: "images/expressing-preferences/navy_blue.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }]
          },
          {
            speaker: "ELLA",
            parts: [{ text: "Ella would rather eat " }, { slot: true, answers: ["spaghetti"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "steak"] }, { text: "." }],
            imageChoices: [{ value: "spaghetti", imagePath: "images/expressing-preferences/sphagetti.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }]
          },
          {
            speaker: "ELLA",
            parts: [{ text: "Ella prefers " }, { slot: true, answers: ["summer"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "autumn"] }, { text: "." }],
            imageChoices: [{ value: "summer", imagePath: "images/expressing-preferences/summer.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }]
          }
        ]
      }
    },
    {
      id: "emma-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_emma.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/emma.webp",
        portraitAlt: "Emma",
        sequentialLines: true,
        lines: [
          {
            speaker: "EMMA",
            parts: [{ text: "Emma prefers " }, { slot: true, answers: ["purple"] }, { text: " to " }, { slot: true, answers: ["pink", "green", "red"] }, { text: "." }],
            imageChoices: [{ value: "purple", imagePath: "images/expressing-preferences/purple.webp" }, { value: "pink", imagePath: "images/expressing-preferences/pink.webp" }, { value: "green", imagePath: "images/expressing-preferences/green.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }]
          },
          {
            speaker: "EMMA",
            parts: [{ text: "Emma would rather eat " }, { slot: true, answers: ["vegetable soup"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "steak"] }, { text: "." }],
            imageChoices: [{ value: "vegetable soup", imagePath: "images/expressing-preferences/vegetable_soup.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }]
          },
          {
            speaker: "EMMA",
            parts: [{ text: "Emma would rather study " }, { slot: true, answers: ["science"] }, { text: " than " }, { slot: true, answers: ["English", "Maths", "P.E."] }, { text: "." }],
            imageChoices: [{ value: "science", imagePath: "images/expressing-preferences/science.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "P.E.", imagePath: "images/expressing-preferences/pe.webp" }]
          },
          {
            speaker: "EMMA",
            parts: [{ text: "Emma prefers " }, { slot: true, answers: ["spring"] }, { text: " to " }, { slot: true, answers: ["Winter", "autumn", "summer"] }, { text: "." }],
            imageChoices: [{ value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "ethan-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_ethan.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/ethan.webp",
        portraitAlt: "Ethan",
        sequentialLines: true,
        lines: [
          {
            speaker: "ETHAN",
            parts: [{ text: "Ethan prefers " }, { slot: true, answers: ["dark blue"] }, { text: " to " }, { slot: true, answers: ["orange", "red", "yellow"] }, { text: "." }],
            imageChoices: [{ value: "dark blue", imagePath: "images/expressing-preferences/dark_blue.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "yellow", imagePath: "images/expressing-preferences/yellow.webp" }]
          },
          {
            speaker: "ETHAN",
            parts: [{ text: "Ethan would rather eat " }, { slot: true, answers: ["steak"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "spaghetti"] }, { text: "." }],
            imageChoices: [{ value: "steak", imagePath: "images/expressing-preferences/steak.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "spaghetti", imagePath: "images/expressing-preferences/sphagetti.webp" }]
          },
          {
            speaker: "ETHAN",
            parts: [{ text: "Ethan would rather study " }, { slot: true, answers: ["Maths"] }, { text: " than " }, { slot: true, answers: ["English", "science", "P.E."] }, { text: "." }],
            imageChoices: [{ value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }, { value: "P.E.", imagePath: "images/expressing-preferences/pe.webp" }]
          },
          {
            speaker: "ETHAN",
            parts: [{ text: "Ethan prefers " }, { slot: true, answers: ["autumn"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "summer"] }, { text: "." }],
            imageChoices: [{ value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "hannah-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_hannah.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/hannah.webp",
        portraitAlt: "Hannah",
        sequentialLines: true,
        lines: [
          {
            speaker: "HANNAH",
            parts: [{ text: "Hannah prefers " }, { slot: true, answers: ["sky blue"] }, { text: " to " }, { slot: true, answers: ["orange", "red", "yellow"] }, { text: "." }],
            imageChoices: [{ value: "sky blue", imagePath: "images/expressing-preferences/sky_blue.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "yellow", imagePath: "images/expressing-preferences/yellow.webp" }]
          },
          {
            speaker: "HANNAH",
            parts: [{ text: "Hannah would rather eat " }, { slot: true, answers: ["barbecue"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "pizza"] }, { text: "." }],
            imageChoices: [{ value: "barbecue", imagePath: "images/expressing-preferences/bbq.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "pizza", imagePath: "images/expressing-preferences/pizza.webp" }]
          },
          {
            speaker: "HANNAH",
            parts: [{ text: "Hannah prefers " }, { slot: true, answers: ["P.E."] }, { text: " to " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "P.E.", imagePath: "images/expressing-preferences/pe.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "HANNAH",
            parts: [{ text: "Hannah prefers " }, { slot: true, answers: ["summer"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "autumn"] }, { text: "." }],
            imageChoices: [{ value: "summer", imagePath: "images/expressing-preferences/summer.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }]
          }
        ]
      }
    },
    {
      id: "jack-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_jack.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/jack.webp",
        portraitAlt: "Jack",
        sequentialLines: true,
        lines: [
          {
            speaker: "JACK",
            parts: [{ text: "Jack prefers " }, { slot: true, answers: ["dark green"] }, { text: " to " }, { slot: true, answers: ["red", "blue", "orange"] }, { text: "." }],
            imageChoices: [{ value: "dark green", imagePath: "images/expressing-preferences/dark_green.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "blue", imagePath: "images/expressing-preferences/blue.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }]
          },
          {
            speaker: "JACK",
            parts: [{ text: "Jack would rather eat " }, { slot: true, answers: ["sandwich"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "steak"] }, { text: "." }],
            imageChoices: [{ value: "sandwich", imagePath: "images/expressing-preferences/sandwich.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }]
          },
          {
            speaker: "JACK",
            parts: [{ text: "Jack prefers " }, { slot: true, answers: ["autumn"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "summer"] }, { text: "." }],
            imageChoices: [{ value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "mia-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_mia.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/mia.webp",
        portraitAlt: "Mia",
        sequentialLines: true,
        lines: [
          {
            speaker: "MIA",
            parts: [{ text: "Mia prefers " }, { slot: true, answers: ["lavender"] }, { text: " to " }, { slot: true, answers: ["orange", "red", "yellow"] }, { text: "." }],
            imageChoices: [{ value: "lavender", imagePath: "images/expressing-preferences/lavender.webp" }, { value: "orange", imagePath: "images/expressing-preferences/orange.webp" }, { value: "red", imagePath: "images/expressing-preferences/red.webp" }, { value: "yellow", imagePath: "images/expressing-preferences/yellow.webp" }]
          },
          {
            speaker: "MIA",
            parts: [{ text: "Mia would rather eat " }, { slot: true, answers: ["chocolate cookies"] }, { text: " than " }, { slot: true, answers: ["blueberry pancakes", "cupcake", "apple pie"] }, { text: "." }],
            imageChoices: [{ value: "chocolate cookies", imagePath: "images/expressing-preferences/chocolate_cookies.webp" }, { value: "blueberry pancakes", imagePath: "images/expressing-preferences/blueberry_pancakes.webp" }, { value: "cupcake", imagePath: "images/expressing-preferences/cupcake.webp" }, { value: "apple pie", imagePath: "images/expressing-preferences/apple_pie.webp" }]
          },
          {
            speaker: "MIA",
            parts: [{ text: "Mia prefers " }, { slot: true, answers: ["autumn"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "summer"] }, { text: "." }],
            imageChoices: [{ value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "olivia-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_olivia.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/olivia.webp",
        portraitAlt: "Olivia",
        sequentialLines: true,
        lines: [
          {
            speaker: "OLIVIA",
            parts: [{ text: "Olivia would rather eat " }, { slot: true, answers: ["blueberry pancakes"] }, { text: " than " }, { slot: true, answers: ["chocolate cookies", "cupcake", "apple pie"] }, { text: "." }],
            imageChoices: [{ value: "blueberry pancakes", imagePath: "images/expressing-preferences/blueberry_pancakes.webp" }, { value: "chocolate cookies", imagePath: "images/expressing-preferences/chocolate_cookies.webp" }, { value: "cupcake", imagePath: "images/expressing-preferences/cupcake.webp" }, { value: "apple pie", imagePath: "images/expressing-preferences/apple_pie.webp" }]
          },
          {
            speaker: "OLIVIA",
            parts: [{ text: "Olivia prefers " }, { slot: true, answers: ["arts"] }, { text: " to " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "arts", imagePath: "../song_presenter/images/arts.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "OLIVIA",
            parts: [{ text: "Olivia prefers " }, { slot: true, answers: ["spring"] }, { text: " to " }, { slot: true, answers: ["Winter", "autumn", "summer"] }, { text: "." }],
            imageChoices: [{ value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "victoria-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_victoria.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/victoria.webp",
        portraitAlt: "Victoria",
        sequentialLines: true,
        lines: [
          {
            speaker: "VICTORIA",
            parts: [{ text: "Victoria would rather eat " }, { slot: true, answers: ["sushi"] }, { text: " than " }, { slot: true, answers: ["grilled fish", "steak", "pizza"] }, { text: "." }],
            imageChoices: [{ value: "sushi", imagePath: "images/expressing-preferences/sushi.webp" }, { value: "grilled fish", imagePath: "images/expressing-preferences/grilled_fish.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }, { value: "pizza", imagePath: "images/expressing-preferences/pizza.webp" }]
          },
          {
            speaker: "VICTORIA",
            parts: [{ text: "Victoria prefers " }, { slot: true, answers: ["I.T."] }, { text: " to " }, { slot: true, answers: ["English", "Maths", "science"] }, { text: "." }],
            imageChoices: [{ value: "I.T.", imagePath: "images/expressing-preferences/it.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "science", imagePath: "images/expressing-preferences/science.webp" }]
          },
          {
            speaker: "VICTORIA",
            parts: [{ text: "Victoria prefers " }, { slot: true, answers: ["Winter"] }, { text: " to " }, { slot: true, answers: ["spring", "autumn", "summer"] }, { text: "." }],
            imageChoices: [{ value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
          }
        ]
      }
    },
    {
      id: "zoe-favourites-video-practice",
      videoDialogue: {
        hideTitle: true,
        videoUrl: "https://media.adilhoca.com/video/favorites_zoe.mp4",
        portraitPath: "../olivias_movie_memories/assets/portraits/zoe.webp",
        portraitAlt: "Zoe",
        sequentialLines: true,
        lines: [
          {
            speaker: "ZOE",
            parts: [{ text: "Zoe would rather eat " }, { slot: true, answers: ["pizza"] }, { text: " than " }, { slot: true, answers: ["hamburger", "salad", "steak"] }, { text: "." }],
            imageChoices: [{ value: "pizza", imagePath: "images/expressing-preferences/pizza.webp" }, { value: "hamburger", imagePath: "images/expressing-preferences/hamburger.webp" }, { value: "salad", imagePath: "images/expressing-preferences/salad.webp" }, { value: "steak", imagePath: "images/expressing-preferences/steak.webp" }]
          },
          {
            speaker: "ZOE",
            parts: [{ text: "Zoe would rather study " }, { slot: true, answers: ["science"] }, { text: " than " }, { slot: true, answers: ["English", "Maths", "P.E."] }, { text: "." }],
            imageChoices: [{ value: "science", imagePath: "images/expressing-preferences/science.webp" }, { value: "English", imagePath: "images/expressing-preferences/english.webp" }, { value: "Maths", imagePath: "images/expressing-preferences/maths.webp" }, { value: "P.E.", imagePath: "images/expressing-preferences/pe.webp" }]
          },
          {
            speaker: "ZOE",
            parts: [{ text: "Zoe prefers " }, { slot: true, answers: ["autumn"] }, { text: " to " }, { slot: true, answers: ["Winter", "spring", "summer"] }, { text: "." }],
            imageChoices: [{ value: "autumn", imagePath: "images/expressing-preferences/autumn.webp" }, { value: "Winter", imagePath: "images/expressing-preferences/winter.webp" }, { value: "spring", imagePath: "images/expressing-preferences/spring.webp" }, { value: "summer", imagePath: "images/expressing-preferences/summer.webp" }]
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
    avatarPath: `images/avatars/${item.videoDialogue.portraitAlt.toLowerCase()}.webp`,
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

window.functionModules = window.functionModules || [];
window.functionModules.push(expressingPreferencesGrade8Function);
