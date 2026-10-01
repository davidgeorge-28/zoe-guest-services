/* ================================
   ZOE GUEST SERVICES
   Website JavaScript
================================ */


/* ================================
   HEADER SCROLL EFFECT
================================ */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================================
   MOBILE MENU
================================ */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("mobile-open");

});


/* ================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
================================ */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("mobile-open");

    });

});


/* ================================
   SIMPLE REVEAL ANIMATION
================================ */

const revealElements =
    document.querySelectorAll(
        ".service-card, .event, .standard-grid > div, .gallery-image"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});
