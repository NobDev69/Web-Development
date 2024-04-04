// this is single object
let student = {
  names: 'Shabbir',
  age: 22,
  gpa: 5.0,
  roll: 2248,
};

console.log(student);
console.log(student.names);
console.log(student.gpa);
console.log(student.age);
console.log(student.roll);

// this is function objetct
function Student(names, roll, gpa, age) {
  this.names = names;
  this.roll = roll;
  this.gpa = gpa;
  this.age = age;
}

var student1 = new Student('shabbir', 2248, 4.95, 21);
var student2 = new Student('Arefin', 2258, 3.95, 11);

console.log(student1);
console.log(student2);
console.log(student2.names);
