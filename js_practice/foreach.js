const foods = ['Rice', 'Cutlet', 'Mutton', 'Chocolet'];

// function myFunction(value, index, array) {
//   console.log(`${index}: ${value};`);
//   console.log(array);
//   console.log('==========================================');
// }

function myFunction(value, index) {
  console.log(`${index}: ${value};`);
  // console.log(array);
  console.log('==========================================');
}

foods.forEach(myFunction); //work by for loops

const latter = [45, 64, 75, 5, 46, 18, 5, 88, 9, 10, 16];

const filt = latter.filter(filterFunction);

function filterFunction(value) {
  return value > 18;
}
console.log(filt);
