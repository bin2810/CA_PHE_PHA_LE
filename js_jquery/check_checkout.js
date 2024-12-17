$(function(){

    $('#order_checkout').click(function () {
        var user_name = $('#user_name').val();
        var error_user = $('.error_user');

        var phoneNumber_checkout = $('#btn-number').val();
        var error_checkout = $('.error_number');

        error_user.hide(); 
        error_checkout.hide(); 

        if (user_name === '') {
            error_user.text('Tên người nhận ko được bỏ trống').show();
            setTimeout(function() {
                error_user.hide();
            }, 4000);
            return false;
        }
        
        if (phoneNumber_checkout === '') {
            error_checkout.text('Số điện thoại không được để trống').show();
            setTimeout(function() {
                error_checkout.hide();
            }, 4000);
            return false;
        }
    
        if (phoneNumber_checkout.length < 10 || phoneNumber_checkout.length > 11) {
            error_checkout.text('Số điện thoại không hợp lệ. Vui lòng nhập lại!').show();
            setTimeout(function() {
                error_checkout.hide();
            }, 4000);
            return false;
        }
    });

})