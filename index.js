let arms = ["Rock","Paper","Scissors"];
const playerDisplay = document.getElementById("userScore");
const computerDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
function playGame(userChoice){
    let result;
    let computerChoice = arms[Math.floor(Math.random() * arms.length)];
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (userChoice === "Rock" && computerChoice === "Scissors" ||
        userChoice === "Paper" && computerChoice === "Rock" ||
        userChoice === "Scissors" && computerChoice === "Paper") {
        result = "You win!";
        userScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }
    playerDisplay.textContent = `PLAYER(${userScore}): ${userChoice}`;
    computerDisplay.textContent = `COMPUTER(${computerScore}): ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;
}

