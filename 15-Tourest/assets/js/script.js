let btn = document.querySelector('.menu')
let header = document.querySelector('header')


btn.addEventListener('click', () => {
  header.classList.toggle('active')
})