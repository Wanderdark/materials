# func_presenter app.js index

Read this index before inspecting `app.js`. Function line numbers drift, so search for the anchor text instead of relying on line numbers.

## Core runtime

- `APP-ANCHOR: DOM references and shared UI synchronization.`
- `APP-ANCHOR: Shared presentation and exercise state.` The shared `state` object is immediately above this marker.
- `APP-ANCHOR: Initial application bootstrap.`
- `APP-ANCHOR: Character room and room-dialogue interaction.` Implemented in `presentation-engines/character-room.js`.

## Presentation flow

- `APP-ANCHOR: Grade, unit, function selection, and setup flow.`
- `APP-ANCHOR: Presentation intro and slide rendering.` Implemented in `presentation-engines/presentation-slides.js`.
- `APP-ANCHOR: Timetable and telling-time reveal helpers.` Implemented in `presentation-engines/timetable.js`.
- `APP-ANCHOR: Personality hub state, trait cards, and character overlays.` Implemented in `presentation-engines/personality-hub.js`.
- `APP-ANCHOR: Timetable/time reveal and generic overlay-content helpers.` Generic overlay helpers are implemented in `presentation-engines/presentation-overlays.js`.
- `APP-ANCHOR: Presence rows, hubs, visual annotations, and inline choices.`
- `APP-ANCHOR: Presentation navigation and completion lifecycle.`

## Exercise routing and families

- `APP-ANCHOR: Exercise registry routing and exercise entry screen.`
- `APP-ANCHOR: Paragraph-choice and personality matching exercises.` Implemented in `exercise-engines/paragraph-choice.js`.
- `APP-ANCHOR: Character matching, memory, and snap exercise flows.` Implemented in `exercise-engines/student-match.js`.
- `APP-ANCHOR: Fill-blank exercise flow.` Implemented in `exercise-engines/fill-blank.js`.
- `APP-ANCHOR: Word-bank fill-blank exercise flow.` Implemented in `exercise-engines/word-bank-fill-blank.js`.
- `APP-ANCHOR: Mistake-correction exercise flow.` Implemented in `exercise-engines/mistake-correct-it.js`.
- `APP-ANCHOR: Time-setter exercise flow.` Implemented in `exercise-engines/time-setter.js`.
- `APP-ANCHOR: Guess-animal exercise flow and keyboard.` Implemented in `exercise-engines/guess-animal.js`.
- `APP-ANCHOR: Choice exercise flow.`
- `APP-ANCHOR: True-false grid exercise flow.` Implemented in `exercise-engines/true-false-grid.js`.
- `APP-ANCHOR: Pronoun-memory exercise flow.` Implemented in `exercise-engines/pronoun-memory.js`.
- `APP-ANCHOR: Pronoun-snap exercise flow.` Implemented in `exercise-engines/pronoun-snap.js`.
- `APP-ANCHOR: Sort-it exercise flow.` Implemented in `exercise-engines/sort-it.js`.
- `APP-ANCHOR: Lucky-spin exercise flow.` Implemented in `exercise-engines/lucky-spin.js`.
- `APP-ANCHOR: Conversation-builder exercise flow.` Implemented in `exercise-engines/conversation-builder.js`.
- `APP-ANCHOR: Jumbled-sentences exercise flow.` Implemented in `exercise-engines/jumbled-sentences.js`.
- `APP-ANCHOR: Activity visual-match exercise flow.` Implemented in `exercise-engines/activity-visual-match.js`.
- `APP-ANCHOR: Generic exercise question rendering and answer lifecycle.`
- `APP-ANCHOR: Fullscreen and post-exercise navigation.`

## Inspection notes

- Search `APP-ANCHOR` to jump between major sections.
- Inspect the relevant anchor section first, then follow direct calls only as needed.
- Do not use this index as a substitute for reading the implementation when behavior changes.
