// // Array Distructure

// let numbers = [4, 6, 7, 9, 25, 15, 35];
// let [num1, num2, num3, num4, ...nums] = numbers;

// console.log(numbers[0]);
// console.log(numbers[1]);

// //distructuring
// console.log(num4);
// console.log(nums);

// //swap variable...
// let a = 5,
//   b = 10;
// [a, b] = [b, a]; //swaping
// console.log(a);
// console.log(b);

const studentInfo = {
  id: 101,
  fullName: 'Shabbir Hossan',
  age: 21,
  clg: 'dpc',
  Language: {
    native: 'Banla',
    expert: 'English',
  },
};

// const { id, fullName, age, clg, Language } = studentInfo; //object Distucture

// console.log(id);
// console.log(fullName);
// console.log(age);
// console.log(clg);
// console.log(Language);
// console.log(Language.native);
// console.log(Language.expert);

//distructure function

const student = ({ id, fullName, age, Language }) => {
  console.log(`${id} : ${fullName} | ${age} => ${Language.native}`);
};

student(studentInfo);
