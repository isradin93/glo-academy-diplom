const accordion = () => {
    const accordeonContainer = document.querySelector('.accordeon'),
        accordeonElements = accordeonContainer.querySelectorAll('.element');

    const closeByDefault = () => {
        accordeonElements[0].classList.remove('active');
        accordeonElements.forEach(el => el.querySelector('.element-content').style.display = 'none');
    };
    closeByDefault();

    accordeonContainer.addEventListener('click', e => {
        accordeonElements.forEach(el => {
            const elContent = el.querySelector('.element-content');
            if (e.target === el.querySelector('.title')) {
                el.classList.toggle('active');
                elContent.style.display =
                    elContent.style.display === 'block' ?
                    'none' : 'block';
            } else {
                el.classList.remove('active');
                elContent.style.display = 'none';
            }
        });
    });

};
export default accordion;