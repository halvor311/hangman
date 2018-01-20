const Letter = require("./letter");
let myLetter = new Letter("a");


console.log("myLetter:", myLetter.getCharacter());
console.log("displayCharacter:", myLetter.getDisplayCharacter());

myLetter.guessed = true;
console.log("displayCharacter guessed true:", myLetter.getDisplayCharacter());

var Word = function(randomWord){
    this.wordBank = ["Disturbed"];
    this.word = "";
    this.letterArray = [];
    this.pickWord = function(){
        this.word = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
        
    }
    
    console.log("word: ", this.word);
    this.checkWin=function(){

    }
    this.displayWord = function(){

    }
    this.addLetters= function(character){
        this.letterArray.push(new Letter(character))
    }
}
module.exports = Word;