window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "physical-appearance-student-match",
  activity: "student-match",
  title: "MATCH THE DESCRIPTION",
  students: [
    { id: 1,  name: "Ethan",    imagePath: "images/physical-appearance/students/ethan.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short curly blonde hair and blue eyes." },
    { id: 2,  name: "Emma",     imagePath: "images/physical-appearance/students/emma.webp",     hasGlasses: false, glassesType: null,          description: "S/he has long straight black hair and brown eyes." },
    { id: 3,  name: "Noah",     imagePath: "images/physical-appearance/students/noah.webp",     hasGlasses: true,  glassesType: "rectangular", description: "S/he has short straight brown hair and green eyes." },
    { id: 4,  name: "Lily",     imagePath: "images/physical-appearance/students/lily.webp",     hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length wavy red hair and green eyes." },
    { id: 5,  name: "Lucas",    imagePath: "images/physical-appearance/students/lucas.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short curly black hair and brown eyes." },
    { id: 6,  name: "Mia",      imagePath: "images/physical-appearance/students/mia.webp",      hasGlasses: false, glassesType: null,          description: "S/he has long wavy brown hair and blue eyes." },
    { id: 7,  name: "Jack",     imagePath: "images/physical-appearance/students/jack.webp",     hasGlasses: false, glassesType: null,          description: "S/he has short straight black hair and brown eyes." },
    { id: 8,  name: "Chloe",    imagePath: "images/physical-appearance/students/chloe.webp",    hasGlasses: false, glassesType: null,          description: "S/he has long curly blonde hair and blue eyes." },
    { id: 9,  name: "Oliver",   imagePath: "images/physical-appearance/students/oliver.webp",   hasGlasses: false, glassesType: null,          description: "S/he has short wavy brown hair and green eyes." },
    { id: 10, name: "Grace",    imagePath: "images/physical-appearance/students/grace.webp",    hasGlasses: true,  glassesType: "round",       description: "S/he has long straight red hair and brown eyes." },
    { id: 11, name: "Benjamin", imagePath: "images/physical-appearance/students/benjamin.webp", hasGlasses: false, glassesType: null,          description: "S/he has short straight blonde hair and blue eyes." },
    { id: 12, name: "Ava",      imagePath: "images/physical-appearance/students/ava.webp",      hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length curly black hair and green eyes." },
    { id: 13, name: "Daniel",   imagePath: "images/physical-appearance/students/daniel.webp",   hasGlasses: false, glassesType: null,          description: "S/he has short wavy blonde hair and green eyes." },
    { id: 14, name: "Sophia",   imagePath: "images/physical-appearance/students/sophia.webp",   hasGlasses: false, glassesType: null,          description: "S/he has long straight brown hair and blue eyes." },
    { id: 15, name: "Henry",    imagePath: "images/physical-appearance/students/henry.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short curly red hair and brown eyes." },
    { id: 16, name: "Ella",     imagePath: "images/physical-appearance/students/ella.webp",     hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length wavy blonde hair and green eyes." },
    { id: 17, name: "Samuel",   imagePath: "images/physical-appearance/students/samuel.webp",   hasGlasses: true,  glassesType: "rectangular", description: "S/he has short straight black hair and blue eyes." },
    { id: 18, name: "Zoe",      imagePath: "images/physical-appearance/students/zoe.webp",      hasGlasses: false, glassesType: null,          description: "S/he has long curly black hair and brown eyes." },
    { id: 19, name: "Leo",      imagePath: "images/physical-appearance/students/leo.webp",      hasGlasses: false, glassesType: null,          description: "S/he has short curly brown hair and green eyes." },
    { id: 20, name: "Hannah",   imagePath: "images/physical-appearance/students/hannah.webp",   hasGlasses: false, glassesType: null,          description: "S/he has long straight blonde hair and blue eyes." },
    { id: 21, name: "Mason",    imagePath: "images/physical-appearance/students/mason.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short straight red hair and brown eyes." },
    { id: 22, name: "Scarlett", imagePath: "images/physical-appearance/students/scarlet.webp",  hasGlasses: false, glassesType: null,          description: "S/he has shoulder-length curly brown hair and green eyes." },
    { id: 23, name: "David",    imagePath: "images/physical-appearance/students/david.webp",    hasGlasses: false, glassesType: null,          description: "S/he has short wavy black hair and brown eyes." },
    { id: 24, name: "Victoria", imagePath: "images/physical-appearance/students/victoria.webp", hasGlasses: true,  glassesType: "round",       description: "S/he has long wavy black hair and blue eyes." }
  ],
  supports(functionModule) {
    return functionModule.id === "physical-appearance";
  }
});
