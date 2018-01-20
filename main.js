var fs = require("fs");
var Word = require("./words.js");
var inquirer = require("inquirer");
var guesses = [];
var remainingGuesses = 10;

inquirer.prompt([
    {
    type: "confirm",
    name: "startGame",
    message: "Can you guess the best Metal band in the world?"
    }
]).then(function(answers){
    if(answers.startGame){
        Word.pickWord;
        solution = Word.word;
        Ask();
    }
    else{
        console.log("ERROR")
    }
});
    var Ask = function(){
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuess",
            message: "Guess a letter!"
        }
    ]).then(function(answers){
        console.log(`You guessed ${answers.letterGuess}. \nYou have ${remainingGuesses} guesses left.`)
        remainingGuesses--
        guesses.push(answers.letterGuess)
        if(answers.letterGuess &&remainingGuesses>0){
            Ask();
        }
        else if (remainingGuesses === 0){
            console.log(`Game over! You didn't guess well. Wanna play again?`);
            startGame();
        }
        else{
            console.log("An error has occurred")
        }
    })

    }

// Get the blanks to show
// Get the game to function properly