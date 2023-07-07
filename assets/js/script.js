
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
let btnRocks = document.getElementById("bbrocks");

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

const playGame = (e) => {

    // player game buttom
    let choice = e.target.closest(".btn--player");

    btnPlayer.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click", playGame);
    });

    let choiceImage = null;

    if (e.target === btnPaper) {
        choiceImage = imagePlayerPaper;
    } else if (e.target === btnScissors) {
        choiceImage = imagePlayerScissors;
    } else if (e.target === btnRocks) {
        choiceImage = imagePlayerRocks;
    }
    if (choiceImage) {
        choiceImage.style.opacity = 1;
    }


    let PlayerChoice = choice.id;

    let computerChoice = makeComputerChoice();

    checkWinner(playerChoice, computerChoice);

    nextBtn.style.visibility = "visible";
};

// Computer choice

const paper = "paper";
const scissors = "scissors";
const rocks = "rocks";

const makeComputerChoice = () => {
    // 0 = Paper
    // 1 = Scissors
    // 2 = Rocks

    let nbAleatoire = Math.floor(Math.random() * 3);

    switch (nbAleatoire) {
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
};
// check winner 

const checkWinner = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        message.textContent = "Equality !";
        return;
    }

    if (playerChoice == rocks) {
        if (computerChoice == paper) {
            return victoryComputer();
        } else if (computerChoice == scissors) {
            return victoryPlayer();
        }
    }

    if (playerChoice == paper) {
        if (computerChoice == scissors) {
            return victoryComputer();
        } else if (computerChoice == rocks) {
            return victoryPlayer();
        }
    }

    if (playerChoice == scissors) {
        if (computerChoice == rocks) {
            return victoryComputer();
        } else if (computerChoice == paper) {
            return victoryPlayer();
        }
    }
};

//  update score

const victoryComputer = () => {
    message.textContent = "The computer wins...";
    scoreComputer.textContent++;
};

const victoryPlayer = () => {
    message.textContent = "You win ! :)";
    scorePlayer.textContent++;
};


btnPlayer.forEach((btn) => btn.addEventListener("click", playGame));