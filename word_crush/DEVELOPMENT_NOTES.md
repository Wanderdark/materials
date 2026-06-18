# WORD CRUSH Development Notes

## Current Priority

- Build only the core single-player game loop first.
- Do not implement character creation, class selection, avatars, achievements, daily quests, ranks, global score, or leaderboard yet.
- Leave clean integration points so those systems can be added after the core loop is playable.

## Reference From Word Reveal SP

- `F:\OYUN_SITESI\word_reveal\sp.html` contains reusable patterns for:
  - Main menu and single-player screen flow.
  - Character/profile creation.
  - Campaign/level selection.
  - Achievement, rank, score, and leaderboard systems.
  - Per-level run state, scoring, streaks, lives, and final result handling.
- `F:\OYUN_SITESI\word_reveal\DEVELOPMENT_NOTES.md` emphasizes modular files, readable code, and avoiding dense single-file prototype growth.

## Architecture Direction

- Keep systems separated from the start:
  - `index.html`
  - `styles/base.css`
  - `styles/game.css`
  - `data/words.js`
  - `core/game-state.js`
  - `core/game-loop.js`
  - `ui/screens.js`
  - `ui/game-board.js`
  - Later: `systems/profile.js`, `systems/achievements.js`, `systems/daily-quests.js`, `systems/ranks.js`, `systems/leaderboard.js`
- Prefer small modules with explicit responsibilities.
- Keep functions multi-line and easy to patch.
- Avoid coupling the core game loop to future meta-progression systems.

## Core Loop Contract

- The game loop should own:
  - Current round state.
  - Word/question selection.
  - Player input validation.
  - Score and streak updates.
  - Round transitions.
  - End-of-run summary.
- Future systems should consume loop events rather than live inside the loop:
  - `runStarted`
  - `roundStarted`
  - `answerSubmitted`
  - `roundEnded`
  - `runEnded`

## Later Integration Points

- Profile system should decide who is playing before the loop starts.
- Campaign/level system should provide the word pool, difficulty, lives, and target count.
- Achievements, quests, ranks, and leaderboard should read finalized run results.
- Classroom fork should reuse the core loop but replace persistence and session flow.
