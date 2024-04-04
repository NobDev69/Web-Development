

for(let i = 0; i < 3; i++) {
    document.querySelectorAll('.my-btn')[i].addEventListener('click', function (){
        let text = this.innerHTML;
        console.log(text)


        switch(text){
            case 'a':
                var audio = new Audio('sounds/1.mp3');
                audio.play();
                break;
            case 'b':
                var audio = new Audio('sounds/2.mp3');
                audio.play();
                break;
            case 'c':
                var audio = new Audio('sounds/3.mp3');
                audio.play();
                break;
        }
    })
}