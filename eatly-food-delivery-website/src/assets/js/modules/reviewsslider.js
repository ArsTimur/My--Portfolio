import Swiper from 'swiper/bundle';
// import 'swiper/css';

import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';


function reviewsSlider() {
  const swiper = new Swiper(".reviews-slider", {
    slidesPerView: 2,
    speed:600,
    spaceBetween: 30,
    modules: [Navigation, Pagination, Mousewheel],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'progressbar',
    },
    breakpoints: {
      1125: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      100: {
        slidesPerView: 1,
      }
    },
    mousewheel: true,
  });


  const activeSlide = swiper.slides[swiper.activeIndex];
  const firstLine = activeSlide.querySelector('.slide-first-line');
  
      firstLine.style.display = 'flex';
      firstLine.style.opacity = 1;


  swiper.on('slideChange', function () {
    const activeSlide = swiper.slides[swiper.activeIndex];
    

    // Показываем блок firstLine в активном слайде
    const firstLine = activeSlide.querySelector('.slide-first-line');
    if (firstLine) {
      firstLine.style.display = 'flex';
      setTimeout(() => {
        firstLine.style.opacity = 1;
      }, 100);
    }
    const lastSlide = document.querySelector('.last-slide-first-line');
    if(swiper.realIndex === 3) {
      console.log('Предпоследний слайд')
      lastSlide.classList.add('last-slide-active');
      
    } else {
      lastSlide.classList.remove('last-slide-active')
    }
    // Скрываем блок firstLine у остальных слайдов
    swiper.slides.forEach(slide => {
      if (slide !== activeSlide) {
        const firstLine = slide.querySelector('.slide-first-line');
        if (firstLine) {
          firstLine.style.display = 'none';
        }
      }
    });
  });

  swiper.init();
}




reviewsSlider();


export default reviewsSlider
