
const nameT = document.querySelector(".name_pic");
    
    // HIGHlIGHT CURRENT IMAGE
    $(".image").click(function () {
        $(".image").not(this).removeClass("highlight");
        $(this).addClass("highlight");
    });

    // GET NAME OF PIC TO APPEAR

    $(".image").click(function() {
        nameT.textContent = $(this).next('p').text();
    });