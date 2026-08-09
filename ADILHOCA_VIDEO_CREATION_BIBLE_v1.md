# ADILHOCA VIDEO CREATION BIBLE v1

## Purpose

This bible defines the default rules for creating short Seedance 2.0 Mini video prompts for AdilHoca educational materials.

Video prompts must be written like a short animated film direction, not like a static image prompt.

The goal is to create a believable continuous 10-15 second sequence where the viewer clearly understands what the character does.

## Core Principle

Movement tells the story.

The character should not simply appear in the scene. The character must actively perform the idea, word, sentence, or teaching concept.

Every video prompt should prioritize:

1. Character action
2. Continuous motion
3. Story-driven camera
4. Active environment
5. Stable identity and anatomy

## Reference Image Rule

When a character reference image is provided, use it as the canonical identity reference only.

Do not redesign the character.

Preserve:

- identity
- face
- hairstyle
- age
- body proportions
- clothing, unless the prompt intentionally changes it
- overall style

Do not spend too many words describing appearance when a reference image already exists. Use the prompt space for action, motion, camera, and story continuity.

## Age 13-14 Reference Rule

For 11-12-year-old references, do not add extra age-progression control unless the user requests it.

For 13-14-year-old character references, include this age-control block:

```text
Keep the character clearly a middle-school student.
Slightly taller proportions.
Slightly more mature facial features.
Slightly slimmer face.
Natural age-appropriate body proportions.
Maintain the exact same facial identity.
Do not make the character look like an adult.
```

## Action Over Appearance

Describe what the character does, how they move, where they look, and what happens next.

Avoid static beauty-description prompts.

Bad:

```text
A beautiful blonde girl with blue eyes stands near a piano.
```

Good:

```text
She slowly walks toward the piano, gently sits down, places her fingers on the keys, and begins playing.
```

## Interaction Over Objects

Whenever possible, describe interactions instead of objects.

Video models animate interactions much better than static descriptions.

Instead of:

```text
She is with her horse.
```

Use:

```text
She walks toward her horse, gently strokes his neck, smiles softly, and the horse calmly leans toward her.
```

Instead of:

```text
She rides her bicycle.
```

Use:

```text
She pushes the pedals, gains speed, her hair gently flows in the wind, and the camera smoothly tracks alongside her.
```

Objects should not merely exist in the scene. They should be touched, used, opened, carried, followed, reacted to, or moved around when the concept allows it.

## Dialogue Object Clarity

For dialogue videos, any object that is directly mentioned in the dialogue must be described in a very simple, concrete, and visually obvious way.

Before writing the final prompt, mentally simulate how Seedance 2.0 Mini might misunderstand the object.

Avoid complex object descriptions or ambiguous words that may cause the model to invent the wrong object.

Use simple everyday nouns and clear visible features.

Bad:

```text
a locked diary
```

Risk:

```text
The model may create a safe, metal box, treasure chest, magical container, or oversized lock.
```

Good:

```text
a normal personal diary notebook with visible paper pages and a simple cute cover
```

If a small detail is needed, describe it as decorative and lightweight.

Example:

```text
a small decorative diary-style clasp detail, clearly still a normal notebook
```

When an object is important for the dialogue, the prompt should also include what the character does with it:

```text
She slides the diary notebook closer to herself.
She keeps the diary closed.
She holds the notebook gently against her chest.
```

Do not use words that may accidentally transform the object into another category unless the object truly needs that feature.

## Continuous Action

Every action should naturally lead to the next.

Avoid disconnected action lists.

Bad:

```text
She smiles. She plays piano. She dances.
```

Good:

```text
She smiles softly, turns toward the piano, sits down, begins playing a short melody, then finishes and gently lifts her hands from the keys.
```

The video should feel like one continuous moment, not several unrelated shots.

## Scene Purpose

Every scene must answer:

```text
What is the character trying to do?
```

Good video actions include:

- walking
- opening a door
- looking for something
- starting a performance
- finishing a dance
- petting an animal
- reading a book
- waving to classmates
- picking something up
- helping someone
- trying again

Avoid idle posing.

## Camera Direction

Camera movement must support the story.

Use camera motion only when it helps the action feel clearer.

Useful camera directions:

- static camera
- slow push in
- slow pull back
- tracking shot
- orbit
- dolly
- crane
- over-the-shoulder view
- low angle
- high angle

Avoid random camera movement.

If a static camera explains the action best, use a static camera.

## Physical Emotion

Describe emotions through visible physical movement.

Instead of:

```text
She feels nervous.
```

Use:

```text
She hesitates for a moment, takes a deep breath, then steps forward with growing confidence.
```

Instead of:

```text
She is excited.
```

Use:

```text
She laughs softly, lightly hops forward, and waves.
```

## Natural Transitions

Avoid impossible jumps between unrelated actions.

