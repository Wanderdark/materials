const personalityFillBlankItems = [
  { trait: "clumsy", clue: "Someone who often drops or breaks things is" },
  { trait: "generous", clue: "Someone who likes giving and sharing with others is" },
  { trait: "stingy", clue: "Someone who doesn't like sharing or spending money is" },
  { trait: "selfish", clue: "Someone who only thinks about himself or herself is" },
  { trait: "stubborn", clue: "Someone who never changes his or her mind is" },
  { trait: "funny", clue: "Someone who makes people laugh is" },
  { trait: "shy", clue: "Someone who feels nervous around new people is" },
  { trait: "polite", clue: "Someone who always uses kind words and good manners is" },
  { trait: "determined", clue: "Someone who never gives up easily is" },
  { trait: "patient", clue: "Someone who can wait without getting angry is" },
  { trait: "intelligent", clue: "Someone who learns and understands things quickly is" },
  { trait: "thoughtful", clue: "Someone who thinks about other people's feelings is" },
  { trait: "adventurous", clue: "Someone who likes trying new and exciting things is" },
  { trait: "energetic", clue: "Someone who has a lot of energy is" },
  { trait: "cheerful", clue: "Someone who is usually happy and smiling is" },
  { trait: "responsible", clue: "Someone who always does his or her duties is" },
  { trait: "easy-going", clue: "Someone who is relaxed and not easily upset is" },
  { trait: "laid-back", clue: "Someone who is very relaxed and never worries much is" },
  { trait: "friendly", clue: "Someone who is kind and easy to talk to is" },
  { trait: "sensitive", clue: "Someone who easily gets hurt or upset is" },
  { trait: "confident", clue: "Someone who believes in himself or herself is" },
  { trait: "outgoing", clue: "Someone who likes meeting and spending time with others is" },
  { trait: "helpful", clue: "Someone who always helps and encourages others is" },
  { trait: "hardworking", clue: "Someone who works hard and never gives up easily is" },
  { trait: "creative", clue: "Someone who has lots of new and original ideas is" }
];

const personalityFillBlankBlacklist = {
  polite: ["thoughtful", "helpful", "friendly", "sensitive"],
  thoughtful: ["polite", "helpful", "sensitive", "friendly", "responsible"],
  helpful: ["polite", "thoughtful", "friendly", "generous", "supportive"],
  generous: ["helpful", "friendly"],
  friendly: ["polite", "helpful", "outgoing", "cheerful"],
  sensitive: ["thoughtful", "polite", "shy"],
  funny: ["cheerful", "outgoing"],
  cheerful: ["funny", "friendly", "outgoing"],
  outgoing: ["friendly", "cheerful", "funny"],
  determined: ["hardworking", "responsible", "patient"],
  hardworking: ["determined", "responsible", "patient"],
  responsible: ["thoughtful", "hardworking", "determined"],
  "easy-going": ["laid-back", "friendly", "cheerful"],
  "laid-back": ["easy-going", "patient"],
  patient: ["laid-back", "thoughtful", "responsible"],
  confident: ["outgoing", "energetic", "determined"],
  energetic: ["cheerful", "adventurous", "outgoing", "confident"],
  adventurous: ["energetic", "confident"],
  selfish: ["stingy", "stubborn"],
  stingy: ["selfish"],
  stubborn: ["selfish", "determined"],
  shy: ["sensitive"],
  intelligent: ["creative", "hardworking"],
  creative: ["intelligent"],
  clumsy: ["forgetful"]
};

function shufflePersonalityFillBlank(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function personalityFillBlankConflict(traitA, traitB) {
  return (personalityFillBlankBlacklist[traitA] || []).includes(traitB)
    || (personalityFillBlankBlacklist[traitB] || []).includes(traitA);
}

function buildPersonalityFillBlankGroups() {
  const remaining = shufflePersonalityFillBlank(personalityFillBlankItems);
  const groups = [];
  while (remaining.length) {
    const group = [];
    while (group.length < 8 && remaining.length) {
      const candidateIndex = remaining.findIndex((candidate) =>
        group.every((item) => !personalityFillBlankConflict(item.trait, candidate.trait)));
      const index = candidateIndex >= 0 ? candidateIndex : 0;
      group.push(remaining.splice(index, 1)[0]);
    }
    groups.push(group);
  }
  return groups.map((group, index) => ({
    instruction: `Complete set ${index + 1}.`,
    words: shufflePersonalityFillBlank(group.map((item) => item.trait)),
    blanks: shufflePersonalityFillBlank(group.map((item) => ({
      clue: item.clue,
      answer: item.trait
    })))
  }));
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "personality-traits-fill-blank",
  activity: "word-bank-fill-blank",
  title: "FILL THE BLANKS",
  instruction: "Choose a personality word, then place it in the correct blank.",
  supports(functionModule) {
    return functionModule.id === "personality-traits" && functionModule.grade === 7;
  },
  buildPages() {
    return buildPersonalityFillBlankGroups();
  }
});
