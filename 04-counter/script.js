"use strict";

//Variables for counter-paragraph and counter number
let counterNumber = 0;
let counterSteps = 0;

const mainArea = document.querySelector("main");
const backgroundArea = document.querySelector(".background");
const counterContainer = document.querySelector(".counter");
const resetButton = document.querySelector("button");

counterContainer.innerHTML = counterNumber;
backgroundArea.style.width = counterSteps + "%";

function backgroundCounter() {
  counterNumber++;
  counterContainer.innerHTML = counterNumber;
  /*
  if (counterSteps < 100) {
    counterSteps++;
  } else {
    counterSteps = 1;
  }
  */
  counterSteps = counterSteps < 100 ? counterSteps + 1 : 1;

  backgroundArea.style.width = counterSteps + "%";
}

// Add EventListener to the variables
mainArea.addEventListener("click", function () {
  backgroundCounter();
});

document.addEventListener("keydown", (evt) => {
  const keyName = evt.key;

  if (keyName === "Enter" || evt.key === " ") {
    backgroundCounter();
  }
});

resetButton.addEventListener("click", function () {
  counterNumber = 0;
  counterSteps = 0;

  console.log("CounterNumber has been resetted.");
  console.log(counterNumber);

  counterContainer.innerHTML = counterNumber;
  backgroundArea.style.width = counterSteps + "%";
});
