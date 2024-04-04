//Select Dom Element
let funWin;

const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerHTML = "Windows Inner width is: " + window.innerWidth;
height.innerHTML = "Windows Inner Height is: " + window.innerHeight;

function openWindow() {
    funWin = window.open(
    "https:www.google.com"
  );
}

function closeWindow() {
    funWin.close();//didn't work
}
