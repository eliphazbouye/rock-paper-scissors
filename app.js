// Steps 1 ; Your game is going to play against the computer,
    // so begin with a function called computerPlay that will
    // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
    // We’ll use this function in the game to make the computer’s play.


function computerPlay(){
    const gameChoice = ['rock','papper','scissors'];
    var test = Math.floor(Math.random() * Math.floor(3));
    return gameChoice[test];
} 

// console.log(computerPlay());


//Create function of user selection 


function playerSelection(){
    var choice = prompt('Votre Choix !')
     if(choice === 'rock' || choice === 'papper' || choice === 'scissors'){
         return choice
     }else{
         return 'Try Again'
     }
}

// playerSelection()
    // Write a function that plays a single round of Rock Paper Scissors.
    // The function should take two parameters - the playerSelection
    // and computerSelection - and then return a string that declares the 
    // winner of the round like so:
    // "You Lose! Paper beats Rock"

function playRound(computer, player){
    var result = computer + ' ' + player;
    switch(true){
        case(computer === 'papper' && player === 'scissors') :
        return 'Player Winner : ' +  ' Computer : ' + computer + ' and Player : ' + player
        break;
        case(computer === 'scissors' && player === 'papper') :
        return 'Computer Winner : '  +  ' Computer : ' + computer + ' and Player : ' + player;
        break;
        case(computer === 'rock' && player === 'scissors') :
        return 'Computer Winner : '  +  ' Computer : ' + computer + ' and Player : ' + player
        break;
        case(computer === 'papper' && player === 'rock') :
        return 'Computer Winner : '  +  ' Computer : ' + computer + ' and Player : ' + player
        break
        case(computer === 'rock' && player === 'papper') :
        return 'Player Winner : '  +  ' Computer : ' + computer + ' and Player : ' + player
        break;
        case(computer === 'scissors' && player === 'rock') :
        return 'Player Winner : '  +  ' Computer : ' + computer + ' and Player : ' + player
        break;
        case(computer === player) : 
        return 'Match nul : '  +  ' Computer : ' + computer + ' and Player : ' + player
        break;
        default: 
        return "The result is => " + ' Computer : ' + computer + ' and Player : ' + player + ' ||||  because one of user enter invalid value'

    }
    // return result
}

console.log(playRound(computerPlay(), playerSelection()))