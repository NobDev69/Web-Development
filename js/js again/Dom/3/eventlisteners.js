let btns = document.querySelector('.btn');
let tag = document.querySelector('p');

btns.addEventListener('click', myFun);

function myFun() {
  tag.innerHTML = 'Hello! How are you?';
}

btns.addEventListener('mouseover', add);

function add() {
  console.log('Mouse hovered');
}
