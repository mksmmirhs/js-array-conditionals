const totalCost = (products) => {
  let costTotal = 0;
  for (i = 0; i < products.length; i++) {
    costTotal += products[i].price;
  }
  return costTotal;
};

console.log(
  totalCost([
    { name: "Samsung M33", price: 10000 },
    { name: "Samsung Charger", price: 500 },
    { name: "Haveit Speakers", price: 2500 },
  ])
);
