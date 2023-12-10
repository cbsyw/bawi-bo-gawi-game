

//console.log("hello world")


//create a function containing the following 
//create a variable - randomNumber
//create a variable - rock 
//create a variable - paper
//create a variable - scissors 
//set randomAnswer equal to a random number generator from 1-3
//set the random number generator 
//if random answer = 1 return rock ("rock")
//if random answer = 2 return paper
//if random answer = 0 return scissors 

//console.log (function)





function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * (4-1) + 1);
    let rock = ("rock")
    let paper = ("paper")
    let scissors = ("scissors")

    if (randomNumber === 3){
        return paper;
    }
    else if (randomNumber === 2) {
        return scissors;
    }
    else if (randomNumber === 1) {
        return rock;
    }


}




function playRound (playerSelection,computerSelection){

    let rock = ("rock")
    let paper = ("paper")
    let scissors = ("scissors")
    let userText = prompt("Choose your weapon");
    playerSelection = userText.toLowerCase();
    let playerVictoryText = playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)
    let compVictoryText = computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)

    if (playerSelection === computerSelection){
        return ("Tie! Play Again");
    }
    else if (playerSelection === scissors && computerSelection === paper
        || playerSelection === paper && computerSelection === rock
        || playerSelection === rock && computerSelection === scissors){
        return ("You Win! " +  playerVictoryText + " beats " + compVictoryText + "!")
    }
    else if (computerSelection === scissors && playerSelection === paper
        || computerSelection === paper && playerSelection === rock
        || computerSelection === rock && playerSelection === scissors){
            return ("You Lose! " +  compVictoryText + " beats " + playerVictoryText + "!")
        }
    else{
        return ("cancelled");
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection))
