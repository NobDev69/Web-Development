// alert('Hi everyone!');
// alert(x);
// alert('bye Everyone!');

try {
  alert('Hi everyone!');

  alert(x);
} catch (err) {
  alert('inside catch block');
  console.log(err);
  console.log(err.name);
  console.log(err.message);
} finally {
  alert('bye Everyone!');
}
