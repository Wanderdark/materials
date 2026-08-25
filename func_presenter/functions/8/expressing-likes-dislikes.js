const expressingLikesDislikesGrade8Function = {
  id: "expressing-likes-dislikes",
  grade: 8,
  unit: 2,
  title: "Expressing Likes and Dislikes",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "likes-and-interests-expressions",
      likesDislikesIntro: {
        heading: "WE USE THESE EXPRESSIONS",
        subheading: "TO TELL ABOUT OUR LIKES AND INTERESTS",
        items: [
          {
            key: "like-love",
            label: "like",
            imagePath: "images/common/ride-bike-hannah-1.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/hannah.webp",
            sentenceParts: [
              { text: "I like " },
              { text: "cycling", className: "likes-dislikes-detail-white" },
              { text: " in the nature." }
            ]
          },
          {
            key: "love",
            label: "love",
            imagePath: "images/expressing-likes-dislikes/play_soccer.webp",
            portraitPaths: [
              "../olivias_movie_memories/assets/portraits/lucas.webp",
              "../olivias_movie_memories/assets/portraits/ethan.webp"
            ],
            heartCount: 3,
            sentenceParts: [
              { text: "They " },
              { text: "love", className: "likes-dislikes-detail-white" },
              { text: " playing soccer." }
            ]
          },
          {
            key: "enjoy",
            label: "enjoy",
            imagePath: "images/common/swim-benjamin-1.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/benjamin.webp",
            sentenceParts: [
              { text: "Benjamin " },
              { text: "enjoys", className: "likes-dislikes-detail-white" },
              { text: " swimming." }
            ]
          },
          {
            key: "interested-in",
            label: "interested in",
            videoPath: "https://media.adilhoca.com/video/5_personal_life_chloe_emma.mp4",
            videoStartTime: 4.5,
            portraitPath: "../olivias_movie_memories/assets/portraits/luna.webp",
            wideBurst: true,
            sentenceParts: [
              { text: "Luna is " },
              { text: "interested in", className: "likes-dislikes-detail-white" },
              { text: " playing the piano." }
            ]
          },
          {
            key: "crazy-about",
            label: "crazy about",
            imagePath: "images/expressing-likes-dislikes/snowtubing.webp",
            toggleVideoPath: "https://media.adilhoca.com/video/6_life_in_the_city_ella_emma.mp4",
            portraitPaths: [
              "../olivias_movie_memories/assets/portraits/ella.webp",
              "../olivias_movie_memories/assets/portraits/emma.webp"
            ],
            heartCount: 4,
            sentenceParts: [{ text: "They are crazy about snowtubing." }]
          },
          {
            key: "fond-of",
            label: "fond of",
            imagePath: "images/expressing-likes-dislikes/olivia_stylish.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/olivia.webp",
            heartCount: 3,
            sentenceParts: [
              { text: "She is trendy." },
              { text: "She is ", lineBreakBefore: true },
              { text: "fond of", className: "likes-dislikes-detail-white" },
              { text: " wearing fashionable clothes." }
            ]
          },
          {
            key: "keen-on",
            label: "keen on",
            imagePath: "images/expressing-likes-dislikes/hannah_outdoor.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/hannah.webp",
            sentenceParts: [
              { text: "Hannah is " },
              { text: "keen on", className: "likes-dislikes-detail-white" },
              { text: " outdoor activities." }
            ]
          },
          {
            key: "good-at",
            label: "good at",
            imagePath: "images/common/skiing-daniel-1.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/daniel.webp",
            sentenceParts: [{ text: "He is good at skiing." }]
          }
        ]
      }
    },
    {
      id: "dislikes-expressions",
      likesDislikesIntro: {
        theme: "dislikes",
        heading: "WE USE THESE EXPRESSIONS",
        subheading: "TO TELL ABOUT OUR DISLIKES",
        items: [
          {
            key: "dont-like",
            label: "don't like",
            burstLabel: "dislike",
            imagePath: "images/expressing-likes-dislikes/zoe_loud.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/zoe.webp",
            heartEmoji: "💔",
            sentenceParts: [
              { text: "I " },
              { text: "don't like", className: "likes-dislikes-detail-white" },
              { text: " listening to loud music." },
              { text: "Zoe is ", lineBreakBefore: true },
              { text: "not into", className: "likes-dislikes-detail-white" },
              { text: " loud music." }
            ]
          },
          {
            key: "dislike",
            label: "dislike",
            videoPath: "https://media.adilhoca.com/video/6_life_in_the_city_emma_hannah3.mp4",
            portraitPath: "../olivias_movie_memories/assets/portraits/emma.webp",
            heartEmoji: "💔",
            sentenceParts: [
              { text: "Emma " },
              { text: "dislikes", className: "likes-dislikes-detail-white" },
              { text: " fast rides." }
            ]
          },
          {
            key: "bad-at",
            label: "bad at",
            videoPath: "https://media.adilhoca.com/video/5_fun_jack.mp4",
            portraitPath: "../olivias_movie_memories/assets/portraits/jack.webp",
            heartEmoji: "💔",
            sentenceParts: [
              { text: "Jack is " },
              { text: "bad at", className: "likes-dislikes-detail-white" },
              { text: " playing football." },
              { text: "He is ", lineBreakBefore: true },
              { text: "not good at", className: "likes-dislikes-detail-white" },
              { text: " soccer." }
            ]
          },
          {
            key: "hate",
            label: "hate",
            videoPath: "https://media.adilhoca.com/video/fun_ella_sunny3.mp4",
            portraitPath: "../olivias_movie_memories/assets/portraits/ella.webp",
            heartEmoji: "💔",
            heartCount: 3,
            sentenceParts: [
              { text: "Ella " },
              { text: "hates", className: "likes-dislikes-detail-white" },
              { text: " getting up early." }
            ]
          },
          {
            key: "cant-stand",
            label: "can't stand",
            imagePath: "images/expressing-likes-dislikes/noah_queue.webp",
            portraitPath: "../olivias_movie_memories/assets/portraits/noah.webp",
            heartEmoji: "💔",
            heartCount: 4,
            sentenceParts: [{ text: "I can't stand waiting in queues." }]
          }
        ]
      }
    },
    {
      id: "likes-dislikes-popup-practice",
      likesDislikesPopup: {
        heading: "CHOOSE THE CORRECT EXPRESSION",
        items: [
          { imagePath: "images/common/ride-bike-hannah-1.webp", alt: "Hannah cycling", parts: ["Hannah ", { choices: ["likes", "hates"], answer: "likes" }, " cycling. She always rides her bike to school."] },
          { imagePath: "images/expressing-likes-dislikes/play_soccer.webp", alt: "Lucas playing football", parts: ["Lucas ", { choices: ["loves", "hates"], answer: "loves" }, " playing soccer. He usually plays football after school."] },
          { imagePath: "images/common/swim-benjamin-1.webp", alt: "Benjamin swimming", parts: ["Benjamin ", { choices: ["can't stand", "enjoys"], answer: "enjoys" }, " swimming. He has a swimming course twice a week."] },
          { imagePath: "images/expressing-likes-dislikes/chloe_keyboard.webp", alt: "Chloe playing the keyboard", parts: ["Chloe is ", { choices: ["interested in", "bad at"], answer: "interested in" }, " playing the piano. She plays keyboard in Ella's band."] },
          { imagePath: "images/expressing-likes-dislikes/snowtubing.webp", alt: "Ella snowtubing", parts: ["Ella is ", { choices: ["crazy about", "not into"], answer: "crazy about" }, " snowtubing. She loves winter sports."] },
          { imagePath: "images/expressing-likes-dislikes/emma_fastride.webp", alt: "A fast ride", parts: ["Emma is ", { choices: ["not keen on", "loves"], answer: "not keen on" }, " fast rides. She is afraid of them."] },
          { imagePath: "images/expressing-likes-dislikes/olivia_stylish.webp", alt: "Olivia wearing fashionable clothes", parts: ["Olivia is ", { choices: ["hates", "fond of"], answer: "fond of" }, " wearing fashionable clothes. She likes being stylish."] },
          { imagePath: "images/expressing-likes-dislikes/hannah_outdoor.webp", alt: "Hannah outdoors", parts: ["Hannah is ", { choices: ["keen on", "not into"], answer: "keen on" }, " outdoor activities. She likes hiking, climbing and camping."] },
          { imagePath: "images/common/skiing-daniel-1.webp", alt: "Daniel skiing", parts: ["Daniel is ", { choices: ["good at", "bad at"], answer: "good at" }, " skiing. He always goes skiing on winter holidays."] },
          { imagePath: "images/expressing-likes-dislikes/zoe_loud.webp", alt: "Zoe listening to music", parts: ["Zoe ", { choices: ["likes", "doesn't like"], answer: "doesn't like" }, " listening to loud music. She is ", { choices: ["into", "not into"], answer: "not into" }, " it."] },
          { imagePath: "images/expressing-likes-dislikes/jack_soccer.webp", alt: "Jack playing football", parts: ["Jack is ", { choices: ["bad at", "good at"], answer: "bad at" }, " playing football. He hates soccer."] },
          { imagePath: "images/expressing-likes-dislikes/ella_hate_early.webp", alt: "Ella sleeping", parts: ["Ella ", { choices: ["loves", "hates"], answer: "hates" }, " getting up early. She loves sleeping."] },
          { imagePath: "images/expressing-likes-dislikes/noah_queue.webp", alt: "Noah waiting in a queue", parts: ["Noah ", { choices: ["enjoys", "can't stand"], answer: "can't stand" }, " waiting in queues."] }
        ]
      }
    },
    {
      id: "likes-dislikes-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        questions: [
          {
        lines: [
          { speaker: "Ella", text: "What about going to the rock concert this Saturday?" },
          { speaker: "Zoe", text: "I'm sorry, but" }
        ],
        answer: "I can't stand loud music.",
        choices: [
          "I can't stand loud music.",
          "I love live rock concerts.",
          "It sounds like an exciting plan.",
          "I enjoy loud music."
        ]
          },
          {
        lines: [
          { speaker: "Hannah", text: "What do you think about cycling?" },
          { speaker: "Zoe", text: "I know you often go cycling, but ____." }
        ],
        answer: "I'm not into it.",
        choices: [
          "I'm not into it.",
          "It is my favourite activity.",
          "They don't have bikes.",
          "I enjoy cycling with them."
        ]
          },
          {
        lines: [
          { speaker: "Daniel", text: "We're going to try snowboarding this weekend. Would you like to join us?" },
          { speaker: "Noah", text: "_____. I'm not really into winter sports." }
        ],
        answer: "I think it's ridiculous.",
        choices: [
          "That would be great.",
          "I think it's ridiculous.",
          "It's my favourite activity.",
          "Great idea."
        ]
          },
          {
        lines: [
          { speaker: "Zoe", text: "Ella, please don't play that loud song again and again. _____. It's unbearable." }
        ],
        answer: "I really can't stand it.",
        choices: [
          "I know it is good.",
          "I really can't stand it.",
          "I think it is impressive.",
          "I love listening to music."
        ]
          },
          {
        lines: [
          { speaker: "Chloe", text: "Olivia, you always choose such stylish outfits." },
          { speaker: "Olivia", text: "Thanks. I'm _____ wearing fashionable clothes." }
        ],
        answer: "fond of",
        choices: ["bad at", "fond of", "not into", "crazy about"]
          },
          {
        lines: [
          { speaker: "Daniel", text: "The school football team is looking for new players, Jack." },
          { speaker: "Jack", text: "I don't want to join. I'm _____ playing football." }
        ],
        answer: "bad at",
        choices: ["keen on", "interested in", "bad at", "good at"]
          },
          {
        lines: [
          { speaker: "Lucas", text: "Would you like to go swimming after school, Benjamin?" },
          { speaker: "Benjamin", text: "Sure. I _____ swimming." }
        ],
        answer: "enjoy",
        choices: ["enjoy", "can't stand", "hate", "am bad at"]
          },
          {
        lines: [
          { speaker: "Hannah", text: "Would you like to join my hiking trip this weekend, Mia?" },
          { speaker: "Mia", text: "No, thanks. I'm _____ outdoor activities." }
        ],
        answer: "not into",
        choices: ["fond of", "not into", "crazy about", "good at"]
          },
          {
        lines: [
          { speaker: "Emma", text: "Why is Ella so excited about the snow today?" },
          { speaker: "Chloe", text: "She is _____ snowtubing." }
        ],
        answer: "crazy about",
        choices: ["bad at", "not into", "crazy about", "keen on"]
          },
          {
        lines: [
          { speaker: "David", text: "Ava, why do you always bring your binoculars on camping trips?" },
          { speaker: "Ava", text: "Because I'm _____ birdwatching." }
        ],
        answer: "fond of",
        choices: ["fond of", "bad at", "not into", "afraid of"]
          },
          {
        lines: [
          { speaker: "Daniel", text: "Benjamin, are you joining the skateboarding contest?" },
          { speaker: "Benjamin", text: "No, thanks. I _____ being in stressful competitions." }
        ],
        answer: "can't stand",
        choices: ["enjoy", "can't stand", "am good at", "am interested in"]
          },
          {
        lines: [
          { speaker: "Olivia", text: "Chloe, are you practising the piano after school?" },
          { speaker: "Chloe", text: "Yes. I'm _____ learning new pieces." }
        ],
        answer: "interested in",
        choices: ["bad at", "interested in", "not into", "tired of"]
          },
          {
        lines: [
          { speaker: "Ethan", text: "Daniel, would you like to go snowboarding this weekend?" },
          { speaker: "Daniel", text: "Definitely. I'm _____ winter sports." }
        ],
        answer: "keen on",
        choices: ["keen on", "bad at", "afraid of", "not into"]
          },
          {
        lines: [
          { speaker: "Jack", text: "David, why don't you trust that boy?" },
          { speaker: "David", text: "Because I _____ people who tell lies." }
        ],
        answer: "don't like",
        choices: ["love", "don't like", "am good at", "am interested in"]
          },
          {
        lines: [
          { speaker: "Mia", text: "Ella, are you ready for school at seven o'clock?" },
          { speaker: "Ella", text: "Not really. I _____ getting up early." }
        ],
        answer: "hate",
        choices: ["hate", "enjoy", "am fond of", "am good at"]
          },
          {
        lines: [
          { speaker: "Hannah", text: "Emma, would you like to try the roller coaster with me?" },
          { speaker: "Emma", text: "No, thanks. I'm _____ fast rides." }
        ],
        answer: "not into",
        choices: ["crazy about", "fond of", "not into", "good at"]
          },
          {
        lines: [
          { speaker: "Lucas", text: "Ethan, your rhythm is amazing!" },
          { speaker: "Ethan", text: "Thanks. I'm _____ playing the drums." }
        ],
        answer: "good at",
        choices: ["good at", "bad at", "not into", "tired of"]
          },
          {
        lines: [
          { speaker: "Benjamin", text: "Lucas, do you want to go swimming after school?" },
          { speaker: "Lucas", text: "Of course. I _____ swimming." }
        ],
        answer: "love",
        choices: ["can't stand", "love", "am bad at", "don't like"]
          },
          {
        lines: [
          { speaker: "Mia", text: "Hannah, why are you planning another hiking trip?" },
          { speaker: "Hannah", text: "Because I'm _____ hiking in the mountains." }
        ],
        answer: "crazy about",
        choices: ["not into", "crazy about", "bad at", "afraid of"]
          }
        ]
      }
    },
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(expressingLikesDislikesGrade8Function);
