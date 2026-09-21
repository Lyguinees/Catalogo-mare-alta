// Alterna o menu em telas pequenas e atualiza os atributos de acessibilidade.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu depois que uma pessoa escolhe uma seção.
navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
    });
});