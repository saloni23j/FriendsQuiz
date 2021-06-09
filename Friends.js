var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question(chalk.yellow("What's your name? "));
var score = 0;
console.log(chalk.green("hi " +userName+ " Let's see how well do you know friends"));
console.log(chalk.blue("Let's begin with Level One"));
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.green("You are right"));
    score++;
  }
  else{
    console.log(chalk.red("you are wrong"));
  }
  console.log("------------------");
}
var questions = [{
  question: "In which city is Friends set?\na)London\nb)Queens\nc)Mexico\nd)New York City\n",
  answer: "d"
},{
  question: "What's the name of the woman that goes out with Joey and Ross in Barbados?\na)Charlie\nb)Emily\nc)Rose\nd)Laura\n",
  answer: "a"
},
{
  question:"What's the name of the coffee shop used by the characters?\na)Central Park\nb)Central Bay\nc)Central Perk\n",
  answer:"c"
},{
  question: "On the episode 'the one with the male nanny' what was the name of the nanny Rachel and Ross hired?\na)Sandy\nb)Mandy\nc)Molly\nTandy\n",
answer: "a"
}
]
var level2 = [{
  question: "How many pages does the letter that Rachel gives to Ross contains?\n a) 17\n b)18\n c)13\nd)8",
  answer: "b"
},{
  question: "Which tv series was Joey supposed to make an appearance?\na)Chicago P.D\nb)Law and Order\nc)Criminal minds\nd)C.S.I\n",
  answer: "b"
},
{
  question: "Which Rachel sister Ross kissed?\na)Amy\nb)Jill\nc)Amanda\nd)Mindy\n",
  answer: "b"
},
{
  question: "What was the name of Chandler's and Ross's band?\na)Way out\nb)New wave\nc)No way, way\nd)Way, no way\n",
  answer: "d"
},
{
  question: "What is the name of Chandler's father's Las Vegas all-male burlesque?\na)Viva Las Gaygas\nb)Viva Gaygas\nc)Viva the Gaygas\nd)Viva Las Vegas\n",
  answer:"a"

}

]


for(var i = 0 ; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
console.log("Your final score is: " +score);
if(score >= 1){
  console.log("Welcome to Level 2");
  for(var i = 0 ; i < questions.length; i++){
  play(level2[i].question, level2[i].answer);
}
if(score>3)
console.log(chalk.green("You were amazinggggggggg"));
else
console.log(chalk.red("You big bragger"));

}