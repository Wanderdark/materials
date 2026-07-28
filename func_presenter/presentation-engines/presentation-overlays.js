// APP-ANCHOR: Generic overlay-content helpers.
function hasOverlaySentenceContent(data = {}) {
  return Boolean((data.sentenceParts || []).length || data.sentence || (data.sentences || []).length);
}

function createOverlaySentenceParts(parts = [], highlight) {
  return parts.map((part) => {
    if (part.choices) {
    const group = document.createElement("span");
    group.className = "inline-choice-group";
      group.dataset.answer = part.answer;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "inline-choice-trigger";
    trigger.textContent = "?";

    const popup = document.createElement("div");
    popup.className = "inline-choice-popup hidden";

    let closeHandler = null;
    const closePopup = () => {
      popup.classList.add("hidden");
      if (closeHandler) {
        document.removeEventListener("click", closeHandler, true);
        closeHandler = null;
        }
      };

      shuffle(part.choices || []).forEach((option) => {
        const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "inline-choice-popup-option";
      btn.textContent = option;
        btn.addEventListener("click", () => {
        const isCorrect = option === group.dataset.answer;
        closePopup();
        trigger.disabled = true;
        trigger.classList.add(isCorrect ? "correct" : "wrong");
          trigger.textContent = group.dataset.answer;
        group.dataset.answered = "true";
          playFeedbackSound(isCorrect);
        });
      popup.append(btn);
      });

      trigger.addEventListener("click", (event) => {
      if (group.dataset.answered) return;
        event.stopPropagation();
      const isHidden = popup.classList.contains("hidden");
      popup.classList.toggle("hidden", !isHidden);
      if (isHidden) {
        closeHandler = (ev) => { if (!group.contains(ev.target)) closePopup(); };
        document.addEventListener("click", closeHandler, true);
        } else if (closeHandler) {
        document.removeEventListener("click", closeHandler, true);
        closeHandler = null;
        }
      });

    group.append(trigger, popup);
    return group;
    }

    const span = document.createElement("span");
    span.className = part.className || "";
    span.innerHTML = highlight(part.text || "");
      return span;
  });
}

function renderOverlaySentenceContent(target, data = {}, highlight) {
  if (data.sentenceParts && data.sentenceParts.length) {
    target.replaceChildren(...createOverlaySentenceParts(data.sentenceParts, highlight));
    return;
  }
  const all = data.sentences || (data.sentence ? [data.sentence] : []);
  target.innerHTML = all.length > 1
      ? all.map((s, i) => `<span class="freq-overlay-line">${i + 1}) ${highlight(s)}</span>`).join("")
      : highlight(all[0] || "");
}

function buildComparisonLayout(comp, hl) {
  const layout = document.createElement("div");
  layout.className = "comp-layout";

  const leftCol = document.createElement("div");
  leftCol.className = "comp-col";
  const leftImg = document.createElement("img");
  leftImg.src = comp.left.imagePath;
  leftImg.className = "comp-img";
  if (comp.left.imageScale) {
    leftImg.style.width = `${comp.left.imageScale * 100}%`;
    leftImg.style.marginInline = "auto";
  }
  const leftCap = document.createElement("p");
  leftCap.className = "comp-caption";
  leftCap.innerHTML = hl(comp.left.caption || "");
  leftCol.append(leftImg, leftCap);

  const divider = document.createElement("div");
  divider.className = "comp-divider";
  const advBtn = document.createElement("button");
  advBtn.className = "comp-advance-btn";
  advBtn.textContent = "›";
  divider.append(advBtn);

  const rightCol = document.createElement("div");
  rightCol.className = "comp-col hidden";
  const rightImg = document.createElement("img");
  rightImg.src = comp.right.imagePath;
  rightImg.className = "comp-img";
  const revealBtn = document.createElement("button");
  revealBtn.className = "comp-reveal-btn";
  revealBtn.textContent = "▶ Reveal";
  const revealSentence = document.createElement("p");
  revealSentence.className = "comp-reveal-sentence hidden";
  revealSentence.innerHTML = hl(comp.right.revealSentence || "");
  revealBtn.addEventListener("click", () => {
    revealSentence.classList.remove("hidden");
    revealBtn.classList.add("hidden");
  });
  rightCol.append(rightImg, revealBtn, revealSentence);

  advBtn.addEventListener("click", () => {
    leftImg.style.removeProperty("width");
    leftImg.style.removeProperty("margin-inline");
    rightCol.classList.remove("hidden");
    advBtn.classList.add("hidden");
  });

  layout.append(leftCol, divider, rightCol);
  return layout;
}

