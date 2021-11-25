
const namePic = document.querySelector(".name_pic");
    
    // HIGHlIGHT CURRENT IMAGE
    $(".image").click(function () {
        $(".image").not(this).removeClass("highlight");
        $(this).addClass("highlight");
    });

    // GET NAME OF PIC TO APPEAR

    $(".image").click(function() {
        namePic.textContent = $(this).siblings().text();
    });