const callbackModal = () => {
    const bindModal = (triggersSelector, modalOverlaySelector, modalSelector, closeBtnSelector) => {
        const triggers = document.querySelectorAll(triggersSelector),
            modal = document.querySelector(modalSelector),
            modalOverlay = document.querySelector(modalOverlaySelector),
            close = document.querySelector(closeBtnSelector);

        // Модальное окно с animate.css
        const openModal = () => {
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
            modal.classList.add('animated', 'fadeIn');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
            document.body.style.overflow = '';
        };

        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        modalOverlay.addEventListener('click', e => {
            if (e.target === modalOverlay || modal) {
                closeModal();
            }
        });
    };

    bindModal('.callback-btn', '.modal-overlay', '.modal-callback', '.modal-callback .modal-close');
};

export default callbackModal;