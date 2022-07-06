(function ($) {
  'use strict';

  $(document).ready(function () {
    $('.carousel__list').slick({
      dots: true,
      arrow: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:
        '<div class="slick-prev carousel__arrow"><i class="fa fa-arrow-left"></i></div>',
      nextArrow:
        '<div class="slick-next carousel__arrow"><i class="fa fa-arrow-right"></i></div>',

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
})(jQuery, window);
