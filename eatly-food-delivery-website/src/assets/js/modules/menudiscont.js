import Swiper from 'swiper';
// import 'swiper/css';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
function discontsSlider() {

    const swiper = new Swiper(".disconts-slider", {
        direction: 'horizontal',
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 30,
        autoHeight: false,
        initialSlide: 0,
        loop: true,
        modules: [Navigation, Pagination, Mousewheel],
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });


      swiper.init();
    
}
discontsSlider();


  export default discontsSlider;



