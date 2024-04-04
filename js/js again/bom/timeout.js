let time = document.getElementById('demo');

let inetervalTime;
function timeOut() {
  setTimeout(() => {
    time.innerHTML = 'Hello time has been left.';
  }, 2000);
}

function timeInterval() {
  inetervalTime = setInterval(() => {
    const time2 = new Date().toLocaleTimeString();
    time.innerHTML = time2;
  }, 1000);
}

function clearAll() {
  clearInterval(inetervalTime);
}
