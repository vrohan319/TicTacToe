function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOverElement.firstElementChild.innerHTML =
    "<h2>You won, <span id='winner-name'>PlayerName</span> !</h2>";
  gameOverElement.style.display = "none";
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameFieldElements[gameBoardIndex].textContent = "";
      gameFieldElements[gameBoardIndex].classList.remove("disable");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter valid player name for both the players!!");
    return;
  }
  resetGameStatus();
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
  if (isGameOver) return;
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field !!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disable");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  //   console.log(gameData);

  const winnerId = checkForGameOver();
  if (winnerId != 0) {
    gameOver(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if (currentRound == 9) return -1;
  return 0;
}

function gameOver(winnerId) {
  isGameOver = true;
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    document.getElementById("winner-name").textContent = winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw !!";
  }
}
