$(function() {
    // Tải nội dung của login.html
    $.get('/html/login.html', function(data) {
        $('body').append(data);

        // Ẩn form mặc định (nếu cần)
        $("#lop_phu_login").hide();

        // Sự kiện click vào nút đăng nhập
        $("#btnlogin , #btnlogin_tablet").click(function() {
            $("#lop_phu_login").fadeIn();; // Hiển thị form mượt mà hơn
            $('body').addClass('lock-scroll');
        });
        

        // Sự kiện click vào vùng bên ngoài form để đóng
        $(document).click(function(event) {
            if (event.target.id === "lop_phu_login"){
                $("#lop_phu_login").fadeOut();
                $('body').removeClass('lock-scroll');
            }
        });
    });
});