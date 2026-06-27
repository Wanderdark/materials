let activityAudioContext = null;

function playActivityTone(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    activityAudioContext = activityAudioContext || new AudioContext();
    const start = activityAudioContext.currentTime;
    const oscillator = activityAudioContext.createOscillator();
    const gain = activityAudioContext.createGain();
    const isCorrect = type === "correct-position";
    oscillator.type = isCorrect ? "sine" : "sawtooth";
    oscillator.frequency.setValueAtTime(isCorrect ? 920 : 125, start);
    oscillator.frequency.exponentialRampToValueAtTime(isCorrect ? 1240 : 78, start + (isCorrect ? .12 : .2));
    gain.gain.setValueAtTime(isCorrect ? .07 : .11, start);
    gain.gain.exponentialRampToValueAtTime(.001, start + (isCorrect ? .14 : .23));
    oscillator.connect(gain);
    gain.connect(activityAudioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + (isCorrect ? .15 : .24));
  } catch {
    // Activities remain playable when browser audio is unavailable.
  }
}

function shuffleActivityItems(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

window.exerciseActivityModules = {
  choice(config) {
    return { activity: "choice", ...config };
  },
  sort(config) {
    return { activity: "sort", ...config };
  },
  orderSentences(config) {
    return { activity: "order-sentences", ...config };
  },
  jumbledSentences(config) {
    return { activity: "jumbled-sentences", lives: 3, ...config };
  },
  matchPictures(config) {
    return { activity: "match-pictures", ...config };
  },
  trueFalseGrid({ statements = [], buildStatements, questionCount, pages, ...config }) {
    function mapStatements(source, prefix) {
      return shuffleActivityItems(source.map((statement, index) => {
        const [sentence, isTrue] = Array.isArray(statement) ? statement : [statement.sentence, statement.isTrue];
        return {
          id: statement.id || `${prefix}-${index + 1}`,
          prompt: sentence,
          options: ["true", "false"],
          answer: String(Boolean(isTrue))
        };
      }));
    }
    return {
      activity: "true-false-grid",
      ...config,
      buildQuestions(functionModule) {
        if (pages) return pages.flatMap((p, pi) => mapStatements(p.statements, `tf-p${pi}`));
        const source = typeof buildStatements === "function" ? buildStatements(functionModule) : statements;
        return mapStatements(source, "true-false").slice(0, questionCount || undefined);
      },
      buildPages: pages ? () => pages.map((p, pi) => ({
        imagePath: p.imagePath,
        questions: mapStatements(p.statements, `tf-p${pi}`)
      })) : null
    };
  },
  pronounMemory(config) {
    return { activity: "pronoun-memory", ...config };
  },
  pronounSnap(config) {
    return { activity: "pronoun-snap", ...config };
  },
  timeSetter(config) {
    return { activity: "time-setter", ...config };
  },
  fillBlank(config) {
    return { activity: "fill-blank", ...config };
  },
  mistakeCorrectIt(config) {
    return { activity: "mistake-correct-it", ...config };
  },
  playTone(type) {
    playActivityTone(type);
  },
  showStamp(isCorrect) {
    const el = document.getElementById('func-stamp');
    if (!el) return;
    el.innerHTML = '';
    const badge = document.createElement('div');
    badge.className = `stamp-badge ${isCorrect ? 'stamp-correct' : 'stamp-wrong'}`;
    badge.textContent = isCorrect ? 'CORRECT' : 'WRONG';
    el.appendChild(badge);
    setTimeout(() => { el.innerHTML = ''; }, 900);
  },
  reorderLockedSlots({ items, dragged, reference, isLocked }) {
    const sourceIndex = items.indexOf(dragged);
    const destinationIndex = reference ? items.indexOf(reference) : items.length;
    if (sourceIndex < 0 || destinationIndex < 0 || isLocked(dragged)) return { changed: false, items };

    const movableItems = items.filter((item) => item !== dragged && !isLocked(item));
    const insertionIndex = items.slice(0, destinationIndex).filter((item) => item !== dragged && !isLocked(item)).length;
    movableItems.splice(insertionIndex, 0, dragged);

    let movableIndex = 0;
    const reorderedItems = items.map((item) => isLocked(item) ? item : movableItems[movableIndex++]);
    return { changed: reorderedItems.some((item, index) => item !== items[index]), items: reorderedItems };
  }
};
