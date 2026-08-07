(() => {
window.LeagueListening = window.LeagueListening || {};
const { GAME_CONFIG, teamColors, createJokerState, resetRoundJokers } = window.LeagueListening;

function createGameState({ groups, groupNames, itemPicker, roundLimit }) {
  return {
    groups: groups.map((students, index) => ({ id: index, name: groupNames[index] || `GRUP ${index + 1}`, color: teamColors[index], score: 0, streak: 0, jokers: createJokerState(), students: students.map((student) => ({ name: typeof student === "string" ? student : student.name, avatarPath: typeof student === "string" ? "" : student.avatarPath || "", score: 0 })) })),
    itemPicker, round: 1, roundLimit, groupIndex: 0, studentIndexes: groups.map(() => 0), turnsInRound: 0,
    question: null, difficulty: null, videoPlays: 0, subtitlesShown: false, answered: false, doubleOrNothing: false, phase: "announce", timerId: null, secondsLeft: GAME_CONFIG.answerSeconds
  };
}

function activePlayer(state) {
  const group = state.groups[state.groupIndex];
  return { group, student: group.students[state.studentIndexes[state.groupIndex]] };
}

function startQuestion(state) {
  state.question = state.itemPicker(); state.difficulty = null; state.videoPlays = 0; state.subtitlesShown = false; state.answered = false; state.doubleOrNothing = false; state.secondsLeft = GAME_CONFIG.answerSeconds; state.phase = "video";
  return state.question;
}

  function recordVideoPlay(state) {
   if (state.videoPlays >= GAME_CONFIG.maxVideoPlays) return false;
   state.videoPlays += 1;
   return true;
 }

function setDifficulty(state, difficulty) { if (!state || !["easy", "medium"].includes(difficulty) || state.phase !== "video") return false; state.difficulty = difficulty; return true; }

function revealSubtitles(state) { if (state.subtitlesShown) return false; state.subtitlesShown = true; state.phase = "answer"; return true; }
function chooseNoSubtitles(state) { if (state.subtitlesShown) return false; state.phase = "answer"; return true; }

function answerQuestion(state, optionId) {
  if (state.answered || state.phase !== "answer") return null;
  state.answered = true; state.phase = "answered";
  const correct = optionId === state.question.correctOptionId;
  const basePoints = state.subtitlesShown ? GAME_CONFIG.score.withSubtitles : GAME_CONFIG.score.withoutSubtitles;
  const points = correct ? basePoints * (GAME_CONFIG.score.difficultyMultiplier[state.difficulty] || 1) * (state.doubleOrNothing ? 2 : 1) : 0;
  if (correct) { const { group, student } = activePlayer(state); group.score += points; student.score += points; }
  return { correct, points, correctOptionId: state.question.correctOptionId, doubleOrNothing: state.doubleOrNothing };
}

function advanceTurn(state) {
  state.turnsInRound += 1;
  const totalPlayers = state.groups.reduce((sum, group) => sum + group.students.length, 0);
  if (state.turnsInRound >= totalPlayers) { state.phase = "roundComplete"; return "roundComplete"; }
  state.studentIndexes[state.groupIndex] = (state.studentIndexes[state.groupIndex] + 1) % state.groups[state.groupIndex].students.length;
  state.groupIndex = (state.groupIndex + 1) % state.groups.length;
  state.phase = "announce";
  return "next";
}

function continueRound(state) { state.round += 1; state.turnsInRound = 0; state.phase = "announce"; resetRoundJokers(state); return state.round <= state.roundLimit; }

Object.assign(window.LeagueListening, { activePlayer, advanceTurn, answerQuestion, chooseNoSubtitles, continueRound, createGameState, recordVideoPlay, revealSubtitles, setDifficulty, startQuestion });
})();
