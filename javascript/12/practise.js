let names = ['Shabbir', 'araf', 'arefin']; //array
document.write(names);
console.log(names);

names.unshift('abrar'); //removing
console.log(names);

names.shift();
console.log(names); //adding

names.splice(1, 0, 'karim', 'robin'); // just adding element
console.log(names);

names.splice(2, 1, 'rayan', 'startech'); // adding element and removing
console.log(names);

let names2 = names.slice(2);
console.log(names2); // removing and sliceing

let sorted = names.sort();
let = reversed = names.reverse();
console.log(sorted); //sorted  abc....xyz
console.log(reversed); // reversed sorted zyx....cba

let number = [20, 5, 25, 45, 58, 1, 50];
number.sort(function (a, b) {
  return a - b;
});
console.log(number);

let num = [20, 5, 25, 45, 58, 1, 50];
num.sort(function (a, b) {
  return b - a;
});
console.log(num);
