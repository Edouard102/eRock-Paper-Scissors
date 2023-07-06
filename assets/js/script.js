
//App global variables

// variable score area
let resetBtn = document.getElementById("reset");
let scorePlayer = document.getElementById("pscores");
let scoreComputer = document.getElementById("cscores");

// variable control

let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

//  variable buttom player 

let btnPlayer = [...document.getElementsByClassName("btn--player")];
let PaperBtn = document.getElementById("btn--bpaper");
let ScissorsBtn = document.getElementById("btn--bscissors");
let RocksBtn = document.getElementById("btn--bbrocks");

// variable  computer
let imageComputer = [...document.getElementsByClassName("imagerps--computer")];
let computerRps = document.getElementByClass("imagerps--crps");
let computerPaper = document.getElementByClass("imagepaper--cpaper");
let computerScissors = document.getElementById("imagescissors--cscissors");
let computerRocks = document.getElementById("imagerocks--crocks");

// variable player 

let imagePlayer = [...document.getElementsByClassName("imagerps--computer")];
let playerRps = document.getElementByClass("imagerps--crps");
let playerPaper = document.getElementByClass("imagepaper--cpaper");
let playerScissors = document.getElementByClass("imagescissors--cscissors");
let playerRocks = document.getElementByClass("imagerocks--crocks");




// play game

const playGame = (e) => {
    let choice = e.target.closest(".btn--player");

    btnPlayer.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click", playGame);
    });
};



btnPlayer.forEach((btn) => btn.addEventListener("click", playGame));