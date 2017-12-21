
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
var imagesArray=[
      "assets/images/avatar.jpg",
      "assets/images/titanic.jpg",
      "assets/images/frozen.jpg",
      "assets/images/minions.jpg",
      "assets/images/skyfall.jpg",
      "assets/images/zootopia.jpg",
      "assets/images/spectre.jpg",
      "assets/images/inception.jpg",
      "assets/images/deadpool.jpg",
      "assets/images/maleficent.jpg",
      "assets/images/up.jpg",
      "assets/images/gravity.jpg",
      "assets/images/it.jpg",
      "assets/images/interstellar.jpg",
      "assets/images/moana.jpg",
      "assets/images/sing.jpg",
      "assets/images/hancock.jpg",
      "assets/images/ratatouille.jpg",
      "assets/images/logan.jpg",
      "assets/images/tangled.jpg"];
  var movieInfoArray=[
      "Avatar(2009): Ranks #1 making 2.8 billion dollars in the box office!",
      "Titantic(1997): Ranks #2 making 2.2 billion dollars in the box office!",
      "Frozen(2013): Ranks #3 making 1.3 billion dollars in the box office!",
      "Minions(2015): Ranks #4 making 1.2 billion dollars in the box office!",
      "Skyfall(2012): Ranks #5 making 1.1 billion dollars in the box office!",
      "Zootopia(2016): Ranks #6 making 1.0 billion dollars in the box office!",
      "Spectre(2015): Ranks #7 making 880 million dollars in the box office!",
      "Inception(2010): Ranks #8 making 828 million dollars in the box office!",
      "Deadpool(2016): Ranks #9 making 783 million dollars in the box office!",
      "Maleficient(2014): Ranks #10 making 758 million dollars in the box office!",
      "Up(2009): Ranks #11 making 735 million dollars in the box office!",
      "Gravity(2013): Ranks #12 making 723 million dollars in the box office!",
      "It(2017): Ranks #13 making 698 million dollars in the box office!",
      "Interstellar(2014): Ranks #14 making 677 million dollars in the box office!",
      "Moana(2016): Ranks #15 making 643 million dollars in the box office!",
      "Sing(2016): Ranks #16 making 634 million dollars in the box office!",
      "Hancock(2008): Ranks #17 making 624 million dollars in the box office!",
      "Ratatouille(2007): Ranks #18 making 621 million dollars in the box office!",
      "Logan(2017): Ranks #19 making 617 million dollars in the box office!",
      "Tangled(2010): Ranks #20 making 592 million dollars in the box office!"];

     


var missesRemaining = 7;
var usedLetters = [];
var playAgain = true;
var wins = 0;    

//if the user has lost a round and wants to play again
function yesStartOverFunction() {
  playAgain = true;
  missesRemaining = 7;
  wins = 0;
  document.getElementById("numberWins").innerHTML = wins;
  startGame();
}
//if the user no longer wishes to play
function noButtonFunction() {
  playAgain = false;
  startGame();
}
//if the user has won a round and wants to continue
function yesButtonFunction() {
  playAgain = true;
  startGame();
}
//evaluates if a user wins and wants play/stop or if they lose want to play/stop
function startGame () {
  if(missesRemaining > 0 && playAgain === true){
    missesRemaining = 7;
    usedLetters = [];
    document.getElementById("usedletters").innerHTML = usedLetters;
    gamePlay ();
  } else if(missesRemaining === 0 && playAgain === true){
    document.getElementById("movieScreen").innerHTML = "<p>Sorry you ran out of guesses and the game is over. You accumulated " + wins + " wins.</p><p>Would you like to play again?</p>";
    document.getElementById("movieScreen").innerHTML +="<p><button class='continueButton' onclick='yesStartOverFunction()'>Yes</button><button class='continueButton' onclick='noButtonFunction()'>  No</button></p>";
  } else {
    document.getElementById("movieScreen").innerHTML = "Thank you for playing! You accumulated " + wins + " wins.";
  }
}

function gamePlay () {
  //Choose movie
  var randomNumber = Math.floor(Math.random() * movieTitles.length);
  randomMovie = movieTitles[randomNumber];

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
    userChoice = userChoice.toLowerCase();
    
    //Ensures that user is only selecting letters and is not hitting the same letter twice
    var numberCode = userChoice.charCodeAt(0);
    if(usedLetters.indexOf(userChoice,0) > -1){
      alert("You have already clicked this button. Please select again");
    } else if(numberCode < 97 || numberCode > 122) {
        alert("That character is not an option.");
    
    } else {  
        //loop for putting correct choices into the answer array
        for (i=0; i<randomMovie.length; i++){
          if(randomMovie[i] === userChoice && answerArray[i] === "_"){
            answerArray[i] = userChoice;
            document.getElementById("movieScreen").innerHTML = answerArray;
            remainingLetters -= 1;
          }
        }
        //When user makes an incorrect guess
        if(randomMovie.indexOf(userChoice,0) === -1){
          missesRemaining -= 1;
        }
        //Writes results to the user screen
        
        document.getElementById("gr").innerHTML = missesRemaining;
        usedLetters.push(userChoice);
        document.getElementById("usedletters").innerHTML = usedLetters;

        //loops for when the user wins or loses. This will start our cycle over
        if(remainingLetters === 0) {
          wins += 1;
          document.getElementById("numberWins").innerHTML = wins;
          document.getElementById("movieScreen").innerHTML = "<p><img class='moviePoster' src=\"" + imagesArray[randomNumber] + "\" alt='Movie Poster Here'></p><p>" + movieInfoArray[randomNumber] + "</p>";
          document.getElementById("movieScreen").innerHTML += "<p>Would you like to continue?</p><p><button class='continueButton' onclick='yesButtonFunction()'>Yes</button><button class='continueButton' onclick='noButtonFunction()'>  No</button></p>";
        }
        if(missesRemaining === 0) {
          startGame();
        } 
      }
  }  
}


startGame();
     
