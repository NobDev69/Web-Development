// document.getElementById(id).attribute = new value
//html

document.getElementById('imgs').src = '1 (2).jpg';

document.getElementById('demo').innerHTML = 'Toays date is' + Date();

//That is forms
function validForm(){
    const form = document.forms['myForm']['fname'].value;
    if (form == ''){
        alert('You have fill the name section!')
        return false
}
}