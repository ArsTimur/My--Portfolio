
function priceRanger() {
    var priceRange = document.getElementById('price-range');
  var priceNums = document.querySelectorAll('.price-nums li');
  
  priceRange.addEventListener('input', function() {
    var value = Math.round(this.value); // Округляем значение до ближайшего целого числа
    this.value = value; // Присваиваем округленное значение обратно ползунку
    
   
    priceNums.forEach(function(priceNum, index) {
      if (index === value) {
        priceNum.classList.add('active-selected');
      } else {
        priceNum.classList.remove('active-selected');
      }
    });
  });

}
export default priceRanger