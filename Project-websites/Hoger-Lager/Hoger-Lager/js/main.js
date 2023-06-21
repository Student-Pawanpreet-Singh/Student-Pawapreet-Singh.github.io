//ALL VARIABLES
let game;
const playerDiceOne = document.querySelector(".player-dice-1");
const playerDiceTwo = document.querySelector(".player-dice-2");
const npcDiceOne = document.querySelector(".npc-dice-1");
const npcDiceTwo = document.querySelector(".npc-dice-2"); 
const playerName = document.querySelector(".Player-name");
const buttonHigh = document.querySelector(".higher");
const buttonLow = document.querySelector(".lower");
const startButton = document.querySelector(".start");


// Math.random to randomize the dice throw //
// PlayerDice //



function randomPlayerDice(_playerDiceOne, _playerDiceTwo){
    //Player Dice Generator
    const playerDiceOne = Math.floor(Math.random() * 6 ) + 1; //random number generator. dice 1.

    //images/dice1.png
    const firstPlayerDiceImage = 'img/dice' + playerDiceOne + '.png';

    document.querySelectorAll('img')[3].setAttribute('src', firstPlayerDiceImage);

    //Player Dice Generator
    const playerDiceTwo = Math.floor(Math.random() * 6 ) + 1; //random number generator. dice 2.

    //images/dice1.png
    const secondPlayerDiceImage = 'img/dice' + playerDiceTwo + '.png';

    document.querySelectorAll('img')[2].setAttribute('src', secondPlayerDiceImage);
    console.log(playerDiceOne + playerDiceTwo)
}

randomPlayerDice();

// npcDice //



function randomNpcDice(_npcDiceOne, _npcDiceTwo){
    //Player Dice Generator
    const npcDiceOne = Math.floor(Math.random() * 6 ) + 1; //random number generator. dice 1.

    //images/dice1.png
    const firstPlayerDiceImage = 'img/dice' + npcDiceOne + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstPlayerDiceImage);

    //Player Dice Generator
    const npcDiceTwo = Math.floor(Math.random() * 6 ) + 1; //random number generator. dice 2.

    //images/dice1.png
    const secondPlayerDiceImage = 'img/dice' + npcDiceTwo + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', secondPlayerDiceImage);
    console.log(npcDiceOne + npcDiceTwo)    
}

randomNpcDice();

// Need to make a function if button high or low is pressed and bet is in to open Start and see the winner in round //
startButton.disabled = true;
buttonHigh.disabled = false;
buttonLow.disabled = false;

function pressedHigh(){
    buttonHigh.disabled = true;
    buttonLow.disabled = true;
    startButton.disabled = false;
    console.log("High pressed")
    
}

function pressedLow(){
    buttonLow.disabled = true;
    buttonHigh.disabled = true;
    startButton.disabled = false;
    console.log("Low pressed")
    
}



function roundWinner(){
    if(randomNpcDice() > randomPlayerDice() && buttonHigh.pressed){
        console.log("winner")
    } else if (randomNpcDice() < randomPlayerDice() && buttonHigh.pressed) {
        console.log("Loser")
    }
}






// Make loop for the game to keep the game going until points are up //

function round(){
    if (roundWinner() == randomNpcDice() || roundWinner() == randomPlayerDice()){
        confirm();
    }
}


if (confirm == true){
    startButton.disabled = true;
    buttonHigh.disabled = false;
    buttonLow.disabled = false;
}


////////////

//STOP REFRESHING YOU BIT** //
function onConfirmRefresh(event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave the page?";
}
 
  window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });
