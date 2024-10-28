$(function(){
    $(".store_1").click(function(){
        $(this).next(".content_store").slideToggle();
    })


    $(".map_HCM-1").show(500); //đển mặc đinh hiển thị nha
    //TPHCM
    $(".open_HCM-1").hover(function () { 
        $(".map > div").hide();
        $(".map_HCM-1").show(); 
    });

    $(".open_HCM-2").hover(function () { 
        $(".map > div").hide();
        $(".map_HCM-2").show(); 
    });

    $(".open_HCM-3").hover(function () { 
        $(".map > div").hide();
        $(".map_HCM-3").show(); 
    });

    $(".open_HCM-4").hover(function () { 
        $(".map > div").hide();
        $(".map_HCM-4").show(); 
    });
    // ĐÀ NẴNG
    $(".open_DN-1").hover(function () { 
        $(".map > div").hide();
        $(".map_DN-1").show(); 
    });

    $(".open_DN-2").hover(function () { 
        $(".map > div").hide();
        $(".map_DN-2").show(); 
    });

    $(".open_DN-3").hover(function () { 
        $(".map > div").hide();
        $(".map_DN-3").show(); 
    });
     // HÀ NỘI
     $(".open_HN-1").hover(function () { 
        $(".map > div").hide();
        $(".map_HN-1").show(); 
    });

    $(".open_HN-2").hover(function () { 
        $(".map > div").hide();
        $(".map_HN-2").show(); 
    });
     // LÂM ĐỒNG
     $(".open_LĐ-1").hover(function () { 
        $(".map > div").hide();
        $(".map_LĐ-1").show(); 
    });

    

    
});

