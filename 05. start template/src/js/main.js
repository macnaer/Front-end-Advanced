/*Testimonials slider (Slick)*/
document.addEventListener("DOMContentLoaded", function () {
    $('.testimonials .testimonials-slider').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
});

/*----------------Burger--------------------*/
jQuery(document).ready(function() {

    $('.menu-trigger').on('click', function(){
        $(this).toggleClass('active');
    });

    jQuery(".menu-trigger").click(function() {
        if (jQuery(".top_mnu").is(":visible")) {
            jQuery(".top_text").css("opacity", "1");
            jQuery(".top_mnu").fadeOut(600);
            jQuery(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            jQuery(".top_text").css("opacity", ".1");
            jQuery(".top_mnu").fadeIn(600);
            jQuery(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
});




