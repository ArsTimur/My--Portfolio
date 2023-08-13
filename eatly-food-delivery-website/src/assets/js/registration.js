import '../styles/reset.css'
import '../styles/registration/registration.css'
import '../styles/registration/login.css'
import '../styles/registration/signup.css'

//
//Css REsponsive Styles
import '../styles/registration/responsive.css'

//
//JS
import toIndex from '../js/modules/pagechange.js'


    
    function inputActive() {
toIndex();
   
const signInput = document.querySelectorAll('.sign__input'); //


signInput.forEach(item => {
    const input = item.querySelector('.input-sign');
    const inputIcon = item.querySelector('.input-icon');
    const filledInputIcon = item.querySelector('.filled-input-icon');
    const filledShowPassBtn = document.querySelector('.show-or-hide-pass-filled')
    const showPassBtn = document.querySelector('.show-or-hide-pass')
    filledShowPassBtn.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    })
    if (input) {
        input.addEventListener('focus', ()=> {
            item.style.cssText = `border: 2px solid #6C5FBC;`;
            inputIcon.style.display = 'none';
            filledInputIcon.style.display = 'block';
            filledShowPassBtn.style.display = 'block';
            showPassBtn.style.display = 'none';
        });
        
        input.addEventListener('blur', ()=> {
            if (input.value === '') {
                item.style.border = '2px solid #F5F5F5';
                inputIcon.style.display = 'block';
                filledInputIcon.style.display = 'none';
                filledShowPassBtn.style.display = 'none';
                showPassBtn.style.display = 'block';
                
            }
        }); 
    }

})


}

export default inputActive