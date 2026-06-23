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
    { id: "cant-eat-drink", focus: "CAN'T", referenceType: "CAN NOT · PROHIBITION", sentence: "You can't eat and drink in the lesson.", highlight: "can't", highlightClass: "modal-cant", badgeClass: "modal-cant", imagePath: "images/modals-prohibition/12.webp", visualBrief: "A student eating and drinking during a lesson." }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(modalsProhibitionFunction);
