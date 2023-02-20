// input password field
const inputElement = document.querySelector("input");

// toggle button element
const toggleButtonElement = document.querySelector("button");

// Variables for button text
const textHide = "Hide Password";
const textShow = "Show Password";

if (inputElement.type === "password") {
  toggleButtonElement.innerText = textShow;
} else {
  toggleButtonElement.innerText = textHide;
}

// function for toggling input type and button text
toggleButtonElement.addEventListener("click", function () {
  if (inputElement.type === "password") {
    //inputElement.setAttribute("type", "text");
    inputElement.type = "text";
    toggleButtonElement.innerText = textHide;
  } else {
    //inputElement.setAttribute("type", "password");
    inputElement.type = "password";
    toggleButtonElement.innerText = textShow;
  }
});
