const simplePastTenseGrade7Function = {
  // README - overlay sentence formats:
  // 1) Old simple format still works:
  //    sentence: "They watch<ed> a movie."
  // 2) New flexible format for plain text, highlights, and popup choices:
  //    sentenceParts: [
  //      { text: "They " },
  //      { choices: ["watch", "watched"], answer: "watched" },
  //      { text: " a movie." }
  //    ]
  // 3) Highlight without popup:
  //    sentenceParts: [{ text: "They watch" }, { text: "ed", className: "presence-yellow" }]
  id: "simple-past-tense-grade7",
  grade: 7,
  unit: 3,
  title: "Simple Past Tense",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "simplepast-intro",
      presenceSlide: true,
      kicker: "SIMPLE PAST TENSE - Regular Verbs",
      title: "What did they do yesterday",
      imagePath: "images/simple-past-tense/ruletable.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "play -> play" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            examples: [
              {
                imagePath: "images/simple-past-tense/play-football-lucas-13-1.webp",
                sentence: "Lucas <played> football after school."
              },
              {
                imagePath: "images/common/play-piano-chloe-13-1.webp",
                sentence: "Chloe play<ed> piano <yesterday>."
              }
            ],
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "watch -> watch" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/watch-movie-olivia-mother-1.webp",
            sentence: "Olivia and her mother watch<ed> a movie <last night>.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "study -> stud" }, { text: "ied", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/study-noah-1.webp",
            sentence: "Noah stud<ied> Maths yesterday afternoon.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "-" }, { text: "ed", className: "presence-yellow" }, { text: "" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "cook -> cook" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/cook-emma-with-mother-13-1.webp",
            sentence: "Emma cook<ed> dinner with her mother.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "listen -> listen" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/listenmusic-ella-13-1.webp",
            sentence: "Ella listen<ed> music after school",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "clean -> clean" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/clean-ava-shelter-13-1.webp",
            sentence: "Ava clean<ed> the animal shelter after school yesterday.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "help -> help" }, { text: "ed", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/help-mother-hannah-13-1.webp",
            sentence: "Hannah help<ed> her mother in house chores.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-positive-choice-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "Choose the correct verb form.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/play-football-lucas-13-1.webp",
          segments: [
            { text: "Lucas " },
            { options: ["plays", "played"], answer: "played" },
            { text: " football yesterday" }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-piano-chloe-13-1.webp",
          segments: [
            { text: "Chloe " },
            { options: ["plays", "played"], answer: "played" },
            { text: " piano yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          segments: [
            { text: "Olivia and her mother " },
            { options: ["watches", "watched"], answer: "watched" },
            { text: " a movie last night." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah " },
            { options: ["studies", "studied"], answer: "studied" },
            { text: " Maths yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/cook-emma-with-mother-13-1.webp",
          segments: [
            { text: "Emma " },
            { options: ["cooks", "cooked"], answer: "cooked" },
            { text: " dinner yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/listenmusic-ella-13-1.webp",
          segments: [
            { text: "Ella " },
            { options: ["listens", "listened"], answer: "listened" },
            { text: " music yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-ava-shelter-13-1.webp",
          segments: [
            { text: "Ava " },
            { options: ["cleans", "cleaned"], answer: "cleaned" },
            { text: " animal shelter yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/help-mother-hannah-13-1.webp",
          segments: [
            { text: "Hannah " },
            { options: ["helps", "helped"], answer: "helped" },
            { text: " her mother yesterday." }
          ]
        }
      ]
    },
    {
      id: "simplepast-negative",
      presenceSlide: true,
      kicker: "Regular Verbs",
      title: "Negative Sentences",
      imagePath: "images/simple-past-tense/ruletable2.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " play...", className: "presence-yellow" }],
          overlayData: {
            examples: [
              {
                imagePath: "images/simple-past-tense/play-football-lucas-13-1.webp",
                sentence: "Lucas <didn't play> basketball. He played football."
              },
              {
                imagePath: "images/common/play-piano-chloe-13-1.webp",
                sentence: "Chloe <didn't play> violin. She play<ed> piano."
              }
            ],
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " watch", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/watch-movie-olivia-mother-1.webp",
            sentence: "They <didn't watch> the movie at home. They <watched> it at the cinema.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " study", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/study-noah-1.webp",
            sentence: "Noah <didn't study> English. He stud<ied> Maths.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: "", className: "presence-yellow" }, { text: "" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " prepare", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/prepare-desert-emma-mother-13-1.webp",
            sentence: "Emma <didn't prepare> dessert. Her mother prepar<ed> it.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " listen", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/listenmusic-ella-13-1.webp",
            sentence: "Ella didn't listen rap music. She listen<ed> pop.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " clean", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/clean-not-ava-room-13-1.webp",
            sentence: "Ava <didn't clean> her room. She clean<ed> the animal shelter.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " walk", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/ride-bike-hannah-13-1.webp",
            sentence: "Hannah <didn't walk>. She cycled to school.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-negative-choice-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "After didn't, use the first form.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable2.webp",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/play-football-lucas-13-1.webp",
          segments: [
            { text: "Lucas didn't " },
            { options: ["play", "played"], answer: "play" },
            { text: " basketball. He " },
            { options: ["play", "played"], answer: "played" },
            { text: " football." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-piano-chloe-13-1.webp",
          segments: [
            { text: "Chloe didn't " },
            { options: ["play", "played"], answer: "play" },
            { text: " violin. She " },
            { options: ["play", "played"], answer: "played" },
            { text: " piano." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          segments: [
            { text: "They didn't " },
            { options: ["watch", "watched"], answer: "watch" },
            { text: " the movie at home. They " },
            { options: ["watch", "watched"], answer: "watched" },
            { text: " it at the cinema." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah didn't " },
            { options: ["study", "studied"], answer: "study" },
            { text: " English. He " },
            { options: ["study", "studied"], answer: "studied" },
            { text: " Maths." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/prepare-desert-emma-mother-13-1.webp",
          segments: [
            { text: "Emma didn't " },
            { options: ["prepare", "prepared"], answer: "prepare" },
            { text: " dessert. Her mother " },
            { options: ["prepare", "prepared"], answer: "prepared" },
            { text: " it." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/listenmusic-ella-13-1.webp",
          segments: [
            { text: "Ella didn't " },
            { options: ["listen", "listened"], answer: "listen" },
            { text: " rap music. She " },
            { options: ["listen", "listened"], answer: "listened" },
            { text: " pop." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-not-ava-room-13-1.webp",
          segments: [
            { text: "Ava didn't " },
            { options: ["clean", "cleaned"], answer: "clean" },
            { text: " her room. She " },
            { options: ["clean", "cleaned"], answer: "cleaned" },
            { text: " the animal shelter." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/ride-bike-hannah-13-1.webp",
          segments: [
            { text: "Hannah didn't " },
            { options: ["walk", "walked"], answer: "walk" },
            { text: ". She " },
            { options: ["cycle", "cycled"], answer: "cycled" },
            { text: " to school." }
          ]
        }
      ]
    },
    {
      id: "simplepast-question",
      presenceSlide: true,
      kicker: "Regular Verbs",
      title: "Question Sentences",
      imagePath: "images/simple-past-tense/ruletable.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "play", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            examples: [
              {
                imagePath: "images/common/play-basketball-daniel-1.webp",
                imageTopSentence: "Did Daniel <play> football after school",
                sentence: "No, he didn't. He play<ed> basketball."
              },
              {
                imagePath: "images/common/play-piano-chloe-13-1.webp",
                imageTopSentence: "Did Chloe <play> violin",
                sentence: "No, she didn't. She play<ed> piano yesterday."
              }
            ],
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "watch", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            imagePath: "images/common/watch-movie-olivia-mother-1.webp",
            imageTopSentence: "What did Olivia and her mother <do> last night",
            sentenceParts: [
              { text: "They " },
              { choices: ["watch", "watched"], answer: "watched" },
              { text: " a movie" }
            ],
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "study", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            imagePath: "images/common/study-noah-1.webp",
            imageTopSentence: "Did Noah <study> English yesterday",
            sentenceParts: [
              { text: "No, he didn't. He " },
              { choices: ["study", "studied"], answer: "studied" },
              { text: " Maths" }
            ],         
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did" }, { text: " + V1", className: "presence-yellow" }, { text: " " }]
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "cook", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            imagePath: "images/common/cook-emma-with-mother-13-1.webp",
              sentenceParts: [
              { text: "Did Emma " },
              { choices: ["cook", "cooked"], answer: "cook" },
              { text: " dinner yesterday Yes, she did." }
            ],         

              imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "listen", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            imagePath: "images/common/listenmusic-ella-13-1.webp",
            imageTopSentence:  "Did Ella <listen> to rap music",
            sentenceParts: [
              { choices: ["No,she didn't", "Yes,she did"], answer: "No,she didn't" },
              { text: " She listen<ed> Pop." }
            ],         

            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "clean", className: "presence-yellow" }, { text: "" }],
          overlayData: {
            imagePath: "images/simple-past-tense/clean-not-ava-room-13-1.webp",
            imageTopSentence: "Did Ava <clean> her room",
            sentenceParts: [
              { choices: ["No,she didn't", "Yes,she did"], answer: "No,she didn't" },
              
            ],         



            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "Did ... " }, { text: "help", className: "presence-yellow" }, { text: "" }],
          overlayData: {

            imagePath: "images/simple-past-tense/help-mother-hannah-13-1.webp",
            sentenceParts: [
              { text: "Did Hannah " },
              { choices: ["help", "helped"], answer: "help" },
              { text: " her mother yesterday Yes, she did." }
            ],         
            
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-mixed-choice-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "Questions, positives and negatives.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/prepare-desert-emma-mother-13-1.webp",
          segments: [
            { text: "Did Emma " },
            { options: ["prepare", "prepared"], answer: "prepare" },
            { text: " the dessert No, but she " },
            { options: ["watch", "watched"], answer: "watched" },
            { text: " her mother." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/travel-david-13-1.webp",
          segments: [
            { text: "What did David " },
            { options: ["do", "did"], answer: "do" },
            { text: " last weekend He " },
            { options: ["travel", "travelled"], answer: "travelled" },
            { text: " to his hometown." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/use-laptop-victoria-13-1.webp",
          segments: [
            { text: "Did Victoria " },
            { options: ["play", "played"], answer: "play" },
            { text: " a game No, but she " },
            { options: ["work", "worked"], answer: "worked" },
            { text: " on her website." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/solve-puzzles-zoe-13-1.webp",
          segments: [
            { text: "What did Zoe " },
            { options: ["do", "did"], answer: "do" },
            { text: " last Sunday She " },
            { options: ["solve", "solved"], answer: "solved" },
            { text: " some crossword puzzles." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-ava-shelter-13-1.webp",
          segments: [
            { text: "Did Ava " },
            { options: ["clean", "cleaned"], answer: "clean" },
            { text: " her room No, but she " },
            { options: ["clean", "cleaned"], answer: "cleaned" },
            { text: " the animal shelter." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/water-flowers-jack-13-1.webp",
          segments: [
            { text: "Did Jack " },
            { options: ["water", "watered"], answer: "water" },
            { text: " the vegetables No, but he " },
            { options: ["water", "watered"], answer: "watered" },
            { text: " the flowers." }
          ]
        }
      ]
    },
    {
      id: "simplepast-time-expressions-review",
      presenceSlide: true,
      kicker: "REVIEW",
      title: "EXPRESSIONS OF PAST TIME",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable_time.webp",
      showAllItems: true,
      listClass: "simple-past-time-review",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "yesterday", className: "presence-yellow" }],
          overlayData: {
            question: "yesterday",
            sentences: [
              "yesterday morning",
              "yesterday afternoon",
              "yesterday evening"
            ],
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "last", className: "presence-yellow" }],
          overlayData: {
            question: "last",
            sentences: [
              "last night",
              "last weekend",
              "last Sunday",
              "last month"
            ],
            overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ago", className: "presence-yellow" }],
          overlayData: {
            question: "ago",
            sentences: [
              "two days ago",
              "three weeks ago",
              "four years ago"
            ],
            overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-irregular-verbs",
      presenceSlide: true,
      kicker: "SIMPLE PAST TENSE - Irregular Verbs",
      title: "What did they do yesterday",
      imagePath: "images/simple-past-tense/ruletable4.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "eat -> ate" },],
          overlayData: {
            examples: [
              {
                imagePath: "images/simple-past-tense/family-dinner-emma-13-1.webp",
                sentence: "Emma <ate> Sushi yesterday evening."
              },
              
            ],
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "drink -> drank" },],
          overlayData: {
            imagePath: "images/common/read-book-mia-13-1.webp",
            sentence: "Mia <drank> hot cholocate after school yesterday",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "swim -> swam" }, ],
          overlayData: {
            imagePath: "images/simple-past-tense/swim-pool-benjamin-13-1.webp",
            sentence: "Benjamin swam in the pool yesterday afternoon.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "V2" },]
        },
        {
          kind: "category-list",
          parts: [{ text: "go -> went" }],
          overlayData: {
            imagePath: "images/common/travel-david-13-1.webp",
            sentence: "David went to his hometown two weeks ago.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "sing -> sang" },],
          overlayData: {
            imagePath: "images/common/sing-kareoke-ella-olivia-13-1.webp",
            imageTopSentence: "What did Ella <do> yesterday",
            sentenceParts: [
              { text: "Ella and Olivia" },
              { choices: ["sing", "sang"], answer: "sang" },
              { text: " songs on kareoke yesterday." },
            ],

            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "write -> wrote" },],
          overlayData: {
            imagePath: "images/common/write-diary-mia-13-1.webp",
              sentenceParts: [
              { text: "Mia" },
              { choices: ["write", "wrote"], answer: "wrote" },
              { text: " in her diary last night" },
            ],

            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ride -> rode" },],
          overlayData: {
            imagePath: "images/common/ride-bike-hannah-1.webp",
            sentence: "Hannah <rode> her bike last sunday.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "do -> did" },],
          overlayData: {
            imagePath: "images/common/study-noah-1.webp",
            sentence: "Noah <did> homework after school yesterday.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-irregular-choice-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "Choose the irregular past form.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable4.webp",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/family-dinner-emma-13-1.webp",
          segments: [
            { text: "Emma " },
            { options: ["ate", "eat", "eated"], answer: "ate" },
            { text: " sushi yesterday evening." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/read-book-mia-13-1.webp",
          segments: [
            { text: "Mia " },
            { options: ["drink", "dranked", "drank"], answer: "drank" },
            { text: " hot chocolate after school yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/swim-pool-benjamin-13-1.webp",
          segments: [
            { text: "Benjamin " },
            { options: ["swim", "swam", "swimmed"], answer: "swam" },
            { text: " in the pool yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/travel-david-13-1.webp",
          segments: [
            { text: "David " },
            { options: ["goed", "went", "go"], answer: "went" },
            { text: " to his hometown last weekend." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/sing-kareoke-ella-olivia-13-1.webp",
          segments: [
            { text: "Ella and Olivia " },
            { options: ["sang", "singed", "sing"], answer: "sang" },
            { text: " songs on kareoke yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/write-diary-mia-13-1.webp",
          segments: [
            { text: "Mia " },
            { options: ["write", "writed", "wrote"], answer: "wrote" },
            { text: " in her diary last night." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/ride-bike-hannah-1.webp",
          segments: [
            { text: "Hannah " },
            { options: ["rided", "ride", "rode"], answer: "rode" },
            { text: " her bike last Sunday." }
          ]
        }
      ]
    },
    {
      id: "simplepast-irregular-negative",
      presenceSlide: true,
      kicker: "Irregular Verbs",
      title: "Negative Sentences",
      imagePath: "images/simple-past-tense/ruletable4.webp",
      showAllItems: true,
      listClass: "ppt-comp-cross",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " eat", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/family-dinner-emma-13-1.webp",
            imageTopSentence:  "Did they <eat> out yesterday evening",
            sentence: "No, they <didn't eat> out. They ate at home.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " drink", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/read-book-mia-13-1.webp",
            imageTopSentence:  "Did Mia <drink> tea",

            sentence: "No, Mia <didn't drink> tea. She <drank> hot chocolate.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " swim", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/simple-past-tense/swim-pool-benjamin-13-1.webp",
            sentence: "Benjamin <didn't swim> in the sea. He swam in the pool yesterday afternoon.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " + V1", className: "presence-yellow" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " go", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/travel-david-13-1.webp",
            imageTopSentence:  "Where did David <go> last weekend",
            sentenceParts: [
              { text: "He" },
              { choices: ["goed", "went","go"], answer: "went" },
              { text: " to his hometown." }],
              imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " sing", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/sing-kareoke-ella-olivia-13-1.webp",
            sentence: "Ella and Olivia <didn't sing> at school. They sang songs on kareoke yesterday.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " write", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/write-diary-mia-13-1.webp",
            sentence: "Mia <didn't write> a story. She wrote in her diary last night.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " ride", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/ride-bike-hannah-1.webp",
            imageTopSentence:  "Did Hannah <ride> a scooter last Sunday",
            sentence: "No, Hannah <didn't ride> a scooter. She rode her bike.",
            imageAspect: "1/1", overlaySize: true
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "didn't" }, { text: " do", className: "presence-yellow" }],
          overlayData: {
            imagePath: "images/common/study-noah-1.webp",
            sentence: "Noah <didn't do> his homework at school. He did homework at home.",
            imageAspect: "1/1", overlaySize: true
          }
        }
      ]
    },
    {
      id: "simplepast-final-mixed-practice",
      presenceSlide: true,
      kicker: "FINAL PRACTICE",
      title: "Regular and irregular verbs.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/play-football-lucas-13-1.webp",
          segments: [
            { text: "Lucas " },
            { options: ["play", "playt", "played"], answer: "played" },
            { text: " football yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-piano-chloe-13-1.webp",
          segments: [
            { text: "Chloe " },
            { options: ["played", "plays", "playt"], answer: "played" },
            { text: " piano yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          segments: [
            { text: "Olivia and her mother " },
            { options: ["watched", "watch", "wotch"], answer: "watched" },
            { text: " a movie last night." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah " },
            { options: ["studyed", "studied", "study"], answer: "studied" },
            { text: " Maths yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/cook-emma-with-mother-13-1.webp",
          segments: [
            { text: "Emma " },
            { options: ["cook", "cooked", "cookked"], answer: "cooked" },
            { text: " dinner yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/listenmusic-ella-13-1.webp",
          segments: [
            { text: "Ella " },
            { options: ["listend", "listen", "listened"], answer: "listened" },
            { text: " music yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-ava-shelter-13-1.webp",
          segments: [
            { text: "Ava " },
            { options: ["cleaned", "clean", "cleanned"], answer: "cleaned" },
            { text: " the animal shelter yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/help-mother-hannah-13-1.webp",
          segments: [
            { text: "Hannah " },
            { options: ["help", "helped", "helpd"], answer: "helped" },
            { text: " her mother yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/play-football-lucas-13-1.webp",
          segments: [
            { text: "Lucas didn't " },
            { options: ["played", "play", "playd"], answer: "play" },
            { text: " basketball. He " },
            { options: ["play", "playd", "played"], answer: "played" },
            { text: " football." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-piano-chloe-13-1.webp",
          segments: [
            { text: "Chloe didn't " },
            { options: ["playd", "played", "play"], answer: "play" },
            { text: " violin. She " },
            { options: ["played", "play", "playd"], answer: "played" },
            { text: " piano." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          segments: [
            { text: "They didn't " },
            { options: ["watch", "watched", "watchd"], answer: "watch" },
            { text: " the movie at home. They " },
            { options: ["watch", "watchd", "watched"], answer: "watched" },
            { text: " it at the cinema." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah didn't " },
            { options: ["studied", "studyed", "study"], answer: "study" },
            { text: " English. He " },
            { options: ["studyed", "studied", "study"], answer: "studied" },
            { text: " Maths." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/prepare-desert-emma-mother-13-1.webp",
          segments: [
            { text: "Emma didn't " },
            { options: ["prepared", "prepare", "preparred"], answer: "prepare" },
            { text: " dessert. Her mother " },
            { options: ["prepare", "prepared", "preparred"], answer: "prepared" },
            { text: " it." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/listenmusic-ella-13-1.webp",
          segments: [
            { text: "Ella didn't " },
            { options: ["listened", "listend", "listen"], answer: "listen" },
            { text: " rap music. She " },
            { options: ["listen", "listened", "listend"], answer: "listened" },
            { text: " pop." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-not-ava-room-13-1.webp",
          segments: [
            { text: "Ava didn't " },
            { options: ["clean", "cleaned", "cleanned"], answer: "clean" },
            { text: " her room. She " },
            { options: ["cleanned", "clean", "cleaned"], answer: "cleaned" },
            { text: " the animal shelter." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/ride-bike-hannah-13-1.webp",
          segments: [
            { text: "Hannah didn't " },
            { options: ["walked", "walkd", "walk"], answer: "walk" },
            { text: ". She " },
            { options: ["cycled", "cycle", "cycleden"], answer: "cycled" },
            { text: " to school." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-basketball-daniel-1.webp",
          segments: [
            { text: "Did Daniel " },
            { options: ["played", "play", "playd"], answer: "play" },
            { text: " football after school No, he didn't. He " },
            { options: ["play", "played", "playd"], answer: "played" },
            { text: " basketball." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/play-piano-chloe-13-1.webp",
          segments: [
            { text: "Did Chloe " },
            { options: ["playd", "played", "play"], answer: "play" },
            { text: " violin No, she didn't. She " },
            { options: ["played", "play", "playd"], answer: "played" },
            { text: " piano yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          segments: [
            { text: "What did Olivia and her mother do last night They " },
            { options: ["watchd", "watched", "watch"], answer: "watched" },
            { text: " a movie." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Did Noah " },
            { options: ["studied", "study", "studyed"], answer: "study" },
            { text: " English yesterday No, he didn't. He " },
            { options: ["study", "studyed", "studied"], answer: "studied" },
            { text: " Maths." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/cook-emma-with-mother-13-1.webp",
          segments: [
            { text: "Did Emma " },
            { options: ["cooked", "cookked", "cook"], answer: "cook" },
            { text: " dinner yesterday Yes, she did." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/listenmusic-ella-13-1.webp",
          segments: [
            { text: "Did Ella listen to rap music " },
            { options: ["No, she didn't", "Yes, she did", "No, she did"], answer: "No, she didn't" },
            { text: ". She " },
            { options: ["listen", "listened", "listend"], answer: "listened" },
            { text: " to pop music." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-not-ava-room-13-1.webp",
          segments: [
            { text: "Did Ava " },
            { options: ["cleaned", "clean", "cleanned"], answer: "clean" },
            { text: " her room " },
            { options: ["Yes, she did", "No, she didn't", "No, she did"], answer: "No, she didn't" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/help-mother-hannah-13-1.webp",
          segments: [
            { text: "Did Hannah " },
            { options: ["help", "helpd", "helped"], answer: "help" },
            { text: " her mother yesterday Yes, she did." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/prepare-desert-emma-mother-13-1.webp",
          segments: [
            { text: "Did Emma " },
            { options: ["prepare", "prepared", "preparred"], answer: "prepare" },
            { text: " the dessert No, but she " },
            { options: ["watch", "watched", "watchd"], answer: "watched" },
            { text: " her mother." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/travel-david-13-1.webp",
          segments: [
            { text: "What did David " },
            { options: ["did", "do", "doed"], answer: "do" },
            { text: " last weekend He " },
            { options: ["travel", "travelled", "travelleded"], answer: "travelled" },
            { text: " to his hometown." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/use-laptop-victoria-13-1.webp",
          segments: [
            { text: "Did Victoria " },
            { options: ["played", "play", "playd"], answer: "play" },
            { text: " a game No, but she " },
            { options: ["workd", "work", "worked"], answer: "worked" },
            { text: " on her website." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/solve-puzzles-zoe-13-1.webp",
          segments: [
            { text: "What did Zoe " },
            { options: ["do", "did", "doed"], answer: "do" },
            { text: " last Sunday She " },
            { options: ["solved", "solve", "solvved"], answer: "solved" },
            { text: " some crossword puzzles." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/clean-ava-shelter-13-1.webp",
          segments: [
            { text: "Did Ava " },
            { options: ["cleaned", "cleanned", "clean"], answer: "clean" },
            { text: " her room No, but she " },
            { options: ["clean", "cleaned", "cleanned"], answer: "cleaned" },
            { text: " the animal shelter." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/water-flowers-jack-13-1.webp",
          segments: [
            { text: "Did Jack " },
            { options: ["waterd", "water", "watered"], answer: "water" },
            { text: " the vegetables No, but he " },
            { options: ["watered", "water", "waterd"], answer: "watered" },
            { text: " the flowers." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/family-dinner-emma-13-1.webp",
          segments: [
            { text: "Emma " },
            { options: ["ate", "eat", "eated"], answer: "ate" },
            { text: " sushi yesterday evening." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/read-book-mia-13-1.webp",
          segments: [
            { text: "Mia " },
            { options: ["drink", "dranked", "drank"], answer: "drank" },
            { text: " hot chocolate after school yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/swim-pool-benjamin-13-1.webp",
          segments: [
            { text: "Benjamin " },
            { options: ["swim", "swam", "swimmed"], answer: "swam" },
            { text: " in the pool yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/travel-david-13-1.webp",
          segments: [
            { text: "David " },
            { options: ["goed", "went", "go"], answer: "went" },
            { text: " to his hometown two weeks ago." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/sing-kareoke-ella-olivia-13-1.webp",
          segments: [
            { text: "Ella and Olivia " },
            { options: ["sang", "singed", "sing"], answer: "sang" },
            { text: " songs on kareoke yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/write-diary-mia-13-1.webp",
          segments: [
            { text: "Mia " },
            { options: ["write", "writed", "wrote"], answer: "wrote" },
            { text: " in her diary last night." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/ride-bike-hannah-1.webp",
          segments: [
            { text: "Hannah " },
            { options: ["rided", "ride", "rode"], answer: "rode" },
            { text: " her bike last Sunday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah " },
            { options: ["do", "did", "doed"], answer: "did" },
            { text: " homework after school yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/family-dinner-emma-13-1.webp",
          segments: [
            { text: "Did they " },
            { options: ["ate", "eated", "eat"], answer: "eat" },
            { text: " out yesterday evening No, they didn't " },
            { options: ["ate", "eat", "eated"], answer: "eat" },
            { text: " out. They " },
            { options: ["eat", "eated", "ate"], answer: "ate" },
            { text: " at home." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/read-book-mia-13-1.webp",
          segments: [
            { text: "Did Mia " },
            { options: ["drink", "drank", "dranked"], answer: "drink" },
            { text: " tea No, Mia didn't " },
            { options: ["drank", "drink", "dranked"], answer: "drink" },
            { text: " tea. She " },
            { options: ["drink", "drank", "dranked"], answer: "drank" },
            { text: " hot chocolate." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/simple-past-tense/swim-pool-benjamin-13-1.webp",
          segments: [
            { text: "Benjamin didn't " },
            { options: ["swam", "swim", "swimmed"], answer: "swim" },
            { text: " in the sea. He " },
            { options: ["swam", "swimmed", "swim"], answer: "swam" },
            { text: " in the pool yesterday afternoon." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/travel-david-13-1.webp",
          segments: [
            { text: "Where did David " },
            { options: ["went", "go", "goed"], answer: "go" },
            { text: " last weekend He " },
            { options: ["go", "goed", "went"], answer: "went" },
            { text: " to his hometown." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/sing-kareoke-ella-olivia-13-1.webp",
          segments: [
            { text: "Ella and Olivia didn't " },
            { options: ["sang", "sing", "singed"], answer: "sing" },
            { text: " at school. They " },
            { options: ["sing", "singed", "sang"], answer: "sang" },
            { text: " songs on kareoke yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/write-diary-mia-13-1.webp",
          segments: [
            { text: "Mia didn't " },
            { options: ["wrote", "writed", "write"], answer: "write" },
            { text: " a story. She " },
            { options: ["wrote", "write", "writed"], answer: "wrote" },
            { text: " in her diary last night." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/ride-bike-hannah-1.webp",
          segments: [
            { text: "Did Hannah " },
            { options: ["rode", "ride", "rided"], answer: "ride" },
            { text: " a scooter last Sunday No, Hannah didn't " },
            { options: ["rode", "rided", "ride"], answer: "ride" },
            { text: " a scooter. She " },
            { options: ["ride", "rode", "rided"], answer: "rode" },
            { text: " her bike." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/study-noah-1.webp",
          segments: [
            { text: "Noah didn't " },
            { options: ["did", "doed", "do"], answer: "do" },
            { text: " his homework at school. He " },
            { options: ["do", "did", "doed"], answer: "did" },
            { text: " homework at home." }
          ]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(simplePastTenseGrade7Function);

