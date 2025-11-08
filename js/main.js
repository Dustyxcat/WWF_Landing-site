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

    $(".ham_wrap").click(function(){

        $(".top_ham").toggleClass("active_top");
        $(".center_ham").toggleClass("active_center");
        $(".bottom_ham").toggleClass("active_bottom");
        
    });

    $('.ham_wrap').click(function(){
        $('.split_page').toggleClass('active_split')
    });

    $(window).scroll(function(){
        var pageY = $(window).scrollTop()
         if(pageY > 300){

            $(".mob_header").css({
                position: 'fixed',
                zIndex: 60,
                backgroundColor: '#1B1B1B',
            })
         }else if(pageY < 300){
            $(".mob_header").css({
                position: 'absolute',
                backgroundColor: '#1B1B1B00'
            })
         }
    });

}) //end