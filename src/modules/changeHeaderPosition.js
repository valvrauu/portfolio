const header = document.querySelector('.header');
const body = document.body;

window.addEventListener('scroll', () => {
    const bodyPaddingTop = parseFloat(window.getComputedStyle(body).paddingTop);
    const scrollY = window.scrollY;

    scrollY >= bodyPaddingTop ?
    header.classList.add('header--changePosition') :
    header.classList.remove('header--changePosition');
});