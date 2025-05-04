console.log("Welcome to rock paper scissors")

// Takes user input to determine if they chose a correct answer
function getHumanChoice() {
    let userChoice = prompt("Rock Paper or Scissors?");
    return userChoice;
}

// Function that chooses a random number for the computer
function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function for computer with the choice
function getComputerChoice(choice) {
    const num = randomChoice(1, 3)
    if (choice == 3) {
        return "Scissors";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 1) {
        return "Rock";
    }
}


// Score variables for human and computer
let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);


    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Rock")
    ) {
        console.log("Computer wins!");
        computerScore += 1
    } else {
        console.log("You win!");
        humanScore += 1
    }
}

// Initiates a round
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);