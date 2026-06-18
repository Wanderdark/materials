(function () {
  const State = window.WordCrushState;
  const Screens = window.WordCrushScreens;
  const Board = window.WordCrushBoard;
  const Audio = window.WordCrushAudio || { play() {} };

  let state = State.createInitialState();
  let timerId = null;
  let nextTileId = 1;
  let lastResultRoute = "hub";

  function startGame(options = {}) {
    stopTimer();
    nextTileId = 1;
    state = State.createInitialState();
    const sourceWords = normalizeSourceWords(options.words || window.WordCrushAdapter?.buildWordPool?.() || window.WORD_CRUSH_WORDS || []);
    state.wordBank = shuffle([...sourceWords]);
    state.isRunning = true;
    state.runType = options.runType || "quick";
    state.campaignId = options.campaignId || null;
    state.campaignLevel = options.campaignLevel || null;
    state.campaignTotalLevels = options.campaignTotalLevels || window.WordCrushCampaign?.LEVELS?.length || 10;
    state.levelNumber = options.levelNumber || 1;
    state.activeWords = drawWords(State.BOARD_SIZE, new Set());
    state.englishGrid = buildInitialEnglishGrid(state.activeWords);
    state.turkishCards = shuffle(state.activeWords.map((word) => ({ word })));
    state.boardSize = state.turkishCards.length;

    if (options.profile && window.WordCrushProfile) {
      window.WordCrushProfile.applyProfileToHud();
    }

    Screens.showScreen("game-screen");
    Screens.setMessage("Match English gems with Turkish cards.");
    render();
    startTimer();
  }

  function togglePause() {
    if (!state.isRunning || state.isResolving) {
      return;
    }

    state.isPaused = !state.isPaused;
    Screens.setMessage(state.isPaused ? "Paused" : "Keep crushing.");
    Screens.updateHud(state);
    render();
  }

  function endGame() {
    if (state.isRunning && state.timeBonus === 0 && state.turkishCards.length > 0) {
      state.timeBonus = state.secondsLeft * State.TIME_BONUS_PER_SECOND;
      state.score += state.timeBonus;
    }

    state.isRunning = false;
    state.isPaused = false;
    state.isResolving = false;
    stopTimer();
    if (window.WordCrushProfile) {
      window.WordCrushProfile.recordRun(state);
    }
    if (window.WordCrushCampaign) {
      window.WordCrushCampaign.recordResult(state);
    }
    if (window.WordCrushDaily) {
      window.WordCrushDaily.recordRun(state);
    }
    lastResultRoute = state.runType === "campaign" ? "campaign" : "hub";
    Screens.showResult(state);
  }

  async function completeBoard() {
    stopTimer();
    state.isResolving = true;
    state.isPaused = false;

    state.boardBonus = state.wrongs === 0 ? State.BOARD_COMPLETE_BONUS : 0;
    state.score += state.boardBonus;
    Screens.setMessage(state.boardBonus ? `NO MISTAKE BONUS +${state.boardBonus}` : "BOARD COMPLETED");
    Screens.updateHud(state);
    if (state.boardBonus) {
      Screens.floatScore(`+${state.boardBonus} NO MISTAKE`, ...centerPairArgs());
    }
    if (window.ToastManager) {
      window.ToastManager.show(state.boardBonus ? `NO MISTAKE BONUS +${state.boardBonus}` : "BOARD COMPLETED");
    }

    await sleep(900);

    state.timeBonus = state.secondsLeft * State.TIME_BONUS_PER_SECOND;
    state.score += state.timeBonus;
    Screens.setMessage(`TIME LEFT BONUS +${state.timeBonus}`);
    Screens.updateHud(state);
    Screens.floatScore(`+${state.timeBonus} TIME`, ...centerPairArgs());

    await sleep(2000);
    endGame();
  }

  function onEnglish(tileId) {
    if (!canAct()) {
      return;
    }

    state.selectedEnglishId = state.selectedEnglishId === tileId ? null : tileId;
    render();
    tryResolveSelection();
  }

  function onTurkish(wordId) {
    if (!canAct()) {
      return;
    }

    if (state.lockedTurkishId === wordId) {
      Screens.setMessage("That Turkish card is locked for this try.");
      return;
    }

    state.selectedTurkishId = state.selectedTurkishId === wordId ? null : wordId;
    render();
    tryResolveSelection();
  }

  async function tryResolveSelection() {
    if (!state.selectedEnglishId || !state.selectedTurkishId) {
      return;
    }

    const tile = state.englishGrid.find((item) => item && item.id === state.selectedEnglishId);
    const selectedWordId = state.selectedTurkishId;

    if (!tile) {
      clearSelection();
      render();
      return;
    }

    if (tile.word.id !== selectedWordId) {
      handleWrongMatch(tile, selectedWordId);
      clearSelection();
      render();
      return;
    }

    state.isResolving = true;
    state.score += State.MATCH_SCORE;
    state.wordScore += State.MATCH_SCORE;
    state.matches += 1;
    Screens.setMessage("+100 MATCH");
    Audio.play("gemShatter");
    Board.markEnglishCrushing([tile.word.id]);
    Board.markTurkishCrushing([tile.word.id]);
    Screens.floatScore("+100", ...centerPairArgs());

    await sleep(760);
    removeMatchedWord(tile.word.id);
    releasePreviousLock(null);
    clearSelection();
    collapseColumns();
    refillEnglishFromTurkishCards();
    render();
    await sleep(520);

    if (!state.turkishCards.length) {
      await completeBoard();
      return;
    }

    await resolveCombos();
    state.isResolving = false;
    Screens.setMessage("Pick the next pair.");
    render();
  }

  async function resolveCombos() {
    let chain = 0;

    while (chain < State.COMBO_CHAIN_LIMIT) {
      const groups = findColorGroups();
      if (!groups.length) {
        break;
      }

      chain += 1;
      state.comboBest = Math.max(state.comboBest, chain);
      state.combos += groups.length;

      const wordIds = unique(groups.flat().map((index) => state.englishGrid[index].word.id));
      const points = Math.round(wordIds.length * State.COMBO_SCORE * comboMultiplier(chain));
      state.score += points;
      state.comboScore += points;

      Screens.updateHud(state);
      Screens.setMessage(`COMBO x${chain} +${points}`);
      Audio.play("combo");
      Board.markEnglishCrushing(wordIds);
      Screens.floatScore(`COMBO +${points}`, ...centerPairArgs());

      await sleep(760);
      removeEnglishWords(wordIds);
      collapseColumns();
      refillEnglishFromTurkishCards();
      render();
      await sleep(520);
    }

    if (chain >= State.COMBO_CHAIN_LIMIT && findColorGroups().length) {
      render();
      Screens.setMessage("Combo chain stopped for safety.");
      await sleep(280);
    }
  }

  function removeMatchedWord(wordId) {
    removeEnglishWords([wordId]);
    state.turkishCards = state.turkishCards.filter((card) => card.word.id !== wordId);
  }

  function removeEnglishWords(wordIds) {
    const doomed = new Set(wordIds);
    state.englishGrid = state.englishGrid.map((tile) => {
      if (!tile) {
        return null;
      }

      return doomed.has(tile.word.id) ? null : tile;
    });
    state.activeWords = state.englishGrid.filter(Boolean).map((tile) => tile.word);
  }

  function collapseColumns() {
    const collapsed = Array(State.BOARD_SIZE).fill(null);

    for (let col = 0; col < State.COLS; col += 1) {
      const kept = [];

      for (let row = State.ROWS - 1; row >= 0; row -= 1) {
        const oldIndex = toIndex(row, col);
        const tile = state.englishGrid[oldIndex];
        if (tile) {
          kept.push({ tile, oldIndex });
        }
      }

      for (let row = State.ROWS - 1; row >= 0; row -= 1) {
        const next = kept.shift();
        const newIndex = toIndex(row, col);
        if (next) {
          const oldRow = Math.floor(next.oldIndex / State.COLS);
          const fallDistance = row - oldRow;
          if (fallDistance > 0) {
            next.tile.fallDistance = fallDistance;
          }
          collapsed[newIndex] = next.tile;
        }
      }
    }

    state.englishGrid = collapsed;
  }

  function refillEnglishFromTurkishCards() {
    const activeIds = new Set(state.englishGrid.filter(Boolean).map((tile) => tile.word.id));
    const missingWords = state.turkishCards
      .map((card) => card.word)
      .filter((word) => !activeIds.has(word.id));

    for (let index = 0; index < state.englishGrid.length; index += 1) {
      if (!state.englishGrid[index]) {
        const word = missingWords.shift();
        if (!word) {
          continue;
        }
        activeIds.add(word.id);
        state.englishGrid[index] = createTile(word, index, { isNew: true });
      }
    }

    state.activeWords = state.englishGrid.filter(Boolean).map((tile) => tile.word);
  }

  function findColorGroups() {
    const grouped = new Set();

    for (let row = 0; row < State.ROWS; row += 1) {
      collectRun(
        Array.from({ length: State.COLS }, (_, col) => toIndex(row, col)),
        grouped
      );
    }

    for (let col = 0; col < State.COLS; col += 1) {
      collectRun(
        Array.from({ length: State.ROWS }, (_, row) => toIndex(row, col)),
        grouped
      );
    }

    collectLShapes(grouped);

    return grouped.size ? [[...grouped]] : [];
  }

  function collectRun(indices, grouped) {
    let run = [];
    let runColor = null;

    indices.forEach((index) => {
      const tile = state.englishGrid[index];
      const color = tile ? tile.color : null;

      if (color && color !== "black" && color === runColor) {
        run.push(index);
      } else {
        commitRun(run, grouped);
        run = color && color !== "black" ? [index] : [];
        runColor = color;
      }
    });

    commitRun(run, grouped);
  }

  function commitRun(run, grouped) {
    if (run.length < 3) {
      return;
    }

    run.forEach((index) => grouped.add(index));
  }

  function collectLShapes(grouped) {
    const corners = [
      [[0, -1], [1, 0]],
      [[0, 1], [1, 0]],
      [[0, -1], [-1, 0]],
      [[0, 1], [-1, 0]]
    ];

    for (let row = 0; row < State.ROWS; row += 1) {
      for (let col = 0; col < State.COLS; col += 1) {
        const cornerIndex = toIndex(row, col);
        const cornerTile = state.englishGrid[cornerIndex];

        if (!cornerTile || cornerTile.color === "black") {
          continue;
        }

        corners.forEach((shape) => {
          const indices = [
            cornerIndex,
            toIndexIfInside(row + shape[0][0], col + shape[0][1]),
            toIndexIfInside(row + shape[1][0], col + shape[1][1])
          ];

          if (indices.includes(null)) {
            return;
          }

          const isSameColor = indices.every((index) => {
            const tile = state.englishGrid[index];
            return tile && tile.color !== "black" && tile.color === cornerTile.color;
          });

          if (isSameColor) {
            indices.forEach((index) => grouped.add(index));
          }
        });
      }
    }
  }

  function buildInitialEnglishGrid(words) {
    const bestGrid = [];

    for (let attempt = 0; attempt < 80; attempt += 1) {
      state.englishGrid = [];
      words.forEach((word, index) => {
        state.englishGrid[index] = createTile(word, index, {
          allowPattern: false,
          initial: true
        });
      });

      const comboCells = countComboCells();
      if (comboCells <= State.INITIAL_COMBO_CELL_LIMIT) {
        return state.englishGrid;
      }

      if (!bestGrid.length || comboCells < countComboCells(bestGrid)) {
        bestGrid.splice(0, bestGrid.length, ...state.englishGrid.map(cloneTile));
      }
    }

    return bestGrid.length ? bestGrid : words.map((word, index) => createTile(word, index));
  }

  function cloneTile(tile) {
    return {
      id: tile.id,
      word: tile.word,
      color: tile.color
    };
  }

  function createTile(word, index = null, options = {}) {
    return {
      id: `tile-${nextTileId++}`,
      word,
      color: chooseControlledColor(index, options),
      isNew: Boolean(options.isNew),
      spawnDistance: options.isNew ? State.ROWS : 0
    };
  }

  function chooseControlledColor(index, options = {}) {
    if (index === null) {
      return chooseWeightedColor(State.COLORS);
    }

    if (options.allowPattern) {
      return chooseWeightedColor(State.COLORS);
    }

    const safeColors = State.COLORS.filter((color) => {
      return !wouldCreatePattern(index, color);
    });

    return chooseWeightedColor(safeColors.length ? safeColors : State.COLORS);
  }

  function chooseWeightedColor(colors) {
    const counts = countColors();
    const weighted = colors.flatMap((color) => {
      const count = counts[color] || 0;
      const weight = Math.max(1, 7 - count);
      return Array.from({ length: weight }, () => color);
    });

    return randomItem(weighted);
  }

  function countColors() {
    return state.englishGrid.reduce((counts, tile) => {
      if (tile && State.COLORS.includes(tile.color)) {
        counts[tile.color] = (counts[tile.color] || 0) + 1;
      }

      return counts;
    }, {});
  }

  function wouldCreatePattern(index, color) {
    return wouldCreateLine(index, color) || wouldCreateLShape(index, color);
  }

  function wouldCreateLine(index, color) {
    const row = Math.floor(index / State.COLS);
    const col = index % State.COLS;
    const horizontal = Array.from({ length: State.COLS }, (_, nextCol) => {
      return colorAt(toIndex(row, nextCol), index, color);
    });
    const vertical = Array.from({ length: State.ROWS }, (_, nextRow) => {
      return colorAt(toIndex(nextRow, col), index, color);
    });

    return hasRunOfThree(horizontal, color) || hasRunOfThree(vertical, color);
  }

  function wouldCreateLShape(index, color) {
    const row = Math.floor(index / State.COLS);
    const col = index % State.COLS;
    const corners = [
      [[0, -1], [1, 0]],
      [[0, 1], [1, 0]],
      [[0, -1], [-1, 0]],
      [[0, 1], [-1, 0]]
    ];

    for (let baseRow = row - 1; baseRow <= row + 1; baseRow += 1) {
      for (let baseCol = col - 1; baseCol <= col + 1; baseCol += 1) {
        for (const shape of corners) {
          const indices = [
            toIndexIfInside(baseRow, baseCol),
            toIndexIfInside(baseRow + shape[0][0], baseCol + shape[0][1]),
            toIndexIfInside(baseRow + shape[1][0], baseCol + shape[1][1])
          ];

          if (indices.includes(null) || !indices.includes(index)) {
            continue;
          }

          if (indices.every((shapeIndex) => colorAt(shapeIndex, index, color) === color)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function colorAt(targetIndex, proposedIndex, proposedColor) {
    if (targetIndex === proposedIndex) {
      return proposedColor;
    }

    return state.englishGrid[targetIndex]?.color || null;
  }

  function handleWrongMatch(tile, selectedWordId) {
    state.wrongs += 1;
    tile.color = "black";
    releasePreviousLock(selectedWordId);
    state.lockedTurkishId = selectedWordId;
    Screens.setMessage("Wrong match. Turkish card locked, gem turned black.");
  }

  function releasePreviousLock(nextLockedId) {
    if (state.lockedTurkishId && state.lockedTurkishId !== nextLockedId) {
      state.lockedTurkishId = null;
    }
  }

  function hasRunOfThree(colors, color) {
    let run = 0;

    for (const item of colors) {
      run = item === color ? run + 1 : 0;
      if (run >= 3) {
        return true;
      }
    }

    return false;
  }

  function countComboCells(grid = state.englishGrid) {
    const original = state.englishGrid;
    state.englishGrid = grid;
    const count = unique(findColorGroups().flat()).length;
    state.englishGrid = original;
    return count;
  }

  function comboMultiplier(chain) {
    if (chain === 1) {
      return 1;
    }

    if (chain === 2) {
      return 1.5;
    }

    return 1;
  }

  function drawWords(count, excludedIds) {
    const words = [];
    const used = new Set(excludedIds);
    const usedConflictTerms = new Set();

    while (words.length < count) {
      const word = drawOneWord(used, usedConflictTerms);
      used.add(word.id);
      getConflictTerms(word).forEach((term) => usedConflictTerms.add(term));
      words.push(word);
    }

    return words;
  }

  function drawOneWord(excludedIds, excludedTerms = new Set()) {
    let available = state.wordBank.filter((word) => {
      return !excludedIds.has(word.id) && !conflictsWith(word, excludedTerms);
    });

    if (!available.length) {
      available = normalizeSourceWords(window.WordCrushAdapter?.buildWordPool?.() || window.WORD_CRUSH_WORDS || [])
        .filter((word) => !excludedIds.has(word.id) && !conflictsWith(word, excludedTerms));
    }

    if (!available.length) {
      available = state.wordBank.filter((word) => !excludedIds.has(word.id));
    }

    if (!available.length) {
      available = normalizeSourceWords(window.WordCrushAdapter?.buildWordPool?.() || window.WORD_CRUSH_WORDS || [])
        .filter((word) => !excludedIds.has(word.id));
    }

    const word = randomItem(available);
    state.wordBank = state.wordBank.filter((item) => item.id !== word.id);
    return word;
  }

  function clearSelection() {
    state.selectedEnglishId = null;
    state.selectedTurkishId = null;
  }

  function canAct() {
    return state.isRunning && !state.isPaused && !state.isResolving;
  }

  function startTimer() {
    Screens.updateHud(state);
    timerId = window.setInterval(() => {
      if (!state.isRunning || state.isPaused || state.isResolving) {
        return;
      }

      state.secondsLeft -= 1;
      Screens.updateHud(state);

      if (state.secondsLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function render() {
    normalizeGravity();
    Screens.updateHud(state);
    Board.render(state, {
      onEnglish,
      onTurkish
    });
    clearMotionFlags();
  }

  function normalizeGravity() {
    if (!state.englishGrid.length) {
      return;
    }

    collapseColumns();
  }

  function clearMotionFlags() {
    state.englishGrid.forEach((tile) => {
      if (!tile) {
        return;
      }

      tile.fallDistance = 0;
      tile.spawnDistance = 0;
      tile.isNew = false;
    });
  }

  function centerPairArgs() {
    const center = Board.boardCenter();
    return [center.x, center.y];
  }

  function toIndex(row, col) {
    return row * State.COLS + col;
  }

  function toIndexIfInside(row, col) {
    if (row < 0 || row >= State.ROWS || col < 0 || col >= State.COLS) {
      return null;
    }

    return toIndex(row, col);
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function normalizeSourceWords(words) {
    return words.map((word, index) => ({
      ...word,
      id: word.id || String(index),
      en: String(word.en || "").trim(),
      tr: String(word.tr || "").trim(),
      conflictTerms: getConflictTerms(word)
    })).filter((word) => word.en && word.tr);
  }

  function conflictsWith(word, excludedTerms) {
    return getConflictTerms(word).some((term) => excludedTerms.has(term));
  }

  function getConflictTerms(word) {
    const terms = Array.isArray(word.conflictTerms) ? word.conflictTerms : [];
    const own = normalizeTerm(word.en);
    return unique([own, ...terms.map(normalizeTerm)].filter(Boolean));
  }

  function normalizeTerm(value) {
    return String(value || "")
      .trim()
      .toLocaleUpperCase("en-US")
      .replace(/\s+/g, " ");
  }

  function sleep(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  window.WordCrushGame = {
    startGame,
    togglePause,
    endGame,
    getLastResultRoute: () => lastResultRoute,
    getState: () => state
  };
})();
