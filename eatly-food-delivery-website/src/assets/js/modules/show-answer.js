function showAnswer() {
    const question = document.querySelectorAll('.question');

    question.forEach(quest => {
        
        const hideAnswerBtn = quest.querySelector('.hide-answer-btn');
    const showAnswerBtn = quest.querySelector('.show-answer-btn');
    const answer = quest.querySelector('.answer-to-asked-question');

    hideAnswerBtn.style.display = 'none';
    answer.style.display = 'none';
    showAnswerBtn.addEventListener('click', () => {
        hideAnswerBtn.style.display = 'block';
        answer.style.display = 'block';
        setTimeout(() => {
            answer.style.opacity = 1;
        },100);
        showAnswerBtn.style.display = 'none';
    })
    hideAnswerBtn.addEventListener('click', () => {
        hideAnswerBtn.style.display = 'none';
        answer.style.opacity = 0;
        
        setTimeout(() => {
            answer.style.display = 'none';
        },100);
        
        showAnswerBtn.style.display = 'block';
    })
    })
    


}
export default showAnswer