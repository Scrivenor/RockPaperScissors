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
        myBtns[i].classList.add( "gameOver" );
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
    
    document.getElementById( "playerChoice").innerHTML = `You chose ${userChoice}.`;
    document.getElementById( "compChoice").innerHTML = `Computer chose ${computerChoice}.`;

    if( userChoice == computerChoice ) {
        document.getElementById("winnerRound").innerHTML = "Tie!";
        // return 0; //( "Tie!" ); 
    } else if( userChoice === "Rock" && computerChoice === "Scissors" ) {
        document.getElementById("winnerRound").innerHTML = "You win! Rock smash scissors!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 1; // ( "You win! Rock smash scissors! ");
    } else if( userChoice === "Rock" && computerChoice === "Paper" ) {
        document.getElementById("winnerRound").innerHTML = "You lose, paper covers rock!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 2; // ( "You lose, paper covers rock!");
    } else if( userChoice === "Paper" && computerChoice === "Scissors" ) {
        document.getElementById("winnerRound").innerHTML = "You lose, scissors cuts paper!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 3; // ( "You lose, scissors cuts paper");
    } else if( userChoice === "Paper" && computerChoice === "Rock") {
        document.getElementById("winnerRound").innerHTML = "You win, paper covers rock!!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 4; // ( "You win, paper covers rock!");
    } else if( userChoice === "Scissors" && computerChoice === "Paper") {
        document.getElementById("winnerRound").innerHTML = "You win, scissors cuts paper!";
        playerScore++;
        document.getElementById( "playerScore" ).innerHTML = `${playerScore}`;
        // return 5; // ( "You win, scissors cuts paper");
    } else {
        document.getElementById("winnerRound").innerHTML = "You lose, rock smash scissors!";
        compScore++;
        document.getElementById( "compScore" ).innerHTML = `${compScore}`;
        // return 6; //( "You lose, rock smash scissors")
    }
    
    // checking to see if we've played our five rounds
    currentRoundsPlayed = compScore + playerScore;
    if ( currentRoundsPlayed == 5 ) {
        disableButtons( "playerChoiceButton" );
        if ( playerScore > compScore ) {
            document.getElementById( "winnerGame" ).innerHTML = `You won the game, ${playerScore} to ${compScore} Click New Game to play again.`;
        } else {
            document.getElementById( "winnerGame" ).innerHTML = `Computer won the game, ${compScore} to ${playerScore}. Click New Game to play again.`;
        }
        // alert( "Game Over!" )
        return; 
    } else {
        return;
    }

}


function game() {
    
    let playerScore = 0;
    let compScore = 0;

    for( i=0;i<5;i++ ) {
        let roundResult = playRound( userPlay(), computerPlay() );
        switch( roundResult ) {
            case 0: // Tie
                console.log( `Tie! This round will not count. ` );
                break;
            case 1: // player win
                playerScore++;
                console.log( `Computer chose Scissors, you Win! Current score is ${playerScore} to ${compScore}.`);
                break;
            case 2: // comp win
                compScore++;
                console.log( `Computer chose Paper, you lose. Current score is ${playerScore} to ${compScore}.`);
                break;
            case 3: // comp win
                compScore++;
                console.log( `Computer chose Scissors, you lose. Current score is ${playerScore} to ${compScore}.`);
                break;
            case 4: // player win
                playerScore++;
                console.log( `Computer chose Paper, you win. Current score is ${playerScore} to ${compScore}.`);
                break;
            case 5: // player win
                playerScore++;
                console.log( `Computer chose Paper, you win. Current score is ${playerScore} to ${compScore}.`);
                break;
            case 6: // comp win
                console.log( `Computer chose Rock, you lose. Current score is ${playerScore} to ${compScore}.`);
                compScore++;
                break;
        }
    }
    
    // Display winner
    if ( playerScore > compScore ) {
        console.log( `You win! The final score is ${playerScore} (You) to ${compScore} (Computer).`);
    } else if ( compScore > playerScore ) {
        console.log( `Unfortunately you lost, final score is ${playerScore} (You) to ${compScore} (Computer).`);
    } else {
        console.log( "Somehow you played 5 rounds and tied 5 rounds." );
    }

}

// disableButtons( "playerChoiceButton" );
// run the game
// game()