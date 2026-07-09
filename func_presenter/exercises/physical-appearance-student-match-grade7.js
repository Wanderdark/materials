window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-student-match-grade7",
  activity: "student-match",
  title: "MATCH THE DESCRIPTION",
  studentImageZoom: 1.35,
  students: [
    { id: 1,  name: "Ethan",    imagePath: "images/common/students/13/ethan.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short curly blonde hair and blue eyes." },
    { id: 2,  name: "Emma",     imagePath: "images/common/students/13/emma.webp",     hasGlasses: false, glassesType: null,          description: "S/he has long straight black hair and brown eyes." },
    { id: 3,  name: "Noah",     imagePath: "images/common/students/13/noah.webp",     hasGlasses: true,  glassesType: "rectangular", description: "S/he has short straight brown hair and green eyes." },
    { id: 5,  name: "Lucas",    imagePath: "images/common/students/13/lucas.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short curly black hair and brown eyes." },
    { id: 6,  name: "Mia",      imagePath: "images/common/students/13/mia.webp",      hasGlasses: false, glassesType: null,          description: "S/he has long wavy brown hair and blue eyes." },
    { id: 7,  name: "Jack",     imagePath: "images/common/students/13/jack.webp",     hasGlasses: false, glassesType: null,          description: "S/he has short straight black hair and brown eyes." },
    { id: 8,  name: "Chloe",    imagePath: "images/common/students/13/chloe.webp",    hasGlasses: false, glassesType: null,          description: "S/he has long curly blonde hair and blue eyes." },
    { id: 11, name: "Benjamin", imagePath: "images/common/students/13/benjamin.webp", hasGlasses: false, glassesType: null,          description: "S/he has short straight blonde hair and blue eyes." },
    { id: 12, name: "Ava",      imagePath: "images/common/students/13/ava.webp",      hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length curly black hair and green eyes." },
    { id: 13, name: "Daniel",   imagePath: "images/common/students/13/daniel.webp",   hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length straight black hair" },
    { id: 16, name: "Ella",     imagePath: "images/common/students/13/ella.webp",     hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length wavy blonde hair and green eyes." },
    { id: 18, name: "Zoe",      imagePath: "images/common/students/13/zoe.webp",      hasGlasses: false, glassesType: null,          description: "S/he has long curly black hair and brown eyes." },
    { id: 20, name: "Hannah",   imagePath: "images/common/students/13/hannah.webp",   hasGlasses: false, glassesType: null,          description: "S/he has long straight blonde hair and blue eyes." },
    { id: 22, name: "Olivia",   imagePath: "images/common/students/13/olivia.webp",   hasGlasses: false, glassesType: null,          description: "S/he has short straight brown hair and green eyes." },
    { id: 23, name: "David",    imagePath: "images/common/students/13/david.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short wavy black hair and brown eyes." },
    { id: 24, name: "Victoria", imagePath: "images/common/students/13/victoria.webp", hasGlasses: true,  glassesType: "round",       description: "S/he has long wavy black hair and blue eyes." }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance" && functionModule.grade === 7;
  }
});
