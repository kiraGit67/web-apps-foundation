// Variables for input and button
const input = document.querySelector("input");
const button = document.querySelector("button");

// function for toggling input type and button text
button.addEventListener("click", function () {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    button.innerText = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    button.innerText = "Show Password";
  }
});
