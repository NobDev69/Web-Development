const numbers = [2, 3, 4, 5, 6, 46, 16, 82];

let num = numbers.map(function (x) {
  return x + 5;
});
console.log(num);

let newNum = numbers.filter(function (x) {
  return x > 5;
});
console.log(newNum);
