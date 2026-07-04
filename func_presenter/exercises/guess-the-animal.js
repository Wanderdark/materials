const guessAnimalYamlPath = "yaml/wild-life-wh-questions.yaml";

async function loadGuessAnimalYamlText() {
  try {
    const response = await fetch(guessAnimalYamlPath);
    if (response.ok) return response.text();
  } catch (error) {
    // file:// launches can block fetch; the script fallback keeps classroom use reliable.
  }
  if (window.wildLifeWhQuestionsYamlText) return window.wildLifeWhQuestionsYamlText;
  throw new Error(`Cannot load ${guessAnimalYamlPath}`);
}

function parseGuessAnimalList(value) {
  return value.replace(/^\[/, "").replace(/\]$/, "").split(",").map((item) => item.trim()).filter(Boolean);
}

function parseGuessAnimalYaml(text) {
  const animals = [];
  let current = null;
  text.split(/\r?\n/).forEach((line) => {
    const raw = line.trim();
    if (!raw || raw === "animals:") return;
    const image = raw.match(/^# image:\s*(.+)$/);
    if (image && current) {
      current.imagePath = image[1].trim();
      return;
    }
    if (raw.startsWith("#")) return;
    const start = raw.match(/^- name:\s*(.+)$/);
    if (start) {
      current = { name: start[1].trim() };
      animals.push(current);
      return;
    }
    if (!current) return;
    const pair = raw.match(/^([a-z_]+):\s*(.+)$/);
    if (!pair) return;
    const [, key, value] = pair;
    current[key] = value.startsWith("[") ? parseGuessAnimalList(value) : value.trim();
  });
  return animals;
}

function firstGuessAnimalValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function guessAnimalArticle(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function guessAnimalBodyPartPhrase(bodyPart) {
  return bodyPart === "sharp teeth" ? bodyPart : `${guessAnimalArticle(bodyPart)} ${bodyPart}`;
}

function buildGuessAnimalHints(animal) {
  const species = animal.species;
  const habitat = animal.habitat;
  const ability = firstGuessAnimalValue(animal.abilities);
  const bodyPart = firstGuessAnimalValue(animal.body_parts);
  const diet = animal.diet;
  return [
    `It is ${guessAnimalArticle(species)} ${species}.`,
    `It lives in the ${habitat}.`,
    `It can ${ability}.`,
    `It has got ${guessAnimalBodyPartPhrase(bodyPart)}.`,
    `It eats ${diet}.`
  ];
}

const guessTheAnimalExercise = {
  id: "guess-the-animal",
  title: "GUESS THE ANIMAL",
  activity: "guess-animal",
  supports(functionModule) {
    return functionModule.id === "wild-life-wh-questions";
  },
  async buildQuestions() {
    const yamlText = await loadGuessAnimalYamlText();
    return shuffleActivityItems(parseGuessAnimalYaml(yamlText)).map((animal) => ({
      name: animal.name,
      hints: buildGuessAnimalHints(animal)
    }));
  }
};

window.wildLifeWhData = {
  loadYamlText: loadGuessAnimalYamlText,
  parseYaml: parseGuessAnimalYaml,
  article: guessAnimalArticle,
  firstValue: firstGuessAnimalValue
};

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(guessTheAnimalExercise);
