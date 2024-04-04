let squre = (x) => {
  console.log(`squire is ${x}: ${x * x}`);
};
squre(7);

let callB = (y, callback) => {
  callback(y);
};

callB(12, squre);
