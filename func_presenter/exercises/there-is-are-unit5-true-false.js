const houseRoomTrueFalsePools = [
  {
    imagePath: "images/thereis-thereare/chloe-sitting-room.webp",
    statements: [
      ["There is a sofa.", true],
      ["There isn't a sofa.", false],
      ["There are two armchairs.", true],
      ["There aren't two armchairs.", false],
      ["There is only one armchair.", false],
      ["There is a piano.", true],
      ["There isn't a piano.", false],
      ["There are two bookcases.", true],
      ["There aren't two bookcases.", false],
      ["There is only one bookcase.", false],
      ["There is a lamp.", true],
      ["There isn't a lamp.", false],
      ["There is a table.", true],
      ["There isn't a table.", false],
      ["There is a bed.", false],
      ["There isn't a bed.", true],
      ["There is a fridge.", false],
      ["There isn't a fridge.", true],
      ["There is a toilet.", false],
      ["There isn't a toilet.", true]
    ]
  },
  {
    imagePath: "images/thereis-thereare/chloe-kitchen.webp",
    statements: [
      ["There are three chairs.", true],
      ["There aren't three chairs.", false],
      ["There is only one chair.", false],
      ["There are two lamps.", true],
      ["There aren't two lamps.", false],
      ["There is only one lamp.", false],
      ["There is a fridge.", true],
      ["There isn't a fridge.", false],
      ["There is a dishwasher.", true],
      ["There isn't a dishwasher.", false],
      ["There is a piano.", false],
      ["There isn't a piano.", true],
      ["There is a bed.", false],
      ["There isn't a bed.", true],
      ["There is a sofa.", false],
      ["There isn't a sofa.", true],
      ["There is a fireplace.", false],
      ["There isn't a fireplace.", true]
    ]
  },
  {
    imagePath: "images/thereis-thereare/chloe-bathroom.webp",
    statements: [
      ["There is a bath tube.", true],
      ["There isn't a bath tube.", false],
      ["There are two mirrors.", true],
      ["There aren't two mirrors.", false],
      ["There is only one mirror.", false],
      ["There is a washing machine.", false],
      ["There isn't a washing machine.", true],
      ["There is a bed.", false],
      ["There isn't a bed.", true],
      ["There is a sofa.", false],
      ["There isn't a sofa.", true],
      ["There is a fridge.", false],
      ["There isn't a fridge.", true]
    ]
  },
  {
    imagePath: "../images/5/5/23.webp",
    statements: [
      ["There is a bed.", true],
      ["There isn't a bed.", false],
      ["There is a television.", true],
      ["There isn't a television.", false],
      ["There is a table.", true],
      ["There isn't a table.", false],
      ["There is a chair.", true],
      ["There isn't a chair.", false],
      ["There are pillows.", true],
      ["There aren't pillows.", false],
      ["There is a cupboard.", true],
      ["There isn't a cupboard.", false],
      ["There is a fridge.", false],
      ["There isn't a fridge.", true],
      ["There is a dishwasher.", false],
      ["There isn't a dishwasher.", true],
      ["There is a fireplace.", false],
      ["There isn't a fireplace.", true],
      ["There is a bookcase.", false],
      ["There isn't a bookcase.", true]
    ]
  }
];

function buildHouseRoomTrueFalsePages() {
  const pools = houseRoomTrueFalsePools.map((room) => ({
    imagePath: room.imagePath,
    statements: shuffleActivityItems(room.statements)
  }));
  const pages = [];
  let madePage = true;
  while (madePage) {
    madePage = false;
    pools.forEach((pool, poolIndex) => {
      if (pool.statements.length < 8) return;
      madePage = true;
      const pageStatements = pool.statements.splice(0, 8);
      pages.push({
        imagePath: pool.imagePath,
        questions: pageStatements.map(([sentence, isTrue], statementIndex) => ({
          id: `house-room-tf-${poolIndex + 1}-${pages.length + 1}-${statementIndex + 1}`,
          prompt: sentence,
          options: ["true", "false"],
          answer: String(Boolean(isTrue)),
          imagePath: pool.imagePath
        }))
      });
    });
  }
  return pages;
}

const thereIsAreUnit5TrueFalseExercise = {
  activity: "true-false-grid",
  id: "there-is-are-unit5-true-false",
  title: "TRUE - FALSE",
  instruction: "LOOK AT THE ROOM AND MARK EACH SENTENCE TRUE OR FALSE.",
  continueLabel: "CONTINUE?",
  visualBrief: "Look at the room picture.",
  supports(functionModule) {
    return functionModule.id === "there-is-are-unit5";
  },
  buildPages: buildHouseRoomTrueFalsePages
};

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(thereIsAreUnit5TrueFalseExercise);
