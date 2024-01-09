// Получаем элементы
const MenuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const AllServBtn = document.getElementById('all-servers-btn');
const OneServBtn = document.getElementById('1-server-btn');
const SecondServBtn = document.getElementById('2-server-btn');
const AllServ = document.getElementById('all-servers');
const OneServ = document.getElementById('1-server');
const SecondServ = document.getElementById('2-server');

// Изменяем отображение модального окна и страницы при нажатии на кнопку
MenuButton.addEventListener('click', () => {
document.body.classList.toggle('body-hide-scroll');
menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

// Обрабатываем нажатие на кнопку "Все призы"
AllServBtn.addEventListener('click', () => {
    AllServBtn.classList.add('nuxt-link-exact-active'); 
OneServBtn.classList.remove('nuxt-link-exact-active');  
SecondServBtn.classList.remove('nuxt-link-exact-active'); 
    OneServ.style.display = 'none';
    SecondServ.style.display = 'none';
AllServ.style.display = 'block';
});

OneServBtn.addEventListener('click', () => {
OneServBtn.classList.add('nuxt-link-exact-active'); 
AllServBtn.classList.remove('nuxt-link-exact-active');  
SecondServBtn.classList.remove('nuxt-link-exact-active');     
AllServ.style.display = 'none';
SecondServ.style.display = 'none';
OneServ.style.display = 'block';
});

SecondServBtn.addEventListener('click', () => {
SecondServBtn.classList.add('nuxt-link-exact-active'); 
AllServBtn.classList.remove('nuxt-link-exact-active');  
OneServBtn.classList.remove('nuxt-link-exact-active');  
AllServ.style.display = 'none';
OneServ.style.display = 'none';
SecondServ.style.display = 'block';
    });

// Обрабатываем нажатие вне модального окна, чтобы его скрыть
window.addEventListener('click', (event) => {
if (event.target === menu) {
    menu.style.display = 'none';
}
});

// Обрабатываем нажатие на кнопку "Гамбургер" в навигации
$('.navbar__toggle-menu').click(function() {
$(this).toggleClass('opened');
});