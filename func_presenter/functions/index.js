const registeredFunctions = window.functionModules || [];

window.functionRegistry = {
  functionModules: registeredFunctions,
  getFunctionsForGrade(grade) {
    return registeredFunctions.filter((module) => module.grade === Number(grade));
  },
  getUnitsForGrade(grade) {
    return [...new Set(registeredFunctions
      .filter((module) => module.grade === Number(grade) && Number(module.unit) > 0)
      .map((module) => Number(module.unit)))].sort((a, b) => a - b);
  },
  getFunctionsForGradeAndUnit(grade, unit) {
    return registeredFunctions.filter((module) => module.grade === Number(grade) && module.unit === Number(unit));
  }
};
