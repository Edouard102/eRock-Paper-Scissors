
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
let btnPaper = document.getElementById("bpaper");
let btnScissors = document.getElementById("bscissors");
let btnRocks = document.getElementById("bocks");

// variable  computer
let imageComputer = [...document.getElementsByClassName("imagerps--computer")];
let imageComputerRps = document.getElementById("image-crps");
let imageComputerPaper = document.getElementById("image-cpaper");
let imageComputerScissors = document.getElementById("image-cscissors");
let imageComputerRocks = document.getElementById("image-crocks");

// variable player 

let imagePlayer = [...document.getElementsByClassName("imagerps--player")];
let imagePlayerRps = document.getElementById("image-prps");
let imagePlayerPaper = document.getElementById("image-ppaper");
let imagePlayerScissors = document.getElementById("image-pscissors");
let imagePlayerRocks = document.getElementById("image-procks");



// play game

function playRound(e) {

    // player game buttom (player choice)
    let choice = e.target.closest(".btn--player");

    btnPlayer.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click", playRound);
    });

    // image choice
    let choiceImagePlayer = null;

    if (e.target === btnPaper) {
        choiceImagePlayer = imagePlayerPaper;
    } else if (e.target === btnScissors) {
        choiceImagePlayer = imagePlayerScissors;
    } else if (e.target === btnRocks) {
        choiceImagePlayer = imagePlayerRocks;
    }
    if (choiceImagePlayer) {
        choiceImagePlayer.style.opacity = 1;
    }


    let playerChoice = choice.id;

    let computerChoice = makeComputerChoice();

    checkWinner(playerChoice, computerChoice);

    nextBtn.style.visibility = "visible";
}

// Computer choice

const paper = "paper";
const scissors = "scissors";
const rocks = "rocks";

function makeComputerChoice() {
    // 0 = Paper
    // 1 = Scissors
    // 2 = Rocks
    let nbRandom = Math.floor(Math.random() * 3);

    // choice image
    switch (nbRandom) {
        case 0:
            imageComputerPaper.classList.add("active");
            return paper;
        case 1:
            imageComputerScissors.classList.add("active");
            return scissors;
        default:
            imageComputerRocks.classList.add("active");
            return rocks;

    }
}
// check winner 

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        message.textContent = "Tie !";
        return;
    }

    if (playerChoice == "rocks") {
        if (computerChoice == "paper") {
            return victoryComputer();
        } else if (computerChoice == scissors) {
            return victoryPlayer();
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            return victoryComputer();
        } else if (computerChoice == "rocks") {
            return victoryPlayer();
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rocks") {
            return victoryComputer();
        } else if (computerChoice == "paper") {
            return victoryPlayer();
        }
    }
}

//  update score

function victoryComputer() {
    message.textContent = "The computer wins...";
    scoreComputer.textContent++;
}

function victoryPlayer() {
    message.textContent = "You win ! :)";
    scorePlayer.textContent++;
}
//  new round

function newRound() {
    btnPlayer.forEach((btn) => {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");

        btn.addEventListener("click", playRound);
    });

    nextBtn.style.visibility = "hidden";

    imageComputerPaper.classList.remove("active");
    imageComputerScissors.classList.remove.remove("active");
    imageComputerRocks.classList.remove.remove("active");

    message.textContent = "Your turn to play!";

    nextBtn.addEventListener("click", newRound);

    btnPlayer.forEach((btn) => btn.addEventListener("click", playRound));
    // restart game
}

