const Letter = function(character){
    this.letter = 
character.toUpperCase();
    this.placeholder = "_";
    this.guessed = false;

}
Letter.prototype.getCharacter = 
function(){
    return this.letter;
}
Letter.prototype.getDisplayCharacter = function(){
    if (this.guessed){
        return this.letter;
    }else{
        return this.placeholder;
    }
}

module.exports = Letter;
