const sliderCarousel = () => {
    const slides = document.querySelectorAll('.services-elements>div>div'),
        modalWindow = document.getElementById('application'),
        modalOverlay = document.querySelector('.modal-overlay'),
        linkPopup = document.querySelectorAll('.services-elements>div>div>div>a');

    const prev = document.querySelector('.services-arrow>.arrow-left');
    const next = document.querySelector('.services-arrow>.arrow-right');


    const responsive = [{
            breakpoint: 1240,
            slidesToShow: 3
        },
        {
            breakpoint: 991,
            slidesToShow: 2
        },
        {
            breakpoint: 767,
            slidesToShow: 1
        }
    ];

    const responsiveSlider = () => {
        if (window.innerWidth > responsive[1].breakpoint) {
            return responsive[0].slidesToShow;
        }
        if (window.innerWidth < responsive[1].breakpoint &&
            window.innerWidth > responsive[2].breakpoint) {
            return responsive[1].slidesToShow;
        }
        if (window.innerWidth < responsive[2].breakpoint) {
            return responsive[2].slidesToShow;
        }
    };

    let start,
        finish;
    const setNumSlides = () => {
        start = 0;
        finish = start + responsiveSlider();
    };

    setNumSlides();

    const hideSlide = () => {
        for (let i = start; i < finish; i++) {
            slides[i].style.display = 'block';
        }
        if (start > 0) {
            for (let i = 0; i < start; i++) {
                slides[i].style.display = 'none';
            }
        }
        if (finish <= slides.length) {
            for (let i = finish; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
        }
    };

    hideSlide();

    window.addEventListener('resize', () => {
        setNumSlides();
        hideSlide();
    });

    prev.addEventListener('click', () => {
        --start;
        --finish;
        if (start < 0) {
            finish = slides.length;
            start = finish - responsiveSlider();
        }

        hideSlide();
    });

    next.addEventListener('click', () => {
        ++start;
        ++finish;
        if (finish > slides.length) {
            start = 0;
            finish = start + responsiveSlider();
        }

        hideSlide();
    });

    const addStylesModal = () => {
        modalWindow.style.cssText = `
            display: none;
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 460px;
            max-width: 100%;
            background: #fff;
            padding: 55px 25px 35px;
            z-index: 99;
        `;
    };

    addStylesModal();

    let idInterval,
        itemDistance = 200;

    const modalAppear = () => {
        idInterval = requestAnimationFrame(modalAppear);
        itemDistance -= 10;
        if (itemDistance < 20) {
            itemDistance = 200;
            return cancelAnimationFrame(idInterval);
        } else {
            modalWindow.style.top = `${itemDistance}%`;
        }
    };

    linkPopup.forEach(el => el.addEventListener('click', e => {
        modalOverlay.style.display = 'block';
        modalWindow.style.display = 'block';
        modalWindow.querySelector('#applicationInput').value = e.target.dataset.application;
        idInterval = requestAnimationFrame(modalAppear);
    }));

    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay || e.target.closest('.modal-close')) {
            modalOverlay.style.display = 'none';
            modalWindow.style.display = 'none';
        }
    });
};

export default sliderCarousel;