let btnMenu = document.getElementById('btn-menu')

btnMenu.addEventListener('click' , MenuShow)

function MenuShow(){
    btnMenu.classList.toggle('open')
}