const names = [
  "abul",
  "babul",
  "kabul",
  "cabul",
  "abul",
  "babul",
  "kabul",
  "jabul",
];

function duplicate(names) {
  uniqueName = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (uniqueName.includes(name) === false) {
      uniqueName.push(name);
    }
  }
  return uniqueName;
}

console.log(duplicate(names));
