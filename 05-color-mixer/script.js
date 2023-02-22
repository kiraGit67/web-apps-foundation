const body = document.querySelector("body");

const colorDisplay = document.querySelector(".color-display");

const sliders = document.querySelectorAll("input[type='range']");
console.log(sliders);

const sliderRed = document.querySelector("input[name='red']");
console.log(sliderRed.value);

const sliderGreen = document.querySelector("input[name='green']");
console.log(sliderGreen.value);

const sliderBlue = document.querySelector("input[name='blue']");
console.log(sliderBlue.value);

function updateColorValue() {
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
}

sliderRed.addEventListener("input", updateColorValue);
sliderGreen.addEventListener("input", updateColorValue);
sliderBlue.addEventListener("input", updateColorValue);
