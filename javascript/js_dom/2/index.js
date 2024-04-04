let link = document.getElementsByTagName("a")[0]
link.innerHTML = "Hello! That is Js link.";

// Adding style at js
link.style.textDecoration = "none";
// link.style.fontFamily = "open sans"
link.style.fontSize = "25px"
link.style.marginLeft = "10px"


// Creating html element
let heading = document.createElement("h1");
let text = document.createTextNode("This is heading for js");
heading.appendChild(text);

let myDiv = document.querySelector(".my-div");
myDiv.appendChild(heading)


// find and remove child tag
let heading1 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading1)