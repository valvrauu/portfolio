(function () {
    const carousel = document.querySelector('.carousel');
    const carouselBoxItems = document.querySelector('.carousel__box-items');
    const carouselListItems = document.querySelectorAll('.carousel__item');

    const carouselBtnLeft = carousel.querySelector('#btnLeft');
    const carouselBtnRight = carousel.querySelector('#btnRight');

    let maxPosition = Math.floor(carouselListItems.length / 2) * 100 / carouselListItems.length;
    let minPosition = maxPosition * -1;

    let valueOfEachPosition = 100 / carouselListItems.length;
    let currentPosition = 0;

    carouselBtnLeft.addEventListener('click', () => {
        if (currentPosition >= maxPosition) return;

        currentPosition += valueOfEachPosition;
        carouselBoxItems.style.transform = `translate(${currentPosition.toFixed(2)}%)`;

        toggleBtn();
    });

    carouselBtnRight.addEventListener('click', () => {
        if (currentPosition <= minPosition) return;

        currentPosition -= valueOfEachPosition;
        carouselBoxItems.style.transform = `translate(${currentPosition.toFixed(2)}%)`;

        toggleBtn();
    });

    function toggleBtn() {
        carouselBtnLeft.style.display = currentPosition >= maxPosition ? 'none' : 'block';
        carouselBtnRight.style.display = currentPosition <= minPosition ? 'none' : 'block';
    }
})();