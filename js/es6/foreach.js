let num1 = [10, 55, 45, 26, 31, 13, 46];
let numbers = [];
num1.forEach(function (x) {
  numbers.push(x + x);
});
console.log(numbers);

numbers.forEach(function (x, index, arr) {
  return (arr[index] = x + 5);
});
console.log(numbers);
