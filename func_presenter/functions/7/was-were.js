// Presence flow guide:
// - flow: "append" keeps previous sentence boxes and adds the new one below.
// - flow: "replace-current" hides only the previous sentence box.
// - flow: "replace-all" clears all visible sentence boxes before showing this one.
// - defaultFlow on a slide applies a flow to every next step unless an item has its own flow.
// - nextButton: false hides the continue button after that sentence.
// - nextButtonLabel: "NEXT" changes the continue button text for that sentence.
const wasWereGrade7Function = {
  id: "was-were-grade7",
  grade: 7,
  unit: 3,
  title: "Past Form of To Be: Was / Were",
  description: "",
  exercises: ["was-were-choice"],
  sentences: [
    {
      id: "was-were-now-past",
      presenceSlide: true,
      kicker: "NOW AND PAST",
      title: "",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      visualBrief: "Was and were rule table.",
      showAllItems: false,
      listClass: "inline-choice-list was-were-compare-list",
      items: [
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/daniel2.webp",
          parts: [
            { text: "I " },
            { text: "am", className: "presence-mint" },
            { text: " 12 years old now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/daniel.webp",
          parts: [
            { text: "I " },
            { text: "was", className: "presence-yellow" },
            { text: " 11 years old last year." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/olivia.webp",
          parts: [
            { text: "She " },
            { text: "is", className: "presence-yellow" },
            { text: " in the classroom at the moment." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/goingto-plans/olivia-visit-tower.webp",
          parts: [
            { text: "She " },
            { text: "was", className: "presence-yellow" },
            { text: " in Paris last week." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/ben-luc-dav13.webp",
          parts: [
            { text: "They " },
            { text: "are", className: "presence-mint" },
            { text: " in the sixth grade now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/ben-luc-dav12.webp",
          parts: [
            { text: "They " },
            { text: "were", className: "presence-yellow" },
            { text: " in the fifth grade last year." }
          ]
        },
        {
          fontSize: "24px",
          flow: "replace-all",
          imagePathOnShow: "images/was-were/hannahnow.webp",
          parts: [
            { text: "She " },
            { text: "is", className: "presence-yellow" },
            { text: " happy today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/hannahyesterday.webp",
          parts: [
            { text: "She " },
            { text: "was", className: "presence-yellow" },
            { text: " sad yesterday." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/avaatschool.webp",
          parts: [
            { text: "We " },
            { text: "are", className: "presence-yellow" },
            { text: " at school now." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/avaathome.webp",
          parts: [
            { text: "We " },
            { text: "were", className: "presence-yellow" },
            { text: " at home one hour ago." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/benjaminnow.webp",
          parts: [
            { text: "The weather " },
            { text: "is", className: "presence-yellow" },
            { text: " sunny today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/benjaminyesterday.webp",
          parts: [
            { text: "The weather " },
            { text: "was", className: "presence-yellow" },
            { text: " rainy yesterday." }
          ]
        },
        {
          fontSize: "24px",
          flow: "replace-all",
          imagePathOnShow: "images/was-were/noahnow.webp",
          parts: [
            { text: "You " },
            { text: "are", className: "presence-mint" },
            { text: " very busy today." }
          ]
        },
        {
          fontSize: "24px",
          flow: "append",
          imagePathOnShow: "images/was-were/noahyesterday.webp",
          parts: [
            { text: "You " },
            { text: "were", className: "presence-yellow" },
            { text: " free last weekend." }
          ]
        },
      
      ]
    },
    {
      id: "was-were-popup-practice",
      presenceSlide: true,
      kicker: "PRACTICE",
      title: "Choose the past form.",
      compactTitle: true,
      imagePath: "images/simple-past-tense/ruletable.webp",
      visualBrief: "Choose was or were.",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/mialibrary.webp",
          segments: [
            { text: "She " },
            { options: ["is", "was"], answer: "was" },
            { text: " at the library yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/lucasethantired.webp",
          segments: [
            { text: "We " },
            { options: ["was", "were"], answer: "were" },
            { text: " tired after the match." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          imagePathOnShow: "images/was-were/dirty.webp",
          segments: [
            { text: "The classroom " },
            { options: ["was", "were"], answer: "was" },
            { text: " dirty this morning." }
          ]
        },
        {
          kind: "inline-choice",
          imagePathOnShow: "images/common/watch-movie-olivia-mother-1.webp",
          flow: "replace-current",
          nextButton: false,
          segments: [
            { text: "They " },
            { options: ["are", "were"], answer: "were" },
            { text: " at the cinema yesterday." }
          ]
        }
      ]
    },
    {
      id: "was-were-negative",
      presenceSlide: true,
      kicker: "NEGATIVE SENTENCES",
      title: "Wasn't and weren't.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable2.webp",
      visualBrief: "Negative form of was and were.",
      showAllItems: false,
      items: [
        {
          flow: "replace-current",
          parts: [
            { text: "He " },
            { text: "was", className: "presence-yellow" },
            { text: " at school." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "He " },
            { text: "wasn't", className: "presence-red" },
            { text: " at home." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "They " },
            { text: "were", className: "presence-yellow" },
            { text: " happy." }
          ]
        },
        {
          flow: "append",
          parts: [
            { text: "They " },
            { text: "weren't", className: "presence-red" },
            { text: " sad." }
          ]
        },
         {
          flow: "append",
          parts: [
            { text: "He " },
            { text: "was", className: "presence-yellow" },
            { text: " at the stadium." }
          ]
        },
        {
          flow: "append",
          nextButton: false,
          parts: [
            { text: "He " },
            { text: "wasn't", className: "presence-red" },
            { text: " at home." }
          ]
        }
      ]
    },
    {
      id: "was-were-questions",
      presenceSlide: true,
      kicker: "QUESTIONS",
      title: "Questions and short answers.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable3.webp",
      visualBrief: "Questions with was and were.",
      showAllItems: false,
      items: [
        {
          flow: "replace-current",
          parts: [
            { text: "Was", className: "presence-yellow" },
            { text: " he at school yesterday?" }
          ],
          answerParts: [
            { text: "Yes, he " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, he " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          parts: [
            { text: "Were", className: "presence-yellow" },
            { text: " they tired after the match?" }
          ],
          answerParts: [
            { text: "Yes, they " },
            { text: "were", className: "presence-yellow" },
            { text: ". / No, they " },
            { text: "weren't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          parts: [
            { text: "Was", className: "presence-yellow" },
            { text: " she happy?" }
          ],
          answerParts: [
            { text: "Yes, she " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, she " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        },
        {
          flow: "replace-current",
          nextButton: false,
          parts: [
            { text: "Were", className: "presence-yellow" },
            { text: " you at home?" }
          ],
          answerParts: [
            { text: "Yes, I " },
            { text: "was", className: "presence-yellow" },
            { text: ". / No, I " },
            { text: "wasn't", className: "presence-red" },
            { text: "." }
          ],
          answerReveal: true
        }
      ]
    },
    {
      id: "was-were-final-practice",
      presenceSlide: true,
      kicker: "CHOOSE THE CORRECT OPTION",
      title: "Choose was, were, wasn't or weren't.",
      compactTitle: true,
      imagePath: "images/was-were/ruletable.webp",
      visualBrief: "Final practice for was and were.",
      showAllItems: false,
      listClass: "inline-choice-list simple-past-choice-list",
      items: [
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "I " },
            { options: ["am", "was"], answer: "was" },
            { text: " very tired after the match yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The students " },
            { options: ["are","was","were"], answer: "were" },
            { text: " in the classroom yesterday morning." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "My sister " },
            { options: ["wasn't", "isn't"], answer: "wasn't" },
            { text: " at home last night." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "We " },
            { options: ["aren't", "weren't"], answer: "weren't" },
            { text: " late for school yesterday." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The weather " },
            { options: ["is", "was","were"], answer: "was" },
            { text: " cold and rainy last weekend." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Is", "Was","Were"], answer: "Was" },
            { text: " your teacher at school yesterday?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Was", "Were"], answer: "Were" },
            { text: " the children happy after the school trip?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { text: "The books " },
            { options: ["wasn't", "weren't"], answer: "weren't" },
            { text: " on the teacher's desk." }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          segments: [
            { options: ["Is", "Was"], answer: "Was" },
            { text: " the English exam difficult yesterday?" }
          ]
        },
        {
          kind: "inline-choice",
          flow: "replace-current",
          nextButton: false,
          segments: [
            { text: "You " },
            { options: ["wasn't", "weren't"], answer: "were" },
            { text: " in the school garden during the break." }
          ]
        }
      ]
    }
  ]
};

/*
const wasWereGrade7VideoHubItems = [
  { id: "waswere-video-ava-chloe-roller-coaster", speakers: ["AVA", "CHLOE"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_ava_chloe.mp4", lines: [{ speaker: "AVA", parts: [{ text: "How " }, { answer: "was", choices: ["is", "was"] }, { text: " the roller coaster?" }] }, { speaker: "CHLOE", parts: [{ text: "It " }, { answer: "was", choices: ["is", "was"] }, { text: " terrific, but I think the Ferris wheel " }, { answer: "was", choices: ["is", "was"] }, { text: " cool, too." }] }] } } },
  { id: "waswere-video-benjamin-david-traffic-jam", speakers: ["BENJAMIN", "DAVID"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_benjamin_david.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "You're late!" }] }, { speaker: "DAVID", parts: [{ text: "I know. We " }, { answer: "were", choices: ["are", "were"] }, { text: " stuck in a traffic jam on the way to the concert!" }] }, { speaker: "BENJAMIN", parts: [{ text: "It " }, { answer: "is", choices: ["is", "was"] }, { text: " starting. Come on!" }] }] } },
  { id: "waswere-video-david-ethan-tram", speakers: ["DAVID", "ETHAN"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_david_ethan.mp4", lines: [{ speaker: "DAVID", parts: [{ answer: "Was", choices: ["Is", "Was"] }, { text: " the tram crowded after the concert?" }] }, { speaker: "ETHAN", parts: [{ text: "Yes, it " }, { answer: "was", choices: ["is", "was"] }, { text: ". We " }, { answer: "were", choices: ["were", "are"] }, { text: " really tired." }] }] } },
  { id: "waswere-video-emma-hannah-charity", speakers: ["EMMA", "HANNAH"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_emma_hannah2.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "How " }, { answer: "was", choices: ["is", "was"] }, { text: " the neighbourhood charity event yesterday?" }] }, { speaker: "HANNAH", parts: [{ text: "It " }, { answer: "was", choices: ["was", "were"] }, { text: " great. We " }, { answer: "were", choices: ["was", "were"] }, { text: " there to raise money." }] }] } },
  { id: "waswere-video-emma-hannah-concert", speakers: ["EMMA", "HANNAH"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_emma_hannah4.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "Hannah, why " }, { answer: "was", choices: ["are", "was"] }, { text: " you so tired?" }] }, { speaker: "HANNAH", parts: [{ text: "I " }, { answer: "was", choices: ["am", "was"] }, { text: " at a concert with my family until late." }] }] } },
  { id: "waswere-video-hannah-emma-weather", speakers: ["HANNAH", "EMMA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_emma_hannah.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "The weather " }, { answer: "was", choices: ["is", "was"] }, { text: " rainy yesterday." }] }, { speaker: "EMMA", parts: [{ text: "Yes, but it " }, { answer: "is", choices: ["is", "was"] }, { text: " sunny today." }] }] } },
  { id: "waswere-video-hannah-olivia-exhibition", speakers: ["HANNAH", "OLIVIA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_hannah_olivia.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "How " }, { answer: "was", choices: ["was", "were"] }, { text: " the art exhibition?" }] }, { speaker: "OLIVIA", parts: [{ text: "It " }, { answer: "was", choices: ["is", "was"] }, { text: " beautiful. We " }, { answer: "were", choices: ["was", "were"] }, { text: " really pleased." }] }] } },
  { id: "waswere-video-benjamin-jack-basketball", speakers: ["BENJAMIN", "JACK"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_benjamin_jack.mp4", lines: [{ speaker: "JACK", parts: [{ answer: "Was", choices: ["Is", "Was"] }, { text: " it crowded at the basketball match yesterday?" }] }, { speaker: "BENJAMIN", parts: [{ text: "Yes, the audience " }, { answer: "was", choices: ["is", "was"] }, { text: " really excited." }] }] } },
  { id: "waswere-video-mia-zoe-scared", speakers: ["MIA", "ZOE"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/fun_mia_zoe.mp4", lines: [{ speaker: "MIA", parts: [{ text: "I " }, { answer: "am", choices: ["am", "was"] }, { text: " not scared." }] }, { speaker: "ZOE", parts: [{ text: "You are not scared?" }] }, { speaker: "MIA", parts: [{ text: "I " }, { answer: "wasn't", choices: ["was", "wasn't"] }, { text: " ready." }] }] } },
  { id: "waswere-video-mia-coco-mine", speakers: ["MIA", "COCO"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/5_family_life_mia_coco.mp4", lines: [{ speaker: "MIA", parts: [{ text: "That " }, { answer: "was", choices: ["was", "wasn't"] }, { text: " mine!" }] }] } },
  { id: "waswere-video-ella-olivia-festival", speakers: ["ELLA", "OLIVIA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_ella_olivia.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "How " }, { answer: "was", choices: ["is", "was"] }, { text: " the local music festival yesterday?" }] }, { speaker: "ELLA", parts: [{ text: "It " }, { answer: "was", choices: ["was", "were"] }, { text: " amazing. The musicians " }, { answer: "were", choices: ["was", "were"] }, { text: " great." }] }] } },
  { id: "waswere-video-noah-victoria-jazz", speakers: ["NOAH", "VICTORIA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_noah_victoria.mp4", lines: [{ speaker: "VICTORIA", parts: [{ answer: "Were", choices: ["Was", "Were"] }, { text: " the musicians at the local jazz festival good?" }] }, { speaker: "NOAH", parts: [{ text: "Yes, they " }, { answer: "were", choices: ["are", "were"] }, { text: ". The music " }, { answer: "was", choices: ["is", "was"] }, { text: " fantastic." }] }] } },
  { id: "waswere-video-daniel-lucas-skeleton", speakers: ["DANIEL", "LUCAS"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_daniel_lucas.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "There was a skeleton next to that box, " }, { answer: "wasn't", choices: ["was", "wasn't"] }, { text: " there?" }] }, { speaker: "LUCAS", parts: [{ text: "No, it's behind you!" }] }] } },
  { id: "waswere-video-hannah-emma-piece", speakers: ["HANNAH", "EMMA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_hannah_emma3.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "That " }, { answer: "was", choices: ["was", "were"] }, { text: " your second piece, wasn't it?" }] }, { speaker: "HANNAH", parts: [{ text: "No, it " }, { answer: "wasn't", choices: ["was", "wasn't"] }, { text: " my third." }] }] } },
  { id: "waswere-video-olivia-ella-movie", speakers: ["OLIVIA", "ELLA"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_olivia_ella.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "You " }, { answer: "were", choices: ["are", "were"] }, { text: " asleep during the movie, weren't you?" }] }, { speaker: "ELLA", parts: [{ text: "No, I " }, { answer: "wasn't", choices: ["was", "wasn't"] }, { text: "!" }] }] } },
  { id: "waswere-video-mia-zoe-bus", speakers: ["MIA", "ZOE"], videoDialogue: { title: "WATCH, THEN COMPLETE THE DIALOGUE", videoUrl: "https://media.adilhoca.com/video/6_life_in_the_city_mia_zoe.mp4", lines: [{ speaker: "ZOE", parts: [{ text: "That " }, { answer: "wasn't", choices: ["was", "wasn't"] }, { text: " our bus, wasn't it?" }] }, { speaker: "MIA", parts: [{ text: "Yes, it " }, { answer: "was", choices: ["was", "were"] }, { text: "." }] }] } }
];
*/

const makeWasWereVideoHubItem = ([id, speakers, videoFile, lines]) => ({
  id,
  speakers,
  videoDialogue: {
    title: "WATCH, THEN COMPLETE THE DIALOGUE",
    videoUrl: `https://media.adilhoca.com/video/${videoFile}.mp4`,
    lines: lines.map(([speaker, parts]) => ({
      speaker,
      parts: parts.map((part) => Array.isArray(part)
        ? { answer: part[0], choices: part[1] }
        : { text: part })
    }))
  }
});

const wasWereGrade7VideoHubItems = [
  ["waswere-video-ava-chloe-roller-coaster", ["AVA", "CHLOE"], "6_life_in_the_city_ava_chloe", [["AVA", ["How ", ["was", ["is", "was"]], " the roller coaster?"]], ["CHLOE", ["It ", ["was", ["is", "was"]], " terrific, but I think the Ferris wheel ", ["was", ["is", "was"]], " cool, too."]]]],
  ["waswere-video-benjamin-david-traffic-jam", ["BENJAMIN", "DAVID"], "6_life_in_the_city_benjamin_david", [["BENJAMIN", ["You're late!"]], ["DAVID", ["I know. We ", ["were", ["are", "were"]], " stuck in a traffic jam on the way to the concert!"]], ["BENJAMIN", ["It ", ["is", ["is", "was"]], " starting. Come on!"]]]],
  ["waswere-video-david-ethan-tram", ["DAVID", "ETHAN"], "6_life_in_the_city_david_ethan", [["DAVID", [["Was", ["Is", "Was"]], " the tram crowded after the concert?"]], ["ETHAN", ["Yes, it ", ["was", ["is", "was"]], ". We ", ["were", ["were", "are"]], " really tired."]]]],
  ["waswere-video-emma-hannah-charity", ["EMMA", "HANNAH"], "6_life_in_the_city_emma_hannah2", [["EMMA", ["How ", ["was", ["is", "was"]], " the neighbourhood charity event yesterday?"]], ["HANNAH", ["It ", ["was", ["was", "were"]], " great. We ", ["were", ["was", "were"]], " there to raise money."]]]],
  ["waswere-video-emma-hannah-concert", ["EMMA", "HANNAH"], "6_life_in_the_city_emma_hannah4", [["EMMA", ["Hannah, why ", ["was", ["are", "was"]], " you so tired?"]], ["HANNAH", ["I ", ["was", ["am", "was"]], " at a concert with my family until late."]]]],
  ["waswere-video-hannah-emma-weather", ["HANNAH", "EMMA"], "6_life_in_the_city_emma_hannah", [["HANNAH", ["The weather ", ["was", ["is", "was"]], " rainy yesterday."]], ["EMMA", ["Yes, but it ", ["is", ["is", "was"]], " sunny today."]]]],
  ["waswere-video-hannah-olivia-exhibition", ["HANNAH", "OLIVIA"], "6_life_in_the_city_hannah_olivia", [["HANNAH", ["How ", ["was", ["was", "were"]], " the art exhibition?"]], ["OLIVIA", ["It ", ["was", ["is", "was"]], " beautiful. We ", ["were", ["was", "were"]], " really pleased."]]]],
  ["waswere-video-benjamin-jack-basketball", ["BENJAMIN", "JACK"], "6_life_in_the_city_benjamin_jack", [["JACK", [["Was", ["Is", "Was"]], " it crowded at the basketball match yesterday?"]], ["BENJAMIN", ["Yes, the audience ", ["was", ["is", "was"]], " really excited."]]]],
  ["waswere-video-mia-zoe-scared", ["MIA", "ZOE"], "fun_mia_zoe", [["MIA", ["I ", ["am", ["am", "was"]], " not scared."]], ["ZOE", ["You are not scared?"]], ["MIA", ["I ", ["wasn't", ["was", "wasn't"]], " ready."]]]],
  ["waswere-video-mia-coco-mine", ["MIA", "COCO"], "5_family_life_mia_coco", [["MIA", ["That ", ["was", ["was", "wasn't"]], " mine!"]]]],
  ["waswere-video-ella-olivia-festival", ["ELLA", "OLIVIA"], "6_life_in_the_city_ella_olivia", [["OLIVIA", ["How ", ["was", ["is", "was"]], " the local music festival yesterday?"]], ["ELLA", ["It ", ["was", ["was", "were"]], " amazing. The musicians ", ["were", ["was", "were"]], " great."]]]],
  ["waswere-video-noah-victoria-jazz", ["NOAH", "VICTORIA"], "6_life_in_the_city_noah_victoria", [["VICTORIA", [["Were", ["Was", "Were"]], " the musicians at the local jazz festival good?"]], ["NOAH", ["Yes, they ", ["were", ["are", "were"]], ". The music ", ["was", ["is", "was"]], " fantastic."]]]],
  ["waswere-video-daniel-lucas-skeleton", ["DANIEL", "LUCAS"], "6_life_in_the_city_daniel_lucas", [["DANIEL", ["There was a skeleton next to that box, ", ["wasn't", ["was", "wasn't"]], " there?"]], ["LUCAS", ["No, it's behind you!"]]]],
  ["waswere-video-hannah-emma-piece", ["HANNAH", "EMMA"], "6_life_in_the_city_hannah_emma3", [["EMMA", ["That ", ["was", ["was", "were"]], " your second piece, wasn't it?"]], ["HANNAH", ["No, it ", ["wasn't", ["was", "wasn't"]], " my third."]]]],
  ["waswere-video-olivia-ella-movie", ["OLIVIA", "ELLA"], "6_life_in_the_city_olivia_ella", [["OLIVIA", ["You ", ["were", ["are", "were"]], " asleep during the movie, weren't you?"]], ["ELLA", ["No, I ", ["wasn't", ["was", "wasn't"]], "!"]]]],
  ["waswere-video-mia-zoe-bus", ["MIA", "ZOE"], "6_life_in_the_city_mia_zoe", [["ZOE", ["That ", ["wasn't", ["was", "wasn't"]], " our bus, wasn't it?"]], ["MIA", ["Yes, it ", ["was", ["was", "were"]], "."]]]],
  ["waswere-video-ava-chloe-drone", ["AVA", "CHLOE"], "6_life_in_the_city_ava_chloe3", [["AVA", ["Why ", ["was", ["was", "were"]], " everyone looking up?"]], ["CHLOE", ["There ", ["was", ["is", "was"]], " a drone show in the city square!"]]]],
  ["waswere-video-chloe-olivia-festival", ["CHLOE", "OLIVIA"], "6_life_in_the_city_chloe_olivia", [["CHLOE", ["Why ", ["was", ["was", "were"]], " everyone dancing in the street?"]], ["OLIVIA", ["There ", ["is", ["is", "was"]], " a music festival!"]]]],
  ["waswere-video-chloe-luna-homework", ["CHLOE", "LUNA"], "fun_chloe_luna", [["CHLOE", ["Luna, that ", ["was", ["was", "wasn't"]], " my homework."]]]],
  ["waswere-video-david-daniel-photos", ["DAVID", "DANIEL"], "5_personal_life_david_daniel", [["DANIEL", ["Are these your photos?"]], ["DAVID", ["Yes, I ", ["was", ["am", "was"]], " seven years old in that picture."]], ["DANIEL", ["You ", ["were", ["was", "were"]], " very cute."]]]],
  ["waswere-video-hannah-emma-laughing", ["HANNAH", "EMMA"], "6_life_in_the_city_hannah_emma", [["EMMA", ["Why ", ["were", ["are", "were"]], " you laughing so much yesterday?"]], ["HANNAH", ["My mum was singing in the car. She ", ["was", ["is", "was"]], " like la-la-vuaa."]]]],
  ["waswere-video-hannah-storm-mine", ["HANNAH", "STORM"], "fun_hannah_storm3", [["HANNAH", ["Storm knows which one's mine. Hey, it ", ["wasn't", ["was", "wasn't"]], " yours."]]]],
  ["waswere-video-hannah-storm-family", ["HANNAH", "STORM"], "5_family_life_hannah", [["HANNAH", ["Storm, that ", ["was", ["was", "were"]], " mine!"]]]],
  ["waswere-video-jack-benjamin-earplugs", ["JACK", "BENJAMIN"], "6_life_in_the_city_jack_benjamin", [["JACK", ["Why ", ["were", ["was", "were"]], " you wearing earplugs?"]], ["BENJAMIN", ["The rock concert ", ["was", ["is", "was"]], " really loud!"]]]],
  ["waswere-video-noah-victoria-microphone", ["NOAH", "VICTORIA"], "6_school_life_noah_victoria", [["NOAH", ["Attention, the chess club meets after school. ", ["Was", ["Was", "Were"]], " that okay?"]], ["VICTORIA", ["Shut up, the microphone ", ["is", ["is", "was"]], " still on!"]]]],
  ["waswere-video-zoe-mia-socks", ["ZOE", "MIA"], "6_life_in_the_city_zoe_mia", [["ZOE", ["Why ", ["were", ["are", "were"]], " you wearing two different socks?"]], ["MIA", ["I ", ["was", ["am", "was"]], " in a rush this morning."]]]],
  ["waswere-video-zoe-mia-bus", ["ZOE", "MIA"], "6_life_in_the_city_zoe_mia2", [["ZOE", ["Why ", ["were", ["was", "were"]], " you late? I ", ["wasn't", ["was", "wasn't"]], " on the wrong bus."]], ["MIA", ["I ", ["was", ["am", "was"]], " on the wrong bus."]]]]
].map(makeWasWereVideoHubItem);

wasWereGrade7Function.sentences.push({
  id: "was-were-grade7-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: wasWereGrade7VideoHubItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(wasWereGrade7Function);
