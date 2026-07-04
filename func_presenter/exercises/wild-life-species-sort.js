function buildWildLifeSpeciesSortBoard() {
  const data = window.wildLifeWhData;
  const yamlText = window.wildLifeWhQuestionsYamlText || "";
  const animals = data.parseYaml(yamlText);

  const allowedMammals = new Set(["ELEPHANT", "LION", "TIGER", "WOLF", "BEAR"]);
  const extraSpeciesSortCards = [
    { name: "BUTTERFLY", species: "insect" },
    { name: "ANT", species: "insect" },
    { name: "MOSQUITO", species: "insect" },
    { name: "LADYBUG", species: "insect" },
    { name: "TURTLE", species: "reptile" },
    { name: "LIZARD", species: "reptile" },
    { name: "CHAMELEON", species: "reptile" },
    { name: "TUNA", species: "fish" },
    { name: "GOLDFISH", species: "fish" },
    { name: "SALMON", species: "fish" },
    { name: "WHALE", species: "fish" }
  ];
  const sortAnimals = [
    ...animals.filter((animal) => (
      animal.name.toUpperCase() !== "WHALE"
      && (animal.species !== "mammal" || allowedMammals.has(animal.name.toUpperCase()))
    )),
    ...extraSpeciesSortCards
  ];
  const categories = [...new Set(sortAnimals.map((animal) => animal.species).filter(Boolean))]
    .map((species) => species.toUpperCase())
    .sort();

  return {
    categories,
    cards: shuffleActivityItems(sortAnimals.map((animal) => ({
      id: `wild-life-species-sort-${animal.name.toLowerCase()}`,
      label: animal.name,
      category: animal.species.toUpperCase()
    })))
  };
}

const wildLifeSpeciesSortExercise = window.exerciseActivityModules.sort({
  id: "wild-life-species-sort",
  title: "SORT BY SPECIES",
  supports(functionModule) {
    return functionModule.id === "wild-life-wh-questions";
  },
  buildBoard() {
    return buildWildLifeSpeciesSortBoard();
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(wildLifeSpeciesSortExercise);
