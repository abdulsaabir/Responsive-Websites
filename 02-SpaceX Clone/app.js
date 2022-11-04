let btnMenu = document.getElementById('btn-menu')
let overLay = document.getElementById('overLay')
let showMenu = document.querySelector('.mobile-main-menu');
let counter = document.querySelectorAll('.counter')
btnMenu.addEventListener('click' , MenuShow)

function MenuShow(){
    btnMenu.classList.toggle('open')
    overLay.classList.toggle('show-overlay')
    document.body.classList.toggle('stop-scrolling')
    showMenu.classList.toggle('show-menu    ')
}

function counterUp(){
// counter.forEach((counter) => {
// console.log(counter)
// })
}
counterUp()