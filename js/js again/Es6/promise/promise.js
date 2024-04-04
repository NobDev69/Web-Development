// console.log('task 1');

// setTimeout(() => {
//   console.log('task 2');
// }, 2000);

// setTimeout(() => {
//   console.log('task 3');
// }, 1000);

// console.log('task 4');

const prms = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status) {
      resolve('Task 2');
    } else {
      reject('Failed');
    }
  }, 1000);
});

prms
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
