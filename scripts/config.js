function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closeOverlay() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault(); 
  const formData = new FormData(event.target) ;
  const enteredPlayerName = formData.get("playerName") ;
  console.log(enteredPlayerName) ;
}
