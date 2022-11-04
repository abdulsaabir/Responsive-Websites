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

let counter2 = 0
function counterUp(){
counter.forEach((counter) => {
    counter.innerText="0"

    const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
        const increment = target / 100;
        // console.log(increment)
        if(c < target){
            counter.innerText = `${Math.ceil(increment)}`;
            // setTimeout(updateCounter, 75);
        } else {
          counter.innerText = target;
        }
    }
    updateCounter()
})
}
counterUp()