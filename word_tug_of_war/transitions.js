(() => {
  'use strict';
  const questionAnimations = new WeakMap();
  const answerWordAnimations = new WeakMap();
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const questionMotion = () => !document.body.classList.contains('tug-lite') && !reduceMotion();
  const questionParts = card => [...card.querySelectorAll('.side-word:not(.word-answer-moving), .word-prompt, .picture-choice:not(.answer-hidden)')];

  function animateQuestion(card, leaving) {
    (questionAnimations.get(card) || []).forEach(animation => animation.cancel());
    if (!questionMotion()) return;
    const animations = questionParts(card).filter(node => node.animate).map(node => node.animate(
      leaving ? [{ opacity: 1, scale: '1' }, { opacity: 0, scale: '.7' }]
        : [{ opacity: 0, scale: '.7' }, { opacity: 1, scale: '1' }],
      { duration: leaving ? 360 : 450, easing: leaving ? 'cubic-bezier(.55, 0, .8, .4)' : 'cubic-bezier(.2, .7, .25, 1)',
        fill: leaving ? 'forwards' : 'none' }
    ));
    questionAnimations.set(card, animations);
  }

  document.querySelectorAll('main > section').forEach(screen => { screen.inert = screen.hidden; });

  window.TugTransitions = {
    showScreen(name) {
      document.querySelectorAll('main > section').forEach(screen => {
        screen.hidden = screen.id !== name + '-screen';
        screen.inert = screen.hidden;
      });
    },
    revealQuestion(card) {
      card.classList.remove('tug-question-loading');
      animateQuestion(card, false);
    },
    moveAnswerWord(card) {
      const word = card.querySelector('.side-word');
      const picture = card.querySelector('.picture-choice.correct');
      if (!word || !picture || !questionMotion()) return;
      word.classList.add('word-answer-moving');
      word.getAnimations().forEach(animation => animation.cancel());
      const origin = word.getBoundingClientRect();
      const target = picture.getBoundingClientRect();
      const x = target.left + target.width / 2 - origin.left - origin.width / 2;
      const y = target.bottom + 10 + origin.height * 1.3 / 2 - origin.top - origin.height / 2;
      const transform = `translate(${x}px, ${y}px) scale(1.3)`;
      const animation = word.animate([{ transform: 'translate(0, 0) scale(1)' }, { transform }],
        { duration: 300, easing: 'cubic-bezier(.2, .7, .25, 1)', fill: 'forwards' });
      answerWordAnimations.set(card, { word, animation });
    },
    dismissQuestion(card) {
      if (!card || card.dataset.questionLeaving) return;
      card.dataset.questionLeaving = 'true';
      const moving = answerWordAnimations.get(card);
      if (moving) {
        const transform = getComputedStyle(moving.word).transform;
        moving.animation.cancel();
        if (questionMotion()) moving.word.animate([{ transform }, { transform: 'translate(0, 0) scale(1)' }],
          { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        answerWordAnimations.delete(card);
      }
      animateQuestion(card, true);
    },
    enterOverlay(node) {
      if (reduceMotion() || !node.animate) return;
      node.animate([{ opacity: 0, scale: '.86' }, { opacity: 1, scale: '1' }],
        { duration: 450, easing: 'cubic-bezier(.2, .7, .25, 1)' });
    },
    removeOverlay(node) {
      if (node.dataset.leaving) return;
      node.dataset.leaving = 'true';
      if (reduceMotion() || !node.animate) { node.remove(); return; }
      node.animate([{ opacity: 1, scale: '1' }, { opacity: 0, scale: '.86' }],
        { duration: 360, easing: 'cubic-bezier(.55, 0, .8, .4)', fill: 'forwards' })
        .finished.then(() => node.remove(), () => node.remove());
    }
  };
})();
