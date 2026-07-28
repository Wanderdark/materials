// APP-ANCHOR: Personality hub state, trait cards, and character overlays.
function clearPersonalityHubVisual() {
  document.getElementById("personalityCharacterZone")?.remove();
}

function getPersonalityHubState(example) {
  if (!example._personalityHubState) {
    example._personalityHubState = {
      activeTraitKey: example.traits?.[0]?.key || "",
      completed: {},
      cooldowns: {},
      correctCount: 0
    };
  }
  return example._personalityHubState;
}

function getPersonalityTraitKeys(trait) {
  return new Set(trait?.keys || [trait?.key].filter(Boolean));
}

function getPersonalityTraitCharacters(example, trait) {
  const keys = getPersonalityTraitKeys(trait);
  return (example.characters || []).filter((character) => character.traits?.some((key) => keys.has(key)));
}

function getPersonalityCompletionKey(trait, character) {
  return `${trait?.key || "trait"}::${character?.name || "character"}`;
}

function getPersonalityBookmarkPath(character) {
  const slug = (character?.bookmarkSlug || character?.name || "").toLowerCase();
  return character?.bookmarkPath || `images/common/bookmarks/${slug}.webp`;
}

function setPersonalityCharacterImage(img, character, useBookmark = true) {
  img.classList.remove("fallback-portrait");
  img.src = useBookmark ? getPersonalityBookmarkPath(character) : character.imagePath;
  img.alt = character.name;
  img.dataset.fallbackSrc = character.imagePath || "";
  img.addEventListener("error", () => {
    if (img.dataset.fallbackSrc && img.src !== img.dataset.fallbackSrc) {
      img.src = img.dataset.fallbackSrc;
      img.classList.add("fallback-portrait");
    }
  }, { once: true });
}

function getPersonalityTraitImagePath(character, traitKey) {
  if (character.traitImages?.[traitKey]) return character.traitImages[traitKey];
  const nameSlug = (character.name || "").toLowerCase();
  const traitSlug = traitKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return `images/personality/${nameSlug}-${traitSlug}.webp`;
}

function isPersonalityTraitComplete(example, trait) {
  const hubState = getPersonalityHubState(example);
  const characters = getPersonalityTraitCharacters(example, trait);
  return characters.length > 0 && characters.every((character) => hubState.completed[getPersonalityCompletionKey(trait, character)]);
}

function isPersonalityTraitCooling(example, trait) {
  const hubState = getPersonalityHubState(example);
  return !isPersonalityTraitComplete(example, trait) && (hubState.cooldowns[trait.key] || 0) > hubState.correctCount;
}

function resolvePersonalityTraitKey(character, trait) {
  return character.traits?.includes(trait.key)
    ? trait.key
    : (trait.keys || []).find((key) => character.traits?.includes(key)) || trait.key;
}

function applyPersonalityPronouns(text, character, sentenceStart = false) {
  const subjectPronoun = character.gender === "boy" ? "He" : "She";
  const reflexive = character.gender === "boy" ? "himself" : "herself";
  const possessive = character.gender === "boy" ? "his" : "her";
  const objectPronoun = character.gender === "boy" ? "him" : "her";
  const result = (text || "")
    .replace(/\bhimself\/herself\b/g, reflexive)
    .replace(/\bhis\/her\b/g, possessive)
    .replace(/\bhim\/her\b/g, objectPronoun)
    .replace(/\bhe\/she\b/g, subjectPronoun.toLowerCase());
  return sentenceStart ? `${subjectPronoun} ${result}` : result;
}

const personalityDistractorBlacklist = {
  polite: ["thoughtful", "helpful", "friendly", "sensitive"],
  thoughtful: ["polite", "helpful", "sensitive", "friendly", "responsible"],
  helpful: ["polite", "thoughtful", "friendly", "generous", "supportive"],
  friendly: ["polite", "helpful", "outgoing", "sociable", "cheerful"],
  sensitive: ["thoughtful", "polite", "shy"],
  funny: ["cheerful", "outgoing", "sociable"],
  cheerful: ["funny", "friendly", "outgoing", "sociable"],
  outgoing: ["friendly", "cheerful", "sociable", "funny"],
  sociable: ["friendly", "cheerful", "outgoing", "funny"],
  determined: ["hardworking", "responsible", "patient"],
  hardworking: ["determined", "responsible", "patient"],
  responsible: ["thoughtful", "hardworking", "determined", "reliable"],
  reliable: ["responsible", "honest", "thoughtful"],
  honest: ["reliable", "responsible"],
  easyGoing: ["laidBack", "friendly", "cheerful"],
  laidBack: ["easyGoing", "patient"],
  patient: ["laidBack", "thoughtful", "responsible"],
  confident: ["outgoing", "energetic", "determined"],
  energetic: ["cheerful", "adventurous", "outgoing", "confident"],
  adventurous: ["energetic", "confident"],
  selfish: ["stingy", "stubborn"],
  stingy: ["selfish"],
  stubborn: ["selfish", "determined"],
  shy: ["sensitive"],
  intelligent: ["creative", "hardworking"],
  creative: ["intelligent"],
  clumsy: ["forgetful"],
  forgetful: ["clumsy"]
};

