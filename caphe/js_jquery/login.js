$(function(){
    $("#lop_phu_login").hide(); // ẩn form 

    
    $("#btnlogin").click(function() {
        $("#lop_phu_login").fadeIn(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });

    // Khi người dùng bấm vào lớp phủ bên ngoài để đóng
    $("#lop_phu_login, #btnlogin").click(function(event) {
        if (event.target.id ) { //id của #lop_phu_login
            $(this).fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        }
    });
    
    $(".nut_login").click(function(){
        $("#lop_phu_login").fadeOut(); // ẩn form   
        $('body').removeClass('lock-scroll');  
    })

});

