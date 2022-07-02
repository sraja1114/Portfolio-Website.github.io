function changePictureOpacityOnScroll() {
    $(document).ready(function () {
        $(window).scroll(function (event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 1000);
            if (opacity >= 0) {
                $('#maincontainer').css('opacity', opacity);
            }
        });
    });
}

function scrolltoInfo() {
    $("#downArrow").click(function() {console.log("clicked");
        $('html,body').animate({
            scrollTop: $("#info").offset().top},
            'slow');
    });
}

function set100vhVar(){
    // If less than most tablets, set CSS var to window height.
    let value = "91.2vh";

    // If window size is iPad or smaller, then use JS to set screen height.
    if (window.innerWidth && window.innerWidth <= 1024) { window.outer
        // Navbar in pixels
        var navbarHeight = document.getElementById('#navbar').clientHeight;;

        //Subtract the height of the navbar from the inner window height.
        var heightWoNavbar = window.innerHeight - navbarHeight;
        value = heightWoNavbar.toString() + `px`;
    }
    document.documentElement.style.setProperty("--real100vh", value);
    // console.log("Inner height: " + window.innerHeight);
    // console.log("Navbar height: " + navbarHeight);
    // console.log("Height without navbar: " + heightWoNavbar);
}

changePictureOpacityOnScroll();
set100vhVar();