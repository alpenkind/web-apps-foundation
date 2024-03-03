//Defining Variables

const main = document.querySelector("main");
const title = document.querySelector("title");
const button = document.querySelector("button");
//let newTitle = " ";

//Function which is triggerd by the click-event for button changes.
function clickButton() {
  button.classList.toggle("button-darkmode");
}
// Function which is triggerd by the click-event for changes on main tag.
function changeBackground() {
  main.classList.toggle("main-darkmode");
}

//Function for changing title caused by the click-event.
function changeTitle() {
  //if conditon to set 2 cases for the title
  if (title.innerText === "Good Night!") {
    title.innerText = "Good Morning!";
  } else {
    title.innerText = "Good Night!";
  }
}

//Event Listeners
button.addEventListener("click", changeTitle);
button.addEventListener("click", clickButton);
button.addEventListener("click", changeBackground);
