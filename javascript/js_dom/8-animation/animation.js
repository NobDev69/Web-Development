function animateFuntion(){
    const anim = document.getElementById('animate');
    let pos = 0;

    const interval = setInterval(file, 5)

    function file(){
        if(pos < 350) {
            pos++;
            anim.style.top = pos + 'px'
            anim.style.left = pos + 'px'
        }else{
            clearInterval(interval)
        }
    }
};