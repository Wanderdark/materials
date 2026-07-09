window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-character-hub-grade7",
  activity: "character-hub-popup",
  title: "CHARACTER DESCRIPTIONS",
  referenceType: "MATCH THE DESCRIPTION",
  visualBrief: "Choose a student and complete the sentence.",
  pageVisuals: [
    "images/common/collage-photo-4.webp",
    "images/common/collage-photo-5.webp"
  ],
  pageVisualAspect: "16 / 9",
  pageVisualFit: "cover",
  pages: [
    [
      {
        name: "Benjamin",
        imagePath: "images/common/students/13/benjamin.webp",
        sentence: "Benjamin has got <<straight/curly> hair and <<blue/brown> eyes."
      },
      {
        name: "Victoria",
        imagePath: "images/common/students/13/victoria.webp",
        sentence: "Victoria <<has got / hasn't got> glasses. She has got <<long / short> hair and blue eyes."
      },
      {
        name: "Daniel",
        imagePath: "images/common/students/13/daniel.webp",
        sentence: "Daniel has got <short / shoulder-length>> hair and <black / green>> eyes."
      },
      {
        name: "Noah",
        imagePath: "images/common/students/13/noah.webp",
        sentence: "Noah <<has got / hasn't got> glasses. He has got <<short / shoulder-length> hair."
      },
      {
        name: "Chloe",
        imagePath: "images/common/students/13/chloe.webp",
        sentence: "Chloe has got <straight / wavy>> hair and <green / blue>> eyes."
      },
      {
        name: "Hannah",
        imagePath: "images/common/students/13/hannah.webp",
        sentence: "Hannah has got <<straight / wavy> hair and <hazel / blue>> eyes."
      },
      {
        name: "Zoe",
        imagePath: "images/common/students/13/zoe.webp",
        sentence: "Zoe has got <<black / blonde> hair. She <has got / hasn't got>> glasses."
      },
      {
        name: "Lucas",
        imagePath: "images/common/students/13/lucas.webp",
        sentence: "Lucas has got <straight / curly>> hair and <green / brown>> eyes."
      }
    ],
    [
      {
        name: "Jack",
        imagePath: "images/common/students/13/jack.webp",
        sentence: "Jack <is / has got>> <long / short>> hair and brown eyes."
      },
      {
        name: "Ella",
        imagePath: "images/common/students/13/ella.webp",
        sentence: "Ella has got <short / shoulder-length>> and <dark / blonde>> hair."
      },
      {
        name: "Emma",
        imagePath: "images/common/students/13/emma.webp",
        sentence: "Emma has got <<straight / wavy> <<dark / blonde> hair."
      },
      {
        name: "Olivia",
        imagePath: "images/common/students/13/olivia.webp",
        sentence: "Olivia <is / has got>> green eyes and <<short / long> hair."
      },
      {
        name: "Ava",
        imagePath: "images/common/students/13/ava.webp",
        sentence: "Ava has got <straight / curly>> hair and she <isn't / hasn't got>> glasses."
      },
      {
        name: "Ethan",
        imagePath: "images/common/students/13/ethan.webp",
        sentence: "Ethan has got <dark / blonde>> hair and <brown / blue>> eyes."
      },
      {
        name: "Mia",
        imagePath: "images/common/students/13/mia.webp",
        sentence: "Mia has got <<long / short> and <<wavy / straight> hair."
      },
      {
        name: "David",
        imagePath: "images/common/students/13/david.webp",
        sentence: "David has got <<short / shoulder-length> and <blonde / dark>> hair."
      }
    ]
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance" && functionModule.grade === 7 && functionModule.unit === 1;
  }
});
