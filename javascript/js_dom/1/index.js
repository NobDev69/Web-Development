// document.getElementById("head1").innerHTML = "That was call by javascript"
let doc = document.getElementById("head1")

doc.innerHTML = "That was call by javascript"

document.getElementsByTagName("h1")[1].innerHTML = "That was by tag"

document.getElementsByClassName("pera")[0].innerHTML = "that was by peragraph fomat. bye"
document.querySelector(".pera1").innerHTML = "this is quiry selector"
// document.querySelector("p").innerHTML = "this is quiry selector"

function myMassage() {
    alert("Hello EveryOne That is look like an js version.")
}

// That is a peragraph demo button

function button1(){
    document.querySelector("#peraId").innerHTML = "That is peragraph Id js in button 1"

};

function button2 () {
    document.querySelector(".peraClass").innerHTML = "That is peragraph class js in button 2"
};

function picturebtn () {
    document.querySelector(".pic").src = "1.jpg"
};