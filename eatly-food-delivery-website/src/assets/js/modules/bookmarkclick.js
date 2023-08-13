function bookmarkClick() {
  const svgs = document.querySelectorAll('.bookmarksvg');
  svgs.forEach(function (svg) {
    
    svg.addEventListener('click', function () {
      
      let circle = svg.querySelectorAll('.bookmark-circle');
      let path = svg.querySelectorAll('.bookmark-path');
      
      svg.classList.toggle('added');

      if (!svg.classList.contains('added')) {
        // Style Fill For circle---------
        circle.forEach(crc => {
          crc.style.fill = '#DBD9EE';
        })
        //Style Fill For path---------
        path.forEach(pth => {
          pth.style.fill = '#6C5FBC';
        })
        svg.style.cssText = `transform: scale(1); transition:0.2s ease;`;
        
      } else {
        // Style Fill For circle---------
        circle.forEach(crc => {
          crc.style.fill = '#6C5FBC';
        })
        //Style Fill For path---------
        path.forEach(pth => {
          pth.style.fill = '#DBD9EE';
        })
        svg.style.cssText = `transform: scale(1.1); transition:0.2s ease;`;
        
      }
      
    });
  });
}
export default bookmarkClick;
