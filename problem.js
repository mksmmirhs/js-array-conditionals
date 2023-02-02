// problem 1
var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits[bananaIndex] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

// problem 2
var moneyGiven = 1000;
var totalCost = 700;
var returnAmount = moneyGiven - totalCost;
console.log(returnAmount);

// problem 3
num1 = 113;
num2 = 54;
num3 = 114;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

let loopControl = 0;
while (loopControl <= 100) {
  console.log("আসকে আমার মন ভালো নেই");
  loopControl++;
}
for (var a = 1; a < 7; a++) {
  console.log(a);
}
function myFunc(...a) {
  console.log(a);
}
myFunc(13, 3, 7);
