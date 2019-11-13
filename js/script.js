$(document).ready(function () {
    $('#banner').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    $('#advise-slide').owlCarousel({
        loop:true,
        responsiveClass:true,
        dots: false,
        nav: true,
        navText:["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    $('#team-slide').owlCarousel({
        loop:true,
        responsiveClass:true,
        dots: false,
        nav: true,
        navText:["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    $('#customer-slide').owlCarousel({
        loop:true,
        responsiveClass:true,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
})