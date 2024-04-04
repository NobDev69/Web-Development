// Normal Declaration

function saySomthing(name) {
  console.log(name);
}

saySomthing('I am shabbir');

// Function return

function addNum(a, b) {
  return a + b;
}

console.log(addNum(8, 8));

// Function Exprention

let saySomething1 = function (a, b) {
  console.log(a + b);
};

saySomething1(5, 6);

//Arrow function

let saySomething2 = () => {
  console.log('Hello World!');
};

saySomething2();

let saySomething3 = (name1) => {
  console.log(`Hello ${name1}`);
};

saySomething3(' afran!');
