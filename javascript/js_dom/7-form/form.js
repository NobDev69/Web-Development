// function valided(){
    
// const forms = document.forms['myForm']['fname'];
// const values = forms.value;

// if (values === ''){
//     alert('You must Fillup');
//     return false
// };
// }

function myFuntion(){
    const num = document.getElementById('numb').value;
if (isNaN(num) || num < 1 || num > 10){
    var text = 'Input not valid'
}else{
    var text = 'Input Ok'
}
document.getElementById('demo').innerHTML = text;
}
