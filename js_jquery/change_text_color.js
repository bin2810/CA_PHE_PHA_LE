$(function() {
    $(".product_col_1, .product_col_2, .product_col_3").hover(function() {
        $(".product_information_content", this).removeClass("demo1").addClass("demo2");
        $(".product_information_content", this).addClass("move-left"); // Thêm lớp di chuyển
    }, function() {
        $(".product_information_content", this).addClass("demo1").removeClass("demo2");
        $(".product_information_content", this).removeClass("move-left"); // Bỏ lớp di chuyển
    });
});