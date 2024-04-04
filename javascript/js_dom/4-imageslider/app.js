let imgs = ['1.png','2.png','3.png'];

let sel = document.querySelector('img')

let count = 0;

function next(){
    count++;

    if (count >= imgs.length){
        count = 0;
        sel.src = imgs[count];
    }else{
        sel.src = imgs[count];
    }
}



function pre(){
    count--;

    if (count < 0){
        count = imgs.length - 1;
        sel.src = imgs[count];
    }else{
        sel.src = imgs[count];
    }
}