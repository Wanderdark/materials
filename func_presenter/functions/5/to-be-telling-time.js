const toBeTellingTimeFunction = {
  id: "to-be-telling-time",
  grade: 5,
  unit: 2,
  title: "To Be: Telling the Time",
  description: "",
  exercises: ["time-setter", "timetable-choice", "timetable-true-false"],
  sentences: [
    { id: "one-oclock", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "1:00", sentence: "It is one o'clock.", question: "What time is it?", highlight: "one o'clock", highlightClass: "time-full", badgeClass: "time-full", imagePath: "images/telling-time/1-oclock.webp", visualBrief: "An analog clock showing one o'clock." },
    { id: "two-oclock", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "2:00", sentence: "It is two o'clock.", highlight: "two o'clock", highlightClass: "time-full", badgeClass: "time-full", imagePath: "images/telling-time/2-oclock.webp", visualBrief: "An analog clock showing two o'clock." },
    { id: "three-oclock", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "3:00", sentence: "It is three o'clock.", highlight: "three o'clock", highlightClass: "time-full", badgeClass: "time-full", imagePath: "images/telling-time/3-oclock.webp", visualBrief: "An analog clock showing three o'clock." },
    { id: "four-oclock-prompt", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "4:00", timePrompt: true, answerSentence: "It is four o'clock." },
    { id: "five-oclock-prompt", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "5:00", timePrompt: true, answerSentence: "It is five o'clock." },
    { id: "six-oclock-prompt", focus: "O'CLOCK", referenceType: "FULL HOUR", digitalTime: "6:00", timePrompt: true, answerSentence: "It is six o'clock." },
    { id: "half-past-four", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "4:30", sentence: "It is half past four.", question: "What time is it?", highlight: "half past four", highlightClass: "time-half", badgeClass: "time-half", imagePath: "images/telling-time/halfpast4.webp", visualBrief: "An analog clock showing half past four." },
    { id: "half-past-five", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "5:30", sentence: "It is half past five.", highlight: "half past five", highlightClass: "time-half", badgeClass: "time-half", imagePath: "images/telling-time/halfpast5.webp", visualBrief: "An analog clock showing half past five." },
    { id: "half-past-six", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "6:30", sentence: "It is half past six.", highlight: "half past six", highlightClass: "time-half", badgeClass: "time-half", imagePath: "images/telling-time/halfpast6.webp", visualBrief: "An analog clock showing half past six." },
    { id: "half-past-seven-prompt", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "7:30", timePrompt: true, answerSentence: "It is half past seven." },
    { id: "half-past-eight-prompt", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "8:30", timePrompt: true, answerSentence: "It is half past eight." },
    { id: "half-past-nine-prompt", focus: "HALF PAST", referenceType: "HALF TIME", digitalTime: "9:30", timePrompt: true, answerSentence: "It is half past nine." },

    { id: "quarter-past-seven", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "7:15", sentence: "It is quarter past seven.", question: "What time is it?", highlight: "quarter past seven", highlightClass: "time-quarter", badgeClass: "time-quarter", imagePath: "images/telling-time/quarterpast7.webp", visualBrief: "An analog clock showing quarter past seven." },
    { id: "quarter-past-eight", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "8:15", sentence: "It is quarter past eight.", highlight: "quarter past eight", highlightClass: "time-quarter", badgeClass: "time-quarter", imagePath: "images/telling-time/quarterpast8.webp", visualBrief: "An analog clock showing quarter past eight." },
    { id: "quarter-past-nine", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "9:15", sentence: "It is quarter past nine.", highlight: "quarter past nine", highlightClass: "time-quarter", badgeClass: "time-quarter", imagePath: "images/telling-time/quarterpast9.webp", visualBrief: "An analog clock showing quarter past nine." },
    { id: "quarter-past-ten-prompt", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "10:15", timePrompt: true, answerSentence: "It is quarter past ten." },
    { id: "quarter-past-eleven-prompt", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "11:15", timePrompt: true, answerSentence: "It is quarter past eleven." },
    { id: "quarter-past-twelve-prompt", focus: "QUARTER PAST", referenceType: "QUARTER HOUR", digitalTime: "12:15", timePrompt: true, answerSentence: "It is quarter past twelve." },

    { id: "five-past-two", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "2:05", sentence: "It is five past two.", question: "What time is it?", highlight: "five past two", highlightClass: "time-past", badgeClass: "time-past", imagePath: "images/telling-time/5past2.webp", visualBrief: "An analog clock showing five past two." },
    { id: "ten-past-three", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "3:10", sentence: "It is ten past three.", highlight: "ten past three", highlightClass: "time-past", badgeClass: "time-past", imagePath: "images/telling-time/10past3.webp", visualBrief: "An analog clock showing ten past three." },
    { id: "twenty-past-four", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "4:20", sentence: "It is twenty past four.", highlight: "twenty past four", highlightClass: "time-past", badgeClass: "time-past", imagePath: "images/telling-time/20past4.webp", visualBrief: "An analog clock showing twenty past four." },
    { id: "five-past-five-prompt", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "5:05", timePrompt: true, answerSentence: "It is five past five." },
    { id: "ten-past-six-prompt", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "6:10", timePrompt: true, answerSentence: "It is ten past six." },
    { id: "twenty-past-seven-prompt", focus: "PAST", referenceType: "MINUTES PAST", digitalTime: "7:20", timePrompt: true, answerSentence: "It is twenty past seven." },

    { id: "quarter-to-five", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "4:45", sentence: "It is quarter to five.", question: "What time is it?", highlight: "quarter to five", highlightClass: "time-to", badgeClass: "time-to", imagePath: "images/telling-time/quarterto5.webp", visualBrief: "An analog clock showing quarter to five." },
    { id: "quarter-to-six", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "5:45", sentence: "It is quarter to six.", highlight: "quarter to six", highlightClass: "time-to", badgeClass: "time-to", imagePath: "images/telling-time/quarterto6.webp", visualBrief: "An analog clock showing quarter to six." },
    { id: "quarter-to-four", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "3:45", sentence: "It is quarter to four.", highlight: "quarter to four", highlightClass: "time-to", badgeClass: "time-to", imagePath: "images/telling-time/quarterto4.webp", visualBrief: "An analog clock showing quarter to four." },
    { id: "quarter-to-twelve-prompt", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "11:45", timePrompt: true, answerSentence: "It is quarter to twelve." },
    { id: "quarter-to-two-prompt", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "1:45", timePrompt: true, answerSentence: "It is quarter to two." },
    { id: "quarter-to-three-prompt", focus: "QUARTER TO", referenceType: "QUARTER TO", digitalTime: "2:45", timePrompt: true, answerSentence: "It is quarter to three." },

    {
      id: "classroom-life-chloe-ella-time-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_chloe_ella.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Is it " }, { answer: "2:00", choices: ["2:00", "2:30"] }, { text: " already?" }] },
          { speaker: "CHLOE", parts: [{ text: "Yes, it is, Music starts now." }] }
        ]
      }
    },
    {
      id: "classroom-life-hannah-mia-time-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_hannah_mia.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "What time is it now?" }] },
          { speaker: "MIA", parts: [{ text: "It's " }, { answer: "10:20", choices: ["10:15", "10:20"] }, { text: "." }] },
          { speaker: "HANNAH", parts: [{ text: "We should hurry!" }] }
        ]
      }
    },
    {
      id: "classroom-life-chloe-noah-science-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_chloe_noah.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ text: "What time does double science start?" }] },
          { speaker: "NOAH", parts: [{ answer: "10:30", choices: ["10:15", "10:30"] }] },
          { speaker: "CHLOE", parts: [{ text: "Oh no, that's now, thanks!" }] }
        ]
      }
    },
    {
      id: "classroom-life-benjamin-jack-breaktime-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_benjamin_jack.mp4",
        lines: [
          { speaker: "BENJAMIN", parts: [{ text: "What time is it?" }] },
          { speaker: "JACK", parts: [{ answer: "10:30", choices: ["10:30", "10:00"] }, { text: ". It's breaktime!" }] }
        ]
      }
    },
    {
      id: "classroom-life-noah-secretary-time-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_noah.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "Excuse me, what time is it?" }] },
          { speaker: "SCHOOL SECRETARY", parts: [{ text: "It's " }, { answer: "1:15", choices: ["1:15", "1:45"] }] },
          { speaker: "NOAH", parts: [{ text: "Thank you." }] }
        ]
      }
    },
    {
      id: "classroom-life-victoria-ethan-it-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_victoria_ethan.mp4",
        lines: [
          { speaker: "ETHAN", parts: [{ text: "What time does information technology start?" }] },
          { speaker: "VICTORIA", parts: [{ text: "It starts at " }, { answer: "9:00", choices: ["8:15", "9:00"] }, { text: "." }] }
        ]
      }
    },
    {
      id: "classroom-life-zoe-hannah-lunch-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_zoe_hannah.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "What time does lunch break start?" }] },
          { speaker: "ZOE", parts: [{ text: "At " }, { answer: "12:10", choices: ["10:12", "12:10"] }, { text: "." }] },
          { speaker: "HANNAH", parts: [{ text: "Great! I'm so hungry." }] }
        ]
      }
    },
    { id: "monday-english", timetableSlide: true, focus: "TIMETABLE", sentenceParts: [{ text: "The English lesson starts " }, { text: "at", className: "timetable-preposition" }, { text: " half past nine", className: "timetable-detail" }, { text: " " }, { text: "on", className: "timetable-preposition" }, { text: " Monday.", className: "timetable-detail" }], imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "monday-science", timetableSlide: true, focus: "TIMETABLE", sentenceParts: [{ text: "The Science lesson starts " }, { text: "at", className: "timetable-preposition" }, { text: " quarter past ten", className: "timetable-detail" }, { text: " " }, { text: "on", className: "timetable-preposition" }, { text: " Monday.", className: "timetable-detail" }], imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "monday-maths", timetableSlide: true, focus: "TIMETABLE", sentenceParts: [{ text: "The Maths lesson starts " }, { text: "at", className: "timetable-preposition" }, { text: " half past eleven", className: "timetable-detail" }, { text: " " }, { text: "on", className: "timetable-preposition" }, { text: " Monday.", className: "timetable-detail" }], imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "monday-music-model", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " does Music lesson start " }, { text: "on", className: "timetable-preposition" }, { text: " Monday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " ten to two.", className: "timetable-detail" }], imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "monday-social-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " does Social Studies lesson start " }, { text: "on", className: "timetable-preposition" }, { text: " Monday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " twenty to three.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "pe-when-model", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "When", className: "timetable-detail" }, { text: " is the P.E. lesson?" }], answerParts: [{ text: "It is " }, { text: "on", className: "timetable-preposition" }, { text: " Tuesday", className: "timetable-detail" }, { text: " and " }, { text: "Thursday.", className: "timetable-detail" }], imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "art-when-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "When", className: "timetable-detail" }, { text: " is the Art lesson?" }], answerParts: [{ text: "It is " }, { text: "on", className: "timetable-preposition" }, { text: " Wednesday", className: "timetable-detail" }, { text: " and " }, { text: "Friday.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "tuesday-social-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " is the Social Studies lesson " }, { text: "on", className: "timetable-preposition" }, { text: " Tuesday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " half past nine.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "tuesday-english-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " is the English lesson " }, { text: "on", className: "timetable-preposition" }, { text: " Tuesday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " quarter past ten.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "tuesday-science-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " is the Science lesson " }, { text: "on", className: "timetable-preposition" }, { text: " Tuesday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " half past eleven.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." },
    { id: "tuesday-pe-reveal", timetableSlide: true, focus: "TIMETABLE", questionParts: [{ text: "What time", className: "timetable-detail" }, { text: " is the P.E. lesson " }, { text: "on", className: "timetable-preposition" }, { text: " Tuesday?", className: "timetable-detail" }], answerParts: [{ text: "It starts " }, { text: "at", className: "timetable-preposition" }, { text: " twenty to three.", className: "timetable-detail" }], answerReveal: true, imagePath: "images/telling-time/timetable.webp", visualBrief: "A weekly school timetable." }
  ]
};

const toBeTellingTimeVideoStartIndex = toBeTellingTimeFunction.sentences.findIndex(
  (item) => item.id === "classroom-life-chloe-ella-time-video"
);
const toBeTellingTimeVideoItems = toBeTellingTimeFunction.sentences
  .slice(toBeTellingTimeVideoStartIndex, toBeTellingTimeVideoStartIndex + 7)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

toBeTellingTimeFunction.sentences.splice(toBeTellingTimeVideoStartIndex, toBeTellingTimeVideoItems.length, {
  id: "telling-time-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: toBeTellingTimeVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(toBeTellingTimeFunction);
