const registeredExercises = window.exerciseModules || [];

window.exerciseRegistry = {
  getExercisesForFunction(functionModule) {
    return registeredExercises.filter((exercise) =>
      functionModule.exercises?.includes(exercise.id) && exercise.supports(functionModule)
    );
  },
  getExerciseForFunction(functionModule) {
    return this.getExercisesForFunction(functionModule)[0] || null;
  }
};
