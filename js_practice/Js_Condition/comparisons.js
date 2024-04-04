let x = 5;
let y = '6';
console.log(x == y);
console.log(x === y);
console.log(5 < 8);

// let age = perseInt(prompt('Enter Your age: '))
let age = 18;
if (age >= 18) {
  console.log('You are Adult!');
} else {
  console.log('You are more than Young!');
}

//That is if else condition.
let alfa = 'b';
let z = alfa.toLowerCase();
if (z == 'a' || z == 'e' || z == 'i' || z == 'o' || z == 'u') {
  console.log('That is Vawel');
} else {
  console.log('That is Consonent');
}

//Ternary Oparetor...
console.log(
  age >= 18 ? (age < 30 ? 'You are Adult' : 'you are old!') : 'you are Yound'
);

//Swich oparetor...
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}

console.log('Today is ' + day);
