let canCapabilityYesRemaining = [];
let canCapabilityNoRemaining = [];

const canCapabilityAbilities = ["fly", "climb", "move fast", "swim", "attack", "talk"];

function canCapabilityTitleCase(value) {
  return value.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function canCapabilityArticle(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function canCapabilityQuestionText(animalName, ability) {
  const article = canCapabilityArticle(animalName);
  return `Can ${article} ${animalName.toLowerCase()} ${ability}?`;
}

function canCapabilityImagePath(animal) {
  return animal.imagePath || "";
}

function buildCanCapabilityPools() {
  const data = window.wildLifeWhData;
  const yamlText = window.wildLifeWhQuestionsYamlText || "";
  const animals = data.parseYaml(yamlText);
  const yes = [];
  const no = [];

  animals.forEach((animal) => {
    const abilities = Array.isArray(animal.abilities) ? animal.abilities : [];
    canCapabilityAbilities.forEach((ability) => {
      const canDo = abilities.includes(ability);
      const animalName = canCapabilityTitleCase(animal.name);
      const question = {
        id: `can-capability-${animal.name.toLowerCase()}-${ability.replace(/\s+/g, "-")}`,
        referenceType: canDo ? "YES, IT CAN" : "NO, IT CAN'T",
        prompt: canCapabilityQuestionText(animal.name, ability),
        instruction: "Choose the correct answer.",
        visualBrief: animalName,
        imagePath: canCapabilityImagePath(animal),
        options: ["Yes, it can.", "No, it can't."],
        answer: canDo ? "Yes, it can." : "No, it can't."
      };
      (canDo ? yes : no).push(question);
    });
  });

  return {
    yes: shuffleActivityItems(yes),
    no: shuffleActivityItems(no)
  };
}

function resetCanCapabilityPools() {
  const pools = buildCanCapabilityPools();
  canCapabilityYesRemaining = pools.yes;
  canCapabilityNoRemaining = pools.no;
}

function takeCanCapabilitySet() {
  if (canCapabilityYesRemaining.length < 5 || canCapabilityNoRemaining.length < 5) {
    resetCanCapabilityPools();
  }
  return shuffleActivityItems([
    ...canCapabilityYesRemaining.splice(0, 5),
    ...canCapabilityNoRemaining.splice(0, 5)
  ]);
}

const canCapabilityChoiceExercise = window.exerciseActivityModules.choice({
  id: "can-capability-choice",
  title: "CAN / CAN'T QUESTIONS",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "can-capability";
  },
  reset() {
    resetCanCapabilityPools();
  },
  hasMoreQuestions() {
    return canCapabilityYesRemaining.length >= 5 && canCapabilityNoRemaining.length >= 5;
  },
  buildQuestions() {
    if (canCapabilityYesRemaining.length < 5 || canCapabilityNoRemaining.length < 5) resetCanCapabilityPools();
    return takeCanCapabilitySet();
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(canCapabilityChoiceExercise);
