//CSS Styles 



import '../styles/reset.css'
import '../styles/index/header.css'
import '../styles/index/first-display.css'
import '../styles/index/achievements.css'
import '../styles/index/app-addv.css'
import '../styles/index/top-rests.css'
import '../styles/index/top-dishes.css'
import '../styles/index/dashboard.css'
import '../styles/index/reviews.css'
import '../styles/index/subscribe.css'
import '../styles/index/footer.css'


//
//Css REsponsive Styles
import '../styles/index/responsive.css'

//
//ForEach CSS Styles

import '../styles/foreach-styles.css'

// JavaScript //Modules

import bookmarkClick from './modules/bookmarkclick.js';
import heartLike from './modules/heart-like.js'
import viewAll from './modules/viewall.js'
import purchDate from './modules/purchdate.js'
import dishBasketCounter from './modules/basketcounter.js'
import reviewsSlider from './modules/reviewsslider.js'
import mobileMenu from './modules/mobile-menu.js'


window.addEventListener('DOMContentLoaded', () => {
    
    bookmarkClick();
    heartLike();
    viewAll('.view__all__rests', '.hided__rest', '.hide__rests');
    viewAll('.view__all__dishes', '.hided__dish', '.hide__dishes');
    purchDate();
    dishBasketCounter();
    reviewsSlider();
    mobileMenu();






})

