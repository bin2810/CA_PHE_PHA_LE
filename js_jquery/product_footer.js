$(function() {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop() + $(window).height();

        var footerPosition = $('#cuoi').offset().top;

        if (scrollPosition >= footerPosition - 5) { 
            $('.product_menu').fadeOut(1); 
        } else {
            $('.product_menu').fadeIn(); 
        }
    });
});