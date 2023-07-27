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
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock paper scissors?");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

game();
