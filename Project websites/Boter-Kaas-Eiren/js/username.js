console.log("username loaded")
const inputPlayerOne = document.querySelector(".player-one");
const inputPlayerTwo = document.querySelector(".player-two");
const checkBox = document.querySelector(".computer")
const submitBtn = document.querySelector(".submit-btn");
const clearNameBtn = document.querySelector(".clear-name-button");

// function disable(){
//     if(checkBox.checked == true){
//         inputPlayerTwo.disabled = ture;
//     } else {
//         inputPlayerTwo.disabled = false;
//     }
// }

submitBtn.addEventListener('click', function() {
    const playerOne = inputPlayerOne.value;
    const playerTwo = inputPlayerTwo.value;

    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("playerTwo", playerTwo);

    // if(checkBox.Checked == true){
    //     window.open("computer.html");
    // } else{
    //     window.open("index.html")
    // }

    window.open("index.html")
})

clearNameBtn.addEventListener('click', function (){
    inputPlayerOne.value = localStorage.clear("playerOne");
    inputPlayerTwo.value = localStorage.clear("playerTwo");
    inputPlayerOne.value = "";
    inputPlayerTwo.value = "";
})


// let test = localStorage.getItem("playerOne");
//     alert(test + " Won")


inputPlayerOne.value = localStorage.getItem("playerOne");
inputPlayerTwo.value = localStorage.getItem("playerTwo");

console.log(localStorage.getItem("playerOne"));
console.log(localStorage.getItem("playerTwo"));