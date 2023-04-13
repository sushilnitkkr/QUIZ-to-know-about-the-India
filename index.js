var readlineSync = require("readline-sync");

var score = 0;

//List of questions
const questions = [
  {
    question: "who is the first president of india ?",
    answer: "Rajendra Prasad"
  },
  {
    question: "who is the first prime minister of india ?",
    answer: "Jawahar Lal Nehru"
  },
  {
    question: "who is the first woman prime minister of india ?",
    answer: "Indira Gandhi"
  },
  {
    question: "who is the first female president of india ?",
    answer: "Pratibha Patil"
  },
  {
    question: "who is the first tribal woman president of india ?",
    answer: "Droupadi Murmu"
  },
  {
    question: "who is the 15th prime minister of India ?",
    answer: "Narendra Modi"
  }
];

function welcome() {
  var name = readlineSync.question("What is your name ?")
  console.log("Welcome " + name + " to know about the India")
}

function play(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right.")
    score = score + 1;
  }
  else {
    console.log("You are wrong.")
    console.log("Right answer is ----> " + answer)
  }
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore() {
  console.log("YAY! Your Scored: " + score)
}

welcome();
game();
showScore();