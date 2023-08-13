function toIndex(){
    const logoSvg = document.querySelector('.logo-svg');

    logoSvg.addEventListener('click', () => {
        window.location.href = "index.html";
    })
  }

  export default toIndex;