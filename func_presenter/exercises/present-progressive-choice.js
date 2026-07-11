window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "present-progressive-choice",
  activity: "paragraph-choice",
  title: "CHOOSE CORRECT OPTION",
  pages: [
    {
      imagePath: "../images/5/4/5.webp",
      sentences: [
        {
          segments: [{ text: "Who is having a barbeque?" }]
        },
        {
          segments: [
            { text: "Hannah " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["have", "has", "having"], answer: "having" },
            { text: " a barbeque with her family." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/22.webp",
      sentences: [
        {
          segments: [
            { text: "Hannah, Emma, Jack and Benjamin " },
            { options: ["am", "is", "are"], answer: "are" },
            { text: " " },
            { options: ["have", "has", "having"], answer: "having" },
            { text: " a picnic." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/27.webp",
      sentences: [
        {
          segments: [
            { text: "What " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " Olivia doing?" }
          ]
        },
        {
          segments: [
            { text: "She " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["taking", "take", "takes"], answer: "taking" },
            { text: " photos." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/14.webp",
      sentences: [
        {
          segments: [
            { text: "I " },
            { options: ["am", "is", "are"], answer: "am" },
            { text: " " },
            { options: ["play", "playing", "plays"], answer: "playing" },
            { text: " the piano." }
          ]
        }
      ]
    },
    {
      imagePath: "images/daily-routines/playsguitar.webp",
      sentences: [
        {
          segments: [
            { text: "Laura " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["play", "plays", "playing"], answer: "playing" },
            { text: " the guitar." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/18.webp",
      sentences: [
        {
          segments: [
            { text: "Jack and his dad " },
            { options: ["am", "is", "are"], answer: "are" },
            { text: " fishing." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/19.webp",
      sentences: [
        {
          segments: [
            { text: "Ethan " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["playing", "play", "plays"], answer: "playing" },
            { text: " golf." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/4.webp",
      sentences: [
        {
          segments: [
            { text: "We " },
            { options: ["am", "is", "are"], answer: "are" },
            { text: " " },
            { options: ["playing", "play", "plays"], answer: "playing" },
            { text: " a board game." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/29.webp",
      sentences: [
        {
          segments: [
            { text: "Benjamin " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["visits", "visiting", "visit"], answer: "visiting" },
            { text: " his grandparents." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/23.webp",
      sentences: [
        {
          segments: [
            { text: "I " },
            { options: ["am", "is", "are"], answer: "am" },
            { text: " " },
            { options: ["write", "writes", "writing"], answer: "writing" },
            { text: " in my diary." }
          ]
        }
      ]
    },
    {
      imagePath: "images/common/help-mother-emma-11-1.webp",
      sentences: [
        {
          segments: [
            { text: "Emma " },
            { options: ["am", "is", "are"], answer: "is" },
            { text: " " },
            { options: ["help", "helps", "helping"], answer: "helping" },
            { text: " her mother at the moment." }
          ]
        }
      ]
    },
    {
      imagePath: "../images/5/4/17.webp",
      sentences: [
        {
          segments: [
            { text: "What " },
            { options: ["am", "is", "are"], answer: "are" },
            { text: " you doing?" }
          ]
        },
        {
          segments: [
            { text: "I " },
            { options: ["am", "is", "are"], answer: "am" },
            { text: " dancing now." }
          ]
        }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "present-progressive";
  }
});
