/* ================================================================
   TEACHER CONTROL LAYER v1
   Activates only via ?mode=teacher. Keeps a local classroom roster,
   a temporary chosen-student trigger, and an awardable point pool.
   ================================================================ */
(() => {
  "use strict";

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");
  const passwordResetRequested = params.get("password-reset") === "1";
  const forceTeacherMode = window.__forceTeacherControl === true;
  const controlScriptUrl = document.currentScript?.src || location.href;
  const hudOverlayOpenMs = 300;
  const hudOverlayCloseMs = 360;
  const HUD_LITE_KEY = "fpTeacherHudLiteV1";
  const HUD_SIZE_KEY = "fpTeacherHudSizeV1";
  const HUD_LITE_TIP_KEY = "fpTeacherHudLiteTipDismissedV1";
  let hudLite = false;
  try { hudLite = sessionStorage.getItem(HUD_LITE_KEY) === "1"; }
  catch { /* Default to normal mode when session storage is unavailable. */ }
  if (!document.querySelector("script[data-classroom-radial]")) {
    const radialScript = document.createElement("script");
    radialScript.src = new URL("../teacher-hud/radial-menu.js", controlScriptUrl).href;
    radialScript.setAttribute("data-classroom-radial", "");
    document.head.appendChild(radialScript);
  }
  if (mode === "teacher") sessionStorage.setItem("fpTeacherMode", "1");
  if (mode === "student") sessionStorage.removeItem("fpTeacherMode");
  if (!forceTeacherMode && sessionStorage.getItem("fpTeacherMode") !== "1") return;

  const STORE_KEY = "fpTeacherClassroomV1";
  const PICKER_PICTURES_KEY = "fpTeacherPointPickerPicturesV1";
  const CLOUD_STORE_KEY = "fpTeacherCloudClassroomsV1";
  const CLASS_LOCK_KEY = "fpTeacherActiveClassLockV1";
  const TUTORIAL_DISMISSED_KEY = "fpTeacherControlTutorialDismissedV1";
  const TUTORIAL_PROMPT_SESSION_KEY = "fpTeacherControlTutorialPromptV1";
  let buttonHelpActive = false;
  const standaloneRoster = document.getElementById("tc-standalone-roster");
  const teacherToastScriptUrl = new URL("toast.js", controlScriptUrl).href;
  const baseAvatarNames = ["Ava", "Benjamin", "Chloe", "Daniel", "David", "Ella", "Emma", "Ethan", "Hannah", "Jack", "Lucas", "Mia", "Noah", "Olivia", "Victoria", "Zoe"];
  const v3AvatarIds = new Set(baseAvatarNames.map(name => name.toLowerCase()));
  const canonicalAvatarPath = (name) => {
    const id = name.toLowerCase();
    return v3AvatarIds.has(id) ? `images/avatars/v3/${id}.webp` : `images/avatars/v2/${name}.webp`;
  };
  const teacherSoundPath = (name) => new URL(`sounds/${name}.mp3`, controlScriptUrl).href;
  const normalizeAvatarPath = (path = "") => {
    const value = String(path || "");
    const remoteCanonicalAvatar = value.match(/^https?:\/\/(?:www\.)?adilhoca\.com\/func_presenter\/images\/avatars\/(?:v[23]\/)?([^/?#]+)\.webp(?:[?#].*)?$/i);
    if (remoteCanonicalAvatar) return canonicalAvatarPath(remoteCanonicalAvatar[1]);
    const localCanonicalAvatar = value.match(/^file:\/\/\/.*\/func_presenter\/images\/avatars\/(?:v[23]\/)?([^/?#]+)\.webp(?:[?#].*)?$/i);
    if (localCanonicalAvatar) return canonicalAvatarPath(localCanonicalAvatar[1]);
    if (/^(?:\.\.\/func_presenter\/)?images\/avatars\//i.test(value)) {
      return canonicalAvatarPath(value.split("/").pop().replace(/\.webp(?:[?#].*)?$/i, ""));
    }
    return value;
  };
  const resolveAvatarPath = (path = "") => {
    const value = normalizeAvatarPath(path);
    if (!value) return "";
    try { return new URL(value, controlScriptUrl).href; } catch { return value; }
  };
  const state = {
    version: 4,
    classrooms: [],
    activeClassroomId: "",
    roster: [],
    pointBank: 0,
    selectedStudentId: "",
    attendanceDate: "",
    absentStudentIds: []
  };
  const AVATAR_OPTIONS = [
    "Blaze", "Frost", "Grace", "Louis", "Mara",
    "Nova", "Orion", "Pixie", "Rex", "Terra"
  ].map((name) => ({ name, path: `../word_quest/avatars/AV_Anime_${name}_head.webp` })).concat(
    baseAvatarNames.map((name) => ({ name, path: canonicalAvatarPath(name) }))
  );
  const AVATAR_UNLOCK_LEVELS = Object.freeze({
    grace: 9,
    louis: 9,
    rex: 8,
    pixie: 8,
    nova: 8,
    blaze: 6,
    mara: 6,
    frost: 7,
    terra: 7
  });
  const shouldFlipAvatar = (path = "") => /AV_Anime_(Nova|Terra)_head\.webp$/i.test(path);

  const css = `
    .tc-hud { position: fixed; left: 8px; bottom: 10px; z-index: 11000; display: flex; align-items: center; gap: 5px; width: calc(var(--tc-controls-width, 220px) + 25px); padding: 6px; overflow: visible; border: 1px solid rgba(255, 216, 77, .48); border-radius: 15px; background: rgba(8, 16, 40, .94); box-shadow: 0 14px 34px rgba(0, 0, 0, .42); transition: width .28s ease, padding .28s ease, gap .28s ease, border-radius .28s ease; }
    .tc-hud button { width: 34px; height: 34px; border: 1px solid #2b4084; border-radius: 10px; background: #12234e; color: #f4f7ff; font-size: 16px; cursor: pointer; transition: transform .14s ease, border-color .14s ease, background-color .14s ease; }
    .tc-hud button:hover { transform: translateY(-2px); border-color: rgba(255, 216, 77, .85); background: #18336e; }
    .tc-hud .tc-radial-lock[data-hud-lite="true"] { position: relative; padding-bottom: 7px; }
    .tc-hud .tc-radial-lock[data-hud-lite="true"]::after {
      content: "LITE"; position: absolute; right: 0; bottom: 2px; left: 0;
      color: #ffd84d; font: 900 7px/1 system-ui, sans-serif; text-align: center; pointer-events: none;
    }
    .tc-hud .tc-roster.has-chosen-avatar { padding: 2px; overflow: hidden; }
    .tc-roster-avatar { display: block; width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
    .tc-hud .tc-random.is-chosen { border-color: #65e6b8; box-shadow: 0 0 14px rgba(101, 230, 184, .4); }
    .tc-hud .tc-bank { width: auto; height: 34px; min-width: 60px; padding: 0 7px; border: 0; background: transparent; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 15px; font-weight: 800; letter-spacing: .04em; text-align: center; white-space: nowrap; cursor: pointer; }
    .tc-hud .tc-bank:hover { transform: none; border: 0; background: rgba(255, 216, 77, .10); }
    .tc-hud .tc-bank.is-resetting { color: #ffab9b; text-shadow: 0 0 12px rgba(255, 128, 102, .42); }
    .tc-hud.no-roster .tc-bank { color: #8fa6d9; }
    .tc-hud-controls { display: flex; align-items: center; gap: 5px; width: var(--tc-controls-width, 220px); flex: 0 0 auto; overflow: visible; opacity: 1; transform: translateX(0); transition: width .28s ease, opacity .16s ease, transform .28s ease; }
    .tc-hud.is-compact .tc-full-only { display: none !important; }
    .tc-hud.is-compact:not(.is-collapsed) { width: calc(var(--tc-controls-width, 220px) + 50px); }
    .tc-hud .tc-expand[hidden] { display: none; }
    .tc-hud.is-collapsed { width: 22px; gap: 0; padding: 0; border-left: 0; border-radius: 0 10px 10px 0; }
    .tc-hud.is-collapsed .tc-hud-controls { width: 0; overflow: hidden; opacity: 0; transform: translateX(-16px); pointer-events: none; }
    .tc-hud .tc-collapse { width: 20px; flex: 0 0 20px; padding: 0; border: 0; border-radius: 0 9px 9px 0; background: transparent; color: #a9bce9; font-family: Arial, sans-serif; font-size: 21px; font-weight: 400; line-height: 1; }
    .tc-hud .tc-collapse:hover { background: rgba(143, 166, 255, .14); color: #f4f7ff; }
    .tc-hud .tc-chosen-banner { position: absolute; bottom: calc(100% + 4px); left: 6px; display: flex; align-items: center; width: var(--tc-controls-width, 220px); height: auto; min-height: 24px; padding: 4px 10px; border: 1px solid rgba(101, 230, 184, .72); border-radius: 10px 10px 4px 4px; background: rgba(11, 69, 60, .96); color: #dfffee; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 900; letter-spacing: .07em; opacity: 0; pointer-events: none; transform: translateY(6px); transition: opacity .18s ease, transform .18s ease, border-color .14s ease, background-color .14s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
    .tc-hud .tc-chosen-banner.is-visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
    .tc-hud .tc-chosen-banner.is-resetting { border-color: #ffab9b; background: rgba(102, 41, 38, .96); color: #fff0e9; }
    .tc-hud .tc-whistle { position: relative; overflow: visible; }
    .tc-whistle-count { position: absolute; top: -10px; right: -5px; display: grid; place-items: center; min-width: 19px; height: 19px; padding: 0 3px; box-sizing: border-box; border: 1px solid currentColor; border-radius: 10px; background: #081028; color: #a9bce9; font: 900 13px/1 Arial, sans-serif; pointer-events: none; }
    .tc-whistle-count[hidden] { display: none; }
    .tc-whistle-progress-overlay { position: fixed; inset: 0; z-index: 12000; display: grid; place-items: center; background: rgba(3, 8, 22, .18); opacity: 0; pointer-events: none; transition: opacity .12s ease; }
    .tc-whistle-progress-overlay.is-visible { opacity: 1; }
    .tc-whistle-progress-panel { width: min(620px, calc(100vw - 48px)); padding: 18px 20px 20px; border: 2px solid rgba(255, 255, 255, .82); border-radius: 18px; background: rgba(8, 16, 40, .94); box-shadow: 0 14px 42px rgba(0, 0, 0, .45); }
    .tc-whistle-progress-label { margin-bottom: 10px; color: #fff; font-family: var(--font-display, sans-serif); font-size: 42px; font-weight: 900; letter-spacing: .04em; line-height: 1; text-align: center; }
    .tc-whistle-progress-bar { width: 0%; height: 34px; border-radius: 10px; background: #31d158; box-shadow: 0 0 18px rgba(49, 209, 88, .56); transition: width .05s linear, background .1s linear; }
    .tc-hud .tc-help-tip { position: absolute; bottom: calc(100% + 8px); left: 0; width: min(260px, calc(100vw - 18px)); padding: 8px 11px; border: 1px solid rgba(255, 216, 77, .74); border-radius: 11px; background: rgba(22, 32, 68, .98); color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 800; letter-spacing: .035em; line-height: 1.35; box-shadow: 0 10px 24px rgba(0, 0, 0, .34); pointer-events: none; }
    .tc-hud .tc-help.is-first-run { border-color: #ffd84d; color: #fff6c8; background: #203d85; box-shadow: 0 0 0 3px rgba(255, 216, 77, .22), 0 0 18px rgba(255, 216, 77, .72), 0 0 34px rgba(255, 216, 77, .4); animation: tcHelpPromptGlow 1.1s ease-in-out infinite; }
    .tc-tutorial-prompt label { display: flex; align-items: center; gap: 8px; }
    .tc-tutorial-prompt input[type="checkbox"] {
      box-sizing: border-box; flex: 0 0 14px; width: 14px; height: 14px; min-height: 0; padding: 0; margin: 0;
      accent-color: #ffdc58;
    }
    .tc-hud .tc-help-tip::after { position: absolute; bottom: -6px; left: 112px; width: 10px; height: 10px; border-right: 1px solid rgba(255, 216, 77, .74); border-bottom: 1px solid rgba(255, 216, 77, .74); background: rgba(22, 32, 68, .98); content: ""; transform: rotate(45deg); }
    :where(body:not(:has(.tc-tutorial-prompt, .tc-guided-coach))) .tc-hud .tc-radial-lock.tc-lite-tip-highlight {
      outline: 2px solid #ffdc58; outline-offset: 3px; box-shadow: 0 0 16px rgba(255, 216, 77, .6);
    }
    .tc-hud .tc-lite-tip {
      position: fixed; box-sizing: border-box; width: min(320px, calc(100vw - 24px)); padding: 12px;
      border: 1px solid #d9b94e; border-radius: 12px; background: #162448; color: #f4f7ff;
      font: 650 13px/1.45 system-ui, sans-serif; box-shadow: 0 10px 24px rgba(0, 0, 0, .35);
    }
    .tc-hud.is-collapsed .tc-lite-tip { display: none; }
    body:has(.tc-tutorial-prompt, .tc-guided-coach) .tc-hud .tc-lite-tip { visibility: hidden; }
    .tc-lite-tip p { margin: 0 0 8px; }
    .tc-lite-tip label { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; font-size: 11px; }
    .tc-hud .tc-lite-tip input[type="checkbox"] {
      box-sizing: border-box; flex: 0 0 14px; width: 14px; height: 14px; min-height: 0; padding: 0; margin: 0;
      accent-color: #ffdc58;
    }
    .tc-hud .tc-lite-tip button {
      width: auto; height: 27px; padding: 0 11px; border-radius: 7px; background: #ffdc58; color: #14183a; font: 800 11px system-ui, sans-serif;
    }
    .tc-hud.is-collapsed .tc-chosen-banner { opacity: 0; pointer-events: none; transform: translateY(6px); }
    .tc-float { position: fixed; z-index: 11010; color: #65e6b8; font-family: var(--font-display, sans-serif); font-size: 30px; font-weight: 800; letter-spacing: .06em; pointer-events: none; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 18px rgba(101, 230, 184, .48); animation: tcPointFloat 1s ease-out forwards; }
    .tc-float.tc-notice { color: var(--u2-gold, #ffd84d); font-size: 16px; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 16px rgba(255, 216, 77, .45); }
    .tc-float.tc-warning { color: #ffab9b; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 16px rgba(255, 128, 102, .42); }
    @keyframes tcPointFloat { from { opacity: 0; transform: translate(-50%, 8px) scale(.8); } 18% { opacity: 1; transform: translate(-50%, 0) scale(1.08); } to { opacity: 0; transform: translate(-50%, -58px) scale(1); } }
    @keyframes tcHelpPromptGlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
    .tc-overlay { position: fixed; inset: 0; z-index: 11005; display: flex; align-items: center; justify-content: center; padding: 24px; background: rgba(2, 7, 23, .88); }
    .tc-overlay-fade { animation: tc-overlay-fade-in ${hudOverlayOpenMs}ms ease-out both; }
    .tc-overlay-fade.tc-overlay-closing { animation: tc-overlay-fade-out ${hudOverlayCloseMs}ms ease-out both; }
    @keyframes tc-overlay-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes tc-overlay-fade-out { from { opacity: var(--tc-close-opacity, 1); } to { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) { .tc-overlay-fade { animation: none; } }
    .tc-card { position: relative; width: min(624px, 100%); max-height: 88vh; overflow-y: auto; padding: clamp(19px, 3.2vh, 32px) clamp(16px, 2.4vw, 30px); border: 1px solid rgba(255, 216, 77, .44); border-radius: 22px; background: #0d1b39; box-shadow: 0 30px 80px rgba(0, 0, 0, .5); }
    .tc-kicker { margin: 0 0 6px; color: var(--u2-gold, #ffd84d); font-size: 12px; font-weight: 900; letter-spacing: .2em; }
    .tc-title { margin: 0 0 12px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(26px, 3vw, 38px); font-weight: 800; letter-spacing: .04em; }
    .tc-roster-card > .tc-title, .tc-profile-card > .tc-title { font-size: clamp(19px, 2.2vw, 26px); }
    .tc-roster-card > .tc-title { margin-bottom: calc(12px + .5lh); }
    .tc-profile-card > .tc-title { text-shadow: none; filter: none; }
    .tc-copy { margin: 0 0 18px; color: #9db2e3; font-size: 14px; font-weight: 700; line-height: 1.5; }
    .tc-attendance-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding-right: 42px; }
    .tc-attendance-heading .tc-title { min-width: 0; margin: 0; font-size: clamp(18px, 3vw, 38px); }
    .tc-attendance-grid .tc-student-details, .tc-attendance-grid .tc-student-avatar img { transition: filter .26s ease, opacity .26s ease; }
    @media (prefers-reduced-motion: reduce) { .tc-attendance-grid .tc-student-details, .tc-attendance-grid .tc-student-avatar img { transition: none; } }
    .tc-class-bar { display: flex; align-items: center; gap: 8px; margin: 0 0 16px; padding: 8px; overflow-x: auto; border: 1px solid rgba(143, 166, 255, .22); border-radius: 14px; background: rgba(5, 14, 38, .52); }
    .tc-class-tab { flex: 0 0 auto; min-width: 100px; padding: 9px 13px; border: 1px solid #36549d; border-radius: 10px; background: #14295a; color: #dce6ff; font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 900; letter-spacing: .06em; cursor: pointer; }
    .tc-class-tab.is-active { border-color: #ffd84d; background: #25376d; color: #ffd84d; box-shadow: 0 0 14px rgba(255, 216, 77, .2); }
    .tc-class-tab.is-add { min-width: 42px; color: #65e6b8; font-size: 18px; }
    .tc-class-name-form { display: grid; gap: 12px; margin-top: 14px; }
    .tc-class-name-form input { width: 100%; padding: 12px 14px; border: 1px solid #36549d; border-radius: 11px; background: #081632; color: #f4f7ff; font: 800 16px var(--font-display, sans-serif); outline: none; }
    .tc-class-name-form input:focus { border-color: #ffd84d; box-shadow: 0 0 0 3px rgba(255, 216, 77, .14); }
    .tc-help-guide { display: grid; gap: 9px; }
    .tc-help-row { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 10px; align-items: center; width: 100%; padding: 10px 12px; border: 1px solid rgba(143, 166, 255, .25); border-radius: 13px; background: rgba(7, 19, 48, .62); text-align: left; cursor: pointer; }
    .tc-help-row:hover { border-color: rgba(255, 216, 77, .58); background: rgba(18, 35, 78, .78); transform: translateY(-1px); }
    .tc-help-icon { display: grid; place-items: center; min-height: 32px; color: var(--u2-gold, #ffd84d); font-size: 16px; text-align: center; }
    .tc-help-row div { display: grid; gap: 3px; }
    .tc-help-row div strong { color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 13px; letter-spacing: .05em; }
    .tc-help-row div span { color: #9db2e3; font-size: 12px; font-weight: 700; line-height: 1.35; }
    .tc-help-detail-list { display: grid; gap: 10px; margin: 16px 0 0; padding: 0; list-style: none; }
    .tc-help-detail-list li { padding: 10px 12px; border: 1px solid rgba(143, 166, 255, .25); border-radius: 12px; background: rgba(7, 19, 48, .62); color: #dce6ff; font-size: 13px; font-weight: 800; line-height: 1.42; }
    .tc-guided-coach { position: fixed; z-index: 11100; display: grid; box-sizing: border-box; gap: 5px; width: min(300px, calc(100vw - 24px)); padding: 10px 14px; border: 1px solid rgba(255, 216, 77, .94); border-radius: 13px; background: rgba(12, 25, 58, .98); box-shadow: 0 0 0 1px rgba(255, 216, 77, .18), 0 12px 32px rgba(0, 0, 0, .5); color: #f4f7ff; font-family: var(--font-display, sans-serif); text-align: center; pointer-events: none; }
    .tc-guided-coach small { color: var(--u2-gold, #ffd84d); font-size: 10px; font-weight: 900; letter-spacing: .15em; }
    .tc-guided-coach strong { font-size: 14px; font-weight: 900; line-height: 1.35; }
    .tc-guided-coach.is-inline { position: static; width: 100%; margin: 0 0 18px; text-align: left; }
    .tc-copy:has(+ .tc-guided-coach.is-inline) { display: none; }
    .tc-tutorial-exit { position: fixed; top: 14px; right: 14px; z-index: 11110; width: 40px; height: 40px; border: 1px solid #2b4084; border-radius: 12px; background: #12234e; color: #d9e4ff; font-size: 24px; cursor: pointer; }
    .tc-guided-coach button { justify-self: center; min-height: 30px; margin-top: 3px; padding: 0 14px; border: 0; border-radius: 9px; background: var(--u2-grad-gold, #ffd84d); color: #14183a; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 900; letter-spacing: .08em; cursor: pointer; pointer-events: auto; }
    .tc-tutorial-focus { outline: 3px solid var(--u2-gold, #ffd84d) !important; outline-offset: 3px; box-shadow: 0 0 0 5px rgba(255, 216, 77, .2), 0 0 28px 10px rgba(255, 216, 77, .7) !important; animation: tcTutorialPulse .9s ease-in-out infinite alternate; }
    @keyframes tcTutorialPulse { from { filter: brightness(1); } to { filter: brightness(1.2); } }
    .tc-close { position: absolute; top: 14px; right: 14px; width: 40px; height: 40px; border: 1px solid #2b4084; border-radius: 12px; background: #12234e; color: #d9e4ff; font-size: 18px; font-weight: 900; cursor: pointer; }
    .tc-student-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); grid-auto-rows: 1fr; gap: 10px; }
    .tc-student { position: relative; min-height: 82px; padding: 13px; border: 1px solid rgba(143, 166, 255, .26); border-radius: 16px; background: #0a142f; color: #f4f7ff; cursor: pointer; text-align: left; transition: transform .14s ease, border-color .14s ease, background-color .14s ease; }
    .tc-student:hover { transform: translateY(-2px); border-color: rgba(255, 216, 77, .78); background: #101f47; }
    .tc-point-award-spotlight { position: fixed; inset: 0; z-index: 11040; display: grid; place-items: center; pointer-events: none; }
    .tc-point-award-motion { position: relative; }
    .tc-point-award-amount {
      position: absolute; top: 50%; left: 50%; z-index: 5; translate: -50% -50%;
      color: #ffdf64; font: 900 clamp(48px, 9vw, 100px)/1 var(--font-display, Arial, sans-serif);
      white-space: nowrap; -webkit-text-stroke: 1px #10233f;
      text-shadow: 0 3px 10px #081028, 0 0 16px rgba(255, 216, 77, .55);
    }
    .tc-point-award-motion .tc-student-details > span { width: fit-content; }
    .tc-point-award-motion > .tc-student {
      width: min(235px, calc(51vw - 16px)); min-height: 0; aspect-ratio: 2.35; box-sizing: border-box;
      font-family: var(--font-ui, Arial, sans-serif); cursor: default; zoom: 1.95;
    }
    .tc-student.is-selected { border-color: #65e6b8; box-shadow: 0 0 14px rgba(101, 230, 184, .22); }
    .tc-student.is-rank-green { border-color: rgba(101, 230, 184, .78); background: linear-gradient(135deg, rgba(12, 94, 66, .95), rgba(12, 48, 76, .95)); }
    .tc-student.is-rank-green strong { font-size: 17px; }
    .tc-student.is-rank-purple { border-color: rgba(195, 134, 255, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(195, 134, 255, .18), 0 0 20px rgba(195, 134, 255, .20); }
    .tc-student.is-rank-purple strong { font-size: 18px; color: #f4e7ff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-student.is-rank-purple-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 8px 1px rgba(255, 216, 77, .34), 0 0 18px rgba(255, 216, 77, .36); }
    .tc-student.is-rank-purple-gold strong { font-size: 18px; color: #f7eaff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-student.is-rank-gold { border-color: #ffe584; background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 232, 132, .34), 0 0 20px rgba(255, 216, 77, .62), 0 0 42px rgba(255, 216, 77, .34); }
    .tc-student.is-rank-gold strong { font-size: 19px; color: #fff8cf; text-shadow: 0 0 3px #a13dff, 0 0 9px #8c26fb, 0 0 17px #811bff, 0 0 27px rgba(67, 0, 134, .88); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-student.is-rank-gold-glow { border-color: #fff0a6; background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .78), 0 0 52px rgba(255, 216, 77, .48), 0 0 86px rgba(255, 216, 77, .20); }
    .tc-student.is-rank-gold-glow strong { font-size: 19px; color: #fff8cf; text-shadow: 0 0 3px #b34dff, 0 0 11px #9225ff, 0 0 20px #861eff, 0 0 31px rgba(67, 0, 134, .94); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-student.is-rank-gold-aura { border-color: #fff0a6; background: linear-gradient(135deg, rgba(154, 104, 8, .99), rgba(70, 46, 8, .97)); box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .78), 0 0 52px rgba(255, 216, 77, .48), 0 0 86px rgba(255, 216, 77, .20); }
    .tc-student.is-rank-gold-aura strong { font-size: 20px; color: #fffbe2; text-shadow: 0 0 3px #c059ff, 0 0 12px #982aff, 0 0 23px #8b22ff, 0 0 36px #430086; animation: tcNamePulse 1.1s ease-in-out infinite; }
    .tc-rank-edge-light { display: none; }
    @media (prefers-reduced-motion: no-preference) {
      :where(body:not(:has(.tc-radial-lock[data-hud-lite="true"]))) .tc-student.is-rank-gold-glow:not(.is-absent, .tc-game-disqualified) {
        animation: tc-gold-shadow-pulse 3s ease-in-out infinite;
      }
      @keyframes tc-gold-shadow-pulse {
        50% { box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .48), 0 0 52px rgba(255, 216, 77, .28), 0 0 86px rgba(255, 216, 77, .10); }
      }
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-purple:not(.is-absent, .tc-game-disqualified) {
      box-shadow: inset 0 0 0 1px rgba(195, 134, 255, .18), 0 0 14px rgba(195, 134, 255, .12);
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-purple-gold:not(.is-absent, .tc-game-disqualified) {
      box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 8px 1px rgba(255, 216, 77, .30), 0 0 24px rgba(255, 216, 77, .36);
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-gold:not(.is-absent, .tc-game-disqualified) {
      box-shadow: inset 0 0 0 1px rgba(255, 232, 132, .34), 0 0 17px rgba(255, 216, 77, .49), 0 0 34px rgba(255, 216, 77, .25);
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-gold-glow:not(.is-absent, .tc-game-disqualified) {
      box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .40), 0 0 18px rgba(255, 216, 77, .52), 0 0 36px rgba(255, 216, 77, .27), 0 0 54px rgba(255, 216, 77, .10);
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-gold-aura:not(.is-absent, .tc-game-disqualified):not(:has(> .tc-rank-edge-light.is-spectrum)) {
      box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 19px rgba(255, 216, 77, .66), 0 0 42px rgba(255, 216, 77, .37), 0 0 70px rgba(255, 216, 77, .15);
    }
    :where(body:has(.tc-radial-lock[data-hud-lite="true"])) .tc-student.is-rank-gold-aura:not(.is-absent):not(.tc-game-disqualified):has(> .tc-rank-edge-light.is-spectrum) {
      box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .56), 0 0 26px rgba(255, 216, 77, .88), 0 0 58px rgba(255, 216, 77, .55), 0 0 90px rgba(255, 216, 77, .26);
    }
    @property --tc-spectrum-ripple {
      syntax: "<number>"; inherits: false; initial-value: 1;
    }
    @supports (mask-composite: exclude) {
      :where(body:not(:has(.tc-radial-lock[data-hud-lite="true"]))) :is(.tc-student, .tc-profile-summary).is-rank-gold-aura:not(.is-absent):not(.tc-game-disqualified) > .tc-rank-edge-light {
        display: block; position: absolute; inset: -7.5px; pointer-events: none; filter: blur(1.25px);
      }
      .tc-rank-edge-light > div {
        position: absolute; inset: 0; overflow: hidden; padding: 7.5px; border-radius: 23.5px;
        mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        mask-composite: exclude;
      }
      .tc-rank-edge-light > div::before {
        content: ""; position: absolute; top: 50%; left: 50%; width: max(150%, 240px); aspect-ratio: 1;
        transform: translate(-50%, -50%);
        background:
          repeating-conic-gradient(from 18deg, transparent 0deg 5deg, #ffd17172 7deg, transparent 9deg 14deg),
          conic-gradient(from 20deg, transparent 0deg, #ffb13a22 30deg, #ffe7a2 62deg,
            #ffb64344 77deg, transparent 115deg, #ffce6c32 156deg, #fff0bb 207deg,
            #ff9d2444 228deg, transparent 264deg, #ffc46a 310deg, transparent 360deg);
        animation: tc-rank-edge-spin 12s linear infinite;
      }
      :where(body:not(:has(.tc-radial-lock[data-hud-lite="true"]))) .tc-student.is-rank-gold-aura:not(.is-absent):not(.tc-game-disqualified):has(> .tc-rank-edge-light.is-spectrum) {
        box-shadow: inset 0 0 0 1px #ffefd644, 0 0 18px #7854ff55, 0 0 32px #23f1ff26;
      }
      .tc-profile-summary > .tc-rank-edge-light > div { border-radius: 27.5px; }
      :is(.tc-student, .tc-profile-summary).is-rank-gold-aura > .tc-rank-edge-light.is-spectrum { filter: blur(.85px); }
      .tc-rank-edge-light > div {
        --tc-spectrum-ripple: 1;
        animation: tc-spectrum-ripple 2.4s ease-in-out infinite;
        clip-path: polygon(
          0 0, 6% 0, 9% calc(2px * var(--tc-spectrum-ripple)), 12% calc(1px * var(--tc-spectrum-ripple)), 16% calc(4px * var(--tc-spectrum-ripple)), 20% calc(2px * var(--tc-spectrum-ripple)), 25% 0, 30% calc(1px * var(--tc-spectrum-ripple)),
          34% calc(3px * var(--tc-spectrum-ripple)), 39% calc(1px * var(--tc-spectrum-ripple)), 44% calc(2px * var(--tc-spectrum-ripple)), 48% 0, 52% 0, 56% calc(3px * var(--tc-spectrum-ripple)), 60% calc(1px * var(--tc-spectrum-ripple)),
          65% calc(4px * var(--tc-spectrum-ripple)), 68% calc(2px * var(--tc-spectrum-ripple)), 73% calc(1px * var(--tc-spectrum-ripple)), 77% calc(3px * var(--tc-spectrum-ripple)), 82% 0, 86% calc(1px * var(--tc-spectrum-ripple)), 91% calc(3px * var(--tc-spectrum-ripple)), 95% 0, 100% 0,
          100% 12%, calc(100% - 3px * var(--tc-spectrum-ripple)) 19%, calc(100% - 1px * var(--tc-spectrum-ripple)) 27%, calc(100% - 4px * var(--tc-spectrum-ripple)) 35%,
          100% 43%, calc(100% - 2px * var(--tc-spectrum-ripple)) 51%, 100% 56%, calc(100% - 3px * var(--tc-spectrum-ripple)) 64%,
          calc(100% - 1px * var(--tc-spectrum-ripple)) 72%, calc(100% - 4px * var(--tc-spectrum-ripple)) 80%, 100% 88%, 100% 100%,
          94% 100%, 90% calc(100% - 2px * var(--tc-spectrum-ripple)), 86% calc(100% - 4px * var(--tc-spectrum-ripple)), 81% 100%,
          77% calc(100% - 2px * var(--tc-spectrum-ripple)), 73% 100%, 68% calc(100% - 3px * var(--tc-spectrum-ripple)), 64% calc(100% - 1px * var(--tc-spectrum-ripple)),
          59% calc(100% - 4px * var(--tc-spectrum-ripple)), 55% calc(100% - 2px * var(--tc-spectrum-ripple)), 51% 100%, 47% calc(100% - 1px * var(--tc-spectrum-ripple)),
          43% calc(100% - 3px * var(--tc-spectrum-ripple)), 39% 100%, 34% calc(100% - 2px * var(--tc-spectrum-ripple)), 29% 100%,
          25% calc(100% - 3px * var(--tc-spectrum-ripple)), 21% calc(100% - 1px * var(--tc-spectrum-ripple)), 16% calc(100% - 4px * var(--tc-spectrum-ripple)),
          11% calc(100% - 2px * var(--tc-spectrum-ripple)), 6% 100%, 0 100%, 0 88%, calc(2px * var(--tc-spectrum-ripple)) 81%, 0 73%, calc(4px * var(--tc-spectrum-ripple)) 65%,
          calc(2px * var(--tc-spectrum-ripple)) 57%, 0 49%, calc(3px * var(--tc-spectrum-ripple)) 41%, calc(1px * var(--tc-spectrum-ripple)) 33%, calc(4px * var(--tc-spectrum-ripple)) 26%, calc(2px * var(--tc-spectrum-ripple)) 19%, 0 12%
        );
      }
      @keyframes tc-spectrum-ripple {
        0%, 100% { --tc-spectrum-ripple: .55; }
        50% { --tc-spectrum-ripple: 1.5; }
      }
      .tc-rank-edge-light.is-spectrum > div::before {
        background:
          conic-gradient(from 18deg, transparent 0deg 43deg, #efffff88 48deg, #fff 51deg,
            #efffff55 54deg, transparent 62deg 133deg, #efffff88 138deg, #fff 141deg,
            #efffff55 144deg, transparent 152deg 212deg, #fff2ff55 218deg, #fff 222deg,
            #fff2ff88 225deg, transparent 233deg 360deg),
          conic-gradient(from 18deg, #57edff, #7affbd, #f8ff66, #ffad44,
            #ff479d, #ca53ff, #8e88ff, #57edff);
        animation-duration: 4.8s;
      }
      @keyframes tc-rank-edge-spin {
        from { transform: translate(-50%, -50%) rotate(0turn); }
        to { transform: translate(-50%, -50%) rotate(1turn); }
      }
      @media (prefers-reduced-motion: reduce) {
        .tc-rank-edge-light > div { animation: none; }
        .tc-rank-edge-light > div::before { animation: none; }
      }
    }
    .tc-student.is-absent { border-color: rgba(154, 169, 194, .7); background: linear-gradient(135deg, rgba(44, 53, 73, .94), rgba(24, 31, 47, .96)); box-shadow: none; }
    .tc-student.is-absent .tc-student-details,
    .tc-student.is-absent .tc-student-avatar img { filter: grayscale(1); opacity: .7; }
    .tc-student.is-absent:hover { border-color: rgba(187, 198, 217, .82); background: linear-gradient(135deg, rgba(56, 65, 86, .96), rgba(30, 38, 57, .98)); }
    .tc-student.is-absent .tc-student-stars { color: #c0c6d2; }
    .tc-attendance-status { position: absolute; top: -7px; right: -7px; z-index: 2; display: grid; width: 22px; height: 22px; place-items: center; border: 2px solid #d8fff1; border-radius: 50%; background: #178b63; color: #fff; font-family: var(--font-display, sans-serif); font-size: 14px; font-style: normal; font-weight: 900; line-height: 1; box-shadow: 0 2px 8px rgba(0, 0, 0, .34); }
    .tc-attendance-status.is-absent { border-color: #ffd1ca; background: #bd4c4c; }
    .tc-student strong { display: block; font-size: 15px; font-weight: 900; letter-spacing: .03em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .tc-student span { display: block; margin-top: 7px; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 20px; font-weight: 800; }
    .tc-student .tc-level-progress { display: block; margin-top: 3px; color: #b8c9ed; font: 700 10px/1.25 system-ui, sans-serif; }
    .tc-student-stars { min-height: 14px; margin-top: 2px; color: #fff0a6; font-size: 11px; letter-spacing: 0; line-height: 1.2; white-space: nowrap; }
    .tc-student em { position: absolute; top: 10px; right: 11px; color: #65e6b8; font-size: 14px; font-style: normal; }
    .tc-student-name-row { display: flex; align-items: center; gap: 6px; min-width: 0; }
    .tc-student-name-row strong { min-width: 0; flex: 1 1 auto; }
    .tc-student:is(.is-rank-gold, .is-rank-gold-glow, .is-rank-gold-aura) .tc-student-name-row strong {
      flex-grow: 0; transform-origin: center;
    }
    .tc-student-name-row > .tc-level-badge.is-inline { margin-inline-start: auto; }
    .tc-student:is(.is-rank-purple, .is-rank-purple-gold, .is-rank-gold, .is-rank-gold-glow, .is-rank-gold-aura) .tc-student-name-row strong {
      overflow: visible; text-overflow: clip; white-space: normal; overflow-wrap: anywhere;
    }
    .tc-student-grid .tc-student-details { min-width: 0; }
    .tc-student-grid .tc-student-details > span { white-space: nowrap; }
    .tc-student-grid .tc-student .tc-student-name-row strong,
    .tc-student-grid .tc-student .tc-level-progress {
      overflow: visible; white-space: nowrap; overflow-wrap: normal; text-overflow: clip;
    }
    .tc-student.has-avatar { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 10px; }
    .tc-student-avatar { position: relative; display: grid; width: 55px; aspect-ratio: 1; overflow: visible; place-items: center; border: 1px solid rgba(255, 216, 77, .56); border-radius: 10px; background: #09132c; color: #dbe7ff; font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 900; }
    .tc-student-avatar img { width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
    .tc-avatar-media { position: relative; }
    .tc-avatar-image-crop { width: 100%; height: 100%; overflow: hidden; border-radius: inherit; }
    .tc-level-badge, .tc-student .tc-level-badge { position: absolute; top: -8px; right: -8px; z-index: 4; display: grid; width: 25px; height: 25px; box-sizing: border-box; margin: 0; place-items: center; border: 2px solid #fff0a6; border-radius: 50%; background: #173671; color: #fff8cf; font-family: var(--font-display, sans-serif); font-size: 10px; font-weight: 900; letter-spacing: 0; line-height: 1; box-shadow: 0 2px 9px rgba(0, 0, 0, .46), 0 0 10px rgba(255, 216, 77, .26); }
    .tc-level-badge.is-inline { position: static; display: grid; flex: 0 0 auto; width: 22px; height: 22px; margin: 0; place-items: center; border-width: 1px; color: #fff8cf; font-size: 9px; line-height: 1; }
    .tc-level-badge, .tc-student .tc-level-badge {
      border-color: transparent;
      background: linear-gradient(#173671, #173671) padding-box,
        conic-gradient(var(--tc-level-arc-color, #fff0a6) 0 var(--tc-level-fill), #526786 var(--tc-level-fill) 100%) border-box;
    }
    @property --tc-level-arc-color {
      syntax: "<color>"; inherits: false; initial-value: #fff0a6;
    }
    @media (prefers-reduced-motion: no-preference) {
      :where(body:not(:has(.tc-radial-lock[data-hud-lite="true"]))) .tc-level-badge.is-near-level-up {
        animation: tc-level-badge-blink 1.2s ease-in-out infinite;
      }
      @keyframes tc-level-badge-blink {
        50% { --tc-level-arc-color: #9a8150; }
      }
    }
    .tc-level-up-overlay { position: fixed; inset: 0; z-index: 2147483647; display: grid; place-items: center; padding: 24px; background: rgba(2, 8, 28, .78); backdrop-filter: blur(7px); animation: tcLevelUpBackdrop .25s ease-out; }
    .tc-level-up-card { width: min(430px, 100%); overflow: hidden; border: 2px solid #ffe27a; border-radius: 28px; background: radial-gradient(circle at 50% 0%, #324eaa 0%, #13235c 42%, #08122f 100%); color: #fff; text-align: center; box-shadow: 0 24px 80px rgba(0, 0, 0, .62), 0 0 44px rgba(255, 216, 77, .46); animation: tcLevelUpCard .38s cubic-bezier(.2, 1.35, .4, 1); }
    .tc-level-up-title { margin: 0; padding: 22px 16px 13px; color: #fff1a7; font-family: var(--font-display, sans-serif); font-size: clamp(30px, 6vw, 48px); font-weight: 900; letter-spacing: .08em; line-height: 1; text-shadow: 0 3px 0 #aa7210, 0 0 18px rgba(255, 228, 99, .8); }
    .tc-level-up-name { margin: 0; color: #fff; font-family: var(--font-display, sans-serif); font-size: clamp(22px, 4vw, 31px); font-weight: 900; letter-spacing: .06em; }
    .tc-level-up-portrait { display: grid; width: 142px; height: 142px; margin: 18px auto; place-items: center; overflow: hidden; border: 5px solid #fff1a7; border-radius: 50%; background: #10255b; color: #fff1a7; font-family: var(--font-display, sans-serif); font-size: 54px; font-weight: 900; box-shadow: 0 0 0 7px rgba(255, 216, 77, .18), 0 0 28px rgba(255, 216, 77, .6); }
    .tc-level-up-portrait img { width: 100%; height: 100%; object-fit: cover; }
    .tc-level-up-portrait:has(> .tc-level-up-avatar-video) { position: relative; }
    .tc-level-up-avatar-video {
      position: absolute; inset: 0; width: 100%; height: 100%;
      border-radius: inherit; object-fit: cover; pointer-events: none; opacity: 0;
    }
    .tc-level-up-avatar-video.is-visible { opacity: 1; }
    .tc-level-up-celebration { position: relative; width: max-content; margin: 18px auto; }
    .tc-level-up-celebration > .tc-level-up-portrait { margin: 0; }
    .tc-level-up-magic { display: none; position: absolute; inset: 0; pointer-events: none; }
    @media (prefers-reduced-motion: no-preference) {
      .tc-level-up-celebration > .tc-level-up-portrait {
        animation: tc-level-up-avatar-pulse 1s 1.5s ease-in-out;
      }
      .tc-level-up-magic { display: block; }
      .tc-level-up-magic::before, .tc-level-up-magic::after {
        content: ""; position: absolute; inset: 0; border-radius: 50%; opacity: 0; pointer-events: none;
      }
      .tc-level-up-magic::before {
        box-shadow: 0 0 11px 3px rgba(255, 230, 157, .48), 0 0 25px 7px rgba(255, 189, 73, .24);
        animation: tc-level-up-gold-glow 4s ease-in-out;
      }
      .tc-level-up-magic::after {
        box-sizing: border-box; border: 2px solid #ffe7a0; box-shadow: 0 0 10px rgba(255, 213, 111, .46);
        animation: tc-level-up-gold-ring 1s 1.5s ease-out;
      }
      .tc-level-up-spark {
        position: absolute; left: var(--spark-left); top: var(--spark-top);
        width: var(--spark-size); height: var(--spark-size); opacity: 0; pointer-events: none;
        filter: drop-shadow(0 0 3px var(--spark-color)) drop-shadow(0 0 6px var(--spark-color));
        animation: tc-level-up-spark-drift 2.15s var(--spark-delay) ease-out 4;
      }
      .tc-level-up-spark::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(circle, #fffdf6 0%, var(--spark-color) 42%);
        clip-path: polygon(50% 0, 70% 30%, 100% 50%, 70% 70%, 50% 100%, 30% 70%, 0 50%, 30% 30%);
      }
      .tc-level-up-spark:nth-child(3n)::before { clip-path: circle(38%); }
      .tc-level-up-spark.is-finale { animation-duration: 1.6s; animation-iteration-count: 1; }
      @keyframes tc-level-up-avatar-pulse {
        0%, 100% { transform: scale(1); }
        45% { transform: scale(1.04); }
      }
      @keyframes tc-level-up-gold-glow {
        0%, 100% { opacity: 0; }
        12.5% { opacity: .55; }
        47.5% { opacity: .88; }
        62.5% { opacity: .58; }
      }
      @keyframes tc-level-up-gold-ring {
        from { transform: scale(1); opacity: .68; }
        to { transform: scale(1.32); opacity: 0; }
      }
      @keyframes tc-level-up-spark-drift {
        0% { transform: translate(-50%, -50%) scale(.75); opacity: 0; }
        12% { opacity: 1; }
        68% { opacity: .95; }
        100% { transform: translate(calc(-50% + var(--spark-x)), calc(-50% + var(--spark-y))) scale(.72); opacity: 0; }
      }
    }
    .tc-level-up-message { min-height: 29px; margin: 0 18px 14px; color: #65e6b8; font-family: var(--font-display, sans-serif); font-size: 22px; font-weight: 900; letter-spacing: .05em; }
    .tc-level-up-next { margin: 0; padding: 15px; border-top: 1px solid rgba(255, 241, 167, .24); border-bottom: 1px solid rgba(255, 241, 167, .24); background: rgba(4, 11, 37, .34); color: #dbe7ff; font: 800 16px/1.35 var(--font-ui, sans-serif); }
    .tc-level-up-next strong { color: #fff1a7; font-family: var(--font-display, sans-serif); font-size: 22px; }
    .tc-level-up-close { width: calc(100% - 36px); margin: 18px; padding: 15px; border: 0; border-radius: 14px; background: var(--u2-grad-gold, #ffd84d); color: #10183b; font-family: var(--font-display, sans-serif); font-size: 22px; font-weight: 900; letter-spacing: .08em; cursor: pointer; box-shadow: 0 5px 0 #b98216; }
    .tc-level-up-close:active { transform: translateY(3px); box-shadow: 0 2px 0 #b98216; }
    @keyframes tcLevelUpBackdrop { from { opacity: 0; } to { opacity: 1; } }
    @keyframes tcLevelUpCard { from { opacity: 0; transform: scale(.72) translateY(24px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    .tc-avatar-flipped { transform: scaleX(-1); }
    @keyframes tcNamePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
    body:has(.tc-radial-lock[data-hud-lite="true"]) :is(.is-rank-gold, .is-rank-gold-glow, .is-rank-gold-aura) :is(.tc-student-name-row strong, .tc-profile-meta h3) {
      animation: none;
    }
    .tc-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
    .tc-class-edit-actions[hidden] { display: none; }
    .tc-auth-form { display: grid; gap: 10px; margin-top: 18px; }
    .tc-auth-form input { width: 100%; min-height: 46px; box-sizing: border-box; border: 1px solid #2f4d9a; border-radius: 12px; outline: none; background: #0d1a3d; color: #f4f7ff; padding: 0 14px; font: 800 14px/1 var(--font-ui, sans-serif); }
    .tc-auth-form input:focus { border-color: #ffd84d; box-shadow: 0 0 0 3px rgba(255, 216, 77, .16); }
    .tc-auth-form .tc-pin-input { font-size: 24px; letter-spacing: .28em; text-align: center; }
    .tc-pin-pad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .tc-pin-key { min-height: 46px; border: 1px solid #36549d; border-radius: 10px; background: #14295a; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 20px; font-weight: 800; cursor: pointer; }
    .tc-pin-key:hover { border-color: var(--u2-gold, #ffd84d); background: #1c3979; }
    .tc-pin-key.is-utility { color: #ffc2c2; font-size: 12px; letter-spacing: .04em; }
    .tc-auth-note { color: #a9bbef; font: 700 13px/1.45 var(--font-ui, sans-serif); margin: 10px 0 0; }
    .tc-hud .tc-account.is-connected { border-color: #61e7b6; color: #d9fff0; box-shadow: 0 0 12px rgba(97, 231, 182, .32); }
    .tc-hud .tc-sync { color: #b9d9ff; }
    .tc-hud .tc-sync:disabled { opacity: .38; cursor: default; }
    .tc-hud .tc-timer { display: flex; align-items: center; gap: 2px; }
    .tc-hud .tc-timer-display { width: 44px; padding: 0 3px; font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 900; letter-spacing: .02em; }
    .tc-hud .tc-timer-display.is-alarming { border-color: #ff7066; background: #7a1d2d; color: #fff2ee; animation: tcTimerAlarmPulse .8s ease-in-out infinite; }
    .tc-hud .tc-timer-play { width: 20px; height: 24px; padding: 0; border-radius: 7px; font-size: 11px; }
    .tc-hud .tc-timer-play:disabled { opacity: .38; cursor: default; transform: none; }
    .tc-timer-preset-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .tc-timer-preset { min-height: 48px; border: 1px solid #36549d; border-radius: 12px; background: #14295a; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 16px; font-weight: 900; letter-spacing: .05em; cursor: pointer; }
    .tc-timer-preset:hover { border-color: #ffd84d; background: #25376d; color: #ffd84d; }
    .tc-timer-live-display { margin: 6px 0 18px; color: #ffd84d; font-family: var(--font-display, sans-serif); font-size: clamp(76px, 16vw, 150px); font-weight: 900; letter-spacing: .04em; line-height: .9; text-align: center; text-shadow: 0 0 28px rgba(255, 216, 77, .38); }
    .tc-timer-live-display.is-alarming { color: #ff9d91; text-shadow: 0 0 30px rgba(255, 112, 102, .64); animation: tcTimerAlarmPulse .8s ease-in-out infinite; }
    .tc-timer-live-actions { display: grid; grid-template-columns: 1fr; gap: 10px; }
    .tc-timer-live-actions button { min-height: 50px; }
    .tc-timer-time-up { margin: 18px 0 24px; color: #ff665b; font-family: var(--font-display, sans-serif); font-size: clamp(58px, 14vw, 122px); font-weight: 900; letter-spacing: .06em; line-height: .88; text-align: center; text-shadow: 0 0 28px rgba(255, 82, 72, .72); animation: tcTimeUpFlash .7s steps(2, end) infinite; }
    @keyframes tcTimeUpFlash { 50% { opacity: .24; transform: scale(.97); } }
    @keyframes tcTimerAlarmPulse { 0%, 100% { box-shadow: 0 0 0 rgba(255, 112, 102, 0); } 50% { box-shadow: 0 0 14px rgba(255, 112, 102, .85); } }
    .tc-action { padding: 12px 17px; border: 1px solid #2b4084; border-radius: 12px; background: #12234e; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 15px; font-weight: 800; letter-spacing: .06em; cursor: pointer; }
    .tc-action.primary { border: 0; background: var(--u2-grad-gold, #ffd84d); color: #14183a; }
    .tc-action.danger { border-color: rgba(255, 128, 102, .64); color: #ffab9b; }
    .tc-action:disabled { opacity: .38; cursor: not-allowed; }
    .tc-editor-list { display: grid; gap: 9px; }
    .tc-editor-row { display: grid; grid-template-columns: 1fr auto; gap: 8px; }
    .tc-editor-row input { min-width: 0; padding: 12px 14px; border: 1px solid #2b4084; border-radius: 12px; background: #0a142f; color: #f4f7ff; font-size: 16px; font-weight: 800; }
    .tc-editor-row input:focus { outline: 2px solid var(--u2-gold, #ffd84d); }
    .tc-remove { width: 44px; border: 1px solid rgba(255, 128, 102, .64); border-radius: 12px; background: rgba(255, 128, 102, .08); color: #ffab9b; font-weight: 900; cursor: pointer; }
    .tc-roster-keyboard { display: none; gap: 6px; margin-top: 14px; padding: 12px; border: 1px solid rgba(43, 64, 132, .82); border-radius: 14px; background: #09132c; }
    .tc-roster-keyboard.is-visible { display: grid; }
    .tc-keyboard-row { display: flex; justify-content: center; gap: 4px; }
    .tc-key { width: 30px; min-width: 30px; height: 32px; padding: 0; border: 1px solid #36549d; border-radius: 8px; background: #14295a; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 800; cursor: pointer; }
    .tc-key:hover { border-color: var(--u2-gold, #ffd84d); background: #1c3979; }
    .tc-key.is-wide { width: 66px; min-width: 66px; }
    .tc-key.is-space { width: 150px; min-width: 150px; }
    .tc-name-suggestions { position: fixed; z-index: 11015; display: flex; flex-wrap: wrap; gap: 6px; max-width: min(520px, calc(100vw - 24px)); padding: 7px; border: 1px solid rgba(255, 216, 77, .58); border-radius: 12px; background: rgba(9, 19, 44, .98); box-shadow: 0 12px 30px rgba(0, 0, 0, .45); }
    .tc-name-suggestion { min-height: 30px; padding: 0 11px; border: 1px solid #3a579e; border-radius: 8px; background: #14295a; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 800; letter-spacing: .04em; cursor: pointer; }
    .tc-name-suggestion:hover { border-color: var(--u2-gold, #ffd84d); background: #1c3979; color: var(--u2-gold, #ffd84d); }
    .tc-confirm-overlay { position: fixed; inset: 0; z-index: 11020; display: grid; place-items: center; padding: 18px; background: rgba(2, 7, 23, .64); }
    .tc-point-hold-counter { position: fixed; z-index: 12020; padding: 8px 16px; border: 2px solid currentColor; border-radius: 16px; background: #101d3d; font: 900 48px/1 var(--font-display, sans-serif); transform: translate(-50%, -120%); pointer-events: none; }
    .tc-confirm-card { width: min(380px, 100%); padding: 24px; border: 1px solid rgba(255, 128, 102, .58); border-radius: 18px; background: #101d3d; box-shadow: 0 24px 64px rgba(0, 0, 0, .56); }
    .tc-confirm-card h3 { margin: 0 0 9px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 24px; letter-spacing: .04em; }
    .tc-confirm-card p { margin: 0; color: #9db2e3; font-weight: 700; line-height: 1.5; }
    .tc-award-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0 0 12px; }
    .tc-award-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-width: 0; max-width: 100%; }
    .tc-award-controls > .tc-award-customize { display: grid; place-items: center; flex: 0 0 32px; width: 32px; height: 32px; padding: 0; }
    .tc-award-controls > .tc-multiple-select { box-sizing: border-box; flex: 0 0 auto; min-height: 32px; padding: 6px 10px; font-size: clamp(9px, 1.7vw, 12px); line-height: 1.2; white-space: nowrap; }
    .tc-point-picker-grid .tc-student.has-avatar .tc-student-name-row strong {
      font-size: 14px; letter-spacing: 0; white-space: nowrap; text-overflow: clip; overflow-wrap: normal;
    }
    .tc-award-title-row .tc-title { flex: 1 0 auto; min-width: 0; max-width: 100%; margin: 0; font-size: clamp(15px, 3vw, 30px); white-space: nowrap; overflow-wrap: normal; }
    .tc-award-customize { width: 38px; height: 38px; border: 1px solid rgba(255, 216, 77, .72); border-radius: 10px; background: #172d63; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 18px; font-weight: 900; cursor: pointer; }
    .tc-multiple-select { min-height: 38px; border: 1px solid #5b7dd2; border-radius: 10px; padding: 6px 10px; background: #172d63; color: #f4f7ff; font: 800 12px var(--font-ui, sans-serif); cursor: pointer; }
    .tc-multiple-select[aria-pressed="true"] { border-color: #31d158; color: #31d158; }
    .tc-multiple-select.is-remove[aria-pressed="true"] { border-color: #ff453a; color: #ff453a; }
    .tc-student.tc-multi-selected { outline: 3px solid #31d158; }
    .tc-student.tc-multi-remove { outline-color: #ff453a; }
    .tc-student .tc-multi-mark { position: absolute; top: 5px; left: 50%; transform: translateX(-50%); margin: 0; color: #31d158; font: 900 26px "Segoe UI Symbol", sans-serif; pointer-events: none; }
    .tc-student .tc-multi-mark[hidden] { display: none; }
    .tc-student.tc-multi-remove .tc-multi-mark { color: #ff453a; }
    .tc-numpad-overlay { z-index: 11030; }
    .tc-numpad-card { width: min(330px, 100%); border-color: rgba(255, 216, 77, .62); }
    .tc-numpad-display { min-height: 64px; display: grid; place-items: center; margin: 16px 0 12px; padding: 8px 14px; border: 1px solid #2b4084; border-radius: 12px; background: #09132c; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 38px; font-weight: 900; letter-spacing: .06em; }
    .tc-numpad-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .tc-numpad-key { min-height: 48px; border: 1px solid #2b4084; border-radius: 11px; background: #172d63; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 19px; font-weight: 900; cursor: pointer; }
    .tc-numpad-key.wide { grid-column: span 2; }
    .tc-empty { padding: 18px; border: 1px dashed #2b4084; border-radius: 14px; color: #8fa6d9; font-size: 14px; font-weight: 700; text-align: center; }
    .tc-announcement { display: grid; place-items: center; min-height: 240px; text-align: center; }
    .tc-card.tc-random-card { text-align: center; }
    .tc-card.tc-random-card .tc-actions { justify-content: center; }
    .tc-announcement-avatar { display: grid; width: 124px; aspect-ratio: 1; overflow: hidden; place-items: center; border: 2px solid rgba(255, 216, 77, .72); border-radius: 18px; background: #09132c; }
    .tc-announcement-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .tc-announcement-label { margin: 0; color: #9db2e3; font-family: var(--font-display, sans-serif); font-size: 14px; font-weight: 900; letter-spacing: .16em; }
    .tc-random-preview { display: grid; place-items: center; gap: 10px; min-height: 220px; animation: tcRandomFlash .08s ease-out; }
    .tc-random-preview strong { color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: clamp(38px, 6vw, 64px); font-weight: 800; letter-spacing: .06em; }
    @keyframes tcRandomFlash { from { opacity: .2; transform: scale(.92); } to { opacity: 1; transform: scale(1); } }
    .tc-card.tc-random-card { box-sizing: border-box; width: min(900px, 96vw); max-width: 100%; }
    .tc-random-card .tc-announcement { width: 100%; gap: 12px; }
    .tc-roulette { --roulette-width: clamp(110px, 21vw, 190px); position: relative; width: 100%; height: clamp(230px, 43vh, 330px); overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }
    .tc-roulette-track { position: absolute; left: 50%; top: 50%; display: flex; gap: 16px; will-change: transform; }
    .tc-roulette-card { position: relative; flex: 0 0 var(--roulette-width); width: var(--roulette-width); padding: 12px; border: 2px solid #486297; border-radius: 22px; background: linear-gradient(145deg, #203d72, #09132c); opacity: 0; overflow: hidden; }
    .tc-roulette-card .tc-announcement-avatar { width: 100%; border-radius: 15px; font-size: 60px; color: #ffd84d; }
    .tc-random-card .tc-roulette-card strong { display: block; margin-top: 12px; color: #f4f7ff; font-size: clamp(17px, 2.6vw, 28px); line-height: 1.15; letter-spacing: .03em; white-space: nowrap; overflow: hidden; }
    .tc-roulette.is-revealed .tc-roulette-card { transition: transform 360ms ease-out, opacity 300ms ease-out; }
    .tc-roulette-card.is-winner { border-color: #ffd84d; box-shadow: 0 0 24px rgba(255, 216, 77, .32); }
    .tc-roulette:not(.is-lite) .is-winner::after { content: ''; position: absolute; inset: -20%; pointer-events: none; background: linear-gradient(110deg, transparent 35%, rgba(255, 241, 180, .65) 50%, transparent 65%); animation: tcRouletteShine 650ms ease-out both; }
    .tc-roulette.is-lite .tc-roulette-card { box-shadow: none; transition: none; }
    @keyframes tcRouletteShine { from { transform: translateX(-110%); } to { transform: translateX(110%); } }
    .tc-announcement strong { color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: clamp(42px, 7vw, 76px); font-weight: 800; letter-spacing: .06em; }
    .tc-announcement span { margin-top: 10px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: .04em; }
    .tc-profile-summary { position: relative; display: grid; grid-template-columns: 150px minmax(0, 1fr); align-items: center; gap: 20px; margin-top: 8px; }
    .tc-profile-summary.is-rank-green, .tc-profile-summary.is-rank-purple, .tc-profile-summary.is-rank-purple-gold, .tc-profile-summary.is-rank-gold, .tc-profile-summary.is-rank-gold-glow, .tc-profile-summary.is-rank-gold-aura { padding: 16px; border: 1px solid; border-radius: 20px; }
    .tc-profile-summary.is-rank-green { border-color: rgba(101, 230, 184, .78); background: linear-gradient(135deg, rgba(12, 94, 66, .95), rgba(12, 48, 76, .95)); }
    .tc-profile-summary.is-rank-purple { border-color: rgba(195, 134, 255, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(195, 134, 255, .18), 0 0 20px rgba(195, 134, 255, .20); }
    .tc-profile-summary.is-rank-purple-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 18px rgba(255, 216, 77, .16); }
    .tc-profile-summary.is-rank-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 20px rgba(255, 216, 77, .20); }
    .tc-profile-summary.is-rank-gold-glow { border-color: #ffe584; background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 232, 132, .34), 0 0 18px rgba(255, 216, 77, .45), 0 0 36px rgba(255, 216, 77, .24); }
    .tc-profile-summary.is-rank-gold-aura { border-color: #fff0a6; background: linear-gradient(135deg, rgba(154, 104, 8, .99), rgba(70, 46, 8, .97)); box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .78), 0 0 52px rgba(255, 216, 77, .48), 0 0 86px rgba(255, 216, 77, .20); }
    .tc-profile-summary.is-rank-purple .tc-profile-meta h3, .tc-profile-summary.is-rank-purple-gold .tc-profile-meta h3 { color: #f4e7ff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-profile-summary.is-rank-gold .tc-profile-meta h3, .tc-profile-summary.is-rank-gold-glow .tc-profile-meta h3, .tc-profile-summary.is-rank-gold-aura .tc-profile-meta h3 { color: #fff8cf; text-shadow: 0 0 3px #b34dff, 0 0 11px #9225ff, 0 0 20px #861eff, 0 0 31px rgba(67, 0, 134, .94); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-profile-summary.is-rank-gold-aura .tc-profile-meta h3 { color: #fffbe2; text-shadow: 0 0 3px #c059ff, 0 0 12px #982aff, 0 0 23px #8b22ff, 0 0 36px #430086; animation-duration: 1.1s; }
    .tc-profile-avatar { display: grid; width: 150px; aspect-ratio: 1; padding: 0; overflow: visible; place-items: center; border: 2px solid rgba(255, 216, 77, .78); border-radius: 18px; background: #09132c; color: #dbe7ff; cursor: pointer; box-shadow: 0 0 24px rgba(255, 216, 77, .16); }
    .tc-profile-avatar:hover { border-color: #fff0a6; box-shadow: 0 0 30px rgba(255, 216, 77, .34); }
    .tc-avatar-media { display: block; width: 100%; height: 100%; }
    .tc-profile-avatar .tc-avatar-media { overflow: visible; border-radius: 16px; }
    .tc-profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .tc-profile-avatar span:not(.tc-level-badge) { padding: 12px; text-align: center; font-family: var(--font-display, sans-serif); font-size: 17px; font-weight: 900; }
    .tc-avatar-choose-copy { display: grid; place-content: center; gap: 2px; }
    .tc-avatar-choose-copy span { display: block; padding: 0; color: #9db2e3; font-size: 15px; letter-spacing: .08em; line-height: 1.05; }
    .tc-profile-meta h3 { display: inline-block; max-width: 100%; margin: 0; transform-origin: center; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(30px, 4vw, 48px); letter-spacing: .04em; text-shadow: 0 0 18px rgba(255, 216, 77, .45), 0 0 34px rgba(255, 216, 77, .24); }
    .tc-profile-meta p { margin: 9px 0 0; color: #9db2e3; font-size: 14px; font-weight: 800; }
    .tc-profile-points { color: var(--u2-gold, #ffd84d) !important; font-family: var(--font-display, sans-serif); font-size: clamp(26px, 3vw, 38px) !important; letter-spacing: .05em; }
    @media (prefers-reduced-motion: no-preference) {
      .tc-profile-card { --tc-profile-entry-delay: ${hudOverlayOpenMs}ms; }
      .tc-profile-card .tc-profile-name-entry { animation: tc-profile-name-in 525ms var(--tc-profile-entry-delay) cubic-bezier(.22, 1, .36, 1) backwards; }
      .tc-profile-card .tc-profile-points { animation: tc-profile-points-in 575ms var(--tc-profile-entry-delay) cubic-bezier(.22, 1, .36, 1) backwards; transform-origin: left center; }
      .tc-profile-card .tc-profile-avatar { animation: tc-profile-portrait-in 650ms var(--tc-profile-entry-delay) cubic-bezier(.22, 1, .36, 1) backwards; }
    }
    @keyframes tc-profile-name-in {
      from { opacity: 0; translate: 46px 0; }
      to { opacity: 1; translate: 0 0; }
    }
    @keyframes tc-profile-points-in {
      from { opacity: 0; scale: 1.5; }
      to { opacity: 1; scale: 1; }
    }
    @keyframes tc-profile-portrait-in {
      from { opacity: 0; scale: .84; box-shadow: 0 0 0 rgba(255, 216, 77, 0); }
      65% { opacity: 1; scale: 1.025; box-shadow: 0 0 24px rgba(255, 230, 153, .55); }
      to { opacity: 1; scale: 1; box-shadow: 0 0 24px rgba(255, 216, 77, .16); }
    }
    .tc-profile-stars { margin: 8px 0 0 !important; color: #fff0a6 !important; font-size: 20px !important; letter-spacing: 0 !important; }
    .tc-avatar-picker { display: grid; grid-template-columns: 34px minmax(0, 1fr) 34px; align-items: center; gap: 8px; }
    .tc-avatar-viewport { position: relative; z-index: 1; overflow: hidden; touch-action: pan-y; user-select: none; }
    .tc-avatar-track { display: flex; transition: transform .24s ease; will-change: transform; }
    .tc-avatar-page { display: grid; grid-template-columns: repeat(5, minmax(52px, 1fr)); flex: 0 0 100%; gap: 7px; }
    .tc-avatar-nav { position: relative; z-index: 2; width: 34px; height: 58px; padding: 0; border: 1px solid #36549d; border-radius: 10px; background: #14295a; color: #f4f7ff; font-family: Arial, sans-serif; font-size: 27px; line-height: 1; cursor: pointer; touch-action: manipulation; }
    .tc-avatar-nav:hover:not(:disabled) { border-color: var(--u2-gold, #ffd84d); background: #1c3979; color: var(--u2-gold, #ffd84d); }
    .tc-avatar-nav:disabled { opacity: .3; cursor: default; }
    .tc-avatar-page-count { margin: 10px 0 0; color: #9db2e3; font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 900; letter-spacing: .12em; text-align: center; }
    .tc-avatar-choice { padding: 5px; border: 1px solid rgba(147, 197, 253, .3); border-radius: 10px; background: rgba(0, 0, 0, .22); color: #dbeafe; font-family: var(--font-display, sans-serif); font-size: 10px; font-weight: 800; letter-spacing: .04em; text-align: center; cursor: pointer; }
    .tc-avatar-choice img { display: block; width: 100%; aspect-ratio: 1; margin-bottom: 4px; border-radius: 8px; object-fit: cover; }
    .tc-avatar-choice.is-no-photo .tc-no-photo-frame { display: grid; width: 100%; aspect-ratio: 1; margin-bottom: 4px; place-items: center; border: 1px dashed rgba(219, 234, 254, .52); border-radius: 8px; color: #93a8d8; font-family: Arial, sans-serif; font-size: 22px; font-weight: 400; }
    .tc-avatar-choice:hover, .tc-avatar-choice.is-active { border-color: #ffd700; box-shadow: 0 0 18px rgba(255, 215, 0, .25); }
    .tc-avatar-choice.is-locked { cursor: not-allowed; opacity: .72; }
    .tc-avatar-choice.is-locked img { filter: grayscale(1); opacity: .42; }
    .tc-avatar-choice.is-locked:hover { border-color: rgba(147, 197, 253, .3); box-shadow: none; }
    .tc-avatar-choice .tc-avatar-req { display: block; margin-top: 2px; color: #ffd84d; font-family: var(--font-display, sans-serif); font-size: 8px; font-weight: 900; letter-spacing: .055em; line-height: 1.05; text-align: center; }
    .tc-avatar-choice { position: relative; }
    .tc-avatar-choice .tc-avatar-taken { position: absolute; inset: 0; display: grid; place-items: center; color: #ff453a; font: 900 34px "Segoe UI Symbol", sans-serif; text-shadow: 0 1px 5px #000; pointer-events: none; }
    @media (max-width: 520px) { .tc-profile-summary { grid-template-columns: 1fr; justify-items: center; text-align: center; } .tc-profile-avatar { width: 126px; } }
    @media (max-width: 700px) { .tc-hud { bottom: 6px; left: 6px; gap: 4px; padding: 5px; } .tc-hud button { width: 32px; height: 32px; font-size: 15px; } .tc-hud .tc-bank { min-width: 54px; height: 32px; font-size: 14px; } .tc-hud-controls { gap: 4px; } .tc-hud.is-collapsed { width: 20px; } .tc-hud .tc-collapse { width: 18px; flex-basis: 18px; height: 32px; font-size: 19px; } .tc-key { width: 26px; min-width: 26px; height: 30px; font-size: 11px; } .tc-key.is-wide { width: 60px; min-width: 60px; } .tc-key.is-space { width: 126px; min-width: 126px; } .tc-overlay { padding: 12px; } }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  const createId = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const todayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const normalizeStudent = (student) => ({
    id: student?.id || createId(),
    name: typeof student?.name === "string" ? student.name.trim() : "",
    points: Number.isFinite(Number(student?.points)) ? Number(student.points) : 0,
    stars: Math.max(0, Math.floor(Number(student?.stars) || 0)),
    avatarPath: typeof student?.avatarPath === "string" ? normalizeAvatarPath(student.avatarPath) : ""
  });

  function createClassroom(name = "MY CLASS", source = {}) {
    const attendanceDate = source.attendanceDate === todayKey() ? todayKey() : todayKey();
    const roster = Array.isArray(source.roster) ? source.roster.map(normalizeStudent).filter((student) => student.name) : [];
    roster.forEach(student => rememberStudentLevel(student.id, studentLevel(student)));
    const rosterIds = new Set(roster.map((student) => student.id));
    return {
      id: source.id || createId(),
      name: String(source.name || name).trim() || name,
      roster,
      pointBank: Math.max(0, Number(source.pointBank) || 0),
      attendanceDate,
      absentStudentIds: source.attendanceDate === todayKey() && Array.isArray(source.absentStudentIds)
        ? [...new Set(source.absentStudentIds)].filter((id) => rosterIds.has(id))
        : []
    };
  }

  function activeClassroom() {
    return state.classrooms.find((classroom) => classroom.id === state.activeClassroomId) || null;
  }

  function commitActiveClassroom() {
    const classroom = activeClassroom();
    if (!classroom) return;
    classroom.roster = state.roster;
    classroom.pointBank = state.pointBank;
    classroom.attendanceDate = state.attendanceDate;
    classroom.absentStudentIds = state.absentStudentIds;
  }

  function activateClassroom(classroomId, commitCurrent = true) {
    if (commitCurrent) commitActiveClassroom();
    const classroom = state.classrooms.find((item) => item.id === classroomId) || state.classrooms[0];
    if (!classroom) return;
    state.activeClassroomId = classroom.id;
    state.roster = classroom.roster;
    state.pointBank = classroom.pointBank;
    state.attendanceDate = classroom.attendanceDate || todayKey();
    state.absentStudentIds = classroom.attendanceDate === todayKey() ? classroom.absentStudentIds : [];
    classroom.attendanceDate = state.attendanceDate = todayKey();
    classroom.absentStudentIds = state.absentStudentIds;
    state.selectedStudentId = "";
  }

  function setActiveClassroom(classroomId) {
    if (!state.classrooms.some((classroom) => classroom.id === classroomId)) return false;
    if (state.activeClassroomId === classroomId) return true;
    activateClassroom(classroomId);
    resetRandomPool();
    syncSelectedTrigger();
    save({ deferPoints: true });
    updateHud();
    return true;
  }

  let teacherToastLoadPromise = null;

  function loadTeacherToastManager() {
    if (window.ToastManager?.show) return Promise.resolve(window.ToastManager);
    if (teacherToastLoadPromise) return teacherToastLoadPromise;

    teacherToastLoadPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = teacherToastScriptUrl;
      script.dataset.global = "false";
      script.addEventListener("load", () => resolve(window.ToastManager || null), { once: true });
      script.addEventListener("error", () => resolve(null), { once: true });
      document.head.appendChild(script);
    });
    return teacherToastLoadPromise;
  }

  function showToast(message, tone = "info") {
    loadTeacherToastManager().then((manager) => {
      manager?.show(message, tone === "danger" ? "warn" : undefined, 10000);
    });
  }

  loadTeacherToastManager();

  let teacherFeedbackAudio = null;
  let randomBeepContext = null;
  let randomSelectedAudio = null;
  let whistleAudio = null;
  let whistleStartedAt = 0;
  let whistleStopTimer = 0;
  let whistleCooldownUntil = 0;
  let whistleProgressOverlay = null;
  let whistleProgressBar = null;
  let whistleProgressLabel = null;
  let whistleProgressFrame = 0;
  let whistleProgressTimer = 0;
  let whistlePenaltyShown = false;
  let syncShortcutCooldownUntil = 0;
  const HUD_TIMER_DEFAULT_SECONDS = 120;
  let hudTimerDefaultSeconds = HUD_TIMER_DEFAULT_SECONDS;
  let hudTimerRemainingSeconds = HUD_TIMER_DEFAULT_SECONDS;
  let hudTimerDeadline = 0;
  let hudTimerInterval = 0;
  let hudTimerAlarmAudio = null;
  let hudTimerAlarmActive = false;
  let hudTimerPaused = false;
  let hudTimerDisplayButton = null;
  let hudTimerPlayButton = null;
  let hudTimerLiveDisplay = null;
  let hudTimerLivePauseButton = null;

  function formatHudTimer(seconds) {
    const safeSeconds = Math.max(0, Math.ceil(seconds));
    return `${Math.floor(safeSeconds / 60)}:${String(safeSeconds % 60).padStart(2, "0")}`;
  }

  function updateHudTimer() {
    if (!hudTimerDisplayButton || !hudTimerPlayButton) return;
    hudTimerDisplayButton.textContent = formatHudTimer(hudTimerRemainingSeconds);
    hudTimerDisplayButton.classList.toggle("is-alarming", hudTimerAlarmActive);
    hudTimerDisplayButton.title = hudTimerAlarmActive ? "Stop alarm and reset timer" : "Click to open timer; right-click to reset";
    hudTimerPlayButton.textContent = hudTimerInterval ? "⏸" : "▶";
    hudTimerPlayButton.disabled = hudTimerAlarmActive && !buttonHelpActive;
    hudTimerPlayButton.title = hudTimerInterval ? "Pause timer" : hudTimerAlarmActive ? "Stop the alarm first" : hudTimerPaused ? "Resume timer" : "Start timer";
    if (hudTimerLiveDisplay && !document.contains(hudTimerLiveDisplay)) {
      hudTimerLiveDisplay = null;
      hudTimerLivePauseButton = null;
    }
    if (hudTimerLiveDisplay) {
      hudTimerLiveDisplay.textContent = formatHudTimer(hudTimerRemainingSeconds);
      hudTimerLiveDisplay.classList.toggle("is-alarming", hudTimerAlarmActive);
      hudTimerLivePauseButton.textContent = hudTimerAlarmActive ? "🔕 STOP ALARM" : hudTimerPaused ? "▶ RESUME" : "⏸ PAUSE";
    }
  }

  function stopHudTimerCountdown(reset = false) {
    clearInterval(hudTimerInterval);
    hudTimerInterval = 0;
    hudTimerDeadline = 0;
    if (reset) {
      hudTimerRemainingSeconds = hudTimerDefaultSeconds;
      hudTimerPaused = false;
    }
    updateHudTimer();
  }

  function pauseHudTimer() {
    if (!hudTimerInterval) return;
    hudTimerRemainingSeconds = Math.max(0, Math.ceil((hudTimerDeadline - Date.now()) / 1000));
    if (!hudTimerRemainingSeconds) { tickHudTimer(); return; }
    clearInterval(hudTimerInterval);
    hudTimerInterval = 0;
    hudTimerDeadline = 0;
    hudTimerPaused = true;
    updateHudTimer();
  }

  function stopHudTimerAlarm() {
    hudTimerAlarmAudio?.pause();
    if (hudTimerAlarmAudio) hudTimerAlarmAudio.currentTime = 0;
    hudTimerAlarmActive = false;
    hudTimerPaused = false;
    hudTimerRemainingSeconds = hudTimerDefaultSeconds;
    updateHudTimer();
  }

  function startHudTimerAlarm() {
    hudTimerAlarmAudio?.pause();
    hudTimerAlarmAudio = new Audio(new URL("../sounds/alarm.mp3", controlScriptUrl).href);
    hudTimerAlarmAudio.loop = true;
    hudTimerAlarmAudio.preload = "auto";
    hudTimerAlarmActive = true;
    openHudTimerAlarmOverlay();
    hudTimerAlarmAudio.play().catch(() => {});
    updateHudTimer();
  }

  function tickHudTimer() {
    hudTimerRemainingSeconds = Math.max(0, Math.ceil((hudTimerDeadline - Date.now()) / 1000));
    if (hudTimerRemainingSeconds > 0) { updateHudTimer(); return; }
    stopHudTimerCountdown();
    hudTimerPaused = false;
    startHudTimerAlarm();
  }

  function startHudTimer() {
    if (hudTimerInterval || hudTimerAlarmActive) return;
    if (!hudTimerPaused) hudTimerRemainingSeconds = hudTimerDefaultSeconds;
    hudTimerDeadline = Date.now() + hudTimerRemainingSeconds * 1000;
    hudTimerPaused = false;
    tickHudTimer();
    hudTimerInterval = window.setInterval(tickHudTimer, 250);
    updateHudTimer();
  }

  function openHudTimerPresets() {
    if (hudTimerAlarmActive) { stopHudTimerAlarm(); return; }
    if (hudTimerInterval || hudTimerPaused) { openHudTimerLiveOverlay(); return; }
    stopHudTimerCountdown(true);
    const card = makeOverlay("TIMER", "SET TIMER", "Choose the countdown duration.");
    const grid = el("div", "tc-timer-preset-grid");
    [[30, "30 SECONDS"], [60, "1 MIN"], [120, "2 MIN"], [180, "3 MIN"], [240, "4 MIN"], [300, "5 MIN"]].forEach(([seconds, label]) => {
      const button = el("button", "tc-timer-preset", label);
      button.type = "button";
      button.addEventListener("click", () => {
        hudTimerDefaultSeconds = seconds;
        hudTimerRemainingSeconds = seconds;
        closeOverlays();
        updateHudTimer();
      });
      grid.append(button);
    });
    card.append(grid);
  }

  function openHudTimerLiveOverlay() {
    const card = makeOverlay("TIMER", "COUNTDOWN", "The countdown continues while this panel is open.");
    const minimize = card.querySelector(".tc-close");
    minimize.textContent = "—";
    minimize.title = "Minimize timer";
    minimize.setAttribute("aria-label", minimize.title);
    hudTimerLiveDisplay = el("div", "tc-timer-live-display", formatHudTimer(hudTimerRemainingSeconds));
    hudTimerLivePauseButton = el("button", "tc-action primary", "⏸ PAUSE");
    hudTimerLivePauseButton.type = "button";
    hudTimerLivePauseButton.addEventListener("click", () => {
      if (hudTimerAlarmActive) stopHudTimerAlarm();
      else if (hudTimerPaused) startHudTimer();
      else pauseHudTimer();
    });
    const actions = el("div", "tc-timer-live-actions");
    actions.append(hudTimerLivePauseButton);
    card.append(hudTimerLiveDisplay, actions);
    updateHudTimer();
  }

  function openHudTimerAlarmOverlay() {
    const card = makeOverlay("TIMER", "TIME UP!");
    const minimize = card.querySelector(".tc-close");
    minimize.textContent = "—";
    minimize.title = "Stop alarm and minimize timer";
    minimize.setAttribute("aria-label", minimize.title);
    minimize.addEventListener("click", stopHudTimerAlarm);
    const timeUp = el("div", "tc-timer-time-up", "TIME UP!");
    const stopButton = el("button", "tc-action danger", "🔕 STOP ALARM");
    stopButton.type = "button";
    stopButton.addEventListener("click", () => {
      stopHudTimerAlarm();
      closeOverlays();
    });
    card.append(timeUp, stopButton);
  }

  function playTeacherFeedback(isCorrect) {
    if (teacherFeedbackAudio) {
      teacherFeedbackAudio.pause();
      teacherFeedbackAudio.currentTime = 0;
    }
    teacherFeedbackAudio = new Audio(teacherSoundPath(isCorrect ? "correct" : "wrong"));
    teacherFeedbackAudio.play().catch(() => {});
  }

  function startWhistle() {
    const now = performance.now();
    if (now < whistleCooldownUntil) return;
    whistleCooldownUntil = now + 1200;
    clearTimeout(whistleStopTimer);
    whistleAudio?.pause();
    whistleAudio = new Audio(new URL("../sounds/whistle.mp3", controlScriptUrl).href);
    whistleAudio.volume = 1;
    whistleAudio.preload = "auto";
    whistleStartedAt = now;
    whistlePenaltyShown = false;
    clearTimeout(whistleProgressTimer);
    whistleProgressTimer = window.setTimeout(() => showWhistleProgress(whistleStartedAt), 300);
    whistleAudio.play().catch(() => {});
  }

  function stopWhistle() {
    if (!whistleAudio) return;
    clearTimeout(whistleProgressTimer);
    hideWhistleProgress();
    const elapsed = performance.now() - whistleStartedAt;
    if (elapsed < 1000) {
      clearTimeout(whistleStopTimer);
      whistleStopTimer = window.setTimeout(() => {
        whistleAudio?.pause();
        if (whistleAudio) whistleAudio.currentTime = 0;
      }, Math.max(0, 1000 - elapsed));
    } else {
      whistleAudio.pause();
      whistleAudio.currentTime = 0;
    }
  }

  function showWhistleProgress(startedAt) {
    if (!whistleProgressOverlay) {
      whistleProgressOverlay = el("div", "tc-whistle-progress-overlay");
      const panel = el("div", "tc-whistle-progress-panel");
      whistleProgressLabel = el("div", "tc-whistle-progress-label", "3");
      whistleProgressBar = el("div", "tc-whistle-progress-bar");
      panel.append(whistleProgressLabel, whistleProgressBar);
      whistleProgressOverlay.append(panel);
      document.body.append(whistleProgressOverlay);
    }
    whistleProgressOverlay.classList.add("is-visible");
    const update = (timestamp) => {
      if (!whistleProgressOverlay?.classList.contains("is-visible")) return;
      const progress = Math.min(1, Math.max(0, (timestamp - startedAt) / 3000));
      whistleProgressBar.style.width = `${progress * 100}%`;
      whistleProgressLabel.textContent = progress >= 1 ? "0" : String(Math.ceil(3 - progress * 3));
      whistleProgressBar.style.background = progress < .5
        ? "linear-gradient(90deg, #31d158, #ffd60a)"
        : "linear-gradient(90deg, #ffd60a, #ff453a)";
      if (progress >= 1 && !whistlePenaltyShown) {
        whistlePenaltyShown = true;
        hideWhistleProgress();
        openWhistlePenaltyConfirm();
        return;
      }
      whistleProgressFrame = requestAnimationFrame(update);
    };
    cancelAnimationFrame(whistleProgressFrame);
    whistleProgressFrame = requestAnimationFrame(update);
  }

  function hideWhistleProgress() {
    cancelAnimationFrame(whistleProgressFrame);
    whistleProgressOverlay?.classList.remove("is-visible");
    if (whistleProgressBar) whistleProgressBar.style.width = "0%";
  }

  function openWhistlePenaltyConfirm() {
    const card = makeOverlay("CLASSROOM", "TÜM SINIFA EKSİ VERİLSİN Mİ?", "", whistleButton);
    const actions = el("div", "tc-actions");
    const yes = el("button", "tc-action danger", "EVET");
    const no = el("button", "tc-action", "HAYIR");
    yes.type = no.type = "button";
    yes.addEventListener("click", () => {
      const students = presentStudents();
      students.forEach((student) => { student.points = (Number(student.points) || 0) - 1; });
      if (students.length) save({ deferPoints: true, changeType: "decrement" });
      updateHud();
      closeOverlays();
      showToast(students.length ? `-1 point applied to ${students.length} students.` : "No present students.");
    });
    no.addEventListener("click", closeOverlays);
    actions.append(yes, no);
    card.append(actions);
  }

  function playRandomBeep(index) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    randomBeepContext ||= new AudioContextClass();
    if (randomBeepContext.state === "suspended") randomBeepContext.resume().catch(() => {});
    const oscillator = randomBeepContext.createOscillator();
    const gain = randomBeepContext.createGain();
    const now = randomBeepContext.currentTime;
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(620 + (index % 4) * 85, now);
    gain.gain.setValueAtTime(.07, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + .05);
    oscillator.connect(gain).connect(randomBeepContext.destination);
    oscillator.start(now);
    oscillator.stop(now + .055);
  }

  function applyStoredState(saved) {
    state.classrooms = [];
    state.activeClassroomId = "";
    if (Array.isArray(saved?.classrooms) && saved.classrooms.length) {
      state.classrooms = saved.classrooms.map((classroom, index) => createClassroom(`CLASS ${index + 1}`, classroom));
      state.activeClassroomId = state.classrooms.some((classroom) => classroom.id === saved.activeClassroomId)
        ? saved.activeClassroomId
        : state.classrooms[0].id;
    } else if (Array.isArray(saved?.roster)) {
      const classroom = createClassroom("MY CLASS", saved);
      state.classrooms = [classroom];
      state.activeClassroomId = classroom.id;
    }
    if (!state.classrooms.length) {
      const classroom = createClassroom();
      state.classrooms = [classroom];
      state.activeClassroomId = classroom.id;
    }
    restoreLockedClassroom();
    activateClassroom(state.activeClassroomId, false);
  }

  function loadFromStorage(storageKey) {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(storageKey) || "null"); } catch { /* corrupt saved roster -> start fresh */ }
    applyStoredState(saved);
  }

  function load() {
    // A remembered cloud session must resume from its separate local snapshot.
    // This lets pending score changes reach Supabase before cloud hydration.
    loadFromStorage(localStorage.getItem("fpTeacherSupabaseSessionV1") ? CLOUD_STORE_KEY : STORE_KEY);
  }

  const cloudClassroomsEnabled = () => Boolean(window.TeacherCloud?.isSignedIn?.());
  function getLockedClassroomId() {
    let classroomId = localStorage.getItem(CLASS_LOCK_KEY) || "";
    if (!classroomId) {
      classroomId = sessionStorage.getItem(CLASS_LOCK_KEY) || "";
      if (classroomId) localStorage.setItem(CLASS_LOCK_KEY, classroomId);
    }
    return classroomId;
  }

  function lockClassroom(classroomId) {
    localStorage.setItem(CLASS_LOCK_KEY, classroomId);
    sessionStorage.removeItem(CLASS_LOCK_KEY);
  }

  function clearClassroomLock() {
    localStorage.removeItem(CLASS_LOCK_KEY);
    sessionStorage.removeItem(CLASS_LOCK_KEY);
  }

  function restoreLockedClassroom() {
    const classroomId = getLockedClassroomId();
    if (!classroomId) return false;
    if (!state.classrooms.some((classroom) => classroom.id === classroomId)) {
      clearClassroomLock();
      return false;
    }
    state.activeClassroomId = classroomId;
    return true;
  }

  const hasSyncClassroomLock = () => {
    const lockedClassroomId = getLockedClassroomId();
    return Boolean(lockedClassroomId && lockedClassroomId === state.activeClassroomId);
  };

  function restoreGuestClassroom() {
    loadFromStorage(STORE_KEY);
    state.selectedStudentId = "";
    resetRandomPool();
    syncSelectedTrigger();
    updateHud();
  }

  function persistLocal() {
    if (guidedTutorial?.restoreState) return;
    commitActiveClassroom();
    const storageKey = cloudClassroomsEnabled() ? CLOUD_STORE_KEY : STORE_KEY;
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* local storage unavailable */ }
  }

  function save(options = {}) {
    if (guidedTutorial?.restoreState) return;
    persistLocal();
    if (options.changeType) {
      localStorage.setItem("fpTeacherSupabaseExplicitChangeV1", JSON.stringify({ type: options.changeType, at: Date.now() }));
    }
    if (options.deferPoints) window.TeacherCloud?.schedulePointSync?.(state);
    else window.TeacherCloud?.scheduleSync?.(state);
  }

  const getStudent = (id = state.selectedStudentId) => state.roster.find((student) => student.id === id) || null;
  const hasRoster = () => state.roster.length > 0;
  const isAbsent = (student) => Boolean(student && state.absentStudentIds.includes(student.id));
  const presentStudents = () => state.roster.filter((student) => !isAbsent(student));
  const randomHistory = window.__fpTeacherRandomHistory || { drawnIds: [] };
  window.__fpTeacherRandomHistory = randomHistory;
  const resetRandomPool = () => { randomHistory.drawnIds = []; };
  const drawRandomStudent = () => {
    const availableStudents = presentStudents();
    const rosterIds = new Set(availableStudents.map((student) => student.id));
    randomHistory.drawnIds = [...new Set(randomHistory.drawnIds)].filter((id) => rosterIds.has(id));
    if (randomHistory.drawnIds.length >= availableStudents.length) resetRandomPool();
    const candidates = availableStudents.filter((student) => !randomHistory.drawnIds.includes(student.id));
    const student = candidates[Math.floor(Math.random() * candidates.length)] || null;
    if (student) randomHistory.drawnIds.push(student.id);
    return student;
  };
  const shuffleStudents = (students) => {
    const shuffled = [...students];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  };
  const effectiveScore = (student) => (Number(student?.points) || 0) + Math.max(0, Math.floor(Number(student?.stars) || 0)) * 10;
  const levelStarts = [0, 11, 32, 61, 101, 151, 211, 281, 361, 461];
  for (let start = 571, range = 120; levelStarts.length < 99; start += range, range += 10) {
    levelStarts.push(start);
  }
  const studentLevel = (student) => {
    const score = Math.max(0, effectiveScore(student));
    const nextIndex = levelStarts.findIndex(start => score < start);
    return nextIndex === -1 ? levelStarts.length : nextIndex;
  };
  const nextLevelStart = (student) => levelStarts[studentLevel(student)] ?? null;
  const createLevelBadge = (student, inline = false) => {
    const level = studentLevel(student);
    const start = levelStarts[level - 1];
    const next = levelStarts[level];
    const earned = Math.max(0, effectiveScore(student) - start);
    const progress = next === undefined ? 100 : 100 * earned / (next - start);
    const badge = el("span", `tc-level-badge${inline ? " is-inline" : ""}`, String(level));
    badge.style.setProperty("--tc-level-fill", `${progress}%`);
    badge.classList.toggle("is-near-level-up", level >= 3 && next !== undefined && progress >= 85);
    badge.title = next === undefined ? `Level ${level} (maximum)` : `Level ${level} · ${Math.floor(progress)}% to level ${level + 1}`;
    badge.setAttribute("aria-label", badge.title);
    return badge;
  };
  const avatarRequiredLevel = (avatarName) => AVATAR_UNLOCK_LEVELS[String(avatarName || "").trim().toLowerCase()] || 1;
  const avatarUnlocksBetween = (previousLevel, currentLevel) => Object.entries(AVATAR_UNLOCK_LEVELS)
    .filter(([, requiredLevel]) => requiredLevel > previousLevel && requiredLevel <= currentLevel)
    .map(([name]) => name.toUpperCase());
  const levelUpMessages = ["GOOD JOB!", "WELL DONE!", "YOU ARE AWESOME!", "EXCELLENT!", "CONGRATULATIONS!"];
  const levelUpQueue = [];
  let pointAwardSpotlight = null;
  let levelUpOverlayOpen = false;
  const showNextLevelUpOverlay = () => {
    if (levelUpOverlayOpen || pointAwardSpotlight || !levelUpQueue.length) return;
    levelUpOverlayOpen = true;
    const student = levelUpQueue.shift();
    const nextLevel = nextLevelStart(student);
    const overlay = el("div", "tc-level-up-overlay");
    const card = el("section", "tc-level-up-card");
    const title = el("h2", "tc-level-up-title", "LEVEL UP !!!");
    const name = el("p", "tc-level-up-name", student.name);
    const portrait = el("div", "tc-level-up-portrait", student.name.slice(0, 1).toLocaleUpperCase("tr-TR"));
    if (student.avatarPath) {
      const image = document.createElement("img");
      image.alt = `${student.name} portrait`;
      image.classList.toggle("tc-avatar-flipped", shouldFlipAvatar(student.avatarPath));
      const initial = portrait.firstChild;
      image.addEventListener("load", () => initial.replaceWith(image), { once: true });
      image.src = resolveAvatarPath(student.avatarPath);
    }
    let avatarVideo = null;
    const avatarFile = (student.avatarPath || "").split(/[?#]/, 1)[0].split("/").pop();
    const character = avatarFile?.replace(/\.[^.]+$/, "").toLowerCase();
    if (character && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      avatarVideo = el("video", "tc-level-up-avatar-video");
      avatarVideo.muted = true;
      avatarVideo.playsInline = true;
      avatarVideo.setAttribute("aria-hidden", "true");
      avatarVideo.addEventListener("playing", () => avatarVideo.classList.add("is-visible"), { once: true });
      avatarVideo.addEventListener("error", () => avatarVideo.remove(), { once: true });
      const videoFiles = [`${encodeURIComponent(character)}.mp4`];
      if (character === "hannah") videoFiles.push("hannah_levelup.mp4");
      videoFiles.forEach((file, index) => {
        const source = document.createElement("source");
        source.src = new URL(`media/${file}`, controlScriptUrl).href;
        source.type = "video/mp4";
        if (index === videoFiles.length - 1) {
          source.addEventListener("error", () => avatarVideo.remove(), { once: true });
        }
        avatarVideo.append(source);
      });
      portrait.append(avatarVideo);
    }
    const message = el("p", "tc-level-up-message", levelUpMessages[Math.floor(Math.random() * levelUpMessages.length)]);
    const nextCopy = el("p", "tc-level-up-next");
    nextCopy.innerHTML = nextLevel === null ? "<strong>MAX LEVEL</strong>" : `Next level at: <strong>${nextLevel}</strong>`;
    const close = el("button", "tc-level-up-close", "COOL!");
    close.type = "button";
    close.addEventListener("click", () => {
      avatarVideo?.pause();
      overlay.remove();
      levelUpOverlayOpen = false;
      showNextLevelUpOverlay();
    });
    const celebration = el("div", "tc-level-up-celebration");
    const magic = el("div", "tc-level-up-magic");
    magic.setAttribute("aria-hidden", "true");
    const sparkColors = ["#ffd66e", "#65deff", "#ff91ca", "#bba0ff", "#80f2cc", "#fff4cd"];
    const sparks = document.createDocumentFragment();
    for (let index = 0; index < 30; index += 1) {
      const finale = index >= 24;
      const spark = el("i", finale ? "tc-level-up-spark is-finale" : "tc-level-up-spark");
      const direction = finale ? (index - 24) * 4 : index;
      const angle = (155 + direction * 10 + (index % 3 - 1) * 4) * Math.PI / 180;
      const x = Math.cos(angle);
      const y = Math.sin(angle);
      const delay = finale ? 8.24 + (index - 24) * .047 : .08 + ((index * 7) % 24) * .061;
      spark.style.setProperty("--spark-left", `${50 + x * 52}%`);
      spark.style.setProperty("--spark-top", `${50 + y * 52}%`);
      spark.style.setProperty("--spark-x", `${x * (34 + index % 5 * 6)}px`);
      spark.style.setProperty("--spark-y", `${y * 22 - 14 - index % 4 * 7}px`);
      spark.style.setProperty("--spark-size", `${10 + index % 7}px`);
      spark.style.setProperty("--spark-color", sparkColors[index % sparkColors.length]);
      spark.style.setProperty("--spark-delay", `${delay.toFixed(3)}s`);
      sparks.append(spark);
    }
    celebration.append(portrait, magic);
    card.append(title, name, celebration, message, nextCopy, close);
    overlay.append(card);
    document.body.append(overlay);
    avatarVideo?.play().catch(() => avatarVideo.remove());
    const cheer = new Audio("../func_presenter/sounds/cheer.mp3");
    cheer.volume = .9;
    const launchSparks = () => {
      if (overlay.isConnected) magic.append(sparks);
    };
    cheer.play().then(launchSparks, launchSparks);
  };
  const reachedStudentLevels = new Map();
  const reachedStudentLevelKey = studentId => `fpTeacherReachedLevelV1:${studentId}`;
  function rememberStudentLevel(studentId, level) {
    const key = reachedStudentLevelKey(studentId);
    const cached = reachedStudentLevels.get(studentId) || 0;
    let highest = cached;
    try {
      const stored = Number(localStorage.getItem(key)) || 0;
      if (level > stored) localStorage.setItem(key, String(level));
      highest = stored;
    } catch { /* Keep the record in memory if storage is unavailable. */ }
    reachedStudentLevels.set(studentId, Math.max(highest, level));
    return highest;
  }

  function resetReachedStudentLevel(studentId) {
    reachedStudentLevels.delete(studentId);
    try { localStorage.removeItem(reachedStudentLevelKey(studentId)); }
    catch { /* The in-memory record has already been cleared. */ }
  }

  const notifyLevelUp = (student, previousLevel) => {
    const currentLevel = studentLevel(student);
    const highestLevel = guidedTutorial
      ? previousLevel
      : Math.max(previousLevel, rememberStudentLevel(student.id, Math.max(previousLevel, currentLevel)));
    if (currentLevel <= highestLevel) return;
    showToast(`${student.name} - Level Up: ${currentLevel}!`, "success");
    levelUpQueue.push({ ...student });
    showNextLevelUpOverlay();
    const unlockedAvatars = avatarUnlocksBetween(highestLevel, currentLevel);
    if (unlockedAvatars.length) {
      showToast(`${student.name} new avatars available`, "success");
    }
  };
  const sortStudentsByScoreAndName = (students) => [...students].sort((a, b) => {
    const scoreDifference = effectiveScore(b) - effectiveScore(a);
    return scoreDifference || a.name.localeCompare(b.name, "tr", { sensitivity: "base" });
  });
  const sortRosterStudents = (students) => [...students].sort((a, b) => {
    const attendanceDifference = Number(isAbsent(a)) - Number(isAbsent(b));
    if (attendanceDifference) return attendanceDifference;
    const scoreDifference = effectiveScore(b) - effectiveScore(a);
    return scoreDifference || a.name.localeCompare(b.name, "tr", { sensitivity: "base" });
  });
  const starSummary = (stars) => {
    if (!stars) return "";
    const visibleStars = Math.min(stars, 5);
    return `${"⭐".repeat(visibleStars)}${stars > visibleStars ? ` +${stars - visibleStars}` : ""}`;
  };
  const studentRankClass = (points) => {
    if (points >= 700) return " is-rank-gold-aura";
    if (points >= 601) return " is-rank-gold-glow";
    if (points >= 451) return " is-rank-gold";
    if (points >= 301) return " is-rank-purple-gold";
    if (points >= 201) return " is-rank-purple";
    if (points >= 101) return " is-rank-green";
    return "";
  };

  function syncSelectedTrigger() {
    window.teacherSelectedStudent = getStudent()?.name || "";
  }

  let cancelStudentPointHold = null;
  let studentPointHoldAudioContext = null;

  const hudOverlayMotion = new WeakMap();

  function hudButtonTransform(card, button, maximumScale = .16) {
    const panel = card.getBoundingClientRect();
    const target = button?.getBoundingClientRect();
    if (!panel.width || !panel.height || !target?.width || !target.height) return null;
    const x = target.left + target.width / 2 - panel.left - panel.width / 2;
    const y = target.top + target.height / 2 - panel.top - panel.height / 2;
    const scale = Math.min(maximumScale, target.width / panel.width, target.height / panel.height);
    return `translate(${x}px, ${y}px) scale(${scale})`;
  }

  function animateHudOverlayFromButton(overlay, card, button) {
    if (!button || !card.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const motion = { card, button, animation: null };
    hudOverlayMotion.set(overlay, motion);
    window.requestAnimationFrame(() => {
      if (!overlay.isConnected || overlay.inert) return;
      const start = hudButtonTransform(card, button);
      if (start) motion.animation = card.animate(
        [{ transform: start }, { transform: "translate(0, 0) scale(1)" }],
        { duration: hudOverlayOpenMs, easing: "cubic-bezier(.2, .7, .25, 1)" }
      );
    });
  }

  function dismissHudOverlay(overlay, immediate = false, onClosed) {
    if (!overlay?.isConnected) return;
    const finish = () => {
      if (!overlay.isConnected) return;
      overlay.remove();
      onClosed?.();
    };
    if (immediate || !overlay.classList.contains("tc-overlay-fade") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    if (overlay.classList.contains("tc-overlay-closing")) return;
    overlay.style.setProperty("--tc-close-opacity", getComputedStyle(overlay).opacity);
    overlay.classList.add("tc-overlay-closing");
    overlay.inert = true;
    const motion = hudOverlayMotion.get(overlay);
    if (motion) {
      const { card, button, animation } = motion;
      const start = getComputedStyle(card).transform;
      animation?.cancel();
      const end = hudButtonTransform(card, button);
      if (end) card.animate([{ transform: start }, { transform: end }], {
        duration: hudOverlayCloseMs, easing: "cubic-bezier(.55, 0, .8, .4)", fill: "forwards"
      });
    }
    overlay.addEventListener("animationend", event => {
      if (event.target === overlay && event.animationName === "tc-overlay-fade-out") finish();
    });
    window.setTimeout(finish, hudOverlayCloseMs + 20);
  }

  function closeOverlays({ immediate = false } = {}) {
    cancelStudentPointHold?.();
    cancelStudentPointHold = null;
    document.querySelectorAll(".tc-overlay").forEach(node => dismissHudOverlay(node, immediate));
  }

  let guidedTutorial = null;

  function clearTutorialFocus() {
    document.querySelectorAll(".tc-tutorial-focus").forEach((node) => node.classList.remove("tc-tutorial-focus"));
  }

  function closeGuidedTutorial() {
    const restoreState = guidedTutorial?.restoreState;
    const cloudSnapshot = guidedTutorial?.cloudSnapshot;
    clearTutorialFocus();
    document.querySelector(".tc-guided-coach")?.remove();
    document.querySelector(".tc-tutorial-exit")?.remove();
    closeOverlays();
    guidedTutorial = null;
    if (restoreState) {
      state.classrooms = restoreState.classrooms;
      state.activeClassroomId = restoreState.activeClassroomId;
      if (restoreState.lockedClassroomId) lockClassroom(restoreState.lockedClassroomId);
      else clearClassroomLock();
      activateClassroom(state.activeClassroomId, false);
      state.selectedStudentId = restoreState.selectedStudentId;
      randomHistory.drawnIds = [...restoreState.randomDrawnIds];
      syncSelectedTrigger();
      if (cloudSnapshot) applyCloudState(cloudSnapshot);
      else {
        save();
        updateHud();
      }
    }
  }

  function tutorialTargetForStep(step) {
    if (step === 1) return rosterButton;
    if (step === 2) return document.querySelector(".tc-add-student");
    if (step === 3) {
      const inputs = [...document.querySelectorAll(".tc-editor-row input")];
      const readyToSave = inputs.length === 2 && inputs.every((input) => input.value.trim());
      return readyToSave ? document.querySelector(".tc-save-roster") : inputs.find((input) => !input.value.trim()) || document.querySelector(".tc-add-student");
    }
    if (step === 4) return document.querySelector(".tc-tutorial-next");
    if (step === 5) return bank;
    if (step === 6) return document.querySelector(".tc-student-grid .tc-student") || plusButton;
    if (step === 7) return randomButton;
    if (step === 8) return rosterButton;
    if (step === 9) return document.querySelector(".tc-student-grid .tc-student");
    if (step === 10) return document.querySelector(".tc-profile-avatar");
    if (step === 11) return document.querySelector(".tc-avatar-choice");
    return null;
  }

  function tutorialCopyForStep(step) {
    if (step === 1) return "Click on the ROSTER button.";
    if (step === 2) return "Click this button to add a student.";
    if (step === 3) {
      const inputs = [...document.querySelectorAll(".tc-editor-row input")];
      const readyToSave = inputs.length === 2 && inputs.every((input) => input.value.trim());
      const saveLabel = document.querySelector(".tc-save-roster")?.textContent || "CREATE ROSTER";
      return readyToSave ? `Click ${saveLabel}.` : "Write two students' names.";
    }
    if (step === 4) return "Click NEXT to close the roster screen.";
    if (step === 5) return "Correct answers add 1 point to this pool.";
    if (step === 6) return document.querySelector(".tc-student-grid .tc-student") ? "Choose a student to receive the point." : "You can give the points in the pool to a student you choose.";
    if (step === 7) return "Click this button to choose a random student.";
    if (step === 8) return "Open the roster again to manage student profiles.";
    if (step === 9) return "Click a student card to open the student profile.";
    if (step === 10) return "Click the avatar box to choose an avatar.";
    if (step === 11) return "Choose an avatar for this student.";
    return "That's all! Hope you enjoy the app.";
  }

  function positionTutorialCoach(target) {
    const coach = document.querySelector(".tc-guided-coach");
    if (!coach || coach.classList.contains("is-inline")) return;
    const rect = target?.getBoundingClientRect();
    const margin = 12;
    const coachWidth = coach.getBoundingClientRect().width;
    const desiredLeft = rect ? rect.left + rect.width / 2 - coachWidth / 2 : (window.innerWidth - coachWidth) / 2;
    const left = Math.min(window.innerWidth - coachWidth - margin, Math.max(margin, desiredLeft));
    const top = rect ? Math.max(12, rect.top - coach.offsetHeight - 16) : Math.max(18, window.innerHeight * .2);
    coach.style.left = `${left}px`;
    coach.style.top = `${top}px`;
  }

  function renderGuidedTutorial() {
    if (!guidedTutorial) return;
    if (!document.querySelector(".tc-tutorial-exit")) {
      const exit = el("button", "tc-tutorial-exit", "×");
      exit.type = "button";
      exit.setAttribute("aria-label", "Cancel tutorial");
      exit.addEventListener("click", closeGuidedTutorial);
      document.body.append(exit);
    }
    clearTutorialFocus();
    const target = tutorialTargetForStep(guidedTutorial.step);
    target?.classList.add("tc-tutorial-focus");
    let coach = document.querySelector(".tc-guided-coach");
    if (!coach) {
      coach = el("div", "tc-guided-coach");
      document.body.append(coach);
    }
    const editorList = [2, 3].includes(guidedTutorial.step)
      ? target?.closest(".tc-card")?.querySelector(".tc-editor-list")
      : null;
    coach.classList.toggle("is-inline", Boolean(editorList));
    if (editorList && editorList.previousElementSibling !== coach) editorList.before(coach);
    else if (!editorList && coach.parentElement !== document.body) document.body.append(coach);
    coach.replaceChildren(el("small", "", `STEP ${guidedTutorial.step} / 12`), el("strong", "", tutorialCopyForStep(guidedTutorial.step)));
    if (guidedTutorial.step === 4 || guidedTutorial.step === 5 || guidedTutorial.step === 12) {
      const next = el("button", "tc-tutorial-next", guidedTutorial.step === 12 ? "FINISH" : "NEXT");
      next.type = "button";
      next.addEventListener("click", () => {
        if (guidedTutorial?.step === 12) {
          dismissTutorialPrompt();
          closeGuidedTutorial();
        }
        else if (guidedTutorial?.step === 4) { closeOverlays(); setGuidedTutorialStep(5); }
        else setGuidedTutorialStep(6);
      });
      coach.append(next);
    }
    requestAnimationFrame(() => positionTutorialCoach(target));
  }

  function setGuidedTutorialStep(step) {
    if (!guidedTutorial) return;
    guidedTutorial.step = step;
    renderGuidedTutorial();
  }

  function startGuidedTutorial() {
    closeOverlays();
    commitActiveClassroom();
    const restoreState = {
      classrooms: JSON.parse(JSON.stringify(state.classrooms)),
      activeClassroomId: state.activeClassroomId,
      lockedClassroomId: getLockedClassroomId(),
      selectedStudentId: state.selectedStudentId,
      randomDrawnIds: [...randomHistory.drawnIds]
    };
    const tutorialClassroom = createClassroom("TUTORIAL CLASS");
    state.classrooms = [tutorialClassroom];
    state.activeClassroomId = tutorialClassroom.id;
    activateClassroom(tutorialClassroom.id, false);
    randomHistory.drawnIds = [];
    syncSelectedTrigger();
    updateHud();
    guidedTutorial = { step: 1, restoreState };
    renderGuidedTutorial();
  }

  function refreshGuidedTutorial() {
    if (guidedTutorial) renderGuidedTutorial();
  }

  document.addEventListener("click", (event) => {
    if (!guidedTutorial) return;
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (target.closest(".tc-avatar-picker-overlay .tc-close") || target.matches(".tc-avatar-picker-overlay")) return;
    if (target.closest(".tc-tutorial-exit, .tc-overlay .tc-close")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeGuidedTutorial();
      return;
    }
    const step = guidedTutorial.step;
    const allowed =
      (step === 1 && target.closest(".tc-roster")) ||
      (step === 2 && target.closest(".tc-add-student")) ||
      (step === 3 && (target.closest(".tc-editor-row input, .tc-key, .tc-name-suggestion") || (target.closest(".tc-add-student") && document.querySelectorAll(".tc-editor-row").length < 2) || (target.closest(".tc-save-roster") && [...document.querySelectorAll(".tc-editor-row input")].length === 2 && [...document.querySelectorAll(".tc-editor-row input")].every((input) => input.value.trim())))) ||
      (step === 4 && target.closest(".tc-tutorial-next")) ||
      (step === 5 && target.closest(".tc-tutorial-next")) ||
      (step === 6 && (target.closest(".tc-plus") || target.closest(".tc-student-grid .tc-student"))) ||
      (step === 7 && target.closest(".tc-random")) ||
      (step === 8 && target.closest(".tc-roster")) ||
      (step === 9 && target.closest(".tc-student-grid .tc-student")) ||
      (step === 10 && target.closest(".tc-profile-avatar")) ||
      (step === 11 && target.closest(".tc-avatar-choice")) ||
      (step === 12 && target.closest(".tc-tutorial-next"));
    if (!allowed) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener("resize", () => positionTutorialCoach(tutorialTargetForStep(guidedTutorial?.step)));

  function makeOverlay(kicker, title, copy = "", originButton = null, onBack = null) {
    if (!onBack) closeOverlays({ immediate: true });
    const overlay = el("div", "tc-overlay");
    if (["CLASSROOM", "TIMER", "POINT POOL", "POINT CONTROL", "HUD HELP"].includes(kicker) || title === "RANDOM PICK") {
      overlay.classList.add("tc-overlay-fade");
    }
    const card = el("div", "tc-card");
    const close = el("button", "tc-close", "×");
    close.type = "button";
    const closeOverlay = onBack ? () => dismissHudOverlay(overlay, false, onBack) : closeOverlays;
    close.addEventListener("click", closeOverlay);
    card.append(close, el("p", "tc-kicker", kicker), el("h2", "tc-title", title));
    if (copy) card.append(el("p", "tc-copy", copy));
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlay(); });
    overlay.append(card);
    document.body.append(overlay);
    const sourceButton = originButton || (kicker === "CLASSROOM" ? rosterButton :
      kicker === "TIMER" ? hudTimerDisplayButton : title === "RANDOM PICK" ? randomButton : null);
    animateHudOverlayFromButton(overlay, card, sourceButton);
    return card;
  }

  function updateHud() {
    const selected = getStudent();
    if (selected && isAbsent(selected)) {
      state.selectedStudentId = "";
      syncSelectedTrigger();
      save();
    }
    const chosen = getStudent();
    hud.classList.toggle("no-roster", !hasRoster());
    rosterButton.classList.toggle("has-chosen-avatar", Boolean(chosen?.avatarPath));
    rosterButton.title = (chosen ? `${chosen.name} is chosen — Class roster` : "Class roster") +
      (standaloneRoster ? "" : " — Right-click for full-page roster");
    if (chosen?.avatarPath) {
      const avatar = document.createElement("img");
      avatar.src = resolveAvatarPath(chosen.avatarPath);
      avatar.alt = `${chosen.name} avatar`;
      avatar.className = "tc-roster-avatar";
      avatar.classList.toggle("tc-avatar-flipped", shouldFlipAvatar(chosen.avatarPath));
      avatar.addEventListener("error", () => {
        rosterButton.classList.remove("has-chosen-avatar");
        rosterButton.textContent = "👥";
      }, { once: true });
      rosterButton.replaceChildren(avatar);
    } else {
      rosterButton.replaceChildren(document.createTextNode("👥"));
    }
    randomButton.classList.toggle("is-chosen", Boolean(chosen));
    randomButton.title = chosen ? `Chosen: ${chosen.name}` : "Choose a random student";
    bank.textContent = hasRoster() ? `+${state.pointBank}` : "ROSTER";
    chosenBanner.textContent = chosen ? `${chosen.name} IS CHOSEN` : "";
    chosenBanner.classList.toggle("is-visible", Boolean(chosen));
    if (!chosen) chosenBanner.classList.remove("is-resetting");
    accountButton?.classList.toggle("is-connected", Boolean(window.TeacherCloud?.isSignedIn?.()));
    accountButton?.setAttribute("aria-label", window.TeacherCloud?.isSignedIn?.() ? "Cloud account connected" : "Sign in to cloud backup");
    const canSync = Boolean(window.TeacherCloud?.isSignedIn?.() && hasSyncClassroomLock());
    const syncCoolingDown = Date.now() < syncShortcutCooldownUntil;
    syncButton.disabled = !buttonHelpActive && (!canSync || syncCoolingDown);
    syncButton.title = syncCoolingDown ? "Sync cooldown" : canSync ? "Sync now" : "Choose and lock a classroom from the roster first";
    syncButton.setAttribute("aria-label", syncButton.title);
    updateHudTimer();
    if (standaloneRoster) renderStandaloneRoster();
    requestAnimationFrame(updateHudControlsWidth);
  }

  function applyCloudState(snapshot) {
    if (guidedTutorial) {
      guidedTutorial.cloudSnapshot = snapshot;
      return;
    }
    const classroomsToCheck = Array.isArray(snapshot?.classrooms)
      ? snapshot.classrooms
      : [{ roster: snapshot?.roster }];
    const needsAvatarPathMigration = classroomsToCheck.some((classroom) =>
      Array.isArray(classroom?.roster) && classroom.roster.some((student) =>
        typeof student?.avatarPath === "string" && normalizeAvatarPath(student.avatarPath) !== student.avatarPath
      )
    );
    if (Array.isArray(snapshot?.classrooms) && snapshot.classrooms.length) {
      state.classrooms = snapshot.classrooms.map((classroom, index) => createClassroom(`CLASS ${index + 1}`, classroom));
      state.activeClassroomId = state.classrooms.some((classroom) => classroom.id === snapshot.activeClassroomId)
        ? snapshot.activeClassroomId
        : state.classrooms[0].id;
      restoreLockedClassroom();
      activateClassroom(state.activeClassroomId, false);
    } else if (Array.isArray(snapshot?.roster)) {
      const classroom = createClassroom("MY CLASS", snapshot);
      state.classrooms = [classroom];
      state.activeClassroomId = classroom.id;
      restoreLockedClassroom();
      activateClassroom(state.activeClassroomId, false);
    } else return;
    state.selectedStudentId = "";
    resetRandomPool();
    syncSelectedTrigger();
    persistLocal();
    if (needsAvatarPathMigration) window.TeacherCloud?.scheduleSync?.(state);
    updateHud();
  }

  function createPinInput(placeholder, autocomplete) {
    const input = el("input", "tc-pin-input", "");
    input.type = "password";
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.placeholder = placeholder;
    input.autocomplete = autocomplete;
    input.readOnly = true;
    input.setAttribute("aria-label", placeholder);
    return input;
  }

  function createPinPad(inputs) {
    let activeInput = inputs[0];
    const pad = el("div", "tc-pin-pad");
    const updatePin = (action) => {
      if (action === "clear") activeInput.value = "";
      else if (action === "back") activeInput.value = activeInput.value.slice(0, -1);
      else if (/^\d$/.test(action)) activeInput.value += action;
    };
    inputs.forEach((input) => {
      input.addEventListener("focus", () => { activeInput = input; });
      input.addEventListener("keydown", (event) => {
        if (/^\d$/.test(event.key)) {
          updatePin(event.key);
          event.preventDefault();
        } else if (event.key === "Backspace") {
          updatePin("back");
          event.preventDefault();
        } else if (event.key === "Escape") {
          updatePin("clear");
          event.preventDefault();
        }
      });
    });
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "CLEAR", "0", "⌫"].forEach((label) => {
      const key = el("button", `tc-pin-key${label === "CLEAR" || label === "⌫" ? " is-utility" : ""}`, label);
      key.type = "button";
      key.addEventListener("click", () => updatePin(label === "CLEAR" ? "clear" : label === "⌫" ? "back" : label));
      pad.append(key);
    });
    return pad;
  }

  function openAccount() {
    const cloud = window.TeacherCloud;
    if (!cloud) return;
    const account = cloud.getAccount();
    if (account.signedIn) {
      const card = makeOverlay("CLOUD BACKUP", "ACCOUNT CONNECTED", account.email);
      const sync = el("button", "tc-action primary", "SYNC NOW");
      const signOut = el("button", "tc-action danger", "SIGN OUT");
      sync.type = signOut.type = "button";
      sync.disabled = !hasSyncClassroomLock();
      sync.title = sync.disabled ? "Choose and lock a classroom from the roster first" : "Sync now";
      sync.addEventListener("click", async () => {
        if (!hasSyncClassroomLock()) return;
        sync.disabled = true;
        try { await cloud.syncNow(); showToast("Classroom synced."); } catch (error) { showToast(error.message || "Sync failed."); }
        sync.disabled = false;
      });
      signOut.addEventListener("click", async () => {
        await cloud.signOut();
        restoreGuestClassroom();
        closeOverlays();
        showToast("Signed out. Local classroom restored.");
      });
      const actions = el("div", "tc-actions");
      actions.append(sync, signOut);
      card.append(actions);
      return;
    }
    const card = makeOverlay("CLOUD BACKUP", "TEACHER SIGN IN", "Enter your email and numeric PIN to back up your roster, points, stars, and avatars.");
    const form = el("form", "tc-auth-form");
    const displayName = el("input", "", "");
    const email = el("input", "", "");
    const password = createPinInput("PIN (at least 6 digits)", "current-password");
    displayName.type = "text";
    displayName.placeholder = "Teacher name (optional)";
    displayName.autocomplete = "name";
    email.type = "email";
    email.placeholder = "Email address";
    email.autocomplete = "email";
    const submit = el("button", "tc-action primary", "SIGN IN");
    const request = el("button", "tc-action", "REQUEST ACCOUNT");
    const forgot = el("button", "tc-action", "FORGOT PIN?");
    submit.type = "submit";
    request.type = "button";
    forgot.type = "button";
    const actions = el("div", "tc-actions");
    actions.append(submit, request, forgot);
    form.append(displayName, email, password, createPinPad([password]), actions);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submit.disabled = true;
      request.disabled = true;
      try {
        await cloud.signIn(email.value.trim(), password.value);
        closeOverlays();
        updateHud();
        showToast("Cloud backup connected.");
      } catch (error) {
        showToast(error.message || "Sign-in failed.");
      } finally {
        submit.disabled = false;
        request.disabled = false;
      }
    });
    request.addEventListener("click", async () => {
      const teacherEmail = email.value.trim();
      if (!teacherEmail || !password.value) {
        showToast("Enter email and PIN first.");
        return;
      }
      submit.disabled = true;
      request.disabled = true;
      try {
        await cloud.signUp(teacherEmail, password.value, displayName.value.trim());
        closeOverlays();
        showToast("Request sent. Waiting for approval.");
      } catch (error) {
        showToast(error.message || "Account request failed.");
      } finally {
        submit.disabled = false;
        request.disabled = false;
      }
    });
    forgot.addEventListener("click", async () => {
      const teacherEmail = email.value.trim();
      if (!teacherEmail) {
        showToast("Enter your email address first.");
        return;
      }
      forgot.disabled = true;
      try {
        await cloud.requestPasswordReset(teacherEmail);
        showToast("PIN reset email sent. Check your inbox.");
      } catch (error) {
        showToast(error.message || "Could not send PIN reset email.");
      } finally {
        forgot.disabled = false;
      }
    });
    const note = el("p", "tc-auth-note", "No approved account yet? Request one, then approve it from the local admin panel.");
    card.append(form, note);
  }

  function openPasswordReset() {
    const cloud = window.TeacherCloud;
    if (!cloud) return;
    const card = makeOverlay("CLOUD BACKUP", "CREATE NEW PIN", "Choose a numeric PIN with at least 6 digits.");
    const form = el("form", "tc-auth-form");
    const password = createPinInput("New PIN (at least 6 digits)", "new-password");
    const confirmPassword = createPinInput("Confirm new PIN", "new-password");
    const submit = el("button", "tc-action primary", "SAVE NEW PIN");
    submit.type = "submit";
    form.append(password, confirmPassword, createPinPad([password, confirmPassword]), submit);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!/^\d{6,}$/.test(password.value) || password.value !== confirmPassword.value) {
        showToast("PINs must match and contain at least 6 digits.");
        return;
      }
      submit.disabled = true;
      try {
        await cloud.updatePassword(password.value);
        const url = new URL(location.href);
        url.searchParams.delete("password-reset");
        url.hash = "";
        location.replace(url.href);
      } catch (error) {
        showToast(error.message || "Could not update password.");
        submit.disabled = false;
      }
    });
    card.append(form);
  }

  function floatFrom(target, text, className = "") {
    const rect = target.getBoundingClientRect();
    const float = el("span", `tc-float${className ? ` ${className}` : ""}`, text);
    float.style.left = `${rect.left + rect.width / 2}px`;
    float.style.top = `${rect.top}px`;
    document.body.append(float);
    float.addEventListener("animationend", () => float.remove());
  }

  function floatPoint() {
    floatFrom(bank, "+1");
  }

  function classBar() {
    const bar = el("div", "tc-class-bar");
    const lockedClassId = getLockedClassroomId();
    state.classrooms.forEach((classroom) => {
      if (lockedClassId && classroom.id !== lockedClassId) return;
      const tab = el("button", `tc-class-tab${classroom.id === state.activeClassroomId ? " is-active" : ""}`, classroom.name);
      tab.type = "button";
      tab.addEventListener("click", () => {
        if (lockedClassId) return;
        lockClassroom(classroom.id);
        if (classroom.id === state.activeClassroomId) {
          updateHud();
          closeOverlays();
          return;
        }
        activateClassroom(classroom.id);
        resetRandomPool();
        syncSelectedTrigger();
        save({ deferPoints: true });
        updateHud();
        openRoster();
      });
      bar.append(tab);
    });
    if (lockedClassId) return bar;
    const add = el("button", "tc-class-tab is-add", "+");
    add.type = "button";
    add.title = "Create another class";
    add.addEventListener("click", () => openClassNameDialog("create"));
    bar.append(add);
    return bar;
  }

  function openClassNameDialog(mode) {
    if (!cloudClassroomsEnabled()) return;
    const current = activeClassroom();
    const isCreating = mode === "create";
    const card = makeOverlay("CLASSROOM", isCreating ? "NEW CLASS" : "RENAME CLASS", isCreating ? "Create a separate roster for another class." : "Change the name of the active class.");
    const form = el("form", "tc-class-name-form");
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 40;
    input.placeholder = "Class name";
    input.value = isCreating ? "" : (current?.name || "");
    const submit = el("button", "tc-action primary", isCreating ? "CREATE CLASS" : "SAVE NAME");
    submit.type = "submit";
    form.append(input, submit);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = input.value.trim();
      if (!name) { showToast("Write a class name first."); return; }
      const duplicate = state.classrooms.some((classroom) => classroom.id !== current?.id && classroom.name.localeCompare(name, "tr", { sensitivity: "base" }) === 0);
      if (duplicate) { showToast("A class with this name already exists."); return; }
      if (isCreating) {
        commitActiveClassroom();
        const classroom = createClassroom(name);
        state.classrooms.push(classroom);
        activateClassroom(classroom.id, false);
        resetRandomPool();
        syncSelectedTrigger();
        save({ deferPoints: !resetStars });
        updateHud();
        openRosterEditor(true);
      } else if (current) {
        current.name = name;
        save();
        openRoster();
      }
    });
    card.append(form);
    requestAnimationFrame(() => input.focus());
  }

  function deleteActiveClassroom() {
    if (!cloudClassroomsEnabled()) return;
    const current = activeClassroom();
    if (!current) return;
    confirmPointsReset("DELETE CLASS?", `${current.name} and every student record in it will be deleted.`, "DELETE CLASS", () => {
      commitActiveClassroom();
      state.classrooms = state.classrooms.filter((classroom) => classroom.id !== current.id);
      if (!state.classrooms.length) state.classrooms.push(createClassroom());
      clearClassroomLock();
      activateClassroom(state.classrooms[0].id, false);
      resetRandomPool();
      syncSelectedTrigger();
      save();
      updateHud();
      openRoster();
    });
  }

  let animatedStandaloneClassroom;
  const stopCardEntrances = new WeakMap();

  function renderStandaloneRoster() {
    const cloudMode = cloudClassroomsEnabled();
    stopCardEntrances.get(standaloneRoster)?.();
    standaloneRoster.replaceChildren(
      el("p", "tc-kicker", "CLASSROOM"),
      el("h2", "tc-title", activeClassroom()?.name || "CLASS ROSTER")
    );
    populateRoster(standaloneRoster, cloudMode);
    if (state.activeClassroomId !== animatedStandaloneClassroom &&
        standaloneRoster.querySelector(".tc-student-grid > .tc-student")) {
      animatedStandaloneClassroom = state.activeClassroomId;
      animateRosterRows(standaloneRoster);
    }
  }

  function openRoster() {
    if (standaloneRoster) {
      closeOverlays();
      renderStandaloneRoster();
      return;
    }
    openRosterOverlay();
  }

  function openRosterOverlay() {
    if (!hasRoster() && state.classrooms.length === 1) {
      openRosterEditor(true);
      if (guidedTutorial?.step === 1) window.setTimeout(() => setGuidedTutorialStep(2), 0);
      return;
    }
    const current = activeClassroom();
    const cloudMode = cloudClassroomsEnabled();
    const card = makeOverlay("CLASSROOM", current?.name || "CLASS ROSTER");
    card.classList.add("tc-roster-card");
    card.querySelector(".tc-kicker").remove();
    populateRoster(card, cloudMode);
    animateRosterRows(card);
  }

  function animateRosterRows(card) {
    const isStandalone = card === standaloneRoster;
    if ((!isStandalone && hudLite) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scrollTarget = isStandalone ? window : card;
    const rows = [];
    let previousTop = -1;
    for (const item of card.querySelectorAll(".tc-student-grid > .tc-student")) {
      const top = item.offsetTop;
      if (top !== previousTop) {
        previousTop = top;
        rows.push([]);
      }
      rows.at(-1).push(item);
    }
    const columns = Math.max(1, ...rows.map(row => row.length));
    const pendingRows = new Set(rows);
    const animations = new Set();
    const animateVisible = (initialDelay) => {
      const top = isStandalone ? 0 : card.scrollTop;
      const bottom = top + (isStandalone ? document.documentElement.clientHeight : card.clientHeight);
      for (const items of pendingRows) {
        const first = items[0];
        const bounds = isStandalone ? first.getBoundingClientRect() :
          { top: first.offsetTop, bottom: first.offsetTop + first.offsetHeight };
        if (bounds.top >= bottom || bounds.bottom <= top) continue;
        pendingRows.delete(items);
        items.forEach((item, column) => {
          const isLeft = columns > 1 && column === 0;
          const isRight = columns > 1 && column === columns - 1;
          const from = isLeft ? "-80px 0" : isRight ? "80px 0" : "0 -28px";
          const animation = item.animate?.(
            [{ opacity: 0, translate: from }, { opacity: 1, translate: "0 0" }],
            { duration: 450, delay: initialDelay, easing: "cubic-bezier(.2, .7, .25, 1)", fill: "backwards" }
          );
          if (animation) {
            animations.add(animation);
            animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
          }
        });
      }
      if (!pendingRows.size) scrollTarget.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => animateVisible(0);
    stopCardEntrances.set(card, () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      pendingRows.clear();
      animations.forEach(animation => animation.cancel());
      stopCardEntrances.delete(card);
    });
    if (pendingRows.size) scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    animateVisible(155);
  }

  function fitRosterCardText(root) {
    const labels = root.querySelectorAll(".tc-student-grid :is(.tc-student-name-row strong, .tc-student-details > span, .tc-level-progress)");
    labels.forEach(label => label.style.removeProperty("font-size"));
    const fittedSizes = Array.from(labels, label => {
      const available = label.clientWidth;
      const required = label.scrollWidth;
      if (!available || required <= available) return null;
      const size = parseFloat(getComputedStyle(label).fontSize);
      return `${size * Math.max(1, available - 1) / required}px`;
    });
    labels.forEach((label, index) => {
      if (fittedSizes[index]) label.style.fontSize = fittedSizes[index];
    });
  }

  const refitRosterCards = () => fitRosterCardText(document);
  window.addEventListener("resize", refitRosterCards);
  document.fonts?.addEventListener("loadingdone", refitRosterCards);

  function populateRoster(card, cloudMode) {
    const headerControls = card === standaloneRoster ? document.getElementById("hud-class-controls") : null;
    headerControls?.replaceChildren();
    if (cloudMode && !getLockedClassroomId()) {
      card.append(classBar(), el("div", "tc-empty", "Choose the classroom for this smart board first."));
      return;
    }
    const grid = el("div", "tc-student-grid tc-roster-grid");
    sortRosterStudents(state.roster).forEach((student) => {
      const item = studentCard(student, { showChosen: true, ranked: true, showAvatar: true, showLevelProgress: true });
      let suppressProfileClick = false;
      let profileOrigin = null;
      if (card === standaloneRoster) {
        item.dataset.profileStudentId = student.id;
        const classroomId = state.activeClassroomId;
        profileOrigin = {
          standalone: true,
          getBoundingClientRect: () => state.activeClassroomId === classroomId
            ? card.querySelector(`[data-profile-student-id="${CSS.escape(student.id)}"]`)?.getBoundingClientRect()
            : null
        };
        bindStudentPointHold(item, student, true, value => { suppressProfileClick = value; }, { standalone: true });
      }
      item.addEventListener("click", (event) => {
        if (suppressProfileClick && event.detail !== 0) return;
        if (profileOrigin) {
          openStudentProfile(student.id, profileOrigin);
        } else {
          const rect = item.getBoundingClientRect();
          openStudentProfile(student.id, { getBoundingClientRect: () => rect });
        }
      });
      grid.append(item);
    });
    const actions = el("div", "tc-actions");
    if (!state.roster.length) grid.append(el("div", "tc-empty", "This class has no students yet."));
    const editClass = el("button", "tc-action", "EDIT CLASS");
    editClass.type = "button";
    editClass.setAttribute("aria-expanded", "false");
    const classActions = el("div", "tc-actions tc-class-edit-actions");
    classActions.hidden = true;
    editClass.addEventListener("click", () => {
      classActions.hidden = !classActions.hidden;
      editClass.setAttribute("aria-expanded", String(!classActions.hidden));
    });
    const edit = el("button", "tc-action", "EDIT ROSTER");
    edit.type = "button";
    edit.addEventListener("click", () => openRosterEditor(false));
    const attendance = el("button", "tc-action", "ATTENDANCE");
    attendance.type = "button";
    attendance.addEventListener("click", openAttendance);
    attendance.disabled = !state.roster.length;
    const resetPoints = el("button", "tc-action danger", "RESET POINTS");
    resetPoints.type = "button";
    resetPoints.addEventListener("click", () => {
      confirmPointsReset("RESET ALL POINTS?", "Every student score in this roster will be reset to 0.", "RESET ALL", () => {
        state.roster.forEach((student) => { student.points = 0; });
        save({ deferPoints: true });
        updateHud();
        openRoster();
      }, "RESET STARS TOO", () => {
        state.roster.forEach((student) => {
          student.points = 0;
          student.stars = 0;
        });
        save();
        updateHud();
        openRoster();
      });
    });
    resetPoints.disabled = !state.roster.length;
    const changeClassroom = el("button", "tc-action", "CHANGE CLASSROOM");
    changeClassroom.type = "button";
    changeClassroom.disabled = !cloudMode;
    changeClassroom.addEventListener("click", () => {
      clearClassroomLock();
      openRoster();
    });
    const rename = el("button", "tc-action", "RENAME CLASS");
    rename.type = "button";
    rename.disabled = !cloudMode;
    rename.addEventListener("click", () => openClassNameDialog("rename"));
    const removeClass = el("button", "tc-action danger", "DELETE CLASS");
    removeClass.type = "button";
    removeClass.disabled = !cloudMode;
    removeClass.addEventListener("click", deleteActiveClassroom);
    actions.append(editClass, attendance);
    classActions.append(edit, changeClassroom, rename, removeClass, resetPoints);
    card.append(grid);
    (headerControls || card).append(actions, classActions);
    requestAnimationFrame(() => fitRosterCardText(card));
    if (guidedTutorial?.step === 3) setGuidedTutorialStep(4);
    if (guidedTutorial?.step === 8) window.setTimeout(() => setGuidedTutorialStep(9), 0);
  }

  function toggleAttendance(studentId) {
    const student = getStudent(studentId);
    if (!student) return;
    if (isAbsent(student)) {
      state.absentStudentIds = state.absentStudentIds.filter((id) => id !== student.id);
    } else {
      state.absentStudentIds = [...state.absentStudentIds, student.id];
      if (state.selectedStudentId === student.id) state.selectedStudentId = "";
    }
    syncSelectedTrigger();
    save({ deferPoints: true });
    updateHud();
  }

  function openAttendance() {
    if (!hasRoster()) {
      openRosterEditor(true);
      return;
    }
    const presentCount = state.roster.filter((student) => !isAbsent(student)).length;
    const card = makeOverlay("CLASSROOM", "ATTENDANCE", `Present : ${presentCount} students.`);
    const copy = card.querySelector(".tc-copy");
    const grid = el("div", "tc-student-grid tc-attendance-grid");
    sortStudentsByScoreAndName(state.roster).forEach((student) => {
      const item = studentCard(student, { ranked: true, showAvatar: true, showAttendance: true });
      item.setAttribute("aria-pressed", String(isAbsent(student)));
      let attendanceAnimation = null;
      item.addEventListener("click", () => {
        attendanceAnimation?.cancel();
        toggleAttendance(student.id);
        const absent = isAbsent(student);
        item.classList.toggle("is-absent", absent);
        item.classList.toggle("is-selected", student.id === state.selectedStudentId);
        item.setAttribute("aria-pressed", String(absent));
        const status = item.querySelector(".tc-attendance-status");
        status.classList.toggle("is-absent", absent);
        status.textContent = absent ? "✕" : "✓";
        status.title = absent ? "Absent" : "Present";
        copy.textContent = `Present : ${presentStudents().length} students.`;
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && item.animate) {
          attendanceAnimation = item.animate([
            { transform: "perspective(800px) rotateY(0turn)", opacity: 1 },
            { transform: "perspective(800px) rotateY(.5turn)", opacity: .65, offset: .5 },
            { transform: "perspective(800px) rotateY(1turn)", opacity: 1 }
          ], { duration: 520, easing: "ease-in-out", direction: absent ? "normal" : "reverse" });
        }
      });
      grid.append(item);
    });
    const actions = el("div", "tc-actions");
    const done = el("button", "tc-action primary", "DONE");
    done.type = "button";
    done.addEventListener("click", openRoster);
    actions.append(done);
    const heading = el("div", "tc-attendance-heading");
    const title = card.querySelector(".tc-title");
    const topDone = done.cloneNode(true);
    topDone.addEventListener("click", openRoster);
    title.replaceWith(heading);
    heading.append(title, topDone);
    card.append(grid, actions);
    requestAnimationFrame(() => fitRosterCardText(card));
  }

  function openHelp() {
    buttonHelpActive = !buttonHelpActive;
    helpButton.setAttribute("aria-pressed", String(buttonHelpActive));
    helpButton.classList.toggle("is-first-run", buttonHelpActive);
    if (buttonHelpActive) {
      const hint = el("div", "tc-help-tip", "Click a button to see what it does.");
      hint.setAttribute("role", "status");
      hud.append(hint);
    } else {
      hud.querySelector(".tc-help-tip")?.remove();
    }
    updateHud();
    updateHudTimer();
  }

  function dismissTutorialPrompt() {
    try { localStorage.setItem(TUTORIAL_DISMISSED_KEY, "1"); }
    catch { /* Storage may be unavailable. */ }
  }

  function showTutorialPrompt() {
    try {
      if (localStorage.getItem(TUTORIAL_DISMISSED_KEY) || sessionStorage.getItem(TUTORIAL_PROMPT_SESSION_KEY)) return;
      sessionStorage.setItem(TUTORIAL_PROMPT_SESSION_KEY, "1");
    } catch { /* Show the invitation when storage is unavailable. */ }
    const card = makeOverlay("CLASS CREATION TUTORIAL", "Would you like to watch the class creation tutorial?");
    if (document.fullscreenElement?.contains(hud) && !document.fullscreenElement.contains(card)) {
      document.fullscreenElement.append(card.closest(".tc-overlay"));
    }
    card.classList.add("tc-tutorial-prompt");
    const label = el("label", "");
    const checkbox = el("input", "");
    checkbox.type = "checkbox";
    label.append(checkbox, document.createTextNode("Don’t show this message again"));
    const actions = el("div", "tc-actions");
    const yes = el("button", "tc-action primary", "YES");
    const no = el("button", "tc-action", "NO");
    yes.type = no.type = "button";
    yes.addEventListener("click", startGuidedTutorial);
    no.addEventListener("click", () => {
      if (checkbox.checked) dismissTutorialPrompt();
      closeOverlays();
    });
    actions.append(yes, no);
    card.append(label, actions);
  }

  function showLiteTip() {
    try { if (localStorage.getItem(HUD_LITE_TIP_KEY) === "1") return; }
    catch { /* Keep the tip available when storage is unavailable. */ }
    const tip = el("aside", "tc-lite-tip");
    tip.setAttribute("data-radial-ignore", "");
    const message = el("p", "", "If the app feels slow on an older or less powerful computer, right-click the lock button to enable LITE mode. This turns off some visual effects.");
    const label = el("label", "");
    const checkbox = el("input", "");
    checkbox.type = "checkbox";
    label.append(checkbox, document.createTextNode("Don’t show this again"));
    const done = el("button", "", "Got it");
    done.type = "button";
    const position = () => {
      const lock = radialLockButton.getBoundingClientRect();
      if (!lock.width || !tip.offsetWidth) return;
      const left = Math.max(12, Math.min(window.innerWidth - tip.offsetWidth - 12, lock.left + lock.width / 2 - tip.offsetWidth / 2));
      tip.style.left = `${left}px`;
      tip.style.bottom = `${window.innerHeight - lock.top + 12}px`;
    };
    done.addEventListener("click", () => {
      if (checkbox.checked) {
        try { localStorage.setItem(HUD_LITE_TIP_KEY, "1"); }
        catch { /* Dismiss for the current page. */ }
      }
      window.removeEventListener("resize", position);
      collapseButton.removeEventListener("click", position);
      radialLockButton.classList.remove("tc-lite-tip-highlight");
      tip.remove();
    });
    tip.append(message, label, done);
    hud.append(tip);
    radialLockButton.classList.add("tc-lite-tip-highlight");
    position();
    window.addEventListener("resize", position);
    collapseButton.addEventListener("click", position);
  }

  function appendRankEdgeLight(card, student) {
    if (!card.classList.contains("is-rank-gold-aura")) return;
    const edgeLight = el("div", "tc-rank-edge-light");
    if (effectiveScore(student) >= 850) edgeLight.classList.add("is-spectrum");
    edgeLight.setAttribute("aria-hidden", "true");
    edgeLight.append(el("div", ""));
    card.append(edgeLight);
  }

  function studentCard(student, options = {}) {
    const showAvatar = Boolean(options.showAvatar && student.avatarPath);
    const item = el(options.static ? "div" : "button", `tc-student${student.id === state.selectedStudentId ? " is-selected" : ""}${options.ranked ? studentRankClass(effectiveScore(student)) : ""}${showAvatar ? " has-avatar" : ""}${isAbsent(student) ? " is-absent" : ""}`);
    if (!options.static) item.type = "button";
    appendRankEdgeLight(item, student);
    const details = el("div", "tc-student-details");
    const nameRow = el("div", "tc-student-name-row");
    nameRow.append(el("strong", "", student.name));
    if (!showAvatar) nameRow.append(createLevelBadge(student, true));
    details.append(nameRow, el("span", "", `${student.points} PTS`));
    if (options.showLevelProgress) {
      const nextLevel = nextLevelStart(student);
      const remaining = nextLevel === null ? 0 : Math.ceil(nextLevel - effectiveScore(student));
      const text = nextLevel === null ? "MAX LEVEL" : `${remaining} ${remaining === 1 ? "point" : "points"} for level up`;
      details.append(el("small", "tc-level-progress", text));
    }
    if (student.stars) details.append(el("div", "tc-student-stars", starSummary(student.stars)));
    item.append(details);
    const avatar = showAvatar ? createStudentAvatar(student, "tc-student-avatar") : null;
    if (avatar) item.append(avatar);
    if (options.showChosen && student.id === state.selectedStudentId) item.append(el("em", "", "✓"));
    if (options.showAttendance) {
      const absent = isAbsent(student);
      const status = el("span", `tc-attendance-status${absent ? " is-absent" : ""}`, absent ? "✕" : "✓");
      status.title = absent ? "Absent" : "Present";
      (avatar || item).append(status);
    }
    return item;
  }

  function createStudentAvatar(student, className, showChooseCopy = false, showLevel = true) {
    const frame = el("div", className || "tc-avatar-media");
    if (!student.avatarPath) {
      if (showChooseCopy) {
        frame.classList.add("tc-avatar-choose-copy");
        ["CLICK", "TO", "CHOOSE", "AVATAR"].forEach((word) => frame.append(el("span", "", word)));
      }
      return frame;
    }
    const levelBadge = showLevel ? createLevelBadge(student) : null;
    const image = document.createElement("img");
    const imageCrop = el("div", "tc-avatar-image-crop");
    image.src = resolveAvatarPath(student.avatarPath);
    image.alt = `${student.name} avatar`;
    image.classList.toggle("tc-avatar-flipped", shouldFlipAvatar(student.avatarPath));
    image.addEventListener("error", () => {
      imageCrop.remove();
      frame.textContent = student.name.slice(0, 1).toLocaleUpperCase("tr-TR");
      if (levelBadge) frame.append(levelBadge);
    }, { once: true });
    imageCrop.append(image);
    frame.append(imageCrop);
    if (levelBadge) frame.append(levelBadge);
    return frame;
  }

  function openStudentProfile(studentId, profileOrigin = null) {
    const student = getStudent(studentId);
    if (!student) return;
    const classroomId = state.activeClassroomId;
    const card = makeOverlay("CLASSROOM", "STUDENT PROFILE", "", profileOrigin);
    card.classList.add("tc-profile-card");
    card.querySelector(".tc-kicker").remove();
    const summary = el("div", `tc-profile-summary${studentRankClass(effectiveScore(student))}`);
    const avatarButton = el("button", "tc-profile-avatar");
    avatarButton.type = "button";
    avatarButton.title = "Choose avatar";
    avatarButton.append(createStudentAvatar(student, "", true));
    avatarButton.addEventListener("click", () => {
      if (state.activeClassroomId !== classroomId || !getStudent(student.id)) return;
      const rect = avatarButton.getBoundingClientRect();
      const profileOverlay = card.closest(".tc-overlay");
      openAvatarPicker(student.id, profileOrigin, { getBoundingClientRect: () => rect }, () => {
        profileOverlay.inert = false;
        avatarButton.focus({ preventScroll: true });
        if (guidedTutorial?.step === 11) setGuidedTutorialStep(10);
      });
      profileOverlay.inert = true;
    });
    const meta = el("div", "tc-profile-meta");
    const nameEntry = el("div", "tc-profile-name-entry");
    nameEntry.append(el("h3", "", student.name));
    meta.append(nameEntry, el("p", "", "CLASSROOM SCORE"), el("p", "tc-profile-points", `${student.points} PTS`));
    if (student.stars) meta.append(el("p", "tc-profile-stars", starSummary(student.stars)));
    summary.append(avatarButton, meta);
    if (!isAbsent(student)) appendRankEdgeLight(summary, student);
    const actions = el("div", "tc-actions");
    const back = el("button", "tc-action", "BACK TO ROSTER");
    back.type = "button";
    back.addEventListener("click", openRoster);
    const reset = el("button", "tc-action danger", "RESET");
    reset.type = "button";
    reset.addEventListener("click", () => {
      const resetStars = student.stars > 0;
      confirmPointsReset(resetStars ? "RESET STUDENT STARS?" : "RESET STUDENT POINTS?", `${student.name}'s ${resetStars ? "stars" : "points"} will be reset!`, resetStars ? "RESET STARS" : "RESET POINTS", () => {
        if (resetStars) student.stars = 0;
        else {
          student.points = 0;
          resetReachedStudentLevel(student.id);
        }
        save({ deferPoints: !resetStars });
        updateHud();
        openStudentProfile(student.id, profileOrigin);
      });
    });
    actions.append(back, reset);
    const attendanceButton = el("button", "tc-action", isAbsent(student) ? "REMOVE ABSENT" : "MARK ABSENT");
    attendanceButton.type = "button";
    attendanceButton.addEventListener("click", () => {
      if (state.activeClassroomId !== classroomId || !getStudent(student.id)) return;
      toggleAttendance(student.id);
      closeOverlays();
    });
    actions.append(attendanceButton);
    if (profileOrigin?.standalone) {
      for (const isAward of [true, false]) {
        const sign = isAward ? "+" : "−";
        const button = el("button", `tc-action${isAward ? " primary" : " danger"}`, sign);
        button.type = "button";
        const label = isAward ? "Award points" : "Remove points";
        button.title = label;
        button.setAttribute("aria-label", label);
        button.disabled = isAward && isAbsent(student);
        let suppressClick = false;
        const apply = (amount) => {
          applyMultipleStudentPoints([student.id], isAward, amount, classroomId);
          closeOverlays();
        };
        bindStudentPointHold(button, student, isAward, value => { suppressClick = value; }, {
          confirm: (amount) => {
            if (amount === 1) apply(amount);
            else confirmPointsReset(`${sign}${amount} POINTS TO ${student.name}`, "", "CONFIRM", () => apply(amount));
          }
        });
        button.addEventListener("click", (event) => {
          if (!suppressClick || event.detail === 0) apply(1);
        });
        actions.append(button);
      }
    }
    card.append(summary, actions);
    if (guidedTutorial?.step === 9) window.setTimeout(() => setGuidedTutorialStep(10), 0);
  }

  function openAvatarPicker(studentId, profileOrigin, avatarOrigin, onBack) {
    const student = getStudent(studentId);
    if (!student) return;
    const card = makeOverlay("CLASSROOM", "CHOOSE AVATAR", "Tap an avatar to save it for this student.", avatarOrigin, onBack);
    card.closest(".tc-overlay").classList.add("tc-avatar-picker-overlay");
    const classroomId = state.activeClassroomId;
    const isAvatarTaken = (avatar) => {
      if (avatar.noPhoto) return false;
      const path = resolveAvatarPath(avatar.path);
      return resolveAvatarPath(student.avatarPath) !== path && state.roster.some(other =>
        other.id !== student.id && resolveAvatarPath(other.avatarPath) === path);
    };
    const perPage = 10;
    const avatarOptions = [{ name: "NO PHOTO", path: "", noPhoto: true }, ...AVATAR_OPTIONS];
    const pages = Array.from({ length: Math.ceil(avatarOptions.length / perPage) }, (_, index) => avatarOptions.slice(index * perPage, (index + 1) * perPage));
    let pageIndex = Math.max(0, Math.floor(avatarOptions.findIndex((avatar) => avatar.path === student.avatarPath) / perPage));
    const picker = el("div", "tc-avatar-picker");
    const previous = el("button", "tc-avatar-nav", "‹");
    const viewport = el("div", "tc-avatar-viewport");
    const track = el("div", "tc-avatar-track");
    const next = el("button", "tc-avatar-nav", "›");
    const pageCount = el("p", "tc-avatar-page-count");
    previous.type = next.type = "button";
    previous.setAttribute("aria-label", "Previous avatars");
    next.setAttribute("aria-label", "Next avatars");

    pages.forEach((avatars) => {
      const page = el("div", "tc-avatar-page");
      avatars.forEach((avatar) => {
        const requiredLevel = avatar.noPhoto ? 1 : avatarRequiredLevel(avatar.name);
        const isLevelLocked = requiredLevel > studentLevel(student);
        const isTaken = isAvatarTaken(avatar);
        const isLocked = isLevelLocked || isTaken;
        const option = el("button", `tc-avatar-choice${student.avatarPath === avatar.path ? " is-active" : ""}${isLocked ? " is-locked" : ""}`);
        option.type = "button";
        option.disabled = isLocked;
        option.setAttribute("aria-disabled", isLocked ? "true" : "false");
        if (avatar.noPhoto) {
          option.classList.add("is-no-photo");
          option.append(el("div", "tc-no-photo-frame"), document.createTextNode(avatar.name));
        } else {
          const image = document.createElement("img");
          image.src = resolveAvatarPath(avatar.path);
          image.alt = avatar.name;
          image.classList.toggle("tc-avatar-flipped", shouldFlipAvatar(avatar.path));
          option.append(image, document.createTextNode(avatar.name.toUpperCase()));
        }
        if (isLevelLocked) option.append(el("span", "tc-avatar-req", `REQ. LEV. : ${requiredLevel}`));
        if (isTaken) {
          const marker = el("span", "tc-avatar-taken", "\u{1F6AB}\uFE0E");
          marker.title = "Already used in this classroom";
          marker.setAttribute("aria-label", marker.title);
          option.append(marker);
        }
        option.addEventListener("click", () => {
          if (isLocked || state.activeClassroomId !== classroomId || getStudent(studentId) !== student || isAvatarTaken(avatar)) return;
          student.avatarPath = avatar.path;
          if (guidedTutorial?.step === 11) {
            student.points = 10;
            student.stars = 0;
          }
          save({ changeType: "avatar" });
          const tutorial = guidedTutorial;
          dismissHudOverlay(card.closest(".tc-overlay"), false, () => {
            if (state.activeClassroomId !== classroomId || !getStudent(studentId) || guidedTutorial !== tutorial) return;
            openStudentProfile(studentId, profileOrigin);
            if (guidedTutorial?.step === 11) window.setTimeout(() => setGuidedTutorialStep(12), 0);
          });
        });
        page.append(option);
      });
      track.append(page);
    });

    const showPage = (index) => {
      pageIndex = Math.min(Math.max(index, 0), pages.length - 1);
      track.style.transform = `translateX(-${pageIndex * 100}%)`;
      previous.disabled = pageIndex === 0;
      next.disabled = pageIndex === pages.length - 1;
      pageCount.textContent = `${pageIndex + 1} / ${pages.length}`;
    };
    const bindNavigation = (button, direction) => {
      let handledPointer = false;
      button.addEventListener("pointerup", (event) => {
        handledPointer = true;
        event.preventDefault();
        showPage(pageIndex + direction);
      });
      button.addEventListener("click", (event) => {
        if (handledPointer) {
          handledPointer = false;
          event.preventDefault();
          return;
        }
        showPage(pageIndex + direction);
      });
    };
    bindNavigation(previous, -1);
    bindNavigation(next, 1);

    let swipeStartX = null;
    viewport.addEventListener("pointerdown", (event) => {
      swipeStartX = event.clientX;
    });
    viewport.addEventListener("pointerup", (event) => {
      if (swipeStartX === null) return;
      const distance = event.clientX - swipeStartX;
      swipeStartX = null;
      if (Math.abs(distance) < 34) return;
      showPage(pageIndex + (distance < 0 ? 1 : -1));
    });
    viewport.addEventListener("pointercancel", () => { swipeStartX = null; });

    viewport.append(track);
    picker.append(previous, viewport, next);
    card.append(picker, pageCount);
    showPage(pageIndex);
    if (guidedTutorial?.step === 10) window.setTimeout(() => setGuidedTutorialStep(11), 0);
  }

  function confirmRosterRemoval(studentName, onConfirm) {
    const confirmOverlay = el("div", "tc-confirm-overlay");
    const confirmCard = el("div", "tc-confirm-card");
    const title = el("h3", "", "REMOVE STUDENT?");
    const copy = el("p", "", `${studentName} will be removed from this roster draft.`);
    const actions = el("div", "tc-actions");
    const cancel = el("button", "tc-action", "CANCEL");
    const remove = el("button", "tc-action danger", "REMOVE");
    const close = () => confirmOverlay.remove();
    cancel.type = remove.type = "button";
    cancel.addEventListener("click", close);
    remove.addEventListener("click", () => {
      onConfirm();
      close();
    });
    confirmOverlay.addEventListener("click", (event) => { if (event.target === confirmOverlay) close(); });
    actions.append(cancel, remove);
    confirmCard.append(title, copy, actions);
    confirmOverlay.append(confirmCard);
    document.body.append(confirmOverlay);
  }

  function confirmPointsReset(titleText, copyText, confirmText, onConfirm, secondaryConfirmText = "", onSecondaryConfirm = null) {
    const confirmOverlay = el("div", "tc-confirm-overlay");
    const confirmCard = el("div", "tc-confirm-card");
    const title = el("h3", "", titleText);
    const copy = el("p", "", copyText);
    const actions = el("div", "tc-actions");
    const cancel = el("button", "tc-action", "CANCEL");
    const reset = el("button", "tc-action danger", confirmText);
    const close = () => confirmOverlay.remove();
    cancel.type = reset.type = "button";
    cancel.addEventListener("click", close);
    reset.addEventListener("click", () => {
      onConfirm();
      close();
    });
    if (secondaryConfirmText && typeof onSecondaryConfirm === "function") {
      const resetStars = el("button", "tc-action danger", secondaryConfirmText);
      resetStars.type = "button";
      resetStars.addEventListener("click", () => {
        onSecondaryConfirm();
        close();
      });
      actions.append(cancel, reset, resetStars);
    } else {
      actions.append(cancel, reset);
    }
    confirmOverlay.addEventListener("click", (event) => { if (event.target === confirmOverlay) close(); });
    confirmCard.append(title);
    if (copyText) confirmCard.append(copy);
    confirmCard.append(actions);
    confirmOverlay.append(confirmCard);
    document.body.append(confirmOverlay);
  }

  function openRosterEditor(isCreating) {
    const card = makeOverlay("CLASSROOM", isCreating ? "CREATE ROSTER" : "EDIT ROSTER", "Add your students, edit names directly, then save the class roster on this device.");
    const list = el("div", "tc-editor-list");
    const draft = state.roster.map((student) => ({ ...student }));
    const keyboard = el("div", "tc-roster-keyboard");
    const rosterNames = Array.isArray(window.TeacherRosterNames) ? window.TeacherRosterNames : [];
    let activeInput = null;
    let suggestionPopover = null;

    function hideNameSuggestions() {
      suggestionPopover?.remove();
      suggestionPopover = null;
    }

    function showNameSuggestions(input) {
      hideNameSuggestions();
      const typed = input.value.trim();
      const normalized = typed.toLocaleUpperCase("tr-TR");
      if ([...normalized].length < 2) return;
      const matches = rosterNames
        .filter((name) => name.toLocaleUpperCase("tr-TR").startsWith(normalized) && name.toLocaleUpperCase("tr-TR") !== normalized)
        .slice(0, 4);
      if (!matches.length) return;

      const popover = el("div", "tc-name-suggestions");
      matches.forEach((name) => {
        const suggestion = el("button", "tc-name-suggestion", name);
        suggestion.type = "button";
        suggestion.addEventListener("pointerdown", (event) => event.preventDefault());
        suggestion.addEventListener("click", () => {
          input.value = name;
          input.setSelectionRange(name.length, name.length);
          input.dispatchEvent(new Event("input", { bubbles: true }));
          hideNameSuggestions();
          input.focus();
        });
        popover.append(suggestion);
      });
      document.body.append(popover);
      const rect = input.getBoundingClientRect();
      popover.style.left = `${Math.max(12, rect.left)}px`;
      popover.style.top = `${Math.max(12, rect.top - popover.offsetHeight - 10)}px`;
      suggestionPopover = popover;
    }

    function focusEditorInput(input) {
      if (!input || !input.isConnected) return;
      activeInput = input;
      keyboard.classList.add("is-visible");
      input.focus();
      showNameSuggestions(input);
    }

    function updateEditorInput(input, value) {
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? start;
      input.setRangeText(value, start, end, "end");
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    function pressKeyboardKey(key) {
      if (!activeInput || !activeInput.isConnected) return;
      if (key === "backspace") {
        const start = activeInput.selectionStart ?? activeInput.value.length;
        const end = activeInput.selectionEnd ?? start;
        if (start !== end) updateEditorInput(activeInput, "");
        else if (start > 0) {
          activeInput.setSelectionRange(start - 1, start);
          updateEditorInput(activeInput, "");
        }
        return;
      }
      if (key === "enter") {
        const inputs = [...list.querySelectorAll("input")];
        const next = inputs[inputs.indexOf(activeInput) + 1];
        if (next) focusEditorInput(next);
        else {
          activeInput.blur();
          activeInput = null;
          keyboard.classList.remove("is-visible");
          hideNameSuggestions();
        }
        return;
      }
      updateEditorInput(activeInput, key === "space" ? " " : key);
    }

    function addKeyboardKey(row, label, key, className = "") {
      const button = el("button", `tc-key${className ? ` ${className}` : ""}`, label);
      button.type = "button";
      button.addEventListener("pointerdown", (event) => event.preventDefault());
      button.addEventListener("click", () => pressKeyboardKey(key));
      row.append(button);
    }

    function buildKeyboard() {
      const rows = [
        ["QWERTYUIOPĞÜ", [["⌫", "backspace", "is-wide"]]],
        ["ASDFGHJKLŞİ", [["ENTER", "enter", "is-wide"]]],
        ["ZXCVBNMÖÇ", [[".", "."], ["SPACE", "space", "is-space"]]]
      ];
      rows.forEach(([letters, extras]) => {
        const row = el("div", "tc-keyboard-row");
        [...letters].forEach((letter) => addKeyboardKey(row, letter, letter));
        extras.forEach(([label, key, className]) => addKeyboardKey(row, label, key, className));
        keyboard.append(row);
      });
    }

    function renderRows() {
      hideNameSuggestions();
      list.replaceChildren();
      if (!draft.length) list.append(el("div", "tc-empty", "No students yet. Add the first student below."));
      draft.forEach((student, index) => {
        const row = el("div", "tc-editor-row");
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 32;
        input.value = student.name;
        input.placeholder = "Student name";
        input.addEventListener("input", () => {
          draft[index].name = input.value;
          showNameSuggestions(input);
          refreshGuidedTutorial();
        });
        input.addEventListener("focus", () => {
          activeInput = input;
          keyboard.classList.add("is-visible");
          showNameSuggestions(input);
        });
        input.addEventListener("keydown", (event) => {
          if (event.key !== "Enter") return;
          event.preventDefault();
          hideNameSuggestions();
          if (!input.value.trim()) return;
          const inputs = [...list.querySelectorAll(".tc-editor-row input")];
          const next = inputs[inputs.indexOf(input) + 1];
          if (next) focusEditorInput(next);
          else add.click();
        });
        const remove = el("button", "tc-remove", "×");
        remove.type = "button";
        remove.title = "Remove student";
        remove.addEventListener("click", () => {
          confirmRosterRemoval(student.name || `Student ${index + 1}`, () => {
            if (activeInput === input) activeInput = null;
            draft.splice(index, 1);
            renderRows();
          });
        });
        row.append(input, remove);
        list.append(row);
      });
    }

    const actions = el("div", "tc-actions");
    const add = el("button", "tc-action tc-add-student", "+ ADD STUDENT");
    add.type = "button";
    add.addEventListener("click", () => {
      if (guidedTutorial?.step === 3 && draft.length >= 2) return;
      draft.push({ id: createId(), name: "", points: 0, stars: 0 });
      renderRows();
      focusEditorInput(list.querySelector(".tc-editor-row:last-child input"));
      if (guidedTutorial?.step === 2) setGuidedTutorialStep(3);
      else refreshGuidedTutorial();
    });
    const saveButton = el("button", "tc-action primary tc-save-roster", isCreating ? "CREATE ROSTER" : "SAVE ROSTER");
    saveButton.type = "button";
    saveButton.addEventListener("click", () => {
      const nextRoster = draft
        .map((student) => ({ ...student, name: student.name.trim() }))
        .filter((student) => student.name);
      if (guidedTutorial?.step === 3 && nextRoster.length !== 2) {
        showToast("Write two student names first.");
        return;
      }
      if (!nextRoster.length) {
        showToast("Add at least one student first.");
        return;
      }
      state.roster = nextRoster;
      const rosterIds = new Set(state.roster.map((student) => student.id));
      state.absentStudentIds = state.absentStudentIds.filter((id) => rosterIds.has(id));
      resetRandomPool();
      if (!getStudent()) state.selectedStudentId = "";
      syncSelectedTrigger();
      save();
      updateHud();
      openRoster();
    });
    actions.append(add, saveButton);
    buildKeyboard();
    card.append(list, keyboard, actions);
    renderRows();
    refreshGuidedTutorial();
  }

  function animateRandomPick(card, announcement, availableStudents, student, onComplete) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const simple = hudLite || reduced || availableStudents.length === 1;
    const finalIndex = reduced || availableStudents.length === 1 ? 2 : simple ? 5 : 18;
    const duration = reduced || availableStudents.length === 1 ? 0 : simple ? 650 : 2100;
    const queue = shuffleStudents(availableStudents);
    const entries = Array.from({ length: finalIndex + 3 }, (_, index) => queue[index % queue.length]);
    entries[finalIndex] = student;
    for (let index = finalIndex - 1; index >= 0; index -= 1) {
      if (entries[index].id === entries[index + 1].id) entries[index] = queue.find(entry => entry.id !== entries[index + 1].id) || entries[index];
    }
    for (let index = finalIndex + 1; index < entries.length; index += 1) {
      if (entries[index].id === entries[index - 1].id) entries[index] = queue.find(entry => entry.id !== entries[index - 1].id) || entries[index];
    }
    const viewport = el("div", "tc-roulette" + (simple ? " is-lite" : ""));
    const track = el("div", "tc-roulette-track");
    const tiles = [];
    for (let index = 0; index < finalIndex + 3; index += 1) {
      const entry = entries[index];
      const tile = el("div", "tc-roulette-card");
      const avatarStudent = entry.avatarPath ? entry : { ...entry, avatarPath: new URL("../images/avatar_outline.webp?v=2", controlScriptUrl).href };
      const avatar = createStudentAvatar(avatarStudent, "tc-announcement-avatar", false, false);
      tile.append(avatar, el("strong", "", entry.name));
      track.append(tile);
      tiles.push(tile);
    }
    track.setAttribute("aria-hidden", "true");
    viewport.append(track);
    announcement.append(viewport);
    const fitNames = () => tiles.forEach(tile => {
      const name = tile.querySelector("strong");
      name.style.fontSize = "";
      if (name.scrollWidth > name.clientWidth && name.clientWidth > 0) {
        const size = parseFloat(getComputedStyle(name).fontSize);
        name.style.fontSize = `${size * name.clientWidth / name.scrollWidth * .98}px`;
      }
    });
    document.fonts?.ready.then(() => { if (card.isConnected) fitNames(); });
    const overlay = card.closest(".tc-overlay");
    const started = performance.now();
    let lastIndex = -1;
    let lastWidth = 0;
    function frame(now) {
      if (!card.isConnected || overlay.classList.contains("tc-overlay-closing")) {
        isRandomDrawing = false;
        randomButton.disabled = false;
        randomHistory.drawnIds = randomHistory.drawnIds.filter(id => id !== student.id);
        return;
      }
      const progress = duration ? Math.min(1, (now - started) / duration) : 1;
      const position = 2 + (finalIndex - 2) * (1 - Math.pow(1 - progress, 3));
      const center = simple ? Math.round(position) : position;
      const nearest = Math.round(center);
      if (!simple || nearest !== lastIndex) {
        const width = tiles[0].offsetWidth;
        if (width !== lastWidth) { fitNames(); lastWidth = width; }
        track.style.transform = `translate(${-(center * (width + 16) + width / 2)}px, -50%)`;
        tiles.forEach((tile, index) => {
          const distance = Math.abs(index - center);
          tile.style.opacity = String(simple ? Number(index === nearest) : Math.max(0, 1 - distance * .38));
          tile.style.transform = `scale(${simple ? 1 : Math.max(.72, 1 - distance * .13)})`;
        });
        if (nearest !== lastIndex && !reduced && duration) playRandomBeep(nearest);
        lastIndex = nearest;
      }
      if (progress < 1) { window.requestAnimationFrame(frame); return; }
      viewport.classList.add("is-revealed");
      tiles.forEach((tile, index) => {
        tile.style.opacity = index === finalIndex ? "1" : "0";
        tile.style.transform = index === finalIndex ? (simple ? "scale(1)" : "scale(1.08)") : "scale(.72)";
      });
      tiles[finalIndex].classList.add("is-winner");
      announcement.setAttribute("aria-label", `Chosen student: ${student.name}`);
      announcement.setAttribute("role", "status");
      onComplete();
    }
    window.requestAnimationFrame(frame);
  }

  function openRandomStudent() {
    if (!hasRoster()) {
      openRosterEditor(true);
      return;
    }
    if (isRandomDrawing) return;
    const availableStudents = presentStudents();
    if (!availableStudents.length) {
      showToast("Mark at least one student present first.");
      return;
    }
    const student = drawRandomStudent();
    if (!student) return;
    if (!randomSelectedAudio) {
      randomSelectedAudio = new Audio(new URL("../sounds/randomselected.wav", controlScriptUrl).href);
      randomSelectedAudio.preload = "auto";
    }
    if (state.pointBank > 0) {
      state.pointBank = 0;
      save();
      updateHud();
    }
    isRandomDrawing = true;
    randomButton.disabled = true;
    const card = makeOverlay("", "RANDOM PICK");
    card.classList.add("tc-random-card");
    const announcement = el("div", "tc-announcement");
    const tutorialDraw = guidedTutorial;
    card.append(announcement);
    const closeResult = () => dismissHudOverlay(card.closest(".tc-overlay"));
    animateRandomPick(card, announcement, availableStudents, student, () => {
      isRandomDrawing = false;
      randomButton.disabled = false;
      if (tutorialDraw && guidedTutorial !== tutorialDraw) return;
      state.selectedStudentId = student.id;
      syncSelectedTrigger();
      save();
      updateHud();
      if (guidedTutorial?.step === 7) setGuidedTutorialStep(8);
      randomSelectedAudio.currentTime = 0;
      randomSelectedAudio.play().catch(() => {});
      window.setTimeout(closeResult, 1000);
    });
  }

  let chosenResetTimer = null;
  let isRandomDrawing = false;

  function requestChosenReset() {
    if (!getStudent()) return;
    if (chosenResetTimer) {
      clearTimeout(chosenResetTimer);
      chosenResetTimer = null;
      state.selectedStudentId = "";
      syncSelectedTrigger();
      save();
      floatFrom(chosenBanner, "CHOSEN RESET!", "tc-warning");
      updateHud();
      return;
    }
    chosenBanner.classList.add("is-resetting");
    floatFrom(chosenBanner, "CLICK TO RESET", "tc-notice");
    chosenResetTimer = window.setTimeout(() => {
      chosenResetTimer = null;
      chosenBanner.classList.remove("is-resetting");
    }, 2000);
  }

  function openStudentPicker(action, selectedIds = [], initialAwardAmount = 1) {
    if (!hasRoster()) {
      openRosterEditor(true);
      return;
    }
    const isAward = action === "award";
    const availableStudents = isAward ? presentStudents() : [...state.roster];
    if (!availableStudents.length) {
      showToast("Mark at least one student present first.");
      return;
    }
    const bankAmount = state.pointBank;
    let awardAmount = Math.max(1, bankAmount || initialAwardAmount);
    const multipleAmount = () => isAward && !bankAmount ? awardAmount : 1;
    const awardTitle = (amount = awardAmount) => `AWARD +${amount} POINT${amount === 1 ? "" : "S"}`;
    const card = makeOverlay(isAward ? "POINT POOL" : "POINT CONTROL", isAward ? awardTitle() : "REMOVE 1 POINT", isAward ? (bankAmount ? "Choose the student who should receive the current point pool." : "The pool is empty. Choose one student to award a manual +1 point.") : "", isAward ? plusButton : minusButton);
    const classroomId = state.activeClassroomId;
    const selected = new Set(selectedIds);
    let multiple = selected.size > 0, suppressMultipleClick = false;
    const title = card.querySelector(".tc-title");
    const titleRow = el("div", "tc-award-title-row");
    const controls = el("div", "tc-award-controls");
    title.before(titleRow);
    titleRow.append(title, controls);
    let customize = null;
    if (isAward && !bankAmount) {
      customize = el("button", "tc-award-customize", "+?");
      customize.type = "button";
      customize.title = "Choose point amount";
      customize.addEventListener("click", () => {
        openAwardNumpad(awardAmount, (nextAmount) => {
          awardAmount = nextAmount;
          title.textContent = awardTitle();
        });
      });
    }
    const multi = el("button", `tc-multiple-select${isAward ? "" : " is-remove"}`, "👥 SELECT MULTIPLE");
    multi.type = "button";
    const refreshMultiple = () => {
      multi.setAttribute("aria-pressed", String(multiple));
      multi.textContent = multiple ? "👥 GIVE POINTS" : "👥 SELECT MULTIPLE";
      multi.title = multiple ? `${selected.size} students selected` : "Select multiple students";
      title.textContent = isAward ? awardTitle(multiple ? multipleAmount() : awardAmount) : "REMOVE 1 POINT";
      const copy = card.querySelector(".tc-copy");
      if (copy) {
        copy.style.display = "none";
        copy.textContent = "";
      }
      if (customize) customize.disabled = multiple;
    };
    const applyMultiple = (amount) => {
      applyMultipleStudentPoints([...selected], isAward, amount, classroomId);
      closeOverlays();
    };
    const confirmMultiple = (amount) => {
      if (amount === 1) { applyMultiple(amount); return; }
      const ids = [...selected];
      const names = ids.map(id => getStudent(id)?.name || "");
      const recipients = names.length > 1 ? `${names.slice(0, -1).join(", ")} AND ${names[names.length - 1]}` : names[0];
      const confirmation = makeOverlay("POINT CONTROL", `${isAward ? "+" : "−"}${amount} POINT${amount === 1 ? "" : "S"} TO ${recipients}`, "", isAward ? plusButton : minusButton);
      const actions = el("div", "tc-actions");
      const yes = el("button", "tc-action primary", "CONFIRM");
      const no = el("button", "tc-action", "CANCEL");
      yes.type = no.type = "button";
      yes.addEventListener("click", () => applyMultiple(amount));
      no.addEventListener("click", () => { if (state.activeClassroomId === classroomId) openStudentPicker(action, ids, awardAmount); else closeOverlays(); });
      actions.append(yes, no);
      confirmation.append(actions);
    };
    bindStudentPointHold(multi, null, isAward, value => { suppressMultipleClick = value; },
      { enabled: () => multiple && selected.size > 0, confirm: confirmMultiple });
    multi.addEventListener("click", () => {
      if (suppressMultipleClick) return;
      if (!multiple) { multiple = true; refreshMultiple(); }
      else if (selected.size) applyMultiple(multipleAmount());
      else { multiple = false; refreshMultiple(); }
    });
    const pictures = el("button", "tc-multiple-select");
    pictures.type = "button";
    let showPictures = true;
    try { showPictures = localStorage.getItem(PICKER_PICTURES_KEY) !== "0"; }
    catch { /* Keep pictures visible when local storage is unavailable. */ }
    const updatePicturesButton = () => {
      pictures.textContent = showPictures ? "HIDE PICTURES" : "SHOW PICTURES";
    };
    updatePicturesButton();
    if (customize) controls.append(customize);
    controls.append(pictures, multi);
    refreshMultiple();
    const grid = el("div", "tc-student-grid tc-point-picker-grid");
    const students = sortStudentsByScoreAndName(availableStudents).sort((a, b) => Number(isAbsent(a)) - Number(isAbsent(b)));
    const renderStudent = (student) => {
      const item = studentCard(student, { ranked: true, showAvatar: showPictures });
      let suppressClick = false;
      bindStudentPointHold(item, student, isAward, (suppressed) => { suppressClick = suppressed; }, {
        enabled: () => multiple ? selected.size > 0 : (!isAward || !bankAmount),
        get confirm() { return multiple ? confirmMultiple : undefined; }
      });
      const mark = el("span", "tc-multi-mark", isAward ? "✓" : "☠\uFE0E");
      mark.setAttribute("aria-hidden", "true");
      const refreshSelection = () => {
        const checked = selected.has(student.id);
        mark.hidden = !checked;
        item.classList.toggle("tc-multi-selected", checked);
        item.classList.toggle("tc-multi-remove", checked && !isAward);
        item.setAttribute("aria-pressed", String(checked));
      };
      item.append(mark);
      refreshSelection();
      item.addEventListener("click", () => {
        if (suppressClick) return;
        if (multiple) {
          if (selected.has(student.id)) selected.delete(student.id); else selected.add(student.id);
          refreshSelection();
          refreshMultiple();
          return;
        }
        if (isAward) awardPoints(student.id, !bankAmount ? awardAmount : undefined, item.getBoundingClientRect());
        else removePoint(student.id);
        closeOverlays();
      });
      return item;
    };
    const renderStudents = () => {
      grid.replaceChildren(...students.map(renderStudent));
      requestAnimationFrame(() => fitRosterCardText(card));
    };
    pictures.addEventListener("click", () => {
      showPictures = !showPictures;
      try { localStorage.setItem(PICKER_PICTURES_KEY, showPictures ? "1" : "0"); }
      catch { /* Apply the choice to this picker even if it cannot be saved. */ }
      cancelStudentPointHold?.();
      updatePicturesButton();
      stopCardEntrances.get(card)?.();
      renderStudents();
    });
    renderStudents();
    card.append(grid);
    animateRosterRows(card);
    if (guidedTutorial?.step === 6) window.setTimeout(refreshGuidedTutorial, 0);
  }

  function applyMultipleStudentPoints(ids, isAward, amount, classroomId) {
    const students = ids.map(id => getStudent(id));
    if (state.activeClassroomId !== classroomId || !students.length || students.some(student => !student || (isAward && isAbsent(student)))) {
      showToast("Classroom or attendance changed. Please try again.");
      return;
    }
    const points = Math.min(isAward ? 99 : 10, Math.max(1, Math.floor(Number(amount) || 1)));
    const levels = students.map(studentLevel);
    students.forEach(student => { student.points += isAward ? points : -points; });
    save({ deferPoints: true, changeType: isAward ? "increment" : "decrement" });
    updateHud();
    playTeacherFeedback(isAward);
    const names = students.map(student => student.name);
    const recipients = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
    showToast(`${isAward ? "+" : "−"}${points} to ${recipients}`, isAward ? "success" : "danger");
    if (isAward) students.forEach((student, index) => notifyLevelUp(student, levels[index]));
  }

  function bindStudentPointHold(item, student, defaultIsAward, suppressClick, options = {}) {
    let isAward = defaultIsAward;
    let holdClassroomId;
    let pending = 0, repeating = 0, limitTimer = 0, amount = 1, pointerId = null, counter = null, tone = null, gain = null;
    const cleanup = () => {
      clearTimeout(pending);
      clearInterval(repeating);
      clearTimeout(limitTimer);
      pending = repeating = limitTimer = 0;
      counter?.remove();
      counter = null;
      if (tone) { tone.stop(); tone.disconnect(); gain.disconnect(); tone = gain = null; }
      const capturedPointer = pointerId;
      pointerId = null;
      if (capturedPointer !== null && item.hasPointerCapture(capturedPointer)) item.releasePointerCapture(capturedPointer);
      if (cancelStudentPointHold === cleanup) cancelStudentPointHold = null;
    };
    const renderAmount = () => {
      counter.textContent = `${isAward ? "+" : "−"}${amount}`;
      if (tone) tone.frequency.setTargetAtTime(isAward ? 180 * Math.pow(1600 / 180, (amount - 1) / 9) : 1400 * Math.pow(100 / 1400, (amount - 1) / 9), studentPointHoldAudioContext.currentTime, .08);
    };
    item.style.touchAction = options.standalone ? "pan-y" : "none";
    item.style.userSelect = "none";
    item.addEventListener("contextmenu", event => event.preventDefault());
    item.addEventListener("pointerdown", (event) => {
      const rightHold = options.standalone && event.pointerType === "mouse" && event.button === 2;
      if ((event.button !== 0 && !rightHold) || event.isPrimary === false || pointerId !== null || options.enabled?.() === false) return;
      suppressClick(false);
      cancelStudentPointHold?.();
      isAward = rightHold ? false : defaultIsAward;
      holdClassroomId = state.activeClassroomId;
      pointerId = event.pointerId;
      item.setPointerCapture(pointerId);
      cancelStudentPointHold = cleanup;
      amount = 1;
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          studentPointHoldAudioContext ||= new AudioContextClass();
          studentPointHoldAudioContext.resume().catch(() => {});
        }
      } catch { /* holding still works without audio */ }
      pending = window.setTimeout(() => {
        counter = el("div", "tc-point-hold-counter");
        counter.style.left = `${Math.max(65, Math.min(window.innerWidth - 65, event.clientX))}px`;
        counter.style.top = `${Math.max(100, event.clientY)}px`;
        counter.style.color = isAward ? "#31d158" : "#ff453a";
        document.body.append(counter);
        if (studentPointHoldAudioContext) {
          tone = studentPointHoldAudioContext.createOscillator();
          gain = studentPointHoldAudioContext.createGain();
          gain.gain.value = .06;
          tone.connect(gain);
          gain.connect(studentPointHoldAudioContext.destination);
          renderAmount();
          tone.start();
        } else renderAmount();
        repeating = window.setInterval(() => {
          amount += 1;
          renderAmount();
          if (amount === 10) {
            clearInterval(repeating);
            repeating = 0;
            limitTimer = window.setTimeout(() => {
              suppressClick(true);
              cleanup();
            }, 2000);
          }
        }, 250 / (.75 * .75 * .75));
      }, 450);
    });
    item.addEventListener("pointerup", (event) => {
      if (event.pointerId !== pointerId) return;
      const held = Boolean(counter), chosenAmount = amount;
      cleanup();
      if (!held) return;
      event.preventDefault();
      suppressClick(true);
      if (options.confirm) { options.confirm(chosenAmount); return; }
      const originRect = item.getBoundingClientRect();
      const classroomId = options.standalone ? holdClassroomId : state.activeClassroomId;
      const applyHeldPoints = () => {
        if (options.standalone) applyMultipleStudentPoints([student.id], isAward, chosenAmount, classroomId);
        else if (state.activeClassroomId === classroomId && getStudent(student.id) && (!isAward || !isAbsent(getStudent(student.id))) && (!isAward || !state.pointBank)) {
          if (isAward) awardPoints(student.id, chosenAmount, originRect);
          else removePoint(student.id, chosenAmount);
        } else showToast("Classroom or point pool changed. Please try again.");
        closeOverlays();
      };
      if (chosenAmount === 1) {
        if (options.standalone && !isAward) {
          const preventReleaseMenu = menuEvent => {
            if (menuEvent.clientX === event.clientX && menuEvent.clientY === event.clientY) menuEvent.preventDefault();
          };
          document.addEventListener("contextmenu", preventReleaseMenu, true);
          window.setTimeout(() => document.removeEventListener("contextmenu", preventReleaseMenu, true), 100);
        }
        applyHeldPoints();
        return;
      }
      const card = makeOverlay("POINT CONTROL", `${isAward ? "+" : "−"}${chosenAmount} POINTS TO ${student.name}`, "", isAward ? plusButton : minusButton);
      if (options.standalone && !isAward) {
        card.closest(".tc-overlay").addEventListener("contextmenu", event => event.preventDefault());
      }
      const actions = el("div", "tc-actions");
      const yes = el("button", "tc-action primary", "CONFIRM");
      const no = el("button", "tc-action", "CANCEL");
      yes.type = no.type = "button";
      yes.addEventListener("click", applyHeldPoints);
      no.addEventListener("click", () => options.standalone ? closeOverlays() : openStudentPicker(isAward ? "award" : "remove"));
      actions.append(yes, no);
      card.append(actions);
    });
    item.addEventListener("pointercancel", () => { suppressClick(true); cleanup(); });
    item.addEventListener("lostpointercapture", () => { if (pointerId !== null) cleanup(); });
  }

  function openAwardNumpad(initialAmount, onConfirm) {
    const overlay = el("div", "tc-confirm-overlay tc-numpad-overlay tc-overlay-fade");
    const dialog = el("div", "tc-confirm-card tc-numpad-card");
    const title = el("h3", "", "SET AWARD POINTS");
    const copy = el("p", "", "Enter the number of points to give to the selected student.");
    const display = el("div", "tc-numpad-display", String(initialAmount));
    const keypad = el("div", "tc-numpad-grid");
    let value = String(initialAmount);
    let replaceOnDigit = true;
    const updateDisplay = () => { display.textContent = value || "0"; };
    const addDigit = (digit) => {
      value = replaceOnDigit ? digit : `${value}${digit}`;
      value = value.slice(0, 2);
      replaceOnDigit = false;
      updateDisplay();
    };
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "CLEAR", "0", "BACK"].forEach((label) => {
      const key = el("button", "tc-numpad-key", label);
      key.type = "button";
      key.addEventListener("click", () => {
        if (label === "CLEAR") {
          value = "";
          replaceOnDigit = false;
        } else if (label === "BACK") {
          value = value.slice(0, -1);
          replaceOnDigit = false;
        } else {
          addDigit(label);
          return;
        }
        updateDisplay();
      });
      keypad.append(key);
    });
    const actions = el("div", "tc-actions");
    const cancel = el("button", "tc-action", "CANCEL");
    const apply = el("button", "tc-action primary", "APPLY");
    cancel.type = apply.type = "button";
    const close = () => dismissHudOverlay(overlay);
    cancel.addEventListener("click", close);
    apply.addEventListener("click", () => {
      const amount = Math.min(99, Math.max(1, Number(value) || 1));
      onConfirm(amount);
      close();
    });
    actions.append(cancel, apply);
    dialog.append(title, copy, display, keypad, actions);
    overlay.append(dialog);
    overlay.addEventListener("click", (event) => { if (event.target === overlay) close(); });
    document.body.append(overlay);
    animateHudOverlayFromButton(overlay, dialog, plusButton);
  }

  function showPointAwardSpotlight(student, previousPoints, awarded, originRect) {
    if (guidedTutorial || levelUpOverlayOpen) return;
    pointAwardSpotlight?.remove();
    const overlay = el("div", "tc-point-award-spotlight");
    overlay.setAttribute("aria-hidden", "true");
    overlay.inert = true;
    const motion = el("div", "tc-point-award-motion");
    const cardOptions = { static: true, ranked: true, showAvatar: true, showLevelProgress: true };
    const animate = motion.animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updatedCard = studentCard(student, cardOptions);
    const card = animate ? studentCard({ ...student, points: previousPoints }, cardOptions) : updatedCard;
    const amount = el("span", "tc-point-award-amount", `+${awarded}`);
    motion.append(card);
    motion.append(amount);
    overlay.append(motion);
    const fullscreen = document.fullscreenElement || document.webkitFullscreenElement;
    const container = fullscreen?.contains(plusButton) && document.body.contains(fullscreen)
      ? fullscreen
      : document.body;
    container.append(overlay);
    pointAwardSpotlight = overlay;
    const finish = () => {
      overlay.remove();
      if (pointAwardSpotlight !== overlay) return;
      pointAwardSpotlight = null;
      showNextLevelUpOverlay();
    };
    if (!animate) {
      window.setTimeout(finish, 1000);
      return;
    }
    const pointFlightMs = 680;
    const scorePulseMs = 230;
    const holdMs = pointFlightMs + scorePulseMs + 300;
    const score = card.querySelector(".tc-student-details > span").getBoundingClientRect();
    const amountRect = amount.getBoundingClientRect();
    const x = score.left + score.width / 2 - amountRect.left - amountRect.width / 2;
    const y = score.top + score.height / 2 - amountRect.top - amountRect.height / 2;
    amount.animate([
      { opacity: 0, transform: "perspective(280px) rotateY(0turn) scale(.78)", offset: 0 },
      { opacity: 1, offset: .13 },
      { opacity: 1, transform: "perspective(280px) rotateY(1turn) scale(1)", offset: .62, easing: "cubic-bezier(.4, 0, .8, .25)" },
      { opacity: 0, transform: `translate(${x}px, ${y}px) scale(.25)`, offset: 1 }
    ], { duration: pointFlightMs, delay: hudOverlayOpenMs, fill: "both" }).finished.then(() => {
      if (!overlay.isConnected) return;
      amount.remove();
      card.replaceWith(updatedCard);
      updatedCard.querySelector(".tc-student-details > span").animate(
        [{ scale: 1 }, { scale: 1.24, color: "#fff5ad" }, { scale: 1 }], { duration: scorePulseMs, easing: "ease-out" }
      );
    }, () => {});
    const center = "translate(0, 0) scale(1)";
    const destination = hudButtonTransform(motion, plusButton) || "scale(.16)";
    const origin = originRect
      ? hudButtonTransform(motion, { getBoundingClientRect: () => originRect }, .85) || destination
      : destination;
    const duration = hudOverlayOpenMs + holdMs + hudOverlayCloseMs;
    motion.animate([
      { transform: origin, opacity: .45, offset: 0, easing: "cubic-bezier(.2, .7, .25, 1)" },
      { transform: center, opacity: 1, offset: hudOverlayOpenMs / duration },
      { transform: center, opacity: 1, offset: (hudOverlayOpenMs + holdMs) / duration, easing: "cubic-bezier(.55, 0, .8, .4)" },
      { transform: destination, opacity: 0, offset: 1 }
    ], { duration, fill: "both" }).finished.then(finish, finish);
  }

  function awardPoints(studentId, manualAmount, originRect) {
    const student = getStudent(studentId);
    if (!student) return;
    const awarded = state.pointBank > 0 ? state.pointBank : Math.max(1, Number(manualAmount) || 1);
    const previousLevel = studentLevel(student);
    const previousPoints = student.points;
    student.points += awarded;
    state.pointBank = 0;
    state.selectedStudentId = "";
    syncSelectedTrigger();
    save({ deferPoints: true, changeType: "increment" });
    updateHud();
    playTeacherFeedback(true);
    showPointAwardSpotlight(student, previousPoints, awarded, originRect);
    notifyLevelUp(student, previousLevel);
    if (guidedTutorial?.step === 6) window.setTimeout(() => setGuidedTutorialStep(7), 0);
  }

  function awardCurrentPool() {
    if (!hasRoster()) {
      openRosterEditor(true);
      return;
    }
    const chosen = getStudent();
    if (chosen && !isAbsent(chosen)) {
      awardPoints(chosen.id);
      return;
    }
    if (chosen) {
      state.selectedStudentId = "";
      syncSelectedTrigger();
      save();
      updateHud();
    }
    openStudentPicker("award");
  }

  function removePoint(studentId, manualAmount = 1) {
    const student = getStudent(studentId);
    if (!student) return;
    const removed = Math.min(99, Math.max(1, Math.floor(Number(manualAmount) || 1)));
    student.points -= removed;
    save({ deferPoints: true, changeType: "decrement" });
    updateHud();
    playTeacherFeedback(false);
    showToast(`-${removed} point${removed === 1 ? "" : "s"} from ${student.name}.`, "danger");
  }

  function onCorrect() {
    if (!hasRoster()) return;
    state.pointBank += 1;
    save({ deferPoints: true });
    updateHud();
    floatPoint();
  }

  function normalizeStudentName(name) {
    return String(name || "").trim().replace(/\s+/g, " ").toLocaleUpperCase("tr-TR");
  }

  function awardStars(starAwards, classroomId = "") {
    if (!Array.isArray(starAwards) || !starAwards.length) {
      return { awarded: [], missing: [] };
    }

    commitActiveClassroom();
    const classroom = state.classrooms.find((item) => item.id === classroomId) || activeClassroom();
    if (!classroom) return { awarded: [], missing: [] };

    const studentsByName = new Map(
      (classroom.roster || []).map((student) => [normalizeStudentName(student.name), student])
    );
    const totalsByName = new Map();
    starAwards.forEach((award) => {
      const name = String(award?.name || "").trim();
      const stars = Math.max(0, Math.floor(Number(award?.stars) || 0));
      const key = normalizeStudentName(name);
      if (!key || !stars) return;
      const existing = totalsByName.get(key) || { name, stars: 0 };
      existing.stars += stars;
      totalsByName.set(key, existing);
    });

    const awarded = [];
    const missing = [];
    totalsByName.forEach(({ name, stars }, key) => {
      const student = studentsByName.get(key);
      if (!student) {
        missing.push(name);
        return;
      }
      const previousLevel = studentLevel(student);
      student.stars = Math.max(0, Math.floor(Number(student.stars) || 0)) + stars;
      awarded.push({ name: student.name, stars });
      notifyLevelUp(student, previousLevel);
    });

    if (!awarded.length) return { awarded, missing };

    if (classroom.id === state.activeClassroomId) state.roster = classroom.roster;
    save();
    updateHud();

    const awardGroups = new Map();
    awarded.forEach(({ name, stars }) => {
      const names = awardGroups.get(stars) || [];
      names.push(name);
      awardGroups.set(stars, names);
    });
    [...awardGroups.entries()]
      .sort(([first], [second]) => second - first)
      .forEach(([stars, names]) => {
        const label = stars === 1 ? "star" : "stars";
        showToast(`⭐ ${names.join(", ")} awarded ${stars} ${label}.`, "success");
      });

    return { awarded, missing };
  }

  function awardFinalPoints(pointAwards, classroomId = "") {
    if (window.ClassQuickPlay?.isActive()) return { awarded: [], missing: [] };
    if (!Array.isArray(pointAwards) || !pointAwards.length) {
      return { awarded: [], missing: [] };
    }

    commitActiveClassroom();
    const classroom = state.classrooms.find((item) => item.id === classroomId) || activeClassroom();
    if (!classroom) return { awarded: [], missing: [] };

    const studentsByName = new Map(
      (classroom.roster || []).map((student) => [normalizeStudentName(student.name), student])
    );
    const totalsByName = new Map();
    pointAwards.forEach((award) => {
      const name = String(award?.name || "").trim();
      const points = Math.max(0, Math.floor(Number(award?.points) || 0));
      const key = normalizeStudentName(name);
      if (!key || !points) return;
      const existing = totalsByName.get(key) || { name, points: 0 };
      existing.points += points;
      totalsByName.set(key, existing);
    });

    const awarded = [];
    const missing = [];
    totalsByName.forEach(({ name, points }, key) => {
      const student = studentsByName.get(key);
      if (!student) {
        missing.push(name);
        return;
      }
      const previousLevel = studentLevel(student);
      student.points = Number(student.points) || 0;
      student.points += points;
      awarded.push({ name: student.name, points });
      notifyLevelUp(student, previousLevel);
    });

    if (!awarded.length) return { awarded, missing };

    if (classroom.id === state.activeClassroomId) state.roster = classroom.roster;
    save({ deferPoints: true });
    window.TeacherCloud?.syncPointsNow?.(state)?.catch?.(() => {});
    updateHud();

    // Track this classroom game only after final points reached the roster.
    try {
      const unit = Number(new URLSearchParams(location.search).get("practiceUnit"));
      const game = location.pathname.split("/").slice(-2).join("/");
      const trackedGames = ["word_master/index.html", "word_rivals/index.html", "word_crush/gemoria_class.html", "word_contest/index.html", "word_hunt/clash_of_words_v7.HTML", "word_reveal/index.html", "olivias_movie_memories/index.html", "team_challengers/index.html", "word_tug_of_war/index.html"];
      if (Number.isInteger(unit) && unit >= 1 && unit <= 10 && trackedGames.includes(game)) {
        const key = "adilhocaTeacherGameProgressV1";
        const progress = JSON.parse(localStorage.getItem(key) || "{}") || {};
        progress.completed ||= {};
        progress.completed[unit] ||= {};
        progress.completed[unit][game] = Date.now();
        localStorage.setItem(key, JSON.stringify(progress));
      }
    } catch (_) {}

    const awardGroups = new Map();
    awarded.forEach(({ name, points }) => {
      const names = awardGroups.get(points) || [];
      names.push(name);
      awardGroups.set(points, names);
    });
    [...awardGroups.entries()]
      .sort(([first], [second]) => second - first)
      .forEach(([points, names]) => {
        showToast(`${names.join(", ")} awarded +${points} points.`, "success");
      });

    return { awarded, missing };
  }

  let poolResetTimer = null;

  function requestPoolReset() {
    if (!hasRoster() || state.pointBank < 1) return;
    if (poolResetTimer) {
      clearTimeout(poolResetTimer);
      poolResetTimer = null;
      state.pointBank = 0;
      save({ deferPoints: true });
      bank.classList.remove("is-resetting");
      updateHud();
      floatFrom(bank, "POOL RESET!", "tc-warning");
      return;
    }
    bank.classList.add("is-resetting");
    floatFrom(bank, "RESET POOL?", "tc-notice");
    poolResetTimer = window.setTimeout(() => {
      poolResetTimer = null;
      bank.classList.remove("is-resetting");
    }, 1000);
  }

  function updateHudControlsWidth() {
    controls.style.width = "max-content";
    hud.style.setProperty("--tc-controls-width", `${controls.scrollWidth}px`);
    controls.style.width = "";
  }

  const hudSizes = ["full", "compact", "hidden"];
  let hudSize = 0;
  try {
    const savedSize = hudSizes.indexOf(localStorage.getItem(HUD_SIZE_KEY));
    if (savedSize >= 0) hudSize = savedSize;
  } catch { /* Use full controls when local storage is unavailable. */ }

  function setHudSize(size) {
    hudSize = size;
    hud.classList.toggle("is-compact", hudSize > 0);
    hud.classList.toggle("is-collapsed", hudSize === 2);
    controls.inert = hudSize === 2;
    expandButton.hidden = hudSize !== 1;
    collapseButton.textContent = hudSize === 2 ? ">" : "<";
    collapseButton.title = hudSize === 0 ? "Compact teacher controls"
      : hudSize === 2 ? "Show compact teacher controls" : "Hide teacher controls";
    collapseButton.setAttribute("aria-label", collapseButton.title);
    collapseButton.setAttribute("aria-expanded", String(hudSize < 2));
    try { localStorage.setItem(HUD_SIZE_KEY, hudSizes[hudSize]); }
    catch { /* Keep the current size when local storage is unavailable. */ }
    updateHudControlsWidth();
  }

  load();
  state.attendanceDate ||= todayKey();

  const hud = el("div", "tc-hud no-roster");
  const rosterButton = el("button", "tc-roster", "👥");
  const randomButton = el("button", "tc-random", "🎲");
  const plusButton = el("button", "tc-plus", "➕");
  const minusButton = el("button", "tc-minus", "➖");
  const helpButton = el("button", "tc-help", "?");
  const accountButton = el("button", "tc-account", "☁");
  const syncButton = el("button", "tc-sync", "🔄");
  const timerControl = el("div", "tc-timer");
  hudTimerDisplayButton = el("button", "tc-timer-display", formatHudTimer(hudTimerRemainingSeconds));
  hudTimerPlayButton = el("button", "tc-timer-play", "▶");
  const whistleButton = el("button", "tc-whistle", "📣");
  const radialLockButton = el("button", "tc-radial-lock", "🔓");
  radialLockButton.type = "button";
  radialLockButton.setAttribute("data-radial-lock", "");
  radialLockButton.setAttribute("aria-label", "Lock radial menu");
  radialLockButton.setAttribute("aria-pressed", "false");
  radialLockButton.title = "Lock radial menu";
  radialLockButton.dataset.hudLite = String(hudLite);
  radialLockButton.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    hudLite = !hudLite;
    radialLockButton.dataset.hudLite = String(hudLite);
    try { sessionStorage.setItem(HUD_LITE_KEY, hudLite ? "1" : "0"); }
    catch { /* Keep the current page in the chosen mode. */ }
    if (hudLite) document.querySelectorAll(".tc-overlay > .tc-card").forEach(card => stopCardEntrances.get(card)?.());
  });
  const mainMenuButton = el("button", "tc-main-menu", "🏠");
  mainMenuButton.type = "button";
  mainMenuButton.title = "Main Menu";
  mainMenuButton.setAttribute("aria-label", "Main Menu");
  mainMenuButton.addEventListener("click", () => {
    const card = makeOverlay("MAIN MENU", "RETURN TO THE HOME PAGE?");
    const actions = el("div", "tc-actions");
    const confirm = el("button", "tc-action primary", "CONFIRM");
    const cancel = el("button", "tc-action", "CANCEL");
    confirm.type = cancel.type = "button";
    cancel.addEventListener("click", closeOverlays);
    confirm.addEventListener("click", async () => {
      confirm.disabled = true;
      const mainMenuUrl = new URL("../index.html", controlScriptUrl).href;
      const topWindow = window.top || window;
      try {
        const fullscreenDocument = topWindow.document;
        if (fullscreenDocument.fullscreenElement) await fullscreenDocument.exitFullscreen();
        else if (fullscreenDocument.webkitFullscreenElement) await fullscreenDocument.webkitExitFullscreen();
      } catch { /* Embedded local pages may be unable to read the parent document. */ }
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else if (document.webkitFullscreenElement) await document.webkitExitFullscreen();
      } catch { /* Navigating away also ends fullscreen. */ }
      try { topWindow.location.href = mainMenuUrl; }
      catch { window.location.href = mainMenuUrl; }
    });
    actions.append(confirm, cancel);
    card.append(actions);
    if (document.fullscreenElement && !document.fullscreenElement.contains(card)) {
      document.fullscreenElement.append(card.closest(".tc-overlay"));
    }
  });
  let whistleCount = 0;
  const whistleCountBadge = el("span", "tc-whistle-count");
  whistleCountBadge.hidden = true;
  whistleButton.append(whistleCountBadge);
  function updateWhistleBadge() {
    whistleCountBadge.hidden = whistleCount === 0;
    whistleCountBadge.textContent = String(whistleCount);
    whistleCountBadge.style.color = whistleCount >= 5 ? "#ff453a" : whistleCount === 4 ? "#ff9f0a" : whistleCount === 3 ? "#ffd60a" : whistleCount > 0 ? "#31d158" : "#a9bce9";
  }
  const bank = el("button", "tc-bank", "ROSTER");
  const chosenBanner = el("button", "tc-chosen-banner");
  const controls = el("div", "tc-hud-controls");
  const collapseButton = el("button", "tc-collapse", "<");
  const expandButton = el("button", "tc-collapse tc-expand", ">");
  expandButton.type = "button";
  expandButton.hidden = true;
  expandButton.title = "Expand teacher controls";
  expandButton.setAttribute("aria-label", expandButton.title);
  expandButton.addEventListener("click", () => setHudSize(0));
  rosterButton.type = randomButton.type = plusButton.type = minusButton.type = helpButton.type = accountButton.type = syncButton.type = hudTimerDisplayButton.type = hudTimerPlayButton.type = whistleButton.type = chosenBanner.type = collapseButton.type = "button";
  bank.type = "button";
  rosterButton.title = "Class roster";
  plusButton.title = "Award the point pool";
  minusButton.title = "Remove one point";
  helpButton.title = "Explain HUD buttons";
  helpButton.setAttribute("aria-label", helpButton.title);
  helpButton.setAttribute("aria-pressed", "false");
  accountButton.title = "Cloud account";
  syncButton.title = "Sync now";
  syncButton.setAttribute("aria-label", syncButton.title);
  hudTimerDisplayButton.addEventListener("click", openHudTimerPresets);
  hudTimerDisplayButton.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    stopHudTimerCountdown(true);
    if (hudTimerAlarmActive) stopHudTimerAlarm();
    if ((hudTimerLiveDisplay && document.contains(hudTimerLiveDisplay)) || document.querySelector(".tc-timer-time-up")) closeOverlays();
  });
  hudTimerPlayButton.addEventListener("click", () => {
    if (hudTimerInterval) pauseHudTimer();
    else startHudTimer();
  });
  whistleButton.title = "Whistle — press briefly or hold";
  whistleButton.setAttribute("aria-label", whistleButton.title);
  rosterButton.addEventListener("click", openRosterOverlay);
  if (!standaloneRoster) rosterButton.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    window.open(new URL("../teacher-hud/index.html", controlScriptUrl).href, "_blank", "noopener");
  });
  randomButton.addEventListener("click", openRandomStudent);
  plusButton.addEventListener("click", awardCurrentPool);
  minusButton.addEventListener("click", () => openStudentPicker("remove"));
  helpButton.addEventListener("click", openHelp);
  accountButton.addEventListener("click", openAccount);
  syncButton.addEventListener("click", async () => {
    if (!window.TeacherCloud?.isSignedIn?.() || syncButton.disabled) return;
    syncShortcutCooldownUntil = Date.now() + 5000;
    syncButton.disabled = true;
    try { await window.TeacherCloud.syncNow(); showToast("Classroom synced."); }
    catch (error) { showToast(error.message || "Sync failed."); }
    updateHud();
    window.setTimeout(updateHud, Math.max(0, syncShortcutCooldownUntil - Date.now()));
  });
  whistleButton.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.isPrimary === false) return;
    event.preventDefault();
    whistleCount = (whistleCount + 1) % 10;
    whistleCountBadge.hidden = false;
    whistleCountBadge.textContent = String(whistleCount);
    whistleCountBadge.style.color = whistleCount >= 5 ? "#ff453a" : whistleCount === 4 ? "#ff9f0a" : whistleCount === 3 ? "#ffd60a" : whistleCount > 0 ? "#31d158" : "#a9bce9";
    startWhistle();
  });
  whistleButton.addEventListener("pointerup", stopWhistle);
  whistleButton.addEventListener("pointercancel", stopWhistle);
  whistleButton.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    whistleCount = Math.max(0, whistleCount - 1);
    updateWhistleBadge();
  });
  bank.addEventListener("click", requestPoolReset);
  chosenBanner.addEventListener("click", requestChosenReset);
  collapseButton.title = "Compact teacher controls";
  collapseButton.setAttribute("aria-label", collapseButton.title);
  collapseButton.addEventListener("click", () => setHudSize(hudSize === 2 ? 1 : hudSize + 1));
  timerControl.append(hudTimerDisplayButton, hudTimerPlayButton);
  [accountButton, timerControl, radialLockButton, helpButton, mainMenuButton].forEach(control => control.classList.add("tc-full-only"));
  controls.append(rosterButton, randomButton, plusButton, minusButton, syncButton, whistleButton, accountButton, timerControl, radialLockButton, helpButton, mainMenuButton, bank);
  hud.append(chosenBanner, controls, collapseButton, expandButton);
  const buttonHelp = new Map([
    [rosterButton, ["CLASS ROSTER", "Open your class roster to view student scores, profiles, and attendance."]],
    [randomButton, ["RANDOM STUDENT", "Pick a random student from the students marked present."]],
    [plusButton, ["AWARD POINTS", "Give the available pool points to a student. When the pool is empty, you can award points manually."]],
    [minusButton, ["REMOVE POINTS", "Choose a student to subtract points from. Hold a student’s card to choose how many points to remove."]],
    [accountButton, ["CLOUD ACCOUNT", "Sign in or manage your cloud account to sync classrooms."]],
    [syncButton, ["SYNC CLASSROOM", "Sync your locked classroom with the cloud when you’re signed in."]],
    [hudTimerDisplayButton, ["TIMER", "Click the time to open timer settings, or right-click it to reset the countdown."]],
    [hudTimerPlayButton, ["START OR PAUSE TIMER", "Start, pause, or resume the countdown."]],
    [whistleButton, ["WHISTLE", "Press to sound the whistle. Hold it to open the countdown, or right-click to reduce the whistle count."]],
    [radialLockButton, ["RADIAL MENU LOCK", "Click to lock or unlock the radial menu. Right-click to toggle LITE mode and reduce visual effects."]],
    [mainMenuButton, ["MAIN MENU", "Return to the site’s home page after confirming."]],
    [bank, ["POINT POOL", "See how many points are available to award. Click to clear the pool after confirming."]],
    [chosenBanner, ["SELECTED STUDENT", "See who is selected. Click to clear the selection after confirming."]],
    [expandButton, ["EXPAND HUD", "Return from compact controls to full controls."]],
    [collapseButton, ["COLLAPSE HUD", "Switch from full controls to compact controls, then hide them. When hidden, click to show compact controls."]]
  ]);
  for (const type of ["pointerdown", "contextmenu", "click"]) {
    hud.addEventListener(type, (event) => {
      if (!buttonHelpActive) return;
      const button = event.target.closest?.("button");
      const copy = buttonHelp.get(button);
      if (!copy) return;
      event.stopImmediatePropagation();
      if (type === "pointerdown") return;
      event.preventDefault();
      const card = makeOverlay("HUD HELP", ...copy, button);
      if (document.fullscreenElement && !document.fullscreenElement.contains(card)) {
        document.fullscreenElement.append(card.closest(".tc-overlay"));
      }
    }, true);
  }
  document.body.append(hud);
  setHudSize(hudSize);
  document.dispatchEvent(new Event("classroom-radial-control-ready"));
  window.addEventListener("resize", updateHudControlsWidth);
  document.fonts?.addEventListener("loadingdone", updateHudControlsWidth);

  requestAnimationFrame(() => {
    updateHudControlsWidth();
    if (window.__oliviaQuickPlayTutorialPending === true) return;
    if (!hasPasswordRecovery) showTutorialPrompt();
    showLiteTip();
  });

  window.TeacherControl = {
    onCorrect,
    awardStars,
    awardFinalPoints,
    getStudentLevel: (student) => studentLevel(student),
    getSelectedStudent: () => getStudent()?.name || "",
    getRoster: () => state.roster.map((student) => ({ ...student })),
    getPointBank: () => state.pointBank,
    getClassrooms: () => {
      commitActiveClassroom();
      return state.classrooms.map((classroom) => ({
        id: classroom.id,
        name: classroom.name,
        attendanceDate: classroom.attendanceDate || "",
        absentStudentIds: [...(classroom.absentStudentIds || [])],
        roster: (classroom.roster || []).map((student) => ({ ...student }))
      }));
    },
    getActiveClassroomId: () => state.activeClassroomId,
    isActiveClassroomLocked: hasSyncClassroomLock,
    setActiveClassroom,
    isCloudClassroomsEnabled: cloudClassroomsEnabled
  };

  syncSelectedTrigger();
  updateHud();
  const hasPasswordRecovery = passwordResetRequested && window.TeacherCloud?.capturePasswordRecovery?.();
  window.TeacherCloud?.initialize?.({
    getState: () => {
      if (guidedTutorial) return guidedTutorial.cloudSnapshot || guidedTutorial.restoreState;
      commitActiveClassroom();
      return state;
    },
    applyState: applyCloudState,
    onStatusChange: updateHud
  });
  if (standaloneRoster) {
    window.addEventListener("storage", event => {
      if (event.key !== (cloudClassroomsEnabled() ? CLOUD_STORE_KEY : STORE_KEY) && event.key !== CLASS_LOCK_KEY) return;
      load();
      syncSelectedTrigger();
      updateHud();
    });
  }
  if (hasPasswordRecovery) openPasswordReset();
})();
