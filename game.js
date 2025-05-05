// Button selectors
const choiceButtons = document.querySelectorAll('.choice-btn');
const humanSpan = document.getElementById('human-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const roundResultH2 = document.getElementById('round-result');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');


// Score variables for human and computer
let humanScore = 0
let computerScore = 0


choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const human = btn.id;
        const computerChoice = getComputerChoice();
        const resultMessage = decideWinner(human, computerChoice);

        //Updating the GUI
        humanSpan.textContent = human;
        computerChoiceSpan.textContent = computerChoice;
        roundResultH2.textContent = resultMessage;
        humanScoreSpan.textContent = humanScore;
        computerScoreSpan.textContent = computerScore;
    });
});



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


// Function for determination of who wins a round
function decideWinner(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    } 
        const humanWins = 
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper");

        if (humanWins) {
        humanScore++;
        return "You win this round!";
        } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Gameplay function that shows score and compares score to see who won
// function playGame() {
//     if (humanScore > computerScore) {
//         console.log("The winner is YOU!")
//     } else if (computerScore > humanScore) {
//         console.log("The Computer Won!")
//     } else if (humanScore === computerScore) {
//         console.log("The game is a tie, thanks for playing")
//     }
// }






// Initiates a round
//playGame();
