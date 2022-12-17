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