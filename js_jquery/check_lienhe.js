$(function(){

    $('.button_lienhe').click(function () {
        var name_lienhe = $('#name_lienhe').val();
        var email_mau_lienhe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var email_lienhe = $('#email_lienhe').val();
        var noidung_lienhe = $('#noidung_lienhe').val();
        var error_name_lienhe = $('.error_name_lienhe');
        var error_email_lienhe = $('.error_email_lienhe');
        var error_noidung_lienhe = $('.error_noidung_lienhe');

        error_name_lienhe.hide()
        error_email_lienhe.hide()
        error_noidung_lienhe.hide()

        if (name_lienhe === '') {
            error_name_lienhe.text('Họ và tê không được bỏ trống').show();
            setTimeout(function() {
                error_name_lienhe.hide();
            }, 4000);
            return false;
        }
        
        if (!email_mau_lienhe.test(email_lienhe)) {
            error_email_lienhe.text('Vui lòng nhập lại email (vui lòng đúng định dạng gmail').show();
            setTimeout(function() {
                error_email_lienhe.hide();
            }, 4000);
            return false;
        }
    
        if (noidung_lienhe === '') {
            error_noidung_lienhe.text('Vui lòng nhập nội dung').show();
            setTimeout(function() {
                error_noidung_lienhe.hide();
            }, 4000);
            return false;
        }
    });

})