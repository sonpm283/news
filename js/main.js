const menuBtn = document.querySelector('.nav-button')
const menuMobile = document.querySelector('.menu-mb')
const menuOverlay = document.querySelector('.menu-mb-ovlay')
menuBtn.addEventListener('click', function() {
    menuMobile.classList.add('active')
    
})
menuOverlay.addEventListener('click', function() {
    menuMobile.classList.remove('active')
})

$(document).ready(function() {

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    newsSlide.init()
   
});

const navText = ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"];
const newsSlide = {
    init : function () {
        this.newsSlide();
    },
    newsSlide: function() {
        $(".news-slide-inner").owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            nav: true,
            autoplay: true,
            margin: 30,
            navText:navText,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1.5,
                    margin: 20,
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
                ,1200:{
                    items:3
                }
            }
        })
    }
}


