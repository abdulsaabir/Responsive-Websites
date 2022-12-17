let nav_link = document.querySelectorAll('.nav_link')

nav_link.forEach(link => {
   link.addEventListener(('click') , e => {
    nav_link.forEach(link => link.classList.remove('Active-link'))
    link.classList.add('Active-link')
   })
})

// add background shaddow to the header
function ScrollHeader() {
   let header = document.getElementById('header')
   this.scrollY > 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , ScrollHeader)

// modal toggle 

let service_Button = document.querySelectorAll('.service_Button') 
let service_modal = document.querySelectorAll('.service_modal') 
let service_modal_close = document.querySelectorAll('.service_modal_close') 

const Modal = (index) => {
   service_modal[index].classList.add('active_modal')
}

service_Button.forEach((btn,index )=> {
   btn.addEventListener('click'  , () =>Modal(index))    
})
service_modal_close.forEach((btn,index )=> {
   btn.addEventListener('click'  , () =>   service_modal[index].classList.remove('active_modal'))    
})
