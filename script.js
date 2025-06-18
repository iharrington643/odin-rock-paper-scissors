computerScore = 0;
userScore = 0;

function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    const compChoiceIndex = Math.floor(Math.random() * compChoices.length);
    return compChoices[compChoiceIndex];
}

function getUserChoice() {
    userChoice = prompt("Select an option: Rock, Paper, or Scissors?");
    return userChoice;
}

function playRound(userChoice, computerChoice) {
    if (userChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Rock has no effect on rock. It's a tie!");
        } else if (computerChoice == "paper") {
            console.log("Rock loses to paper. You lose!");
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("Rock beats scissors. You win!");
            userScore += 1;
        }
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Paper beats rock. You win!");
            userScore += 1;
        } else if (computerChoice == "paper") {
            console.log("Paper has no effect on paper. It's a tie!");
        } else if (computerChoice == "scissors") {
            console.log("Paper loses to scissors. You lose!");
            computerScore += 1;
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("Scissors loses to rock. You lose!");
            computerScore += 1;
        } else if (computerChoice == "paper") {
            console.log("Scissors beats paper. You win!");
            userScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("Scissors has no effect on scissors. It's a tie!")
        }
    }
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(userSelection, computerSelection);
    }

    if (userScore > computerScore) {
        console.log("Game over. You won with a score of " + userScore.toString() + "!");
    } else if (userScore == computerScore) {
        console.log("Game over. You tied with a score of " + userScore.toString() + "!");
    } else {
        console.log("Game over. You lost with a score of " + userScore.toString() + "!");
    }
}

playGame();