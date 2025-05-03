console.log("Welcome to rock paper scissors")

// Takes user input to determine if they chose a correct answer
function getHumanChoice() {
    let userChoice = prompt("Rock Paper or Scissors?")
    return userChoice;
}

// Function that chooses a random number for the computer
function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Stores the random choice in a constant variable called choice
const choice = randomChoice(1, 3);

// Function for computer with the choice
function getComputerChoice(choice) {
    if (choice == 3) {
        return "Scissors";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else if (choice == 1) {
        return "Rock";
    }
}


// Score variables for human and computer
let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Computer Wins!")
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win!")
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Computer Wins!")
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You Win!")
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer wins!")
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You Win!")
    }
}


// Initiates a round
getHumanChoice();
playRound(getHumanChoice, getComputerChoice);