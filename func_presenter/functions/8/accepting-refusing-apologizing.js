const acceptingRefusingApologizingGrade8Function = {
  id: "accepting-refusing-apologizing",
  grade: 8,
  unit: 1,
  title: "Accepting and Refusing / Apologizing",
  titleSecondLine: "Giving Explanations and Reasons",
  compactPresentationTitle: true,
  description: "",
  exercises: [],
  sentences: [
    {
      id: "classify-benjamin-david-noah-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_benjamin_david_noah.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "Benjamin", parts: [{ text: "Let's go to a concert." }] },
          { speaker: "David", parts: [{ text: "That sounds fun." }] },
          { speaker: "Noah", parts: [{ text: "No, thanks. I have to study and finish my project." }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "Benjamin", answer: "SUGGEST" },
            { speaker: "David", answer: "ACCEPT" },
            { speaker: "Noah", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "classify-hannah-emma-victoria-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_hannah_emma_victoria.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "Hannah", parts: [{ text: "How about having dinner together?" }] },
          { speaker: "Emma", parts: [{ text: "That would be great." }] },
          { speaker: "Victoria", parts: [{ text: "No, thanks. I'm a bit busy. Maybe later." }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "Hannah", answer: "SUGGEST" },
            { speaker: "Emma", answer: "ACCEPT" },
            { speaker: "Victoria", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "classify-david-benjamin-lucas-jack-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_david_benjamin_lucas_jack.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "David", parts: [{ text: "Do you want to hang out?" }] },
          { speaker: "Benjamin", parts: [{ text: "I'm busy but I can't refuse." }] },
          { speaker: "Lucas", parts: [{ text: "I'd like to, but I can't." }] },
          { speaker: "Jack", parts: [{ text: "I'm going to visit my grandparents." }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "David", answer: "SUGGEST" },
            { speaker: "Benjamin", answer: "ACCEPT" },
            { speaker: "Lucas", answer: "REFUSE WITH NO EXCUSE" },
            { speaker: "Jack", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "classify-chloe-zoe-mia-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_chloe_zoe_mia.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "Chloe", parts: [{ text: "Shall we play beach volleyball?" }] },
          { speaker: "Zoe", parts: [{ text: "Yes, I'd love to." }] },
          { speaker: "Mia", parts: [{ text: "I don't really enjoy it." }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "Chloe", answer: "SUGGEST" },
            { speaker: "Zoe", answer: "ACCEPT" },
            { speaker: "Mia", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "classify-olivia-ella-ava-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_olivia_ella_ava.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "Olivia", parts: [{ text: "Would you like to see a movie?" }] },
          { speaker: "Ella", parts: [{ text: "Great idea!" }] },
          { speaker: "Ava", parts: [{ text: "I'm sorry I can't. I don't feel well." }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "Olivia", answer: "SUGGEST" },
            { speaker: "Ella", answer: "ACCEPT" },
            { speaker: "Ava", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "classify-ethan-lucas-jack-invitation",
      videoDialogue: {
        videoUrl: "https://media.adilhoca.com/video/8_invite_ethan_lucas_jack.mp4",
        title: "WATCH THE VIDEO",
        lines: [
          { speaker: "Ethan", parts: [{ text: "Why don't we join the party?" }] },
          { speaker: "Lucas", parts: [{ text: "Why not? Sure." }] },
          { speaker: "Jack", parts: [{ text: "I'm not into parties. Do we have another choice?" }] }
        ],
        speakerClassification: {
          choices: ["SUGGEST", "ACCEPT", "REFUSE WITH EXCUSE", "REFUSE WITH NO EXCUSE"],
          items: [
            { speaker: "Ethan", answer: "SUGGEST" },
            { speaker: "Lucas", answer: "ACCEPT" },
            { speaker: "Jack", answer: "REFUSE WITH EXCUSE" }
          ]
        }
      }
    },
    {
      id: "before-making-suggestions",
      presenceSlide: true,
      suggestionDialogue: {
        heading: "BEFORE MAKING SUGGESTIONS",
        intro: "",
        bubbles: [
          { type: "question", text: "Are you busy on Saturday evening?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_chloe_invite_olivia.mp4", evidenceStart: 0, evidenceEnd: 1.911 } },
          { type: "question", text: "Are you doing anything on Saturday?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_ava_invite_emma.mp4", evidenceStart: 0, evidenceEnd: 2.044 } },
          { type: "question", text: "Do you have any plans on Sunday?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_benjamin_invite_noah.mp4", evidenceStart: 0, evidenceEnd: 1.544 } },
          { type: "question", text: "What are you doing on Saturday?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_david_invite_ethan.mp4", evidenceStart: 0, evidenceEnd: 1.325 } },
          { type: "answer", text: "Nothing special. Why do you ask?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_david_invite_ethan.mp4", evidenceStart: 1.428, evidenceEnd: 4.048 } },
          { type: "answer", text: "Not at all. Why?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_ava_invite_emma.mp4", evidenceStart: 2.111, evidenceEnd: 3.988 } },
          { type: "answer", text: "I'm not going to do anything. Why?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_chloe_invite_olivia.mp4", evidenceStart: 1.947, evidenceEnd: 3.802 } }
        ]
      }
    },
    {
      id: "making-suggestions",
      presenceSlide: true,
      suggestionDialogue: {
        heading: "MAKING SUGGESTIONS",
        intro: "",
        bubbles: [
          { type: "question", parts: [{ text: "Would you like to", className: "suggestion-dialogue-highlight" }, { text: " see a movie?" }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_olivia_ella_ava.mp4", evidenceStart: 0, evidenceEnd: 1.209 } },
          { type: "question", parts: [{ text: "Let's", className: "suggestion-dialogue-highlight" }, { text: " go to the concert." }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_benjamin_david_noah.mp4", evidenceStart: 0, evidenceEnd: 1.767 } },
          { type: "question", parts: [{ text: "How about", className: "suggestion-dialogue-highlight" }, { text: " hav" }, { text: "ing", className: "suggestion-dialogue-highlight" }, { text: " dinner together?" }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_hannah_emma_victoria.mp4", evidenceStart: 0, evidenceEnd: 1.843 } },
          { type: "question", parts: [{ text: "Shall we", className: "suggestion-dialogue-highlight" }, { text: " play beach volleyball?" }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_chloe_zoe_mia.mp4", evidenceStart: 0, evidenceEnd: 1.958 } },
          { type: "question", parts: [{ text: "Why don't", className: "suggestion-dialogue-highlight" }, { text: " we join the party?" }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_ethan_lucas_jack.mp4", evidenceStart: 0, evidenceEnd: 1.408 } },
          { type: "question", parts: [{ text: "Do you want to", className: "suggestion-dialogue-highlight" }, { text: " hang out?" }], videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_david_benjamin_lucas_jack.mp4", evidenceStart: 0, evidenceEnd: 1.529 } }
        ]
      }
    },
    {
      id: "accepting-suggestions",
      presenceSlide: true,
      suggestionDialogue: {
        heading: "ACCEPTING",
        intro: "",
        bubbles: [
          { type: "accepting", text: "Great idea!", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_olivia_ella_ava.mp4", evidenceStart: 1.402, evidenceEnd: 2.1 } },
          { type: "accepting", text: "That sounds fun!", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_benjamin_david_noah.mp4", evidenceStart: 1.743, evidenceEnd: 3.335 } },
          { type: "accepting", text: "That would be great!", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_hannah_emma_victoria.mp4", evidenceStart: 2.184, evidenceEnd: 3.821 } },
          { type: "accepting", text: "Yes, I'd love to.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_chloe_zoe_mia.mp4", evidenceStart: 1.958, evidenceEnd: 3.635 } },
          { type: "accepting", text: "Why not? Sure.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_ethan_lucas_jack.mp4", evidenceStart: 1.522, evidenceEnd: 3.042 } },
          { type: "accepting", text: "I'm busy but I can't refuse.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_david_benjamin_lucas_jack.mp4", evidenceStart: 1.69, evidenceEnd: 4.304 } }
        ]
      }
    },
    {
      id: "refusing-suggestions",
      presenceSlide: true,
      suggestionDialogue: {
        heading: "REFUSING",
        intro: "",
        bubbles: [
          { type: "answer", text: "No, thanks.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_hannah_emma_victoria.mp4", evidenceStart: 4.136, evidenceEnd: 5.293 } },
          { type: "answer", text: "I'm sorry but I can't.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_olivia_ella_ava.mp4", evidenceStart: 2.255, evidenceEnd: 3.631 } },
          { type: "answer", text: "I don't really enjoy it.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_chloe_zoe_mia.mp4", evidenceStart: 3.946, evidenceEnd: 6.548 } },
          { type: "answer", text: "Do we have another choice?", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_ethan_lucas_jack.mp4", evidenceStart: 3.319, evidenceEnd: 6.154 } },
          { type: "answer", text: "I'm a bit busy. Maybe later.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_hannah_emma_victoria.mp4", evidenceStart: 5.293, evidenceEnd: 8.096 } },
          { type: "answer", text: "I'd like to but I can't.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_david_benjamin_lucas_jack.mp4", evidenceStart: 4.552, evidenceEnd: 6.288 } },
        ]
      }
    },
    {
      id: "giving-reasons-making-excuses",
      presenceSlide: true,
      suggestionDialogue: {
        heading: "GIVING REASONS / MAKING EXCUSES",
        intro: "",
        bubbles: [
          { type: "reason-prompt", text: "Why?" },
          { type: "answer", text: "I don't feel well.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_olivia_ella_ava.mp4", evidenceStart: 3.631, evidenceEnd: 5.792 } },
          { type: "answer", text: "I have to study and finish my project.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_benjamin_david_noah.mp4", evidenceStart: 3.335, evidenceEnd: 6.846 } },
          { type: "answer", text: "I'm going to visit my grandparents.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_david_benjamin_lucas_jack.mp4", evidenceStart: 6.553, evidenceEnd: 8.838 } },
          { type: "answer", text: "I'm not into parties.", videoClip: { videoUrl: "https://media.adilhoca.com/video/8_invite_ethan_lucas_jack.mp4", evidenceStart: 3.319, evidenceEnd: 6.154 } },
        ]
      }
    },
    {
      id: "ava-invites-emma",
      presenceSlide: true,
      focus: "INVITATION",
      kicker: "DIALOGUE",
      title: "Would you like to ...?",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/was-were/ava_invite_emma.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_ava_invite_emma.mp4",
        scrambledDialogue: true
      },
      visualBrief: "Ava invites Emma to her birthday party.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Ava",
          speakerImage: "images/dialogue/ava_right.webp",
          parts: [
            { text: "Ava: ", className: "presence-yellow" },
            { text: "Are you doing anything on Saturday?" }
          ]
        },
        {
          speaker: "Emma",
          speakerImage: "images/dialogue/emma_left.webp",
          parts: [
            { text: "Emma: ", className: "presence-yellow" },
            { text: "Not at all. Why?" }
          ]
        },
        {
          speaker: "Ava",
          speakerImage: "images/dialogue/ava_right.webp",
          parts: [
            { text: "Ava: ", className: "presence-yellow" },
            { text: "Would you like to", className: "presence-yellow" },
            { text: " come to my birthday party?" }
          ]
        },
        {
          speaker: "Emma",
          speakerImage: "images/dialogue/emma_left.webp",
          parts: [
            { text: "Emma: ", className: "presence-yellow" },
            { text: "That would be great!", className: "presence-mint" }
          ]
        }
      ]
    },
    {
      id: "david-invites-ethan",
      presenceSlide: true,
      focus: "SUGGESTION",
      kicker: "DIALOGUE",
      title: "Why don't we ...?",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/was-were/david_invite_ethan.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_david_invite_ethan.mp4",
        scrambledDialogue: true
      },
      visualBrief: "David suggests that Ethan hangs out with him on Saturday.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "David",
          speakerImage: "images/dialogue/david_front.webp",
          parts: [
            { text: "David: ", className: "presence-yellow" },
            { text: "What are you doing on Saturday?" }
          ]
        },
        {
          speaker: "Ethan",
          speakerImage: "images/dialogue/ethan_left.webp",
          parts: [
            { text: "Ethan: ", className: "presence-yellow" },
            { text: "Nothing special. Why do you ask?" }
          ]
        },
        {
          speaker: "David",
          speakerImage: "images/dialogue/david_front.webp",
          parts: [
            { text: "David: ", className: "presence-yellow" },
            { text: "Why don't we", className: "presence-yellow" },
            { text: " hang out together?" }
          ]
        },
        {
          speaker: "Ethan",
          speakerImage: "images/dialogue/ethan_left.webp",
          parts: [
            { text: "Ethan: ", className: "presence-yellow" },
            { text: "That sounds fun! See you on Saturday!", className: "presence-mint" }
          ]
        }
      ]
    },
    {
      id: "hannah-invites-zoe",
      presenceSlide: true,
      focus: "SUGGESTION",
      kicker: "DIALOGUE",
      title: "How about ...ing?",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/was-were/hannah_invite_zoe.png",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_hannah_invite_zoe.mp4",
        scrambledDialogue: true
      },
      visualBrief: "Hannah invites Zoe to her slumber party.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Hannah",
          speakerImage: "images/dialogue/hannah_right.webp",
          parts: [
            { text: "Hannah: ", className: "presence-yellow" },
            { text: "How about", className: "presence-yellow" },
            { text: " joining my slumber party?" }
          ]
        },
        {
          speaker: "Zoe",
          speakerImage: "images/dialogue/zoe_left.webp",
          parts: [
            { text: "Zoe: ", className: "presence-yellow" },
            { text: "When is it?" }
          ]
        },
        {
          speaker: "Hannah",
          speakerImage: "images/dialogue/hannah_right.webp",
          parts: [
            { text: "Hannah: ", className: "presence-yellow" },
            { text: "It's on Sunday!" }
          ]
        },
        {
          speaker: "Zoe",
          speakerImage: "images/dialogue/zoe_left.webp",
          parts: [
            { text: "Zoe: ", className: "presence-yellow" },
            { text: "I'm a bit busy on Sunday! Thanks anyway.", className: "presence-red" }
          ]
        }
      ]
    },
    {
      id: "benjamin-invites-noah",
      presenceSlide: true,
      focus: "INVITATION",
      kicker: "DIALOGUE",
      title: "Do you have any plans ...?",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/was-were/benjamin_invite_noah.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_benjamin_invite_noah.mp4",
        scrambledDialogue: true
      },
      visualBrief: "Benjamin invites Noah to a concert.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Benjamin",
          speakerImage: "images/dialogue/benjamin_right.webp",
          parts: [
            { text: "Benjamin: ", className: "presence-yellow" },
            { text: "Do you have any plans on Sunday?" }
          ]
        },
        {
          speaker: "Noah",
          speakerImage: "images/dialogue/noah_left.webp",
          parts: [
            { text: "Noah: ", className: "presence-yellow" },
            { text: "I have to study. Why do you ask?" }
          ]
        },
        {
          speaker: "Benjamin",
          speakerImage: "images/dialogue/benjamin_right.webp",
          parts: [
            { text: "Benjamin: ", className: "presence-yellow" },
            { text: "We are going to a concert." }
          ]
        },
        {
          speaker: "Noah",
          speakerImage: "images/dialogue/noah_left.webp",
          parts: [
            { text: "Noah: ", className: "presence-yellow" },
            { text: "Thanks for inviting me. Maybe some other time.", className: "presence-red" }
          ]
        }
      ]
    },
    {
      id: "chloe-invites-olivia",
      presenceSlide: true,
      focus: "SUGGESTION",
      kicker: "DIALOGUE",
      title: "How about ...ing?",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/was-were/chloe_invite_olivia.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      staticDialogueVideo: {
        videoUrl: "https://media.adilhoca.com/video/8_chloe_invite_olivia.mp4",
        scrambledDialogue: true
      },
      visualBrief: "Chloe invites Olivia to a barbecue party.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Chloe",
          speakerImage: "images/dialogue/chloe_right.webp",
          parts: [
            { text: "Chloe: ", className: "presence-yellow" },
            { text: "Are you busy on Saturday evening?" }
          ]
        },
        {
          speaker: "Olivia",
          speakerImage: "images/dialogue/olivia_left.webp",
          parts: [
            { text: "Olivia: ", className: "presence-yellow" },
            { text: "I'm not going to do anything. Why?" }
          ]
        },
        {
          speaker: "Chloe",
          speakerImage: "images/dialogue/chloe_right.webp",
          parts: [
            { text: "Chloe: ", className: "presence-yellow" },
            { text: "How about", className: "presence-yellow" },
            { text: " joining our BBQ party?" }
          ]
        },
        {
          speaker: "Olivia",
          speakerImage: "images/dialogue/olivia_left.webp",
          parts: [
            { text: "Olivia: ", className: "presence-yellow" },
            { text: "Why not? I guess I can come.", className: "presence-mint" }
          ]
        }
      ]
    },
    {
      id: "classify-suggestions-and-responses",
      presenceSlide: true,
      classificationQuiz: {
        promptLabel: "CLASSIFY THE SENTENCE",
        randomizeChoices: false,
        choices: ["ACCEPTING", "REFUSING", "SUGGESTING", "MAKING EXCUSES"],
        statements: [
          { text: "Would you like to see a movie?", answer: "SUGGESTING" },
          { text: "Let's go to the concert.", answer: "SUGGESTING" },
          { text: "How about having dinner together?", answer: "SUGGESTING" },
          { text: "Shall we meet after four?", answer: "SUGGESTING" },
          { text: "Why don't we join the party?", answer: "SUGGESTING" },
          { text: "Do you want to hang out?", answer: "SUGGESTING" },
          { text: "Great idea!", answer: "ACCEPTING" },
          { text: "That sounds fun!", answer: "ACCEPTING" },
          { text: "That would be great!", answer: "ACCEPTING" },
          { text: "Yes, I'd love to.", answer: "ACCEPTING" },
          { text: "Why not?", answer: "ACCEPTING" },
          { text: "Sure. Of course.", answer: "ACCEPTING" },
          { text: "I'm busy but I can't refuse.", answer: "ACCEPTING" },
          { text: "No, thanks.", answer: "REFUSING" },
          { text: "I'm sorry but I can't.", answer: "REFUSING" },
          { text: "I don't really enjoy it.", answer: "REFUSING" },
          { text: "Do we have another choice?", answer: "REFUSING" },
          { text: "I'm a bit busy. Maybe later.", answer: "REFUSING" },
          { text: "I'd like to but I can't.", answer: "REFUSING" },
          { text: "I don't feel well.", answer: "MAKING EXCUSES" },
          { text: "I have to stay at home.", answer: "MAKING EXCUSES" },
          { text: "I have to study and finish my project.", answer: "MAKING EXCUSES" },
          { text: "I'm busy tonight.", answer: "MAKING EXCUSES" },
          { text: "I'm going to visit relatives.", answer: "MAKING EXCUSES" },
          { text: "I'm not into action movies.", answer: "MAKING EXCUSES" },
          { text: "My favorite show is on tonight.", answer: "MAKING EXCUSES" }
        ]
      }
    },
    {
      id: "test-question-ava-emma-concert",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        lines: [
          { speaker: "Ava", text: "We are going to watch the basketball match tomorrow evening. Would you like to join us?" },
          { speaker: "Emma", text: "____ I'm going to join my cousin's graduation party. Thanks anyway." }
        ],
        answer: "I'm sorry, but I can't.",
        choices: [
          "Sounds fun!",
          "I'm not going to do anything.",
          "I'm sorry, but I can't.",
          "Nothing special."
        ]
      }
    },
    {
      id: "test-question-emma-hannah-food",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        lines: [
          { speaker: "Emma", text: "____" },
          { speaker: "Hannah", text: "Sure! I feel like eating pizza with extra cheese." }
        ],
        answer: "Would you like to eat something?",
        choices: [
          "What would you like to eat?",
          "Would you like to eat something?",
          "How about some cookies?",
          "Do you want to drink something at a cafe?"
        ]
      }
    },
    {
      id: "test-question-david-ethan-movie",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        lines: [
          { speaker: "David", text: "I have a great thriller. It is \"Midnight Mystery\". Would you like to watch it with me?" },
          { speaker: "Ethan", text: "Do we have another choice? I don't really enjoy thrillers." },
          { speaker: "David", text: "What do you think about \"Summer Letters\"? It is a great romance." },
          { speaker: "Ethan", text: "____ Let's watch it." }
        ],
        answer: "That's better.",
        choices: [
          "Cheers!",
          "Not really.",
          "That's better.",
          "Thanks anyway."
        ]
      }
    },
    {
      id: "test-question-noah-benjamin-project",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        lines: [
          { speaker: "Benjamin", text: "Why don't we go to Riverside Park for a walk?" },
          { speaker: "Noah", text: "Sorry, but I can't because ____." }
        ],
        answer: "I must work on my science project",
        choices: [
          "Let's go!",
          "I must work on my science project",
          "That sounds great!",
          "I can meet you at 5 p.m."
        ]
      }
    },
    {
      id: "test-question-refusing-tea-party",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "Your friend is hosting a tea party, but you need to decline the invitation. What do you say?" }
        ],
        answer: "I'm sorry, but I can't.",
        choices: [
          "I can't say no to it.",
          "I enjoy parties.",
          "I'm sorry, but I can't.",
          "That sounds amazing!"
        ]
      }
    },
    {
      id: "test-question-inviting-film-at-home",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "You enjoy science-fiction films and want to invite your friend to watch one at home. How do you invite your friend?" }
        ],
        answer: "What about watching a film about space?",
        choices: [
          "Would you like to go to the cinema?",
          "What about watching a film about space?",
          "What type of music do you enjoy?",
          "Let's read a magazine about space."
        ]
      }
    },
    {
      id: "test-question-accepting-barbecue",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "Your friend is having a barbecue this weekend, and your schedule is completely free. What is your reply?" }
        ],
        answer: "I'm not going to do anything.",
        choices: [
          "I'd love to, but I have to refuse it.",
          "I'm sorry, but I can't.",
          "I'm not going to do anything.",
          "I don't enjoy barbecues."
        ]
      }
    },
    {
      id: "test-question-refusing-romance",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "Someone asks you to see a love story with them. You like going to the movies, but you are not keen on romantic films. What do you say?" }
        ],
        answer: "Do we have another choice?",
        choices: [
          "They are my favourite.",
          "That would be great.",
          "Do we have another choice?",
          "I can't wait to watch it."
        ]
      }
    },
    {
      id: "test-question-ava-chloe-hang-out",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "COMPLETE THE DIALOGUE",
        lines: [
          { speaker: "Ava", text: "What a nice day! Would you like to hang out?" },
          { speaker: "Chloe", text: "____ but I can't refuse this invitation." }
        ],
        answer: "I'm busy",
        choices: [
          "I'm busy",
          "That's great",
          "Sounds good",
          "Enjoy yourself"
        ]
      }
    },
    {
      id: "test-question-refusing-party-plan",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "Your friend invites you to a party. But you have another plan. What do you say to refuse his invitation?" }
        ],
        answer: "Sounds good but I'm busy.",
        choices: [
          "I hope you feel better soon.",
          "Sounds good but I'm busy.",
          "It will be great to join.",
          "Sure, I would like to."
        ]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(acceptingRefusingApologizingGrade8Function);
