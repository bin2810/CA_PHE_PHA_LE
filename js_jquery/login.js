$(function() {
    
    $.get('/html/login.html', function(data) {
        $('body').append(data);

      
        $("#lop_phu_login").hide();

        $("#btnlogin , #btnlogin_tablet").click(function() {
            $("#lop_phu_login").fadeIn();; 
            $('body').addClass('lock-scroll');
        });
        

        $(document).click(function(event) {
            if (event.target.id === "lop_phu_login"){
                $("#lop_phu_login").fadeOut();
                $('body').removeClass('lock-scroll');
            }
        });
    });
});