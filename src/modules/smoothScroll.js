const header = document.querySelector('.header');
const headerNavList = header.querySelectorAll('.nav__list')[1];
const headerNavLinks = headerNavList.querySelectorAll('.nav__link');

[...headerNavLinks].map(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        if (targetId === '#') return window.scroll({ top: 0, behavior: 'smooth' });

        const targetElement = document.querySelector(targetId);
        const headerHeight = header.offsetHeight;
        const windowHeight = window.innerHeight;

        const targetOffset = targetElement.offsetTop - headerHeight;
        const scrollTo = targetOffset - (windowHeight - targetElement.offsetHeight) / 2;

        window.scroll({
            top: scrollTo,
            behavior: 'smooth'
        });
    });
});