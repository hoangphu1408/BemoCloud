(function ($) {
  'use strict';

  $(document).ready(function () {
    const swiper = new Swiper('.dashboard-swiper .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
})(jQuery, window);
