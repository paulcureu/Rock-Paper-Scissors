let arms = ["Rock","Paper","Scissors"];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    return arms[Math.floor((Math.random() * arms.length) + 1)];
}
function playRound(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (userChoice === "Rock" && computerChoice === "Scissors" ||
               userChoice === "Paper" && computerChoice === "Rock" ||
               userChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}
function playGame(){
    while(humanScore + computerScore < 5){
        userChoice = prompt("Rock, Paper, or Scissors? Score: Computer["+computerScore+"] - Player["+humanScore+"]");
        playRound(userChoice, getComputerChoice());
    }

}
playGame();
if(humanScore > computerScore){
    prompt("You Win!");
}else {
    prompt("Computer Wins!");
}