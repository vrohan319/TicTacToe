const overlayCancelBtn = document.getElementById("overlayCancelBtn");
const formElement = document.querySelector("form");
const error = document.getElementById("error");
const formControl = document.getElementById("formControl");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const editPlayer1btn = document.getElementById("editPlayer1btn");
const editPlayer2btn = document.getElementById("editPlayer2btn");

editPlayer1btn.addEventListener("click", openPlayerConfig);
editPlayer2btn.addEventListener("click", openPlayerConfig);

overlayCancelBtn.addEventListener("click", closeOverlay);
backdrop.addEventListener("click", closeOverlay);

formElement.addEventListener("submit", savePlayerConfig);
