$(function() {
    $(".product_col_1, .product_col_2, .product_col_3").hover(function() {
        $(".product_information_content", this).removeClass("demo1").addClass("demo2");
        $(".product_information_content", this).addClass("move-left"); // Thêm lớp di chuyển
        $(".product_information_money", this).removeClass("demo3").addClass("demo4");
        $(".product_information_money", this).addClass("move-left2");
    }, function() {
        $(".product_information_content", this).addClass("demo1").removeClass("demo2");
        $(".product_information_content", this).removeClass("move-left"); // Bỏ lớp di chuyển
        $(".product_information_money", this).addClass("demo3").removeClass("demo4");
        $(".product_information_money", this).removeClass("move-left2");
    });
        
    $(".spnb").hover(function() {
        $(".namespnb", this).removeClass("demo3").addClass("demo4");
        $(".namespnb", this).addClass("move-left1");
        $(".price", this).removeClass("demo3").addClass("demo4");
        $(".price", this).addClass("move-left2");
    }, function() {
        $(".namespnb", this).addClass("demo3").removeClass("demo4");
        $(".namespnb", this).removeClass("move-left1");
        $(".price", this).addClass("demo3").removeClass("demo4");
        $(".price", this).removeClass("move-left2");
    });
    
});