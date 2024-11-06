$(function(){
    var currentIndex = 0;
    var images = $('.carousel img');
    var imageCount = images.length;

    function showImage(index) {
        // Chuyển đổi vị trí của carousel
        $('.carousel').css('transform', 'translateX(' + (-index * 100) + '%)');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageCount;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        showImage(currentIndex);
    }

    // Nút điều hướng
    // $('.carousel-container').append('<button class="carousel-btn prev"><img src="../image/trang_chủ/prev.png" alt=""></button>');
    // $('.carousel-container').append('<button class="carousel-btn next"><img src="../image/trang_chủ/next.png" alt=""></button>');

    $('.prev').click(prevImage);
    $('.next').click(nextImage);

    // Tự động chuyển ảnh sau 3 giây
    setInterval(nextImage, 3000);

});
