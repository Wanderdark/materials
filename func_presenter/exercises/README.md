# Exercise Activities

Reusable activity types are declared in `activity-modules.js`.

Use one of these factories in a function-specific exercise data file:

```js
window.exerciseActivityModules.jumbledSentences({
  id: "my-jumbled-sentences",
  title: "JUMBLED SENTENCES",
  supports: (functionModule) => functionModule.id === "my-function",
  buildQuestions: (functionModule) => []
});
```

Available factories: `choice`, `sort`, `orderSentences`, `jumbledSentences`, `matchPictures`, `trueFalseGrid`, `pronounMemory`, and `pronounSnap`.

`trueFalseGrid` renders every statement on one two-column screen with a yellow tick and a red cross. It accepts `statements` as `[sentence, isTrue]` pairs, randomizes their order, plays the shared feedback sounds, and reveals true statements in yellow and false statements in red after they are answered:

```js
window.exerciseActivityModules.trueFalseGrid({
  id: "my-true-false",
  title: "TRUE - FALSE",
  supports: (functionModule) => functionModule.id === "my-function",
  statements: [
    ["Students mustn't run in the classroom.", true],
    ["Students can throw trash around.", false]
  ]
});
```

`jumbledSentences` activities default to three lives and use the shared `reorderLockedSlots()` helper, so any correctly positioned word stays locked while the remaining words can still be inserted around it. They also use the shared `playTone()` helper: a high tone for a correct word position and a low tone for a wrong placement. Full-sentence and no-lives-left feedback remain the host tool's `correct.mp3` and `wrong.mp3` sounds.

`pronounMemory` uses `imageGroups` keyed by pronoun and an ordered `levels` array. Each level defines `count`, `revealMs`, and `points`. Images are sampled randomly, then the learner must choose the matching pronouns in image order. A wrong answer ends the game immediately.

`pronounSnap` uses `rounds` in the form `{ pronoun, imagePath }` and a `roundDurationMs` value. Each visual stays on screen for the configured time; correct answers build a streak and earn progressively more points, while wrong answers or missed rounds reset the streak.
