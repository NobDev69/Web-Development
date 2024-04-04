document.title = 'Play with DOM';

// Finding/Selecting HTML Elements...
let idName = document.getElementById('di');
let tagName = document.getElementsByTagName('a')[0];
let className = document.getElementsByClassName('ci')[0];
let quiryName = document.querySelector('.qi');

//Changing HTML Elements...
idName.innerHTML = 'Changed By Js with Id';
tagName.innerHTML = 'Changed By Js with tagname';
className.innerHTML = 'Changed By Js with Class Name';
quiryName.innerHTML = 'Changed By Js with Quiry Classes';
