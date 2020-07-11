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
})





























