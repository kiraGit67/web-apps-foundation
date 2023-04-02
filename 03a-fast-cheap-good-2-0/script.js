"use strict";

const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");

const formElement = document.querySelector("form");

const history = [];

formElement.addEventListener("change", (e) => {
  history.push(e.target);

  if (fast.checked && cheap.checked && good.checked) {
    const toUncheck = history[history.length - 2];
    console.log(toUncheck);
    toUncheck.checked = false;
  }

  if (history.length > 2) {
    history.shift();
  }
});
