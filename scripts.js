

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





function getRandomAnswer() {

    let randomNumber = Math.floor(Math.random() * (4-1) + 1);
    let rock = ("Rock!")
    let paper = ("Paper!")
    let scissors = ("Scissors!")

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