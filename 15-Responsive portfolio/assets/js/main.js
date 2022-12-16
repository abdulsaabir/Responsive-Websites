let nav_link = document.querySelectorAll('.nav_link')

nav_link.forEach(link => {
   link.addEventListener(('click') , e => {
    nav_link.forEach(link => link.classList.remove('Active-link'))
    link.classList.add('Active-link')
   })
})