const canPermissionFunction = {
  id: "can-permission",
  grade: 5,
  unit: 6,
  title: 'Can for Permission',
  description: "",
  exercises: ["can-permission-choice", "can-permission-lucky-spin"],
  returnToSetupOnComplete: true,
  sentences: [
    {
      id: "can-permission-chloe-room",
      presenceSlide: true,
      focus: "CAN",
      kicker: "PERMISSION",
      title: "Can I ...?",
      compactTitle: true,
      imagePath: "images/can-permission/chloe-ella.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Ella and Chloe are in Chloe's room.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Ella",
          speakerImage: "images/dialogue/ella_head_right.webp",
          parts: [
            { text: "Ella: ", className: "presence-yellow" },
            { text: "Can I", className: "presence-yellow" },
            { text: " play your piano?" }
          ]
        },
        {
          speaker: "Chloe",
          speakerImage: "images/dialogue/chloe_left.webp",
          parts: [
            { text: "Chloe: ", className: "presence-yellow" },
            { text: "Sure! " },
            { text: "You can.", className: "presence-mint" }
          ]
        },
        {
          speaker: "Ella",
          speakerImage: "images/dialogue/ella_head_right.webp",
          parts: [
            { text: "Ella: ", className: "presence-yellow" },
            { text: "Can I", className: "presence-yellow" },
            { text: " try your ballet shoes?" }
          ]
        },
        {
          speaker: "Chloe",
          speakerImage: "images/dialogue/chloe_left.webp",
          parts: [
            { text: "Chloe: ", className: "presence-yellow" },
            { text: "I'm sorry, " },
            { text: "you can't.", className: "presence-red" }
          ]
        }
      ]
    },
    {
      id: "can-permission-noah-victoria",
      presenceSlide: true,
      focus: "CAN",
      kicker: "PERMISSION",
      title: "Can I ...?",
      compactTitle: true,
      imagePath: "images/can-permission/noah-victoria.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Noah and Victoria are together.",
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Noah",
          speakerImage: "images/dialogue/noah_right.webp",
          parts: [
            { text: "Noah: ", className: "presence-yellow" },
            { text: "Can I", className: "presence-yellow" },
            { text: " use your laptop please?" }
          ]
        },
        {
          speaker: "Victoria",
          speakerImage: "images/dialogue/victoria_left.webp",
          parts: [
            { text: "Victoria: ", className: "presence-yellow" },
            { text: "I'm sorry, " },
            { text: "you can't.", className: "presence-red" },
            { text: " It is busy now." }
          ]
        },
        {
          speaker: "Noah",
          speakerImage: "images/dialogue/noah_right.webp",
          parts: [
            { text: "Noah: ", className: "presence-yellow" },
            { text: "Can I", className: "presence-yellow" },
            { text: " try your Rubik's Cube?" }
          ]
        },
        {
          speaker: "Victoria",
          speakerImage: "images/dialogue/victoria_left.webp",
          parts: [
            { text: "Victoria: ", className: "presence-yellow" },
            { text: "Sure! " },
            { text: "You can.", className: "presence-mint" }
          ]
        }
      ]
    },
    {
      id: "can-permission-hannah-benjamin",
      presenceSlide: true,
      focus: "CAN",
      kicker: "PERMISSION",
      title: "Can I ...?",
      compactTitle: true,
      imagePath: "images/can-permission/hannah-benjamin.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Benjamin is talking to Hannah.",
      listClass: "inline-choice-list permission-dialogue-list",
      items: [
        {
          kind: "inline-choice",
          speaker: "Benjamin",
          speakerImage: "images/dialogue/benjamin_left.webp",
          segments: [
            { text: "Benjamin: ", className: "presence-yellow" },
            { options: ["Can I", "Have I"], answer: "Can I" },
            { text: " borrow your bike please?" }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Hannah",
          speakerImage: "images/dialogue/hannah_right.webp",
          segments: [
            { text: "Hannah: ", className: "presence-yellow" },
            { options: ["Sure", "Sorry"], answer: "Sorry" },
            { text: " , I need it." }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Benjamin",
          speakerImage: "images/dialogue/benjamin_left.webp",
          segments: [
            { text: "Benjamin: ", className: "presence-yellow" },
            { options: ["Can I", "Does I"], answer: "Can I" },
            { text: " borrow your compass?" }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Hannah",
          speakerImage: "images/dialogue/hannah_right.webp",
          segments: [
            { text: "Hannah: ", className: "presence-yellow" },
            { options: ["Of course", "Sorry"], answer: "Of course" },
            { text: ", you can." }
          ]
        }
      ]
    },
    {
      id: "can-permission-mia-zoe",
      presenceSlide: true,
      focus: "CAN",
      kicker: "PERMISSION",
      title: "Can I ...?",
      compactTitle: true,
      imagePath: "images/can-permission/mia-zoe.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Zoe is talking to Mia.",
      listClass: "inline-choice-list permission-dialogue-list",
      items: [
        {
          kind: "inline-choice",
          speaker: "Zoe",
          speakerImage: "images/dialogue/zoe_right.webp",
          segments: [
            { text: "Zoe: ", className: "presence-yellow" },
            { text: "Hi, Mia. " },
            { options: ["Have", "Can"], answer: "Can" },
            { text: " you lend me your new novel please?" }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Mia",
          speakerImage: "images/dialogue/mia_left.webp",
          segments: [
            { text: "Mia: ", className: "presence-yellow" },
            { options: ["Sorry", "Sure"], answer: "Sure" },
            { text: " you can have it." }
          ]
        },
        {
          speaker: "Zoe",
          speakerImage: "images/dialogue/zoe_right.webp",
          parts: [
            { text: "Zoe: ", className: "presence-yellow" },
            { text: "Thanks! Your diary is cute! " },
            { text: "Can I", className: "presence-yellow" },
            { text: " have a look?" }
          ]
        },
        {
          speaker: "Mia",
          speakerImage: "images/dialogue/mia_left.webp",
          parts: [
            { text: "Mia: ", className: "presence-yellow" },
            { text: "No way!", className: "presence-red" }
          ]
        }
      ]
    },
    {
      id: "can-permission-ethan-teacher",
      presenceSlide: true,
      focus: "CAN",
      kicker: "PERMISSION",
      title: "Can I ...?",
      compactTitle: true,
      imagePath: "images/can-permission/ethan-teacher.webp",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Ethan is talking to his teacher.",
      listClass: "inline-choice-list permission-dialogue-list",
      items: [
        {
          kind: "inline-choice",
          speaker: "Ethan",
          speakerImage: "images/dialogue/ethan_right.webp",
          segments: [
            { text: "Ethan: ", className: "presence-yellow" },
            { options: ["Have", "Can"], answer: "Can" },
            { text: " I ask a question please?" }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Teacher",
          segments: [
            { text: "Teacher: ", className: "presence-yellow" },
            { options: ["Sorry", "Of course"], answer: "Of course" },
            { text: " you can." }
          ]
        },
        {
          speaker: "Ethan",
          speakerImage: "images/dialogue/ethan_right.webp",
          parts: [
            { text: "Ethan: ", className: "presence-yellow" },
            { text: "Thanks! May I go to the restroom please?" }
          ]
        },
        {
          kind: "inline-choice",
          speaker: "Teacher",
          segments: [
            { text: "Teacher: ", className: "presence-yellow" },
            { options: ["Sorry", "Of course"], answer: "Sorry" },
            { text: " Not right now." }
          ]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(canPermissionFunction);
