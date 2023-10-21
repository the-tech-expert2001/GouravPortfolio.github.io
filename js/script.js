/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav');


const show_nav_menu =document.getElementById('bars');
const nav_menu =document.getElementById('nav-menu');
const hide_nav_menu = document.getElementById('cancle');
/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');

let bar = document.querySelectorAll('.bar');
let bars = document.querySelectorAll('.bars');
let cancle = document.querySelectorAll('.cancle');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'rgba(255,255,255,0.7)';
      for(let i=0;i<3;i++)
      {
        bar[i].style.background = 'black';
      }
      cancle[0].style.color = 'black';

    } else {
      navbar.style.backgroundColor = 'transparent';
      for(let i=0;i<3;i++)
      {
        bar[i].style.background = 'white';
        // bar[i].style.background = 'white';
      }
      cancle[0].style.color = 'white';

    }
});

function show()
{
  show_nav_menu.style.display = 'none';
  hide_nav_menu.style.display = 'block';
  nav_menu.style.left = '0' ;
  nav.style.height = '100vh';
}
function hide()
{
  show_nav_menu.style.display='flex';
  hide_nav_menu.style.display='none';
  nav_menu.style.left = '-100%' ;
  nav.style.height = '0';

}


/*========== testimonial ==========*/
const testimonialsContainer = document.querySelector('.testimonials');
    const scrollButtons = document.querySelectorAll('.scroll-button');
    let currentIndex = 0;

    function scrollTestimonials(direction) {
      currentIndex = (currentIndex + direction + testimonialsContainer.children.length) % testimonialsContainer.children.length;
      const translateX = -currentIndex * 100;
      testimonialsContainer.style.transform = `translateX(${translateX}%)`;
    }

    let autoScrollInterval = setInterval(() => scrollTestimonials(1), 3000); // Auto-scroll every 5 seconds

    // Pause auto-scrolling when hovering over testimonials
    // testimonialsContainer.addEventListener('mouseenter', () => {
    //   clearInterval(autoScrollInterval);
    // });

    // Resume auto-scrolling when not hovering
    // testimonialsContainer.addEventListener('mouseleave', () => {
    //   autoScrollInterval = setInterval(() => scrollTestimonials(1), 3000);
    // });
/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/
