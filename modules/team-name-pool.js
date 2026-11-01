/* Shared team-name deck and optional setup controls. */
(() => {
  'use strict';
  const names = Object.freeze([
    '🐼 Pijamalı Pandalar', '🍕 Pizza Mafyası', '🐢 Ninja Kaplumbağalar',
    '🐹 Hamster Şövalyeler', '😼 Kötü Kediler', '🦉 Bilge Baykuşlar',
    '🐸 Zıpır Kurbağalar', '🦊 Kurnaz Tilkiler', '🐎 At Hırsızları',
    '🐺 Kuzu Postlu Kurtlar', '🦆 Çirkin Ördekler', '🦀 Yancı Yengeçler',
    '🦈 Vejetaryen Köpekbalıkları', '🐥 Öfkeli Civcivler', '🦃 Havalı Hindiler',
    '🪑 Arka Sıradakiler', '📝 Pro Kopyacılar'
  ]);
  const key = name => String(name || '').normalize('NFC').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLocaleLowerCase('tr');

  class TeamNamePool {
    constructor(random = Math.random, teamCount = 2) {
      this.random = random;
      this.remaining = Array.from({ length: teamCount }, () => []);
    }

    next(team, activeNames, currentName) {
      if (!Number.isInteger(team) || team < 0 || team >= this.remaining.length) return null;
      const blocked = new Set((Array.isArray(activeNames) ? activeNames : [activeNames, currentName]).map(key));
      if (!this.remaining[team].some(name => !blocked.has(key(name)))) {
        this.remaining[team] = [...names];
        for (let i = this.remaining[team].length - 1; i > 0; i--) {
          const j = Math.floor(this.random() * (i + 1));
          [this.remaining[team][i], this.remaining[team][j]] = [this.remaining[team][j], this.remaining[team][i]];
        }
      }
      const index = this.remaining[team].findIndex(name => !blocked.has(key(name)));
      return index < 0 ? null : this.remaining[team].splice(index, 1)[0];
    }
  }
  window.TeamNamePool = TeamNamePool;
  if (typeof document === 'undefined') return;

  const virtualUI = document.currentScript?.dataset.teamNameUi === 'virtual';
  const studentEntry = () => new URLSearchParams(location.search).get('mode') === 'student';
  let styled = false;
  function addStyles() {
    if (styled) return;
    styled = true;
    const style = document.createElement('style');
    style.textContent = '.team-name-picker-row{display:grid;grid-template-columns:minmax(0,1fr) 36px;gap:6px;align-items:center;width:100%;min-width:0}.team-name-picker-row>input,.team-name-picker-row>.name-display{min-width:0;margin-top:0}.team-name-picker-row>.name-display{padding:6px 8px;font-size:clamp(16px,2vw,25px);letter-spacing:.03em;word-break:normal;overflow-wrap:anywhere}.team-name-picker-row input{font-size:clamp(12px,1.3vw,16px)}.team-name-picker-dice{display:grid;place-items:center;width:36px;min-height:36px;padding:0;border:1px solid #e9b35188;border-radius:10px;background:#183653;color:#fff;font-size:20px;cursor:pointer}.team-name-picker-dice:hover{background:#254b6a}.team-name-picker-dice:focus-visible{outline:3px solid #ffd68b;outline-offset:2px}';
    document.head.append(style);
  }

  function decorate(field, index) {
    if (field.closest('.team-name-picker-row') || field.parentElement.querySelector('.name-dice')) return;
    addStyles();
    const row = document.createElement('div');
    row.className = 'team-name-picker-row';
    field.before(row);
    row.append(field);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'team-name-picker-dice';
    button.dataset.teamNameDice = index;
    button.textContent = '🎲';
    button.title = 'Rastgele takım adı';
    button.setAttribute('aria-label', 'Randomize team ' + (index + 1) + ' name');
    row.append(button);
  }

  const mountedInputs = new WeakSet();
  function attachInputs(root, onPick) {
    if (!root || studentEntry() || mountedInputs.has(root)) return;
    mountedInputs.add(root);
    const deck = new TeamNamePool(Math.random, 3);
    const refresh = () => root.querySelectorAll('input[data-group-name]').forEach(input => {
      input.maxLength = Math.max(input.maxLength, 48);
      decorate(input, Number(input.dataset.groupName));
    });
    root.addEventListener('click', event => {
      const button = event.target.closest('[data-team-name-dice]');
      if (!button || studentEntry()) return;
      const inputs = [...root.querySelectorAll('input[data-group-name]')];
      const index = Number(button.dataset.teamNameDice);
      const name = deck.next(index, inputs.map(input => input.value));
      if (name) onPick(index, name);
    });
    new MutationObserver(refresh).observe(root, { childList: true, subtree: true });
    refresh();
  }

  function attachVirtual() {
    if (studentEntry()) return;
    const root = document.getElementById('name-overlay');
    if (!root) return;
    const deck = new TeamNamePool(Math.random, 3);
    root.querySelectorAll('.name-display[id^="nd-"]').forEach(field => decorate(field, Number(field.id.slice(3))));
    root.addEventListener('click', event => {
      const button = event.target.closest('[data-team-name-dice]');
      if (!button || studentEntry() || !root.getClientRects().length) return;
      const index = Number(button.dataset.teamNameDice);
      const activeNames = typeof groupNames !== 'undefined' ? groupNames : typeof teamNames !== 'undefined' ? teamNames : null;
      if (!activeNames) return;
      const count = typeof groupCount === 'number' ? groupCount : activeNames.length;
      const name = deck.next(index, activeNames.slice(0, count));
      if (!name) return;
      activeNames[index] = name;
      const label = document.getElementById('nt-' + index);
      if (label) { label.textContent = name; label.title = name; }
      if (typeof selectNameField === 'function') selectNameField(index);
    });
  }

  window.TeamNamePicker = Object.freeze({ names, key, attachInputs });
  if (virtualUI) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachVirtual, { once: true });
    else attachVirtual();
  }
})();

