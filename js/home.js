function scrolltoInfo() {
    $("#downArrow").click(function() {console.log("clicked");
        $('html,body').animate({
            scrollTop: $("#info").offset().top}, 475);
    });
}