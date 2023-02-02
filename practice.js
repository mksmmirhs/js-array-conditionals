// leap year
function leapYear(year) {
  if (year % 4 === 0) {
    return "Leap Year";
  } else {
    return "NOT leap year";
  }
}

console.log(leapYear(2020));

//  find odd sum
function findOddSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const array = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(array));

// find factorial

function findFactorial(num) {
  let factorial = 1;
  if (num === 0) {
    return 1;
  } else {
    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }
}
console.log(findFactorial(8));
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