function getPersonalityBlockedDistractors(traitKey) {
  return new Set(personalityDistractorBlacklist[traitKey] || []);
}

function buildPersonalityDefinitionOptions(example, character, trait) {
  const traitKey = resolvePersonalityTraitKey(character, trait);
  const correctRaw = example.definitions?.[traitKey] || example.definitions?.[trait.key] || "";
  const correct = applyPersonalityPronouns(correctRaw, character, true);
  const blocked = getPersonalityBlockedDistractors(traitKey);
  const distractors = Object.entries(example.definitions || {})
    .filter(([key, value], index, entries) => key !== traitKey && !blocked.has(key) && value !== correctRaw && entries.findIndex(([, otherValue]) => otherValue === value) === index)
    .map(([, value]) => applyPersonalityPronouns(value, character, true));
  return shuffle([
    { text: correct, correct: true },
    ...shuffle(distractors).slice(0, 2).map((text) => ({ text, correct: false }))
  ]);
}

function renderPersonalityHubControls(example) {
  const hubState = getPersonalityHubState(example);
  const grid = document.createElement("div");
  grid.id = "personalityTraitGrid";
  grid.className = "personality-trait-grid";
  (example.traits || []).forEach((trait, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "personality-trait-button";
    button.textContent = trait.label;
    button.dataset.traitKey = trait.key;
    if (isPersonalityTraitComplete(example, trait)) button.classList.add("completed");
    if (isPersonalityTraitCooling(example, trait)) {
      button.classList.add("cooling");
      button.disabled = true;
    }
    button.addEventListener("click", () => {
      if (button.disabled) return;
      hubState.activeTraitKey = trait.key;
      grid.querySelectorAll(".personality-trait-button").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderPersonalityHubVisual(example, trait);
    });
    if ((hubState.activeTraitKey && hubState.activeTraitKey === trait.key) || (!hubState.activeTraitKey && index === 0)) button.classList.add("active");
    grid.append(button);
  });
  els.presenceView.append(grid);
}

function updatePersonalityTraitButtons(example) {
  const grid = document.getElementById("personalityTraitGrid");
  if (!grid) return;
  grid.querySelectorAll(".personality-trait-button").forEach((button) => {
    const trait = (example.traits || []).find((item) => item.key === button.dataset.traitKey);
    if (!trait) return;
    const complete = isPersonalityTraitComplete(example, trait);
    const cooling = isPersonalityTraitCooling(example, trait);
    button.classList.toggle("completed", complete);
    button.classList.toggle("cooling", cooling);
    button.disabled = cooling;
  });
}

function renderPersonalityHubVisual(example, trait) {
  const hubState = getPersonalityHubState(example);
  clearPersonalityHubVisual();
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  const zone = document.createElement("div");
  zone.id = "personalityCharacterZone";
  zone.className = "personality-character-zone";
  const heading = document.createElement("div");
  heading.className = "personality-character-heading";
  heading.textContent = trait ? trait.label : "Choose a personality";
  zone.append(heading);
  const characters = getPersonalityTraitCharacters(example, trait);
  const traitCooling = isPersonalityTraitCooling(example, trait);
  const grid = document.createElement("div");
  grid.className = "personality-character-grid";
  characters.forEach((character) => {
    const completionKey = getPersonalityCompletionKey(trait, character);
    const completed = Boolean(hubState.completed[completionKey]);
    const cooling = traitCooling && !completed;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "personality-character-card";
    card.classList.toggle("completed", completed);
    card.classList.toggle("cooling", cooling);
    card.disabled = cooling;
    const img = document.createElement("img");
    setPersonalityCharacterImage(img, character);
    const name = document.createElement("strong");
    name.textContent = character.name;
    card.append(img, name);
    card.addEventListener("click", () => {
      if (card.disabled) return;
      openPersonalityCharacterOverlay(example, character, trait);
    });
    grid.append(card);
  });
  if (!characters.length) {
    const empty = document.createElement("p");
    empty.className = "personality-empty";
    empty.textContent = "No character is linked yet.";
    grid.append(empty);
  }
  zone.append(grid);
  els.exampleVisualPanel.append(zone);
}

