/* Menu Hamburguer */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#nav-bar');
const links = document.querySelectorAll('#list-bar a');

// Abrir e fechar o menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar o menu ao clicar em uma opção
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});