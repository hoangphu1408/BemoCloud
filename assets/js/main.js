(function ($) {
  'use strict';
  const imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $('body')),
        (this._html = $('html'));
    },
    methods: function (e) {
      imJs.stickyHeader();
      imJs.toggleMenuMobile();
      imJs.toggleDropdown();
      imJs.slickCarousel();
      imJs.swiperDashboard();
    },
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('.header--sticky').addClass('sticky');
        } else {
          $('.header--sticky').removeClass('sticky');
        }
      });
    },
    toggleMenuMobile() {
      // $('.header-default .hamburger-icon').on('click', function (e) {
      //   $('.header-default .main-menu').toggleClass('show');
      //   $('body').toggleClass('no-scroll');
      // });
      $('.header .header__hamburger').on('click', function (e) {
        $('.header .header__menu').toggleClass('header__show');
        $('body').toggleClass('no-scroll');
      });
    },
    backToTopInit: function () {
      // declare variable
      const scrollTop = $('.backto-top');
      $(window).scroll(function () {
        // declare variable
        const topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css('opacity', '1');
        } else {
          $(scrollTop).css('opacity', '0');
        }
      });

      //Click event to scroll to top
      $(scrollTop).on('click', function () {
        $('html, body').animate(
          {
            scrollTop: 0,
            easingType: 'linear',
          },
          500
        );
        return false;
      });
    },
    toggleDropdown: function () {
      $('.header__language').on('click', function (e) {
        $('.dropdown__language').toggleClass('show');
      });
    },
    slickCarousel: function () {
      const carousel = $('.carousel__list');
      carousel.slick({
        dots: true,
        arrow: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
          '<div class="slick-prev carousel__arrow"><i class="fa fa-arrow-left"></i></div>',
        nextArrow:
          '<div class="slick-next carousel__arrow"><i class="fa fa-arrow-right"></i></div>',

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            },
          },
          {
            breakpoint: 769,
            settings: {
              dots: true,
              arrow: false,
              prevArrow: null,
              nextArrow: null,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              dots: true,
              arrow: false,
              prevArrow: null,
              nextArrow: null,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    swiperDashboard: function () {
      const swiper = new Swiper('.dashboard-swiper .swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 1500,
        // speedBetween: 5000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  };
  imJs.m();
})(jQuery, window);
