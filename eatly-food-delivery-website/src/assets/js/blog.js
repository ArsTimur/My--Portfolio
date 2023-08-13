import '../styles/reset.css'
import '../styles/index/header.css'
import '../styles/blog/blog.css'
import '../styles/index/subscribe.css'
import '../styles/foreach-styles.css'
import '../styles/index/footer.css'


//
//Css REsponsive Styles
import '../styles/blog/responsive.css'

//
//JS


import toIndex from './modules/pagechange.js'
import articlesSlider from './modules/articles-slider.js'
import showAnswer from './modules/show-answer.js'
import watchArticleCard from './modules/watch-article-card.js'
import mobileMenu from './modules/mobile-menu.js'


window.addEventListener('DOMContentLoaded', () => {
    toIndex();
    articlesSlider();
    showAnswer();
    watchArticleCard();
    mobileMenu();
    
})