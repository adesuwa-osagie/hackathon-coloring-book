$(document).ready(function() { 

    // HIGHLIGHT NAV LINK
    $(".navLink").click(function () {
        $(".navLink").not(this).removeClass("active");
        $(this).addClass("active");
        
    });

    // GET A DIV TO APPEAR ON SCROLL
    // Resource: http://jsfiddle.net/mohammadAdil/DFeqH/
    // Resource: http://jsfiddle.net/mohammadAdil/DFeqH/
    

    $(window).scroll(function() {

        $(".toFadeIn").each (function(i) {

            let bottom_of_object = $(this).position().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate(
                    {
                        "opacity":'1'
                    }, 500
                );

                
            }
        });
    });

});