Bad:

```text
She is standing, then running, then swimming, then dancing.
```

Good:

```text
She runs toward the lake, slows down at the shore, steps into the water, then starts swimming forward.
```

Transitions should happen through:

- character movement
- camera movement
- lighting
- environment

Avoid random cuts unless the user explicitly asks for a cut-based edit.

## Object And Environment Motion

Describe how objects and the environment move.

Useful examples:

- hair gently flows in the wind
- clothes softly sway
- fish swim around the character
- leaves drift downward
- water ripples naturally
- sunlight flickers across the floor
- curtains move slightly in the breeze
- dust particles float in warm light

The environment should feel alive, but not distracting.

Instead of:

```text
in a forest
```

Use:

```text
Leaves move gently in the breeze while warm sunlight filters through the trees.
```

## Prompt Simplicity

Seedance 2.0 Mini performs better with a small number of important instructions.

Do not overload the prompt with too many constraints.

Prioritize:

1. Character action
2. Camera
3. Environment
4. Atmosphere

Avoid listing excessive appearance details when character references are attached.

## Simple Visible Verbs

Prefer clear verbs that video models can animate.

Use:

- walk
- turn
- sit
- stand
- reach
- wave
- look
- smile
- run
- jump
- swim
- dance
- hug
- pick up
- open
- close
- point
- hold
- place
- step
- lean

Avoid abstract verbs when a visible action can explain the idea better.

## Facial Expressions

Facial expressions must naturally emerge from the activity.

Avoid generic smiling.

Avoid:

- oversized smiles
- exaggerated grins
- artificial excitement
- theme-park-style expressions
- AI-style perfect grin

Use subtle, believable expressions that match the action.

The character should emotionally react to what they are doing.

Examples:

- reading: thoughtful
- writing: concentrated
- drawing: curious
- playing piano: focused and quietly enjoying the music
- running: determined
- talking: engaged
- listening: attentive
- looking for something: searching

Unless explicitly requested, characters should not stare directly into the camera. They should naturally look toward the object, person, or activity they are interacting with.

## Body Language

Hands, shoulders, head, and torso should support the action.

Avoid stiff symmetrical poses.

Avoid mannequin-like posture.

Hands must actively perform the intended task.

The viewer should understand the action from the movement alone.

## Standard Quality Ending

## MiniMax V3 Family Introduction Staging

For warm family-introduction videos, treat the scene as a quiet lived-in family moment, not as a posed family portrait.

### Subject Priority And Framing

- The child is the main subject and the only speaking character.
- Begin in a medium-close shot with the child's face clearly readable and reasonably large in frame.
- Do not use a distant wide shot, a full-body family portrait, or a composition that keeps every family member equally prominent.
- Do not make the family stand together and face the camera like a photograph.

### Progressive Family Reveal

- Reveal each parent only when the child introduces that parent.
- Use one slow, controlled reframe or gentle camera move toward the introduced parent.
- Keep the child visually connected to the composition whenever possible.
- Avoid abrupt cuts, fast pans, orbiting shots, and dramatic camera movement.

### Natural Background Activity

- Give each non-speaking family member one simple, identity-relevant ongoing activity: tending a small plant, checking photos on a camera, looking at a trail map, lightly adjusting a backpack, or calmly checking a simple barbecue item.
- The activity must be subtle, continuous, and small enough to preserve anatomy and temporal consistency.
- When introduced, the parent briefly looks toward the child with a small natural reaction, then returns to the activity.
- Never make silent family members freeze, stare at the camera, or wait motionlessly for their introduction.

### Child And Pet Direction

- Keep the child seated or otherwise stably placed while speaking; do not make the child walk or run between family members.
- If there is a pet, establish it naturally in the family setting from the beginning.
- On the pet introduction line, let the pet make one short, simple movement toward the child. End on a warm medium-close child-and-pet composition, with parents deeper in the scene if appropriate.

### Clothing And Continuity

- Use one fixed, modest, practical outfit description for every character in that video.
- Use one exact colour and garment description in production prompts. Do not use alternatives such as "cream or light earthy" when outfit continuity matters.
- Avoid fashion-model styling, logos, revealing clothing, crop tops, short shorts, low-cut clothing, and transparent fabrics.

### Dialogue And Motion

- Lock the child's complete dialogue exactly. The parents and pets do not speak unless the lesson explicitly requires it.
- Use small independent reactions, not synchronized smiles, waves, or repeated motions.
- The camera should feel as though it discovers family members one at a time while the child introduces them.

This controlled medium/medium-close reveal is the preferred MiniMax V3 approach for family-introduction concepts because it preserves canonical identity while still making the scene feel alive.

## Spatial Composition Workflow For Seedance Dialogue Scenes

Use this workflow whenever a dialogue depends on a readable landmark, animal, building, object, comparison target, or directional relationship in the background.

