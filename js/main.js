$(document).ready(function(){

    var swiper = new Swiper(".sec_1_bg", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".sec_4_swiper", {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        slidesPerView: 3.2,
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

    });

    var swiper = new Swiper(".sec_4_mob", {
        slidesPerView: 1.5,    
        centeredSlides: true,   
        spaceBetween: 20,        
        loop: true,              
        grabCursor: true,        
    });


}) //end