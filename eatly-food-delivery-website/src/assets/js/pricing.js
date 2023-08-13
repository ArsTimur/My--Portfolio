import '../styles/reset.css'
import '../styles/index/header.css'
import '../styles/pricing/pricing.css'
import '../styles/foreach-styles.css'
import '../styles/index/dashboard.css'
import '../styles/index/reviews.css'
import '../styles/index/footer.css'

//
//Css REsponsive Styles
import '../styles/pricing/responsive.css'

//
//JS
import purchDate from '../js/modules/purchdate.js'
import reviewsSlider from './modules/reviewsslider.js'
import mobileMenu from './modules/mobile-menu.js'
import toIndex from '../js/modules/pagechange.js'
window.addEventListener('DOMContentLoaded', () => {
    toIndex();
    purchDate();
    reviewsSlider();
    mobileMenu();
})