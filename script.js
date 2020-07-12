$(document).ready(function(){
    // Navbar toggle
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })

    // Navbar 
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 200){
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    })

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        $('.camara-img').css('opacity','0');
        if(position >= 700){
            $('.camara-img').addClass('fromLeft');

            $('.mission-text').addClass('fromRight');
        }else{
            $('.camara-img').removeClass('fromLeft');
            $('.camara-img').css('opacity','1');
            $('.mission-text').removeClass('fromRight');
        }
    })

    AOS.init();

    // var wow = new WOW(
    //     {
    //       boxClass:     'wow',      // animated element css class (default is wow)
    //       animateClass: 'animated', // animation css class (default is animated)
    //       offset:       50,          // distance to the element when triggering the animation (default is 0)
    //       mobile:       true,       // trigger animations on mobile devices (default is true)
    //       live:         true,       // act on asynchronously loaded content (default is true)
    //       callback:     function(box) {
    //         // the callback is fired every time an animation is started
    //         // the argument that is passed in is the DOM node being animated
    //       },
    //       scrollContainer: null,    // optional scroll container selector, otherwise use window,
    //       resetAnimation: true,     // reset animation on end (default is true)
    //     }
    //   );
    //   wow.init();
})





























