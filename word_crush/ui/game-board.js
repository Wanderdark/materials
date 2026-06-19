(function () {
  function render(state, handlers) {
    renderEnglishBoard(state, handlers);
    renderTurkishBoard(state, handlers);
    window.requestAnimationFrame(fitBoardLabels);
  }

  function renderEnglishBoard(state, handlers) {
    const board = document.getElementById("english-board");
    const blastCursor = document.getElementById("blast-cursor");
    board.innerHTML = "";
    if (blastCursor) board.appendChild(blastCursor);

    state.englishGrid.forEach((tile, index) => {
      if (!tile) {
        const empty = document.createElement("div");
        empty.className = "gem-slot empty";
        board.appendChild(empty);
        return;
      }

      const button = document.createElement("button");
      button.className = `gem ${tile.color}`;
      button.classList.toggle("falling", Number(tile.fallDistance) > 0);
      button.classList.toggle("new-gem", Boolean(tile.isNew));
      button.classList.toggle("intro-gem", Boolean(tile.intro));
      button.dataset.tileId = tile.id;
      button.dataset.wordId = tile.word.id;
      button.dataset.index = String(index);
      button.style.setProperty("--fall-distance", String(tile.fallDistance || 0));
      button.style.setProperty("--spawn-distance", String(tile.spawnDistance || 0));
      button.style.setProperty("--intro-delay", `${tile.introDelay || 0}ms`);
      button.appendChild(createLabel(tile.word.en));
      button.classList.toggle("selected", state.selectedEnglishId === tile.id);
      button.disabled = state.isResolving || state.isPaused;
      button.addEventListener("click", () => handlers.onEnglish(tile.id));
      board.appendChild(button);
    });
  }

  function renderTurkishBoard(state, handlers) {
    const board = document.getElementById("turkish-board");
    board.innerHTML = "";

    state.turkishCards.forEach((card, index) => {
      const button = document.createElement("button");
      button.className = "paper-card";
      button.classList.toggle("intro-card", Boolean(card.intro));
      button.classList.toggle("new-card", Boolean(card.isNew));
      button.dataset.wordId = card.word.id;
      button.style.setProperty("--intro-delay", `${card.introDelay || 0}ms`);
      button.style.setProperty("--intro-x", `${card.introX || 0}px`);
      button.style.setProperty("--intro-y", `${card.introY || 0}px`);
      button.style.setProperty("--intro-rot", `${card.introRot || 0}deg`);
      button.style.setProperty("--intro-index", String(index));
      button.appendChild(createLabel(card.word.tr));
      button.classList.toggle("selected", state.selectedTurkishId === card.word.id);
      button.classList.toggle("locked", state.lockedTurkishId === card.word.id);
      button.disabled = state.isResolving || state.lockedTurkishId === card.word.id;
      button.addEventListener("click", () => handlers.onTurkish(card.word.id));
      board.appendChild(button);
    });
  }

  function markCrushing(wordIds) {
    const idSet = new Set(wordIds);
    document.querySelectorAll("[data-word-id]").forEach((el) => {
      if (idSet.has(el.dataset.wordId)) {
        el.classList.add("crushing");
      }
    });
  }

  function markEnglishCrushing(wordIds) {
    markBySelector("#english-board [data-word-id]", wordIds);
  }

  function markTurkishCrushing(wordIds) {
    markBySelector("#turkish-board [data-word-id]", wordIds);
  }

  function markBySelector(selector, wordIds) {
    const idSet = new Set(wordIds);
    document.querySelectorAll(selector).forEach((el) => {
      if (idSet.has(el.dataset.wordId)) {
        el.classList.add("crushing");
      }
    });
  }

  function boardCenter() {
    const board = document.getElementById("english-board");
    const rect = board.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  function createLabel(text) {
    const span = document.createElement("span");
    span.className = "fit-label";
    span.textContent = text;
    if (isSingleWord(text)) {
      span.classList.add("single-word");
      if (String(text || "").trim().length > 10) {
        span.classList.add("long-single-word");
      }
    }
    return span;
  }

  function fitBoardLabels() {
    document.querySelectorAll(".gem .fit-label, .paper-card .fit-label").forEach((label) => {
      const host = label.closest(".gem, .paper-card");
      if (!host) {
        return;
      }

      const isGem = host.classList.contains("gem");
      const computed = window.getComputedStyle(host);
      const baseSize = Number.parseFloat(computed.fontSize) || (isGem ? 42 : 38);
      const startSize = label.classList.contains("long-single-word") ? Math.round(baseSize * 0.72) : baseSize;
      const minSize = isGem ? 12 : 10;
      const lineRatio = 1.02;
      const singleLine = true;

      host.style.fontSize = `${startSize}px`;
      label.style.lineHeight = String(lineRatio);
      label.classList.remove("text-overflow-guard");

      let size = startSize;
      while (size > minSize && !(singleLine ? fitsOneLine(label, lineRatio) : fitsTwoLines(label, lineRatio))) {
        size -= 1.5;
        host.style.fontSize = `${size}px`;
      }

      if (!(singleLine ? fitsOneLine(label, lineRatio) : fitsTwoLines(label, lineRatio))) {
        label.classList.add("text-overflow-guard");
      }
    });
  }

  function fitsOneLine(label, lineRatio) {
    const host = label.closest(".gem, .paper-card");
    if (!host) {
      return true;
    }

    const fontSize = Number.parseFloat(window.getComputedStyle(host).fontSize) || 16;
    const maxHeight = Math.ceil(fontSize * lineRatio) + 3;
    return label.scrollHeight <= maxHeight && label.scrollWidth <= label.clientWidth + 1;
  }

  function fitsTwoLines(label, lineRatio) {
    const host = label.closest(".gem, .paper-card");
    if (!host) {
      return true;
    }

    const fontSize = Number.parseFloat(window.getComputedStyle(host).fontSize) || 16;
    const maxHeight = Math.ceil(fontSize * lineRatio * 2) + 3;
    return label.scrollHeight <= maxHeight && label.scrollWidth <= label.clientWidth + 1;
  }

  function isSingleWord(text) {
    const value = String(text || "").trim();
    return Boolean(value) && !/\s/.test(value);
  }

  window.WordCrushBoard = {
    render,
    fitBoardLabels,
    markCrushing,
    markEnglishCrushing,
    markTurkishCrushing,
    boardCenter
  };
})();
