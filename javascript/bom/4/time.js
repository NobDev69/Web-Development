const timeOut = document.getElementById('demo1');
const timeInterval = document.getElementById('demo2');

let timeO, timeI;

function settimeout() {
  timeO = setTimeout(function () {
    timeOut.innerHTML = 'Time is out!...';
  }, 2000);
}

function closetimeout() {
  clearTimeout(timeO);
}

function settimeinterval() {
  timeI = setInterval(() => {
    timeInterval.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function closetimeinterval() {
  clearInterval(timeI);
}
