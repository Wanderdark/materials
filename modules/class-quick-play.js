/* Temporary, equal-sized classroom teams. No roster or HUD writes. */
(() => {
  'use strict';
  const studentEntry = () => new URLSearchParams(location.search).get('mode') === 'student';
  let active = false, dialog = null, registration = null, returnFocus = null;
  const transferSelector = '#wc-transfer-stars,#rvr-transfer-stars,#winner-transfer-stars,#wr-transfer-stars,#transfer-points-button,#transfer-points';
  const watchedButtons = new Map();
  const legacy = document.currentScript?.dataset.classQuickPlay === 'legacy';

  function createTeams(total, teamCount) {
    if (!Number.isSafeInteger(total) || !Number.isInteger(teamCount) || teamCount < 2 || teamCount > 3 || total < teamCount || total % teamCount !== 0) {
      throw new RangeError('Enter a positive player count divisible by the number of teams.');
    }
    const size = total / teamCount;
    return Array.from({ length: teamCount }, (_, team) =>
      Array.from({ length: size }, (_, index) => ({ name: 'STUDENT ' + (team * size + index + 1), avatarPath: '', level: 1 })));
  }

  function syncTransfer(button) {
    if (!active) return;
    if (!button.disabled) button.disabled = true;
    if (button.hidden) button.hidden = false;
    if (button.style.display === 'none') button.style.removeProperty('display');
    button.title = 'QUICK PLAY CLASS: temporary students cannot receive HUD points.';
    button.dataset.quickPlayDisabled = 'true';
  }
  function watchTransfers() {
    document.querySelectorAll(transferSelector).forEach(button => {
      if (!watchedButtons.has(button)) {
        watchedButtons.set(button, { disabled: button.disabled, hidden: button.hidden, display: button.style.display, title: button.title });
        new MutationObserver(() => syncTransfer(button)).observe(button, { attributes: true, attributeFilter: ['disabled', 'hidden', 'style'], childList: true });
      }
      syncTransfer(button);
    });
  }
  function clear() {
    active = false;
    watchedButtons.forEach((original, button) => {
      if (!button.dataset.quickPlayDisabled) return;
      button.disabled = original.disabled;
      button.hidden = original.hidden;
      button.style.display = original.display;
      button.title = original.title;
      delete button.dataset.quickPlayDisabled;
    });
  }

  function ensureDialog() {
    if (dialog) return;
    const style = document.createElement('style');
    style.textContent = '.qpc-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:12px 0}.qpc-actions>button{flex:1;width:auto;min-width:0;margin:0}.qpc-launch{min-height:42px;padding:10px 16px;border:1px solid #f2b657;border-radius:12px;background:#183653;color:#fff;font:800 15px Barlow,sans-serif;cursor:pointer}.qpc-dialog{width:min(430px,calc(100vw - 32px));max-height:90vh;overflow:auto;padding:26px;border:1px solid #e8b257;border-radius:22px;background:#10233f;color:#fff;font:16px Barlow,sans-serif;text-align:center;box-sizing:border-box}.qpc-dialog::backdrop{background:#020817df}.qpc-dialog h2{margin:0 0 14px;font-size:30px;color:#ffd68b}.qpc-dialog input{box-sizing:border-box;width:100%;height:64px;margin:12px 0;padding:8px;border:1px solid #728eac;border-radius:12px;background:#081526;color:#fff;text-align:center;font:800 36px Barlow,sans-serif}.qpc-keypad{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.qpc-dialog button{min-height:48px;border:1px solid #728eac;border-radius:10px;background:#183653;color:#fff;font:700 20px Barlow,sans-serif;cursor:pointer}.qpc-dialog button:focus-visible{outline:3px solid #ffd68b;outline-offset:2px}.qpc-error{min-height:24px;color:#ffb9b9}.qpc-dialog .qpc-confirm{width:100%;background:#f2b657;color:#10233f}.qpc-dialog .qpc-cancel{width:100%;margin-top:9px;font-size:16px}[data-quick-play-disabled]{opacity:.5;cursor:not-allowed!important}';
    document.head.append(style);
    dialog = document.createElement('dialog');
    dialog.className = 'qpc-dialog';
    dialog.setAttribute('aria-labelledby', 'qpc-title');
    dialog.innerHTML = '<h2 id="qpc-title">HOW MANY PLAYERS?</h2><p class="qpc-rule"></p><input aria-label="Number of players" inputmode="numeric" readonly><div class="qpc-keypad"></div><p class="qpc-error" role="alert"></p><button class="qpc-confirm" type="button">CREATE CLASS</button><button class="qpc-cancel" type="button">CANCEL</button>';
    const keypad = dialog.querySelector('.qpc-keypad');
    ['1','2','3','4','5','6','7','8','9','CLEAR','0','BACK'].forEach(key => {
      const button = document.createElement('button');
      button.type = 'button'; button.textContent = key; button.setAttribute('aria-label', key === 'BACK' ? 'Backspace' : key === 'CLEAR' ? 'Clear number' : key);
      button.addEventListener('click', () => enter(key)); keypad.append(button);
    });
    dialog.querySelector('.qpc-confirm').addEventListener('click', confirm);
    dialog.querySelector('.qpc-cancel').addEventListener('click', close);
    dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
    document.body.append(dialog);
    document.addEventListener('keydown', event => {
      if (!dialog.open) return;
      event.stopImmediatePropagation();
      if (/^\d$/.test(event.key)) { event.preventDefault(); enter(event.key); }
      else if (event.key === 'Backspace') { event.preventDefault(); enter('BACK'); }
      else if (event.key === 'Delete') { event.preventDefault(); enter('CLEAR'); }
      else if (event.key === 'Enter') { event.preventDefault(); confirm(); }
      else if (event.key === 'Escape') { event.preventDefault(); close(); }
    }, true);
  }
  function enter(key) {
    const input = dialog.querySelector('input');
    input.value = key === 'CLEAR' ? '' : key === 'BACK' ? input.value.slice(0, -1) : input.value.length < 4 ? input.value + key : input.value;
    dialog.querySelector('.qpc-error').textContent = '';
  }
  function close() { dialog.close(); returnFocus?.focus(); }
  function open(config, launcher) {
    if (studentEntry()) return;
    ensureDialog(); registration = config; returnFocus = launcher;
    const count = config.teamCount();
    dialog.querySelector('.qpc-rule').textContent = count + ' teams. Enter a multiple of ' + count + ' so every team has the same number of students.';
    dialog.querySelector('input').value = '';
    dialog.querySelector('.qpc-error').textContent = '';
    dialog.showModal(); dialog.querySelector('input').focus();
  }
  function confirm() {
    const count = registration.teamCount(), total = Number(dialog.querySelector('input').value);
    let teams;
    try { teams = createTeams(total, count); }
    catch (_) { dialog.querySelector('.qpc-error').textContent = 'Enter at least ' + count + ' players, in multiples of ' + count + '.'; return; }
    active = true;
    registration.apply(teams);
    watchTransfers();
    close();
  }
  function register(config) {
    if (studentEntry() || !config.anchor) return;
    ensureDialog();
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'qpc-launch'; button.textContent = 'QUICK PLAY CLASS';
    button.addEventListener('click', () => open(config, button));
    if (config.anchor.tagName === 'BUTTON') {
      const row = document.createElement('div'); row.className = 'qpc-actions';
      config.anchor.before(row); row.append(config.anchor, button);
    } else {
      const row = document.createElement('div'); row.className = 'qpc-actions';
      row.append(button); config.anchor.after(row);
    }
    watchTransfers();
  }
  document.addEventListener('click', event => {
    if (!active || !event.target.closest(transferSelector)) return;
    event.preventDefault(); event.stopImmediatePropagation();
  }, true);
  window.ClassQuickPlay = Object.freeze({ register, createTeams, clear, isActive: () => active });
  if (!legacy) return;
  function attachLegacy() {
    if (studentEntry()) return;
    const screen = document.getElementById('student-overlay');
    if (!screen) return;
    const anchor = screen.querySelector('.std-roster-import,#std-roster-btn') || screen.querySelector('.std-sub');
    const game = location.pathname.split('/').slice(-2)[0];
    register({ anchor, teamCount: () => typeof groupCount === 'number' ? groupCount : 2, apply(teams) {
      STD_SLOTS = Math.max(STD_SLOTS, teams[0].length);
      const width = typeof groupNames !== 'undefined' ? 3 : 2;
      studentInputs = Array.from({ length: width }, (_, index) => Array.from({ length: STD_SLOTS }, (_, slot) => teams[index]?.[slot]?.name || ''));
      if (typeof _slotRevealed !== 'undefined') _slotRevealed = studentInputs.map(team => team.map(Boolean));
      if (typeof _silentDistributed !== 'undefined') _silentDistributed = false;
      if (typeof _pairNames !== 'undefined') _pairNames = new Set();
      if (typeof wcImportedRosterClassroomId !== 'undefined') wcImportedRosterClassroomId = '';
      if (typeof wrImportedRosterClassroomId !== 'undefined') wrImportedRosterClassroomId = '';
      if (typeof importedRosterClassroomId !== 'undefined') importedRosterClassroomId = '';
      if (game === 'word_contest') _rebuildStdCols();
      else if (game === 'word_rivals') _rebuildRvrStudentColumns();
      else if (game === 'word_master') renderStudentColumns();
      else if (game === 'word_reveal') buildStudentColumns();
      else if (game === 'word_builder') rebuildStdCols();
      else {
        const cols = document.getElementById('std-cols');
        cols.replaceChildren(buildStdGroupCol(0), buildSwapCol(), buildStdGroupCol(1));
      }
      if (typeof selectStdField === 'function') selectStdField(0, 0);
      else if (typeof selectStdSlot === 'function') selectStdSlot(0, 0);
    } });
    ['importWcRosterClass','importRvrRosterClass','importRosterClass','importWrRosterClass'].forEach(name => {
      const original = window[name];
      if (typeof original !== 'function') return;
      window[name] = function(...args) {
        const before = studentInputs;
        const result = original.apply(this, args);
        if (active && before !== studentInputs) clear();
        return result;
      };
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachLegacy, { once: true });
  else attachLegacy();
})();

