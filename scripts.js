// Function to Play Game
let playerScore = 0;
let computerScore = 0;
let roundWin = ''

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        roundWin = 'tie'
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {

        playerScore++;
        roundWin = 'player'
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'rock' && playerSelection === 'scissors') {

        computerScore++;
        roundWin = 'computer'
    }

    updScrMsg(roundWin, playerSelection, computerSelection)

}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}


function finalMessage() {
    if (playerScore > computerScore) {
        endMessage.textContent = 'You won!';
        endMessage.style.color = ' #32CD32 ';
    } else {
        endMessage.textContent = 'You lost...';
        endMessage.style.color = '#EE4B2B';
    }
}

function reset() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Rock, Paper, Scissors, Shoot!'
    scoreMessage.textContent = 'Best of 5!'
    userScoreP.textContent = 'Player: 0'
    computerScoreP.textContent = 'Computer: 0'
    userInput.textContent = ''
    compInput.textContent = ''
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Function for Computer Choice

const computerSelection = getComputerChoice();

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    let rock = ("rock");
    let paper = ("paper");
    let scissors = ("scissors");

    if (randomNumber === 3) {
        return paper;
    } else if (randomNumber === 2) {
        return scissors;
    } else if (randomNumber === 1) {
        return rock;
    }
}

function isGameOver() {
    return playerScore === 3 || computerScore === 3
}

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const userInput = document.getElementById('userInput')
const compInput = document.getElementById('compInput')


const userScoreP = document.getElementById('userScore')
const computerScoreP = document.getElementById('computerScore')

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')

// 
const modal = document.getElementById('modal')
const endMessage = document.getElementById('endMessage')
const overlay = document.getElementById('overlay')
const restartButton = document.getElementById('restartButton')

// 



rockButton.addEventListener('click', () => inputClick('rock'))
paperButton.addEventListener('click', () => inputClick('paper'))
scissorsButton.addEventListener('click', () => inputClick('scissors'))

// 
restartButton.addEventListener('click', reset)
overlay.addEventListener('click', closeModal)
    // 



function inputClick(playerSelection) {

    if (isGameOver()) {
        openModal()
    }

    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (isGameOver())
        openModal()
    finalMessage()
}


function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}






function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            userInput.innerHTML = '<img src="img/rock.svg" alt="Rock">';
            break
        case 'paper':
            userInput.innerHTML = '<img src="img/scroll.svg" alt="scroll">';
            break
        case 'scissors':
            userInput.innerHTML = '<img src="img/scissors.svg" alt="scissors">';
            break
    }

    switch (computerSelection) {
        case 'rock':
            compInput.innerHTML = '<img src="img/rock.svg" alt="Rock">';
            break
        case 'paper':
            compInput.innerHTML = '<img src="img/scroll.svg" alt="scroll">';
            break
        case 'paper':
            compInput.innerHTML = '<img src="img/scissors.svg" alt="scissors">';
            break
    }


}

function updateScore() {

    if (roundWin === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWin === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWin === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }
    userScoreP.textContent = `Player: ${playerScore}`;
    computerScoreP.textContent = `Computer: ${computerScore}`;

}




function updScrMsg(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
                playerSelection
              )} beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
                playerSelection
              )} beats ${computerSelection.toLowerCase()}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
              playerSelection
            )} ties  ${computerSelection.toLowerCase()}`
}



