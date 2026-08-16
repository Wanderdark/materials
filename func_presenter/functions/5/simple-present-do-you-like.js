const simplePresentDoYouLikeFunction = {
  id: "simple-present-do-you-like",
  grade: 5,
  unit: 1,
  title: "The Simple Present Tense: Do You Like ...?",
  description: "Talking about likes, dislikes, and favorite activities.",
  exercises: ["conversation-builder", "jumbled-sentences", "activity-visual-match"],
  sentences: [
    { id: "like-reading-question", focus: "QUESTION", referenceType: "DO YOU LIKE + -ING?", sentence: "Do you like reading books?", highlight: "Do you like", imagePath: "images/simple-present-like/mia-reading-books.webp", visualBrief: "Mia reading books during free time." },
    { id: "like-reading-answer", focus: "ANSWER", referenceType: "SHORT ANSWER", sentence: "Yes, I do.", highlight: "Yes", imagePath: "images/simple-present-like/mia-reading-books2.webp", visualBrief: "A happy child answering yes while holding a book." },
    { id: "like-guitar-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy playing the guitar?", highlight: "Do you enjoy", imagePath: "images/simple-present-like/03-playing-guitar.webp", visualBrief: "A student playing a guitar." },
    { id: "like-guitar-answer", focus: "ANSWER", referenceType: "SHORT ANSWER", sentence: "No, I don't.", highlight: "No", imagePath: "images/simple-present-like/04-no-guitar.webp", visualBrief: "A student politely answering no beside a guitar." },
    { id: "like-piano", focus: "LIKES", referenceType: "I LIKE + -ING", sentence: "I like playing the piano.", highlight: "I like", imagePath: "images/simple-present-like/chloe-playing-piano.webp", visualBrief: "Chloe playing the piano." },
    { id: "favorite-club-question", focus: "QUESTION", referenceType: "FAVORITE CLUB", sentence: "What's your favorite school club?", highlight: "favorite", imagePath: "images/simple-present-like/06-school-club.webp", visualBrief: "Students looking at different school club posters." },
    { id: "chess-club-answer", focus: "ANSWER", referenceType: "FAVORITE CLUB", sentence: "My favorite club is Chess Club.", highlight: "Chess Club", imagePath: "images/simple-present-like/07-chess-club.webp", visualBrief: "Students playing chess in a school chess club." },
    { id: "like-chess", focus: "LIKES", referenceType: "I LIKE + -ING", sentence: "I like playing chess.", highlight: "I like", imagePath: "images/simple-present-like/noah-victoria-chess.webp", visualBrief: "Noah and Victoria playing chess in a school chess club." },
    { id: "experiments-question", focus: "QUESTION", referenceType: "DO YOU LOVE + -ING?", sentence: "Do you love doing experiments?", highlight: "Do you love", imagePath: "images/simple-present-like/emma-experiment.webp", visualBrief: "Emma is doing a simple science experiment." },
    { id: "solving-problems", focus: "ENJOYS", referenceType: "I ENJOY + -ING", sentence: "I enjoy solving problems.", highlight: "I enjoy", imagePath: "images/common/solve-puzzles-noah-1.webp", visualBrief: "Noah happily solving a puzzle or a problem." },
    { id: "drawing-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy drawing pictures and painting?", highlight: "Do you enjoy", imagePath: "images/common/paint-olivia-1.webp", visualBrief: "Olivia drawing pictures and painting." },
    { id: "football", focus: "LOVES", referenceType: "I LOVE + -ING", sentence: "I love playing football.", highlight: "I love", imagePath: "images/simple-present-like/lucas-playing-football.webp", visualBrief: "A child playing football." },
    { id: "singing-question", focus: "QUESTION", referenceType: "DO YOU LOVE + -ING?", sentence: "Do you love singing songs?", highlight: "Do you love", imagePath: "images/simple-present-like/ella-sing-songs.webp", visualBrief: "A student singing a song." },
    { id: "swimming-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy swimming?", highlight: "Do you enjoy", imagePath: "images/simple-present-like/benjamin-swimming.webp", visualBrief: "Benjamin swimming in a pool." },
    { id: "water-sports", focus: "ENJOYS", referenceType: "I ENJOY + -ING", sentence: "I enjoy doing water sports.", highlight: "I enjoy", imagePath: "images/simple-present-like/14-water-sports.webp", visualBrief: "A child enjoying a water sport." },
    {
      id: "do-you-like-character-hub",
      presenceSlide: true,
      focus: "CHOOSE ONE",
      kicker: "OUR CLASSROOM UNIVERSE",
      title: "Click a character.",
      compactTitle: true,
      imagePath: "images/simple-present-like/collage-photo.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Characters and their favorite activities.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "BENJAMIN" }],
          nameTag: { x: 150, y: 30, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/simple-present-like/benjamin-swimming.webp", sentence: "Benjamin <loves> swimming." },
              { question: "HOBBY", imagePath: "images/simple-present-like/benjamin-riding-scooter.webp", sentence: "Benjamin <likes> riding his scooter." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "OLIVIA" }],
          nameTag: { x: 510, y: 170, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "HOBBY", imagePath: "images/common/paint-olivia-1.webp", sentence: "Olivia <enjoys> painting." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "LUCAS" }],
          nameTag: { x: 165, y: 145, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/simple-present-like/lucas-playing-football.webp", sentence: "Lucas <loves> playing football." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHLOE" }],
          nameTag: { x: 250, y: 30, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "HOBBY", imagePath: "images/simple-present-like/chloe-playing-piano.webp", sentence: "Chloe <likes> playing the piano." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHOOSE\nONE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "NOAH" }],
          nameTag: { x: 410, y: 155, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "HOBBY", imagePath: "images/common/solve-puzzles-noah-1.webp", sentence: "Noah <likes> solving problems." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "MIA" }],
          nameTag: { x: 290, y: 155, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "HOBBY", imagePath: "images/simple-present-like/mia-reading-books.webp", sentence: "Mia <likes> reading books." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ELLA" }],
          nameTag: { x: 375, y: 40, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "SIGNATURE ACTIVITY", imagePath: "images/simple-present-like/ella-sing-songs.webp", sentence: "Ella <loves> singing songs." }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "EMMA" }],
          nameTag: { x: 480, y: 40, baseWidth: 650, baseHeight: 370 },
          overlayData: {
            overlaySize: true,
            steps: [
              { question: "HOBBY", imagePath: "images/simple-present-like/emma-experiment.webp", sentence: "Emma <enjoys> doing experiments." }
            ]
          }
        }
      ]
    },
    {
      id: "school-life-chloe-emma-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_chloe_emma.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ text: "Do you like " }, { answer: "doing", choices: ["do", "doing"] }, { text: " science experiments?" }] },
          { speaker: "EMMA", parts: [{ text: "Yes I do, they're exciting." }] }
        ]
      }
    },
    {
      id: "school-life-noah-victoria-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_noah_victoria.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "Do you like " }, { answer: "solving", choices: ["solve", "solving"] }, { text: " puzzles?" }] },
          { speaker: "VICTORIA", parts: [{ text: "Yes, I " }, { answer: "solve", choices: ["solve", "solving"] }, { text: " one every day." }] }
        ]
      }
    },
    {
      id: "school-life-ella-olivia-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_ella_olivia.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Do you like " }, { answer: "drawing", choices: ["drawing", "draw"] }, { text: " after school?" }] },
          { speaker: "OLIVIA", parts: [{ text: "Yes, but I like " }, { answer: "taking", choices: ["take", "taking"] }, { text: " photos more." }] }
        ]
      }
    },
    {
      id: "school-life-lucas-daniel-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_lucas_daniel.mp4",
        lines: [
          { speaker: "LUCAS", parts: [{ text: "Do you like " }, { answer: "playing", choices: ["play", "playing"] }, { text: " basketball?" }] },
          { speaker: "DANIEL", parts: [{ text: "Yes, but table tennis is my " }, { answer: "favorite", choices: ["like", "favorite"] }, { text: "." }] }
        ]
      }
    },
    {
      id: "introduce-olivia-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_olivia.mp4",
        lines: [
          { speaker: "OLIVIA", parts: [{ text: "I love " }, { answer: "taking", choices: ["take", "taking"] }, { text: " photos, I also " }, { answer: "enjoy", choices: ["enjoy", "hate"] }, { text: " painting and art." }] }
        ]
      }
    },
    {
      id: "introduce-emma-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_emma.mp4",
        lines: [
          { speaker: "EMMA", parts: [{ text: "I " }, { answer: "love", choices: ["don't like", "love"] }, { text: " cooking and baking, I enjoy " }, { answer: "doing", choices: ["do", "doing"] }, { text: " science experiments and helping my friends." }] }
        ]
      }
    },
    {
      id: "introduce-david-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_david.mp4",
        lines: [
          { speaker: "DAVID", parts: [{ text: "I love " }, { answer: "travelling", choices: ["travel", "travelling"] }, { text: " and discovering new places, I " }, { answer: "enjoy", choices: ["don't like", "enjoy"] }, { text: " camping with my friends." }] }
        ]
      }
    },
    {
      id: "introduce-ethan-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_ethan.mp4",
        lines: [
          { speaker: "ETHAN", parts: [{ text: "I " }, { answer: "enjoy", choices: ["hate", "enjoy"] }, { text: " playing the violin and " }, { answer: "listening", choices: ["listen", "listening"] }, { text: " to classical music, I also love playing golf." }] }
        ]
      }
    },
    {
      id: "introduce-jack-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_jack.mp4",
        lines: [
          { speaker: "JACK", parts: [{ text: "I love gardening, I enjoy " }, { answer: "fishing", choices: ["swimming", "fishing"] }, { text: " and hiking." }] }
        ]
      }
    },
    {
      id: "introduce-lucas-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_lucas.mp4",
        lines: [
          { speaker: "LUCAS", parts: [{ text: "I love " }, { answer: "playing", choices: ["play", "playing"] }, { text: " football, I also enjoy " }, { answer: "swimming", choices: ["hiking", "swimming"] }, { text: "." }] }
        ]
      }
    },
    {
      id: "introduce-noah-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_noah.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "I love " }, { answer: "studying", choices: ["studying", "study"] }, { text: " and learning new things, I enjoy playing " }, { answer: "chess", choices: ["football", "chess"] }, { text: " and solving puzzles." }] }
        ]
      }
    },
    {
      id: "introduce-family-chloe-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_family_chloe.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ text: "My mum is Camille, she’s a baker, and she " }, { answer: "loves", choices: ["love", "loves"] }, { text: " growing flowers. My dad is Julien, he’s an interior designer, and he " }, { answer: "loves", choices: ["love", "loves"] }, { text: " visiting museums." }] }
        ]
      }
    },
    {
      id: "introduce-family-ella-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_family_ella.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "My mum is Charlotte, she’s a music teacher and " }, { answer: "loves", choices: ["loves", "love"] }, { text: " playing the piano. My dad is Liam, he’s a radio presenter and " }, { answer: "loves", choices: ["love", "loves"] }, { text: " listening to music." }] }
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(simplePresentDoYouLikeFunction);
