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

service_Button.forEach(btn => {
   btn.addEventListener('click' , (e) =>  {
      let ParentElement = e.target.parentElement;
      let modal = ParentElement.querySelector('.service_modal');
      modal.classList.add('active_modal')
      let ModalClose = ParentElement.querySelector('.service_modal_close')
      ModalClose.addEventListener('click',() => {
         modal.classList.remove('active_modal')
      })
   })
})