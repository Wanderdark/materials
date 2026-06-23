const simplePresentDoYouLikeFunction = {
  id: "simple-present-do-you-like",
  grade: 5,
  unit: 1,
  title: "The Simple Present Tense: Do You Like ...?",
  description: "Talking about likes, dislikes, and favorite activities.",
  exercises: ["conversation-builder", "jumbled-sentences", "activity-visual-match"],
  sentences: [
    { id: "like-reading-question", focus: "QUESTION", referenceType: "DO YOU LIKE + -ING?", sentence: "Do you like reading books?", highlight: "Do you like", imagePath: "images/simple-present-like/01-reading-books.webp", visualBrief: "A child reading books during free time." },
    { id: "like-reading-answer", focus: "ANSWER", referenceType: "SHORT ANSWER", sentence: "Yes, I do.", highlight: "Yes", imagePath: "images/simple-present-like/02-yes-reading.webp", visualBrief: "A happy child answering yes while holding a book." },
    { id: "like-guitar-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy playing the guitar?", highlight: "Do you enjoy", imagePath: "images/simple-present-like/03-playing-guitar.webp", visualBrief: "A student playing a guitar." },
    { id: "like-guitar-answer", focus: "ANSWER", referenceType: "SHORT ANSWER", sentence: "No, I don't.", highlight: "No", imagePath: "images/simple-present-like/04-no-guitar.webp", visualBrief: "A student politely answering no beside a guitar." },
    { id: "like-piano", focus: "LIKES", referenceType: "I LIKE + -ING", sentence: "I like playing the piano.", highlight: "I like", imagePath: "images/simple-present-like/05-playing-piano.webp", visualBrief: "A student playing the piano." },
    { id: "favorite-club-question", focus: "QUESTION", referenceType: "FAVORITE CLUB", sentence: "What's your favorite school club?", highlight: "favorite", imagePath: "images/simple-present-like/06-school-club.webp", visualBrief: "Students looking at different school club posters." },
    { id: "chess-club-answer", focus: "ANSWER", referenceType: "FAVORITE CLUB", sentence: "My favorite club is Chess Club.", highlight: "Chess Club", imagePath: "images/simple-present-like/07-chess-club.webp", visualBrief: "Students playing chess in a school chess club." },
    { id: "like-chess", focus: "LIKES", referenceType: "I LIKE + -ING", sentence: "I like playing chess.", highlight: "I like", imagePath: "images/simple-present-like/07-chess-club.webp", visualBrief: "Students playing chess in a school chess club." },
    { id: "experiments-question", focus: "QUESTION", referenceType: "DO YOU LOVE + -ING?", sentence: "Do you love doing experiments?", highlight: "Do you love", imagePath: "images/simple-present-like/08-experiments.webp", visualBrief: "A student doing a simple science experiment." },
    { id: "solving-problems", focus: "ENJOYS", referenceType: "I ENJOY + -ING", sentence: "I enjoy solving problems.", highlight: "I enjoy", imagePath: "images/simple-present-like/09-solving-problems.webp", visualBrief: "A student happily solving a puzzle or a problem." },
    { id: "drawing-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy drawing pictures and painting?", highlight: "Do you enjoy", imagePath: "images/simple-present-like/10-drawing-painting.webp", visualBrief: "A child drawing pictures and painting." },
    { id: "football", focus: "LOVES", referenceType: "I LOVE + -ING", sentence: "I love playing football.", highlight: "I love", imagePath: "images/simple-present-like/11-playing-football.webp", visualBrief: "A child playing football." },
    { id: "singing-question", focus: "QUESTION", referenceType: "DO YOU LOVE + -ING?", sentence: "Do you love singing songs?", highlight: "Do you love", imagePath: "images/simple-present-like/12-singing-songs.webp", visualBrief: "A student singing a song." },
    { id: "swimming-question", focus: "QUESTION", referenceType: "DO YOU ENJOY + -ING?", sentence: "Do you enjoy swimming?", highlight: "Do you enjoy", imagePath: "images/simple-present-like/13-swimming.webp", visualBrief: "A child swimming in a pool." },
    { id: "water-sports", focus: "ENJOYS", referenceType: "I ENJOY + -ING", sentence: "I enjoy doing water sports.", highlight: "I enjoy", imagePath: "images/simple-present-like/14-water-sports.webp", visualBrief: "A child enjoying a water sport." }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(simplePresentDoYouLikeFunction);
