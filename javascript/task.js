const arr = [47, 5, 78, 16, 74, 95, 55, 105];

let largeNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largeNumber) {
    largeNumber = arr[i];
  }
}

console.log(largeNumber);
