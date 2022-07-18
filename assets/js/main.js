// const { default: Swiper } = require('swiper');

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
      imJs.activeMenu();
      imJs.activeCategories();
      imJs.linkToServiceDetail();
      imJs.linkToBlogDetail();
      imJs.setLanguage();
      imJs.slickCarousel();
      imJs.swiperDashboard();
      imJs.swiperMember();
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

    setLanguage: function () {
      let languageList = [
        { lang: 'vietnam', acronym: 'Vi' },
        { lang: 'english', acronym: 'ENG' },
        { lang: 'japan', acronym: 'JP' },
      ];
      $('.header__language .dropdown-item').on('click', function (e) {
        let item = $(this);
        let selectedLang = item.text().trim().toLowerCase();
        languageList.forEach((item) => {
          if (item.lang === selectedLang) {
            $('.header__language__text').text(item.acronym);
          }
        });
      });
    },

    activeMenu: function () {
      window.onload = function () {
        // let currentHref = new URL(location);
        let currentHref = location.href;
        let filter = location.search;

        $('.header__menu__link').each(function () {
          let $this = $(this);

          if ($this[0].href === currentHref) {
            $this.parent().addClass('active');
          }
        });

        if (filter) {
          let filterToUrl = filter.split('=');
          let decodeURI = decodeURIComponent(filterToUrl[1]);
          $('.categories__search').text(decodeURI);
          $('.categories__item').each(function () {
            if ($(this).text().trim() == decodeURI) {
              $(this).addClass('categories__active');
            } else {
              $(this).removeClass('categories__active');
            }
          });
        }
      };
    },

    activeCategories: function () {
      $('.categories__item').on('click', function (e) {
        let filter = $(this).text().trim();
        window.location = 'solution.html?categories=' + filter;
      });
    },

    linkToServiceDetail: function () {
      $('.services__item').on('click', function (e) {
        window.location.href = '/services-detail.html';
      });
    },

    linkToBlogDetail: function () {
      $('.blog__item').on('click', function () {
        window.location.href = '/blog-detail.html';
      });
    },

    slickCarousel: function () {
      const carousel = $('.carousel__list');
      carousel.slick({
        dots: true,
        arrow: true,
        // infinite: true,
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
              slidesToShow: 3,
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
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
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
    swiperMember: function () {
      const swiper = new Swiper('.member-swiper .swiper-container', {
        slidesPerView: 4,
        loop: true,
        // spaceBetween: 32,
        // autoplay: true,
        // speed: 500,
        // speedBetween: 500,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
    },
  };
  imJs.m();
})(jQuery, window);
