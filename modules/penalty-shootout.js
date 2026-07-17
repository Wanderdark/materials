/* ================================================================
   PENALTY SHOOTOUT — reusable mini-game overlay.
   A target sweeps unpredictably across a 10-segment goal; the player
   presses SHOOT and the ball goes wherever the target is right then.
   Host exercise decides answer quality and calls:

     PenaltyShootout.open({
       state: "correct" | "partial" | "wrong",
       stateLabel: "WRONG ANSWER",         // optional chip text
       soundBase: "../sounds/",            // optional; folder with the mp3s below
       imageBase: "images/minigames/",     // optional; folder with the keeper webp images below
       onClose(result) {}                  // result: { scored, segment, chance, roll } | null (skipped)
     });

   Sounds (all under soundBase, overridable via options.sounds):
     crowd.mp3 (loops for the whole game), kick-ball.mp3 (on shot),
     goal.mp3 (goal), shoot-miss.mp3 (save/out). Everything stops on close.

   Images (all under imageBase, overridable via options.keeperImages):
     goal-keeper-ready.webp is centered in the goal from the start.
     On a save: the two dead-center segments (5/6) use goal-keeper-
     front.webp (no dive, keeper just catches it standing); every
     other save uses goal-keeper-left.webp / -right.webp with a
     diving-jump animation, chosen by which half of the goal the ball
     is hit toward. On a goal, the keeper dives the wrong way and
     comes up empty-handed: goal-keeper-left-goal.webp / -right-
     goal.webp, picked the same left/right way. The ready image is
     removed the moment any of these show, and the flying ball is
     hidden once it "lands" on a save since the save image already
     shows a caught ball (on a goal the ball stays visible in the net).

   Goal segments (base hit chance), 1-indexed, mirrored L/R:
     correct answer: 1/10 OUT, 2/9 95%, 3/8 80%, 4/7 60%, 5/6 30%
     wrong answer:   1/10 OUT, 2/9 20%, 3/8 10%, 4/7/5/6 SAVE (0%)
     partial (1 letter off): midpoint of the two tables above.
   Only segments 1/10 are truly OUT (ball misses the frame); any other
   0%-chance segment is a SAVE zone (keeper is simply standing there).

   Before the player can shoot, a "GET READY" screen holds the shot,
   then hands control to a "GO!" button the player must press to
   actually start the shot clock and unlock the SHOOT button. Once
   shooting starts, the goal chance is untouched for the first 5
   seconds, then drops 2 percentage points per second elapsed after
   that (floored at 0).

   Zero external assets: pitch/goal/net are CSS, ball & keeper emoji.
   ================================================================ */
