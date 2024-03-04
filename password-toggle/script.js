//Variables
const btn = document.querySelector("button");
const input = document.querySelector("input");

//function which is triggerd by the click Event on the button
function clickButton() {
  if (input.type === "text") {
    input.setAttribute("type", "password");
    btn.textContent = "show password";
  } else {
    input.setAttribute("type", "text");
    btn.textContent = "hide password";
  }
}

//EventListener
btn.addEventListener("click", clickButton);
