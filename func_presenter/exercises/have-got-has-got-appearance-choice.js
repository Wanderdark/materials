const haveGotHasGotAppearanceCharacters = [
  { name: "Ava", gender: "girl", eyes: "green eyes", length: "long hair", style: "curly hair", color: "black hair" },
  { name: "Benjamin", gender: "boy", eyes: "blue eyes", length: "short hair", style: "straight hair", color: "blonde hair" },
  { name: "Chloe", gender: "girl", eyes: "blue eyes", length: "long hair", style: "curly hair", color: "blonde hair" },
  { name: "Daniel", gender: "boy", eyes: "green eyes", length: "long hair", style: "straight hair", color: "black hair" },
  { name: "David", gender: "boy", eyes: "brown eyes", length: "short hair", style: "wavy hair", color: "black hair" },
  { name: "Ella", gender: "girl", eyes: "green eyes", length: "long hair", style: "wavy hair", color: "blonde hair" },
  { name: "Emma", gender: "girl", eyes: "brown eyes", length: "long hair", style: "straight hair", color: "black hair" },
  { name: "Ethan", gender: "boy", eyes: "blue eyes", length: "short hair", style: "curly hair", color: "blonde hair" },
  { name: "Hannah", gender: "girl", eyes: "blue eyes", length: "long hair", style: "straight hair", color: "blonde hair" },
  { name: "Jack", gender: "boy", eyes: "brown eyes", length: "short hair", style: "straight hair", color: "black hair" },
  { name: "Lucas", gender: "boy", eyes: "brown eyes", length: "short hair", style: "curly hair", color: "black hair" },
  { name: "Mia", gender: "girl", eyes: "blue eyes", length: "long hair", style: "wavy hair", color: "brown hair" },
  { name: "Noah", gender: "boy", eyes: "green eyes", length: "short hair", style: "straight hair", color: "brown hair", glasses: true },
  { name: "Olivia", gender: "girl", eyes: "green eyes", length: "short hair", style: "straight hair", color: "brown hair" },
  { name: "Victoria", gender: "girl", eyes: "blue eyes", length: "long hair", style: "wavy hair", color: "black hair", glasses: true },
  { name: "Zoe", gender: "girl", eyes: "brown eyes", length: "long hair", style: "curly hair", color: "black hair" }
];

const haveGotHasGotAppearanceAlternatives = {
  eyes: ["blue eyes", "green eyes", "brown eyes"],
  length: ["short hair", "long hair"],
  style: ["straight hair", "curly hair", "wavy hair"],
  color: ["black hair", "blonde hair", "brown hair"]
};

let haveGotHasGotAppearanceRemaining = new Map();

function shuffleHaveGotItems(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function haveGotImagePath(character) {
  return `images/roster/portraits/${character.name.toLowerCase()}.webp`;
}

function haveGotSubject(character) {
  if (character.gender === "girl" && Math.random() < 0.5) return "She";
  return character.name;
}

function buildHaveGotQuestion(character, trait, answer, idPart) {
  const subject = haveGotSubject(character);
  return {
    id: `have-got-${character.name.toLowerCase()}-${idPart}`,
    imagePath: haveGotImagePath(character),
    imageFocus: { x: 255, y: 190, baseWidth: 500, baseHeight: 500, zoom: 2 },
    visualBrief: `${character.name} portrait focused on eyes and hair.`,
    referenceType: "HAVE GOT / HAS GOT",
    prompt: `${subject} ____ ${trait}.`,
    exerciseSentence: "Choose the correct form.",
    instruction: "Choose the correct form.",
    options: ["have got", "has got", "haven't got", "hasn't got"],
    answer
  };
}

function isConfusingHairStylePair(actualTrait, distractorTrait) {
  return (
    (actualTrait === "curly hair" && distractorTrait === "wavy hair") ||
    (actualTrait === "wavy hair" && distractorTrait === "curly hair")
  );
}

function buildHaveGotAppearancePoolForCharacter(character) {
  const correctQuestions = [];
  const wrongQuestions = [];
  const traits = ["eyes", "length", "style", "color"];

  traits.forEach((traitKey) => {
    const trait = character[traitKey];
    correctQuestions.push(buildHaveGotQuestion(
      character,
      trait,
      "has got",
      `${traitKey}-correct`
    ));

    haveGotHasGotAppearanceAlternatives[traitKey]
      .filter((item) => item !== trait)
      .filter((item) => traitKey !== "style" || !isConfusingHairStylePair(trait, item))
      .forEach((wrongTrait, wrongIndex) => wrongQuestions.push(buildHaveGotQuestion(
        character,
        wrongTrait,
        "hasn't got",
        `${traitKey}-alternative-${wrongIndex + 1}`
      )));
  });

  if (character.glasses) {
    correctQuestions.push(buildHaveGotQuestion(
      character,
      "glasses",
      "has got",
      "glasses-correct"
    ));
    wrongQuestions.push(buildHaveGotQuestion(
      character,
      "glasses",
      "hasn't got",
      "glasses-negative"
    ));
  }

  return shuffleHaveGotItems([
    ...correctQuestions,
    ...shuffleHaveGotItems(wrongQuestions).slice(0, correctQuestions.length)
  ]);
}

function resetHaveGotAppearancePools() {
  haveGotHasGotAppearanceRemaining = new Map(
    haveGotHasGotAppearanceCharacters.map((character) => [
      character.name,
      buildHaveGotAppearancePoolForCharacter(character)
    ])
  );
}

function haveGotAppearanceHasFullSet() {
  return haveGotHasGotAppearanceCharacters.every((character) =>
    (haveGotHasGotAppearanceRemaining.get(character.name) || []).length > 0
  );
}

const haveGotHasGotAppearanceChoice = window.exerciseActivityModules.choice({
  id: "have-got-has-got-appearance-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "have-got-has-got";
  },
  reset() {
    resetHaveGotAppearancePools();
  },
  hasMoreQuestions() {
    return haveGotAppearanceHasFullSet();
  },
  buildQuestions() {
    if (!haveGotHasGotAppearanceRemaining.size) resetHaveGotAppearancePools();
    if (!haveGotAppearanceHasFullSet()) return [];

    return shuffleHaveGotItems(haveGotHasGotAppearanceCharacters).map((character) => {
      const pool = haveGotHasGotAppearanceRemaining.get(character.name);
      return pool.shift();
    });
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(haveGotHasGotAppearanceChoice);
