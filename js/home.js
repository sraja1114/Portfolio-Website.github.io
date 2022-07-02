function scrolltoInfo() {
    $("#downArrow").click(function() {console.log("clicked");
        $('html,body').animate({
            scrollTop: $("#info").offset().top}, 400, 'linear');
    });
}

$(document).ready(function() {
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
        $('.arrow').addClass('fade');
      } else{
        $('.arrow').removeClass('fade');
      }
    })
  });