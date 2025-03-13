$(function () {
    $('.nut_login').click(function (data) {
        $('body').append(data);
        var phoneNumber = $('.nhap_phone').val();
        if (phoneNumber === '') {
            $('.error').text('Số điện thoại không được để trống').show();
            return false; 
        }        
        if (phoneNumber.length < 10 || phoneNumber.length > 11) {
            $('.error').text('Số điện thoại không hợp lệ. Vui lòng nhập lại!').show();
            return false;
        }
        $('.error').hide();
        $("#lop_phu_login").hide();
        $('body').removeClass('lock-scroll');

    });
});
