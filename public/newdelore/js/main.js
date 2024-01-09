$(document).ready(function() {
  $('.navbar__toggle-menu').click(function() {
      $('.navbar__toggle-menu').toggleClass('opened');
  });
});
const MenuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

MenuButton.addEventListener('click', () => {
  document.body.classList.toggle('body-hide-scroll');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });

window.addEventListener('click', (event) => {
if (event.target == menu) {
  menu.style.display = 'none';
}
});
