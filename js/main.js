/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;



isInteger = false;


  while(!isInteger) {
  maxNumber = prompt("Enter an integer above 0");
  maxNumber = parseFloat(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
    isInteger = true;
  } else if (isNaN(maxNumber)) {
      alert(`Not a valid entry, please enter an integer above 0`);
  } else if (maxNumber < 0) {
      alert(`${maxNumber} is not above 0, enter an integer above 0`);
  } else if (!Number.isSafeInteger(maxNumber)) {
      alert(`${maxNumber} is a fraction, please enter an integer above 0`);
  }
}

fbResults = [];

for (let i = 1; i <= maxNumber; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    fbResults.push('FizzBuzz');
  } else if (i % 3 == 0) {
    fbResults.push('Fizz');
  } else if (i % 5 == 0) {
    fbResults.push('Buzz');
  } else {
    fbResults.push(i);
  }
}

fbText = '';

for (let result of fbResults) {
  fbText = fbText + result + "\n";
}








///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
