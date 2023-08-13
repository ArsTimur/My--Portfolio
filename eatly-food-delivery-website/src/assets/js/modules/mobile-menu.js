function mobileMenu() {
    const burgerSvgBtn = document.querySelector('#burger-svg');
const menuNav = document.querySelector('.nav');

// Функция для обработки события прокрутки страницы


burgerSvgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuNav.classList.toggle('mobile-menu-active');
  if(menuNav.classList.contains('mobile-menu-active')) {
    burgerSvgBtn.style.cssText = `position: fixed; top: 0; right: 0; margin:30px 20px 0 0; transition:0.3s ease;`
  }
  if(!menuNav.classList.contains('mobile-menu-active')) {
    burgerSvgBtn.style.cssText = `position: relative; margin:0;`
  }
});




}
export default mobileMenu
