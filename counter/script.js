//Variables
let count = 0;
const main = document.querySelector("main");
const btn = document.querySelector("button");
//const countElement = document.querySelector("span");

//Function which makes count possible
function changeCount(event) {
  if (event.type !== "click" && event.key !== " " && event.key !== "Enter") {
    return;
  }
  count++;
  renderCount();
  main.style.setProperty("--width", count);
}
//Function to define on which tag the count happens
function renderCount() {
  const countElement = document.querySelector("span");
  countElement.innerText = count;
}
//Function to reset the count
function resetCount() {
  count = 0;
  renderCount();
  main.style.setProperty("--width", 0);
}

//Event Listener
main.addEventListener("click", changeCount);
document.addEventListener("keypress", changeCount);
btn.addEventListener("click", resetCount);
