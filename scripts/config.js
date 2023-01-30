function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //adding + sign in front changes string to integer
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closeOverlay() {
  formControl.classList.remove("error");
  error.textContent = "";
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  document.getElementById("playerName").value = "" ;
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();
  //   console.log(enteredPlayerName) ;
  if (!enteredPlayerName) {
    formControl.classList.add("error");
    error.textContent = "Please enter a valid value";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName ;

  players[editedPlayer-1].name = enteredPlayerName ;
  closeOverlay() ;
}
