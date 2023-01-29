// problem 1
var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits[bananaIndex] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);
