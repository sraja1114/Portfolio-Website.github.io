var $hb = $("html, body");
$("#downArrow").click(function () {
  if (window.innerWidth > 600) {
    $hb.animate(
      {
        scrollTop: $("#info").offset().top, // set scrollTarget to your desired position
      },
      400,
      "linear"
    );
    console.log("desktop");
  } else {
    $hb.animate(
      {
        scrollTop: 645, // set scrollTarget to your desired position
      },
      400,
      "linear"
    );
    console.log("mobile");
  }
});

console.log("change23");

// Stop the animation if the user scrolls. Defaults on .stop() should be fine
$hb.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (e) {
  if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
    $hb.stop().unbind("scroll mousedown DOMMouseScroll mousewheel keyup"); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".arrow").addClass("fade");
    } else {
      $(".arrow").removeClass("fade");
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".arrow").addClass("fade");
    } else {
      $(".arrow").removeClass("fade");
    }
  });
});

function set100vhVar() {
  // If less than most tablets, set CSS var to window height.
  let value = "96.5vh";

  // If window size is iPad or smaller, then use JS to set screen height.
  if (window.innerWidth && window.innerWidth <= 1024) {
    window.outer;
    // Navbar in pixels
    var navbarHeight = document.getElementById("navbar").clientHeight;

    //Subtract the height of the navbar from the inner window height.
    var heightWoNavbar = window.innerHeight - navbarHeight;
    value = heightWoNavbar.toString() + `px`;
  }
  document.documentElement.style.setProperty("--real100vh", value);
}
set100vhVar();

function set100vwVar() {
  // If less than most tablets, set CSS var to window height.
  let value = "100vw";

  //sets width based on navbar width
  var navbarWidth = document.getElementById("navbar").clientWidth;
  value = navbarWidth.toString() + `px`;
  document.documentElement.style.setProperty("--real100vw", value);
}
window.onresize = set100vwVar;
window.onload = set100vwVar;
