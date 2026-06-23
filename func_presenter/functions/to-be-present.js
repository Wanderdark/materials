const toBePresentFunction = {
  id: "to-be-present",
  grade: 5,
  unit: 1,
  title: "To Be - Present: Am / Is / Are - Wh- Questions + Personal Pronouns",
  description: "Use am, is, and are to talk about people, places, and groups.",
  exercises: ["to-be-present-choice", "pronoun-memory", "pronoun-snap"],
  pronounTable: {
    title: "Personal Pronouns and To Be",
    groups: [
      { pronouns: ["I"], verb: "AM", highlightClass: "to-be-am" },
      { pronouns: ["HE", "SHE", "IT"], verb: "IS", highlightClass: "to-be-is" },
      { pronouns: ["WE", "YOU", "THEY"], verb: "ARE", highlightClass: "to-be-are" }
    ]
  },
  sentences: [
    { id: "i-am-student", focus: "AM", referenceType: "I + AM", sentence: "I am a student at a secondary school.", highlight: "am", highlightClass: "to-be-am", badgeClass: "to-be-am", imagePath: "images/tobe-present/1.webp", visualBrief: "A student at a secondary school." },
    { id: "im-from-turkiye", focus: "AM", referenceType: "I + AM", sentence: "I'm from Turkiye.", highlight: "I'm", highlightClass: "to-be-am", badgeClass: "to-be-am", imagePath: "images/tobe-present/1.webp", visualBrief: "A student from Turkiye." },
    { id: "mary-is-usa", focus: "IS", referenceType: "SHE + IS", sentence: "Mary is from U.S.A.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/2.webp", visualBrief: "Mary from the U.S.A." },
    { id: "she-is-art-club", focus: "IS", referenceType: "SHE + IS", sentence: "She is in the Art Club.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/2.webp", visualBrief: "Mary in the Art Club." },
    { id: "maths-club", focus: "IS", referenceType: "SINGULAR + IS", sentence: "My favorite school club is Maths Club.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/3.webp", visualBrief: "A Maths Club at school." },
    { id: "we-are-grade-five", focus: "ARE", referenceType: "WE + ARE", sentence: "We are in the 5th grade.", highlight: "are", highlightClass: "to-be-are", badgeClass: "to-be-are", imagePath: "images/tobe-present/4.webp", visualBrief: "Students in the 5th grade." },
    { id: "we-are-canteen", focus: "ARE", referenceType: "WE + ARE", sentence: "We are in the canteen now.", highlight: "are", highlightClass: "to-be-are", badgeClass: "to-be-are", imagePath: "images/tobe-present/4.webp", visualBrief: "Students in the school canteen." },
    { id: "who-english-teacher", focus: "IS", referenceType: "WHO + IS", sentence: "Who is your English teacher?", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/1.webp", visualBrief: "An English teacher at a secondary school." },
    { id: "english-teacher-answer", focus: "IS", referenceType: "SINGULAR + IS", sentence: "My English teacher is Adil Fırat OKTAV.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/1.webp", visualBrief: "An English teacher at a secondary school." },
    { id: "what-favorite-club", focus: "IS", referenceType: "WHAT + IS", sentence: "What's your favorite school club?", highlight: "What's", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/10.webp", visualBrief: "A question about a favorite school club." },
    { id: "sports-club-answer", focus: "IS", referenceType: "SINGULAR + IS", sentence: "My favorite school club is Sports Club.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/10.webp", visualBrief: "A Sports Club at school." },
    { id: "where-mary-from", focus: "IS", referenceType: "WHERE + IS", sentence: "Where is Mary from?", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/11.webp", visualBrief: "A question about where Mary is from." },
    { id: "mary-from-usa", focus: "IS", referenceType: "SHE + IS", sentence: "She is from U.S.A.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/11.webp", visualBrief: "Mary from the U.S.A." },
    { id: "where-coach", focus: "IS", referenceType: "WHERE + IS", sentence: "Where is the coach?", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/12.webp", visualBrief: "A question about a coach." },
    { id: "coach-sports-field", focus: "IS", referenceType: "HE + IS", sentence: "He is in the sports field.", highlight: "is", highlightClass: "to-be-is", badgeClass: "to-be-is", imagePath: "images/tobe-present/12.webp", visualBrief: "A coach in the sports field." }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(toBePresentFunction);
