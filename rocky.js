let ppoints = 0;
let cpoints = 0;

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
    console.log("Tie!");
    return null;
  }
  switch (player) {
    case "rock":
      if (computerSelection == "scissors") {
        console.log(`Player wins! ${player} beats ${computerSelection}!`);
        return true;
      } else if (computerSelection == "paper") {
        console.log(
          `Computer wins! ${computerSelection} beats ${playerSelection}!`
        );
        return false;
      }
    case "paper":
      if (computerSelection == "rock") {
        console.log(`Player wins! ${player} beats ${computerSelection}!`);
        return true;
      } else if (computerSelection == "scissors") {
        console.log(
          `Computer wins! ${computerSelection} beats ${playerSelection}!`
        );
        return false;
      }
    case "scissors":
      if (computerSelection == "paper") {
        console.log(`Player wins! ${player} beats ${computerSelection}!`);
        return true;
      } else if (computerSelection == "rock") {
        console.log(
          `Computer wins! ${computerSelection} beats ${playerSelection}!`
        );
        return false;
      }
  }
}

function updateScore(winner_bool) {
  // if bool true, update for player. Else update for computer.
  if (Math.max(ppoints, cpoints) == 5) {
    if (ppoints > cpoints) {
      console.log("Player wins!");
    } else {
      console.log("Computer wins!");
    }
  }
  const div = document.querySelector(".results");
  if (winner_bool == true) {
    ppoints += 1;
  } else if (winner_bool == false) {
    cpoints += 1;
  }
  div.textContent = `Player ${ppoints} points! Computer ${cpoints} points!`;
}

function events() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      let winner = playRound(button.innerHTML, getComputerChoice());
      updateScore(winner);
    });
  });
}

function game() {
  // we assign functions to each button with the corresponding player choice by assigning event listeners to each button, each calling the function playround with the player choice being the html of the button
  events();
}

game();
