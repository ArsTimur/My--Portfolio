import '../styles/reset.css'
import '../styles/index/header.css'
import '../styles/contacts/contact.css'
import '../styles/foreach-styles.css'
import '../styles/index/footer.css'

//
//Css REsponsive Styles
import '../styles/contacts/responsive.css'


//
//JS

import toIndex from '../js/modules/pagechange.js'
import mobileMenu from './modules/mobile-menu.js'
window.addEventListener('DOMContentLoaded', () => {
    toIndex();

    mobileMenu();
    
})