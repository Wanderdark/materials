(() => {
  window.LeagueListening = window.LeagueListening || {};
  const TYPES = Object.freeze([
    { id: "translation", label: "TRANSLATION", angle: 0, color: "#f6b542" },
    { id: "word", label: "MISSING WORD", angle: window.__oliviasMovieMemoriesFriendMode ? 120 : 90, color: "#63adff" },
    { id: "true-false", label: "TRUE / FALSE", angle: window.__oliviasMovieMemoriesFriendMode ? 240 : 180, color: "#b984ff" },
    ...(window.__oliviasMovieMemoriesFriendMode ? [] : [{ id: "correct-order", label: "CORRECT ORDER", angle: 270, color: "#50df9a" }])
  ]);
  function canUseOmniType(item, type) {
    if (type === "translation") return true;
    if (type === "correct-order") return !window.__oliviasMovieMemoriesFriendMode && Number.isFinite(window.LeagueListening.correctOrderPreference(item));
    if (type === "word") return window.LeagueListening.getCorrectOptionQuestions(item).length > 0;
    return type === "true-false" && typeof item.truefalsequestion === "string" && item.truefalsequestion.trim() !== "" && typeof item.truefalseanswer === "boolean";
  }
  function createOmniQuestion(item, type) {
    if (!item || !canUseOmniType(item, type)) return null;
    if (type === "word") return { ...window.LeagueListening.createCorrectOptionQuestion(item), omniQuestionType: type };
    if (type === "translation") return { ...item, omniQuestionType: type };
    if (type === "correct-order") return window.LeagueListening.createCorrectOrderQuestion(item);
    return { ...item, omniQuestionType: type, blankTranscript: item.truefalsequestion.trim(),
      answerOptions: [{ id: "a", text: "TRUE" }, { id: "b", text: "FALSE" }],
      correctOptionId: item.truefalseanswer ? "a" : "b", explanation: "" };
  }
  function getOmniChaosStage(completed) {
    return completed >= 37 ? 5 : completed >= 27 ? 4 : completed >= 19 ? 3 : completed >= 11 ? 2 : completed >= 7 ? 1 : 0;
  }
  function createOmniChaosProgress(storage = localStorage) {
    const key = "oliviasMovieMemoriesChaosCompletedV1";
    let count = 0;
    try { const value = Number(storage.getItem(key)); if (Number.isFinite(value)) count = Math.max(0, Math.floor(value)); } catch (_) {}
    const save = () => { try { storage.setItem(key, String(count)); } catch (_) {} };
    return { getCount: () => count, getStage: () => getOmniChaosStage(count),
      complete() { count += 1; save(); }, reset() { count = 0; save(); } };
  }
  function omniRegionPoints(angle) {
    const radians = angle * Math.PI / 180;
    const x = 300 + Math.sin(radians) * 170, y = 270 - Math.cos(radians) * 170;
    return Array.from({ length: 5 }, (_, index) => {
      const point = (angle + 90 + index * 72) * Math.PI / 180;
      return { x: x + Math.cos(point) * 87, y: y + Math.sin(point) * 87 };
    });
  }
  function resolveOmniSelection(angle, available, random = Math.random, played = [], layout = TYPES) {
    const normalized = ((angle % 360) + 360) % 360;
    const radians = normalized * Math.PI / 180;
    const tip = { x: 300 + Math.sin(radians) * 116, y: 270 - Math.cos(radians) * 116 };
    const hit = layout.find((type) => {
      if (window.__oliviasMovieMemoriesFriendMode) return Math.abs(((normalized - type.angle + 540) % 360) - 180) <= 30;
      const points = omniRegionPoints(type.angle);
      const sides = points.map((point, index) => {
        const next = points[(index + 1) % points.length];
        return (next.x - point.x) * (tip.y - point.y) - (next.y - point.y) * (tip.x - point.x);
      });
      return sides.every((side) => side >= 0) || sides.every((side) => side <= 0);
    });
    if (hit && available.includes(hit.id) && !played.includes(hit.id)) return { type: hit.id, random: false };
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
      const points = omniRegionPoints(type.angle).map((point) => `${point.x},${point.y}`).join(" ");
      return `<g class="omni-type" data-omni-type="${type.id}" style="--omni-color:${type.color}"><polygon points="${points}"/><text x="${x}" y="${y + 3}">${type.label}</text><text class="omni-unavailable" x="${x}" y="${y + 24}">NO UNUSED VIDEOS</text></g>`;
    }).join("");
    dialog.innerHTML = `<section class="omni-selector-card"><p class="eyebrow">CHOOSE YOUR CHALLENGE</p><h2 id="omni-selector-title">OMNI-MODE</h2><p class="omni-selector-help">Press STOP to choose. Land in a gap for a random question type.</p><svg class="omni-selector-diagram" viewBox="0 0 600 530" aria-label="Rotating question type selector">${pentagons}<circle class="omni-orbit" cx="300" cy="270" r="108"/><g class="omni-countdown" aria-hidden="true"><circle class="omni-countdown-track" cx="300" cy="270" r="76"/><circle class="omni-countdown-progress" cx="300" cy="270" r="76" pathLength="100" transform="rotate(-90 300 270)"/></g><g class="omni-center-button" role="button" tabindex="0" aria-label="STOP"><circle class="omni-center" cx="300" cy="270" r="67"/><text class="omni-center-label" x="300" y="276">STOP</text></g><g class="omni-pointer"><path d="M300 154 L284 183 L316 183 Z"/></g></svg><p class="omni-selection-result" aria-live="polite"></p></section>`;
    document.body.append(dialog);
    const pointer = dialog.querySelector(".omni-pointer");
    const stopButton = dialog.querySelector(".omni-center-button");
    const centerLabel = dialog.querySelector(".omni-center-label");
    const result = dialog.querySelector(".omni-selection-result");
    const countdown = dialog.querySelector(".omni-countdown");
    const countdownProgress = dialog.querySelector(".omni-countdown-progress");
    let selectionTimer = 0, selectionDeadline = 0;
    let rotationSpeed = .28;
    let frame = 0, finishTimer = 0, lastFrameAt = 0, angle = 0, direction = 1, nextDirectionChange = Infinity;
    let available = [], onChoose = null, playedTypes = null, layout = [...TYPES];
    let waitingToStart = false, chaosStage = 0;
    function draw(now) {
      angle = ((angle + (now - lastFrameAt) * rotationSpeed * direction) % 360 + 360) % 360;
      lastFrameAt = now;
      pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
    }
    function animate(now) {
      draw(now);
      if (selectionDeadline) {
        countdownProgress.setAttribute("stroke-dashoffset", String(Math.min(100, Math.max(0, (1 - (selectionDeadline - now) / 10000) * 100))));
        if (now >= selectionDeadline) return stop(true);
      }
      if (now >= nextDirectionChange) {
        if (Math.random() < .5) direction *= -1;
        nextDirectionChange = now + 1200 + Math.random() * 1800;
      }
      frame = requestAnimationFrame(animate);
    }
    function cancel() {
      cancelAnimationFrame(frame);
      clearTimeout(finishTimer);
      clearTimeout(selectionTimer);
      selectionTimer = selectionDeadline = 0;
      countdown.setAttribute("hidden", "");
      frame = finishTimer = 0;
      onChoose = null;
      waitingToStart = false;
      playedTypes = null;
      dialog.hidden = true;
    }
    function finishSelection(chosen, random) {
      if (random) angle = chosen.angle;
      pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
      const node = dialog.querySelector(`[data-omni-type="${chosen.id}"]`);
      node.classList.remove("is-mystery", "is-played");
      node.classList.add("is-selected");
      node.querySelector("text").textContent = chosen.label;
      node.setAttribute("aria-label", chosen.label);
      result.textContent = `${random ? "RANDOM → " : ""}${chosen.label}`;
      finishTimer = setTimeout(() => { const resume = onChoose; playedTypes?.add(chosen.id); cancel(); resume?.(chosen.id); }, 650);
    }
    function start() {
      if (!onChoose || !waitingToStart) return;
      waitingToStart = false;
      centerLabel.textContent = "STOP";
      stopButton.setAttribute("aria-label", "STOP");
      pointer.removeAttribute("visibility");
      angle = Math.random() * 360;
      direction = 1;
      lastFrameAt = performance.now();
      nextDirectionChange = chaosStage >= 2 ? lastFrameAt + 1200 + Math.random() * 1800 : Infinity;
      countdownProgress.setAttribute("stroke-dashoffset", "0");
      countdown.toggleAttribute("hidden", Boolean(window.__oliviasMovieMemoriesFriendMode));
      if (!window.__oliviasMovieMemoriesFriendMode) {
        selectionDeadline = lastFrameAt + 10000;
        selectionTimer = setTimeout(() => stop(true), 10000);
      }
      draw(lastFrameAt);
      frame = requestAnimationFrame(animate);
    }
    function stop(forceRandom = false) {
      if (!onChoose || waitingToStart || stopButton.disabled) return;
      clearTimeout(selectionTimer);
      selectionTimer = selectionDeadline = 0;
      countdown.setAttribute("hidden", "");
      stopButton.disabled = true;
      stopButton.setAttribute("aria-disabled", "true");
      stopButton.classList.add("is-stopped");
      cancelAnimationFrame(frame);
      frame = 0;
      draw(performance.now());
      const selection = forceRandom ? { type: available[Math.floor(Math.random() * available.length)] || null, random: true } : resolveOmniSelection(angle, available, Math.random, playedTypes ? [...playedTypes] : [], layout);
      const chosen = layout.find((type) => type.id === selection.type);
      if (!chosen) return cancel();
      if (!selection.random) return finishSelection(chosen, false);
      result.textContent = "RANDOM...";
      const spinStarted = performance.now(), fromAngle = angle;
      const fastSpeed = rotationSpeed * 4, fastDuration = 600;
      const fastDistance = fastSpeed * fastDuration;
      const remainingAngle = ((direction * (chosen.angle - fromAngle) - fastDistance) % 360 + 360) % 360;
      const slowDistance = 720 + remainingAngle;
      const slowDuration = 3 * slowDistance / fastSpeed;
      function randomSpin(now) {
        if (!onChoose || dialog.hidden) return;
        const elapsed = Math.max(0, now - spinStarted);
        const progress = Math.min(1, Math.max(0, (elapsed - fastDuration) / slowDuration));
        const distance = elapsed < fastDuration ? fastSpeed * elapsed : fastDistance + slowDistance * (1 - (1 - progress) ** 3);
        angle = ((fromAngle + direction * distance) % 360 + 360) % 360;
        pointer.setAttribute("transform", `rotate(${angle} 300 270)`);
        if (progress === 1) { frame = 0; return finishSelection(chosen, true); }
        frame = requestAnimationFrame(randomSpin);
      }
      frame = requestAnimationFrame(randomSpin);
    }
    function activateControl() { if (waitingToStart) start(); else stop(); }
    stopButton.addEventListener("click", activateControl);
    stopButton.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (!event.repeat) activateControl();
    });
    function show(types, callback, played = null, stage = 0) {
      cancel();
      available = TYPES.filter((type) => types.includes(type.id)).map((type) => type.id);
      if (!available.length) return callback(null);
      onChoose = callback;
      chaosStage = window.__oliviasMovieMemoriesFriendMode ? 0 : Math.max(0, Math.min(5, Number(stage) || 0));
      const speedRoll = chaosStage >= 5 ? Math.floor(Math.random() * 100) + 1 : 100;
      rotationSpeed = .28 * (speedRoll <= 10 ? 2 : speedRoll <= 20 ? 1.5 : 1);
      const slots = TYPES.map((type) => type.angle);
      if (chaosStage >= 1) {
        for (let index = slots.length - 1; index > 0; index -= 1) {
          const swap = Math.floor(Math.random() * (index + 1));
          [slots[index], slots[swap]] = [slots[swap], slots[index]];
        }
        if (slots.every((angle, index) => angle === layout[index].angle)) slots.push(slots.shift());
      }
      layout = TYPES.map((type, index) => ({ ...type, angle: slots[index] }));
      playedTypes = chaosStage >= 4 ? played : null;
      if (playedTypes && TYPES.every((type) => playedTypes.has(type.id))) playedTypes.clear();
      const mysteryCandidates = available.filter((id) => !playedTypes?.has(id));
      const mysteries = new Set();
      if (chaosStage >= 3 && mysteryCandidates.length >= 2 && Math.random() < .4) {
        while (mysteries.size < 2) mysteries.add(mysteryCandidates.splice(Math.floor(Math.random() * mysteryCandidates.length), 1)[0]);
      }
      dialog.querySelectorAll("[data-omni-type]").forEach((node) => {
        node.classList.toggle("is-unavailable", !available.includes(node.dataset.omniType));
        node.classList.remove("is-selected");
        const type = TYPES.find((type) => type.id === node.dataset.omniType);
        const rotation = layout.find((entry) => entry.id === type.id).angle - type.angle;
        node.setAttribute("transform", `rotate(${rotation} 300 270)`);
        const label = node.querySelector("text");
        const centerX = label.getAttribute("x"), centerY = Number(label.getAttribute("y")) - 3;
        node.querySelectorAll("text").forEach((text) => text.setAttribute("transform", `rotate(${-rotation} ${centerX} ${centerY})`));
        const used = available.includes(type.id) && Boolean(playedTypes?.has(type.id));
        node.classList.toggle("is-played", used);
        node.classList.toggle("is-mystery", mysteries.has(type.id));
        const visibleLabel = used ? "!" : mysteries.has(type.id) ? "?" : type.label;
        label.textContent = visibleLabel;
        node.setAttribute("aria-label", visibleLabel);
      });
      result.textContent = "";
      stopButton.disabled = false;
      stopButton.setAttribute("aria-disabled", "false");
      stopButton.classList.remove("is-stopped");
      waitingToStart = true;
      centerLabel.textContent = "START";
      stopButton.setAttribute("aria-label", "START");
      pointer.setAttribute("visibility", "hidden");
      countdown.setAttribute("hidden", "");
      dialog.querySelector(".omni-selector-help").textContent = window.__oliviasMovieMemoriesFriendMode ? "Press STOP to choose. Land in a gap for a random question type." : "Press START when you are ready, then STOP to choose.";
      dialog.hidden = false;
      if (window.__oliviasMovieMemoriesFriendMode) start();
      stopButton.focus();
    }
    return { show, cancel };
  }
  Object.assign(window.LeagueListening, { canUseOmniType, createOmniQuestion, resolveOmniSelection, createOmniSelector, getOmniChaosStage, createOmniChaosProgress });
})();
