
//App global variables

// variable score area
let resetBtn = document.getElementById("reset");
let scorePlayer = document.getElementById("pscores");
let scoreComputer = document.getElementById("cscores");

// variable control

let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

//  variable buttom player 

let btnPlayer = [...document.getElementsByClassName("btn")];
let btnPaper = document.getElementById("bpaper");
let btnScissors = document.getElementById("bscissors");
let btnRocks = document.getElementById("brocks");

// variable images 

let imageCommon = [...document.getElementsByClassName("image-common")];

// variable  computer images

let imageComputer = [...document.getElementsByClassName("imagerps--computer")];
let imageComputerRps = document.getElementById("image-crps");
let imageComputerPaper = document.getElementById("image-cpaper");
let imageComputerScissors = document.getElementById("image-cscissors");
let imageComputerRocks = document.getElementById("image-crocks");

// variable player images

let imagePlayer = [...document.getElementsByClassName("imagerps--player")];
let imagePlayerRps = document.getElementById("image-prps");
let imagePlayerPaper = document.getElementById("image-ppaper");
let imagePlayerScissors = document.getElementById("image-pscissors");
let imagePlayerRocks = document.getElementById("image-procks");



// play game

function playRound(e) {

    // player game buttom (player choice)
    let choice = e.target.closest(".btn");

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

    imagePlayerRps.style.opacity = 0;

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
            imageComputerPaper.style.opacity = 1;
            return paper;
        case 1:
            imageComputerScissors.style.opacity = 1;
            return scissors;
        default:

            imageComputerRocks.style.opacity = 1;
            return rocks;
    }

}
// check winner 

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        message.textContent = "Tie!";
        return;
    }

    if (
        (playerChoice === "rocks" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rocks") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        victoryPlayer();
    } else {
        victoryComputer();
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
    btnPlayer.forEach(function (btn) {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");

        btn.addEventListener("click", playRound);
    });

    nextBtn.style.visibility = "hidden";

    imagePlayer.forEach(function (image) {
        image.style.opacity = 0;
    });

    imageComputer.forEach(function (image) {
        image.style.opacity = 0;
    });

    imagePlayerRps.style.opacity = 1;

    imageComputerRps.style.opacity = 1;

    message.textContent = "Your turn to play!";

    nextBtn.addEventListener("click", newRound);
}

// next round (new round)

nextBtn.addEventListener("click", newRound);

// play round 

btnPlayer.forEach((btn) => btn.addEventListener("click", playRound));

// restart game

resetBtn.addEventListener("click", () => {
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;

    playRound();
});