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
function getComputerChoice() {
    const num = randomChoice(1, 3)
    if (num == 3) {
        return "Scissors";
    } else if (num == 2) {
        return "Paper";
    } else if (num == 1) {
        return "Rock";
    }
}


// Score variables for human and computer
let humanScore = 0
let computerScore = 0


// Function for determination of who wins
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
        console.log("Computer won this round!");
        computerScore += 1
    } else {
        console.log("You won this round!");
        humanScore += 1
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Your score ${humanScore}`)
        console.log(`Computer score ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("The winner is YOU!")
    } else if (computerScore > humanScore) {
        console.log("The Computer Won!")
    } else if (humanScore === computerScore) {
        console.log("The game is a tie, thanks for playing")
    }
}




// Initiates a round
playGame();
