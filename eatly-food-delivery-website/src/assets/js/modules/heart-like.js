function heartLike() {
    const heart = document.querySelectorAll('.heart')

    heart.forEach(function(hrt) {
        hrt.style.fill = 'none'
        hrt.addEventListener('click', ()=> {
            if (hrt.style.fill === 'none') {
                hrt.style.fill = '#323142'
                hrt.classList.add('fade__like__effect');
                hrt.classList.remove('fade__like__inactive');

                
            } else {
                hrt.style.fill = 'none'
                hrt.classList.add('fade__like__inactive')
                hrt.classList.remove('fade__like__effect');

                
            }
        })

        
        
    })
}
export default heartLike