const canPermissionLuckySpinItems = [
  { prompt: "Ask permission to play a friend's piano.", points: 5 },
  { prompt: "Ask permission to use a friend's laptop.", points: 5 },
  { prompt: "Ask permission to borrow a bike.", points: 5 },
  { prompt: "Ask permission to borrow a book.", points: 5 },
  { prompt: "Ask permission to look at a friend's diary.", points: 5 },
  { prompt: "Ask permission to try a coat.", points: 5 },
  { prompt: "Ask permission to play with toys.", points: 5 },
  { prompt: "Ask permission to go to the restroom.", points: 5 },
  { prompt: "Accept permission politely.", points: 5 },
  { prompt: "Accept permission politely.", points: 5 },
  { prompt: "Refuse permission politely.", points: 5 },
  { prompt: "Refuse permission politely.", points: 5 },
  { prompt: "Ask permission to answer a question.", points: 5 },
  { prompt: "Ask permission to join a party.", points: 5 },
  { prompt: "Ask permission to go out with friends.", points: 5 },
  { prompt: "Ask permission to open the window.", points: 5 }
];

const canPermissionLuckySpinExercise = window.exerciseActivityModules.luckySpin({
  id: "can-permission-lucky-spin",
  title: "LUCKY SPIN",
  supports(functionModule) {
    return functionModule.id === "can-permission";
  },
  buildItems() {
    return canPermissionLuckySpinItems.map((item, index) => ({
      id: `can-permission-spin-${index + 1}`,
      label: String(index + 1),
      ...item
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(canPermissionLuckySpinExercise);
