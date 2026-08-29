const friendshipGrade8Function = {
  id: "friendship",
  grade: 8,
  unit: 1,
  title: "Friendship",
  description: "",
  exercises: [],
  sentences: [
    {
      id: "qualities-of-a-good-friend-1",
      presenceSlide: true,
      sequentialBoxes: {
        heading: "Qualities of a good friend",
        boxes: [
          { parts: [{ text: "They always " }, { text: "back", className: "sequential-boxes-white" }, { text: " you " }, { text: "up.", className: "sequential-boxes-white" }] },
          { parts: [{ text: "They never " }, { text: "tell lies.", className: "sequential-boxes-white" }] },
          { parts: [{ text: "They " }, { text: "keep", className: "sequential-boxes-white" }, { text: " their " }, { text: "promises.", className: "sequential-boxes-white" }] },
          { parts: [{ text: "You can " }, { text: "count on", className: "sequential-boxes-white sequential-boxes-underlined" }, { text: " them." }] },
          { parts: [{ text: "They help you when you need them." }] },
          { parts: [{ text: "They " }, { text: "keep", className: "sequential-boxes-white" }, { text: " your " }, { text: "secrets.", className: "sequential-boxes-white" }] }
        ]
      }
    },
    {
      id: "qualities-of-a-good-friend-2",
      presenceSlide: true,
      sequentialBoxes: {
        heading: "Qualities of a good friend",
        boxes: [
          { parts: [{ text: "You share " }, { text: "similar", className: "sequential-boxes-white" }, { text: " likes, dislikes and interests." }] },
          { parts: [{ text: "(You have something in " }, { text: "common", className: "sequential-boxes-white" }, { text: ")" }] },
          { parts: [{ text: "You rarely " }, { text: "argue.", className: "sequential-boxes-white" }] },
          { parts: [{ text: "You are " }, { text: "like", className: "sequential-boxes-white" }, { text: " brothers and sisters." }] },
          { parts: [{ text: "You usually " }, { text: "get on well", className: "sequential-boxes-white" }, { text: " with each other." }] }
        ]
      }
    },
    {
      id: "friendship-video-ethan-david",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ethan.mp4",
        lines: [
          { speaker: "ETHAN", parts: [{ text: "I can " }, { answer: "always", choices: ["always", "never"] }, { text: " count on David." }] }
        ]
      }
    },
    {
      id: "friendship-video-zoe-mia",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_zoe.mp4",
        lines: [
          { speaker: "ZOE", parts: [{ text: "I always " }, { answer: "rely on", choices: ["tell lies", "rely on"] }, { text: " Mia." }] }
        ]
      }
    },
    {
      id: "friendship-video-noah-victoria",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_noah.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "Victoria and I have " }, { answer: "something", choices: ["nothing", "something"] }, { text: " in common." }] }
        ]
      }
    },
    {
      id: "friendship-video-mia-zoe",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_mia.mp4",
        lines: [
          { speaker: "MIA", parts: [{ text: "Zoe always " }, { answer: "keeps secrets", choices: ["keeps secrets", "keeps promises"] }, { text: "." }] }
        ]
      }
    },
    {
      id: "friendship-video-jack-benjamin",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_jack.mp4",
        lines: [
          { speaker: "JACK", parts: [{ text: "Benjamin always " }, { answer: "backs me up", choices: ["tells lies", "backs me up"] }, { text: "." }] }
        ]
      }
    },
    {
      id: "friendship-video-david-ethan",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_david.mp4",
        lines: [
          { speaker: "DAVID", parts: [{ text: "Ethan and I always " }, { answer: "get on well", choices: ["get on well", "argue"] }, { text: " with each other." }] }
        ]
      }
    },
    {
      id: "friendship-video-hannah-emma",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_hannah.mp4",
        lines: [
          { speaker: "HANNAH", parts: [{ text: "Emma " }, { answer: "always", choices: ["always", "never"] }, { text: " supports me." }] }
        ]
      }
    },
    {
      id: "friendship-video-ella-olivia",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ella.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Olivia and I have " }, { answer: "similar", choices: ["different", "similar"] }, { text: " interests." }] }
        ]
      }
    },
    {
      id: "friendship-sort-your-friends",
      presenceSlide: true,
      noVisual: true,
      friendSorter: {
        heading: "CHOOSE YOUR FRIENDS",
        positiveLabel: "Has positive qualities",
        negativeLabel: "Has some negative qualities",
        cards: [
          { name: "Ava", text: "You can count on her.", category: "positive" },
          { name: "Benjamin", text: "He always backs you up.", category: "positive" },
          { name: "Chloe", text: "She always keeps her promises.", category: "positive" },
          { name: "David", text: "You have similar interests.", category: "positive" },
          { name: "Olivia", text: "She keeps your secrets.", category: "positive" },
          { name: "Emma", text: "She always supports you.", category: "positive" },
          { name: "Hannah", text: "She always cheers you up.", category: "positive" },
          { name: "Ethan", text: "He usually tells lies.", category: "negative" },
          { name: "Victoria", text: "She never shares her things with you.", category: "negative" },
          { name: "Jack", text: "You always argue with him.", category: "negative" },
          { name: "Mia", text: "She never keeps her promises.", category: "negative" },
          { name: "Noah", text: "You have nothing in common with him.", category: "negative" },
          { name: "Zoe", text: "She never backs you up.", category: "negative" },
          { name: "Daniel", text: "You don't share similar interests with him.", category: "negative" }
        ]
      }
    },
    {
      id: "friendship-talk-about-your-friends",
      presenceSlide: true,
      sequentialBoxes: {
        heading: "TALK ABOUT YOUR FRIENDS",
        numbered: true,
        splitAt: 5,
        boxes: [
          "Who do you count on most?",
          "Who do you sometimes argue with?",
          "Who helps you whenever you need?",
          "Who always backs you up?",
          "Who do you share similar interests with?",
          "Who sometimes tells you lies?",
          "Who always keeps your secrets?",
          "Who usually tells jokes and makes you laugh?",
          "Who do you always get on well with?",
          "Who do you like spending time with?"
        ]
      }
    }
  ]
};

const friendshipGrade8VideoStartIndex = friendshipGrade8Function.sentences.findIndex(
  (item) => item.id === "friendship-video-ethan-david"
);
const friendshipGrade8VideoItems = friendshipGrade8Function.sentences
  .slice(friendshipGrade8VideoStartIndex, friendshipGrade8VideoStartIndex + 8)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

friendshipGrade8Function.sentences.splice(friendshipGrade8VideoStartIndex, friendshipGrade8VideoItems.length, {
  id: "friendship-grade8-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: friendshipGrade8VideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(friendshipGrade8Function);
