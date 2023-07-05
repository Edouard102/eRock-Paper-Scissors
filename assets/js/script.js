
let resetBtn = document.getElementById("reset");
let scorePlayer = document.getElementById("pscores");
let scoreComputer = document.getElementById("cscores");
let btnPlayer = [...document.getElementsByClassName("btn--player")];
let oPapperBtn = document.getElementById("btn--bpapper");
let oScissorsBtn = document.getElementById("btn--bscissors");
let oRocksBtn = document.getElementById("btn--bbrocks");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

const playGame = (e) => {
    let choice = e.target.closest(".btn--player");

};

btnPlayer.forEach((btn) => btn.addEventListener("click", playGame));