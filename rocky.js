let points = 0;

function getComputerChoice() {
  /*
    have an array of possible choices in lowercase
    choose one of these choices randomly
        Math.floor(arr.length * Math.random())
    return this choice
    */
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(choices.length * Math.random());
  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  // Returns the winner
  let player = playerSelection.toLowerCase();
  if (player == computerSelection) {
    return "Tie!";
  }
  switch (player) {
    case "rock":
      if (computerSelection == "scissors") {
        return `Player wins! ${player} beats ${computerSelection}!`;
      } else if (computerSelection == "paper") {
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
      }
    case "paper":
      if (computerSelection == "rock") {
        return `Player wins! ${player} beats ${computerSelection}!`;
      } else if (computerSelection == "scissors") {
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
      }
    case "scissors":
      if (computerSelection == "paper") {
        return `Player wins! ${player} beats ${computerSelection}!`;
      } else if (computerSelection == "rock") {
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
      }
  }
}

function game() {
  // we assign functions to each button with the corresponding player choice by assigning event listeners to each button, each calling the function playround with the player choice being the html of the button
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      console.log(playRound(button.innerHTML, getComputerChoice()));
    });
  });
}

game();
