const swiper = new Swiper('.swiper', {
  loop: true,
  // grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-btn',
    bulletActiveClass: 'pagination-btn--active',
  },

  // Navigation keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation mousewheel
  mousewheel: {
    invert: true,
  },

  autoplay: {
    delay: 5000,
  },
});
