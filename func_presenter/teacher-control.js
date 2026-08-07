/* ================================================================
   TEACHER CONTROL LAYER v1
   Activates only via ?mode=teacher. Keeps a local classroom roster,
   a temporary chosen-student trigger, and an awardable point pool.
   ================================================================ */
(() => {
  "use strict";

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");
  const forceTeacherMode = window.__forceTeacherControl === true;
  if (mode === "teacher") sessionStorage.setItem("fpTeacherMode", "1");
  if (mode === "student") sessionStorage.removeItem("fpTeacherMode");
  if (!forceTeacherMode && sessionStorage.getItem("fpTeacherMode") !== "1") return;

  const STORE_KEY = "fpTeacherClassroomV1";
  const CLOUD_STORE_KEY = "fpTeacherCloudClassroomsV1";
  const HELP_SEEN_KEY = "fpTeacherControlHelpSeenV1";
  const controlScriptUrl = document.currentScript?.src || location.href;
  const teacherToastScriptUrl = new URL("toast.js", controlScriptUrl).href;
  const canonicalAvatarPath = (name) => new URL(`images/avatars/${name.toLowerCase()}.webp`, controlScriptUrl).href;
  const teacherSoundPath = (name) => new URL(`sounds/${name}.mp3`, controlScriptUrl).href;
  const normalizeAvatarPath = (path = "") => {
    const value = String(path || "");
    if (/^(?:\.\.\/func_presenter\/)?images\/avatars\//i.test(value)) {
      return canonicalAvatarPath(value.split("/").pop().replace(/\.webp$/i, ""));
    }
    return value;
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
    ["Ava", "Benjamin", "Chloe", "Daniel", "David", "Ella", "Emma", "Ethan", "Hannah", "Jack", "Lucas", "Mia", "Noah", "Olivia", "Victoria", "Zoe"]
      .map((name) => ({ name, path: canonicalAvatarPath(name) }))
  );
  const AVATAR_UNLOCK_LEVELS = Object.freeze({
    grace: 9,
    louis: 9,
    rex: 5,
    pixie: 5,
    nova: 5,
    blaze: 3,
    mara: 3,
    frost: 4,
    terra: 4
  });
  const shouldFlipAvatar = (path = "") => /AV_Anime_(Nova|Terra)_head\.webp$/i.test(path);

  const css = `
    .tc-hud { position: fixed; left: 8px; bottom: 10px; z-index: 11000; display: flex; align-items: center; gap: 5px; width: calc(var(--tc-controls-width, 220px) + 25px); padding: 6px; overflow: visible; border: 1px solid rgba(255, 216, 77, .48); border-radius: 15px; background: rgba(8, 16, 40, .94); box-shadow: 0 14px 34px rgba(0, 0, 0, .42); transition: width .28s ease, padding .28s ease, gap .28s ease, border-radius .28s ease; }
    .tc-hud button { width: 34px; height: 34px; border: 1px solid #2b4084; border-radius: 10px; background: #12234e; color: #f4f7ff; font-size: 16px; cursor: pointer; transition: transform .14s ease, border-color .14s ease, background-color .14s ease; }
    .tc-hud button:hover { transform: translateY(-2px); border-color: rgba(255, 216, 77, .85); background: #18336e; }
    .tc-hud .tc-roster.has-chosen-avatar { padding: 2px; overflow: hidden; }
    .tc-roster-avatar { display: block; width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
    .tc-hud .tc-random.is-chosen { border-color: #65e6b8; box-shadow: 0 0 14px rgba(101, 230, 184, .4); }
    .tc-hud .tc-bank { width: auto; height: 34px; min-width: 60px; padding: 0 7px; border: 0; background: transparent; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 15px; font-weight: 800; letter-spacing: .04em; text-align: center; white-space: nowrap; cursor: pointer; }
    .tc-hud .tc-bank:hover { transform: none; border: 0; background: rgba(255, 216, 77, .10); }
    .tc-hud .tc-bank.is-resetting { color: #ffab9b; text-shadow: 0 0 12px rgba(255, 128, 102, .42); }
    .tc-hud.no-roster .tc-bank { color: #8fa6d9; }
    .tc-hud-controls { display: flex; align-items: center; gap: 5px; width: var(--tc-controls-width, 220px); flex: 0 0 auto; overflow: visible; opacity: 1; transform: translateX(0); transition: width .28s ease, opacity .16s ease, transform .28s ease; }
    .tc-hud.is-collapsed { width: 22px; gap: 0; padding: 0; border-left: 0; border-radius: 0 10px 10px 0; }
    .tc-hud.is-collapsed .tc-hud-controls { width: 0; overflow: hidden; opacity: 0; transform: translateX(-16px); pointer-events: none; }
    .tc-hud .tc-collapse { width: 20px; flex: 0 0 20px; padding: 0; border: 0; border-radius: 0 9px 9px 0; background: transparent; color: #a9bce9; font-family: Arial, sans-serif; font-size: 21px; font-weight: 400; line-height: 1; }
    .tc-hud .tc-collapse:hover { background: rgba(143, 166, 255, .14); color: #f4f7ff; }
    .tc-hud .tc-chosen-banner { position: absolute; bottom: calc(100% + 4px); left: 6px; display: flex; align-items: center; width: var(--tc-controls-width, 220px); height: auto; min-height: 24px; padding: 4px 10px; border: 1px solid rgba(101, 230, 184, .72); border-radius: 10px 10px 4px 4px; background: rgba(11, 69, 60, .96); color: #dfffee; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 900; letter-spacing: .07em; opacity: 0; pointer-events: none; transform: translateY(6px); transition: opacity .18s ease, transform .18s ease, border-color .14s ease, background-color .14s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
    .tc-hud .tc-chosen-banner.is-visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
    .tc-hud .tc-chosen-banner.is-resetting { border-color: #ffab9b; background: rgba(102, 41, 38, .96); color: #fff0e9; }
    .tc-hud .tc-help-tip { position: absolute; bottom: calc(100% + 8px); left: 0; width: min(260px, calc(100vw - 18px)); padding: 8px 11px; border: 1px solid rgba(255, 216, 77, .74); border-radius: 11px; background: rgba(22, 32, 68, .98); color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 800; letter-spacing: .035em; line-height: 1.35; box-shadow: 0 10px 24px rgba(0, 0, 0, .34); pointer-events: none; }
    .tc-hud .tc-help.is-first-run { border-color: #ffd84d; color: #fff6c8; background: #203d85; box-shadow: 0 0 0 3px rgba(255, 216, 77, .22), 0 0 18px rgba(255, 216, 77, .72), 0 0 34px rgba(255, 216, 77, .4); animation: tcHelpPromptGlow 1.1s ease-in-out infinite; }
    .tc-hud .tc-help-tip { display: grid; gap: 8px; pointer-events: auto; }
    .tc-hud .tc-help-tip button { justify-self: end; width: auto; height: 24px; padding: 0 12px; border-color: rgba(255, 216, 77, .86); border-radius: 8px; color: #111833; background: #ffd84d; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 900; letter-spacing: .08em; }
    .tc-hud .tc-help-tip::after { position: absolute; bottom: -6px; left: 112px; width: 10px; height: 10px; border-right: 1px solid rgba(255, 216, 77, .74); border-bottom: 1px solid rgba(255, 216, 77, .74); background: rgba(22, 32, 68, .98); content: ""; transform: rotate(45deg); }
    .tc-hud.is-collapsed .tc-chosen-banner { opacity: 0; pointer-events: none; transform: translateY(6px); }
    .tc-float { position: fixed; z-index: 11010; color: #65e6b8; font-family: var(--font-display, sans-serif); font-size: 30px; font-weight: 800; letter-spacing: .06em; pointer-events: none; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 18px rgba(101, 230, 184, .48); animation: tcPointFloat 1s ease-out forwards; }
    .tc-float.tc-notice { color: var(--u2-gold, #ffd84d); font-size: 16px; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 16px rgba(255, 216, 77, .45); }
    .tc-float.tc-warning { color: #ffab9b; text-shadow: 0 3px 12px rgba(0, 0, 0, .7), 0 0 16px rgba(255, 128, 102, .42); }
    @keyframes tcPointFloat { from { opacity: 0; transform: translate(-50%, 8px) scale(.8); } 18% { opacity: 1; transform: translate(-50%, 0) scale(1.08); } to { opacity: 0; transform: translate(-50%, -58px) scale(1); } }
    @keyframes tcHelpPromptGlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
    .tc-overlay { position: fixed; inset: 0; z-index: 11005; display: flex; align-items: center; justify-content: center; padding: 24px; background: rgba(2, 7, 23, .88); }
    .tc-card { position: relative; width: min(624px, 100%); max-height: 88vh; overflow-y: auto; padding: clamp(19px, 3.2vh, 32px) clamp(16px, 2.4vw, 30px); border: 1px solid rgba(255, 216, 77, .44); border-radius: 22px; background: #0d1b39; box-shadow: 0 30px 80px rgba(0, 0, 0, .5); }
    .tc-kicker { margin: 0 0 6px; color: var(--u2-gold, #ffd84d); font-size: 12px; font-weight: 900; letter-spacing: .2em; }
    .tc-title { margin: 0 0 12px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(26px, 3vw, 38px); font-weight: 800; letter-spacing: .04em; }
    .tc-copy { margin: 0 0 18px; color: #9db2e3; font-size: 14px; font-weight: 700; line-height: 1.5; }
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
    .tc-guided-coach button { justify-self: center; min-height: 30px; margin-top: 3px; padding: 0 14px; border: 0; border-radius: 9px; background: var(--u2-grad-gold, #ffd84d); color: #14183a; font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 900; letter-spacing: .08em; cursor: pointer; pointer-events: auto; }
    .tc-tutorial-focus { outline: 3px solid var(--u2-gold, #ffd84d) !important; outline-offset: 3px; box-shadow: 0 0 0 5px rgba(255, 216, 77, .2), 0 0 28px 10px rgba(255, 216, 77, .7) !important; animation: tcTutorialPulse .9s ease-in-out infinite alternate; }
    @keyframes tcTutorialPulse { from { filter: brightness(1); } to { filter: brightness(1.2); } }
    .tc-close { position: absolute; top: 14px; right: 14px; width: 40px; height: 40px; border: 1px solid #2b4084; border-radius: 12px; background: #12234e; color: #d9e4ff; font-size: 18px; font-weight: 900; cursor: pointer; }
    .tc-student-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
    .tc-student { position: relative; min-height: 82px; padding: 13px; border: 1px solid rgba(143, 166, 255, .26); border-radius: 16px; background: #0a142f; color: #f4f7ff; cursor: pointer; text-align: left; transition: transform .14s ease, border-color .14s ease, background-color .14s ease; }
    .tc-student:hover { transform: translateY(-2px); border-color: rgba(255, 216, 77, .78); background: #101f47; }
    .tc-student.is-selected { border-color: #65e6b8; box-shadow: 0 0 14px rgba(101, 230, 184, .22); }
    .tc-student.is-rank-green { border-color: rgba(101, 230, 184, .78); background: linear-gradient(135deg, rgba(12, 94, 66, .95), rgba(12, 48, 76, .95)); }
    .tc-student.is-rank-green strong { font-size: 17px; }
    .tc-student.is-rank-purple { border-color: rgba(195, 134, 255, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(195, 134, 255, .18), 0 0 20px rgba(195, 134, 255, .20); }
    .tc-student.is-rank-purple strong { font-size: 18px; color: #f4e7ff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-student.is-rank-purple-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 18px rgba(255, 216, 77, .16); }
    .tc-student.is-rank-purple-gold strong { font-size: 18px; color: #f7eaff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-student.is-rank-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 20px rgba(255, 216, 77, .20); }
    .tc-student.is-rank-gold strong { font-size: 19px; color: #fff8cf; text-shadow: 0 0 12px rgba(255, 216, 77, .78), 0 0 24px rgba(255, 216, 77, .48); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-student.is-rank-gold-glow { border-color: #ffe584; background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 232, 132, .34), 0 0 18px rgba(255, 216, 77, .45), 0 0 36px rgba(255, 216, 77, .24); }
    .tc-student.is-rank-gold-glow strong { font-size: 19px; color: #fff8cf; text-shadow: 0 0 12px rgba(255, 216, 77, .88), 0 0 28px rgba(255, 216, 77, .58); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-student.is-rank-gold-aura { border-color: #fff0a6; background: linear-gradient(135deg, rgba(154, 104, 8, .99), rgba(70, 46, 8, .97)); box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .78), 0 0 52px rgba(255, 216, 77, .48), 0 0 86px rgba(255, 216, 77, .20); }
    .tc-student.is-rank-gold-aura strong { font-size: 20px; color: #fffbe2; text-shadow: 0 0 14px rgba(255, 216, 77, .96), 0 0 32px rgba(255, 216, 77, .68); animation: tcNamePulse 1.1s ease-in-out infinite; }
    .tc-student.is-absent { border-color: rgba(154, 169, 194, .7); background: linear-gradient(135deg, rgba(44, 53, 73, .94), rgba(24, 31, 47, .96)); box-shadow: none; }
    .tc-student.is-absent .tc-student-details,
    .tc-student.is-absent .tc-student-avatar img { filter: grayscale(1); opacity: .7; }
    .tc-student.is-absent:hover { border-color: rgba(187, 198, 217, .82); background: linear-gradient(135deg, rgba(56, 65, 86, .96), rgba(30, 38, 57, .98)); }
    .tc-student.is-absent .tc-student-stars { color: #c0c6d2; }
    .tc-attendance-status { position: absolute; top: -7px; right: -7px; z-index: 2; display: grid; width: 22px; height: 22px; place-items: center; border: 2px solid #d8fff1; border-radius: 50%; background: #178b63; color: #fff; font-family: var(--font-display, sans-serif); font-size: 14px; font-style: normal; font-weight: 900; line-height: 1; box-shadow: 0 2px 8px rgba(0, 0, 0, .34); }
    .tc-attendance-status.is-absent { border-color: #ffd1ca; background: #bd4c4c; }
    .tc-student strong { display: block; font-size: 15px; font-weight: 900; letter-spacing: .03em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .tc-student span { display: block; margin-top: 7px; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 20px; font-weight: 800; }
    .tc-student-stars { min-height: 14px; margin-top: 2px; color: #fff0a6; font-size: 11px; letter-spacing: 0; line-height: 1.2; white-space: nowrap; }
    .tc-student em { position: absolute; top: 10px; right: 11px; color: #65e6b8; font-size: 14px; font-style: normal; }
    .tc-student-name-row { display: flex; align-items: center; gap: 6px; min-width: 0; }
    .tc-student-name-row strong { min-width: 0; flex: 1 1 auto; }
    .tc-student.has-avatar { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 10px; }
    .tc-student-avatar { position: relative; display: grid; width: 55px; aspect-ratio: 1; overflow: visible; place-items: center; border: 1px solid rgba(255, 216, 77, .56); border-radius: 10px; background: #09132c; color: #dbe7ff; font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 900; }
    .tc-student-avatar img { width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
    .tc-avatar-media { position: relative; }
    .tc-avatar-image-crop { width: 100%; height: 100%; overflow: hidden; border-radius: inherit; }
    .tc-level-badge, .tc-student .tc-level-badge { position: absolute; top: -8px; right: -8px; z-index: 4; display: grid; width: 25px; height: 25px; box-sizing: border-box; margin: 0; place-items: center; border: 2px solid #fff0a6; border-radius: 50%; background: #173671; color: #fff8cf; font-family: var(--font-display, sans-serif); font-size: 10px; font-weight: 900; letter-spacing: 0; line-height: 1; box-shadow: 0 2px 9px rgba(0, 0, 0, .46), 0 0 10px rgba(255, 216, 77, .26); }
    .tc-level-badge.is-inline { position: static; display: grid; flex: 0 0 auto; width: 22px; height: 22px; margin: 0; place-items: center; border-width: 1px; color: #fff8cf; font-size: 9px; line-height: 1; }
    .tc-avatar-flipped { transform: scaleX(-1); }
    @keyframes tcNamePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
    .tc-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
    .tc-auth-form { display: grid; gap: 10px; margin-top: 18px; }
    .tc-auth-form input { width: 100%; min-height: 46px; box-sizing: border-box; border: 1px solid #2f4d9a; border-radius: 12px; outline: none; background: #0d1a3d; color: #f4f7ff; padding: 0 14px; font: 800 14px/1 var(--font-ui, sans-serif); }
    .tc-auth-form input:focus { border-color: #ffd84d; box-shadow: 0 0 0 3px rgba(255, 216, 77, .16); }
    .tc-auth-note { color: #a9bbef; font: 700 13px/1.45 var(--font-ui, sans-serif); margin: 10px 0 0; }
    .tc-hud .tc-account.is-connected { border-color: #61e7b6; color: #d9fff0; box-shadow: 0 0 12px rgba(97, 231, 182, .32); }
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
    .tc-confirm-card { width: min(380px, 100%); padding: 24px; border: 1px solid rgba(255, 128, 102, .58); border-radius: 18px; background: #101d3d; box-shadow: 0 24px 64px rgba(0, 0, 0, .56); }
    .tc-confirm-card h3 { margin: 0 0 9px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: 24px; letter-spacing: .04em; }
    .tc-confirm-card p { margin: 0; color: #9db2e3; font-weight: 700; line-height: 1.5; }
    .tc-award-title-row { display: flex; align-items: center; gap: 10px; margin: 0 0 9px; }
    .tc-award-title-row .tc-title { margin: 0; }
    .tc-award-customize { width: 38px; height: 38px; border: 1px solid rgba(255, 216, 77, .72); border-radius: 10px; background: #172d63; color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: 18px; font-weight: 900; cursor: pointer; }
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
    .tc-announcement strong { color: var(--u2-gold, #ffd84d); font-family: var(--font-display, sans-serif); font-size: clamp(42px, 7vw, 76px); font-weight: 800; letter-spacing: .06em; }
    .tc-announcement span { margin-top: 10px; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: .04em; }
    .tc-profile-summary { display: grid; grid-template-columns: 150px minmax(0, 1fr); align-items: center; gap: 20px; margin-top: 8px; }
    .tc-profile-summary.is-rank-green, .tc-profile-summary.is-rank-purple, .tc-profile-summary.is-rank-purple-gold, .tc-profile-summary.is-rank-gold, .tc-profile-summary.is-rank-gold-glow, .tc-profile-summary.is-rank-gold-aura { padding: 16px; border: 1px solid; border-radius: 20px; }
    .tc-profile-summary.is-rank-green { border-color: rgba(101, 230, 184, .78); background: linear-gradient(135deg, rgba(12, 94, 66, .95), rgba(12, 48, 76, .95)); }
    .tc-profile-summary.is-rank-purple { border-color: rgba(195, 134, 255, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(195, 134, 255, .18), 0 0 20px rgba(195, 134, 255, .20); }
    .tc-profile-summary.is-rank-purple-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(83, 28, 134, .98), rgba(34, 25, 86, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 18px rgba(255, 216, 77, .16); }
    .tc-profile-summary.is-rank-gold { border-color: rgba(255, 216, 77, .98); background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 216, 77, .22), 0 0 20px rgba(255, 216, 77, .20); }
    .tc-profile-summary.is-rank-gold-glow { border-color: #ffe584; background: linear-gradient(135deg, rgba(139, 94, 8, .98), rgba(63, 42, 10, .96)); box-shadow: inset 0 0 0 1px rgba(255, 232, 132, .34), 0 0 18px rgba(255, 216, 77, .45), 0 0 36px rgba(255, 216, 77, .24); }
    .tc-profile-summary.is-rank-gold-aura { border-color: #fff0a6; background: linear-gradient(135deg, rgba(154, 104, 8, .99), rgba(70, 46, 8, .97)); box-shadow: inset 0 0 0 1px rgba(255, 239, 166, .46), 0 0 24px rgba(255, 216, 77, .78), 0 0 52px rgba(255, 216, 77, .48), 0 0 86px rgba(255, 216, 77, .20); }
    .tc-profile-summary.is-rank-purple .tc-profile-meta h3, .tc-profile-summary.is-rank-purple-gold .tc-profile-meta h3 { color: #f4e7ff; text-shadow: 0 0 12px rgba(195, 134, 255, .88), 0 0 28px rgba(195, 134, 255, .68), 0 0 46px rgba(195, 134, 255, .34); }
    .tc-profile-summary.is-rank-gold .tc-profile-meta h3, .tc-profile-summary.is-rank-gold-glow .tc-profile-meta h3, .tc-profile-summary.is-rank-gold-aura .tc-profile-meta h3 { color: #fff8cf; text-shadow: 0 0 12px rgba(255, 216, 77, .88), 0 0 28px rgba(255, 216, 77, .58); animation: tcNamePulse 1.2s ease-in-out infinite; }
    .tc-profile-summary.is-rank-gold-aura .tc-profile-meta h3 { color: #fffbe2; text-shadow: 0 0 14px rgba(255, 216, 77, .96), 0 0 32px rgba(255, 216, 77, .68); animation-duration: 1.1s; }
    .tc-profile-avatar { display: grid; width: 150px; aspect-ratio: 1; padding: 0; overflow: visible; place-items: center; border: 2px solid rgba(255, 216, 77, .78); border-radius: 18px; background: #09132c; color: #dbe7ff; cursor: pointer; box-shadow: 0 0 24px rgba(255, 216, 77, .16); }
    .tc-profile-avatar:hover { border-color: #fff0a6; box-shadow: 0 0 30px rgba(255, 216, 77, .34); }
    .tc-avatar-media { display: block; width: 100%; height: 100%; }
    .tc-profile-avatar .tc-avatar-media { overflow: visible; border-radius: 16px; }
    .tc-profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .tc-profile-avatar span:not(.tc-level-badge) { padding: 12px; text-align: center; font-family: var(--font-display, sans-serif); font-size: 17px; font-weight: 900; }
    .tc-avatar-choose-copy { display: grid; place-content: center; gap: 2px; }
    .tc-avatar-choose-copy span { display: block; padding: 0; color: #9db2e3; font-size: 15px; letter-spacing: .08em; line-height: 1.05; }
    .tc-profile-meta h3 { margin: 0; color: #f4f7ff; font-family: var(--font-display, sans-serif); font-size: clamp(30px, 4vw, 48px); letter-spacing: .04em; }
    .tc-profile-meta p { margin: 9px 0 0; color: #9db2e3; font-size: 14px; font-weight: 800; }
    .tc-profile-points { color: var(--u2-gold, #ffd84d) !important; font-family: var(--font-display, sans-serif); font-size: clamp(26px, 3vw, 38px) !important; letter-spacing: .05em; }
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

  function playTeacherFeedback(isCorrect) {
    if (teacherFeedbackAudio) {
      teacherFeedbackAudio.pause();
      teacherFeedbackAudio.currentTime = 0;
    }
    teacherFeedbackAudio = new Audio(teacherSoundPath(isCorrect ? "correct" : "wrong"));
    teacherFeedbackAudio.play().catch(() => {});
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
    persistLocal();
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
  const studentLevel = (student) => {
    const score = Math.max(0, effectiveScore(student));
    const earlyLevelStarts = [0, 11, 31, 61, 101, 151, 211, 281, 361, 461];
    let level = 1;
    earlyLevelStarts.forEach((start, index) => {
      if (score >= start) level = index + 1;
    });
    if (level < 10 || score < 571) return level;

    let nextStart = 571;
    let nextRange = 120;
    for (let nextLevel = 11; nextLevel <= 99; nextLevel += 1) {
      if (score < nextStart) return nextLevel - 1;
      level = nextLevel;
      nextStart += nextRange;
      nextRange += 10;
    }
    return 99;
  };
  const createLevelBadge = (student, inline = false) => {
    const badge = el("span", `tc-level-badge${inline ? " is-inline" : ""}`, String(studentLevel(student)));
    badge.title = `Level ${studentLevel(student)}`;
    badge.setAttribute("aria-label", `Level ${studentLevel(student)}`);
    return badge;
  };
  const avatarRequiredLevel = (avatarName) => AVATAR_UNLOCK_LEVELS[String(avatarName || "").trim().toLowerCase()] || 1;
  const avatarUnlocksBetween = (previousLevel, currentLevel) => Object.entries(AVATAR_UNLOCK_LEVELS)
    .filter(([, requiredLevel]) => requiredLevel > previousLevel && requiredLevel <= currentLevel)
    .map(([name]) => name.toUpperCase());
  const notifyLevelUp = (student, previousLevel) => {
    const currentLevel = studentLevel(student);
    if (currentLevel <= previousLevel) return;
    showToast(`${student.name} - Level Up: ${currentLevel}!`, "success");
    const unlockedAvatars = avatarUnlocksBetween(previousLevel, currentLevel);
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

  function closeOverlays() {
    document.querySelectorAll(".tc-overlay").forEach((node) => node.remove());
  }

  let guidedTutorial = null;

  function clearTutorialFocus() {
    document.querySelectorAll(".tc-tutorial-focus").forEach((node) => node.classList.remove("tc-tutorial-focus"));
  }

  function closeGuidedTutorial() {
    const restoreState = guidedTutorial?.restoreState;
    clearTutorialFocus();
    document.querySelector(".tc-guided-coach")?.remove();
    guidedTutorial = null;
    if (restoreState) {
      state.classrooms = restoreState.classrooms;
      state.activeClassroomId = restoreState.activeClassroomId;
      activateClassroom(state.activeClassroomId, false);
      state.selectedStudentId = restoreState.selectedStudentId;
      randomHistory.drawnIds = [...restoreState.randomDrawnIds];
      syncSelectedTrigger();
      save();
      updateHud();
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
    if (step === 4) return document.querySelector(".tc-overlay .tc-close");
    if (step === 5) return bank;
    if (step === 6) return document.querySelector(".tc-student-grid .tc-student") || plusButton;
    if (step === 7) return randomButton;
    if (step === 8) return rosterButton;
    if (step === 9) return document.querySelector(".tc-student-grid .tc-student");
    if (step === 10) return document.querySelector(".tc-profile-avatar");
    if (step === 11) return document.querySelector(".tc-avatar-choice");
    if (step === 12) return document.querySelector(".tc-card .tc-action.primary");
    return null;
  }

  function tutorialCopyForStep(step) {
    if (step === 1) return "Click on the ROSTER button.";
    if (step === 2) return "Click this button to add a student.";
    if (step === 3) {
      const inputs = [...document.querySelectorAll(".tc-editor-row input")];
      const readyToSave = inputs.length === 2 && inputs.every((input) => input.value.trim());
      return readyToSave ? "Click on SAVE ROSTER button." : "Write two students' names.";
    }
    if (step === 4) return "Click here to close roster screen.";
    if (step === 5) return "Correct answers add 1 point to this pool.";
    if (step === 6) return document.querySelector(".tc-student-grid .tc-student") ? "Choose a student to receive the point." : "You can give the points in the pool to a student you choose.";
    if (step === 7) return "Click this button to choose a random student.";
    if (step === 8) return "Open the roster again to manage student profiles.";
    if (step === 9) return "Click a student card to open the student profile.";
    if (step === 10) return "Click the avatar box to choose an avatar.";
    if (step === 11) return "Choose an avatar for this student.";
    if (step === 12) return "You can give 1 star to a student with 10 points.";
    return "That's all! Hope you enjoy the app.";
  }

  function positionTutorialCoach(target) {
    const coach = document.querySelector(".tc-guided-coach");
    if (!coach) return;
    const rect = target?.getBoundingClientRect();
    const margin = 12;
    const coachWidth = coach.getBoundingClientRect().width;
    const desiredLeft = rect ? rect.left + rect.width / 2 - coachWidth / 2 : (window.innerWidth - coachWidth) / 2;
    const left = Math.min(window.innerWidth - coachWidth - margin, Math.max(margin, desiredLeft));
    const typingWithKeyboard = guidedTutorial?.step === 3 && target?.matches(".tc-add-student");
    const top = typingWithKeyboard ? 18 : (rect ? Math.max(12, rect.top - coach.offsetHeight - 16) : Math.max(18, window.innerHeight * .2));
    coach.style.left = `${left}px`;
    coach.style.top = `${top}px`;
  }

  function renderGuidedTutorial() {
    if (!guidedTutorial) return;
    clearTutorialFocus();
    const target = tutorialTargetForStep(guidedTutorial.step);
    target?.classList.add("tc-tutorial-focus");
    let coach = document.querySelector(".tc-guided-coach");
    if (!coach) {
      coach = el("div", "tc-guided-coach");
      document.body.append(coach);
    }
    coach.replaceChildren(el("small", "", `STEP ${guidedTutorial.step} / 13`), el("strong", "", tutorialCopyForStep(guidedTutorial.step)));
    if (guidedTutorial.step === 5 || guidedTutorial.step === 13) {
      const next = el("button", "tc-tutorial-next", guidedTutorial.step === 13 ? "FINISH" : "NEXT");
      next.type = "button";
      next.addEventListener("click", () => {
        if (guidedTutorial?.step === 13) closeGuidedTutorial();
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
    dismissInitialHelpTip();
    renderGuidedTutorial();
  }

  function refreshGuidedTutorial() {
    if (guidedTutorial) renderGuidedTutorial();
  }

  document.addEventListener("click", (event) => {
    if (!guidedTutorial) return;
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const step = guidedTutorial.step;
    const allowed =
      (step === 1 && target.closest(".tc-roster")) ||
      (step === 2 && target.closest(".tc-add-student")) ||
      (step === 3 && (target.closest(".tc-editor-row input, .tc-key, .tc-name-suggestion") || (target.closest(".tc-add-student") && document.querySelectorAll(".tc-editor-row").length < 2) || (target.closest(".tc-save-roster") && [...document.querySelectorAll(".tc-editor-row input")].length === 2 && [...document.querySelectorAll(".tc-editor-row input")].every((input) => input.value.trim())))) ||
      (step === 4 && target.closest(".tc-overlay .tc-close")) ||
      (step === 5 && target.closest(".tc-tutorial-next")) ||
      (step === 6 && (target.closest(".tc-plus") || target.closest(".tc-student-grid .tc-student"))) ||
      (step === 7 && target.closest(".tc-random")) ||
      (step === 8 && target.closest(".tc-roster")) ||
      (step === 9 && target.closest(".tc-student-grid .tc-student")) ||
      (step === 10 && target.closest(".tc-profile-avatar")) ||
      (step === 11 && target.closest(".tc-avatar-choice")) ||
      (step === 12 && target.closest(".tc-card .tc-action.primary")) ||
      (step === 13 && target.closest(".tc-tutorial-next"));
    if (!allowed) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener("resize", () => positionTutorialCoach(tutorialTargetForStep(guidedTutorial?.step)));

  function makeOverlay(kicker, title, copy = "") {
    closeOverlays();
    const overlay = el("div", "tc-overlay");
    const card = el("div", "tc-card");
    const close = el("button", "tc-close", "×");
    close.type = "button";
    close.addEventListener("click", closeOverlays);
    card.append(close, el("p", "tc-kicker", kicker), el("h2", "tc-title", title));
    if (copy) card.append(el("p", "tc-copy", copy));
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlays(); });
    overlay.append(card);
    document.body.append(overlay);
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
    rosterButton.title = chosen ? `${chosen.name} is chosen — Class roster` : "Class roster";
    if (chosen?.avatarPath) {
      const avatar = document.createElement("img");
      avatar.src = chosen.avatarPath;
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
  }

  function applyCloudState(snapshot) {
    if (Array.isArray(snapshot?.classrooms) && snapshot.classrooms.length) {
      state.classrooms = snapshot.classrooms.map((classroom, index) => createClassroom(`CLASS ${index + 1}`, classroom));
      state.activeClassroomId = state.classrooms.some((classroom) => classroom.id === snapshot.activeClassroomId)
        ? snapshot.activeClassroomId
        : state.classrooms[0].id;
      activateClassroom(state.activeClassroomId, false);
    } else if (Array.isArray(snapshot?.roster)) {
      const classroom = createClassroom("MY CLASS", snapshot);
      state.classrooms = [classroom];
      state.activeClassroomId = classroom.id;
      activateClassroom(classroom.id, false);
    } else return;
    state.selectedStudentId = "";
    resetRandomPool();
    syncSelectedTrigger();
    persistLocal();
    updateHud();
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
      sync.addEventListener("click", async () => {
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
    const card = makeOverlay("CLOUD BACKUP", "TEACHER SIGN IN", "Sign in to back up your roster, points, stars, and avatars.");
    const form = el("form", "tc-auth-form");
    const displayName = el("input", "", "");
    const email = el("input", "", "");
    const password = el("input", "", "");
    displayName.type = "text";
    displayName.placeholder = "Teacher name (optional)";
    displayName.autocomplete = "name";
    email.type = "email";
    email.placeholder = "Email address";
    email.autocomplete = "email";
    password.type = "password";
    password.placeholder = "Password";
    password.autocomplete = "current-password";
    const submit = el("button", "tc-action primary", "SIGN IN");
    const request = el("button", "tc-action", "REQUEST ACCOUNT");
    submit.type = "submit";
    request.type = "button";
    const actions = el("div", "tc-actions");
    actions.append(submit, request);
    form.append(displayName, email, password, actions);
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
        showToast("Enter email and password first.");
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
    const note = el("p", "tc-auth-note", "No approved account yet? Request one, then approve it from the local admin panel.");
    card.append(form, note);
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
    state.classrooms.forEach((classroom) => {
      const tab = el("button", `tc-class-tab${classroom.id === state.activeClassroomId ? " is-active" : ""}`, classroom.name);
      tab.type = "button";
      tab.addEventListener("click", () => {
        if (classroom.id === state.activeClassroomId) return;
        activateClassroom(classroom.id);
        resetRandomPool();
        syncSelectedTrigger();
        save({ deferPoints: true });
        updateHud();
        openRoster();
      });
      bar.append(tab);
    });
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
      activateClassroom(state.classrooms[0].id, false);
      resetRandomPool();
      syncSelectedTrigger();
      save();
      updateHud();
      openRoster();
    });
  }

  function openRoster() {
    if (!hasRoster() && state.classrooms.length === 1) {
      openRosterEditor(true);
      if (guidedTutorial?.step === 1) window.setTimeout(() => setGuidedTutorialStep(2), 0);
      return;
    }
    const current = activeClassroom();
    const cloudMode = cloudClassroomsEnabled();
    const card = makeOverlay("CLASSROOM", cloudMode ? (current?.name || "CLASS ROSTER") : "CLASS ROSTER", cloudMode
      ? "Switch classes above, or choose a student to review the current score."
      : "Choose a student to review the current score.");
    if (cloudMode) card.append(classBar());
    const grid = el("div", "tc-student-grid");
    sortRosterStudents(state.roster).forEach((student) => {
      const item = studentCard(student, { showChosen: true, ranked: true, showAvatar: true });
      item.addEventListener("click", () => openStudentProfile(student.id));
      grid.append(item);
    });
    const actions = el("div", "tc-actions");
    if (!state.roster.length) grid.append(el("div", "tc-empty", "This class has no students yet."));
    const edit = el("button", "tc-action", state.roster.length ? "EDIT ROSTER" : "CREATE ROSTER");
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
    actions.append(edit, attendance, resetPoints);
    if (cloudMode) {
      const rename = el("button", "tc-action", "RENAME CLASS");
      rename.type = "button";
      rename.addEventListener("click", () => openClassNameDialog("rename"));
      const removeClass = el("button", "tc-action danger", "DELETE CLASS");
      removeClass.type = "button";
      removeClass.addEventListener("click", deleteActiveClassroom);
      actions.append(rename, removeClass);
    }
    card.append(grid, actions);
    if (guidedTutorial?.step === 3) setGuidedTutorialStep(4);
    if (guidedTutorial?.step === 8) window.setTimeout(() => setGuidedTutorialStep(9), 0);
    if (guidedTutorial?.step === 4) {
      card.querySelector(".tc-close")?.addEventListener("click", () => {
        window.setTimeout(() => setGuidedTutorialStep(5), 0);
      });
    }
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
    const card = makeOverlay("CLASSROOM", "ATTENDANCE", "Tap a student to mark them absent or present for today. Absent students do not appear in random picks or point controls.");
    const grid = el("div", "tc-student-grid");
    sortStudentsByScoreAndName(state.roster).forEach((student) => {
      const item = studentCard(student, { ranked: true, showAvatar: true, showAttendance: true });
      item.addEventListener("click", () => {
        toggleAttendance(student.id);
        openAttendance();
      });
      grid.append(item);
    });
    const actions = el("div", "tc-actions");
    const done = el("button", "tc-action primary", "DONE");
    done.type = "button";
    done.addEventListener("click", openRoster);
    actions.append(done);
    card.append(grid, actions);
  }

  function openHelp() {
    startGuidedTutorial();
  }

  function dismissInitialHelpTip() {
    localStorage.setItem(HELP_SEEN_KEY, "1");
    helpButton?.classList.remove("is-first-run");
    document.querySelector(".tc-help-tip")?.remove();
  }

  function showInitialHelpTip() {
    if (localStorage.getItem(HELP_SEEN_KEY)) return;
    helpButton.classList.add("is-first-run");
    const helpTip = el("div", "tc-help-tip");
    const message = el("span", "", "You can click here to learn about student management.");
    const ok = el("button", "", "OK");
    ok.type = "button";
    ok.addEventListener("click", dismissInitialHelpTip);
    helpTip.append(message, ok);
    hud.append(helpTip);
  }

  function studentCard(student, options = {}) {
    const showAvatar = Boolean(options.showAvatar && student.avatarPath);
    const item = el(options.static ? "div" : "button", `tc-student${student.id === state.selectedStudentId ? " is-selected" : ""}${options.ranked ? studentRankClass(effectiveScore(student)) : ""}${showAvatar ? " has-avatar" : ""}${isAbsent(student) ? " is-absent" : ""}`);
    if (!options.static) item.type = "button";
    const details = el("div", "tc-student-details");
    const nameRow = el("div", "tc-student-name-row");
    nameRow.append(el("strong", "", student.name));
    if (!showAvatar) nameRow.append(createLevelBadge(student, true));
    details.append(nameRow, el("span", "", `${student.points} PTS`));
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
    image.src = student.avatarPath;
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

  function openStudentProfile(studentId) {
    const student = getStudent(studentId);
    if (!student) return;
    const card = makeOverlay("CLASSROOM", "STUDENT PROFILE");
    const summary = el("div", `tc-profile-summary${studentRankClass(effectiveScore(student))}`);
    const avatarButton = el("button", "tc-profile-avatar");
    avatarButton.type = "button";
    avatarButton.title = "Choose avatar";
    avatarButton.append(createStudentAvatar(student, "", true));
    avatarButton.addEventListener("click", () => openAvatarPicker(student.id));
    const meta = el("div", "tc-profile-meta");
    meta.append(el("h3", "", student.name), el("p", "", "CLASSROOM SCORE"), el("p", "tc-profile-points", `${student.points} PTS`));
    if (student.stars) meta.append(el("p", "tc-profile-stars", starSummary(student.stars)));
    summary.append(avatarButton, meta);
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
        else student.points = 0;
        save({ deferPoints: !resetStars });
        updateHud();
        openStudentProfile(student.id);
      });
    });
    const redeem = el("button", "tc-action primary", "REDEEM 10 PTS → ⭐");
    redeem.type = "button";
    redeem.disabled = student.points < 10;
    redeem.addEventListener("click", () => {
      if (student.points < 10) return;
      student.points -= 10;
      student.stars = (student.stars || 0) + 1;
      save();
      updateHud();
      playTeacherFeedback(true);
      showToast(`${student.name} earned a star!`);
      openStudentProfile(student.id);
      if (guidedTutorial?.step === 12) window.setTimeout(() => setGuidedTutorialStep(13), 0);
    });
    actions.append(back, redeem, reset);
    card.append(summary, actions);
    if (guidedTutorial?.step === 9) window.setTimeout(() => setGuidedTutorialStep(10), 0);
  }

  function openAvatarPicker(studentId) {
    const student = getStudent(studentId);
    if (!student) return;
    const card = makeOverlay("CLASSROOM", "CHOOSE AVATAR", "Tap an avatar to save it for this student.");
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
        const isLocked = requiredLevel > studentLevel(student);
        const option = el("button", `tc-avatar-choice${student.avatarPath === avatar.path ? " is-active" : ""}${isLocked ? " is-locked" : ""}`);
        option.type = "button";
        option.disabled = isLocked;
        option.setAttribute("aria-disabled", isLocked ? "true" : "false");
        if (avatar.noPhoto) {
          option.classList.add("is-no-photo");
          option.append(el("div", "tc-no-photo-frame"), document.createTextNode(avatar.name));
        } else {
          const image = document.createElement("img");
          image.src = avatar.path;
          image.alt = avatar.name;
          image.classList.toggle("tc-avatar-flipped", shouldFlipAvatar(avatar.path));
          option.append(image, document.createTextNode(avatar.name.toUpperCase()));
        }
        if (isLocked) option.append(el("span", "tc-avatar-req", `REQ. LEV. : ${requiredLevel}`));
        option.addEventListener("click", () => {
          if (isLocked) return;
          student.avatarPath = avatar.path;
          if (guidedTutorial?.step === 11) {
            student.points = 10;
            student.stars = 0;
          }
          save();
          openStudentProfile(student.id);
          if (guidedTutorial?.step === 11) window.setTimeout(() => setGuidedTutorialStep(12), 0);
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
    confirmCard.append(title, copy, actions);
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
    isRandomDrawing = true;
    randomButton.disabled = true;
    const card = makeOverlay("", "RANDOM PICK");
    card.classList.add("tc-random-card");
    const announcement = el("div", "tc-announcement");
    const previewQueue = shuffleStudents(availableStudents);
    let previewIndex = 0;
    const showPreview = () => {
      const previewStudent = previewQueue[previewIndex % previewQueue.length];
      previewIndex += 1;
      playRandomBeep(previewIndex);
      const preview = el("div", "tc-random-preview");
      if (previewStudent.avatarPath) preview.append(createStudentAvatar(previewStudent, "tc-announcement-avatar", false, false));
      preview.append(el("strong", "", previewStudent.name));
      announcement.replaceChildren(preview);
    };
    showPreview();
    const previewTimer = window.setInterval(showPreview, 80);
    card.append(announcement);
    window.setTimeout(() => {
      window.clearInterval(previewTimer);
      isRandomDrawing = false;
      randomButton.disabled = false;
      state.selectedStudentId = student.id;
      syncSelectedTrigger();
      save();
      updateHud();
      if (guidedTutorial?.step === 7) setGuidedTutorialStep(8);
      announcement.replaceChildren();
      announcement.append(el("p", "tc-announcement-label", "THE CHOSEN STUDENT"));
      if (student.avatarPath) announcement.append(createStudentAvatar(student, "tc-announcement-avatar", false, false));
      announcement.append(el("strong", "", student.name), el("span", "", "You are the chosen!"));
      const actions = el("div", "tc-actions");
      const done = el("button", "tc-action primary", "CONTINUE");
      done.type = "button";
      const closeResult = () => card.closest(".tc-overlay")?.remove();
      done.addEventListener("click", closeResult);
      actions.append(done);
      if (card.isConnected) card.append(actions);
      window.setTimeout(closeResult, 2000);
    }, 1000);
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

  function openStudentPicker(action) {
    if (!hasRoster()) {
      openRosterEditor(true);
      return;
    }
    const availableStudents = presentStudents();
    if (!availableStudents.length) {
      showToast("Mark at least one student present first.");
      return;
    }
    const isAward = action === "award";
    const bankAmount = state.pointBank;
    let awardAmount = Math.max(1, bankAmount);
    const awardTitle = () => `AWARD +${awardAmount} POINT${awardAmount === 1 ? "" : "S"}`;
    const card = makeOverlay(isAward ? "POINT POOL" : "POINT CONTROL", isAward ? awardTitle() : "REMOVE 1 POINT", isAward ? (bankAmount ? "Choose the student who should receive the current point pool." : "The pool is empty. Choose one student to award a manual +1 point.") : "Choose the student who should lose one point.");
    if (isAward && !bankAmount) {
      const title = card.querySelector(".tc-title");
      const titleRow = el("div", "tc-award-title-row");
      const customize = el("button", "tc-award-customize", "+?");
      customize.type = "button";
      customize.title = "Choose point amount";
      title.before(titleRow);
      titleRow.append(title, customize);
      customize.addEventListener("click", () => {
        openAwardNumpad(awardAmount, (nextAmount) => {
          awardAmount = nextAmount;
          title.textContent = awardTitle();
        });
      });
    }
    const grid = el("div", "tc-student-grid");
    sortStudentsByScoreAndName(availableStudents).forEach((student) => {
      const item = studentCard(student, { ranked: true });
      item.addEventListener("click", () => {
        if (isAward) awardPoints(student.id, !bankAmount ? awardAmount : undefined);
        else removePoint(student.id);
        closeOverlays();
      });
      grid.append(item);
    });
    card.append(grid);
    if (guidedTutorial?.step === 6) window.setTimeout(refreshGuidedTutorial, 0);
  }

  function openAwardNumpad(initialAmount, onConfirm) {
    const overlay = el("div", "tc-confirm-overlay tc-numpad-overlay");
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
    const close = () => overlay.remove();
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
  }

  function awardPoints(studentId, manualAmount) {
    const student = getStudent(studentId);
    if (!student) return;
    const awarded = state.pointBank > 0 ? state.pointBank : Math.max(1, Number(manualAmount) || 1);
    const previousLevel = studentLevel(student);
    student.points += awarded;
    state.pointBank = 0;
    state.selectedStudentId = "";
    syncSelectedTrigger();
    save({ deferPoints: true });
    updateHud();
    playTeacherFeedback(true);
    showToast(`+${awarded} points awarded to ${student.name}.`, "success");
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

  function removePoint(studentId) {
    const student = getStudent(studentId);
    if (!student) return;
    student.points -= 1;
    save({ deferPoints: true });
    updateHud();
    playTeacherFeedback(false);
    showToast(`-1 point from ${student.name}.`, "danger");
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
    updateHud();

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

  function setHudCollapsed(collapsed) {
    hud.classList.toggle("is-collapsed", collapsed);
    collapseButton.textContent = collapsed ? ">" : "<";
    collapseButton.title = collapsed ? "Expand teacher controls" : "Collapse teacher controls";
    collapseButton.setAttribute("aria-label", collapseButton.title);
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
  const bank = el("button", "tc-bank", "ROSTER");
  const chosenBanner = el("button", "tc-chosen-banner");
  const controls = el("div", "tc-hud-controls");
  const collapseButton = el("button", "tc-collapse", "<");
  rosterButton.type = randomButton.type = plusButton.type = minusButton.type = helpButton.type = accountButton.type = chosenBanner.type = collapseButton.type = "button";
  bank.type = "button";
  rosterButton.title = "Class roster";
  plusButton.title = "Award the point pool";
  minusButton.title = "Remove one point";
  helpButton.title = "Student management help";
  accountButton.title = "Cloud account";
  rosterButton.addEventListener("click", openRoster);
  randomButton.addEventListener("click", openRandomStudent);
  plusButton.addEventListener("click", awardCurrentPool);
  minusButton.addEventListener("click", () => openStudentPicker("remove"));
  helpButton.addEventListener("click", openHelp);
  accountButton.addEventListener("click", openAccount);
  bank.addEventListener("click", requestPoolReset);
  chosenBanner.addEventListener("click", requestChosenReset);
  collapseButton.addEventListener("click", () => setHudCollapsed(!hud.classList.contains("is-collapsed")));
  controls.append(rosterButton, randomButton, plusButton, minusButton, helpButton, accountButton, bank);
  hud.append(chosenBanner, controls, collapseButton);
  document.body.append(hud);

  requestAnimationFrame(() => {
    hud.style.setProperty("--tc-controls-width", `${controls.scrollWidth}px`);
    showInitialHelpTip();
  });

  window.TeacherControl = {
    onCorrect,
    awardStars,
    awardFinalPoints,
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
    setActiveClassroom,
    isCloudClassroomsEnabled: cloudClassroomsEnabled
  };

  syncSelectedTrigger();
  updateHud();
  window.TeacherCloud?.initialize?.({
    getState: () => {
      commitActiveClassroom();
      return state;
    },
    applyState: applyCloudState,
    onStatusChange: updateHud
  });
})();
