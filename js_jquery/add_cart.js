$(function(){
    $("#lop_phu_sp").hide(); // ẩn form 

    
    $("#btn-them").click(function() {
        $("#lop_phu_sp").fadeToggle(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });


    $("#lop_phu_sp").click(function(event) {
        if (event.target.id === "lop_phu_sp") { //id của #lop_phu_login
            $("#lop_phu_sp").fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        }
    });
    
    $("#close-sp").click(function(){
        $("#lop_phu_sp").fadeOut(); // ẩn form   
        $('body').removeClass('lock-scroll');  
    })

    $("#btn_shopping").click(function(){
        $.get('/html/Thong_Bao_Them_GH.html', function(data) {
            $('body').append(data);
            $("#lop_phu_sp").fadeOut(); // ẩn form   
            $('body').removeClass('lock-scroll'); 
            $('#thong_bao_gio_hang').removeClass('hidden').addClass('show');

            // Tự động ẩn thông báo sau 3 giây
            setTimeout(function() {
                $('#thong_bao_gio_hang').removeClass('show').addClass('hidden');
            }, 3000); // 3 giây
            
        });
    })

});

$(function() {
    $('#tang').click(function() {
        var sl = parseInt($('#hiensl').val());

        sl++;
        if (sl > 1) {
            $('.btngiam').addClass("nenbtn");
        } else {
            $('.btngiam').removeClass("nenbtn");
        }

        $('#hiensl').val(sl);
    });

    $('#giam').click(function() {
        var sl = parseInt($('#hiensl').val());
        if (sl > 1) {
            sl--;
            $('#hiensl').val(sl);
        }
        if (sl > 1) {
            $('.btngiam').addClass("nenbtn");
        } else {
            $('.btngiam').removeClass("nenbtn");
        }

    });
});

