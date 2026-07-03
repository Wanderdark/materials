const canPermissionChoicePrompts = [
  "Can I play your piano?",
  "Can I ride skateboard?",
  "Can you lend me your scooter?",
  "Can I use your computer please?",
  "Can you lend me your laptop?",
  "Can I try your Rubik's cube?",
  "Can I borrow your bike please?",
  "Can you lend me your bicycle?",
  "Can I borrow your pencil?",
  "Can you lend me your course book please?",
  "Can I have a look?",
  "Can I ask a question please?",
  "Can I go to the restroom please?",
  "Can I try this t-shirt on?",
  "Can I go to my friend's birthday party?",
  "Can I use your rubber, please?",
  "Can you lend me your eraser?",
  "Can I sit here?",
  "Can I play with my toys?",
  "Can I watch television, please?",
  "Can I open the window?",
  "Can I go online?",
  "Can I use your phone, please?",
  "Can I borrow your ruler?",
  "Can you lend me your dictionary?",
  "Can I use your colored pencils?",
  "Can you lend me your headphones?",
  "Can I try your jacket on?",
  "Can I sit next to you?",
  "Can I join your game?"
];

let canPermissionChoiceRemaining = [];

function shuffleCanPermissionItems(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function isCanYouQuestion(prompt) {
  return /^Can you\b/i.test(prompt);
}

function canUseHaveItAnswer(prompt) {
  return /\b(lend|borrow|use)\b/i.test(prompt);
}

function buildAcceptAnswers(prompt) {
  const youQuestion = isCanYouQuestion(prompt);
  const answers = [
    "Sure,",
    "Of course,",
    "Okay,",
    "Sure, why not.",
    youQuestion ? "Sure, I can." : "Sure, you can.",
    youQuestion ? "Of course, I can." : "Of course, you can."
  ];
  if (!youQuestion && canUseHaveItAnswer(prompt)) answers.push("Sure, you can have it.");
  return answers;
}

function buildRefuseAnswers(prompt) {
  const youQuestion = isCanYouQuestion(prompt);
  const answers = [
    "Sorry, no.",
    "No way!",
    youQuestion ? "I'm sorry, I can't." : "I'm sorry, you can't.",
    "I'm sorry."
  ];
  if (/\bborrow\b/i.test(prompt)) answers.push("Sorry.");
  if (/\b(lend|borrow)\b/i.test(prompt)) answers.push("I need it.");
  return answers;
}

function buildCanPermissionChoiceQuestion(prompt, index) {
  const mode = Math.random() < 0.5 ? "ACCEPT" : "REFUSE";
  const acceptAnswers = buildAcceptAnswers(prompt);
  const refuseAnswers = buildRefuseAnswers(prompt);
  const correctPool = mode === "ACCEPT" ? acceptAnswers : refuseAnswers;
  const distractorPool = mode === "ACCEPT" ? refuseAnswers : acceptAnswers;
  const answer = shuffleCanPermissionItems(correctPool)[0];
  const distractors = shuffleCanPermissionItems(distractorPool).slice(0, 2);
  return {
    id: `can-permission-choice-${index + 1}-${mode.toLowerCase()}`,
    textOnly: true,
    referenceType: mode,
    referenceClass: "choice-mode-prompt",
    prompt,
    instruction: `Choose a ${mode.toLowerCase()} answer.`,
    options: shuffleCanPermissionItems([answer, ...distractors]),
    answer
  };
}

function buildCanPermissionChoicePool() {
  return shuffleCanPermissionItems(canPermissionChoicePrompts.map(buildCanPermissionChoiceQuestion));
}

const canPermissionChoiceExercise = window.exerciseActivityModules.choice({
  id: "can-permission-choice",
  title: "ACCEPT OR REFUSE",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "can-permission";
  },
  reset() {
    canPermissionChoiceRemaining = buildCanPermissionChoicePool();
  },
  hasMoreQuestions() {
    return canPermissionChoiceRemaining.length > 0;
  },
  buildQuestions() {
    if (!canPermissionChoiceRemaining.length) canPermissionChoiceRemaining = buildCanPermissionChoicePool();
    return canPermissionChoiceRemaining.splice(0, 10);
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(canPermissionChoiceExercise);
