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
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(simplePresentDoYouLikeFunction);
