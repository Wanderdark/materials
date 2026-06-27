const simplePresentDailyRoutineChoiceBank = [
  ["I ... at 7 o'clock.", ["get up", "gets up"], "get up"],
  ["Then, I ... my face.", ["wash", "washes"], "wash"],
  ["Then, I ... my teeth.", ["brush", "brushes"], "brush"],
  ["I ... breakfast with my sister.", ["have", "has"], "have"],
  ["I ... orange juice at breakfast.", ["drink", "drinks"], "drink"],
  ["Laura ... milk.", ["drink", "drinks"], "drinks"],
  ["Laura sometimes ... tea.", ["drink", "drinks"], "drinks"],
  ["Laura ... her teeth after breakfast.", ["brush", "brushes"], "brushes"],
  ["I ... dressed.", ["get", "gets"], "get"],
  ["I ... clean school uniforms.", ["wear", "wears"], "wear"],
  ["We ... at school at 9 o'clock.", ["arrive", "arrives"], "arrive"],
  ["We ... to school by bus.", ["go", "goes"], "go"],
  ["We always ...", ["walk", "walks"], "walk"],
  ["First Lesson ... at half past nine.", ["start", "starts"], "starts"],
  ["We ... lessons until 12 p.m.", ["have", "has"], "have"],
  ["I ... lunch at the school canteen.", ["have", "has"], "have"],
  ["Laura ... lunch out with her friend Lucy.", ["have", "has"], "has"],
  ["Laura ... lunch at school.", ["have", "has"], "has"],
  ["I ... back home after school.", ["come", "comes"], "come"],
  ["I ... football after school.", ["play", "plays"], "play"],
  ["I ... playing football.", ["like", "likes"], "like"],
  ["I ... video games and relax.", ["play", "plays"], "play"],
  ["Laura ... video games.", ["play", "plays"], "plays"],
  ["My sister ... a book.", ["read", "reads"], "reads"],
  ["I ... my homeworks at the evening.", ["do", "does"], "do"],
  ["We ... dinner together.", ["have", "has"], "have"],
  ["Laura ... TV.", ["watch", "watches"], "watches"],
  ["She ... watching TV.", ["like", "likes"], "likes"],
  ["I ... TV.", ["watch", "watches"], "watch"],
  ["I ... watching it.", ["like", "likes"], "like"],
  ["I ... to some music.", ["listen", "listens"], "listen"],
  ["I ... to sleep.", ["prepare", "prepares"], "prepare"],
  ["I ... to bed late.", ["go", "goes"], "go"],
  ["I ... early.", ["sleep", "sleeps"], "sleep"],
  ["Laura ... early.", ["sleep", "sleeps"], "sleeps"],
  ["She ... to bed late.", ["go", "goes"], "goes"],
  ["We ... go to school by bus.", ["don't", "doesn't"], "don't"],
  ["Laura ... have lunch at school.", ["don't", "doesn't"], "doesn't"],
  ["I ... play football after school.", ["don't", "doesn't"], "don't"],
  ["I ... like playing football.", ["don't", "doesn't"], "don't"],
  ["Laura ... play video games.", ["don't", "doesn't"], "doesn't"],
  ["I ... watch TV.", ["don't", "doesn't"], "don't"],
  ["I ... like watching it.", ["don't", "doesn't"], "don't"],
  ["Laura ... early.", ["doesn't sleep", "sleeps"], "doesn't sleep"],
  ["She always ... to bed late.", ["go", "goes"], "goes"],
  ["Laura ... the guitar.", ["play", "plays"], "plays"]
];

window.simplePresentDailyRoutineChoiceBank = simplePresentDailyRoutineChoiceBank;

let simplePresentDailyRoutineRemaining = [];

function shuffleSimplePresentDailyRoutineQuestions(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

const simplePresentDailyRoutinesChoiceExercise = window.exerciseActivityModules.choice({
  id: "simple-present-daily-routines-choice",
  title: "CHOOSE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "simple-present-daily-routines";
  },
  reset() {
    simplePresentDailyRoutineRemaining = shuffleSimplePresentDailyRoutineQuestions(simplePresentDailyRoutineChoiceBank);
  },
  hasMoreQuestions() {
    return simplePresentDailyRoutineRemaining.length > 0;
  },
  buildQuestions() {
    if (!simplePresentDailyRoutineRemaining.length) return [];
    return simplePresentDailyRoutineRemaining.splice(0, 15).map(([prompt, options, answer], index) => ({
      id: `simple-present-daily-routines-choice-${index + 1}`,
      referenceType: "CHOOSE THE CORRECT OPTION",
      prompt,
      options,
      answer,
      textOnly: true,
      instruction: "Choose the correct verb form."
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePresentDailyRoutinesChoiceExercise);
