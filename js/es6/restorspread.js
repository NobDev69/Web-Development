//that is rest parameter

const num = [1, 5, 6, 8, 7];
const num2 = [85, 68, ...num];
console.log(num2);

//This is Spread perameter
('use strict');
const num1 = [1, 3, 5, 7];
const num3 = [55, 65, 85, 95];
const numbers = [...num1, ...num3];
console.log(numbers);

const number2 = [52, 68, 98];
function addnumbers(a, b, c) {
  return `${a} + ${b} + ${c} = ${a + b + c}`;
}
console.log(addnumbers(...number2));
