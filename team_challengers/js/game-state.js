(() => {
  const TC = window.TeamChallengers;

  function createTurnOrder(groups) {
    const order = [];
    const longest = Math.max(...groups.map((group) => group.students.length));
    for (let studentIndex = 0; studentIndex < longest; studentIndex += 1) {
      groups.forEach((group, groupIndex) => {
        if (group.students[studentIndex]) order.push({ groupIndex, studentIndex });
      });
    }
    return order;
  }

  function jokerCapacity(studentCount) {
    if (studentCount < 3) return 0;
    return Math.min(3, Math.floor((studentCount + 1) / 3));
  }

  function resetGroupJokers(group) {
    group.jokers.remaining = group.jokers.capacity;
    group.jokers.spinAgainUsed = false;
  }

  function createGameState(rawGroups, groupNames) {
    const groups = rawGroups.map((students, groupIndex) => ({
      id: groupIndex,
      name: groupNames[groupIndex] || TC.CONFIG.groupDefaults[groupIndex],
      color: TC.CONFIG.groupColors[groupIndex],
      score: 0,
      students: students.map((student, studentIndex) => ({ id: student.id || `${groupIndex}-${studentIndex}`, name: student.name, avatarPath: student.avatarPath || "", level: Math.max(1, Number(student.level) || 1), score: 0 })),
      jokers: { capacity: jokerCapacity(students.length), remaining: jokerCapacity(students.length), spinAgainUsed: false }
    }));
    return { groups, round: 1, turnIndex: 0, turnOrder: createTurnOrder(groups), phase: "spin", wheelValue: 0, question: null, answered: false, turnJokers: { fiftyFifty: false, doublePoints: false } };
  }

  function activeTurn(state) {
    const slot = state.turnOrder[state.turnIndex];
    const group = state.groups[slot.groupIndex];
    return { group, student: group.students[slot.studentIndex], ...slot };
  }

  function setWheelValue(state, value, question) {
    if (state.phase !== "spin") return false;
    state.wheelValue = value;
    state.question = question;
    state.phase = "answer";
    return true;
  }

  function answerCurrentQuestion(state, answerIndex) {
    if (state.phase !== "answer" || state.answered) return null;
    state.answered = true;
    state.phase = "score";
    const correct = answerIndex === state.question.answer;
    const points = correct ? state.wheelValue * (state.turnJokers.doublePoints ? 2 : 1) : 0;
    if (correct) {
      const { group, student } = activeTurn(state);
      group.score += points;
      student.score += points;
    }
    return { correct, points, correctAnswer: state.question.options[state.question.answer] };
  }

  function canUseJoker(state, type) {
    const { group } = activeTurn(state);
    if (!group.jokers.remaining) return false;
    if (type === "spinAgain") return state.phase === "spin" && !group.jokers.spinAgainUsed;
    if (type === "fiftyFifty") return state.phase === "answer" && !state.turnJokers.fiftyFifty;
    if (type === "doublePoints") return state.phase === "answer" && !state.turnJokers.doublePoints;
    return false;
  }

  function useJoker(state, type) {
    if (!canUseJoker(state, type)) return false;
    const { group } = activeTurn(state);
    group.jokers.remaining -= 1;
    if (type === "spinAgain") group.jokers.spinAgainUsed = true;
    else state.turnJokers[type] = true;
    return true;
  }

  function advanceTurn(state) {
    if (state.turnIndex + 1 >= state.turnOrder.length) {
      state.phase = "roundComplete";
      return "roundComplete";
    }
    state.turnIndex += 1;
    state.phase = "spin";
    state.wheelValue = 0;
    state.question = null;
    state.answered = false;
    state.turnJokers = { fiftyFifty: false, doublePoints: false };
    return "next";
  }

  function continueRound(state) {
    state.round += 1;
    state.turnIndex = 0;
    state.turnOrder = createTurnOrder(state.groups);
    state.phase = "spin";
    state.wheelValue = 0;
    state.question = null;
    state.answered = false;
    state.turnJokers = { fiftyFifty: false, doublePoints: false };
    state.groups.forEach(resetGroupJokers);
  }

  Object.assign(TC, { activeTurn, advanceTurn, answerCurrentQuestion, canUseJoker, continueRound, createGameState, jokerCapacity, setWheelValue, useJoker });
})();
