// scripts.js -- Calculator app with JavaScript
// Get the first number and the second number and calculate the  of first number and
// second number for the result.

// Initially, these are global variables
let firstNbr = 0;
let secondNbr = 0;
let operator = "";
let result = (document.getElementById("result").value = 0);
let step = 0;
let arrayNumber = [];
let arrayNumber2 = [];
let condensedValue = 0;

// this getNumber() function starts when you click on first number and also second number respectively
// getNumber()'s parameter is num
function getNumber(num) {
  // if variable step value is zero then proceed to the statement condition
  if (step === 0) {
    // here we could put it into an array
    // then condense those values into 1
    // then assign the condensed values into firstNbr
    arrayNumber.push(num);
    condensedValue = arrayNumber.join("");
    if (arrayNumber.length > 1) {
      firstNbr = parseInt(condensedValue);
      document.getElementById("result").value = firstNbr;
      // if arrayNumber length is NOT 2 then assign to firstNbr as a digital number
    } else {
      firstNbr = num;
      document.getElementById("result").value = num;
    }
    // if variable step value is two then proceed to the statement condition
  } else if (step === 2) {
    // here we could add it into an array
    // then condense those values into 1
    // then assign the condensed values into secondNbr
    arrayNumber2.push(num);
    condensedValue = arrayNumber2.join("");
    if (arrayNumber2.length > 1) {
      secondNbr = parseInt(condensedValue);
      document.getElementById("result").value = secondNbr;
      // if arrayNumber length is NOT 2 then assign to secondNbr as a digital number
    } else {
      secondNbr = num;
      document.getElementById("result").value = num;
    }
  }
}

// this getOperator() function gets a call when you click on the operator button
function getOperator(exp) {
  // get value from exp parameter ("+", "-", "*" or "/") and assign it to variable operator
  operator = exp;
  step = 2;
  document.getElementById("result").value = exp;
}

// this equal() function starts when you click the equal button to begin the calculation
function equal() {
  if (operator == "+") {
    result = firstNbr + secondNbr;
  } else if (operator == "-") {
    result = firstNbr - secondNbr;
  } else if (operator == "*") {
    result = firstNbr * secondNbr;
  } else if (operator == "/") {
    // if result shows .000 then it removes those zeros
    result = parseFloat((firstNbr / secondNbr).toFixed(3));
  } else {
    result = 0;
  }
  // display final results in the result input field (readonly)
  document.getElementById("result").value = result;
}

// this clearExpression() function starts when you click the Clear button
function clearExpression() {
  // this clear all variables
  firstNbr = 0;
  secondNbr = 0;
  operator = "";
  result = 0;
  step = 0;
  arrayNumber = [];
  arrayNumber2 = [];
  condensedValue = 0;
  document.getElementById("result").value = 0;
}
