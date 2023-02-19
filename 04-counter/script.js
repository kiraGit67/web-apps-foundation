//Variables for counter-paragraph and counter number
let counterNumber = 0;
let counterSteps = 0;

const mainArea = document.querySelector("main");
const backgroundArea = document.querySelector(".background");
const counterContainer = document.querySelector(".counter");
const resetButton = document.querySelector("button");

counterContainer.innerHTML = counterNumber;
backgroundArea.style.width = counterNumber + "%";

// Add EventListener to the variables
mainArea.addEventListener("click", function () {
  counterNumber++;
  console.log("Main has been clicked.");
  console.log(counterNumber);

  counterContainer.innerHTML = counterNumber;
  backgroundArea.style.width = counterNumber + "%";
});

resetButton.addEventListener("click", function () {
  counterNumber = 0;
  console.log("CounterNumber has been resetted.");
  console.log(counterNumber);

  counterContainer.innerHTML = counterNumber;
  backgroundArea.style.width = counterNumber + "%";
});
