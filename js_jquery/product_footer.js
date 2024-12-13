$(function() {
    $(window).scroll(function() {
        // Khoảng cách từ đầu trang đến cuối màn hình + chiều cao màn hình
        var scrollPosition = $(window).scrollTop() + $(window).height();

        // Vị trí từ đầu trang đến id cuối
        var footerPosition = $('#cuoi').offset().top;

        // Nếu vị trí cuộn gần đến footer
        if (scrollPosition >= footerPosition - 5) { // Điều chỉnh khoảng cách ở đây
            $('.product_menu').fadeOut(1); // Ẩn đối tượng
        } else {
            $('.product_menu').fadeIn(); // Hiện lại đối tượng khi cuộn lên
        }
    });
});