//তোমাকে একটা function দেওয়া হবে called “mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।

//Problem 1
// function checks if the input type is number and positive number
// If the input is valid it gets multiply by 3 then add 10 then divides the result by 2 after that result gets subtracted by 5

function mindGame(inputNumber) {
  if (typeof inputNumber !== "number") {
    console.log("Please type a valid number");
  } else {
    let result = (inputNumber * 3 + 10) / 2 - 5;
    return result;
  }
}
console.log(mindGame(50));

// Problem 2
// this function takes a input string and checks its length if it a valid string. It checks the length of string input and returns Even or Odd as string according to the length.
function evenOdd(inputString) {
  // checks if the input is a valid string; if not it return error message
  if (typeof inputString !== "string") {
    console.log("please enter a valid string");
  } else {
    const lengthOfInput = inputString.length;
    if (lengthOfInput % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
}
console.log(evenOdd("batch7"));
