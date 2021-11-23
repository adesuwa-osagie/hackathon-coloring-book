    // HIGHlIGHT CURRENT IMAGE
    $(".image").click(function () {
        $(".image").not(this).removeClass("highlight");
        $(this).addClass("highlight");
    });