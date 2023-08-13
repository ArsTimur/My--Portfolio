function modalButtonsSettings(modalChangerBtnSelector) {
  const startTestBtn = document.querySelectorAll(".start-test"),
    body = document.body,
    modalsContainer = document.querySelector(".modals-container"),
    modalWindows = modalsContainer.querySelectorAll(".modal-window"),
    closeModalBtn = modalsContainer.querySelectorAll(".close-modal-btn"),
    finishTestBtn = document.querySelector(".finish-test-btn"),
    finalResultsModal = document.querySelector(".final-results-modal"),
    firstModalWindow = document.querySelector(".first-modal"),
    modalButtons = document.querySelectorAll(".modal-btn");

  function openModal() {
    modalsContainer.classList.add("active");
    firstModalWindow.classList.add("active");
    body.style.overflow = "hidden";
  }

  function closeModal() {
    modalsContainer.classList.remove("active");
    body.style.overflow = "";
    modalWindows.forEach((window) => {
      window.classList.remove("active");
    });
  }

  startTestBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Last Modal Finish Button

  finishTestBtn.addEventListener("click", () => {
    finalResultsModal.classList.remove("active");
    closeModal();
    location.reload();
  });
  // Modal Cross Buttons

  closeModalBtn.forEach((close) => {
    close.addEventListener("click", () => {
      closeModal();
      location.reload(); 
    });
  });

  // Кнопки переключения модальных окон
  // Buttons for switching modal windows

  modalButtons.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Находим текущий активный слайд и скрываем его
      const currentSlide = modalsContainer.querySelector(
        ".modal-window.active"
      );
      currentSlide.classList.remove("active");

      // Находим следующий слайд и показываем его
      const nextSlide = modalWindows[index + 1];
      if (nextSlide) {
        nextSlide.classList.add("active");
      } else {
        // Если следующего слайда нет, показываем первый слайд
        modalWindows[0].classList.add("active");
      }
    });
  });
}

export default modalButtonsSettings;
