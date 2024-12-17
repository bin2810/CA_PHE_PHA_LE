    $(function() {
        $("#lop_phu_address").show();
    
        $("#btn_doi-phuong-thuc").click(function() {
            $("#lop_phu_address").fadeToggle();
            $('body').toggleClass('lock-scroll');
        });
    
        $("#btn_address_close").click(function() {
            var txt_address = $('#txt_address').val();
            var error_txt_address = $('.error_txt_address');
    
            if (txt_address === '') {
                error_txt_address.text('Địa chỉ không được để trống').show();
                setTimeout(function() {
                    error_txt_address.hide();
                }, 4000);
                return false;
            } else {
                $("#lop_phu_address").fadeOut(); 
                $('body').removeClass('lock-scroll'); 
                var inputvalue = $('#txt_address').val()
                $('#hide_address').text(inputvalue);
            }
        });
    
        $("#btn_new_address").click(function() {
            $('#txt_address').val('');
            $('#error_txt_address').hide();
        });
    });
    


