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
console.log(mindGame(33));

// Problem 2
// this function takes a input string and checks its length if it a valid string. It checks the length of string input and returns Even or Odd as string according to the length.
function evenOdd(inputString) {
  // checks if the input is a valid string; if not it return error message
  if (typeof inputString !== "string") {
    console.log("please enter a valid string");
  } else {
    const lengthOfInput = inputString.length;
    if (lengthOfInput % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
console.log(evenOdd("batch7"));

// problem 3

function isLGSeven(inputNumber) {
  // checks if the input is a valid number
  if (typeof inputNumber !== "number") {
    console.log("please enter a valid Number");
  } else {
    //gets difference of input and 7
    const difference = inputNumber - 7;
    // checks if the difference is less than 7 or not and returns the result according to the condition.
    if (difference < 7) {
      return inputNumber - 7;
    } else {
      return inputNumber * 2;
    }
  }
}

console.log(isLGSeven(15));

//problem 4
// this function takes an array as input check if it is array or not. if the input is array it loops through each element of the array and checks if the number is a negative number.
// finally it returns the total sum of negative elements of the array.
function findingBadData(inputArray) {
  let badData = 0;
  //checks if input number is an array
  if (Array.isArray(inputArray) === false) {
    console.log("Please provide a valid array input");
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] < 0) {
        badData += 1;
      }
    }
  }
  return badData;
}

console.log(findingBadData([-4, -9, -5, -33, -55]));
