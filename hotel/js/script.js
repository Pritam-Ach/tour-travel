window.onscroll = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new swiper(".mySwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new swiper(".reviews-slider",{
  loop:true,
  spaceBetween: 20,
  autoHeight:true,
  grabCursor:true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },

  },
})