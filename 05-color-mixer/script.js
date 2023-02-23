"use strict";

// Variables for Body- colorDisplay-
const body = document.querySelector("body");
const colorDisplay = document.querySelector(".color-display");

// and slider input elements
const sliders = document.querySelectorAll("input[type='range']");
const sliderRed = document.querySelector("input[name='red']");
const sliderGreen = document.querySelector("input[name='green']");
const sliderBlue = document.querySelector("input[name='blue']");

// Function to turn rgbValues to hexValues
function rgb2hex(array) {
  let hexArray = [];

  for (let item of array) {
    let hexItem = parseInt(item).toString(16).padStart(2, "0");
    hexArray.push(hexItem);
  }
  let hexString = "#" + hexArray.join("");
  return hexString;
}

// Function to change the slider inputs' color values
function updateColorValue() {
  const rgbArray = [sliderRed.value, sliderGreen.value, sliderBlue.value];

  colorDisplay.innerText = rgb2hex(rgbArray);
  body.style.backgroundColor = rgb2hex(rgbArray);
}

sliders.forEach((slider) => {
  slider.addEventListener("input", updateColorValue);
});
