// Helper functions
function getRandomIntInclusive(min, max) { // this function is overkill but I figure this could be useful in the future.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function capitalize( myString ) {
return myString.charAt(0).toUpperCase() + myString.slice(1).toLowerCase()

}

function disableButtons( className ) {
    var myBtns = document.getElementsByClassName(`${className}`);
    // console.log( myBtns );
    
    for( var i = 0; i < myBtns.length; i++ ) {
        myBtns[i].disabled = true;
    }
}


// Some Global vars
let playerScore = 0;
let compScore = 0;
currentRoundsPlayed = 0;


// main functions
function computerPlay () {
    switch ( getRandomIntInclusive( 1, 3) ) {
        case 1:
            return( "Rock" );
            break;
        case 2:
            return( "Paper" );
            break;
        case 3:
            return( "Scissors" )

    }
}

function playRound( userChoice ) { // this function is kicked off when user clicks one of the player choice buttons
    
    let computerChoice = computerPlay();

    document.getElementById( "roundOrFinal" ).innerHTML = "Winner of Last Round:";
    
    // document.getElementById( "playerChoice").innerHTML = `You chose ${userChoice}.`;
    // document.getElementById( "compChoice").innerHTML = `Computer chose ${computerChoice}.`;

    if( userChoice == computerChoice ) {
        document.getElementById("lastWinner").innerHTML = "Tie!";
        // return 0; //( "Tie!" ); 
    } else if( userChoice === "Rock" && computerChoice === "Scissors" ) {
        document.getElementById("lastWinner").innerHTML = "You win! Rock smash scissors!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 1; // ( "You win! Rock smash scissors! ");
    } else if( userChoice === "Rock" && computerChoice === "Paper" ) {
        document.getElementById("lastWinner").innerHTML = "You lose, paper covers rock!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 2; // ( "You lose, paper covers rock!");
    } else if( userChoice === "Paper" && computerChoice === "Scissors" ) {
        document.getElementById("lastWinner").innerHTML = "You lose, scissors cuts paper!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 3; // ( "You lose, scissors cuts paper");
    } else if( userChoice === "Paper" && computerChoice === "Rock") {
        document.getElementById("lastWinner").innerHTML = "You win, paper covers rock!!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 4; // ( "You win, paper covers rock!");
    } else if( userChoice === "Scissors" && computerChoice === "Paper") {
        document.getElementById("lastWinner").innerHTML = "You win, scissors cuts paper!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 5; // ( "You win, scissors cuts paper");
    } else {
        document.getElementById("lastWinner").innerHTML = "You lose, rock smash scissors!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 6; //( "You lose, rock smash scissors")
    }
    
    // checking to see if we've played our five rounds
    currentRoundsPlayed = compScore + playerScore;
    if ( currentRoundsPlayed == 5 ) {
        disableButtons( "playerChoiceButton" );
        // change text to refect final score
        document.getElementById( "roundOrFinal" ).innerHTML = " ";
        document.getElementById( "lastWinner" ).innerHTML = "Final Score!";
        document.getElementById( "lastWinner" ).style.fontWeight = "bold";
        document.getElementById( "lastWinner" ).style.fontSize = "x-large";
        document.getElementById( "lastWinner" ).style.paddingTop = "35px";
        // if ( playerScore > compScore ) {
        //     document.getElementById( "lastWinner" ).innerHTML = `You won the game, ${playerScore} to ${compScore} Click New Game to play again.`;
        // } else {
        //     document.getElementById( "lastWinner" ).innerHTML = `Computer won the game, ${compScore} to ${playerScore}. Click New Game to play again.`;
        // }
        // alert( "Game Over!" )
        return; 
    } else {
        return;
    }

}
