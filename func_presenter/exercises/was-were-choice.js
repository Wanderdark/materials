(function () {
  const EXERCISE_ID = "was-were-choice";
  const FUNCTION_ID = "was-were-grade7";

  function shuffleWasWereChoice(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function makeQuestion(before, options, answer, after, imagePath) {
    const sentence = `${before}${answer}${after}`;
    const segments = [
      { options: shuffleWasWereChoice(options), answer },
      { text: after }
    ];
    if (before) segments.unshift({ text: before });
    return {
      sentence,
      imagePath,
      sentences: [
        {
          segments
        }
      ]
    };
  }

  function buildWasWereChoicePages() {
    const questions = [
      makeQuestion("I ", ["am", "was", "were"], "am", " 12 years old now.", "images/was-were/daniel2.webp"),
      makeQuestion("I ", ["am", "was", "were"], "was", " 11 years old last year.", "images/was-were/daniel.webp"),
      makeQuestion("She ", ["is", "was", "were"], "is", " in the classroom at the moment.", "images/was-were/olivia.webp"),
      makeQuestion("She ", ["is", "was", "were"], "was", " in Paris last week.", "images/goingto-plans/olivia-visit-tower.webp"),
      makeQuestion("They ", ["are", "was", "were"], "are", " in the sixth grade now.", "images/was-were/ben-luc-dav13.webp"),
      makeQuestion("They ", ["are", "was", "were"], "were", " in the fifth grade last year.", "images/was-were/ben-luc-dav12.webp"),
      makeQuestion("She ", ["is", "was", "were"], "is", " happy today.", "images/was-were/hannahnow.webp"),
      makeQuestion("She ", ["is", "was", "were"], "was", " sad yesterday.", "images/was-were/hannahyesterday.webp"),
      makeQuestion("We ", ["are", "was", "were"], "are", " at school now.", "images/was-were/avaatschool.webp"),
      makeQuestion("We ", ["are", "was", "were"], "were", " at home one hour ago.", "images/was-were/avaathome.webp"),
      makeQuestion("The weather ", ["is", "was", "were"], "is", " sunny today.", "images/was-were/benjaminnow.webp"),
      makeQuestion("The weather ", ["is", "was", "were"], "was", " rainy yesterday.", "images/was-were/benjaminyesterday.webp"),
      makeQuestion("You ", ["are", "was", "were"], "are", " very busy today.", "images/was-were/noahnow.webp"),
      makeQuestion("You ", ["are", "was", "were"], "were", " free last weekend.", "images/was-were/noahyesterday.webp"),
      makeQuestion("The books ", ["are", "was", "were"], "were", " in the cupboard yesterday.", "images/thereis-thereare/chloe-sitting-room.webp"),

      makeQuestion("She ", ["is", "was", "were"], "was", " at the library yesterday.", "images/was-were/mialibrary.webp"),
      makeQuestion("We ", ["are", "was", "were"], "were", " tired after the match yesterday.", "images/was-were/lucasethantired.webp"),
      makeQuestion("The classroom ", ["is", "was", "were"], "was", " dirty yesterday morning.", "images/was-were/dirty.webp"),
      makeQuestion("They ", ["are", "was", "were"], "were", " at the cinema last night.", "images/common/watch-movie-olivia-mother-1.webp"),

      makeQuestion("He ", ["is", "was", "were"], "was", " at school.", "../images/6/1/33.webp"),
      makeQuestion("He ", ["isn't", "wasn't", "weren't"], "wasn't", " at home yesterday.", "../images/6/1/33.webp"),
      makeQuestion("She ", ["is", "wasn't", "weren't"], "is", " at home now.", "images/was-were/avaathome.webp"),
      makeQuestion("She ", ["are", "was", "is"], "is", " happy now.", "images/was-were/hannahnow.webp"),
      makeQuestion("She ", ["aren't", "wasn't", "weren't"], "wasn't", " happy yesterday.", "images/was-were/hannahyesterday.webp"),
      makeQuestion("They ", ["is", "are", "were"], "are", " at the football field now.", "../images/5/4/21.webp"),
      makeQuestion("They ", ["aren't", "wasn't", "weren't"], "weren't", " worried yesterday.", "images/was-were/ben-luc-dav13.webp"),
      makeQuestion("She ", ["isn't", "wasn't", "weren't"], "isn't", " at school now.", "images/was-were/avaathome.webp"),

      makeQuestion("", ["Is", "Was", "Were"], "Were", " they at school yesterday?", "images/daily-routines/arriveschool.webp"),
      makeQuestion("", ["Are", "Was", "Were"], "Were", " they tired after the match?", "images/was-were/lucasethantired.webp"),
      makeQuestion("", ["Is", "Was", "Were"], "Was", " she happy now?", "images/was-were/hannahnow.webp"),
      makeQuestion("", ["Are", "Was", "Were"], "Were", " you at home?", "images/was-were/avaathome.webp"),

      makeQuestion("They ", ["am", "was", "were"], "were", " very tired after the match yesterday.", "images/was-were/lucasethantired.webp"),
      makeQuestion("The students ", ["are", "was", "were"], "were", " in the classroom yesterday morning.", "../images/6/2/72.webp"),
      makeQuestion("She ", ["isn't", "wasn't", "weren't"], "wasn't", " at school yesterday.", "images/was-were/avaathome.webp"),
      makeQuestion("We ", ["aren't", "wasn't", "weren't"], "weren't", " late for school yesterday.", "images/was-were/avaatschool.webp"),
      makeQuestion("The weather ", ["is", "was", "were"], "was", " cold and rainy last weekend.", "images/was-were/benjaminyesterday.webp"),
      makeQuestion("", ["Is", "Was", "Were"], "Was", " your teacher at school yesterday?", "images/a-an-the/06-the-teacher-greets-students.webp"),
      makeQuestion("", ["Are", "Was", "Were"], "Were", " the children happy after the school trip last week?", "../images/5/8/20.webp"),
      makeQuestion("", ["Is", "Was", "Were"], "Was", " the English exam difficult yesterday?", "images/personality/david_honest.webp"),
      makeQuestion("We ", ["are", "was", "were"], "were", " in the school garden during the break yesterday.", "../images/5/2/26.webp"),

      makeQuestion("I ", ["am", "was", "were"], "was", " very tired after the basketball match.", "images/was-were/lucasethantired.webp"),
      makeQuestion("The students ", ["are", "was", "weren't"], "weren't", " in the science laboratory yesterday.", "../images/5/1/5.webp"),
      makeQuestion("My sister ", ["is", "was", "were"], "was", " at the dentist last Monday.", "../images/6/3/55.webp"),
      makeQuestion("We ", ["are", "was", "were"], "are", " excited about the school trip now.", "../images/5/8/20.webp"),
      makeQuestion("The weather ", ["is", "was", "were"], "was", " sunny and warm at the weekend.", "images/was-were/benjaminnow.webp"),
      makeQuestion("Daniel ", ["is", "was", "were"], "was", " eleven years old last year.", "images/was-were/daniel.webp"),
      makeQuestion("I ", ["am not", "wasn't", "weren't"], "was", " at home yesterday afternoon.", "images/was-were/avaathome.webp"),
      makeQuestion("The classroom ", ["isn't", "wasn't", "weren't"], "wasn't", " clean before the lesson.", "images/was-were/dirty.webp"),
      makeQuestion("Ella ", ["isn't", "was", "weren't"], "was", " happy with his exam result.", "../images/6/1/65.webp"),
      makeQuestion("Ethan ", ["aren't", "wasn't", "weren't"], "wasn't", " late for school yesterday.", "images/personality/ethan_punctual.webp"),
      makeQuestion("The children ", ["aren't", "wasn't", "weren't"], "weren't", " in the playground during the lesson.", "images/was-were/ben-luc-dav13.webp"),
      makeQuestion("Noah ", ["aren't", "wasn't", "weren't"], "wasn't", " busy last Sunday.", "images/was-were/noahyesterday.webp"),
      makeQuestion("The questions ", ["aren't", "wasn't", "weren't"], "weren't", " difficult for the students.", "images/personality/david_honest.webp"),
      makeQuestion("", ["Is", "Was", "Were"], "Was", " the school library open after lunch?", "../images/5/1/10.webp"),
      makeQuestion("", ["Are", "Was", "Were"], "Were", " the children tired after the football match?", "images/was-were/lucasethantired.webp"),
      makeQuestion("", ["Is", "Was", "Were"], "Was", " your homework difficult last night?", "images/daily-routines/dohomework.webp"),
      makeQuestion("", ["Are", "Was", "Were"], "Were", " your friends at the birthday party?", "../images/5/8/42.webp")
    ];

    return shuffleWasWereChoice(questions);
  }

  window.exerciseModules = window.exerciseModules || [];
  window.exerciseModules.push({
    id: EXERCISE_ID,
    activity: "paragraph-choice",
    title: "CHOOSE AN OPTION",
    groupSize: 19,
    supports(functionModule) {
      return functionModule.id === FUNCTION_ID && functionModule.grade === 7;
    },
    get pages() {
      return buildWasWereChoicePages();
    }
  });
})();
