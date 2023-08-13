function watchArticleCard() {
    const swiperArticleSlide = document.querySelectorAll('.swiper-slide');
    const topCard = document.querySelectorAll('.top-card');
    // Block Selectors

    const blogBlocksObj = {
                subsContInBlog: document.querySelector('.subscont-in-blog'),
                articlesTitle: document.querySelector('.articles-title'),
                latestArticles: document.querySelector('.latest-articles'),
                questionsContainer: document.querySelector('.questions-container'),
            }
                //InCardPage
              const inCardPage = document.querySelector('.in-card-page');

              const goBackBtn = document.querySelector('.back-to-latest-articles');

    swiperArticleSlide.forEach(card => {

        card.addEventListener('click', (e) => {
            e.preventDefault();
            for (let key in blogBlocksObj) {
                if (blogBlocksObj.hasOwnProperty(key)) {
                  blogBlocksObj[key].classList.add('hide-blocks');
                }
                goBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    blogBlocksObj[key].classList.remove('hide-blocks');
                    inCardPage.classList.remove('show-in-card-page');
                })
                
              }
            inCardPage.classList.add('show-in-card-page');
            
        })

    })
    topCard.forEach(card => {

        card.addEventListener('click', (e) => {
            e.preventDefault();
            for (let key in blogBlocksObj) {
                if (blogBlocksObj.hasOwnProperty(key)) {
                  blogBlocksObj[key].classList.add('hide-blocks')
                }
              }
            inCardPage.classList.add('show-in-card-page');
              alert('Переход на другую карточку')
        })

    })
    const nextArticleBtn = document.querySelector('.next-article-btn');
    nextArticleBtn.addEventListener('click', (e) => {
      e.preventDefault();
        
    })
    
    
}



export default watchArticleCard;
