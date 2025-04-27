"use strict";
// DEFAULT STATES
let currentNumber = "";
let previousNumber = "";
let defaultSate = "";

//  DOM selection
let inputField = document.getElementById("input");
let buttons = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equalTo = document.getElementById("equal");

// DISPLAYS THE BUTTONS IN THE INOUT FIELD
const display = function (e) {
  const value = e.target.textContent;
  inputField.value += value;
  currentNumber += value;

  if (currentNumber === operators.e.target.textContent) {
    previousNumber = currentNumber.slice(0, -1);

    console.log(previousNumber);
  }
};
for (const button of buttons) {
  button.addEventListener("click", display);
}
// buttons.forEach((buttons = () => addEventListener("click", display)));

// CLEARING  TTHE INpUTFIELD
clear.addEventListener("click", () => {
  inputField.value = defaultSate;
});

// STORING THE DIGIT
// for (const digit of buttons) {
//   digit.addEventListener("click", (e) => {
//     currentNumber += e.target.textContent;

//     for (const operator of operators) {
//       if (currentNumber.slice(-1) === operator.textContent) {
//         previousNumber = currentNumber;
//       }
//       console.log(previousNumber);
//     }

//     // console.log(currentNumber);
//     // console.log(currentNumber.slice(-1));
//   });
// }
