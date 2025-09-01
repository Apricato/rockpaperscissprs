let humanScore = 0;
let computerScore = 0;

const initializer = 0;

const btnrock = document.createElement("button");
const btnpaper = document.createElement("button");
const btnscissors = document.createElement("button");
const label = document.createElement("p");

const paragraph = document.createElement("p");
const body = document.querySelector("body");
const adiv = document.createElement("div");

btnpaper.textContent = "paper";
btnrock.textContent = "rock";
btnscissors.textContent = "scissors";

body.appendChild(adiv);
adiv.appendChild(label);
adiv.appendChild(paragraph);

body.appendChild(btnrock);
body.appendChild(btnpaper);
body.appendChild(btnscissors);

function sendround(btninput) {
  let round = playRound(btninput, getComputerChoice());

  if (humanScore === 5) {
    paragraph.textContent = ">>>>>> Congratulations you have won";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    paragraph.textContent = ">>>>>> Game over the computer won";
    humanScore = 0;
    computerScore = 0;
  }

}

btnpaper.addEventListener("click", () => {
  sendround("paper");
});

btnrock.addEventListener("click", () => {
  sendround("rock");
});

btnscissors.addEventListener("click", () => {
  sendround("scissors");
});

function getComputerChoice() {
  let value = Math.random();
  console.log(value);
  if (value >= 0 && value < 0.33) {
    return "rock";
  } else if (value >= 0.33 && value < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice === computerChoice:
      label.textContent = "It is a tie";
      return "Its a tie!";

    case humanChoice === "paper" && computerChoice === "rock":
      humanScore++;
      label.textContent = "You win! Paper beats Rock.";
      return "You win! Paper beats Rock.";

    case humanChoice === "scissors" && computerChoice === "paper":
      humanScore++;
      label.textContent = "You win! scissors beats paper.";
      return "You win! scissors beats paper.";

    case humanChoice === "rock" && computerChoice === "scissors":
      humanScore++;
      label.textContent = "You win! Rock  beats scissors.";
      return "You win! Rock  beats scissors.";

    default:
      computerScore++;
      label.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}.`;

      return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
  }

  
}
