const modalsProhibitionFunction = {
  id: "modals-prohibition",
  grade: 5,
  unit: 1,
  title: "School Rules: Mustn't & Can't",
  description: "Use mustn't and can't to say that something is not allowed.",
  exercises: ["modals-prohibition-choice", "modals-prohibition-true-false"],
  sentences: [
    { id: "cant-run-classroom", focus: "CAN'T", referenceType: "CAN NOT · PROHIBITION", sentence: "You can't run in the classroom.", highlight: "can't", highlightClass: "modal-cant", badgeClass: "modal-cant", imagePath: "images/modals-prohibition/1.webp", visualBrief: "A student running inside a classroom." },
    { id: "mustnt-shout-library", focus: "MUSTN'T", referenceType: "MUST NOT · PROHIBITION", sentence: "You mustn't shout in the library.", highlight: "mustn't", highlightClass: "modal-mustnt", badgeClass: "modal-mustnt", imagePath: "images/modals-prohibition/2.webp", visualBrief: "A student shouting in a library." },
    { id: "mustnt-run-corridors", focus: "MUSTN'T", referenceType: "MUST NOT · PROHIBITION", sentence: "You mustn't run in the corridors.", highlight: "mustn't", highlightClass: "modal-mustnt", badgeClass: "modal-mustnt", imagePath: "images/modals-prohibition/3.webp", visualBrief: "A student running in school corridors." },
    { id: "cant-throw-trash", focus: "CAN'T", referenceType: "CAN NOT · PROHIBITION", sentence: "You can't throw trash around.", highlight: "can't", highlightClass: "modal-cant", badgeClass: "modal-cant", imagePath: "images/modals-prohibition/4.webp", visualBrief: "A student throwing litter around the school." },
    { id: "mustnt-fight", focus: "MUSTN'T", referenceType: "MUST NOT · PROHIBITION", sentence: "You mustn't fight.", highlight: "mustn't", highlightClass: "modal-mustnt", badgeClass: "modal-mustnt", imagePath: "images/modals-prohibition/5.webp", visualBrief: "Two students fighting." },
    { id: "cant-chew-gum", focus: "CAN'T", referenceType: "CAN NOT · PROHIBITION", sentence: "You can't chew gum in the lesson!", highlight: "can't", highlightClass: "modal-cant", badgeClass: "modal-cant", imagePath: "images/modals-prohibition/6.webp", visualBrief: "A student chewing gum during a lesson." },
    { id: "mustnt-make-noise", focus: "MUSTN'T", referenceType: "MUST NOT · PROHIBITION", sentence: "You mustn't make noise in the classroom.", highlight: "mustn't", highlightClass: "modal-mustnt", badgeClass: "modal-mustnt", imagePath: "images/modals-prohibition/7.webp", visualBrief: "Students making noise in a classroom." },
    { id: "cant-eat-drink", focus: "CAN'T", referenceType: "CAN NOT · PROHIBITION", sentence: "You can't eat and drink in the lesson.", highlight: "can't", highlightClass: "modal-cant", badgeClass: "modal-cant", imagePath: "images/modals-prohibition/12.webp", visualBrief: "A student eating and drinking during a lesson." },
    {
      id: "school-life-ella-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_ella.mp4",
        lines: [
          { speaker: "TEACHER", parts: [{ text: "Ella, you " }, { answer: "mustn't", choices: ["mustn't", "can"] }, { text: " make noise in the lesson." }] },
          { speaker: "ELLA", parts: [{ text: "Sorry, I'll stop." }] }
        ]
      }
    },
    {
      id: "school-life-hannah-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_hannah.mp4",
        lines: [
          { speaker: "TEACHER", parts: [{ text: "Hannah, you " }, { answer: "mustn't", choices: ["can", "mustn't"] }, { text: " chew gum in class." }] },
          { speaker: "HANNAH", parts: [{ text: "Sorry, I'll throw it away." }] }
        ]
      }
    },
    {
      id: "school-life-lucas-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_lucas.mp4",
        lines: [
          { speaker: "TEACHER", parts: [{ text: "You " }, { answer: "can't", choices: ["can't", "must"] }, { text: " eat or drink in the lesson." }] },
          { speaker: "LUCAS", parts: [{ text: "Okay, I'll put it away." }] }
        ]
      }
    },
    {
      id: "school-life-jack-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_jack.mp4",
        lines: [
          { speaker: "ASSISTANT HEADMASTER", parts: [{ text: "Jack, you " }, { answer: "can't", choices: ["must", "can't"] }, { text: " throw rubbish around." }] },
          { speaker: "JACK", parts: [{ text: "Okay, I'll pick it up." }] }
        ]
      }
    },
    {
      id: "nature-emma-hannah-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_emma_hannah.mp4",
        lines: [
          { speaker: "EMMA", parts: [{ text: "Wait, we " }, { answer: "mustn't", choices: ["can", "mustn't"] }, { text: " pick the flowers here." }] },
          { speaker: "HANNAH", parts: [{ text: "Right, they " }, { answer: "must", choices: ["must", "mustn't"] }, { text: " stay in nature." }] }
        ]
      }
    },
    {
      id: "nature-olivia-ava-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_olivia_ava.mp4",
        lines: [
          { speaker: "AVA", parts: [{ text: "We " }, { answer: "must", choices: ["can't", "must"] }, { text: " be quiet here." }] },
          { speaker: "OLIVIA", parts: [{ text: "Okay, the birds are very close, oops, sorry." }] }
        ]
      }
    },
    {
      id: "nature-benjamin-jack-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_benjamin_jack.mp4",
        lines: [
          { speaker: "BENJAMIN", parts: [{ text: "We " }, { answer: "must", choices: ["must", "mustn't"] }, { text: " keep the park clean, Jack." }] },
          { speaker: "JACK", parts: [{ text: "Of course, we " }, { answer: "must", choices: ["can't", "must"] }, { text: " protect animals’ habitat." }] }
        ]
      }
    },
    {
      id: "nature-ethan-noah-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_ethan_noah.mp4",
        lines: [
          { speaker: "ETHAN", parts: [{ text: "We " }, { answer: "must", choices: ["can't", "must"] }, { text: " never feed wild animals." }] },
          { speaker: "NOAH", parts: [{ text: "Right, they " }, { answer: "must", choices: ["can't", "must"] }, { text: " find their own food." }] }
        ]
      }
    },
    {
      id: "nature-mia-zoe-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_nature_mia_zoe.mp4",
        lines: [
          { speaker: "MIA", parts: [{ text: "We " }, { answer: "must not", choices: ["must not", "can"] }, { text: " touch wild animals or their homes." }] },
          { speaker: "ZOE", parts: [{ text: "You’re right, let’s leave it alone." }] }
        ]
      }
    },
    {
      id: "school-life-mia-library-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_mia2.mp4",
        lines: [
          { speaker: "LIBRARIAN", parts: [{ text: "You " }, { answer: "mustn't shout", choices: ["can", "mustn't shout"] }, { text: " in the library." }] },
          { speaker: "MIA", parts: [{ text: "Oops, sorry, I'll speak quietly." }] }
        ]
      }
    },
    {
      id: "school-life-victoria-noah-usb-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_victoria_noah.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "Can I use my USB drive?" }] },
          { speaker: "VICTORIA", parts: [{ text: "No, we " }, { answer: "can't", choices: ["can't", "must"] }, { text: " use them here." }] }
        ]
      }
    },
    {
      id: "school-life-mia-zoe-library-video",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_mia_zoe.mp4",
        lines: [
          { speaker: "ZOE", parts: [{ text: "We " }, { answer: "can't", choices: ["can't", "must"] }, { text: " eat in the library." }] },
          { speaker: "MIA", parts: [{ text: "Okay, I'll put it away." }] }
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(modalsProhibitionFunction);
