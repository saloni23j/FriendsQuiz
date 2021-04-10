var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
var score = 0;
console.log("hi " +userName+ " Let's see how well do you know friends");
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You are right");
    score++;
  }
  else{
    console.log("you are wrong");
  }
  console.log("------------------");
}
var questions = [{
  question: "In which city is Friends set?",
  answer: "New York City"
},
{
  question:"What's the name of the coffee shop used by the characters?",
  answer:"Central Perk"
},{
  question: "What is the name of Rachel's hairless cat?",
answer: "Mrs. Whiskerson"
}
]
for(var i = 0 ; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
console.log("Your final score is: " +score);