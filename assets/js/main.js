/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

const toggleMenu = () => navMenu.classList.toggle('show-menu');

if (navToggle){
    navToggle.addEventListener('click', toggleMenu);
    console.log("toogle clicked")
} 
if (navClose) navClose.addEventListener('click', toggleMenu);


/*=============== REMOVE MENU MOBILE ===============*/
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER WACTHES ===============*/
const swiper = new Swiper('.home-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:32,
    grabCursor:true,
    effect:"creative",
    creativeEffect:{
        prev:{
            translate:[-100,0,-500],
            rotate:[0,0,15],
            opacity:0
            

        },
        next:{
            translate:[100,0,-500],
            rotate:[0,0,-15],
            opacity:0

            

        }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  

})

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home-image',1.5,{opacity:0,y:150,delay:.1})
gsap.from('.home-data',1.8,{opacity:0,x:-100,delay:.8})
gsap.from('.home-info',1.8,{opacity:0,x:-100,delay:.98})