(function () {
  "use strict";

  const CHANCE_TABLES = {
    correct: [0, 95, 80, 60, 30, 30, 60, 80, 95, 0],
    wrong: [0, 20, 10, 0, 0, 0, 0, 10, 20, 0],
    partial: [0, 58, 45, 30, 15, 15, 30, 45, 58, 0]
  };

  const DECAY_GRACE_SECONDS = 5;
  const DECAY_PER_SECOND = 2;

  const CSS = `
  .ps-overlay { position: fixed; inset: 0; z-index: 500; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(2, 7, 23, .9); }
  .ps-card { position: relative; width: min(860px, 96vw); padding: clamp(18px, 3vh, 30px) clamp(16px, 2.5vw, 30px); border: 1px solid rgba(255, 216, 77, .45); border-radius: 24px; background: #0d1b39; box-shadow: 0 30px 80px rgba(0, 0, 0, .55); text-align: center; }
  .ps-kicker { margin: 0 0 4px; color: #ffd84d; font-size: 12px; font-weight: 900; letter-spacing: .22em; }
  .ps-title { margin: 0 0 10px; color: #f4f7ff; font-family: 'Barlow Condensed', 'Bebas Neue', sans-serif; font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: .06em; }
  .ps-chip { display: inline-block; margin-bottom: 12px; padding: 7px 16px; border-radius: 999px; font-size: 13px; font-weight: 900; letter-spacing: .06em; }
  .ps-chip.good { background: rgba(101, 230, 184, .15); border: 1px solid rgba(101, 230, 184, .6); color: #65e6b8; }
  .ps-chip.partial { background: rgba(255, 216, 77, .12); border: 1px solid rgba(255, 216, 77, .6); color: #ffd84d; }
  .ps-chip.bad { background: rgba(255, 128, 102, .12); border: 1px solid rgba(255, 128, 102, .6); color: #ff8066; }
  .ps-pitch { position: relative; overflow: hidden; height: clamp(260px, 42vh, 360px); border-radius: 18px; background: linear-gradient(180deg, #0e2f14 0%, #14481e 46%, #1a5c26 47%, #17531f 60%, #196026 61%, #145321 74%, #196026 75%, #145321 100%); }
  .ps-goal { position: absolute; left: 50%; top: 26px; transform: translateX(-50%); width: 80%; height: 55%; border: 7px solid #f4f7ff; border-bottom: 0; border-radius: 6px 6px 0 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,.16) 0 1px, transparent 1px 12px), repeating-linear-gradient(90deg, rgba(255,255,255,.16) 0 1px, transparent 1px 12px); }
  .ps-segments { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(10, 1fr); pointer-events: none; }
  .ps-segment { position: relative; border-right: 1px dashed rgba(255, 255, 255, .18); }
  .ps-segment:last-child { border-right: 0; }
  .ps-segment.out { background: repeating-linear-gradient(45deg, rgba(255,80,80,.10) 0 8px, transparent 8px 16px); }
  .ps-segment.save { background: repeating-linear-gradient(45deg, rgba(143,166,217,.14) 0 8px, transparent 8px 16px); }
  .ps-segment.hot { background: rgba(255, 216, 77, .2); }
  .ps-segment.out.hot { background: rgba(255, 80, 80, .26); }
  .ps-segment.save.hot { background: rgba(143, 166, 217, .3); }
  .ps-segment span { position: absolute; left: 50%; bottom: 6px; transform: translateX(-50%); color: #fff; font-size: 11px; font-weight: 900; letter-spacing: .03em; text-shadow: 0 2px 6px rgba(0,0,0,.8); }
  .ps-segment.out span { color: #ff9b86; }
  .ps-segment.save span { color: #8fa6d9; }
  .ps-target { position: absolute; top: 30%; left: 0; width: 44px; height: 44px; margin-left: -22px; border: 4px solid #ffd84d; border-radius: 50%; box-shadow: 0 0 16px rgba(255, 216, 77, .75), inset 0 0 10px rgba(255, 216, 77, .5); z-index: 2; pointer-events: none; }
  .ps-target::after { content: ""; position: absolute; left: 50%; top: 50%; width: 8px; height: 8px; transform: translate(-50%, -50%); border-radius: 50%; background: #ffd84d; }
  .ps-keeper { position: absolute; left: 50%; top: calc(26px + 55%); transform: translateX(-50%); font-size: clamp(64px, 10vh, 92px); line-height: 1; transition: transform .45s cubic-bezier(.3, 1.2, .5, 1); pointer-events: none; z-index: 2; }
  .ps-keeper-img { display: none; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: clamp(100px, 18vh, 156px); height: auto; }
  .ps-keeper-img-ready { width: clamp(90px, 16.2vh, 140px); }
  .ps-keeper-img-left, .ps-keeper-img-right, .ps-keeper-img-left-goal, .ps-keeper-img-right-goal { width: clamp(114px, 20.5vh, 178px); }
  .ps-keeper-img.show { display: block; animation: ps-keeper-dive .5s cubic-bezier(.28, 1.35, .38, 1); }
  @keyframes ps-keeper-dive { 0% { transform: translateX(-50%) scale(.8); } 55% { transform: translateX(-50%) scale(1.2); } 100% { transform: translateX(-50%) scale(1); } }
  .ps-ball { position: absolute; left: 50%; bottom: 14px; transform: translate(-50%, 0) scale(1); font-size: clamp(34px, 5.5vh, 46px); line-height: 1; opacity: 1; transition: transform .55s cubic-bezier(.25, .9, .4, 1), opacity .18s ease; pointer-events: none; z-index: 3; }
  .ps-instruction { margin: 12px 0 0; color: #8fa6d9; font-size: 13.5px; font-weight: 800; letter-spacing: .05em; }
  .ps-clock { margin: 6px 0 0; color: #ffd84d; font-size: 13px; font-weight: 900; letter-spacing: .08em; opacity: 0; transition: opacity .2s ease; }
  .ps-clock.show { opacity: 1; }
  .ps-clock.decaying { color: #ff8066; }
  .ps-result { position: absolute; left: 50%; top: 38%; transform: translate(-50%, -50%) scale(.6); z-index: 4; padding: 12px 34px; border-radius: 16px; font-family: 'Barlow Condensed', 'Bebas Neue', sans-serif; font-size: clamp(40px, 6vw, 64px); font-weight: 800; letter-spacing: .12em; opacity: 0; transition: transform .3s cubic-bezier(.2, 1.4, .4, 1), opacity .25s ease; pointer-events: none; }
  .ps-result.show { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  .ps-result.goal { color: #0a2d14; background: linear-gradient(135deg, #8dffb8, #46e07f); box-shadow: 0 0 40px rgba(101, 230, 184, .6); }
  .ps-result.miss { color: #fff0ec; background: linear-gradient(135deg, #a3372a, #7a1d12); box-shadow: 0 0 40px rgba(255, 128, 102, .45); }
  .ps-ready { position: absolute; inset: 0; z-index: 5; display: flex; align-items: center; justify-content: center; background: rgba(4, 10, 28, .78); border-radius: 18px; }
  .ps-ready-text { font-family: 'Barlow Condensed', 'Bebas Neue', sans-serif; font-size: clamp(32px, 6vw, 54px); font-weight: 800; letter-spacing: .14em; color: #ffd84d; text-shadow: 0 0 24px rgba(255, 216, 77, .6); animation: ps-pulse 1s ease-in-out infinite; }
  .ps-go-btn { border: 0; background: linear-gradient(135deg, #8dffb8, #46e07f); color: #0a2d14; font-family: 'Barlow Condensed', 'Bebas Neue', sans-serif; font-size: clamp(30px, 5.5vw, 46px); font-weight: 800; letter-spacing: .12em; padding: 18px 48px; border-radius: 999px; cursor: pointer; box-shadow: 0 0 36px rgba(101, 230, 184, .55); animation: ps-pulse 1s ease-in-out infinite; }
  @keyframes ps-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.08); opacity: .7; } }
  .ps-actions { display: flex; justify-content: center; gap: 12px; margin-top: 14px; }
  .ps-btn { padding: 13px 34px; border: 0; border-radius: 999px; background: linear-gradient(135deg, #ffe27a, #ffb648); color: #14183a; font-family: 'Barlow Condensed', sans-serif; font-size: 19px; font-weight: 800; letter-spacing: .12em; cursor: pointer; }
  .ps-btn.ghost { background: transparent; border: 1px solid #2b4084; color: #d9e4ff; }
  .ps-btn.shoot { font-size: 22px; padding: 14px 46px; box-shadow: 0 10px 26px rgba(255, 199, 61, .3); }
  .ps-btn.shoot:disabled { opacity: .4; cursor: default; }
  `;

  let cssInjected = false;
  function injectCss() {
    if (cssInjected) return;
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    cssInjected = true;
  }

  function currentChance(baseChances, index, shotElapsedSeconds) {
    const base = baseChances[index];
    if (base === 0) return 0;
    const decaySeconds = Math.max(0, shotElapsedSeconds - DECAY_GRACE_SECONDS);
    const decay = Math.floor(decaySeconds) * DECAY_PER_SECOND;
    return Math.max(0, Math.min(100, base - decay));
  }

  function open(options = {}) {
    injectCss();
    document.getElementById("psOverlay")?.remove();

    const state = CHANCE_TABLES[options.state] ? options.state : "wrong";
    const baseChances = CHANCE_TABLES[state];
    const soundBase = options.soundBase || "../sounds/";
    const soundPaths = {
      crowd: `${soundBase}crowd.mp3`,
      kick: `${soundBase}kick-ball.mp3`,
      goal: `${soundBase}goal.mp3`,
      miss: `${soundBase}shoot-miss.mp3`,
      ...(options.sounds || {})
    };

    const imageBase = options.imageBase || "images/minigames/";
    const keeperImages = {
      ready: `${imageBase}goal-keeper-ready.webp`,
      front: `${imageBase}goal-keeper-front.webp`,
      left: `${imageBase}goal-keeper-left.webp`,
      right: `${imageBase}goal-keeper-right.webp`,
      leftGoal: `${imageBase}goal-keeper-left-goal.webp`,
      rightGoal: `${imageBase}goal-keeper-right-goal.webp`,
      ...(options.keeperImages || {})
    };

    const activeAudio = [];
    function playSound(src, { loop = false, volume = 1 } = {}) {
      if (!src) return null;
      const audio = new Audio(src);
      audio.loop = loop;
      audio.volume = volume;
      audio.play().catch(() => {});
      activeAudio.push(audio);
      return audio;
    }
    function fadeOutAudio(audio, duration = 350) {
      const steps = 12;
      const stepTime = duration / steps;
      const startVolume = audio.volume;
      let step = 0;
      const fade = setInterval(() => {
        step += 1;
        if (step >= steps) {
          clearInterval(fade);
          audio.pause();
          audio.currentTime = 0;
          return;
        }
        audio.volume = Math.max(0, startVolume * (1 - step / steps));
      }, stepTime);
    }
    function stopAllSounds() {
      const audios = activeAudio.slice();
      activeAudio.length = 0;
      audios.forEach((audio) => fadeOutAudio(audio));
    }

    let finished = false;
    let closed = false;
    let shooting = false;
    let resultPayload = null;
    let rafId = null;
    let readyTimer = null;
    let shotStart = 0;

    const overlay = document.createElement("div");
    overlay.id = "psOverlay";
    overlay.className = "ps-overlay";

    const chipTone = state === "correct" ? "good" : state === "partial" ? "partial" : "bad";
    const chipText = options.stateLabel
      || (state === "correct" ? "CORRECT ANSWER — FULL POWER!" : state === "partial" ? "SO CLOSE! (1 letter off)" : "WRONG ANSWER");

    overlay.innerHTML = `
      <div class="ps-card">
        <p class="ps-kicker">BONUS GAME</p>
        <h2 class="ps-title">⚽ PENALTY SHOOTOUT</h2>
        <div class="ps-chip ${chipTone}">${chipText}</div>
        <div class="ps-pitch">
          <div class="ps-goal"></div>
          <div class="ps-keeper">
            <img class="ps-keeper-img ps-keeper-img-ready show" alt="" />
            <img class="ps-keeper-img ps-keeper-img-front" alt="" />
            <img class="ps-keeper-img ps-keeper-img-left" alt="" />
            <img class="ps-keeper-img ps-keeper-img-right" alt="" />
            <img class="ps-keeper-img ps-keeper-img-left-goal" alt="" />
            <img class="ps-keeper-img ps-keeper-img-right-goal" alt="" />
          </div>
          <div class="ps-ball">⚽</div>
          <div class="ps-segments"></div>
          <div class="ps-target"></div>
          <div class="ps-result"></div>
          <div class="ps-ready"><span class="ps-ready-text">GET READY...</span></div>
        </div>
        <p class="ps-instruction">Watch the target and press SHOOT at the right moment!</p>
        <p class="ps-clock">TIME: 0s</p>
        <div class="ps-actions">
          <button type="button" class="ps-btn shoot" disabled>SHOOT! ⚽</button>
          <button type="button" class="ps-btn ghost ps-skip">SKIP</button>
        </div>
      </div>
    `;

    const pitch = overlay.querySelector(".ps-pitch");
    const goal = overlay.querySelector(".ps-goal");
    const segmentsWrap = overlay.querySelector(".ps-segments");
    const keeper = overlay.querySelector(".ps-keeper");
    const keeperImgReady = overlay.querySelector(".ps-keeper-img-ready");
    const keeperImgFront = overlay.querySelector(".ps-keeper-img-front");
    const keeperImgLeft = overlay.querySelector(".ps-keeper-img-left");
    const keeperImgRight = overlay.querySelector(".ps-keeper-img-right");
    const keeperImgLeftGoal = overlay.querySelector(".ps-keeper-img-left-goal");
    const keeperImgRightGoal = overlay.querySelector(".ps-keeper-img-right-goal");
    keeperImgReady.src = keeperImages.ready;
    keeperImgFront.src = keeperImages.front;
    keeperImgLeft.src = keeperImages.left;
    keeperImgRight.src = keeperImages.right;
    keeperImgLeftGoal.src = keeperImages.leftGoal;
    keeperImgRightGoal.src = keeperImages.rightGoal;
    const ball = overlay.querySelector(".ps-ball");
    const target = overlay.querySelector(".ps-target");
    const resultBadge = overlay.querySelector(".ps-result");
    const readyOverlay = overlay.querySelector(".ps-ready");
    const instruction = overlay.querySelector(".ps-instruction");
    const clockLabel = overlay.querySelector(".ps-clock");
    const actions = overlay.querySelector(".ps-actions");
    const shootButton = overlay.querySelector(".ps-btn.shoot");
    const skipButton = overlay.querySelector(".ps-skip");

    function isOutIndex(index) {
      return index === 0 || index === 9;
    }

    const segments = baseChances.map((base, index) => {
      const segment = document.createElement("div");
      const out = isOutIndex(index);
      const save = !out && base === 0;
      segment.className = `ps-segment${out ? " out" : save ? " save" : ""}`;
      segment.innerHTML = `<span>${out ? "OUT" : save ? "SAVE" : `${base}%`}</span>`;
      segmentsWrap.append(segment);
      return segment;
    });

    function refreshSegmentLabels(shotElapsedSeconds) {
      segments.forEach((segment, index) => {
        const base = baseChances[index];
        if (base === 0) return;
        const chance = currentChance(baseChances, index, shotElapsedSeconds);
        segment.querySelector("span").textContent = `${chance}%`;
      });
    }

    /* ---------- Unpredictable target movement ---------- */
    const movement = {
      x: 50,                                    // percent across the pitch
      velocity: (Math.random() < 0.5 ? -1 : 1) * (30 + Math.random() * 26),
      nextTwist: 0,
      lastTime: 0,
      hotIndex: -1
    };

    function scheduleTwist(now) {
      movement.nextTwist = now + 220 + Math.random() * 480;
    }

    function tick(now) {
      if (finished || closed) return;
      if (!movement.lastTime) {
        movement.lastTime = now;
        scheduleTwist(now);
      }
      const dt = Math.min((now - movement.lastTime) / 1000, 0.05);
      movement.lastTime = now;

      if (now >= movement.nextTwist) {
        const direction = Math.random() < 0.55 ? -Math.sign(movement.velocity) : Math.sign(movement.velocity);
        movement.velocity = direction * (26 + Math.random() * 40);
        scheduleTwist(now);
      }

      movement.x += movement.velocity * dt;
      if (movement.x < 3) { movement.x = 3; movement.velocity = Math.abs(movement.velocity); }
      if (movement.x > 97) { movement.x = 97; movement.velocity = -Math.abs(movement.velocity); }

      target.style.transform = `translateX(${(movement.x / 100) * pitch.clientWidth}px)`;

      const index = Math.min(9, Math.max(0, Math.floor(movement.x / 10)));
      if (index !== movement.hotIndex) {
        if (movement.hotIndex >= 0) segments[movement.hotIndex].classList.remove("hot");
        segments[index].classList.add("hot");
        movement.hotIndex = index;
      }

      if (shooting) {
        const elapsed = (now - shotStart) / 1000;
        clockLabel.textContent = `TIME: ${Math.floor(elapsed)}s`;
        clockLabel.classList.toggle("decaying", elapsed > DECAY_GRACE_SECONDS);
        refreshSegmentLabels(elapsed);
      }

      rafId = requestAnimationFrame(tick);
    }

    function close() {
      closed = true;
      if (readyTimer) clearTimeout(readyTimer);
      if (rafId) cancelAnimationFrame(rafId);
      stopAllSounds();
      overlay.remove();
      options.onClose?.(resultPayload);
    }

    skipButton.addEventListener("click", close);

    function shoot() {
      if (finished || closed || !shooting) return;
      finished = true;
      if (rafId) cancelAnimationFrame(rafId);
      shootButton.disabled = true;
      playSound(soundPaths.kick);

      const shotElapsedSeconds = (performance.now() - shotStart) / 1000;
      const index = Math.min(9, Math.max(0, Math.floor(movement.x / 10)));
      const base = baseChances[index];
      const chance = currentChance(baseChances, index, shotElapsedSeconds);
      const roll = Math.random() * 100;
      const scored = roll < chance;
      resultPayload = { scored, segment: index + 1, chance, roll: Math.round(roll) };

      // Ball flies to where the target is right now, landing on the goal line.
      const pitchRect = pitch.getBoundingClientRect();
      const goalRect = goal.getBoundingClientRect();
      const dx = (movement.x - 50) / 100 * pitchRect.width;
      const ballStartY = pitchRect.bottom - 14;
      const dy = goalRect.bottom - ballStartY;
      ball.style.transform = `translate(calc(-50% + ${dx}px), ${dy}px) scale(.62)`;

      const isOut = isOutIndex(index);
      const isCenter = index === 4 || index === 5;
      const saved = !scored && !isOut;
      if (saved) {
        keeperImgReady.classList.remove("show");
        if (isCenter) {
          keeper.style.transform = `translate(calc(-50% + ${dx}px), 4px)`;
          keeperImgFront.classList.add("show");
        } else {
          const diveLeft = dx < 0;
          keeper.style.transform = `translate(calc(-50% + ${dx}px), 4px) rotate(${diveLeft ? -24 : 24}deg)`;
          const diveImg = diveLeft ? keeperImgLeft : keeperImgRight;
          diveImg.classList.add("show");
        }
      }

      if (scored) {
        // The keeper guesses wrong: dives to the opposite side of where the ball actually went.
        const keeperDiveLeft = dx >= 0;
        const keeperDx = -dx;
        keeperImgReady.classList.remove("show");
        keeper.style.transform = `translate(calc(-50% + ${keeperDx}px), 4px) rotate(${keeperDiveLeft ? -24 : 24}deg)`;
        const missImg = keeperDiveLeft ? keeperImgLeftGoal : keeperImgRightGoal;
        missImg.classList.add("show");
      }

      setTimeout(() => {
        if (closed) return;
        if (saved) ball.style.opacity = "0";
        resultBadge.textContent = scored ? "GOAL!" : (isOut ? "OUT!" : "SAVED!");
        resultBadge.className = `ps-result show ${scored ? "goal" : "miss"}`;
        playSound(scored ? soundPaths.goal : soundPaths.miss);
        instruction.textContent = scored
          ? `You hit the ${chance}% zone and scored!`
          : (isOut ? "That one flew into the stands..." : `The keeper got it! (${chance}% chance)`);
        shootButton.remove();
        skipButton.remove();
        const continueButton = document.createElement("button");
        continueButton.type = "button";
        continueButton.className = "ps-btn";
        continueButton.textContent = "CONTINUE";
        continueButton.addEventListener("click", close);
        actions.append(continueButton);
      }, 620);
    }

    shootButton.addEventListener("click", shoot);

    document.body.append(overlay);
    playSound(soundPaths.crowd, { loop: true, volume: 0.55 });

    // Target sits still (centered) until the player presses GO.
    target.style.transform = `translateX(${(movement.x / 100) * pitch.clientWidth}px)`;
    segments[Math.floor(movement.x / 10)].classList.add("hot");
    movement.hotIndex = Math.floor(movement.x / 10);

    function startShooting() {
      if (closed) return;
      readyOverlay.remove();
      shootButton.disabled = false;
      shooting = true;
      shotStart = performance.now();
      clockLabel.classList.add("show");
      rafId = requestAnimationFrame(tick);
    }

    readyTimer = setTimeout(() => {
      if (closed) return;
      const readyText = readyOverlay.querySelector(".ps-ready-text");
      const goButton = document.createElement("button");
      goButton.type = "button";
      goButton.className = "ps-go-btn";
      goButton.textContent = "GO! ⚽";
      goButton.addEventListener("click", startShooting);
      readyText.replaceWith(goButton);
    }, 1400);
  }

  window.PenaltyShootout = { open };
})();
