const autoSlider = () => {
    const sliderContainer = document.querySelector('.top-slider'),
        slidesArr = [...sliderContainer.querySelectorAll('div.item.relative')];

    let count = 0;

    const slideShow = () => {
        if (count === slidesArr.length) {
            count = 0;
        }

        slidesArr.forEach(el => {

            if (el === slidesArr[count]) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });

        count++;
    };

    slideShow();

    setInterval(() => {
        slideShow();
    }, 3000);
};

export default autoSlider;