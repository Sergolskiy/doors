import 'owl.carousel';

import Blazy from 'blazy';

// import '@fancyapps/fancybox';

import Inputmask from "inputmask/dist/inputmask/inputmask.date.extensions";

import "jquery-ui/ui/widgets/slider";

import "@fancyapps/fancybox/dist/jquery.fancybox.min";

Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone');



$(document).ready(function () {

    // $('.catalog-page__btn-more').click(function(e){
    //     let btn = e.target;
    //     $(btn).toggleClass('catalog-page__btn-more--toggle');
    //     let parent = e.target.closest('.catalog-page__categories-inner');
    //     $(parent).find('.catalog-page__categories-item:nth-child(n+5)').slideToggle('');
    // });

    $(document).on('click', '.owl-next', function () {
        setTimeout(function () {
            var bLazy = new Blazy({});
        }, 50);
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 5000,
        values: [ 0, 5000 ],
        slide: function( event, ui ) {
            $('#slider-out').val(ui.values[ 0 ]);
            $('#slider-out-max').val(ui.values[ 1 ]);
        }
    });



    $('.owl-carousel').on('dragged.owl.carousel', function(event) {
        setTimeout(function () {
            var bLazy = new Blazy({});
        }, 50);
    });
    $(window).resize(function () {
        var bLazy = new Blazy({
            // options
        });
    });
    var bLazy = new Blazy({
        // options
    });


    var hasWebP = (function() {
        // some small (2x1 px) test images for each feature
        var images = {
            basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
            lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
        };

        return function(feature) {
            var deferred = $.Deferred();

            $("<img>").on("load", function() {
                // the images should have these dimensions
                if(this.width === 2 && this.height === 1) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            }).on("error", function() {
                deferred.reject();
            }).attr("src", images[feature || "basic"]);

            return deferred.promise();
        }
    })();



    hasWebP().then(function() {
        $('.webp-img').each(function(){
            var webp = $(this).data('webp');
            $(this).css('background-image', 'url(' + webp + ')')
        });
    }, function() {
        $('.webp-img').each(function(){
            var img = $(this).data('img');
            $(this).css('background-image', 'url(' + img + ')')
        });
    });
    var items = 2;
    if($(window).width() < 620 ) {
        items = 1;
    }
    if($(window).width() < 1250 && $(window).width() > 450) {
        $('.bestsellers__items').owlCarousel({
            nav: false,
            items: items,
            mouseDrag: true,
            loop: true,
            autoplay: true,
        });
    }
    if($(window).width() < 450){
        $('.gallery__items ').owlCarousel({
            nav: false,
            items: 1,
            mouseDrag: true,
            loop: true,
            autoplay: true,
        });
    }

    $('.slider ').owlCarousel({
        nav: false,
        items: 1,
        mouseDrag: true,
        loop: true,
        autoplay: true,
        smartSpeed: 600
    });


    $('.fancybox').fancybox();

    $('.header__menu-btn').click(function () {
        $('.header__menu-wpap').toggleClass('open');
    });


    $('.questions__btn_toggle').click(function () {
         $(this).next().slideToggle();
    });



    $(".to-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(window).scroll(function() {
        var buttonToTop = $('.to-top');
        $(window).scrollTop() > 450 ? buttonToTop.addClass('show') : buttonToTop.removeClass('show');
    });

    $('.header__place-toggle').click(function () {
        $(this).closest('.header__place').toggleClass('open');
         $('.header__place-list').slideToggle().toggleClass('open');
    });

    $('.header__place-link').click(function () {
        $('.header__place-toggle').html($(this).html());
        $('.header__place').toggleClass('open');
        $('.header__place-list').slideToggle().toggleClass('open');
    });

    $('.about-us__tabs-item').click(function (e) {
        e.preventDefault();
        $('.about-us__tabs-item').removeClass('about-us__tabs-item--active');
        $(this).addClass('about-us__tabs-item--active');
        $('.about-us__item').removeClass('about-us__item--active');
        $('.about-us__item').eq($(this).index()).addClass('about-us__item--active');

        var bLazy = new Blazy();
    });

    //
    // $(window).scroll(function() {
    //     let scroll = 20;
    //     if($(window).width() < 992){
    //         scroll = 20;
    //     }
    //     if($(window).scrollTop() > scroll){
    //         $('.header-wrap').addClass('scrolling');
    //     } else {
    //         if($('.header-wrap').closest('.contacts').length > 0){
    //             return;
    //         }
    //         $('.header-wrap').removeClass('scrolling');
    //     }
    //
    // });

});

