function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
      alert("Please enter valid player name for both the players!!");
      return;
    }
  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disable");
  switchPlayer();
}
