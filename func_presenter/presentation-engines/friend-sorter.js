// Reusable friendship sorting presentation activity.
function clearFriendSorter() {
  document.getElementById("friendSorter")?.remove();
  els.exampleCard?.classList.remove("friend-sorter-active", "friend-sorter-shake");
}

function playFriendSorterSound(isCorrect) {
  new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
}

function shuffleFriendSorterCards(cards) {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function renderFriendSorter(example) {
  const data = example.friendSorter;
  if (!data) return;
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.exampleCard.classList.add("friend-sorter-active");

  const root = document.createElement("section");
  root.id = "friendSorter";
  root.className = "friend-sorter";
  const heading = document.createElement("h2");
  heading.textContent = data.heading || "CHOOSE YOUR FRIENDS";
  const cardGrid = document.createElement("div");
  cardGrid.className = "friend-sorter-cards";
  const zones = document.createElement("div");
  zones.className = "friend-sorter-zones";

  let selectedCard = null;
  let expandedCard = null;
  let expandedSourceCard = null;
  const setSelectedCard = (card) => {
    selectedCard?.classList.remove("selected");
    selectedCard = card;
    selectedCard?.classList.add("selected");
  };
  const closeExpandedCard = () => {
    expandedCard?.remove();
    expandedCard = null;
    expandedSourceCard = null;
  };
  const toggleExpandedCard = (card, cardData) => {
    if (card.dataset.sorted === "true") return;
    if (expandedSourceCard === card) {
      closeExpandedCard();
      return;
    }
    closeExpandedCard();
    const cardRect = card.getBoundingClientRect();
    const gridRect = cardGrid.getBoundingClientRect();
    const gap = Number.parseFloat(getComputedStyle(cardGrid).columnGap) || 0;
    const width = Math.min(gridRect.width, (cardRect.width * 2) + gap);
    const height = Math.min(gridRect.height, (cardRect.height * 2) + gap);
    const overlay = document.createElement("button");
    overlay.type = "button";
    overlay.className = "friend-sorter-expanded-card";
    overlay.style.width = `${width}px`;
    overlay.style.height = `${height}px`;
    overlay.style.left = `${Math.max(0, Math.min(cardRect.left - gridRect.left, gridRect.width - width))}px`;
    overlay.style.top = `${Math.max(0, Math.min(cardRect.top - gridRect.top, gridRect.height - height))}px`;
    const portrait = document.createElement("img");
    portrait.src = `../olivias_movie_memories/assets/portraits/${cardData.name.toLowerCase()}.webp`;
    portrait.alt = cardData.name;
    const text = document.createElement("p");
    text.innerHTML = `<strong>This is ${cardData.name}.</strong> ${cardData.text}`;
    overlay.append(portrait, text);
    overlay.addEventListener("click", closeExpandedCard);
    cardGrid.append(overlay);
    expandedCard = overlay;
    expandedSourceCard = card;
    setSelectedCard(card);
  };
  const placeCard = (card, category, target) => {
    if (!card || card.dataset.sorted === "true") return;
    if (card.dataset.category !== category) {
      playFriendSorterSound(false);
      els.exampleCard.classList.remove("friend-sorter-shake");
      void els.exampleCard.offsetWidth;
      els.exampleCard.classList.add("friend-sorter-shake");
      window.setTimeout(() => els.exampleCard.classList.remove("friend-sorter-shake"), 360);
      return;
    }
    playFriendSorterSound(true);
    card.dataset.sorted = "true";
    card.draggable = false;
    card.classList.remove("selected");
    card.classList.add("sorted");
    target.append(card);
    if (expandedSourceCard === card) closeExpandedCard();
    selectedCard = null;
  };
  const makeZone = (category, label) => {
    const zone = document.createElement("section");
    zone.className = `friend-sorter-zone ${category}`;
    const zoneLabel = document.createElement("h3");
    zoneLabel.textContent = label;
    const dropArea = document.createElement("div");
    dropArea.className = "friend-sorter-drop-area";
    zone.append(zoneLabel, dropArea);
    zone.addEventListener("click", () => placeCard(selectedCard, category, dropArea));
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const card = document.getElementById(event.dataTransfer.getData("text/plain"));
      placeCard(card, category, dropArea);
    });
    return zone;
  };

  shuffleFriendSorterCards(data.cards).forEach((cardData, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.id = `friendSorterCard${index}`;
    card.className = "friend-sorter-card";
    card.dataset.category = cardData.category;
    card.draggable = true;
    const portrait = document.createElement("img");
    portrait.src = `../olivias_movie_memories/assets/portraits/${cardData.name.toLowerCase()}.webp`;
    portrait.alt = cardData.name;
    const text = document.createElement("p");
    text.innerHTML = `<strong>This is ${cardData.name}.</strong> ${cardData.text}`;
    card.append(portrait, text);
    card.addEventListener("click", () => toggleExpandedCard(card, cardData));
    card.addEventListener("dragstart", (event) => {
      setSelectedCard(card);
      event.dataTransfer.setData("text/plain", card.id);
    });
    cardGrid.append(card);
  });

  zones.append(
    makeZone("positive", data.positiveLabel || "You should be friends with ..."),
    makeZone("negative", data.negativeLabel || "You shouldn't be friends with ...")
  );
  root.append(heading, cardGrid, zones);
  els.presenceView.replaceChildren(root);
}
