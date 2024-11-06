$(function() {
    var currentIndex = 1; // Bắt đầu từ ảnh đầu tiên sau bản sao
    var images = $('.carousel img');
    var imageCount = images.length;

    // Thêm bản sao ảnh đầu và cuối
    $('.carousel').prepend(images.last().clone());
    $('.carousel').append(images.first().clone());

    var totalImages = $('.carousel img').length;

    // Đặt vị trí ban đầu ở ảnh đầu tiên thực sự
    $('.carousel').css({
        'transform': 'translateX(-100%)',
        'transition': 'none'
    });

    function showImage(index, instant = false) {
        if (instant) {
            $('.carousel').css('transition', 'none');
        } else {
            $('.carousel').css('transition', 'transform 0.5s ease');
        }
        $('.carousel').css('transform', 'translateX(' + (-index * 100) + '%)');

        // Khôi phục lại hiệu ứng chuyển động sau khi dịch chuyển tức thời
        if (instant) {
            setTimeout(() => $('.carousel').css('transition', 'transform 0.5s ease'), 20);
        }
    }

    function nextImage() {
        currentIndex++;
        showImage(currentIndex);

        if (currentIndex === totalImages - 1) {
            setTimeout(function() {
                currentIndex = 1;
                showImage(currentIndex, true); // Chuyển ngay lập tức về đầu mà không có hiệu ứng
            }, 500);
        }
    }

    function prevImage() {
        currentIndex--;
        showImage(currentIndex);

        if (currentIndex === 0) {
            setTimeout(function() {
                currentIndex = totalImages - 2;
                showImage(currentIndex, true); // Chuyển ngay lập tức về cuối mà không có hiệu ứng
            }, 500);
        }
    }

    // Nút điều hướng
    $('.prev').click(prevImage);
    $('.next').click(nextImage);

    // Tự động chuyển ảnh sau 3 giây
    setInterval(nextImage, 3000);
});
