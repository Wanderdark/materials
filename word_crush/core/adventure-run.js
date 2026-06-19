(function () {
  // ── NODE DEFINITIONS ─────────────────────────────────────────────────────
  const NODE_DEFS = [
    { id: 'start', x:  7.3, y: 50.5, type: 'battle', to: ['n1','n2'] },
    { id: 'n1',    x: 25.0, y: 30.6, type: 'battle', to: ['n3','n4'] },
    { id: 'n2',    x: 24.2, y: 69.0, type: 'elite',  to: ['n4','n5'] },
    { id: 'n3',    x: 40.9, y: 25.9,                to: ['n6','n4'] },
    { id: 'n4',    x: 40.4, y: 48.6,                to: ['n3','n5','n7'] },
    { id: 'n5',    x: 39.8, y: 70.8,                to: ['n4','n7'] },
    { id: 'n6',    x: 56.5, y: 33.3,                to: ['n8','n9'] },
    { id: 'n7',    x: 55.7, y: 65.7,                to: ['n9','n10'] },
    { id: 'n8',    x: 71.1, y: 25.5,                to: ['shop'] },
    { id: 'n9',    x: 71.6, y: 46.3,                to: ['shop'] },
    { id: 'n10',   x: 71.6, y: 70.8,                to: ['shop'] },
    { id: 'shop',  x: 80.5, y: 64.4, type: 'shop',  to: ['boss'] },
    { id: 'boss',  x: 90.6, y: 46.3, type: 'boss',  to: [] },
  ];

  const NODE_TYPES = {
    start:  { icon: '▶', label: 'START',  color: '#4ade80' },
    battle: { icon: '⚔', label: 'BATTLE', color: '#60a5fa' },
    elite:  { icon: '💀', label: 'ELITE',  color: '#c084fc' },
    event:  { icon: '❓', label: 'EVENT',  color: '#34d399' },
    shop:   { icon: '🏪', label: 'SHOP',   color: '#fb923c' },
    boss:   { icon: '👑', label: 'BOSS',   color: '#f87171' },
  };

  const TYPE_POOL = ['battle','battle','battle','battle','elite','elite','battle','battle','battle','battle'];

  const JOKER_ABILITIES = [
    { type: 'transmute', icon: '🔀', name: 'TRANSMUTE',     desc: 'Tüm gem renklerini karıştır, combo tetikle' },
    { type: 'reveal',    icon: '🔍', name: 'REVEAL',        desc: 'Bir eşleşen çifti 4 sn vurgula'             },
    { type: 'blast',     icon: '💥', name: 'BLAST',         desc: 'Gem ekranında 2×2 hedef patlatır'            },
    { type: 'heal',      icon: '❤️‍🩹', name: 'HEAL',          desc: '+2 can (maks 5)'                            },
    { type: 'stamina',   icon: '⚡', name: 'EXTRA STAMINA', desc: '+30 sn süre ekler'                          },
  ];

  let _run = null;

  // ── WORD BUILDER ─────────────────────────────────────────────────────────
  function _buildFullPool(enc, nodeId) {
    const grade = enc.units[0]?.grade || (Number(window.WordCrushProfile?.getProfile?.()?.grade) || 6);
    const units = enc.units.map(u => u.unit);
    const cat = _run?.nodeCategories?.[nodeId];
    const categories = cat ? [cat.unit] : [];
    return window.WordCrushAdapter.buildWordPool({ grades: [grade], units, categories });
  }

  function _selectFirstWave(pool, nodeType) {
    const targets = nodeType === 'boss'  ? { 1: 0, 2: 0, 3: 15 }
                 : nodeType === 'elite' ? { 1: 3, 2: 6, 3: 6  }
                 :                       { 1: 5, 2: 8, 3: 2   };

    const total    = window.WordCrushAdapter.BOARD_WORD_COUNT || 15;
    const selected = [];
    const usedIds  = new Set();
    const usedTerms = new Set();

    function pickDiff(diff, count, respectConflicts = true) {
      if (count <= 0) return;
      const cands = _shuffle(pool.filter(w => Number(w.diff) === diff && !usedIds.has(w.id)));
      for (const w of cands) {
        if (selected.length >= total || count <= 0) break;
        if (respectConflicts && _conflictsWith(w, usedTerms)) continue;
        selected.push(w);
        usedIds.add(w.id);
        _getTerms(w).forEach(term => usedTerms.add(term));
        count--;
      }
    }

    [1, 2, 3].forEach(d => pickDiff(d, targets[d]));
    for (const d of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiff(d, total - selected.length);
    }

    for (const d of [2, 1, 3]) {
      if (selected.length >= total) break;
      pickDiff(d, total - selected.length, false);
    }

    return _shuffle(selected).slice(0, total);
  }

  function _conflictsWith(word, usedTerms) {
    return _getTerms(word).some(term => usedTerms.has(term));
  }

  function _getTerms(word) {
    const terms = Array.isArray(word.conflictTerms) ? word.conflictTerms : [];
    return _unique([word.en, ...terms].map(_normalizeTerm).filter(Boolean));
  }

  function _normalizeTerm(value) {
    return String(value || '').trim().toLocaleUpperCase('en-US').replace(/\s+/g, ' ');
  }

  function _unique(items) {
    return [...new Set(items)];
  }

  function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── ENCOUNTER GENERATION ─────────────────────────────────────────────────
  function _rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function _pickUnits(count, unitCounts = new Map()) {
    const grade = Number(window.WordCrushProfile?.getProfile?.()?.grade) || 6;
    const chosen = [];
    const availableUnits = Array.from({ length: 10 }, (_, i) => i + 1);

    for (let i = 0; i < count; i++) {
      const remaining = availableUnits.filter(unit => !chosen.includes(unit));
      const source = remaining.length ? remaining : availableUnits;
      const lowestUse = Math.min(...source.map(unit => Number(unitCounts.get(unit)) || 0));
      const leastUsed = source.filter(unit => (Number(unitCounts.get(unit)) || 0) === lowestUse);
      const unit = leastUsed[_rnd(0, leastUsed.length - 1)];
      chosen.push(unit);
      unitCounts.set(unit, (Number(unitCounts.get(unit)) || 0) + 1);
    }

    return chosen.map(unit => ({ grade, unit }));
  }

  function _allUnits() {
    const grade = Number(window.WordCrushProfile?.getProfile?.()?.grade) || 6;
    return Array.from({ length: 10 }, (_, i) => ({ grade, unit: i + 1 }));
  }

  function _generateEncounter(type, unitCounts) {
    switch (type) {
      case 'battle':
        return {
          title:    'GEM MINE',
          subtitle: 'Mini-Mob Fight',
          flavor:   'A wild crystal cavern teeming with restless spirits.',
          gold:     _rnd(50, 75),
          goldTier: '⭐',
          lives:    3,
          timeMod:  0,
          units:    _pickUnits(3, unitCounts),
        };
      case 'elite':
        return {
          title:    'RICH GEM MINE',
          subtitle: 'Mini-Elite Fight',
          flavor:   'A fortified vault guarded by a seasoned crystal warden.',
          gold:     _rnd(100, 150),
          goldTier: '⭐⭐',
          lives:    2,
          timeMod:  -30,
          units:    _pickUnits(3, unitCounts),
        };
      case 'event':
        return {
          title:    'MYSTERIOUS GROVE',
          subtitle: 'Random Event',
          flavor:   'Something stirs in the ancient trees...',
          gold:     0,
          goldTier: '',
          lives:    null,
          timeMod:  0,
          units:    [],
        };
      case 'shop':
        return {
          title:    'GEM BAZAAR',
          subtitle: 'Shop',
          flavor:   'A travelling merchant offers rare wares.',
          gold:     0,
          goldTier: '',
          lives:    null,
          timeMod:  0,
          units:    [],
        };
      case 'boss':
        return {
          title:    'CRYSTAL OVERLORD',
          subtitle: 'Boss Fight',
          flavor:   'The ancient guardian awakens. Defeat it to claim the run.',
          gold:     0,
          goldTier: '',
          lives:    null,
          timeMod:  0,
          units:    _allUnits(),
        };
      default:
        return _generateEncounter('battle', unitCounts);
    }
  }

  // ── RUN INIT ─────────────────────────────────────────────────────────────
  function _assignCategoryNodes(nodeTypes) {
    const allCats = (window.WordCrushAdapter.getCategories?.() || []).filter(c => c.count >= 5);
    if (!allCats.length) return {};
    const combatIds = NODE_DEFS
      .filter(n => !['shop', 'boss', 'start'].includes(n.id) && ['battle', 'elite'].includes(nodeTypes[n.id]))
      .map(n => n.id);
    const shuffledCats  = _shuffle(allCats).slice(0, 2);
    const shuffledNodes = _shuffle(combatIds);
    const map = {};
    shuffledCats.forEach((cat, i) => {
      if (shuffledNodes[i]) map[shuffledNodes[i]] = { unit: cat.unit, label: cat.label, icon: cat.icon || '🏷' };
    });
    return map;
  }

  function startRun() {
    const pool = [...TYPE_POOL].sort(() => Math.random() - 0.5);
    const unitCounts = new Map();
    const nodeTypes = {};
    const encounters = {};
    let pi = 0;
    NODE_DEFS.forEach(n => {
      const type = n.type || pool[pi++] || 'battle';
      nodeTypes[n.id]  = type;
      encounters[n.id] = _generateEncounter(type, unitCounts);
    });

    const nodeCategories = _assignCategoryNodes(nodeTypes);

    _run = {
      current:       null,
      visited:       new Set(),
      nodeTypes,
      encounters,
      nodeCategories,
      lives:         5,
      maxLives:      5,
      gold:          0,
      pendingId:     null,
      jokers:        1,
      lastJokerDrop: false,
      staminaBonus:     0,
      totalCorrect:     0,
      totalWrong:       0,
      bestCombo:        0,
      spentGold:        false,
      jokersUsedInRun:  0,
    };

    _renderMap();
    window.WordCrushScreens.showScreen('adv-run-screen');
  }

  // ── MAP RENDER ────────────────────────────────────────────────────────────
  function _renderMap() {
    if (!_run) return;
    const svg       = document.getElementById('adv-map-svg');
    const container = document.getElementById('adv-map-nodes');
    if (!svg || !container) return;

    const curDef   = NODE_DEFS.find(n => n.id === _run.current);
    const availIds = _run.current === null
      ? new Set(['start'])
      : new Set((curDef?.to || []).filter(id => !_run.visited.has(id)));

    // SVG lines
    const lines = [];
    NODE_DEFS.forEach(node => {
      node.to.forEach(toId => {
        const target  = NODE_DEFS.find(n => n.id === toId);
        if (!target) return;
        const bothVis = _run.visited.has(node.id) && _run.visited.has(toId);
        const isLive  = _run.visited.has(node.id) && availIds.has(toId);
        const cls = bothVis ? 'adv-line adv-line--done'
                 : isLive  ? 'adv-line adv-line--live'
                 :           'adv-line';
        lines.push(`<line class="${cls}" x1="${node.x}%" y1="${node.y}%" x2="${target.x}%" y2="${target.y}%" />`);
      });
    });
    svg.innerHTML = lines.join('');

    // Node buttons
    container.innerHTML = NODE_DEFS.map(node => {
      const type  = _run.nodeTypes[node.id] || 'battle';
      const info  = NODE_TYPES[type] || NODE_TYPES.battle;
      const isCur = node.id === _run.current;
      const isVis = _run.visited.has(node.id);
      const isAv  = availIds.has(node.id);
      const state = isCur ? 'cur' : isVis ? 'done' : isAv ? 'avail' : 'locked';
      const click    = isAv ? `onclick="AdvRun.preview('${node.id}')"` : '';
      const nodeCat  = _run.nodeCategories?.[node.id];
      const catBadge = nodeCat ? `<span class="adv-node-cat-badge">${nodeCat.icon || '🏷'}</span>` : '';
      return (
        `<button class="adv-node adv-node--${state}${nodeCat ? ' adv-node--has-cat' : ''}" ` +
        `style="left:${node.x}%;top:${node.y}%;--nc:${info.color}" ` +
        `${click} ${(state === 'locked' || isCur) ? 'disabled' : ''}>` +
        `<span class="adv-node-icon">${info.icon}</span>` +
        `<span class="adv-node-label">${info.label}</span>` +
        `${catBadge}` +
        `</button>`
      );
    }).join('');

    _renderHud();
  }

  function _renderHud() {
    const livesEl = document.getElementById('adv-hud-lives');
    if (livesEl && _run) {
      livesEl.innerHTML = Array.from({ length: _run.maxLives }, (_, i) =>
        `<span class="adv-heart${i < _run.lives ? '' : ' lost'}">♥</span>`
      ).join('');
    }
    const jokerMapEl = document.getElementById('adv-hud-joker-map-val');
    if (jokerMapEl && _run) jokerMapEl.textContent = _run.jokers;
    const goldEl = document.getElementById('adv-hud-gold');
    if (goldEl && _run) goldEl.textContent = `💰 ${_run.gold}`;

  }

  // ── PREVIEW OVERLAY ───────────────────────────────────────────────────────
  function preview(id) {
    if (!_run) return;
    const isStart = _run.current === null && id === 'start';
    const curDef  = NODE_DEFS.find(n => n.id === _run.current);
    if (!isStart && (!curDef?.to.includes(id) || _run.visited.has(id))) return;

    _run.pendingId = id;
    const enc  = _run.encounters[id];
    const type = _run.nodeTypes[id];
    const info = NODE_TYPES[type] || NODE_TYPES.battle;

    // Header
    _setText('adv-prev-type-icon',  info.icon);
    _setText('adv-prev-type-label', info.label);
    _setText('adv-prev-title',      enc.title);
    _setText('adv-prev-subtitle',   enc.subtitle);
    _setText('adv-prev-flavor',     enc.flavor);
    document.getElementById('adv-prev-header').style.setProperty('--nc', info.color);

    // Stats
    const goldRow  = document.getElementById('adv-prev-gold-row');
    const livesRow = document.getElementById('adv-prev-lives-row');
    const timeRow  = document.getElementById('adv-prev-time-row');
    const unitsRow = document.getElementById('adv-prev-units-row');

    if (enc.gold > 0) {
      goldRow.style.display = '';
      _setText('adv-prev-gold', `+${enc.gold} ${enc.goldTier}`);
    } else {
      goldRow.style.display = 'none';
    }

    if (type !== 'shop') {
      livesRow.style.display = '';
      const skulls = type === 'boss' ? 3 : type === 'elite' ? 2 : 1;
      _setText('adv-prev-lives', '💀'.repeat(skulls));
    } else {
      livesRow.style.display = 'none';
    }

    if (enc.timeMod !== 0) {
      timeRow.style.display = '';
      _setText('adv-prev-time', `${enc.timeMod}s`);
    } else {
      timeRow.style.display = 'none';
    }

    if (enc.units.length > 0) {
      unitsRow.style.display = '';
      _setText('adv-prev-units',
        enc.units.map(u => `Unit ${u.unit}`).join(' &nbsp;·&nbsp; ')
      );
    } else {
      unitsRow.style.display = 'none';
    }

    const catRow = document.getElementById('adv-prev-category-row');
    const cat = _run.nodeCategories?.[id];
    if (catRow) {
      if (cat && type !== 'shop' && type !== 'boss') {
        catRow.style.display = '';
        _setText('adv-prev-cat-icon',  cat.icon || '🏷');
        _setText('adv-prev-cat-label', cat.label);
      } else {
        catRow.style.display = 'none';
      }
    }

    document.getElementById('adv-preview-overlay').classList.add('open');
  }

  function cancelPreview() {
    if (_run) _run.pendingId = null;
    document.getElementById('adv-preview-overlay').classList.remove('open');
  }

  function enterNode() {
    if (!_run || !_run.pendingId) return;
    const id   = _run.pendingId;
    const type = _run.nodeTypes[id];
    const enc  = _run.encounters[id];
    _run.pendingId = null;
    document.getElementById('adv-preview-overlay').classList.remove('open');

    _run.visited.add(id);
    _run.current = id;

    if (type === 'shop') {
      _openShop();
      return;
    }

    const profile  = window.WordCrushProfile.getProfile();
    const fullPool = _buildFullPool(enc, id);
    const words    = _selectFirstWave(fullPool, type);

    if (words.length < (window.WordCrushAdapter.BOARD_WORD_COUNT || 15)) {
      if (window.ToastManager) window.ToastManager.show('Bu üniteler için yeterli kelime bulunamadı.');
      _renderMap();
      return;
    }

    const enemyHp = type === 'boss' ? 180 : type === 'elite' ? 90 : 60;
    const timeOverride = type === 'boss' ? 150 + _run.staminaBonus * 30 : null;

    setTimeout(() => renderJokerBar(), 0);
    window.WordCrushGame.startGame({
      words,
      profile,
      runType:         'adventure',
      advNodeId:       id,
      advNodeType:     type,
      advGoldReward:   enc.gold,
      advTimeMod:      enc.timeMod,
      advTimeOverride: timeOverride,
      advLives:        _run.lives,
      advMaxLives:     _run.maxLives,
      advEnemyHp:      enemyHp,
      advWordPool:     fullPool,
    });
  }

  function returnToMap() {
    if (!_run) return;
    _renderMap();
    window.WordCrushScreens.showScreen('adv-run-screen');
    if (_run.runFailed) {
      document.getElementById('adv-run-failed-overlay').classList.add('open');
      const goldEl = document.getElementById('adv-fail-gold');
      if (goldEl) goldEl.textContent = _run.gold;
      return;
    }
    if (_run.lastEliteBonus) {
      window.ToastManager?.show(`⭐ ELITE BONUS +${_run.lastEliteBonus} puan!`);
      _run.lastEliteBonus = 0;
    }
    if (_run.lastJokerDrop) {
      window.ToastManager?.show('🃏 JOKER DROPPED!');
      _run.lastJokerDrop = false;
    }
    renderJokerBar();
  }

  function recordResult(state) {
    if (!state || state.runType !== 'adventure' || !_run) return;
    const completed = state.advEnemyHp <= 0;
    const enc      = _run.encounters[_run.current];
    const nodeType = _run.nodeTypes[_run.current];

    _run.lives       = Math.max(0, state.advLives || 0);
    _run.totalCorrect += state.matches   || 0;
    _run.totalWrong   += state.wrongs    || 0;
    _run.bestCombo    = Math.max(_run.bestCombo, state.comboBest || 0);

    if (completed) {
      if (nodeType === 'boss') {
        const savingsBonus = _run.gold;
        const bossBonus    = 300;
        window.WordCrushProfile.addAdventureReward({
          score:      (state.score || 0) + bossBonus + savingsBonus,
          nodes:      1,
          run:        1,
          miser:      !_run.spentGold,
          jokerFree:  _run.jokersUsedInRun === 0,
          perfectRun: _run.totalWrong === 0,
        });
        _showAdventureCompleted(state, bossBonus, savingsBonus);
        return;
      }

      _run.gold += enc?.gold || 0;
      const eliteBonus = nodeType === 'elite' ? 100 : 0;
      window.WordCrushProfile.addAdventureReward({
        score: (state.score || 0) + eliteBonus,
        nodes: 1,
        elite: nodeType === 'elite' ? 1 : 0,
      });
      _run.lastFight      = 'win';
      _run.lastEliteBonus = eliteBonus;

      const dropChance = nodeType === 'elite' ? 0.25 : 0.10;
      _run.lastJokerDrop = Math.random() < dropChance;
      if (_run.lastJokerDrop) _run.jokers++;
    } else {
      _run.lastFight = 'fail';
      _run.runFailed = true;
    }
  }

  function _showAdventureCompleted(state, bossBonus, savingsBonus) {
    const el = document.getElementById('adv-completed-overlay');
    if (!el) return;
    document.getElementById('adv-completed-correct').textContent  = _run.totalCorrect;
    document.getElementById('adv-completed-wrong').textContent    = _run.totalWrong;
    document.getElementById('adv-completed-combo').textContent    = _run.bestCombo;
    document.getElementById('adv-completed-boss-bonus').textContent    = `+${bossBonus}`;
    document.getElementById('adv-completed-savings').textContent  = savingsBonus > 0 ? `+${savingsBonus} (${_run.gold} 🪙)` : '0';
    document.getElementById('adv-completed-score').textContent    = state.score + bossBonus + savingsBonus;
    el.classList.add('open');
  }

  function _setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // ── SHOP ─────────────────────────────────────────────────────────────────
  const SHOP_ITEMS = [
    { id: 'health',  icon: '🧪', name: 'Health Potion',  desc: '+1 can (anında)',          price: 75  },
    { id: 'max',     icon: '💊', name: 'Max Potion',     desc: 'Canı 5\'e tamamla',        price: 150 },
    { id: 'stamina', icon: '⚡', name: 'Stamina Potion', desc: '+30 sn boss fight (stack)', price: 100 },
    { id: 'joker',   icon: '🃏', name: 'Joker',          desc: 'Envantere 1 joker ekle',   price: 60  },
  ];

  function _openShop() {
    _renderShop();
    document.getElementById('adv-shop-overlay').classList.add('open');
  }

  function _renderShop() {
    document.getElementById('adv-shop-gold-val').textContent = _run.gold;
    const list = document.getElementById('adv-shop-items');
    if (!list) return;
    list.innerHTML = SHOP_ITEMS.map(item => {
      const canAfford = _run.gold >= item.price;
      const disabled  = !canAfford
        || (item.id === 'health' && _run.lives >= _run.maxLives)
        || (item.id === 'max'    && _run.lives >= _run.maxLives);
      return `<button class="adv-shop-item${disabled ? ' disabled' : ''}" ${disabled ? 'disabled' : ''} onclick="AdvRun.buyShopItem('${item.id}')">
        <span class="asi-icon">${item.icon}</span>
        <span class="asi-info">
          <span class="asi-name">${item.name}</span>
          <span class="asi-desc">${item.desc}</span>
        </span>
        <span class="asi-price">🪙${item.price}</span>
      </button>`;
    }).join('');
  }

  function buyShopItem(id) {
    if (!_run) return;
    const item = SHOP_ITEMS.find(i => i.id === id);
    if (!item || _run.gold < item.price) return;
    _run.gold -= item.price;
    _run.spentGold = true;
    if      (id === 'health')  _run.lives = Math.min(_run.maxLives, _run.lives + 1);
    else if (id === 'max')     _run.lives = _run.maxLives;
    else if (id === 'stamina') _run.staminaBonus++;
    else if (id === 'joker')   _run.jokers++;
    _renderShop();
    // Update map header gold display
    const goldEl = document.getElementById('adv-hud-gold');
    if (goldEl) goldEl.textContent = `🪙 ${_run.gold}`;
  }

  function closeShop() {
    document.getElementById('adv-shop-overlay').classList.remove('open');
    _renderMap();
    window.WordCrushScreens.showScreen('adv-run-screen');
  }

  // ── JOKERS ───────────────────────────────────────────────────────────────
  function useJoker(type) {
    if (!_run || _run.jokers < 1) return;
    const ok = window.WordCrushGame.activateJoker(type);
    if (!ok) return;
    _run.jokers--;
    _run.jokersUsedInRun++;
    renderJokerBar();
  }

  function renderJokerBar() {
    const btn     = document.getElementById('adv-joker-btn');
    const countEl = document.getElementById('adv-joker-count');
    const count   = _run?.jokers || 0;
    if (btn)     btn.disabled = count === 0;
    if (countEl) countEl.textContent = count;
  }

  function openJokerOverlay() {
    if (!_run || _run.jokers < 1) return;
    const list = document.getElementById('adv-joker-list');
    if (!list) return;
    list.innerHTML = JOKER_ABILITIES.map(j =>
      `<button class="adv-joker-choice" onclick="AdvRun._pickJoker('${j.type}')">
        <span class="ajc-icon">${j.icon}</span>
        <span class="ajc-info">
          <span class="ajc-name">${j.name}</span>
          <span class="ajc-desc">${j.type === 'heal' ? `+2 can (maks ${_run.maxLives})` : j.desc}</span>
        </span>
      </button>`
    ).join('');
    document.getElementById('adv-joker-overlay').style.display = '';
  }

  function closeJokerOverlay() {
    document.getElementById('adv-joker-overlay').style.display = 'none';
  }

  function _pickJoker(type) {
    closeJokerOverlay();
    useJoker(type);
  }

  // ── EXIT ─────────────────────────────────────────────────────────────────
  function confirmExit() {
    document.getElementById('adv-exit-confirm-overlay')?.classList.add('open');
  }

  function cancelExit() {
    document.getElementById('adv-exit-confirm-overlay')?.classList.remove('open');
  }

  function exitRun() {
    _run = null;
    document.getElementById('adv-preview-overlay')?.classList.remove('open');
    document.getElementById('adv-run-failed-overlay')?.classList.remove('open');
    document.getElementById('adv-exit-confirm-overlay')?.classList.remove('open');
    document.getElementById('adv-shop-overlay')?.classList.remove('open');
    document.getElementById('adv-completed-overlay')?.classList.remove('open');
    window.WordCrushProfile.showHub();
  }

  window.AdvRun = { startRun, preview, cancelPreview, enterNode, returnToMap, recordResult, confirmExit, cancelExit, exitRun, useJoker, renderJokerBar, openJokerOverlay, closeJokerOverlay, _pickJoker, buyShopItem, closeShop };
})();
