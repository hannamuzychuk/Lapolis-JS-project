import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import '/src/about_us.css';


const swiper = new Swiper('.about-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 0,

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  pagination: {
    // el: '.swiper-pagination',
    el: '.about-controls .swiper-pagination',
    type: 'bullets', 
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  breakpoints: {
    768: { 
      pagination: {
        dynamicBullets: false,
      }
    }
  }
}); 