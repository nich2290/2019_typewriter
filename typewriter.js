"use strict";

let tekst;
let tempText;
let textLength;
let counter;
let currentLetter;
let randomVal = Math.random();

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  // Put teksten ind i en variabel.
  tekst = document.querySelector("#typewriter").textContent;
  console.log(tekst);

  // Skjul text fra HTML
  document.querySelector("#typewriter").textContent = "";

  // nulstil tæller
  counter = 0;

  // Tjek længden af tekst.
  textLength = tekst.length;

  // start loop
  tekstLoop();
}

// - - - - - - - Loop start - - - - - - -

function tekstLoop() {
  console.log("loop");

  // Find tekstindhold fra 0 til tæller.
  tempText = tekst.slice(0, counter);
  console.log(tempText);

  // Vis teksten i div'en.
  document.querySelector("#typewriter").textContent = tempText;

  //   Find næste bogstav
  currentLetter = tempText.slice(-1);
  console.log(currentLetter);

  tekstCounter();
}

function tekstCounter() {
  // counter ++
  counter++;
  console.log(counter);

  let timeOut = Random_numbers(numbers);
  console.log("delay is: " + timeOut);

  // if for text-length
  if (counter <= textLength) {
    // delay
    setTimeout(function() {
      tekstLoop();
    }, timeOut);
  }
}

// Random timeout values
function Random_numbers(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

let numbers = [100, 200, 300, 400, 500];
