"use strict";

// input password field
const inputElement = document.querySelector("input");

// toggle button element
const toggleButtonElement = document.querySelector("button");

// Variables for button text
const textHide = "Hide Password";
const textShow = "Show Password";

// Variable for current input type
const currentInputType = inputElement.type;

// Summarizes Code within a function
function setButtonText() {
  if (inputElement.type === "password") {
    toggleButtonElement.textContent = textShow;
  } else {
    toggleButtonElement.textContent = textHide;
  }
}

setButtonText();

// function for toggling input type and button text
toggleButtonElement.addEventListener("click", function () {
  if (inputElement.type === "password") {
    inputElement.type = "text";
  } else {
    inputElement.type = "password";
  }
  setButtonText();
});
