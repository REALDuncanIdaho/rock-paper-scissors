/* have computer make a random choice between the rock, paper, or scissors
prompt user for rock, paper, or scissors
determine of user or computer wins
return message based on outcome of command */

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

  function chooseRock() {
      playerChoice = 'rock';
      playerSelection = 0;
      getComputerSelection();
      getComputerChoice();
      playRound();
      document.getElementById("ps").innerHTML = 'Player Score: ' +playerScore;
      document.getElementById("cs").innerHTML = 'Computer Score: ' +computerScore; 
      if (playerScore == 5) {
        alert("Congratulations! You've defeated the computer at a childrens game! You should feel really good about yourself!")
      }  
      else if (computerScore == 5) {
        alert("You've been defeated by a computer at a childrens game. You should rethink a few things about your life.")
      }
  }

  function choosePaper() {
    playerChoice = 'paper';
    playerSelection = 0;
    getComputerSelection();
    getComputerChoice();
    playRound();
    document.getElementById("ps").innerHTML = 'Player Score: ' +playerScore;
    document.getElementById("cs").innerHTML = 'Computer Score: ' +computerScore;  
    if (playerScore == 5) {
      alert("Congratulations! You've defeated the computer at a childrens game! You should feel really good about yourself!")
    }  
    else if (computerScore == 5) {
      alert("You've been defeated by a computer at a childrens game. You should rethink a few things about your life.")
    } 
}

function chooseScissors() {
  playerChoice = 'scissors';
  playerSelection = 0;
  getComputerSelection();
  getComputerChoice();
  playRound();
  document.getElementById("ps").innerHTML = 'Player Score: ' +playerScore;
  document.getElementById("cs").innerHTML = 'Computer Score: ' +computerScore;  
  if (playerScore == 5) {
    alert("Congratulations! You've defeated the computer at a childrens game! You should feel really good about yourself!")
  }  
  else if (computerScore == 5) {
    alert("You've been defeated by a computer at a childrens game. You should rethink a few things about your life.")
  } 
}

function playRound() { 
  if (computerScore == 5 || playerScore == 5) {
  computerScore == 0 && playerScore == 0;
  }
  else if (playerSelection == 0 && computerSelection == 2) {
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
}
