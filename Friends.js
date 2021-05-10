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
},
{
  question: "On the episode 'the one with the truth about London', with who Monica wanted to stay in first place?",
  answer: "Joey"
},
{
  question: "Joey had an imaginary childhood friend. His profession was?",
  answer: "Space cowboy"
},
{
  question: 'Who said: "Pivot. Pi-vot. PI-VOT."',
  answer: "Ross"
},
{
  question: "Who said: 'Welcome to the real world. It sucks. You're gonna love it'",
  answer: "Monica"
},
{
  question: "What was the name of Chandler's and Ross's band?",
  answer: "Way, no way"
},
{
  question: "What is the fake name Joey used to have?",
  answer: "Ken Adams "
},
{
  question: 'On the episode "the one with the male nanny" what was the name of the nanny Rachel and Ross hired?',
  answer: "Sandy"
}
]
for(var i = 0 ; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

if(score > 8)
{
  console.log("Your really are a big fan. You Scored : " +score); 

}
else{
  console.log("nahhhh! U just brag about being a huge fan");
}
