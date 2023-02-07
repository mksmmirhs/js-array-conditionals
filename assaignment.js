//Problem 1
// function checks if the input type is number and positive number
// If the input is valid it gets multiply by 3 then add 10 then divides the result by 2 after that result gets subtracted by 5
function mindGame(inputNumber) {
  if (typeof inputNumber !== 'number' || inputNumber < 0) {
    return 'Please type a valid positive number';
  } else {
    let result = (inputNumber * 3 + 10) / 2 - 5;
    return result;
  }
}
// Problem 2
// this function takes a input string and checks its length if it a valid string. It checks the length of string input and returns Even or Odd as string according to the length.
function evenOdd(inputString) {
  if (typeof inputString !== 'string') {
    return 'please enter a valid string';
  } else {
    const lengthOfInput = inputString.length;
    if (lengthOfInput % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
}
// problem 3
// checks if the input is a valid number
//gets difference of input and 7
// checks if the difference is less than 7 or not and returns the result according to the condition.
function isLGSeven(inputNumber) {
  if (typeof inputNumber !== 'number') {
    return 'please enter a valid Number';
  } else {
    const difference = inputNumber - 7;
    if (difference < 7) {
      return inputNumber - 7;
    } else {
      return inputNumber * 2;
    }
  }
}
//problem 4
// this function takes an array as input check if it is array or not. if the input is array it loops through each element of the array and checks if the number is a negative number.
// finally it returns the total sum of negative elements of the array.
function findingBadData(inputArray) {
  let badData = 0;
  if (Array.isArray(inputArray) === false) {
    return 'Please provide a valid array input';
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] < 0) {
        badData += 1;
      }
    }
  }
  return badData;
}
// Problem 5
// checks if three valid number input present or not
//calculates the gem to diamond conversion and return the remaining gem according to the condition.
function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
  if (
    typeof firstFriendGem !== 'number' ||
    typeof secondFriendGem !== 'number' ||
    typeof thirdFriendGem !== 'number'
  ) {
    return 'please enter Three valid number input for each friend';
  } else {
    const firstFriendDiamond = firstFriendGem * 21;
    const secondFriendDiamond = secondFriendGem * 32;
    const thirdFriendDiamond = thirdFriendGem * 43;
    const totalDiamond =
      firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (totalDiamond > 1000 * 2) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}
