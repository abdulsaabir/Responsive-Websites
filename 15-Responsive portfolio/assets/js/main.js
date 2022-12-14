// let nav_link = document.querySelectorAll('.nav_link')

// nav_link.forEach(link => {
//    link.addEventListener(('click') , e => {
//     nav_link.forEach(link => link.classList.remove('active-link'))
//     link.classList.add('active-link')
//    })
// })

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

// work fitler 

let work_item = document.querySelectorAll('.work_item')

work_item.forEach(item => {
   item.addEventListener(('click') , e => {
   work_item.forEach(link => link.classList.remove('active_work'))
    item.classList.add('active_work')

   })
})

let MixerPortoflio = mixitup(".work_container", {
   selectors: {
       target: '.work_card'
   },
   animation: {
       duration: 300
   }
});

// swipper testomonial
let SwiperTestimonial = new Swiper (".testimonial_container", {
   spaceBetween: 24,
   loop: true,
   grabCursor: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
   breakpoints:{
      576:{
         slidesPerview: 2,
      },
      768:{
         slidesPerview: 2,
         spaceBetween: 48,
      }
   } 
})


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
           if(!sectionsClass) return
      // sectionsClass ?? console.log(sectionsClass)
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll',scrollActive)
