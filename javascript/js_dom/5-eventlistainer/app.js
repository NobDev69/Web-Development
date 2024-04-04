// document.querySelector('button').addEventListener('click',clickEvent)


// function clickEvent(){
//     alert('hello world')
// }

// name sara function ke anonimous function -->
document.querySelector('button').addEventListener('click', function (){
    alert('Hello World This is event listainer anonimous function')
})

let main = document.querySelector('h1');

main.addEventListener('mouseover', function (){
    main.classList.add('my-style');
})

main.addEventListener('mouseout', function (){
    main.classList.remove('my-style');
})