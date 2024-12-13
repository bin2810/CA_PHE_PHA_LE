$(function(){
    $("#lop_phu_address").hide(); // ẩn form 

    
    $("#btn_doi-phuong-thuc").click(function() {
        $("#lop_phu_address").fadeToggle(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });

    // Khi người dùng bấm vào lớp phủ bên ngoài để đóng
    $("#lop_phu_address").click(function(event) {
        if (event.target.id === "lop_phu_address" ) { //id của #lop_phu_login
            $(this).fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        }
    });

    $("#btn_address_close").click(function() {
        $("#lop_phu_address").fadeOut(); // Hiển thị form 
        $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        var inputvalue = $('#txt_address').val()
        $('#hide_address').text(inputvalue);
    });


    $("#btn_new_address").click(function() {
        $('#txt_address').val('') 
    });
    

    
    
})

