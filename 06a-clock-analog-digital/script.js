"use strict";

//Variables for all pointers
const pointerHour = document.querySelector(".pointer--hour");
const pointerMinute = document.querySelector(".pointer--minute");
const pointerSecond = document.querySelector(".pointer--second");
const clock = document.querySelector(".clock");
const digitalClock = document.querySelector(".digital-clock");

//Variable for time
let now = new Date();
console.log(now);
// for hours, minutes, seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

//Interval
setInterval(() => {
  //Variable for time
  now = new Date();
  console.log(now);

  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  console.log({ hours, minutes, seconds });

  //Variable for angles
  const hoursDeg = (360 / 12) * hours;
  const minutesDeg = (360 / 60) * minutes;
  const secondsDeg = (360 / 60) * seconds;

  clock.style.setProperty("--hour", hoursDeg + "deg");
  clock.style.setProperty("--minute", minutesDeg + "deg");
  clock.style.setProperty("--second", secondsDeg + "deg");

  updateDigitalClock();
}, 1000);

function updateDigitalClock() {
  const delimiter = seconds % 2 === 0 ? ":" : " ";
  const formattedTime = now.toLocaleTimeString("de-DE");

  console.log(formattedTime);

  digitalClock.innerText = formattedTime.replaceAll(":", delimiter);
}
