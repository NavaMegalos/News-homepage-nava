const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('nav-menu');

openMenu.addEventListener('click',  () => {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});