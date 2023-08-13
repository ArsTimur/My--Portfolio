function purchDate() {
    const purchDate = document.querySelector('.purch__date'),
     downArrow = document.querySelector('.down__arrow'),
     hidedTimes = document.querySelector('.hided__dates'),
     someDates = document.querySelectorAll('.some__date'),
     purchDateValue = document.querySelector('.purch__date__value'),
     expensedividerOutline = document.querySelector('.divider__outline'),
     vocherDividerOutline = document.querySelector('.vocher__divider__outline'),
     expenseMoney = document.querySelector('.expense-money'),
     vocherMoney = document.querySelector('.vocher-money');

    

     function purchTime(date) {
        purchDateValue.textContent = `This ${date.textContent}`;
            if(date.classList.contains('date-years')) {

                expensedividerOutline.style.width = `40%`
                vocherDividerOutline.style.width = `35%`
                expenseMoney.textContent = `$753.58`;
                vocherMoney.textContent = `$113.55`;
            }
            if(date.classList.contains('date-month')) {
                
                expensedividerOutline.style.width = `75%`
                vocherDividerOutline.style.width = `60%`
                expenseMoney.textContent = `$409.00`;
                vocherMoney.textContent = `$45.78`;
            }
            if(date.classList.contains('date-week')) {
                
                expensedividerOutline.style.width = `80%`
                vocherDividerOutline.style.width = `70%`
                expenseMoney.textContent = `$328.00`;
                vocherMoney.textContent = `$38.86`;
            }
            if(date.classList.contains('date-day')) {
                
                expensedividerOutline.style.width = `30%`
                vocherDividerOutline.style.width = `30%`
                expenseMoney.textContent = `$50.77`;
                vocherMoney.textContent = `$13.00`;
            }
            if(date.classList.contains('date-hours')) {
                
                expensedividerOutline.style.width = `10%`
                vocherDividerOutline.style.width = `5%`
                expenseMoney.textContent = `$15`;
                vocherMoney.textContent = `$5`;
            }
            hidedTimes.style.display = 'none';
     }

    someDates.forEach(date => {
        date.addEventListener('click', () => {
            purchTime(date)
        });
        date.addEventListener('touchstart', () => {
            purchTime(date)
        });
        date.addEventListener('touchend', () => {
            purchTime(date)
        });

    });
    // purchDate.addEventListener('click', ()=> {
    //     if(hidedTimes) {
    //         hidedTimes.style.display = 'none';
    //     } else {
    //         hidedTimes.style.display = 'flex';
    //     }
    // })

    purchDate.addEventListener('mouseover', () => {
        downArrow.classList.add('down__arrow__hover');
        hidedTimes.style.display = 'flex';
        
    });

    purchDate.addEventListener('mouseout', () => {
        downArrow.classList.remove('down__arrow__hover');
        hidedTimes.style.display = 'none';
    });

    purchDate.addEventListener('touchstart', () => {
        downArrow.classList.add('down__arrow__hover');
        hidedTimes.style.cssText = `display: flex !important;`;
      });
      
      purchDate.addEventListener('touchend', () => {
        downArrow.classList.add('down__arrow__hover');
        hidedTimes.style.cssText = `display: flex !important;`;
      });

    
}
export default purchDate;
