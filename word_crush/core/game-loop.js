(function () {
  const State = window.WordCrushState;
  const Screens = window.WordCrushScreens;
  const Board = window.WordCrushBoard;
  const Audio = window.WordCrushAudio || { play() {} };

  let state = State.createInitialState();
  let timerId = null;
  let nextTileId = 1;
  let lastResultRoute = "hub";
  let introRunId = 0;
  const INTRO_DURATION = 2000;

  function startGame(options = {}) {
    if (_blastTimer) { clearInterval(_blastTimer); _blastTimer = null; }
    const _bc = document.getElementById('blast-cursor');
    if (_bc) { _bc.classList.remove('active'); _bc.onclick = null; }
    stopTimer();
    introRunId += 1;
    const runId = introRunId;
    nextTileId = 1;
    state = State.createInitialState();
    const sourceWords = normalizeSourceWords(options.words || window.WordCrushAdapter?.buildWordPool?.() || window.WORD_CRUSH_WORDS || []);
    state.wordBank = shuffle([...sourceWords]);
    state.isRunning = true;
    state.runType     = options.runType || "quick";
    state.advNodeId     = options.advNodeId || null;
    state.advNodeType   = options.advNodeType || null;
    state.advGoldReward = options.advGoldReward || 0;
    state.advLives      = options.advLives    != null ? options.advLives    : null;
    state.advMaxLives   = options.advMaxLives != null ? options.advMaxLives : (options.advLives != null ? options.advLives : null);
    state.advEnemyHp    = options.advEnemyHp  != null ? options.advEnemyHp  : null;
    state.advEnemyMaxHp = options.advEnemyHp  != null ? options.advEnemyHp  : null;
    state.advWordPool   = options.advWordPool  || null;
    state.colors        = sanitizeColors(options.gemColors);
    if (options.gameSeconds != null) state.secondsLeft = Number(options.gameSeconds) || state.secondsLeft;
    state.advUsedIds    = new Set();
    if (options.advTimeOverride != null) state.secondsLeft = options.advTimeOverride;
    else if (options.advTimeMod) state.secondsLeft = Math.max(30, state.secondsLeft + options.advTimeMod);
    state.campaignId = options.campaignId || null;
    state.campaignLevel = options.campaignLevel || null;
    state.campaignTotalLevels = options.campaignTotalLevels || window.WordCrushCampaign?.LEVELS?.length || 10;
    state.campaignRefillQueue    = options.campaignRefillQueue ? [...options.campaignRefillQueue] : [];
    state.campaignStarThresholds = options.campaignStarThresholds || null;
    state.levelNumber = options.levelNumber || 1;
    state.activeWords = drawWords(State.BOARD_SIZE, new Set());
    if (state.runType === 'adventure') {
      state.activeWords.forEach(word => state.advUsedIds.add(word.id));
    }
    state.englishGrid = buildInitialEnglishGrid(state.activeWords);
    state.turkishCards = shuffle(state.activeWords.map((word) => ({ word })));
    state.boardSize = state.turkishCards.length;
    applyIntroMotion();

    if (options.profile && window.WordCrushProfile) {
      window.WordCrushProfile.applyProfileToHud();
    }

    Screens.showScreen("game-screen");
    Screens.setMessage(isLiteMode() ? "Match English gems with Turkish cards." : "Get ready.");
    render();
    beginAfterIntro(runId);
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

  function endGame({ awardTimeBonus = true } = {}) {
    if (awardTimeBonus && state.isRunning && state.timeBonus === 0 && state.turkishCards.length > 0) {
      state.timeBonus = state.secondsLeft * State.TIME_BONUS_PER_SECOND;
      state.score += state.timeBonus;
    }

    state.isRunning = false;
    state.isPaused = false;
    state.isResolving = false;
    if (_blastTimer) { clearInterval(_blastTimer); _blastTimer = null; }
    const _bc2 = document.getElementById('blast-cursor');
    if (_bc2) { _bc2.classList.remove('active'); _bc2.onclick = null; }
    stopTimer();
    if (window.WordCrushProfile) {
      window.WordCrushProfile.recordRun(state);
    }
    if (state.runType === 'quick' && (state.turkishCards || []).length === 0) {
      window.WordCrushFirebase?.submitScore();
    }
    if (window.WordCrushCampaign) {
      window.WordCrushCampaign.recordResult(state);
    }
    if (window.WordCrushDaily) {
      window.WordCrushDaily.recordRun(state);
    }
    if (window.AdvRun) {
      window.AdvRun.recordResult(state);
    }
    lastResultRoute = state.runType === "campaign" ? "campaign"
                    : state.runType === "adventure" ? "adventure"
                    : "hub";
    Screens.showResult(state);
  }

  function _drawOneAdventureWord(extraIds = new Set(), extraTerms = new Set()) {
    if (!state.advWordPool) return null;
    if (!state.advUsedIds) state.advUsedIds = new Set();
    const activeIds = new Set([
      ...state.turkishCards.map(c => c.word.id),
      ...state.englishGrid.filter(Boolean).map(t => t.word.id),
      ...extraIds
    ]);
    const activeTerms = activeConflictTerms(extraTerms);
    let available = state.advWordPool.filter(w => {
      return !activeIds.has(w.id)
        && !state.advUsedIds.has(w.id)
        && !conflictsWith(w, activeTerms);
    });
    if (!available.length) {
      state.advUsedIds = new Set(activeIds);
      available = state.advWordPool.filter(w => !activeIds.has(w.id) && !conflictsWith(w, activeTerms));
    }
    if (!available.length) {
      available = state.advWordPool.filter(w => !activeIds.has(w.id));
    }
    if (!available.length) return null;
    const word = available[Math.floor(Math.random() * available.length)];
    state.advUsedIds.add(word.id);
    return word;
  }

  function activeConflictTerms(extraTerms = new Set()) {
    const terms = new Set(extraTerms);
    [
      ...state.turkishCards.map(card => card.word),
      ...state.englishGrid.filter(Boolean).map(tile => tile.word)
    ].forEach(word => {
      getConflictTerms(word).forEach(term => terms.add(term));
    });
    return terms;
  }

  // Returns true if the game ended (caller should return immediately)
  async function _advHpHit(count) {
    state.advEnemyHp = Math.max(0, state.advEnemyHp - count);
    Screens.updateHud(state);
    if (state.advEnemyHp <= 0) {
      await adventureVictory();
      return true;
    }
    return false;
  }

  async function adventureVictory() {
    stopTimer();
    state.isResolving = true;
    state.isPaused = false;
    Screens.setMessage("ENEMY DEFEATED!");
    if (window.ToastManager) window.ToastManager.show("ENEMY DEFEATED! ⚔");
    await sleep(1200);
    endGame();
  }

  async function adventureWaveRefill() {
    state.isResolving = true;
    Screens.setMessage("Next wave incoming...");
    await sleep(600);

    const newWords = [];
    const newIds = new Set();
    const newTerms = new Set();
    for (let index = 0; index < State.BOARD_SIZE; index += 1) {
      const word = _drawOneAdventureWord(newIds, newTerms);
      if (word) {
        newWords.push(word);
        newIds.add(word.id);
        getConflictTerms(word).forEach(term => newTerms.add(term));
      }
    }
    if (!newWords.length) { endGame(); return; }

    state.turkishCards = shuffle(newWords.map(w => ({ word: w })));
    collapseColumns();
    refillEnglishFromTurkishCards();
    render();

    await sleep(400);
    state.isResolving = false;
    Screens.setMessage("Pick the next pair.");
    render();
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
    const matchPoints = tile.color === "black" ? 0 : State.MATCH_SCORE;
    state.score += matchPoints;
    state.wordScore += matchPoints;
    state.matches += 1;
    Screens.setMessage(matchPoints ? "+100 MATCH" : "BLACK GEM +0");
    Audio.play("gemShatter");
    Board.markEnglishCrushing([tile.word.id]);
    Board.markTurkishCrushing([tile.word.id]);
    Screens.floatScore(`+${matchPoints}`, ...centerPairArgs());

    await sleep(760);
    removeMatchedWord(tile.word.id);
    releasePreviousLock(null);
    clearSelection();
    collapseColumns();
    refillEnglishFromTurkishCards();
    render();
    await sleep(520);

    if (state.runType === 'adventure' && state.advEnemyHp !== null) {
      if (await _advHpHit(1)) return;
      // Continuous refill: add new word to keep deck alive
      const newWord = _drawOneAdventureWord();
      if (newWord) {
        state.turkishCards.push({ word: newWord, isNew: true });
        refillEnglishFromTurkishCards();
        render();
        state.turkishCards[state.turkishCards.length - 1].isNew = false;
      }
    }

    if (state.runType === 'campaign' && state.campaignRefillQueue?.length > 0) {
      const newWord = state.campaignRefillQueue.shift();
      state.turkishCards.push({ word: newWord, isNew: true });
      refillEnglishFromTurkishCards();
      render();
      state.turkishCards[state.turkishCards.length - 1].isNew = false;
    }

    if (!state.turkishCards.length) {
      if (state.runType === 'adventure') {
        await adventureWaveRefill(); // safety fallback, should not trigger
      } else {
        await completeBoard();
      }
      return;
    }

    await resolveCombos();
    if (!state.isRunning) {
      return;
    }
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

      if (hasBlackCombo(groups)) {
        triggerBlackComboGameOver(groups);
        return;
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

      if (state.runType === 'adventure' && state.advEnemyHp !== null) {
        if (await _advHpHit(wordIds.length)) return;
      }
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

      if (color && color === runColor) {
        run.push(index);
      } else {
        commitRun(run, grouped);
        run = color ? [index] : [];
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

        if (!cornerTile) {
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
            return tile && tile.color === cornerTile.color;
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

  async function beginAfterIntro(runId) {
    if (!isLiteMode()) {
      state.isResolving = true;
      await sleep(INTRO_DURATION);
      if (runId !== introRunId) return;
      state.isResolving = false;
      clearIntroMotion();
      render();
    }

    if (runId !== introRunId) return;
    Screens.setMessage("Match English gems with Turkish cards.");
    startTimer();
  }

  function applyIntroMotion() {
    if (isLiteMode()) return;

    const rowStep = 280;
    state.englishGrid.forEach((tile, index) => {
      if (!tile) return;
      const row = Math.floor(index / State.COLS);
      const delay = (State.ROWS - 1 - row) * rowStep;
      tile.intro = true;
      tile.introDelay = delay;
    });

    const entrances = [
      [-90, -42, -5],
      [0, -82, 2],
      [90, -42, 5],
      [-110, 0, 4],
      [110, 0, -4],
      [-90, 54, -5],
      [0, 88, 3],
      [90, 54, 5]
    ];
    const cardStep = Math.max(70, Math.floor(INTRO_DURATION / Math.max(1, state.turkishCards.length + 4)));
    state.turkishCards.forEach((card, index) => {
      const [x, y, rot] = entrances[index % entrances.length];
      card.intro = true;
      card.introDelay = index * cardStep;
      card.introX = x;
      card.introY = y;
      card.introRot = rot;
    });
  }

  function clearIntroMotion() {
    state.englishGrid.forEach((tile) => {
      if (tile) {
        tile.intro = false;
        tile.introDelay = 0;
      }
    });
    state.turkishCards.forEach((card) => {
      card.intro = false;
      card.introDelay = 0;
      card.introX = 0;
      card.introY = 0;
      card.introRot = 0;
    });
  }

  function isLiteMode() {
    return document.body.classList.contains("lite-mode");
  }

  function chooseControlledColor(index, options = {}) {
    if (index === null) {
      return chooseWeightedColor(currentColors());
    }

    if (options.allowPattern) {
      return chooseWeightedColor(currentColors());
    }

    const safeColors = currentColors().filter((color) => {
      return !wouldCreatePattern(index, color);
    });

    return chooseWeightedColor(safeColors.length ? safeColors : currentColors());
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
      if (tile && currentColors().includes(tile.color)) {
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

    const groups = findColorGroups();
    if (hasBlackCombo(groups)) {
      triggerBlackComboGameOver(groups);
      return;
    }

    if (state.runType === 'adventure' && state.advLives !== null) {
      state.advLives = Math.max(0, state.advLives - 1);
      Screens.updateHud(state);
      if (state.advLives <= 0) {
        Screens.setMessage("No lives left — fight lost!");
        setTimeout(() => endGame(), 900);
        return;
      }
      const hearts = '♥'.repeat(state.advLives) + '♡'.repeat(state.advMaxLives - state.advLives);
      Screens.setMessage(`Wrong match! ${hearts} lives remaining.`);
    } else {
      Screens.setMessage("Wrong match. Turkish card locked, gem turned black.");
    }
  }

  function releasePreviousLock(nextLockedId) {
    if (state.lockedTurkishId && state.lockedTurkishId !== nextLockedId) {
      state.lockedTurkishId = null;
    }
  }

  function hasBlackCombo(groups = findColorGroups()) {
    return groups.flat().some((index) => state.englishGrid[index]?.color === "black");
  }

  function triggerBlackComboGameOver(groups) {
    state.isResolving = true;
    stopTimer();
    const blackWordIds = unique(groups.flat()
      .filter((index) => state.englishGrid[index]?.color === "black")
      .map((index) => state.englishGrid[index].word.id));

    Audio.play("combo");
    Audio.playRumble?.();
    Board.markEnglishCrushing(blackWordIds);
    Screens.setMessage("BLACK COMBO - GAME OVER!");
    Screens.floatScore("COMBO -1000000", ...centerPairArgs(), {
      className: "black-combo-float",
      duration: 3000
    });
    document.body.classList.add("black-combo-active");
    if (window.ToastManager) {
      window.ToastManager.show("BLACK COMBO - GAME OVER!");
    }
    if (window.WCAchievements?.unlockSecretAchievement?.("brilliant_minded_individual")) {
      window.setTimeout(() => {
        window.ToastManager?.show("ACHIEVEMENT EARNED: BRILLIANT MINDED INDIVIDUAL");
      }, 650);
    }
    window.setTimeout(() => endGame({ awardTimeBonus: false }), 2000);
    window.setTimeout(() => document.body.classList.remove("black-combo-active"), 3000);
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

  function currentColors() {
    return Array.isArray(state.colors) && state.colors.length ? state.colors : State.COLORS;
  }

  function sanitizeColors(colors) {
    const allowed = new Set(["red", "green", "blue", "purple", "orange", "darkblue", "yellow", "cyan"]);
    const picked = Array.isArray(colors) ? colors.filter((color) => allowed.has(color)) : [];
    return picked.length >= 3 ? picked : State.COLORS;
  }

  // ── JOKER ACTIVATIONS ────────────────────────────────────────────────────
  let _blastTimer = null;
  let _blastPos   = { row: 0, col: 0 };

  async function activateTransmute() {
    if (!state.isRunning || state.isResolving) return false;
    const colors = currentColors();
    state.englishGrid = state.englishGrid.map(tile => {
      if (!tile) return null;
      return { ...tile, color: colors[Math.floor(Math.random() * colors.length)] };
    });
    render();
    Audio.play('combo');
    await sleep(300);
    state.isResolving = true;
    await resolveCombos();
    state.isResolving = false;
    Screens.setMessage('TRANSMUTE! Gems reshuffled.');
    render();
    return true;
  }

  function activateReveal() {
    if (!state.isRunning || state.isResolving) return false;
    const tiles = state.englishGrid.filter(Boolean);
    if (!tiles.length) return false;
    const target = tiles[Math.floor(Math.random() * tiles.length)];
    const id = target.word.id;
    [
      document.querySelector(`#english-board [data-word-id="${id}"]`),
      document.querySelector(`#turkish-board [data-word-id="${id}"]`)
    ].forEach(el => {
      if (!el) return;
      el.classList.add('joker-revealed');
      setTimeout(() => el.classList.remove('joker-revealed'), 4000);
    });
    Screens.setMessage('REVEAL! Find the highlighted pair.');
    return true;
  }

  function activateBlast() {
    if (!state.isRunning || state.isResolving || _blastTimer) return false;
    const cursor = document.getElementById('blast-cursor');
    if (!cursor) return false;
    state.isResolving = true;
    cursor.classList.add('active');
    _moveBlastCursor();
    _blastTimer = setInterval(_moveBlastCursor, 700);
    Screens.setMessage('BLAST! Click the target.');
    cursor.onclick = _onBlastFire;
    return true;
  }

  function _moveBlastCursor() {
    const row = Math.floor(Math.random() * (State.ROWS - 1));
    const col = Math.floor(Math.random() * (State.COLS - 1));
    _blastPos = { row, col };
    const cursor = document.getElementById('blast-cursor');
    if (!cursor) return;
    cursor.style.left = `${(col / State.COLS) * 100}%`;
    cursor.style.top  = `${(row / State.ROWS) * 100}%`;
  }

  async function _onBlastFire() {
    const cursor = document.getElementById('blast-cursor');
    clearInterval(_blastTimer);
    _blastTimer = null;
    if (cursor) { cursor.classList.remove('active'); cursor.onclick = null; }

    const { row, col } = _blastPos;
    const indices = [
      row * State.COLS + col,
      row * State.COLS + col + 1,
      (row + 1) * State.COLS + col,
      (row + 1) * State.COLS + col + 1,
    ];
    const wordIds = [...new Set(indices.map(i => state.englishGrid[i]?.word?.id).filter(Boolean))];

    if (!wordIds.length) { state.isResolving = false; return; }

    Board.markEnglishCrushing(wordIds);
    Board.markTurkishCrushing(wordIds);
    Audio.play('combo');
    await sleep(760);

    removeEnglishWords(wordIds);
    state.turkishCards = state.turkishCards.filter(c => !wordIds.includes(c.word.id));

    for (let i = 0; i < wordIds.length; i++) {
      const w = _drawOneAdventureWord();
      if (w) state.turkishCards.push({ word: w, isNew: true });
    }

    collapseColumns();
    refillEnglishFromTurkishCards();
    render();
    state.turkishCards.forEach(c => { c.isNew = false; });

    await sleep(400);
    if (await _advHpHit(wordIds.length)) return;

    state.isResolving = false;
    Screens.setMessage('Pick the next pair.');
    render();
  }

  function activateHeal() {
    if (!state.isRunning) return false;
    const max = state.advMaxLives || 5;
    if (state.advLives >= max) return false;
    state.advLives = Math.min(max, (state.advLives || 0) + 2);
    Screens.updateHud(state);
    Screens.setMessage(`❤️‍🩹 +2 CAN! (${state.advLives}/${max})`);
    Audio.play('correct');
    return true;
  }

  function activateStamina() {
    if (!state.isRunning) return false;
    state.secondsLeft += 30;
    Screens.updateHud(state);
    Screens.setMessage('⚡ +30 SN SÜRE!');
    Audio.play('correct');
    return true;
  }

  function activateJoker(type) {
    if (type === 'transmute') return activateTransmute();
    if (type === 'reveal')    return activateReveal();
    if (type === 'blast')     return activateBlast();
    if (type === 'heal')      return activateHeal();
    if (type === 'stamina')   return activateStamina();
  }

  window.WordCrushGame = {
    startGame,
    togglePause,
    endGame,
    activateJoker,
    getLastResultRoute: () => lastResultRoute,
    getState: () => state
  };
})();
