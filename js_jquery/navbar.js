$(function(){
    $(window).scroll(function() { 
        var navbar = $('.box');
        if ($(this).scrollTop() > 0) { // Khi cuộn xuống
            navbar.addClass('sticky');
        } else { // Khi ở vị trí ban đầu
            navbar.removeClass('sticky');
        }
    });

});

