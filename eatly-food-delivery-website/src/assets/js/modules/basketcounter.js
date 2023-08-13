function dishBasketCounter() {
    const dishPriceAddLine = document.querySelectorAll('.dish__price__and__add')
  
    dishPriceAddLine.forEach((dbc) => {
      const addBtn = dbc.querySelector('.add__dish');
      const basketQuantity = dbc.querySelector('.basket__quantity');
      const delOneBasket = dbc.querySelector('.delete__basket__btn');
      let count = 0;
  
      addBtn.addEventListener('click', () => {
        count++;
        basketQuantity.textContent = count;
        delOneBasket.style.display = 'flex';
        basketQuantity.style.display = 'flex';
  
      });
  
      delOneBasket.addEventListener('click', () => {
        count--;
        basketQuantity.textContent = count;
        if (count <= 0) {
          delOneBasket.style.display = 'none';
          basketQuantity.style.display = 'none';
        }
      });
    });
  }
export default dishBasketCounter;