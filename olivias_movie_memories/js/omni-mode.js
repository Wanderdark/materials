(() => {
  window.LeagueListening = window.LeagueListening || {};
  const TYPES = Object.freeze([
    { id: "translation", label: "TRANSLATION", angle: 0, color: "#f6b542" },
    { id: "word", label: "MISSING WORD", angle: 120, color: "#63adff" },
    { id: "true-false", label: "TRUE / FALSE", angle: 240, color: "#b984ff" }
  ]);
  function canUseOmniType(item, type) {
    if (type === "translation") return true;
    if (type === "word") return window.LeagueListening.getCorrectOptionQuestions(item).length > 0;
    return type === "true-false" && typeof item.truefalsequestion === "string" && item.truefalsequestion.trim() !== "" && typeof item.truefalseanswer === "boolean";
  }
  function createOmniQuestion(item, type) {
    if (!item || !canUseOmniType(item, type)) return null;
    if (type === "word") return { ...window.LeagueListening.createCorrectOptionQuestion(item), omniQuestionType: type };
    if (type === "translation") return { ...item, omniQuestionType: type };
    return { ...item, omniQuestionType: type, blankTranscript: item.truefalsequestion.trim(),
      answerOptions: [{ id: "a", text: "TRUE" }, { id: "b", text: "FALSE" }],
      correctOptionId: item.truefalseanswer ? "a" : "b", explanation: "" };
  }
  function resolveOmniSelection(angle, available, random = Math.random) {
    const normalized = ((angle % 360) + 360) % 360;
    const hit = TYPES.find((type) => Math.abs(((normalized - type.angle + 540) % 360) - 180) <= 30);
    if (hit && available.includes(hit.id)) return { type: hit.id, random: false };
    return { type: available[Math.floor(random() * available.length)] || null, random: true };
  }
  function createOmniSelector() {
    const dialog = document.createElement("div");
    dialog.className = "omni-mode-dialog";
    dialog.hidden = true;
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "omni-selector-title");
    const pentagons = TYPES.map((type) => {
      const radians = type.angle * Math.PI / 180;
      const x = 300 + Math.sin(radians) * 170, y = 270 - Math.cos(radians) * 170;
      const points = Array.from({ length: 5 }, (_, index) => {
        const point = (type.angle + 90 + index * 72) * Math.PI / 180;
        return `${x + Math.cos(point) * 87},${y + Math.sin(point) * 87}`;
      }).join(" ");
      return `<g class="omni-type" data-omni-type="${type.id}" style="--omni-color:${type.color}"><polygon points="${points}"/><text x="${x}" y="${y + 3}">${type.label}</text><text class="omni-unavailable" x="${x}" y="${y + 24}">NO UNUSED VIDEOS</text></g>`;
    }).join("");
    dialog.innerHTML = `<section class="omni-selector-card"><p class="eyebrow">CHOOSE YOUR CHALLENGE</p><h2 id="omni-selector-title">OMNI-MODE</h2><p class="omni-selector-help">Press STOP to choose. Land in a gap for a random question type.</p><svg class="omni-selector-diagram" viewBox="0 0 600 530" aria-label="Rotating question type selector">${pentagons}<circle class="omni-orbit" cx="300" cy="270" r="108"/><g class="omni-center-button" role="button" tabindex="0" aria-label="STOP"><circle class="omni-center" cx="300" cy="270" r="67"/><text class="omni-center-label" x="300" y="276">STOP</text></g><g class="omni-pointer"><path d="M300 154 L284 183 L316 183 Z"/></g></svg><p class="omni-selection-result" aria-live="polite"></p></section>`;
    document.body.append(dialog);
    const pointer = dialog.querySelector(".omni-pointer");
    const stopButton = dialog.querySelector(".omni-center-button");
    const result = dialog.querySelector(".omni-selection-result");
    const rotationSpeed = .28;
    let frame = 0, finishTimer = 0, startedAt = 0, angle = 0, startAngle = 0;
    let available = [], onChoose = null;
    function draw(now) {
      angle = (startAngle + (now - startedAt) * rotationSpeed) % 360;
      pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
    }
    function animate(now) { draw(now); frame = requestAnimationFrame(animate); }
    function cancel() {
      cancelAnimationFrame(frame);
      clearTimeout(finishTimer);
      frame = finishTimer = 0;
      onChoose = null;
      dialog.hidden = true;
    }
    function finishSelection(chosen, random) {
      if (random) angle = chosen.angle;
      pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
      dialog.querySelector(`[data-omni-type="${chosen.id}"]`).classList.add("is-selected");
      result.textContent = `${random ? "RANDOM → " : ""}${chosen.label}`;
      finishTimer = setTimeout(() => { const resume = onChoose; cancel(); resume?.(chosen.id); }, 650);
    }
    function stop() {
      if (!onChoose || stopButton.disabled) return;
      stopButton.disabled = true;
      stopButton.setAttribute("aria-disabled", "true");
      stopButton.classList.add("is-stopped");
      cancelAnimationFrame(frame);
      frame = 0;
      draw(performance.now());
      const selection = resolveOmniSelection(angle, available);
      const chosen = TYPES.find((type) => type.id === selection.type);
      if (!chosen) return cancel();
      if (!selection.random) return finishSelection(chosen, false);
      result.textContent = "RANDOM...";
      const spinStarted = performance.now(), fromAngle = angle;
      const fastSpeed = rotationSpeed * 4, fastDuration = 600;
      const fastDistance = fastSpeed * fastDuration;
      const remainingAngle = ((chosen.angle - (fromAngle + fastDistance)) % 360 + 360) % 360;
      const slowDistance = 720 + remainingAngle;
      const slowDuration = 3 * slowDistance / fastSpeed;
      function randomSpin(now) {
        if (!onChoose || dialog.hidden) return;
        const elapsed = Math.max(0, now - spinStarted);
        const progress = Math.min(1, Math.max(0, (elapsed - fastDuration) / slowDuration));
        const distance = elapsed < fastDuration ? fastSpeed * elapsed : fastDistance + slowDistance * (1 - (1 - progress) ** 3);
        angle = (fromAngle + distance) % 360;
        pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
        if (progress === 1) { frame = 0; return finishSelection(chosen, true); }
        frame = requestAnimationFrame(randomSpin);
      }
      frame = requestAnimationFrame(randomSpin);
    }
    stopButton.addEventListener("click", stop);
    stopButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      stop();
    });
    function show(types, callback) {
      cancel();
      available = TYPES.filter((type) => types.includes(type.id)).map((type) => type.id);
      if (!available.length) return callback(null);
      onChoose = callback;
      dialog.querySelectorAll("[data-omni-type]").forEach((node) => {
        node.classList.toggle("is-unavailable", !available.includes(node.dataset.omniType));
        node.classList.remove("is-selected");
      });
      result.textContent = "";
      stopButton.disabled = false;
      stopButton.setAttribute("aria-disabled", "false");
      stopButton.classList.remove("is-stopped");
      startAngle = Math.random() * 360;
      startedAt = performance.now();
      dialog.hidden = false;
      draw(startedAt);
      frame = requestAnimationFrame(animate);
      stopButton.focus();
    }
    return { show, cancel };
  }
  Object.assign(window.LeagueListening, { canUseOmniType, createOmniQuestion, resolveOmniSelection, createOmniSelector });
})();
