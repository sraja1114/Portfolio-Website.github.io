function scrolltoInfo() {
    $("#downArrow").click(function() {console.log("clicked");
        $('html,body').animate({
            scrollTop: $("#info").offset().top}, 400, 'linear');
    });
}

$(document).ready(function() {
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        $('.arrow').addClass('fade');
      } else{
        $('.arrow').removeClass('fade');
      }
    })
  });


  function set100vhVar(){
    // If less than most tablets, set CSS var to window height.
    let value = "94.5vh";

    // If window size is iPad or smaller, then use JS to set screen height.
    if (window.innerWidth && window.innerWidth <= 1024) { window.outer
        // Navbar in pixels
        var navbarHeight = document.getElementById('navbar').clientHeight;;

        //Subtract the height of the navbar from the inner window height.
        var heightWoNavbar = window.innerHeight - navbarHeight;
        value = heightWoNavbar.toString() + `px`;
    }
    document.documentElement.style.setProperty("--real100vh", value);
}
set100vhVar();