const aAnTheFunction = {
  id: "a-an-the",
  grade: 5,
  unit: 1,
  title: 'Use of "a, an, the"',
  description: "Referring to a specific or non-specific noun.",
  exercises: ["article-choice", "sort-it"],
  sentences: [
    {
      id: "a-dog",
      article: "a",
      sentence: "a dog",
      exerciseSentence: "I see ___ sad dog under rain.",
      imagePath: "images/a-an-the/01-a-dog-in-the-park.webp",
      visualBrief: "A child notices one unfamiliar dog playing in a park."
    },
    {
      id: "the-dog",
      article: "the",
      sentence: "the dog",
      exerciseSentence: "___ dog is playing with the ball now.",
      imagePath: "images/a-an-the/02-the-dog-with-a-ball.webp",
      visualBrief: "The same dog from the previous image is playing with a ball."
    },
    {
      id: "an-orange",
      article: "an",
      sentence: "an orange",
      exerciseSentence: "She has ___ orange in her bag.",
      imagePath: "images/a-an-the/03-an-orange-in-a-bag.webp",
      visualBrief: "A student takes one orange out of her school bag."
    },
    {
      id: "the-orange",
      article: "the",
      sentence: "the orange",
      exerciseSentence: "___ orange on the table is sweet.",
      imagePath: "images/a-an-the/04-the-orange-is-juicy.webp",
      visualBrief: "The same orange is cut open, showing its juicy inside."
    },
    {
      id: "a-teacher",
      article: "a",
      sentence: "a teacher",
      exerciseSentence: "___ teacher is standing by the door.",
      imagePath: "images/a-an-the/05-a-teacher-by-the-door.webp",
      visualBrief: "One teacher is standing beside a classroom door."
    },
    {
      id: "the-teacher",
      article: "the",
      sentence: "the teacher",
      exerciseSentence: "___ teacher is welcoming the students.",
      imagePath: "images/a-an-the/06-the-teacher-greets-students.webp",
      visualBrief: "The same teacher welcomes students into the classroom."
    },
    {
      id: "an-umbrella",
      article: "an",
      sentence: "an umbrella",
      exerciseSentence: "He is carrying ___ umbrella.",
      imagePath: "images/a-an-the/07-an-umbrella.webp",
      visualBrief: "A boy is carrying one closed umbrella on a rainy day."
    },
    {
      id: "the-umbrella",
      article: "the",
      sentence: "the umbrella",
      exerciseSentence: "___ umbrella is open now",
      imagePath: "images/a-an-the/08-the-umbrella-is-black.webp",
      visualBrief: "The same umbrella is open."
    },
    {
      id: "a-ruler",
      article: "a",
      sentence: "a ruler",
      exerciseSentence: "We need ___ ruler for this activity.",
      imagePath: "images/a-an-the/09-a-ruler.webp",
      visualBrief: "Students need one ruler for a simple classroom activity."
    },
    {
      id: "an-apple",
      article: "an",
      sentence: "an apple",
      exerciseSentence: "She has ___ apple in her lunch box.",
      imagePath: "images/a-an-the/11-an-apple.webp",
      visualBrief: "One red apple in a lunch box."
    },
    {
      id: "an-elephant",
      article: "an",
      sentence: "an elephant",
      exerciseSentence: "___ elephant is very big.",
      imagePath: "images/a-an-the/12-an-elephant.webp",
      visualBrief: "One large elephant in a natural setting."
    },
    {
      id: "a-book",
      article: "a",
      sentence: "a book",
      exerciseSentence: "I have ___ book in my bag.",
      imagePath: "images/a-an-the/13-a-book.webp",
      visualBrief: "One book inside a school bag."
    },
    {
      id: "an-egg",
      article: "an",
      sentence: "an egg",
      exerciseSentence: "There is ___ egg on the plate.",
      imagePath: "images/a-an-the/14-an-egg.webp",
      visualBrief: "One fried egg on a breakfast plate."
    },
    {
      id: "a-car",
      article: "a",
      sentence: "a car",
      exerciseSentence: "She can see ___ car in the street.",
      imagePath: "images/a-an-the/15-a-car.webp",
      visualBrief: "One car on a street."
    },

    {
      id: "a-pencil",
      article: "a",
      sentence: "a pencil",
      exerciseSentence: "I need ___ pencil for this activity.",
      imagePath: "../images/5/2/27.webp",
      visualBrief: "One pencil on a classroom desk."
    },
    {
      id: "an-octopus",
      article: "an",
      sentence: "an octopus",
      exerciseSentence: "___ octopus has eight arms.",
      imagePath: "images/a-an-the/18-an-octopus.webp",
      visualBrief: "One octopus under the sea."
    },
    {
      id: "a-bike",
      article: "a",
      sentence: "a bike",
      exerciseSentence: "She rides ___ bike to the park.",
      imagePath: "images/a-an-the/19-a-bike.webp",
      visualBrief: "One bike in a park."
    },
 
    {
      id: "a-chair",
      article: "a",
      sentence: "a chair",
      exerciseSentence: "There is ___ chair near the window.",
      imagePath: "images/a-an-the/21-a-chair.webp",
      visualBrief: "One chair near a classroom window."
    },
    {
      id: "an-artist",
      article: "an",
      sentence: "an artist",
      exerciseSentence: "___ artist is painting a picture.",
      imagePath: "images/a-an-the/22-an-artist.webp",
      visualBrief: "One artist painting on a canvas."
    },
    {
      id: "a-puzzle",
      article: "a",
      sentence: "a puzzle",
      exerciseSentence: "She is solving ___ puzzle.",
      imagePath: "../images/5/1/25.webp",
      visualBrief: "One girl is solving a puzzle."
    },
    {
      id: "a-robot-car",
      article: "a",
      sentence: "a robot car",
      exerciseSentence: "The students are making ___ robot car.",
      imagePath: "../images/5/1/15.webp",
      visualBrief: "Students making a robot."
    },
    {
      id: "a-gum",
      article: "a",
      sentence: "a chewing gum",
      exerciseSentence: "I have ___ chewing gum.",
      imagePath: "images/a-an-the/chewgum.webp",
      visualBrief: "One small insect on a green leaf."
    },
    {
      id: "an-experiment",
      article: "an",
      sentence: "an experiment",
      exerciseSentence: "The students are doing ___ experiment.",
      imagePath: "../images/5/1/20.webp",
      visualBrief: "Students doing experiment."
    },
    {
      id: "a-computer",
      article: "a",
      sentence: "a computer",
      exerciseSentence: "We use ___ computer in the lab.",
      imagePath: "../images/5/2/13.webp",
      visualBrief: "One computer in a classroom."
    }
  
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(aAnTheFunction);