### Design The Shot Before Animating It

Do not ask the video model to invent the geometry of a difficult shot while also animating dialogue.

Instead, create one clean first-frame composition reference after the dialogue, required background subject, clothing, and interaction have been approved. The composition reference is a staging reference, not a replacement for the canonical identity references.

Reference order:

1. Character identity and voice references.
2. Other required identity references, such as a pet.
3. The first-frame composition reference.

Tell the model to match the opening composition closely and preserve its basic spatial layout throughout the dialogue. Do not describe the composition reference as a temporary opening pose.

### Preferred First-Frame Layout

- Use a medium two-shot or medium-close two-shot.
- Place both characters in their final conversational positions before the video begins.
- Turn the characters naturally around 45 degrees toward each other so their faces remain readable without a presenter-style camera gaze.
- Keep the important background subject visible as context, not as the dominant subject.
- Use a clean scene with only the objects and animals that genuinely belong in the lesson.
- Match the exact same clothing in the composition image and the video prompt.

Avoid full back-view openings. A first-frame reference can stabilize the opening geometry, but it does not automatically prevent the model from inventing a new speaking position later.

### Preserve Blocking, Animate Performance

The characters should already look as though they are having the conversation when the first frame starts. Animation adds life; it must not redesign the shot.

Use language such as:

```text
Match the opening composition closely.
Preserve the basic spatial composition established by the first-frame reference throughout the dialogue.
Keep the characters near their original positions.
Use small natural conversational movements only.
```

For identity-sensitive dialogue shots, prohibit re-blocking explicitly:

- no walking toward the camera
- no walking toward the centre of frame
- no lateral steps
- no exchanged positions
- no front-facing presenter pose
- no full-body turns
- no abrupt cuts, fast pans, orbiting, or dramatic reframing

Keep feet planted and character distance essentially unchanged. Permit only small head turns, eye movements, upper-body adjustments, natural facial reactions, and brief glances toward the background subject.

### Background Subject And Eyeline Rules

- Characters primarily converse with each other; they do not need to stare continuously at the background subject.
- A short glance toward the relevant animal, object, or landmark is enough to connect the dialogue to the background.
- Do not solve eyelines with percentages or rigid face-angle instructions such as "show 70% of the face." These increase geometric instability.
- Do not add unrelated animals, objects, or decorative clutter. Extra subjects raise disappearance, transformation, and continuity risk.

### Dialogue-First Action Timing

Keep background action simple and defer it until after every spoken line has finished when it is a visual nuance rather than the dialogue's main action.

For example, after dialogue about a koala and a kangaroo, the koala may slowly reach for one nearby eucalyptus leaf while the kangaroo makes one small upright posture adjustment. The children can then briefly notice the movement. Do not make animals jump, run, approach the children, become oversized, or perform complex actions.

This order protects dialogue clarity, prevents the action from competing with lip sync, and avoids giving away a listening answer before the spoken evidence has finished.

### Golden Rule

When spatial composition matters:

```text
Design the composition first.
Place characters in their final conversational positions.
Then animate only small, natural performance inside that established shot.
```

Unless the user requests otherwise, end Seedance 2.0 Mini prompts with a compact quality block like this:

```text
Natural character animation. Smooth realistic body motion. Consistent character identity. Physically believable movement. Subtle secondary motion. Natural facial expressions. Stable anatomy. Soft cinematic lighting. Professional animated film quality. High temporal consistency. No flickering. No morphing. No identity drift. No sudden pose changes.
```

Every Seedance video prompt must also include these exact quality requirements at the end:

```text
Consistent character identity throughout every frame.
No exaggerated cartoon proportions.
No toy-like appearance.
Natural facial expressions.
Subtle stylization rather than exaggerated cartoon features.
Natural child facial proportions.
Modern animated feature film quality.
Avoid oversized eyes.
```

## Default Prompt Shape

Use this structure when useful:

```text
Use the lastly sent reference image as [Character]'s canonical identity reference. Use it for identity only, not for copying the exact pose, lighting, background, or expression.

Create a 10-15 second continuous animated video.

Scene purpose: [what the video teaches].

Action sequence: [one continuous chain of visible actions].

Camera: [static camera or one purposeful camera movement].

Environment motion: [small natural background movement].

Expression and body language: [subtle emotion shown physically through action].

Quality: Natural character animation. Smooth realistic body motion. Consistent character identity. Physically believable movement. Subtle secondary motion. Natural facial expressions. Stable anatomy. Soft cinematic lighting. Professional animated film quality. High temporal consistency. No flickering. No morphing. No identity drift. No sudden pose changes.
```

## Final Reminder

Think like Pixar-style short scene direction.

The viewer should remember what the character did, not only how the character looked.

Every second should feel intentional.
