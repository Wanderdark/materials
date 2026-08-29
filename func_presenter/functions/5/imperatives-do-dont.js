const imperativesDoDontFunction = {
  id: "imperatives-do-dont",
  grade: 5,
  unit: 1,
  title: "Imperatives: Do / Don't",
  description: "Use imperatives to give instructions, rules, and commands.",
  exercises: ["imperatives-choice", "imperatives-true-false", "imperatives-sort"],
  sentences: [
    { id: "dont-run-classroom", focus: "DON'T", referenceType: "DO NOT · NEGATIVE IMPERATIVE", sentence: "Don't run in the classroom!", highlight: "Don't", highlightClass: "imperative-dont", badgeClass: "imperative-dont", imagePath: "images/modals-prohibition/1.webp", visualBrief: "A student running inside a classroom." },
    { id: "dont-shout-library", focus: "DON'T", referenceType: "DO NOT · NEGATIVE IMPERATIVE", sentence: "Don't shout in the library.", highlight: "Don't", highlightClass: "imperative-dont", badgeClass: "imperative-dont", imagePath: "images/modals-prohibition/2.webp", visualBrief: "A student shouting in a library." },
    { id: "dont-be-rude", focus: "DON'T", referenceType: "DO NOT · NEGATIVE IMPERATIVE", sentence: "Don't be rude to your classmates!", highlight: "Don't", highlightClass: "imperative-dont", badgeClass: "imperative-dont", imagePath: "images/modals-prohibition/8.webp", visualBrief: "A student being rude to classmates." },
    { id: "dont-chew-gum", focus: "DON'T", referenceType: "DO NOT · NEGATIVE IMPERATIVE", sentence: "Don't chew gum in the lesson!", highlight: "Don't", highlightClass: "imperative-dont", badgeClass: "imperative-dont", imagePath: "images/modals-prohibition/6.webp", visualBrief: "A student chewing gum during a lesson." },
    { id: "follow-rules", focus: "DO", referenceType: "POSITIVE IMPERATIVE", sentence: "Follow and obey the rules!", highlight: "Follow", highlightClass: "imperative-do", badgeClass: "imperative-do", imagePath: "images/modals-prohibition/10.webp", visualBrief: "Students following school rules." },
    { id: "raise-hand", focus: "DO", referenceType: "POSITIVE IMPERATIVE", sentence: "Raise your hand to speak!", highlight: "Raise", highlightClass: "imperative-do", badgeClass: "imperative-do", imagePath: "images/modals-prohibition/11.webp", visualBrief: "A student raising a hand to speak." },
    { id: "dont-eat-drink", focus: "DON'T", referenceType: "DO NOT · NEGATIVE IMPERATIVE", sentence: "Don't eat and drink in the lesson.", highlight: "Don't", highlightClass: "imperative-dont", badgeClass: "imperative-dont", imagePath: "images/modals-prohibition/12.webp", visualBrief: "A student eating and drinking during a lesson." },
    { id: "listen-carefully", focus: "DO", referenceType: "POSITIVE IMPERATIVE", sentence: "Listen to your teacher carefully!", highlight: "Listen", highlightClass: "imperative-do", badgeClass: "imperative-do", imagePath: "images/modals-prohibition/13.webp", visualBrief: "A student listening carefully to a teacher." },
    { id: "be-kind", focus: "DO", referenceType: "POSITIVE IMPERATIVE", sentence: "Be kind to your friends!", highlight: "Be", highlightClass: "imperative-do", badgeClass: "imperative-do", imagePath: "images/modals-prohibition/14.webp", visualBrief: "Students being kind to friends." },
    { id: "keep-tidy", focus: "DO", referenceType: "POSITIVE IMPERATIVE", sentence: "Keep your classroom tidy!", highlight: "Keep", highlightClass: "imperative-do", badgeClass: "imperative-do", imagePath: "images/modals-prohibition/15.webp", visualBrief: "Students keeping a classroom tidy." },
    {
      id: "school-life-emma-tidy-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_emma.mp4",
        lines: [
          { speaker: "TEACHER", parts: [{ text: "Please " }, { answer: "keep", choices: ["keep", "don't keep"] }, { text: " your classroom tidy." }] },
          { speaker: "EMMA", parts: [{ text: "Of course, I'll put these books away." }] }
        ]
      }
    },
    {
      id: "school-life-olivia-hand-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_olivia.mp4",
        lines: [
          { speaker: "TEACHER", parts: [{ text: "Olivia, " }, { answer: "raise", choices: ["don't raise", "raise"] }, { text: " your hand to speak." }] },
          { speaker: "OLIVIA", parts: [{ text: "Okay!" }] }
        ]
      }
    },
    {
      id: "classroom-life-ava-sit-stand-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_ava3.mp4",
        lines: [
          { speaker: "AVA", parts: [{ answer: "Sit", choices: ["Sit", "don't sit"] }, { text: ", " }, { answer: "don't stand", choices: ["stand", "don't stand"] }, { text: ", sit, well, almost." }] }
        ]
      }
    },
    {
      id: "classroom-life-hannah-storm-photo-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_hannah_storm.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "Storm, " }, { answer: "don't look", choices: ["don't look", "look"] }, { text: " at the camera, just one photo!" }] }
        ]
      }
    },
    {
      id: "classroom-life-mia-coco-lettuce-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_mia_coco.mp4",
        lines: [
          { speaker: "MIA", parts: [{ answer: "Eat", choices: ["don't eat", "Eat"] }, { text: " your lettuce, I knew you would do that." }] }
        ]
      }
    },
    {
      id: "personal-life-hannah-storm-come-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_personal_life_hannah_storm.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "Storm always listens to me, Storm, " }, { answer: "come", choices: ["come", "don't come"] }, { text: " here, Well, usually." }] }
        ]
      }
    },
    {
      id: "neighborhood-ava-benjamin-buddy-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/life_in_neighborhood_ava_benjamin_buddy.mp4",
        lines: [
          { speaker: "AVA", parts: [{ text: "Buddy, " }, { answer: "don't come", choices: ["don't come", "come"] }, { text: " back!" }] },
          { speaker: "BENJAMIN", parts: [{ answer: "Don't", choices: ["Do", "Don't"] }, { text: " worry, I've got the leash!" }] }
        ]
      }
    },
    {
      id: "school-life-mia-zoe-laugh-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_mia_zoe2.mp4",
        lines: [
          { speaker: "ZOE", parts: [{ answer: "Don't laugh", choices: ["Laugh", "Don't laugh"] }, { text: ", Mia!" }] }
        ]
      }
    }
  ]
};

const imperativesDoDontVideoStartIndex = imperativesDoDontFunction.sentences.findIndex(
  (item) => item.id === "school-life-emma-tidy-video"
);
const imperativesDoDontVideoItems = imperativesDoDontFunction.sentences
  .slice(imperativesDoDontVideoStartIndex, imperativesDoDontVideoStartIndex + 8)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

imperativesDoDontFunction.sentences.splice(imperativesDoDontVideoStartIndex, imperativesDoDontVideoItems.length, {
  id: "imperatives-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: imperativesDoDontVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(imperativesDoDontFunction);
