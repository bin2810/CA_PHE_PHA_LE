$(document).ready(function(){
    $('.gtth_content_layout').hide();  // an tất cả các tab
    $('.gtth_content_layout:first').show();  // hiển thị tab đầu tiên
    $('.gtth_box:first a').addClass('active');  // thêm class active cho tab đầu tiên
    // tạo sự kiện click
    $('.gtth_box a').click(function(event){
        event.preventDefault();  // ngăn sự kiện mặc định của thẻ a
        index = $(this).parent().index();
        $('.gtth_box a').removeClass('active');  
        $(this).addClass('active');
        $('.gtth_content_layout').hide();
        $('.gtth_content_layout').eq(index).show();
    });
});