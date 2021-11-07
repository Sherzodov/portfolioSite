const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.onscroll = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}






$(document).ready(function () {
    $('.slider-works').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 3,
        

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
              }
            }
          ]
    });
});
        
$(document).ready(function () {
  $('.slider-worksFuck').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      slidesToScroll: 3,
      

      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          }
        ]
  });
});


