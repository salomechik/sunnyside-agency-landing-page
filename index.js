const burgerMenu = document.querySelector('.burger-menu');
const navigationMenu = document.querySelector('.navigation');

burgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
  console.log("sdsd")
});