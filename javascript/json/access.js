// const data = require('./index.json');
// console.log(data.Student_Data[0].friends[1].name);
// data.Student_Data[0].friends[1].name = 'Anis';
// console.log(data.Student_Data[0].friends[1].name);
// delete data.Student_Data[0].friends[1].name;
// console.log(data.Student_Data[0].friends[1]);

// for (x in data) {
//   console.log(data[x]);
// }

const data2 = {
  name: 'sabbir',
  age: 18,
};
console.log(JSON.stringify(data2));

console.log(JSON.parse('{"name":"arif"}'));
