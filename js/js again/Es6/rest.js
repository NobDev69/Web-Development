function sum(x, y, ...z) {
  console.log(x, y, z);
}

sum(10, 30, 50, 40, 60, 30, 3, 4);

//spread operator...

function adNumbers(x, y, z) {
  return x + y + z;
}

let numbers = [55, 64, 87];

console.log(adNumbers(...numbers));
