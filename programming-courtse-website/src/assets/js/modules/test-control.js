let correctCount = 0;
// let correctCount = [];
function testControl(
  submitBtnSelector,
  optionsSelector,
  correctAnswersArray,
  answerDescrTitleSelector
) {
  
  const submitButton = document.querySelector(submitBtnSelector);
  const options = document.querySelectorAll(optionsSelector);
  const correctAnswers = correctAnswersArray;
  const answerDescrTitle = document.querySelector(answerDescrTitleSelector);
  const fromTotal = document.querySelector('.from-total')
  const questionWindows = document.querySelectorAll('.modal-question-window')
    
      
    
  
  // if (correctCount.length === 0) {
  //   correctCount = new Array(questionWindows.length).fill(1); // Инициализируем массив
  // }
  
    submitButton.addEventListener("click", () => {
      
    let selectedAnswers = [];
    options.forEach(option => {
      selectedAnswers.push(option.checked);
    });
  
    let isCorrect = true;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (selectedAnswers[i] !== correctAnswers[i]) {
        isCorrect = false;
        break;
      }
    }
  
    const resultMessage = isCorrect ? 'Правильно!' : 'Неправильно!';
    answerDescrTitle.textContent = `${resultMessage}`;

    
      const totalResults = document.querySelector('.totalresult-num');
      
      if(isCorrect) {
        correctCount++
      } else {
        correctCount;
      }
          // if(!isCorrect) {
          //   correctCount.pop();
            
          // }
          
        console.log(correctCount);
        
      
    totalResults.textContent = `${correctCount}`;
    fromTotal.textContent = `${questionWindows.length}`
      
  });
  
  
  
  
}


export default testControl;
