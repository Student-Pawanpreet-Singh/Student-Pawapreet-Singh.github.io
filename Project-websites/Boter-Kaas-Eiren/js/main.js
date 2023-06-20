// Local storage highscore and players

console.log("main loaded")
localStorage.getItem("highScoreX");
localStorage.getItem("highScoreO");
let playerX = localStorage.getItem("playerOne");
let playerO = localStorage.getItem("playerTwo");


// PLayer X and O
playerX = document.querySelector(".playerX").innerHTML += "X: " + playerX;
playerO = document.querySelector(".playerO").innerHTML += "O: " + playerO;


// Ouery selector Cells and score
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#restartBtn");
let scoreX = document.querySelector(".scoreX");
let scoreO = document.querySelector(".scoreO");

// Winconditions
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
scoreO = 0;
scoreX = 0;


initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
};
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    } 

    updateCell(this, cellIndex);
    checkWinner();
};
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
};
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
};

// CHECK WINNER FUNCTION
function checkWinner(){
    let roundOne = false;

    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundOne = true;
            break;
        }
    }

    if(roundOne == true){
        statusText.textContent = `${currentPlayer} Wins!`;
        options = ["", "", "", "", "", "", "", "", ""];
        running = false;
    } else if(!options.includes("")){
        statusText.textContent = `Draw!`
        running = false;
    } else{
        changePlayer();
    }

localStorage.setItem("scoreX", scoreX);
localStorage.setItem("scoreO", scoreO);

if (roundOne && currentPlayer == "X"){
    scoreX += 1;
    console.log(scoreX)
    localStorage.setItem("highScoreX", scoreX);
} else if(roundOne && currentPlayer == "O"){
    scoreO += 1;
    console.log(scoreO);
    localStorage.setItem("highScoreO", scoreO);
} 



document.querySelector(".scoreX").textContent = localStorage.getItem("scoreX");
document.querySelector(".scoreO").textContent = localStorage.getItem("scoreO");

};

//Restart game function update points

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
    console.log(playerO + "score: " + scoreO);
    console.log(playerX + "score: " + scoreX);
};

document.querySelector("#newGame").addEventListener("click", function() {
    window.location.reload(); 
      
});


//Load webpage after refresh with localstorage.

if (localStorage.getItem("highScoreX") > 5){
    document.querySelector("#highScoreX").value = localStorage.getItem("highScoreX");
} else if(localStorage.getItem("highScoreO") > 5){
    document.querySelector("#highScoreO").value = localStorage.getItem("highScoreO");
} else{
    document.querySelector("#highScoreX").textContent += localStorage.getItem("highScoreX");
    document.querySelector("#highScoreO").textContent += localStorage.getItem("highScoreO");
}




console.log(localStorage.getItem("highScoreX"));
console.log(localStorage.getItem("highScoreO"));
console.log(localStorage.getItem("playerX"));
console.log(localStorage.getItem("playerO"));