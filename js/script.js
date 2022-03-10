$(function () {

    'use strict';

    // banner slider part start
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
    });
    // banner slider part end




    // menu fix part start
    let menuoff = $('.main_menu').offset().top

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > menuoff) {
            $('.main_menu').addClass('fix_menu');
        } else {
            $('.main_menu').removeClass('fix_menu');
        }
    });

    // menu fix part end





    // about video part start
    new VenoBox({
        selector: ".video"
    });
    // about video part end





    // gallery images part start
    new VenoBox({
        selector: ".image"
    });
    // gallery images part end




    // testimonial slider part start
    $('.text_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // testimonial slider part end




    //  counter up part strat
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    //  counter up part end





    // client slider part strat
    $('.client_slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        arrows: true,
        autoplay: true,
        prevArrow: '<i class="fa-solid fa-chevron-left prev_arr"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right nxt_arr"></i>',
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // client slider part end




    // back to top button strat
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // back to top button end
});