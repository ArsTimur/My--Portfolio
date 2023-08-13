function mobileMenuNav() {
    const body = document.body;
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenuCloseBtn = document.querySelector('.close-burger-menu')
    const menuNav = document.querySelector('.nav');
    const menuNavBg = document.querySelector('.nav-bg');
    const menuLink = document.querySelectorAll('.menu-list-link')

    
    burgerBtn.addEventListener('click', burgerMenu);
    burgerMenuCloseBtn.addEventListener('click', burgerMenuClose)
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenuClose();
        })
    })
    function burgerMenu() {
        if(menuNav.classList.contains('burger-active')) {
            menuNav.classList.remove('burger-active');
            menuNavBg.classList.remove('nav-bg-active');
            body.style.overflow = '';
        } else {
            menuNav.classList.add('burger-active');
            menuNavBg.classList.add('nav-bg-active');
            body.style.overflow = 'hidden';
        }
    }
    function burgerMenuClose() {
        if(menuNav.classList.contains('burger-active')){
            menuNav.classList.remove('burger-active');
            menuNavBg.classList.remove('nav-bg-active');
            body.style.overflow = '';
        }
    }
}

export default mobileMenuNav