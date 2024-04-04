// // let names = ["Shabbir", "araf", "rahim", "karim", "Jogon"];

// // for (let x = 0; x < 5; x++) {
// //     console.log(names[x])
// }

// task 9

function highstScorer(newPersony) {
  for (var x = 0; x < 5; x++) {
    var highstRunScorer = newPerson[0][0];
    var highstRunScorer = newPerson[0][1];

    for (var x = 1; x < newPerson.length; x++) {
      if (highstRunScorer < newPerson[x][1]) {
        highstRunScorer = newPerson[x][1];
        highstRunScorer = newPerson[x][0];
      }
    }
  }

  return highstRunScorer;
}

var newPerson = [
  ['shabbir', 22],
  ['araf', 221],
  ['zayan', 25],
  ['arefin', 49],
];
let y = highstScorer(newPerson);
console.log(y);
