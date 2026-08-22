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
  const setSelectedCard = (card) => {
    selectedCard?.classList.remove("selected");
    selectedCard = card;
    selectedCard?.classList.add("selected");
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
    portrait.src = `images/dialogue/${cardData.name.toLowerCase()}_front.webp`;
    portrait.alt = cardData.name;
    const text = document.createElement("p");
    text.innerHTML = `<strong>This is ${cardData.name}.</strong> ${cardData.text}`;
    card.append(portrait, text);
    card.addEventListener("click", () => setSelectedCard(card));
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
