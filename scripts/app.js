let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const error = document.getElementById("error");
const formControl = document.getElementById("formControl");
const gameAreaElement = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name") ;

const editPlayer1btn = document.getElementById("editPlayer1btn");
const editPlayer2btn = document.getElementById("editPlayer2btn");
const startNewGameBtn = document.getElementById("start-game-btn");
const overlayCancelBtn = document.getElementById("overlayCancelBtn");
const gameFieldElements = document.querySelectorAll("#game-board li");
// console.log(gameFieldElements) ;

editPlayer1btn.addEventListener("click", openPlayerConfig);
editPlayer2btn.addEventListener("click", openPlayerConfig);

overlayCancelBtn.addEventListener("click", closeOverlay);
backdrop.addEventListener("click", closeOverlay);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener("click",selectGameField) ;
}