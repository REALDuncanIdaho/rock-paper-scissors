/* have computer make a random choice between the rock, paper, or scissors
prompt user for rock, paper, or scissors
determine of user or computer wins
return message based on outcome of command */

/*let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection == 0) {
    computerChoice = "rock";
  }
  else if (computerSelection == 1) {
    computerChoice = "paper";
  }
  else if (computerSelection == 2) {
    computerChoice = "scissors";
  }
  

let playerChoice = prompt("Rock, Paper, or Scissors?");
  if (playerChoice == "rock") {
    playerSelection = 0;
  }
  else if (playerChoice == "paper") {
    playerSelection = 1;
  }
  else if (playerChoice == "scissors") {
    playerSelection = 2; 
  } else if (playerChoice != 'rock' || 'paper' || 'scissors') {
    alert("You didn't enter rock, paper, or scissors.")
 }

  function playRound() {
    if (playerSelection == 0 && computerSelection == 2 || playerSelection > computerSelection) {
      alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Win!')
    }
    else if (playerSelection == 2 && computerSelection == 0 || playerSelection < computerSelection) {
      alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Lose.')
    }
    else if (playerSelection == computerSelection) {
      alert("You and the Computer both entered "+playerChoice+". It's a tie. Try again.");
    }
  }

console.log(computerSelection)
console.log(playerSelection)
playRound() 

let playerChoice;
let playerSelection;
let computerChoice;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
  let computerSelection = Math.floor(Math.random() * 3);
  
  console.log(computerSelection);
  return(computerSelection);
}  

computerSelection = getComputerSelection();


function getComputerChoice() {
  if (computerSelection == 0) {
    computerChoice = "rock";
  }
  else if (computerSelection == 1) {
    computerChoice = "paper";
  }
  else if (computerSelection == 2) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return(computerChoice);
}

computerChoice = getComputerChoice();

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

  console.log(playerChoice);
  return (playerChoice);
}
playerChoice = getPlayerChoice();


function getPlayerSelection() {
    if (playerChoice == "rock") {
    playerSelection = 0;
  }
  else if (playerChoice == "paper") {
    playerSelection = 1;
  }
  else if (playerChoice == "scissors") {
    playerSelection = 2;
  }
  console.log(playerSelection);
  return (playerSelection);
  }
playerSelection = getPlayerSelection();


function playRound() {
  if (playerSelection == 0 && computerSelection == 2 || playerSelection > computerSelection) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Win!');
    playerScore++;
  }
  else if (playerSelection == 2 && computerSelection == 0 || playerSelection < computerSelection) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Lose.');
    computerScore++;
  }
  else if (playerSelection == computerSelection) {
    alert("You and the Computer both entered "+playerChoice+". It's a tie. Try again.");
  } else if (playerChoice != 'rock' || 'paper' || 'scissors') {
    alert("You didn't enter rock, paper, or scissors. Shame on you.")
  }
}


function game() {
  playRound();
}

game();
console.log(playerScore);
console.log(computerScore); */

let playerChoice;
let playerSelection;
let computerChoice;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
  computerSelection = Math.floor(Math.random() * 3);
  
  console.log('computerSelection' + computerSelection);
  getComputerChoice();
}  


function getComputerChoice() {
  if (computerSelection == 0) {
    computerChoice = "rock";
  }
  else if (computerSelection == 1) {
    computerChoice = "paper";
  }
  else if (computerSelection == 2) {
    computerChoice = "scissors";
  }
  console.log('computerChoice' + computerChoice);
  return(computerChoice);
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

  console.log('playerchoice' + playerChoice);
}

function getPlayerSelection() {
    if (playerChoice == "rock") {
    playerSelection = 0;
  }
  else if (playerChoice == "paper") {
    playerSelection = 1;
  }
  else if (playerChoice == "scissors") {
    playerSelection = 2;
  }
  console.log('playerSelection' + playerSelection);
  return (playerSelection);
  }


function playRound() {
  if (playerSelection == 0 && computerSelection == 2) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Win!');
    playerScore++;
  }
  else if (playerSelection == 2 && computerSelection == 0) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Lose.');
    computerScore++;
  }
  else if (playerSelection > computerSelection) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Win!');
    playerScore++;
  }
  else if (playerSelection < computerSelection) {
    alert('The Computer entered '+computerChoice+' and you entered '+playerChoice+'. You Lose.');
    computerScore++;
  }
  else if (playerSelection == computerSelection) {
    alert("You and the Computer both entered "+playerChoice+". It's a tie. Try again.");
  } 
  else if (playerChoice != 'rock' || 'paper' || 'scissors') {
    alert("You didn't enter rock, paper, or scissors. Shame on you.")
  }
}

function game() {
  if (playerScore < 5 && computerScore < 5) {
    getComputerSelection();
    getPlayerChoice();
    getPlayerSelection();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
  }
}



game();
game();
game();
game();
game();
game();
game();
game();
game();
game();