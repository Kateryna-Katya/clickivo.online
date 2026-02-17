import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


let visualSwiper = null;
let gallerySwiper = null;

const BREAKPOINT = 1440;

function initVisual() {
  if (window.innerWidth < BREAKPOINT) {
    if (!visualSwiper) {
      visualSwiper = new Swiper('.visual-swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 10,
      });
    }
  } else {
    if (visualSwiper) {
      visualSwiper.destroy(true, true);
      visualSwiper = null;
    }
  }
}

function initGallery() {
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function initAllSwipers() {
  initVisual();
  initGallery();
}

window.addEventListener('load', initAllSwipers);
window.addEventListener('resize', () => {
  initVisual();
});