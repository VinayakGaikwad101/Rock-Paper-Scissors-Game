const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let getResult;
let totalScore = 0;
let tries = 0;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (a) => {
    userChoice = a.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    Result();
    if (totalScore === 10) {
      alert(`Congratulations! You won in ${tries} tries`);
    }
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let x = randomNumber;
  if (x === 1) {
    computerChoice = "rock";
  } else if (x === 2) {
    computerChoice = "paper";
  } else if (x === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function Result() {
  if (computerChoice === userChoice) {
    getResult = "Tie!";
    tries++;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    getResult = "You Win!";
    tries++;
    totalScore++;
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    getResult = "You Win!";
    tries++;
    totalScore++;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    getResult = "You Win!";
    tries++;
    totalScore++;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    tries++;
    getResult = "You Lost!";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    tries++;
    getResult = "You Lost!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    tries++;
    getResult = "You Win!";
    totalScore++;
  }
  resultDisplay.innerHTML = getResult;
  scoreDisplay.innerHTML = totalScore;
}
