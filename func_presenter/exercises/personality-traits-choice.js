const personalityTraitChoiceItems = [
  ["clumsy", "often drops or breaks things."],
  ["generous", "likes giving and sharing with others."],
  ["stingy", "doesn't like sharing or spending money."],
  ["selfish", "only thinks about himself/herself."],
  ["stubborn", "never changes his/her mind."],
  ["funny", "makes people laugh."],
  ["shy", "feels nervous around new people."],
  ["polite", "always uses kind words and good manners."],
  ["determined", "never gives up easily."],
  ["patient", "can wait without getting angry."],
  ["intelligent", "learns and understands things quickly."],
  ["thoughtful", "thinks about other people's feelings."],
  ["adventurous", "likes trying new and exciting things."],
  ["energetic", "has a lot of energy."],
  ["cheerful", "is usually happy and smiling."],
  ["responsible", "always does his/her duties."],
  ["easy-going", "is relaxed and not easily upset."],
  ["laid-back", "is very relaxed and never worries much."],
  ["friendly", "is kind and easy to talk to."],
  ["sensitive", "easily gets hurt or upset."],
  ["confident", "believes in himself/herself."],
  ["outgoing", "likes meeting and enjoys spending time with others."],
  ["helpful", "always helps and encourages others."],
  ["hardworking", "works hard and never gives up easily."],
  ["creative", "has lots of new and original ideas."]
];

const personalityTraitChoiceCharacters = [
  { name: "Ava", gender: "girl", imagePath: "images/common/students/13/ava.webp", traits: ["polite", "thoughtful", "responsible"] },
  { name: "Benjamin", gender: "boy", imagePath: "images/common/students/13/benjamin.webp", traits: ["easy-going", "laid-back", "friendly", "funny"] },
  { name: "Chloe", gender: "girl", imagePath: "images/common/students/13/chloe.webp", traits: ["sensitive", "polite"] },
  { name: "Daniel", gender: "boy", imagePath: "images/common/students/13/daniel.webp", traits: ["clumsy", "energetic", "confident"] },
  { name: "David", gender: "boy", imagePath: "images/common/students/13/david.webp", traits: ["honest", "thoughtful", "responsible", "reliable"] },
  { name: "Ella", gender: "girl", imagePath: "images/common/students/13/ella.webp", traits: ["cheerful", "outgoing", "sociable", "forgetful"] },
  { name: "Emma", gender: "girl", imagePath: "images/common/students/13/emma.webp", traits: ["friendly", "helpful", "generous", "reliable"] },
  { name: "Ethan", gender: "boy", imagePath: "images/common/students/13/ethan.webp", traits: ["determined", "punctual"] },
  { name: "Hannah", gender: "girl", imagePath: "images/common/students/13/hannah.webp", traits: ["adventurous", "energetic", "cheerful"] },
  { name: "Jack", gender: "boy", imagePath: "images/common/students/13/jack.webp", traits: ["selfish", "stubborn", "patient"] },
  { name: "Lucas", gender: "boy", imagePath: "images/common/students/13/lucas.webp", traits: ["determined", "energetic"] },
  { name: "Mia", gender: "girl", imagePath: "images/common/students/13/mia.webp", traits: ["shy", "thoughtful"] },
  { name: "Noah", gender: "boy", imagePath: "images/common/students/13/noah.webp", traits: ["intelligent", "hardworking"] },
  { name: "Olivia", gender: "girl", imagePath: "images/common/students/13/olivia.webp", traits: ["funny", "creative"] },
  { name: "Victoria", gender: "girl", imagePath: "images/common/students/13/victoria.webp", traits: ["intelligent", "stingy"] },
  { name: "Zoe", gender: "girl", imagePath: "images/common/students/13/zoe.webp", traits: ["shy", "thoughtful", "patient"] }
];

const personalityTraitChoiceBlacklist = {
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

function shufflePersonalityTraitChoice(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function applyPersonalityTraitPronouns(text, pronoun) {
  const isHe = pronoun === "He";
  return text
    .replace(/\bhimself\/herself\b/g, isHe ? "himself" : "herself")
    .replace(/\bhis\/her\b/g, isHe ? "his" : "her")
    .replace(/\bhim\/her\b/g, isHe ? "him" : "her");
}

function buildPersonalityCharacterOptions(trait) {
  const correctPool = personalityTraitChoiceCharacters.filter((character) => character.traits.includes(trait));
  const wrongPool = personalityTraitChoiceCharacters.filter((character) => !character.traits.includes(trait));
  const answer = shufflePersonalityTraitChoice(correctPool)[0];
  const distractors = shufflePersonalityTraitChoice(wrongPool).slice(0, 3);
  return {
    trait,
    answer: answer.name,
    answerGender: answer.gender,
    options: shufflePersonalityTraitChoice([answer, ...distractors])
  };
}

function buildPersonalityTraitChoicePages() {
  const answers = personalityTraitChoiceItems.map(([trait]) => trait);
  return shufflePersonalityTraitChoice(personalityTraitChoiceItems).map(([trait, definition]) => {
    const personalityMatch = buildPersonalityCharacterOptions(trait);
    const pronoun = personalityMatch.answerGender === "boy" ? "He" : "She";
    const blocked = new Set(personalityTraitChoiceBlacklist[trait] || []);
    const cleanDistractors = answers.filter((item) => item !== trait && !blocked.has(item));
    const fallbackDistractors = answers.filter((item) => item !== trait);
    const options = shufflePersonalityTraitChoice([
      trait,
      ...shufflePersonalityTraitChoice(cleanDistractors.length >= 2 ? cleanDistractors : fallbackDistractors).slice(0, 2)
    ]);
    return {
      personalityMatch,
      sentences: [
        {
          segments: [
            { text: `${pronoun} ${applyPersonalityTraitPronouns(definition, pronoun)} ${pronoun} is ` },
            { options, answer: trait },
            { text: "." }
          ]
        }
      ]
    };
  });
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "personality-traits-choice",
  activity: "paragraph-choice",
  title: "CHOOSE CORRECT OPTION",
  textOnly: true,
  supports(functionModule) {
    return ["personality-traits", "personality-traits-grade8"].includes(functionModule.id) && [7, 8].includes(functionModule.grade);
  },
  get pages() {
    return buildPersonalityTraitChoicePages();
  }
});
