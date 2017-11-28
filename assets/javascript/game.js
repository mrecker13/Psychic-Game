// Create array for all possible choices computer can make.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to hold the start positions.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessSoFar = [];

//Creates the function to start the game whenever user presses a key.
document.onkeyup = function(event) {

    var userGuess = event.key;

    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 9;
        guessSoFar = [];
    }
    else {
        guessesLeft--;
        guessSoFar.push(userGuess);
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessSoFar = [];
    }
    
    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("so-far").innerHTML = "Guesses so far: " + guessSoFar + " ";
};