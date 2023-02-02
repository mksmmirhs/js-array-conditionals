function fibinocci(num) {
  const feb_initial = [0, 1];
  for (let i = 2; i < num; i++) {
    feb_initial[i] = feb_initial[i - 1] + feb_initial[i - 2];
  }
  return feb_initial;
}
console.log(fibinocci(3));
