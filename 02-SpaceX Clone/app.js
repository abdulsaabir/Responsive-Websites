let btnMenu = document.getElementById('btn-menu')
let overLay = document.getElementById('overLay')
let showMenu = document.querySelector('.mobile-main-menu');
let counter = document.querySelectorAll('.counter')
btnMenu.addEventListener('click' , MenuShow)
let scrollStarted = false;


function MenuShow(){
    btnMenu.classList.toggle('open')
    overLay.classList.toggle('show-overlay')
    document.body.classList.toggle('stop-scrolling')
    showMenu.classList.toggle('show-menu    ')
}

function counterUp(){
counter.forEach((counter) => {
    counter.innerText="0"

    const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        let c = +counter.innerText;
        const increment = target / 100;
        if(c < target){
            counter.innerText = `${Math.ceil(increment + c)}`;
            setTimeout(updateCounter, 75);
        } else {
          counter.innerText = target;
        }
    }
    updateCounter()
})
}
function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
        counterUp();
      scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
    }
  }
  
function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  }