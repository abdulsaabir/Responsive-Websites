let btnMenu = document.getElementById('btn-menu')
let overLay = document.getElementById('overLay')
btnMenu.addEventListener('click' , MenuShow)

function MenuShow(){
    btnMenu.classList.toggle('open')
    overLay.classList.toggle('show-overlay')
    document.body.classList.toggle('stop-scrolling')
}