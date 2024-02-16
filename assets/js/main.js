
    //Preloader with the doge coin
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    //Sticky navbar and back to top btn
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var navbar = document.querySelector('.navbar-brand')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
        } else {
          header_navbar.classList.remove("sticky");
        }

        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //Init wow
    new WOW().init();