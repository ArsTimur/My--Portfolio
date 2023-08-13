import Swiper from 'swiper/bundle';

import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
function articlesSlider() {
  const swiper = new Swiper(".articles-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2,
    },
   
    modules: [Navigation, Pagination, Mousewheel],
    mousewheel: false,
    autoHeight: false,
    
    
  });

  const currentSlide = swiper.realIndex; // Получение текущего слайда
  const totalSlides = swiper.slides.length; // Получение общего количества слайдов
  const prevButton = document.querySelector('.custom-prev-button');
const nextButton = document.querySelector('.custom-next-button');



// Swiper Nav Buttons
const prevSvgBtn = document.querySelector('.prev-btn-svg'),
  prevBtnPath = prevSvgBtn.querySelectorAll('.prev-btn-path'),
  nextSvgBtn = document.querySelector('.next-btn-svg'),
  nextBtnPath = nextSvgBtn.querySelectorAll('.next-btn-path');


  

// Обработчик события для кнопки "Назад"
function updateNavigationButtons() {
  const currentSlide = swiper.realIndex; // Получение текущего слайда
  const totalSlides = swiper.slides.length / 3; // Получение общего количества слайдов
  
  // Проверка, является ли текущий слайд последним
  if (currentSlide === totalSlides) {
    prevBtnPath.forEach(prev => {
      prev.style.fill = `#605E5E`;
    })
    nextBtnPath.forEach(next => {
      next.style.fill = `#CECECE`;
    })
    // console.log('Последний слайд');
  } 
  // Проверка, является ли текущий слайд первым
  else if (currentSlide === 0) { 
    prevBtnPath.forEach(prev => {
      prev.style.fill = `#CECECE`;
    })
    nextBtnPath.forEach(next => {
      next.style.fill = `#605E5E`;
    })
    // console.log('Первый слайд');
  } 
  // Для остальных слайдов
  else {
    prevBtnPath.forEach(prev => {
      prev.style.fill = `#605E5E`;
    })
    nextBtnPath.forEach(next => {
      next.style.fill = `#605E5E`;
    })
    // console.log('Не последний и не первый слайд');
  }
}

// Обработчик события для кнопки "Назад"
prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slidePrev();
  updateNavigationButtons();
});

// Обработчик события для кнопки "Вперед"
nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  swiper.slideNext();
  updateNavigationButtons();
});

// Вызов функции для первоначального обновления стилей кнопок навигации
updateNavigationButtons();
  
}
export default articlesSlider