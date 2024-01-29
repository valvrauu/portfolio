const menu = document.querySelector('.menu');

menu.addEventListener('click', function () {
    this.classList.toggle('menu--opened');
    this.setAttribute('aria-expanded', this.classList.contains('menu--opened'));
});