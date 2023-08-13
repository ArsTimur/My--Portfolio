
function viewAll(viewAllSelector, hidedElemsSelector, hideElemsBtnSelector) {
    const viewAllBtn = document.querySelector(viewAllSelector);
    const hidedElements = document.querySelectorAll(hidedElemsSelector);
    const hideElemsBtn = document.querySelector(hideElemsBtnSelector);

    // Скрыть элементы по умолчанию
    hidedElements.forEach(hddEL => {
        hddEL.style.opacity = '0';
        hddEL.style.transition = 'opacity 0.5s ease';
        hddEL.style.display = 'none';
        
    });

    viewAllBtn.addEventListener('click', () => {
        hidedElements.forEach(hddEL => {
            hddEL.style.display = 'flex';
            hddEL.style.flexDirection = 'column';
            setTimeout(() => {
                hddEL.style.opacity = '1';
            }, 10);
        });
        viewAllBtn.style.display = 'none';
        hideElemsBtn.style.cssText = `display:flex;`;
    });

    hideElemsBtn.addEventListener('click', () => {
        hidedElements.forEach(hddEL => {
            hddEL.style.opacity = '0';
            setTimeout(() => {
                hddEL.style.display = 'none';
            }, 100);
        });
        viewAllBtn.style.display = 'flex';
        hideElemsBtn.style.cssText = `display:none;`;
    });
}

export default viewAll;