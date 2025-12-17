import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.about-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 0,

  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  pagination: {
    el: '.about-controls .swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: window.innerWidth < 768,
    dynamicMainBullets: 1,
  },
});

// function updatePaginationByWidth() {
//   const isMobile = window.innerWidth < 768;

//   swiper.params.pagination.dynamicBullets = isMobile;

//   swiper.pagination.destroy();
//   swiper.pagination.init();
//   swiper.pagination.render();
//   swiper.pagination.update();
// }

// window.addEventListener('resize', () => {
//   updatePaginationByWidth();
// });
function updatePaginationByWidth() {
const isMobile = window.innerWidth < 768;
swiper.params.pagination.dynamicBullets = isMobile;
swiper.pagination.update(); 
}
window.addEventListener('resize', updatePaginationByWidth);

updatePaginationByWidth();