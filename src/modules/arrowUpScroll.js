const arrowUpScroll = () => {
    const arrow = document.querySelector('.up'),
        arrowPoint = document.getElementById('services'),
        relativeHeaderHight = document.querySelector('.header.relative').getBoundingClientRect().height,
        topPage = document.querySelector('.top-slider.white.text-center.relative');
    arrow.style.display = 'none';

    // Появления стрелки
    let breakCounter = 0;
    window.addEventListener('scroll', () => {
        if ((arrowPoint.getBoundingClientRect().y > 0) &&
            breakCounter !== 1) {
            arrow.style.display = 'none';
            breakCounter = 1;
        }
        if ((arrowPoint.getBoundingClientRect().y < (0 + relativeHeaderHight)) &&
            breakCounter !== 0) {
            arrow.style.display = 'block';
            breakCounter = 0;
        }
    });

    // Поведение стрелки при клике
    arrow.addEventListener('click', () => {
        topPage.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

export default arrowUpScroll;