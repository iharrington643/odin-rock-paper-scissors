let computerScore = 0;
let userScore = 0;
let roundNum = 1;

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const scoreText = document.getElementById("score-text");
const scoreInfo = document.getElementById("score-info");

function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    const compChoiceIndex = Math.floor(Math.random() * compChoices.length);
    return compChoices[compChoiceIndex];
}

function playRound(userChoice, computerChoice) {

    let resultMessage = `You chose ${userChoice}, computer chose ${computerChoice}. `;

    if (userChoice == "rock") {
        if (computerChoice == "rock") {
            resultMessage += "Rock has no effect on rock. It's a tie!";
        } else if (computerChoice == "paper") {
            resultMessage += "Rock loses to paper. You lose!";
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            resultMessage += "Rock beats scissors. You win!";
            userScore += 1;
        }
    } else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            resultMessage += "Paper beats rock. You win!";
            userScore += 1;
        } else if (computerChoice == "paper") {
            resultMessage += "Paper has no effect on paper. It's a tie!";
        } else if (computerChoice == "scissors") {
            resultMessage += "Paper loses to scissors. You lose!";
            computerScore += 1;
        }
    } else if (userChoice == "scissors") {
        if (computerChoice == "rock") {
            resultMessage += "Scissors loses to rock. You lose!";
            computerScore += 1;
        } else if (computerChoice == "paper") {
            resultMessage += "Scissors beats paper. You win!";
            userScore += 1;
        } else if (computerChoice == "scissors") {
            resultMessage += "Scissors has no effect on scissors. It's a tie!";
        }
    }

    scoreText.innerHTML += `${roundNum}. ${resultMessage}<br>`;
    scoreInfo.innerHTML = `User Score - ${userScore} &nbsp;&nbsp; Computer Score - ${computerScore}`;
}

function declareFinalResult() {
    if (userScore > computerScore) {
        scoreText.innerHTML += `<br><strong>You win!</strong>`;
    } else if (userScore < computerScore) {
        scoreText.innerHTML += `<br><strong>You lose!</strong>`;
    } else {
        scoreText.innerHTML += `<br><strong>You're tied!</strong>`;
    }
}

function rockButtonClick() {
    if (roundNum <= 5) {
        playRound("rock", getComputerChoice());
        if (roundNum === 5) {
            declareFinalResult();
        }
        roundNum += 1;
    }
}

function paperButtonClick() {
    if (roundNum <= 5) {
        playRound("paper", getComputerChoice());
        if (roundNum === 5) {
            declareFinalResult();
        }
        roundNum += 1;
    }
}

function scissorsButtonClick() {
    if (roundNum <= 5) {
        playRound("scissors", getComputerChoice());
        if (roundNum === 5) {
            declareFinalResult();
        }
        roundNum += 1;
    }
}

rockButton.addEventListener('click', rockButtonClick);
paperButton.addEventListener('click', paperButtonClick);
scissorsButton.addEventListener('click', scissorsButtonClick);