function openPresenceOverlay({ question, topSentence, imageTopSentence, imagePath, sentence, sentenceParts, sentences, interactiveSentences, comparison, imageAspect, imageFit, overlaySize, revealMode, steps, examples, thoughtPortrait }) {
  const overlayData = { sentence, sentenceParts, sentences };
  const highlight = (str) => str.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
  els.presenceOverlay.querySelector(".presence-overlay-continue")?.remove();
  els.presenceOverlay.querySelector(".presence-overlay-portrait")?.remove();
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.remove("thought-mode", "personality-quiz-overlay");
  if (comparison) {
    els.presenceOverlay.classList.add("comparison-mode");
    els.presenceOverlayQuestion.innerHTML = "";
    els.presenceOverlayImage.src = "";
    els.presenceOverlaySentence.replaceChildren(buildComparisonLayout(comparison, highlight));
    els.presenceOverlay.classList.remove("hidden");
    return;
  }
  els.presenceOverlay.classList.remove("comparison-mode");
  const sequenceSteps = (steps && steps.length) ? steps : ((examples && examples.length) ? examples : null);
  if (sequenceSteps && sequenceSteps.length) {
    let stepIndex = 0;
    let showStepSentence = false;
    let continueButton = null;
    const renderStep = () => {
      const step = sequenceSteps[stepIndex];
      const stepTopSentence = step.imageTopSentence || step.topSentence || step.question || imageTopSentence || topSentence || question || "";
      const needsSentenceReveal = Boolean(step.imageTopSentence && hasOverlaySentenceContent(step));
      els.presenceOverlayQuestion.innerHTML = highlight(stepTopSentence);
      els.presenceOverlayImage.classList.toggle("hidden", !step.imagePath);
      if (step.imagePath) {
        els.presenceOverlayImage.src = step.imagePath;
        els.presenceOverlayImage.alt = step.question || question || "";
        els.presenceOverlayImage.style.aspectRatio = step.imageAspect || imageAspect || "";
        els.presenceOverlayImage.style.objectFit = step.imageFit || imageFit || "";
      } else {
        els.presenceOverlayImage.removeAttribute("src");
        els.presenceOverlayImage.alt = "";
        els.presenceOverlayImage.style.aspectRatio = "";
        els.presenceOverlayImage.style.objectFit = "";
      }
      if (showStepSentence || !needsSentenceReveal) {
        renderOverlaySentenceContent(els.presenceOverlaySentence, step, highlight);
      } else {
        els.presenceOverlaySentence.innerHTML = "";
      }
      if (continueButton) {
        continueButton.textContent = ">";
        continueButton.classList.toggle("hidden", !needsSentenceReveal && stepIndex >= sequenceSteps.length - 1);
      }
    };
    renderStep();
    els.presenceOverlay.querySelector(".presence-overlay-card").classList.toggle("overlay-lg", !!overlaySize);
    if (sequenceSteps.length > 1 || sequenceSteps.some((step) => step.imageTopSentence && hasOverlaySentenceContent(step))) {
      continueButton = document.createElement("button");
      continueButton.type = "button";
      continueButton.className = "primary-button presence-overlay-continue";
      continueButton.textContent = ">";
      continueButton.addEventListener("click", () => {
        const step = sequenceSteps[stepIndex];
        if (step.imageTopSentence && hasOverlaySentenceContent(step) && !showStepSentence) {
          showStepSentence = true;
          renderStep();
          return;
        }
        if (stepIndex < sequenceSteps.length - 1) {
        stepIndex += 1;
          showStepSentence = false;
          renderStep();
        } else {
          continueButton.remove();
        }
      });
      els.presenceOverlay.querySelector(".presence-overlay-card").append(continueButton);
    }
    els.presenceOverlay.classList.remove("hidden");
    return;
  }
  const hasImageTopSentence = Boolean(imageTopSentence && hasOverlaySentenceContent(overlayData));
  els.presenceOverlayQuestion.classList.toggle("as-sentence", Boolean(topSentence || imageTopSentence));
  els.presenceOverlayQuestion.innerHTML = highlight(imageTopSentence || topSentence || question || "");
  els.presenceOverlayImage.classList.toggle("hidden", !imagePath);
  if (imagePath) {
    els.presenceOverlayImage.src = imagePath;
    els.presenceOverlayImage.alt = question;
    els.presenceOverlayImage.style.aspectRatio = imageAspect || "";
    els.presenceOverlayImage.style.objectFit = imageFit || "";
  } else {
    els.presenceOverlayImage.removeAttribute("src");
    els.presenceOverlayImage.alt = "";
    els.presenceOverlayImage.style.aspectRatio = "";
    els.presenceOverlayImage.style.objectFit = "";
  }
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.toggle("overlay-lg", !!overlaySize);
  if (thoughtPortrait) {
    const card = els.presenceOverlay.querySelector(".presence-overlay-card");
    card.classList.add("thought-mode");
    const portrait = document.createElement("div");
    portrait.className = "presence-overlay-portrait";
    const portraitImage = document.createElement("img");
    portraitImage.src = thoughtPortrait;
    portraitImage.alt = "";
    portraitImage.addEventListener("error", () => {
      portrait.remove();
      card.classList.remove("thought-mode");
    });
    portrait.append(portraitImage, document.createElement("i"), document.createElement("i"));
    card.append(portrait);
  }
  if (revealMode) {
    const bindReveal = (el, raw) => {
      el.innerHTML = raw.replace(/<([^>]+)>/g,
        (_, w) => `<span class="reveal-blank" data-answer="${w}">?</span>`);
      el.querySelectorAll(".reveal-blank").forEach((span) => {
        span.addEventListener("click", () => {
          span.textContent = span.dataset.answer;
          span.classList.remove("reveal-blank");
          span.classList.add("freq-highlight");
          playFeedbackSound(true);
        });
      });
    };
    if (topSentence) bindReveal(els.presenceOverlayQuestion, topSentence);
    bindReveal(els.presenceOverlaySentence, sentence || "");
    els.presenceOverlay.classList.remove("hidden");
    return;
  }
  if (interactiveSentences) {
    els.presenceOverlaySentence.replaceChildren(
      ...interactiveSentences.map((s) => {
        const p = document.createElement("p");
        p.className = "inline-choice-prompt freq-overlay-line";
        p.append(...createInlineChoiceParts(s.segments));
        return p;
      })
    );
  } else {
    renderOverlaySentenceContent(els.presenceOverlaySentence, overlayData, highlight);
  }
  if (hasImageTopSentence) {
    els.presenceOverlaySentence.innerHTML = "";
    const continueButton = document.createElement("button");
    continueButton.type = "button";
      continueButton.className = "primary-button presence-overlay-continue";
    continueButton.textContent = ">";
    continueButton.addEventListener("click", () => {
      renderOverlaySentenceContent(els.presenceOverlaySentence, overlayData, highlight);
      continueButton.remove();
    });
      els.presenceOverlay.querySelector(".presence-overlay-card").append(continueButton);
  }
  els.presenceOverlay.classList.remove("hidden");
}
