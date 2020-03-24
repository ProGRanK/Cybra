$(document).ready(function() {
    // Navbar Scroll Event
    var $slider = $('.slider');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $slider.height() - 400) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
});