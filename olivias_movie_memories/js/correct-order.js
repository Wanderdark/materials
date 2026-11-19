(() => {
  window.LeagueListening = window.LeagueListening || {};
  let cancelOrderCooldown = null;
  function clearOrderCooldown() {
    cancelOrderCooldown?.();
    cancelOrderCooldown = null;
  }
  function getCorrectOrderLines(item) {
    const transcript = String(item?.transcript || "").replaceAll("/", "").trim();
    const speakers = [...transcript.matchAll(/(^|[.!?,;]\s+|\n+)([\p{L}][\p{L}\p{M} '-]*?)\s*:\s*/gu)];
    if (!speakers.length || speakers[0].index !== 0) return [];
    const lines = speakers.map((match, index) => ({
      id: `line-${index}`,
      speaker: match[2].trim(),
      text: transcript.slice(match.index + match[0].length, speakers[index + 1] ? speakers[index + 1].index + speakers[index + 1][1].length : transcript.length).trim()
    }));
    return lines.every((line) => line.text) ? lines : [];
  }
  function correctOrderPreference(item) {
    const preference = [4, 5, 3, 2].indexOf(getCorrectOrderLines(item).length);
    return preference < 0 ? Infinity : preference;
  }
  function createCorrectOrderQuestion(item) {
    const lines = getCorrectOrderLines(item);
    if (![2, 3, 4, 5].includes(lines.length)) return null;
    const choices = [...lines];
    for (let index = choices.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [choices[index], choices[swap]] = [choices[swap], choices[index]];
    }
    if (choices.every((line, index) => line.id === lines[index].id)) choices.push(choices.shift());
    return { ...item, omniQuestionType: "correct-order", correctOrderLines: lines,
      correctOrderChoices: choices, correctOrderSelected: [], correctOptionId: "order-correct",
      answerOptions: [], blankTranscript: "", evidenceStart: null, evidenceEnd: null,
      evidenceSentence: undefined, explanation: "" };
  }
  function resetCorrectOrderView(els) {
    clearOrderCooldown();
    if (!els.answers.classList.contains("correct-order-answers")) return;
    els.answers.classList.remove("correct-order-answers");
    els.answers.replaceChildren(...["a", "b"].map((id) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.answer = id;
      return button;
    }));
  }
  function showCorrectOrderAnswers(els, item) {
    clearOrderCooldown();
    els.transcript.hidden = true;
    els.decisionOverlay.hidden = true;
    els.answerOverlay.hidden = false;
    els.videoWrap.classList.remove("is-dark-stage");
    els.answers.classList.remove("correct-option-answers");
    els.answers.classList.add("correct-order-answers");
    els.answers.hidden = false;
    els.videoStatus.textContent = "Arrange the dialogue lines.";
    els.answerNow.disabled = true;
    els.overrideReplay.disabled = true;
    els.replay.hidden = false;
    els.replay.disabled = false;
    const selected = item.correctOrderSelected;
    const hint = document.createElement("p");
    hint.className = "correct-order-hint";
    hint.textContent = "Tap the lines in the correct order. One wrong choice ends the turn.";
    const list = document.createElement("div");
    list.className = "correct-order-lines";
    function measurePositions() {
      return new Map([...list.children].map((card) => [card.dataset.orderLine, card.getBoundingClientRect()]));
    }
    function animateReorder(previousPositions) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      for (const card of list.children) {
        const previous = previousPositions.get(card.dataset.orderLine);
        if (!previous) continue;
        const current = card.getBoundingClientRect();
        const x = previous.left - current.left, y = previous.top - current.top;
        if (Math.abs(x) < 1 && Math.abs(y) < 1) continue;
        card.classList.add("is-order-moving");
        const animation = card.animate([{ transform: `translate3d(${x}px,${y}px,0)` }, { transform: "translate3d(0,0,0)" }], { duration: 480, easing: "cubic-bezier(.22,1,.36,1)" });
        const cleanup = () => card.classList.remove("is-order-moving");
        animation.finished.then(cleanup, cleanup);
      }
    }
    let resolved = false, coolingDown = false, cooldownTimer = 0;
    cancelOrderCooldown = () => {
      resolved = true;
      clearTimeout(cooldownTimer);
      list.classList.remove("is-cooling-down");
    };
    function draw() {
      list.replaceChildren();
      const ordered = [...selected.map((id) => item.correctOrderLines.find((line) => line.id === id)),
        ...item.correctOrderChoices.filter((line) => !selected.includes(line.id))];
      for (const line of ordered) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "correct-order-line";
        card.dataset.orderLine = line.id;
        const position = selected.indexOf(line.id);
        card.classList.toggle("order-correct", position >= 0);
        card.disabled = position >= 0 || coolingDown;
        card.setAttribute("aria-pressed", String(position >= 0));
        const number = document.createElement("span");
        number.className = "correct-order-number";
        number.textContent = position >= 0 ? String(position + 1) : "?";
        if (position < 0) {
          const ring = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          ring.setAttribute("class", "correct-order-cooldown");
          ring.setAttribute("viewBox", "0 0 40 40");
          ring.setAttribute("aria-hidden", "true");
          ring.innerHTML = '<circle cx="20" cy="20" r="18" pathLength="100"/>';
          number.append(ring);
        }
        const text = document.createElement("span");
        text.textContent = line.text;
        card.append(number, text);
        card.addEventListener("click", () => {
          if (card.disabled || resolved || coolingDown) return;
          const correct = item.correctOrderLines[selected.length].id === line.id;
          const previousPositions = correct ? measurePositions() : null;
          selected.push(line.id);
          if (correct && selected.length === item.correctOrderLines.length - 1) selected.push(item.correctOrderLines[selected.length].id);
          if (!correct || selected.length === item.correctOrderLines.length) {
            resolved = true;
            card.dataset.answer = correct ? "order-correct" : "order-wrong";
            number.textContent = String(selected.indexOf(line.id) + 1);
            if (correct) {
              item.correctOrderLines.forEach((entry, index) => {
                const orderedCard = list.querySelector(`[data-order-line="${entry.id}"]`);
                orderedCard.querySelector(".correct-order-number").textContent = String(index + 1);
                list.append(orderedCard);
              });
              animateReorder(previousPositions);
            }
            return;
          }
          window.LeagueListening.playAnswerSound(true);
          coolingDown = true;
          draw();
          animateReorder(previousPositions);
          list.classList.add("is-cooling-down");
          cooldownTimer = setTimeout(() => {
            if (resolved) return;
            coolingDown = false;
            list.classList.remove("is-cooling-down");
            list.querySelectorAll(".correct-order-line:not(.order-correct)").forEach((button) => { button.disabled = false; });
          }, 1000);
        });
        list.append(card);
      }
    }
    draw();
    els.answers.replaceChildren(hint, list);
  }
  function showCorrectOrderFeedback(els, item, result, timedOut) {
    clearOrderCooldown();
    window.LeagueListening.randomEvents?.clearAnswerMask();
    els.transcript.hidden = true;
    els.answers.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
      if (button.dataset.orderLine) {
        const index = item.correctOrderSelected.indexOf(button.dataset.orderLine);
        button.classList.toggle("order-correct", index >= 0 && item.correctOrderLines[index].id === button.dataset.orderLine);
        button.classList.toggle("order-wrong", index >= 0 && item.correctOrderLines[index].id !== button.dataset.orderLine);
      }
    });
    els.feedbackTitle.textContent = timedOut ? "TIME'S UP" : result.correct ? `CORRECT! +${result.points}` : "NOT THIS TIME";
    els.feedbackMessage.textContent = result.teamPenalty ? "TEAM −100 POINTS · DOUBLE JEOPARDY" : "";
    els.feedbackMessage.hidden = !result.teamPenalty;
    els.feedback.classList.toggle("not-this-time", !timedOut && !result.correct);
    els.feedback.hidden = false;
    els.evidenceReplay.dataset.revealPending = "";
    els.evidenceReplay.hidden = Boolean(timedOut);
    els.evidenceReplay.disabled = false;
    els.evidenceReplay.textContent = "▶ EVIDENCE REPLAY";
    els.next.hidden = !timedOut;
    els.next.disabled = false;
    els.next.textContent = "NEXT →";
    els.replay.disabled = true;
  }
  Object.assign(window.LeagueListening, { getCorrectOrderLines, correctOrderPreference, createCorrectOrderQuestion,
    resetCorrectOrderView, showCorrectOrderAnswers, showCorrectOrderFeedback });
})();
