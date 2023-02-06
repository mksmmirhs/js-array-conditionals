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
