let prmise = new Promise((resolve, reject) => {
  let afterPromise = true;
  if (afterPromise) {
    resolve('completed promise');
  } else reject('Reject Promise');
});

prmise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
