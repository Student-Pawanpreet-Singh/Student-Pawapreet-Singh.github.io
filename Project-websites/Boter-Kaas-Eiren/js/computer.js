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

function initializeGame(cell){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    cell.textContent = "O";
    running = true;
};
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    } 

    updateCell(this, cellIndex);
    checkWinner();
}

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