function openPersonalityCharacterOverlay(example, character, trait) {
  const hubState = getPersonalityHubState(example);
  const traitKey = resolvePersonalityTraitKey(character, trait);
  const definition = example.definitions?.[traitKey] || example.definitions?.[trait.key] || "";
  const displayTrait = example.displayNames?.[traitKey] || trait.label;
  const rootSentence = `${character.name} is <${displayTrait}>.`;
  const fullSentence = `${rootSentence} ${applyPersonalityPronouns(definition, character, true)}`;
  const options = buildPersonalityDefinitionOptions(example, character, trait);
  const highlight = (str) => str.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
  const completionKey = getPersonalityCompletionKey(trait, character);
  const alreadyCompleted = Boolean(hubState.completed[completionKey]);

  els.presenceOverlay.querySelector(".presence-overlay-continue")?.remove();
  els.presenceOverlay.querySelector(".presence-overlay-portrait")?.remove();
  els.presenceOverlay.classList.remove("comparison-mode");
  els.presenceOverlayQuestion.classList.add("as-sentence");
  els.presenceOverlayQuestion.innerHTML = highlight(rootSentence);
  els.presenceOverlayImage.classList.remove("hidden");
  const overlayImage = els.presenceOverlayImage;
  overlayImage.classList.remove("fallback-portrait");
  overlayImage.src = getPersonalityTraitImagePath(character, traitKey);
  overlayImage.alt = `${character.name} – ${displayTrait}`;
  overlayImage.dataset.fallbackSrc = character.imagePath || "";
  overlayImage.addEventListener("error", () => {
    if (overlayImage.dataset.fallbackSrc && overlayImage.src !== overlayImage.dataset.fallbackSrc) {
      overlayImage.src = overlayImage.dataset.fallbackSrc;
    }
  }, { once: true });
  els.presenceOverlayImage.style.aspectRatio = "1 / 1";
  els.presenceOverlayImage.style.objectFit = "cover";
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.add("overlay-lg", "personality-quiz-overlay");

  if (alreadyCompleted) {
    els.presenceOverlaySentence.innerHTML = `<p class="personality-definition-result">${highlight(fullSentence)}</p>`;
    els.presenceOverlay.classList.remove("hidden");
    return;
  }

  const wrap = document.createElement("div");
  wrap.className = "personality-definition-quiz";
  const instruction = document.createElement("p");
  instruction.className = "personality-definition-instruction";
  instruction.textContent = "Choose the correct description.";
  const optionWrap = document.createElement("div");
  optionWrap.className = "personality-definition-options";
  const result = document.createElement("p");
  result.className = "personality-definition-result hidden";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "personality-definition-option";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      if (wrap.dataset.locked === "true") return;
      if (!option.correct) {
        playFeedbackSound(false);
        button.classList.add("wrong");
        return;
      }
      wrap.dataset.locked = "true";
      playFeedbackSound(true);
      button.classList.add("correct");
      if (!hubState.completed[completionKey]) {
        hubState.completed[completionKey] = true;
        hubState.correctCount += 1;
        const traitCharacters = getPersonalityTraitCharacters(example, trait);
        const allTraitCardsComplete = traitCharacters.every((item) => hubState.completed[getPersonalityCompletionKey(trait, item)]);
        if (traitCharacters.length > 1 && !allTraitCardsComplete) {
          hubState.cooldowns[trait.key] = hubState.correctCount + 3;
        }
      }
      instruction.remove();
      optionWrap.remove();
      result.innerHTML = highlight(fullSentence);
      result.classList.remove("hidden");
      const continueButton = document.createElement("button");
      continueButton.type = "button";
      continueButton.className = "primary-button presence-overlay-continue";
      continueButton.textContent = "CONTINUE";
      continueButton.addEventListener("click", closePresenceOverlay);
      els.presenceOverlay.querySelector(".presence-overlay-card").append(continueButton);
      updatePersonalityTraitButtons(example);
      renderPersonalityHubVisual(example, trait);
    });
    optionWrap.append(button);
  });
  wrap.append(instruction, optionWrap, result);
  els.presenceOverlaySentence.replaceChildren(wrap);
  els.presenceOverlay.classList.remove("hidden");
}

