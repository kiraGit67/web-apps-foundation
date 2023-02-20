const body = document.querySelector("body");

const colorDisplay = document.querySelector(".color-display");

const sliders = document.querySelectorAll("input[type='range']");
console.log(sliders);

const sliderRed = document.querySelector("input[type='range'].red");
console.log(sliderRed.value);

const sliderGreen = document.querySelector("input[type='range'].green");
console.log(sliderGreen.value);

const sliderBlue = document.querySelector("input[type='range'].blue");
console.log(sliderBlue.value);

colorDisplay.innerText =
  "rgb(" +
  sliderRed.value +
  ", " +
  sliderGreen.value +
  ", " +
  sliderBlue.value +
  ")";
console.log(colorDisplay.innerText);

body.style.backgroundColor =
  "rgb(" +
  sliderRed.value +
  ", " +
  sliderGreen.value +
  ", " +
  sliderBlue.value +
  ")";

console.log(body.style.backgroundColor);
