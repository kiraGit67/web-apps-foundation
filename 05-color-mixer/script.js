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

function rgb2hex(array) {
  let hexArray = [];

  for (let item of array) {
    let hexItem = parseInt(item).toString(16);
    if (hexItem.length === 1) {
      hexArray.push("0" + hexItem);
    } else {
      hexArray.push(hexItem);
    }
  }
  let hexString = "#" + hexArray.join("");
  return hexString;
}

function updateColorValue() {
  const rgbArray = [sliderRed.value, sliderGreen.value, sliderBlue.value];

  colorDisplay.innerText = rgb2hex(rgbArray);
  body.style.backgroundColor = rgb2hex(rgbArray);
}

sliderRed.addEventListener("input", updateColorValue);
sliderGreen.addEventListener("input", updateColorValue);
sliderBlue.addEventListener("input", updateColorValue);
