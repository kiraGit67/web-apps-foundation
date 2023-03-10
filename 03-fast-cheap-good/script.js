"use strict";

// General Variable for all 3 checkboxes
const checkBoxes = document.querySelectorAll("input");
console.log(checkBoxes);

// Individual Variables for all 3 checkboxes
const checkFast = document.querySelector("#fast");
const checkCheap = document.querySelector("#cheap");
const checkGood = document.querySelector("#good");

let isFast;
let isCheap;
let isGood;

let lastChanged = "";

// Function for checking which of 3 checkboxes are checked
function changed(checkBox) {
  isFast = checkFast.checked;
  isCheap = checkCheap.checked;
  isGood = checkGood.checked;

  if (isGood && isFast && isGood) {
    lastChanged.checked = false;
    lastChanged = checkBox;
  } else {
    lastChanged = checkBox;
  }
  /*  
  if (isFast && isCheap && isGood && checkBox === checkGood) {
    checkCheap.checked = false;
  }
  if (isFast && isGood && isCheap && checkBox === checkCheap) {
    checkFast.checked = false;
  }
  if (isGood && isFast && isCheap && checkBox === checkFast) {
    checkGood.checked = false;
  }
  */
}

checkFast.addEventListener("change", function () {
  changed(checkFast);
});

checkCheap.addEventListener("change", function () {
  changed(checkCheap);
});

checkGood.addEventListener("change", function () {
  changed(checkGood);
});
