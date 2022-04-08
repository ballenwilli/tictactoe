// Welcome
console.log("Welcome to Tic Tac Toe!");
// Prompt the user for their choice.
let choice = window.prompt(": ")
let wins = 0;
let losses = 0;
let ties = 0;
playerSelection = "";
computerSelection = "";
// Randomize the computer's choice
playerSelection = choice.toLowerCase(); // makes player choice lower case to avoid errors.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function computerPlay(i) {
  let x = 0;
  x = getRandomInt(3);
  console.log(x);
  return x;
}
x = computerPlay();
console.log("Player selection is:", playerSelection);

if (x === 0) {
  computerSelection = "rock";
} else if (x === 1) {
  computerSelection = "scissors";
    }
  else {
  computerSelection = "paper";
}
console.log("Computer Selection is:", computerSelection);
console.log(computerSelection);
// Display the result.
let outcome = "null";
if (playerSelection === "rock" && computerSelection === "scissors") {
  outcome = "You win! Rock beats Scissors!";
  wins = wins + 1;
  console.log(outcome);
}
if (playerSelection === "rock" && computerSelection === "paper") {
  outcome = "You lose! :( Paper covers Rock!)"
  losses = losses = 1;
  console.log(outcome);
}
if (playerSelection === "rock" && computerSelection === "paper") {
  outcome = "You lose! :( Paper covers Rock!)"
  losses = losses = 1;
  console.log(outcome);
}
