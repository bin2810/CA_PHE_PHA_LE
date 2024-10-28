$(function(){
    $("#lop_phu_address").hide(); // ẩn form 

    
    $("#btn_doi-phuong-thuc").click(function() {
        $("#lop_phu_address").fadeToggle(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });

    // Khi người dùng bấm vào lớp phủ bên ngoài để đóng
    $("#lop_phu_address").click(function(event) {
        if (event.target.id ) { //id của #lop_phu_login
            $(this).fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        }
    });
    
})

