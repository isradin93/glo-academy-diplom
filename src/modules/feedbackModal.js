const feedbackModal = () => {
    const modalWindow = document.getElementById('feedback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        servicesBtn = document.querySelector('.button-services');

    const addStylesModal = () => {
        modalWindow.style.cssText = `
            display: none;
            position: fixed;
            top: 160%;
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

    // Модальное окно с request anim. frame
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

    servicesBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        modalWindow.style.display = 'block';
        idInterval = requestAnimationFrame(modalAppear);
    });

    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay || e.target.closest('.modal-close')) {
            modalOverlay.style.display = 'none';
            modalWindow.style.display = 'none';
        }
    });
};

export default feedbackModal;