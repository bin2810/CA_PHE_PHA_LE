$(function() {
    $(window).resize(function() {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            // Chạy mã JavaScript khi màn hình rộng hơn 768px
            // Ví dụ: Khởi tạo một slider, hiệu ứng hover phức tạp, v.v.
            $(".product_col_1, .product_col_2, .product_col_3").hover(function() {
                $(".product_information_content", this).removeClass("demo1").addClass("demo2");
                $(".product_information_content", this).addClass("move-left"); // Thêm lớp di chuyển
            }, function() {
                $(".product_information_content", this).addClass("demo1").removeClass("demo2");
                $(".product_information_content", this).removeClass("move-left"); // Bỏ lớp di chuyển
            });
        
            $(".spnb").hover(function() {
                $(".namespnb", this).removeClass("demo3").addClass("demo4");
                $(".namespnb", this).addClass("move-left1");
            }, function() {
                $(".namespnb", this).addClass("demo3").removeClass("demo4");
                $(".namespnb", this).removeClass("move-left1");
            });
            
        } else {
            $(".product_col_1, .product_col_2, .product_col_3, .spnb")
        .off('hover mouseover mouseout')
        .addClass("no-hover"); // Thêm lớp CSS để áp dụng các kiểu cho màn hình nhỏ
        }
    });
    $(window).trigger('resize');
   
});