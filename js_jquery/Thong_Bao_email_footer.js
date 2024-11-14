$(document).ready(function() {
    $('#btn_email').click(function() {

        // Biểu thức regex kiểm tra định dạng email
        var email_mau = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var email = $('#email').val();

        // Kiểm tra email
        if(email == ""){
            $('#thong_bao').text('Vui lòng nhập email').css('color', 'white').fadeIn();
            setTimeout(function() {
                $('#thong_bao').fadeOut();
            }, 2000);  
        }
        else if (!email_mau.test(email)) {
            $('#thong_bao').text('Vui lòng nhập lại email (vui lòng đúng định dạng gmail)').css('color', 'red').fadeIn();  
            setTimeout(function(){
                $('#thong_bao').fadeOut();
            },2000);
        } else {
            $('#thong_bao').text('Xin cảm ơn, gmail đã được gửi thành công.').css('color', 'rgb(8, 250, 8)').fadeIn(); // Hiển thị thông báo thành công

            setTimeout(function() {
                $('#thong_bao').fadeOut();
            }, 4000);
        }
    });
});