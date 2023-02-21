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

const colorRGBvalue =
  "rgb(" +
  sliderRed.value +
  ", " +
  sliderGreen.value +
  ", " +
  sliderBlue.value +
  ")";

// Turn step by step into hex value
const rgbString = colorRGBvalue.split("(")[1].split(")")[0];
const rgbArray = rgbString.split(",");

let hexArray = [];

for (let rgbItem of rgbArray) {
  let hexItem = parseInt(rgbItem).toString(16);
  if (hexItem.length === 1) {
    hexArray.push("0" + hexItem);
  } else {
    hexArray.push(hexItem);
  }
}

let hexString = "#" + hexArray.join("");

colorDisplay.innerText = hexString;

body.style.backgroundColor = hexString;
