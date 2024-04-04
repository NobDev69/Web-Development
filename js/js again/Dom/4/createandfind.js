// Create html Element...
let head2 = document.createElement('h2');
let text = document.createTextNode('This is Inner heading 2');
head2.appendChild(text);

let findSome = document.querySelector('.my-div');
findSome.appendChild(head2);

let p = document.getElementsByTagName('p')[0];
findSome.removeChild(p);
