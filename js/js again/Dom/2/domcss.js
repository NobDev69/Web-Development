document.title = 'Play with DOM || DOM HTML & CSS';

//selecting Element...
let heading = document.querySelector('.head');
let perag = document.querySelector('.pera');

//Changing element...
function change() {
  heading.style.color = 'Black';
  heading.style.fontSize = '2rem';
  heading.style.borderRadius = '5px';
  heading.style.textTransform = 'Uppercase';
  heading.style.backgroundColor = 'salmon';
  heading.style.paddingTop = '15px';
  heading.style.paddingBottom = '15px';
  heading.style.textAlign = 'Center';

  perag.style.backgroundColor = 'tomato';
  perag.style.color = '';
  perag.style.fontSize = '18px';
  perag.style.borderRadius = '5px';
  perag.style.padding = '20px';
}

let sub = document.getElementById('submit');
sub.style.border = 'none';
sub.style.padding = '15px';
sub.style.fontSize = '1.5rem';
sub.style.borderRadius = '5px';
sub.style.background = 'skyblue';
