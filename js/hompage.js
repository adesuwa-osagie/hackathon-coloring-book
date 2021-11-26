// HIGHLIGHT NAV LINK
$(".navLink").click(function () {
    $(".navLink").not(this).removeClass("active");
    $(this).addClass("active");
    
});

