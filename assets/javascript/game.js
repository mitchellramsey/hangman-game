
//Answer Choices   
var randomMovie;
var movieTitles=[
 	    "avatar",
      "titantic",
      "frozen",
      "minions",
      "skyfall",
      "zootopia",
      "spectre",
      "inception",
      "deadpool",
      "maleficent",
      "up",
      "gravity",
      "it",
      "interstellar",
      "moana",
      "sing",
      "hancock",
      "ratatouille",
      "logan",
      "tangled"];

var missesRemaining = 7;
var usedLetters = [];
var playAgain = true;
var wins = 0;    


function startGame () {
  if(missesRemaining > 0 && playAgain === true){
    missesRemaining = 7;
    usedLetters = [];
    gamePlay ();
  } else if(missesRemaining === 0 && playAgain === true){
    document.getElementById("movieScreen").innerHTML = "Sorry you ran out of guesses and the game is over. You accumulated " + wins + " wins.";
  } else {
    document.getElementById("movieScreen").innerHTML = "Thank you for playing! You accumulated " + wins + " wins.";
  }
}

function gamePlay () {
  //Choose movie
  randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
  console.log(randomMovie); //delete later

  //Turning movie into blank array
  var answerArray = [];
    for(var i=0; i<randomMovie.length; i++) {
      answerArray[i] = "_";
      var remainingLetters = answerArray.length;
    }



  //Writes out blanks for answer
  document.getElementById("movieScreen").innerHTML = answerArray;
  //Writes out the number of guesses remaining
  document.getElementById("gr").innerHTML = missesRemaining;


  //loops for user input
  document.onkeyup = function userInput(event) {
    var userChoice = event.key;
    console.log(userChoice); //delete later
    userChoice = userChoice.toLowerCase();
    
    if(usedLetters.indexOf(userChoice,0) > -1){
      alert("You have already clicked this button. Please select again");
    } else {  
        //loop for putting correct choices into the answer array
        for (i=0; i<randomMovie.length; i++){
          if(randomMovie[i] === userChoice && answerArray[i] === "_"){
            answerArray[i] = userChoice;
            document.getElementById("movieScreen").innerHTML = answerArray;
            remainingLetters -= 1;
          }
        }
        if(randomMovie.indexOf(userChoice,0) === -1){
          missesRemaining -= 1;
        }
        //For each choice decrease guess by 1 and place letter into letters used
        // missesRemaining -= 1;
        document.getElementById("gr").innerHTML = missesRemaining;
        usedLetters.push(userChoice);
        document.getElementById("usedletters").innerHTML = usedLetters;
        if(remainingLetters === 0) {
          playAgain = confirm("Congratualtions! You won! Would you like to continue?");
          wins += 1;
          document.getElementById("numberWins").innerHTML = wins;
          startGame();
        }
        if(missesRemaining === 0) {
          startGame();
        } 
      }
  }  
}


startGame();
     
