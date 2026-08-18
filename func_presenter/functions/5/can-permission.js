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
    },
    {
      id: "can-permission-video-victoria-noah-usb",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_victoria_noah.mp4",
        lines: [{ speaker: "NOAH", parts: [{ answer: "Can", choices: ["Have", "Can"] }, { text: " I use my USB drive?" }] }, { speaker: "VICTORIA", parts: [{ text: "No, we " }, { answer: "can't", choices: ["can", "can't"] }, { text: " use them here." }] }]
      }
    },
    {
      id: "can-permission-video-daniel-emma-hot",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_school_life_daniel_emma.mp4",
        lines: [{ speaker: "DANIEL", parts: [{ answer: "Can", choices: ["Can", "Don't"] }, { text: " I touch this?" }] }, { speaker: "EMMA", parts: [{ text: "No, you mustn't. It's very hot." }] }]
      }
    },
    {
      id: "can-permission-video-museum-mia-touch",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/school_trip_museum_mia.mp4",
        lines: [{ speaker: "MIA", parts: [{ answer: "Can", choices: ["Let's", "Can"] }, { text: " I touch it?" }] }, { speaker: "SECURITY", parts: [{ text: "Sorry, don't touch, please. It is forbidden." }] }]
      }
    },
    {
      id: "can-permission-video-daniel-restroom",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_classroom_life_daniel.mp4",
        lines: [{ speaker: "DANIEL", parts: [{ answer: "May", choices: ["Have", "May"] }, { text: " I go to the restroom?" }] }, { speaker: "TEACHER", parts: [{ text: "Yes, but come back quickly." }] }]
      }
    },
    {
      id: "can-permission-video-daniel-lucas-fries",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_daniel_lucas.mp4",
        lines: [{ speaker: "DANIEL", parts: [{ answer: "Can", choices: ["Does", "Can"] }, { text: " I have some of your fries?" }] }, { speaker: "LUCAS", parts: [{ answer: "Sure", choices: ["Sure", "don't"] }, { text: ", just a few." }] }]
      }
    },
    {
      id: "can-permission-video-emma-sophie-cheese",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_emma_sophie.mp4",
        lines: [{ speaker: "EMMA", parts: [{ text: "Mom, " }, { answer: "can", choices: ["Why", "can"] }, { text: " I add some more cheese?" }] }, { speaker: "SOPHIE", parts: [{ answer: "Sure", choices: ["No", "Sure"] }, { text: ", but just a little." }] }]
      }
    },
    {
      id: "can-permission-video-lucas-gabriel-tongs",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_lucas_gabriel.mp4",
        lines: [{ speaker: "LUCAS", parts: [{ text: "Dad, " }, { answer: "can", choices: ["can", "don't"] }, { text: " I flip one?" }] }, { speaker: "GABRIEL", parts: [{ answer: "Sure", choices: ["No way", "Sure"] }, { text: ", use the tongs." }] }]
      }
    },
    {
      id: "can-permission-video-ava-amina-vendor",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_ava_amina.mp4",
        lines: [{ speaker: "AVA", parts: [{ answer: "Can", choices: ["Can", "Must"] }, { text: " I try one of those?" }] }, { speaker: "VENDOR", parts: [{ answer: "Of course", choices: ["Sorry", "Of course"] }, { text: ", take one." }] }]
      }
    },
    {
      id: "can-permission-video-chloe-camille-decorate",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_chloe_camille.mp4",
        lines: [{ speaker: "CHLOE", parts: [{ text: "Mom, " }, { answer: "Can", choices: ["Don't", "Can"] }, { text: " I decorate one?" }] }, { speaker: "CAMILLE", parts: [{ answer: "Sure", choices: ["No", "Sure"] }, { text: ", but don't shake it too much." }] }]
      }
    },
    {
      id: "can-permission-video-hannah-emma-sauce",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_hannah_emma.mp4",
        lines: [{ speaker: "HANNAH", parts: [{ answer: "Can", choices: ["Has", "Can"] }, { text: " I try that sauce?" }] }, { speaker: "VENDOR", parts: [{ answer: "Sorry, you can't", choices: ["Sorry, you can't", "Of course"] }, { text: ", but it's really spicy." }] }]
      }
    },
    {
      id: "can-permission-video-ava-amina-buddy",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_universe_ava_amina_buddy.mp4",
        lines: [{ speaker: "AVA", parts: [{ text: "Where are we going to go this summer?" }] }, { speaker: "AMINA", parts: [{ text: "We're going to visit Kenya!" }] }, { speaker: "AVA", parts: [{ answer: "Can", choices: ["Can", "Must"] }, { text: " Buddy come too?" }] }]
      }
    },
    {
      id: "can-permission-video-museum-olivia-photo",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/school_trip_museum_olivia.mp4",
        lines: [{ speaker: "OLIVIA", parts: [{ answer: "May", choices: ["May", "must"] }, { text: " I take a photo?" }] }, { speaker: "TEACHER", parts: [{ answer: "Yes", choices: ["No", "Yes"] }, { text: ", but don't use the flash." }] }, { speaker: "OLIVIA", parts: [{ text: "Oh, sure." }] }]
      }
    },
    {
      id: "can-permission-video-benjamin-hannah-bike",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/benjamin_hannah.mp4",
        lines: [{ speaker: "BENJAMIN", parts: [{ answer: "Can", choices: ["Won't", "Can"] }, { text: " I borrow your bike, please?" }] }, { speaker: "HANNAH", parts: [{ answer: "Sorry", choices: ["Of course", "Sorry"] }, { text: ", I need it." }] }]
      }
    },
    {
      id: "can-permission-video-chloe-ella-piano",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/chloe_ella.mp4",
        lines: [{ speaker: "ELLA", parts: [{ text: "Can " }, { answer: "I", choices: ["I", "you"] }, { text: " play your piano?" }] }, { speaker: "CHLOE", parts: [{ answer: "Sure", choices: ["No", "Sure"] }, { text: ", you can." }] }]
      }
    },
    {
      id: "can-permission-video-zoe-mia-novel",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/zoe_mia_1.mp4",
        lines: [{ speaker: "ZOE", parts: [{ text: "Hi Mia, can " }, { answer: "I", choices: ["I", "you"] }, { text: " lend me your new novel, please?" }] }, { speaker: "MIA", parts: [{ text: "Sure, you " }, { answer: "can", choices: ["can", "can't"] }, { text: " have it." }] }]
      }
    },
    {
      id: "can-permission-video-zoe-mia-diary",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/zoe_mia_2.mp4",
        lines: [{ speaker: "ZOE", parts: [{ text: "Your diary is cute. Can " }, { answer: "I", choices: ["I", "you"] }, { text: " have a look?" }] }, { speaker: "MIA", parts: [{ answer: "Sure", choices: ["Sure", "No way!"] }] }]
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(canPermissionFunction);
