$(function(){

    // Tabs
    $('.tabs__item').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tabs__item_active');
        $($(this).closest('.tabs').siblings().find('div')).removeClass('tabs__content_active');

        $(this).addClass('tabs__item_active');
        $($(this).attr('href')).addClass('tabs__content_active');

        //$('.slider').slick('setPosition'); // Инициализация слайдера
    });

    // Product slider
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn_prev"><img src="icons/arrows/product-slider/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn_next"><img src="icons/arrows/product-slider/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });
    $('.reviews__slider').slick({
        dots: true,
        rtl: true,
        prevArrow: '<button class="reviews__slider-btn reviews__slider-btn_prev"><img src="icons/arrows/reviews-slider/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="reviews__slider-btn reviews__slider-btn_next"><img src="icons/arrows/reviews-slider/arrow-right.svg" alt=""></button>',
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger_active');
        $('.overlay').toggleClass('overlay_active');
        $('.hamburger__menu').toggleClass('hamburger__menu_active');
    });

    // Dropdown
    $('.hamburger__menu-link.dropdown').on('click', function(){
        $(this).toggleClass('hamburger__menu-link_active');
        $(this).next().slideToggle('200');
    });

    $('.hamburger__dropdown-item, .hamburger__menu-link.without-drop').on('click', function(){
        $('.hamburger').removeClass('hamburger_active');
        $('.overlay').removeClass('overlay_active');
        $('.hamburger__menu').removeClass('hamburger__menu_active');
    });

    $('.eco-products__drop').on('click', function(){
        $(this).addClass('eco-products__drop_active');
        $('.eco-products__hide').addClass('eco-products__hide_active');
        $('.eco-products__more').addClass('eco-products__more_active');
    });

    $('.eco-products__hide').on('click', function(){
        $(this).removeClass('eco-products__hide_active');
        $('.eco-products__drop').removeClass('eco-products__drop_active');
        $('.eco-products__more').removeClass('eco-products__more_active');
    });
});