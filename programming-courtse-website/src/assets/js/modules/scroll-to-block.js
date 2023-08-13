function scrollToBlock(scrollBtnSelector, blockSelector) {
  const blockToScroll = document.querySelector(blockSelector);

  

  if (document.querySelectorAll(scrollBtnSelector).length === 1) {
    //Если Количество кнопок 1
    const scrollButton = document.querySelector(scrollBtnSelector);
    if (window.innerWidth <= 769) {
      scrollButton.addEventListener("click", () => {
        scrollIntoViewStart();
      });
    } else {
      scrollButton.addEventListener("click", () => {
        scrollIntoViewCenter();
      });
    }
  } else {
    //Если Количество кнопок больше одного
    const scrollButton = document.querySelectorAll(scrollBtnSelector);
    if (window.innerWidth <= 769) {
      scrollButton.forEach((btn) => {
        btn.addEventListener("click", () => {
          scrollIntoViewStart();
        });
      });
    } else {
      scrollButton.forEach((btn) => {
        btn.addEventListener("click", () => {
          scrollIntoViewCenter();
        });
      });
    }
  }


// Скролл к началу блока
  function scrollIntoViewStart() {
    blockToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

//   Скролл к центру блока
  function scrollIntoViewCenter() {
    blockToScroll.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

}

export default scrollToBlock;
