let bitcon = document.getElementById('bitcon')
// let anim ;
function ScrollCheck () {
    let Scrol = window.scrollY;
    if(Scrol > 266.6666564941406 )
    {
      
      let  anim= document.getElementById("bitcon").animate(
            [
                0% {
                    opacity: 0,
                    transform: `translateY(140+px)`,
                  } ,
                  100% {
                      opacity: 1,
                      transform: `translateY(0+px)`,
                  }
            ]
    )
      
    anim.pause();
    }
}
document.addEventListener('scroll' , ScrollCheck)
// const anim = document.getElementById("foo").animate(
//     [
//       { transform: `rotate(${A_DYNAMIC_VALUE})` }
//     ],
//     { duration: 3000, iterations: Infinity }
//   );
  
  // and later
