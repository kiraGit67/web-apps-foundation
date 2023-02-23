"use strict";

// function for analog clock
function logTime() {
  // Variables for hours, minutes and seconds
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Variables for hour-, minute- and second Pointer
  const hourPointer = document.querySelector("#hour-pointer");
  const minutePointer = document.querySelector("#minute-pointer");
  const secondPointer = document.querySelector("#second-pointer");
  const analogClock = document.querySelector("#analog-clock");

  // Variables for Rotation of pointers
  const hourRotation = hours * 30 + minutes / 2; //converting current time
  const minRotation = minutes * 6;
  const secRotation = seconds * 6;

  // make pointers rotate
  hourPointer.style.transform = "rotate(" + hourRotation + "deg";
  minutePointer.style.transform = "rotate(" + minRotation + "deg";
  secondPointer.style.transform = "rotate(" + secRotation + "deg";
}

setInterval(logTime, 1000);

/* ***************************************************************************** */

// function for digital clock
function showTime() {
  const digitalClock = document.querySelector(".digital-clock");

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session;

  if (hours === 0) {
    hours = 12;
    session = "AM";
  }

  if (hours <= 12) {
    hours = hours;
    session = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + session;
  digitalClock.innerText = time;
  digitalClock.textContent = time;
}

setInterval(showTime, 1000);
