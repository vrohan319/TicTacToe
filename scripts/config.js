function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closeOverlay() {
  formControl.classList.remove("error");
  error.textContent = "";
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();
  //   console.log(enteredPlayerName) ;
  if (!enteredPlayerName) {
    formControl.classList.add("error");
    error.textContent = "Please enter a valid value";
    return ;
  }
}
