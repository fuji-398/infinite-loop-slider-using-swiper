'use strict';

const swiper = new Swiper('.swiper', {
    // direction: 'vertical',
    loop: true,
    // speed: 2000,
  
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
