let wildLifeWhChoiceRemaining = [];

function wildLifeChoiceTitleCase(value) {
  return value.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function wildLifeChoiceArticle(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function wildLifeChoiceBodyPhrase(bodyPart) {
  return bodyPart === "sharp teeth" ? bodyPart : `${wildLifeChoiceArticle(bodyPart)} ${bodyPart}`;
}

function wildLifeChoiceUniqueValues(animals, key) {
  return [...new Set(animals.flatMap((animal) => {
    const value = animal[key];
    return Array.isArray(value) ? value : [value];
  }).filter(Boolean))];
}

function wildLifeChoiceOptions(answer, pool, mapAnswer) {
  const distractors = shuffleActivityItems(pool.filter((item) => item !== answer)).slice(0, 2);
  return shuffleActivityItems([answer, ...distractors].map(mapAnswer));
}

function wildLifeChoiceBodyOptions(answer, animalBodyParts, allBodyParts) {
  const animalBodySet = new Set(animalBodyParts);
  const distractors = shuffleActivityItems(allBodyParts.filter((item) => !animalBodySet.has(item))).slice(0, 2);
  return shuffleActivityItems([answer, ...distractors].map((item) => `It has got ${wildLifeChoiceBodyPhrase(item)}.`));
}

function wildLifeChoiceImagePath(animal) {
  return animal.imagePath || "";
}

function buildWildLifeWhChoicePool() {
  const data = window.wildLifeWhData;
  const yamlText = window.wildLifeWhQuestionsYamlText || "";
  const animals = data.parseYaml(yamlText);
  const habitats = wildLifeChoiceUniqueValues(animals, "habitat");
  const diets = wildLifeChoiceUniqueValues(animals, "diet");
  const speciesList = wildLifeChoiceUniqueValues(animals, "species");
  const bodyParts = wildLifeChoiceUniqueValues(animals, "body_parts");

  return shuffleActivityItems(animals.flatMap((animal, index) => {
    const animalName = wildLifeChoiceTitleCase(animal.name);
    const animalNameLower = animal.name.toLowerCase();
    const article = wildLifeChoiceArticle(animal.name);
    const imagePath = wildLifeChoiceImagePath(animal);
    const animalBodyParts = Array.isArray(animal.body_parts) ? animal.body_parts : [animal.body_parts];
    const bodyPart = shuffleActivityItems(animalBodyParts)[0];
    return [
      {
        id: `wild-life-habitat-${index}`,
        referenceType: "HABITAT",
        prompt: `Where does ${article} ${animalNameLower} live?`,
        instruction: "Choose the correct answer.",
        visualBrief: animalName,
        imagePath,
        options: wildLifeChoiceOptions(animal.habitat, habitats, (item) => `It lives in the ${item}.`),
        answer: `It lives in the ${animal.habitat}.`
      },
      {
        id: `wild-life-diet-${index}`,
        referenceType: "DIET",
        prompt: `What does ${article} ${animalNameLower} eat?`,
        instruction: "Choose the correct answer.",
        visualBrief: animalName,
        imagePath,
        options: wildLifeChoiceOptions(animal.diet, diets, (item) => `It eats ${item}.`),
        answer: `It eats ${animal.diet}.`
      },
      {
        id: `wild-life-species-${index}`,
        referenceType: "SPECIES",
        prompt: `What type of animal is ${article} ${animalNameLower}?`,
        instruction: "Choose the correct answer.",
        visualBrief: animalName,
        imagePath,
        options: wildLifeChoiceOptions(animal.species, speciesList, (item) => `It is ${wildLifeChoiceArticle(item)} ${item}.`),
        answer: `It is ${wildLifeChoiceArticle(animal.species)} ${animal.species}.`
      },
      {
        id: `wild-life-body-${index}`,
        referenceType: "BODY PART",
        prompt: `Which body part has ${article} ${animalNameLower} got?`,
        instruction: "Choose the correct answer.",
        visualBrief: animalName,
        imagePath,
        options: wildLifeChoiceBodyOptions(bodyPart, animalBodyParts, bodyParts),
        answer: `It has got ${wildLifeChoiceBodyPhrase(bodyPart)}.`
      }
    ];
  }));
}

const wildLifeWhChoiceExercise = window.exerciseActivityModules.choice({
  id: "wild-life-wh-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "wild-life-wh-questions";
  },
  reset() {
    wildLifeWhChoiceRemaining = buildWildLifeWhChoicePool();
  },
  hasMoreQuestions() {
    return wildLifeWhChoiceRemaining.length > 0;
  },
  buildQuestions() {
    if (!wildLifeWhChoiceRemaining.length) wildLifeWhChoiceRemaining = buildWildLifeWhChoicePool();
    return wildLifeWhChoiceRemaining.splice(0, 10);
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(wildLifeWhChoiceExercise);
