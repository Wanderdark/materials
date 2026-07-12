function splitSimplePastMistakeSentence(sentence) {
  return sentence.trim().split(/\s+/);
}

function normalizeSimplePastMistakeToken(token) {
  return token
    .replace(/[.,!?]/g, "")
    .replace(/[’']/g, "'")
    .toLowerCase();
}

function makeSimplePastCorrectItem(sentence, index) {
  return {
    id: `simple-past-correct-${index + 1}`,
    sentence,
    correct: true,
    parts: splitSimplePastMistakeSentence(sentence),
    fixedSentence: sentence
  };
}

function makeSimplePastWrongItem(sentence, fixedSentence, wrongText, index) {
  const parts = splitSimplePastMistakeSentence(sentence);
  const wrongNeedle = normalizeSimplePastMistakeToken(wrongText);
  return {
    id: `simple-past-wrong-${index + 1}`,
    sentence,
    correct: false,
    parts,
    errorIndex: parts.findIndex((part) => normalizeSimplePastMistakeToken(part) === wrongNeedle),
    fixedSentence
  };
}

function shuffleSimplePastMistakes(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function takeSimplePastMistakes(source, count) {
  return source.splice(0, Math.min(count, source.length));
}

const simplePastCorrectSentences = [
  "Did Ava feed the animals before school yesterday?",
  "Did you ride your scooter to the park yesterday?",
  "Did Chloe wear her new dance shoes yesterday?",
  "Did Daniel go skiing with his family last year?",
  "Did David sleep in a tent during the camping trip last weekend?",
  "Did Ella sing her favorite song at the festival last month?",
  "Did Emma make a cake for her family yesterday evening?",
  "Did Mia write about the school trip in her diary last night?",
  "Did Olivia take photos of the birds in the garden?",
  "We sang a cheerful song at the school festival two months ago.",
  "We didn't swim after school yesterday.",
  "Benjamin didn't use his skateboard yesterday afternoon.",
  "Emma didn't make a chocolate cake yesterday evening.",
  "We didn't sleep in a hotel during the trip last month.",
  "I didn't read a comic book in the library yesterday.",
  "Ella sang a cheerful song at the school festival last week.",
  "Mia wrote about her weekend in her diary yesterday evening.",
  "Olivia took some beautiful photos in the park last Sunday.",
  "Lucas went to football practice after school yesterday.",
  "Benjamin rode his scooter around the neighborhood yesterday.",
  "Emma made some strawberry cupcakes with her mother last night.",
  "David slept in a tent during the family camping trip two weeks ago.",
  "Noah read a science book in the library last week.",
  "Noah solved some puzzles yesterday.",
  "Emma didn't prepare dessert yesterday evening.",
  "They played table tennis two days ago.",
  "He came to school late yesterday.",
  "She didn't come to school yesterday.",
  "Olivia took some photos of the birds last Sunday.",
  "Ava didn't clean their cages yesterday.",
  "Ethan didn't play the violin yesterday.",
  "He watered the vegetables on the farm last weekend.",
  "David travelled to Norway three months ago.",
  "We played basketball yesterday.",
  "He didn't do his homework last night.",
  "I played soccer after school yesterday.",
  "Ella practised a new song last Sunday.",
  "She cooked pasta for dinner yesterday evening.",
  "He rode his bike to the playground yesterday.",
  "Victoria wrote a simple game code last night.",
  "Noah studied English yesterday.",
  "Ava helped an injured bird two weeks ago.",
  "I saw an old friend at the bus stop.",
  "We had breakfast at seven o'clock.",
  "They lived in Ankara for five years.",
  "My mother called me after dinner.",
  "She bought a new notebook for school.",
  "The shop sold all the sandwiches.",
  "The student asked the teacher a question.",
  "I got a good grade in English.",
  "He lost his school ID card.",
  "We sat near the window in the classroom.",
  "The children drew pictures in the art lesson.",
  "Our teacher spoke about the school trip.",
  "She told me an interesting story.",
  "The students left the classroom at noon.",
  "Our school team won the basketball match.",
  "Tom broke his favourite cup.",
  "I felt tired after the exam.",
  "My father drove me to school.",
  "The teacher brought some books to class.",
  "The glass fell off the table.",
  "My friend gave me a pencil.",
  "We caught the school bus in the morning.",
  "The children ran in the playground.",
  "I woke up late on Sunday."
];

const simplePastWrongPairs = [
  ["Do Ava feed the animals before school yesterday?", "Did Ava feed the animals before school yesterday?", "Do"],
  ["Did you rode your scooter to the park yesterday?", "Did you ride your scooter to the park yesterday?", "rode"],
  ["Does Chloe wear her new dance shoes yesterday?", "Did Chloe wear her new dance shoes yesterday?", "Does"],
  ["Did Daniel went skiing with his family last year?", "Did Daniel go skiing with his family last year?", "went"],
  ["Did David slept in a tent during the camping trip last weekend?", "Did David sleep in a tent during the camping trip last weekend?", "slept"],
  ["Did Ella sang her favorite song at the festival last month?", "Did Ella sing her favorite song at the festival last month?", "sang"],
  ["Does Emma make a cake for her family yesterday evening?", "Did Emma make a cake for her family yesterday evening?", "Does"],
  ["Did Mia wrote about the school trip in her diary last night?", "Did Mia write about the school trip in her diary last night?", "wrote"],
  ["Do Olivia take photos of the birds in the garden?", "Did Olivia take photos of the birds in the garden?", "Do"],
  ["We sing a cheerful song at the school festival two months ago.", "We sang a cheerful song at the school festival two months ago.", "sing"],
  ["We don't swim after school yesterday.", "We didn't swim after school yesterday.", "don't"],
  ["Benjamin didn't used his skateboard yesterday afternoon.", "Benjamin didn't use his skateboard yesterday afternoon.", "used"],
  ["Emma doesn't make a chocolate cake yesterday evening.", "Emma didn't make a chocolate cake yesterday evening.", "doesn't"],
  ["We didn't slept in a hotel during the trip last month.", "We didn't sleep in a hotel during the trip last month.", "slept"],
  ["I don't read a comic book in the library yesterday.", "I didn't read a comic book in the library yesterday.", "don't"],
  ["Ella sang a cheerful song at the school festival now.", "Ella sang a cheerful song at the school festival last week.", "now"],
  ["Mia write about her weekend in her diary yesterday evening.", "Mia wrote about her weekend in her diary yesterday evening.", "write"],
  ["Olivia took some beautiful photos in the park at the moment.", "Olivia took some beautiful photos in the park last Sunday.", "moment"],
  ["Lucas go to football practice after school yesterday.", "Lucas went to football practice after school yesterday.", "go"],
  ["Benjamin ride his scooter around the neighborhood yesterday.", "Benjamin rode his scooter around the neighborhood yesterday.", "ride"],
  ["Emma make some strawberry cupcakes with her mother last night.", "Emma made some strawberry cupcakes with her mother last night.", "make"],
  ["David sleep in a tent during the family camping trip two weeks ago.", "David slept in a tent during the family camping trip two weeks ago.", "sleep"],
  ["Noah reads a science book in the library last week.", "Noah read a science book in the library last week.", "reads"],
  ["Noah solves some puzzles yesterday.", "Noah solved some puzzles yesterday.", "solves"],
  ["Emma didn't prepared dessert yesterday evening.", "Emma didn't prepare dessert yesterday evening.", "prepared"],
  ["They play table tennis two days ago.", "They played table tennis two days ago.", "play"],
  ["He comes to school late yesterday.", "He came to school late yesterday.", "comes"],
  ["She doesn't come to school yesterday.", "She didn't come to school yesterday.", "doesn't"],
  ["Olivia takes some photos of the birds last Sunday.", "Olivia took some photos of the birds last Sunday.", "takes"],
  ["Ava didn't cleaned their cages yesterday.", "Ava didn't clean their cages yesterday.", "cleaned"],
  ["Ethan doesn't play the violin yesterday.", "Ethan didn't play the violin yesterday.", "doesn't"],
  ["He water the vegetables on the farm last weekend.", "He watered the vegetables on the farm last weekend.", "water"],
  ["David travelled to Norway at the moment.", "David travelled to Norway three months ago.", "moment"],
  ["We playing basketball yesterday.", "We played basketball yesterday.", "playing"],
  ["He doesn't do his homework last night.", "He didn't do his homework last night.", "doesn't"],
  ["I plays soccer after school yesterday.", "I played soccer after school yesterday.", "plays"],
  ["Ella practised a new song now.", "Ella practised a new song last Sunday.", "now"],
  ["She cooks pasta for dinner yesterday evening.", "She cooked pasta for dinner yesterday evening.", "cooks"],
  ["He rides his bike to the playground yesterday.", "He rode his bike to the playground yesterday.", "rides"],
  ["Victoria write a simple game code last night.", "Victoria wrote a simple game code last night.", "write"],
  ["Noah study English yesterday.", "Noah studied English yesterday.", "study"],
  ["Ava helps an injured bird two weeks ago.", "Ava helped an injured bird two weeks ago.", "helps"],
  ["I see an old friend at the bus stop yesterday.", "I saw an old friend at the bus stop.", "see"],
  ["We have breakfast at seven o'clock yesterday.", "We had breakfast at seven o'clock.", "have"],
  ["They live in Ankara for five years.", "They lived in Ankara for five years.", "live"],
  ["My mother calls me after dinner yesterday.", "My mother called me after dinner.", "calls"],
  ["She buys a new notebook for school yesterday.", "She bought a new notebook for school.", "buys"],
  ["The shop sell all the sandwiches yesterday.", "The shop sold all the sandwiches.", "sell"],
  ["The student asks the teacher a question yesterday.", "The student asked the teacher a question.", "asks"],
  ["I get a good grade in English yesterday.", "I got a good grade in English.", "get"],
  ["He lose his school ID card yesterday.", "He lost his school ID card.", "lose"],
  ["We sit near the window in the classroom yesterday.", "We sat near the window in the classroom.", "sit"],
  ["The children draw pictures in the art lesson yesterday.", "The children drew pictures in the art lesson.", "draw"],
  ["Our teacher speak about the school trip yesterday.", "Our teacher spoke about the school trip.", "speak"],
  ["She tell me an interesting story yesterday.", "She told me an interesting story.", "tell"],
  ["The students leave the classroom at noon yesterday.", "The students left the classroom at noon.", "leave"],
  ["Our school team win the basketball match yesterday.", "Our school team won the basketball match.", "win"],
  ["Tom break his favourite cup yesterday.", "Tom broke his favourite cup.", "break"],
  ["I feel tired after the exam yesterday.", "I felt tired after the exam.", "feel"],
  ["My father drive me to school yesterday.", "My father drove me to school.", "drive"],
  ["The teacher bring some books to class yesterday.", "The teacher brought some books to class.", "bring"],
  ["The glass fall off the table yesterday.", "The glass fell off the table.", "fall"],
  ["My friend give me a pencil yesterday.", "My friend gave me a pencil.", "give"],
  ["We catch the school bus in the morning yesterday.", "We caught the school bus in the morning.", "catch"],
  ["The children run in the playground yesterday.", "The children ran in the playground.", "run"],
  ["I wake up late on Sunday.", "I woke up late on Sunday.", "wake"]
];

let simplePastMistakeCorrectRemaining = [];
let simplePastMistakeWrongRemaining = [];
let simplePastMistakeGroup = 0;

function resetSimplePastMistakePools() {
  const correctItems = simplePastCorrectSentences.map(makeSimplePastCorrectItem);
  const wrongItems = simplePastWrongPairs
    .map(([sentence, fixedSentence, wrongText], index) => makeSimplePastWrongItem(sentence, fixedSentence, wrongText, index))
    .filter((item) => item.errorIndex >= 0);
  simplePastMistakeCorrectRemaining = shuffleSimplePastMistakes(correctItems);
  simplePastMistakeWrongRemaining = shuffleSimplePastMistakes(wrongItems);
  simplePastMistakeGroup = 0;
}

const simplePastMistakeExercise = window.exerciseActivityModules.mistakeCorrectIt({
  id: "simple-past-mistake",
  title: "MISTAKE? CORRECT IT",
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "simple-past-tense-grade7";
  },
  reset() {
    resetSimplePastMistakePools();
  },
  hasMoreQuestions() {
    return simplePastMistakeGroup < 4
      && simplePastMistakeCorrectRemaining.length >= 5
      && simplePastMistakeWrongRemaining.length >= 5;
  },
  buildQuestions() {
    if (!simplePastMistakeCorrectRemaining.length || !simplePastMistakeWrongRemaining.length) {
      resetSimplePastMistakePools();
    }
    simplePastMistakeGroup += 1;
    const correctQuestions = takeSimplePastMistakes(simplePastMistakeCorrectRemaining, 5);
    const wrongQuestions = takeSimplePastMistakes(simplePastMistakeWrongRemaining, 5);
    return shuffleSimplePastMistakes([...correctQuestions, ...wrongQuestions]);
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePastMistakeExercise);
