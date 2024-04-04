const confirmed = document.getElementById('confirm');
const promted = document.getElementById('promt');

function alertbtn() {
  alert('Hello world!');
}

function confirmbtn() {
  if (window.confirm('Are you sure...')) {
    confirmed.innerHTML = 'Confirmed!...';
  } else {
    confirmed.innerHTML = 'Cancaled!...';
  }
}

function promtbtn() {
  const person = prompt('Enter Your Name: ', 'shabbir hossan');
  let txt;

  if (person == null || person == '') {
    txt = "Didn't find anything";
  } else {
    txt = 'Your name is ' + person;
  }
  promted.innerHTML = txt;
}
