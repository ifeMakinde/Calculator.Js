"use strict";
// DEFAULT STATES
let currentNumber = "";
let previousNumber = "";
let defaultSate = "";

//  DOM selection
const inputField = document.getElementById("input");
const buttons = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equalTo = document.getElementById("equal");

// DISPLAYS THE BUTTONS IN THE INOUT FIELD
const display = function (e) {
  const value = e.target.textContent;
  inputField.value += value;
  currentNumber += value;
};
for (const button of buttons) {
  button.addEventListener("click", display);
}

// CLEARING  TTHE INpUTFIELD
clear.addEventListener("click", () => {
  inputField.value = defaultSate;
});

equalTo.addEventListener("click", (e) => {
  // alert(`you pressed the ${e.target.textContent} button`);
  try {
    inputField.value = Number(eval(inputField.value));
  } catch (error) {
    inputField.value = "Error!";
  }
});
