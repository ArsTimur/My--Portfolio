import '../styles/reset.css'
import '../styles/index/header.css'
import '../styles/menu/menu.css'
import '../styles/index/top-rests.css'
import '../styles/index/top-dishes.css'
import '../styles/index/footer.css'


//
//Css REsponsive Styles
import '../styles/menu/responsive.css'

//
//ForEach Styles
import '../styles/foreach-styles.css'

//
//JS

import toIndex from '../js/modules/pagechange.js'
import discontsSlider from '../js/modules/menudiscont.js'
import priceRanger from '../js/modules/price-slider.js'
import viewAll from '../js/modules/viewall.js'
import bookmarkClick from '../js/modules/bookmarkclick.js'
import dishBasketCounter from './modules/basketcounter.js'
import showAnswer from '../js/modules/show-answer.js'
import heartLike from './modules/heart-like.js'
import mobileMenu from './modules/mobile-menu.js'


window.addEventListener('DOMContentLoaded', ()=> {

    toIndex();
    discontsSlider();
    priceRanger();
    viewAll('.view__all__rests', '.hided__rest', '.hide__rests');
    viewAll('.view__all__dishes', '.hided__dish', '.hide__dishes');
    bookmarkClick();
    dishBasketCounter();
    showAnswer();
    heartLike();
    mobileMenu();
})

