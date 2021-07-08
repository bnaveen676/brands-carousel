//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

//start our parteners
$(document).ready(function() {
    $(".ourPartnersContainer").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive: {
            1200: {
                items: 6,

            },
            992: {
                items: 4
            },
            768: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }

    });
});
//end our parteners