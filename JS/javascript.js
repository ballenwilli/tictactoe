// Welcome
console.log("Welcome to Rock Paper Scissors");
// Prompt the user for their choice.
//let choice = window.prompt(": ")
// declare variables for sanity
const div = document.createElement('div');
const container = document.querySelector('#container');
const windiv = document.createElement('div');
const losediv = document.createElement('div');
const tiediv = document.createElement('div');
const scorediv = document.createElement('div');

windiv.classList.add('win');
losediv.classList.add('lose');
tiediv.classList.add('tie');
scorediv.classList.add('score');


windiv.textContent = "You win!";
losediv.textContent = "You lose!";
tiediv.textContent = "You tie";

let wins = 0;
let losses = 0;
let ties = 0;
playerSelection = "";
computerSelection = "";

const choiceRock = document.querySelector('#rock');
const choicePaper = document.querySelector('#paper');
const choiceScissors = document.querySelector('#scissors');
choiceRock.addEventListener('click', ()=> {
  playerSelection ='rock';
  console.log(playerSelection);
  console.log("Rock");
  computerPlay();
  playRound();})
choicePaper.addEventListener('click',() => {
  playerSelection='paper';
  console.log(playerSelection);
  console.log("paper");
  computerPlay();
  playRound();})
choiceScissors.addEventListener('click', () => {
  playerSelection ='scissors';
  console.log(playerSelection);
  console.log("scissors");
  computerPlay();
  playRound();})

console.log(playerSelection);
// Randomize the computer's choice
//playerSelection = choice.toLowerCase(); // makes player choice lower case to avoid errors.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function computerPlay() {
  let x = 0;
  x = getRandomInt(3);
  console.log(x);
  if (x === 0) {
    computerSelection = "rock";
  } else if (x === 1) {
    computerSelection = "scissors";
      }
    else {
    computerSelection = "paper";
  } return (computerSelection);
}
//playRound();
//x = computerPlay();
//console.log("Player selection is:", playerSelection);

//if (x === 0) {
//  computerSelection = "rock";
//} else if (x === 1) {
//  computerSelection = "scissors";
//    }
//  else {
//computerSelection = "paper";
//}
//console.log("Computer Selection is:", computerSelection);
// Display the result.
function playRound() {

  let outcome = "null";
  if (playerSelection === "rock" && computerSelection === "scissors") {
    outcome = "You win! Rock beats Scissors!";
    container.append(windiv);
    wins = wins + 1;
    container.appendChild(scorediv);
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    outcome = "You lose! :( Paper covers Rock!)"
    container.append(losediv);
    losses = losses + 1;
    container.appendChild(scorediv);
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    outcome = "You tie";
    container.append(tiediv);
    ties = ties + 1;
    container.appendChild(scorediv);
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    outcome = "You tie";
    container.append(tiediv);
    ties = ties + 1;
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    outcome = "You win! Scissors cuts Paper!";
    container.append(windiv);
    wins = wins + 1;
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    outcome = "You lose! Rock beats scissors";
    container.append(losediv);
    losses = losses + 1;
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    outcome = "You win! Paper beats Rock!";
    container.append(windiv);
    wins = wins + 1;
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    outcome = "You lose! :( Scissors beats Paper!)"
    container.append(losediv);
    losses = losses + 1;   
    console.log(outcome);
    endGame();
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    outcome = "You tie";
    container.append(tiediv);
    ties = ties + 1;   
    console.log(outcome);
    endGame();
  }
  return(wins, losses, ties);
}
/*function game() {
  for (let p = 0; p <5; p++){
    let choice = window.prompt("Choose!: ")
    playerSelection = choice.toLowerCase();
    playerSelection = playerSelection.trim();
    computerPlay();
    playRound();
  }
}*/
//game();
function endGame() {
  scorediv.textContent="The score is "+ wins + " wins to "+losses+" losses with "+ties+ " ties";
  container.appendChild(scorediv);
  if (wins === 5 || losses === 5) {
    //DISABLE BUTTONS
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    if (wins === 5){
      const winner = document.createElement('div');
      winner.textContent="You Win";
      container.appendChild(winner);
    } else {
      const loser = document.createElement('div');
      loser.textContent="You Lose";
      container.appendChild(loser);

    }
  }

}


console.log("Wins", wins);
console.log("Losses", losses);
console.log("Ties", ties);
div.appendChild(scorediv);
