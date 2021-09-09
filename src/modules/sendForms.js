const sendForm = () => {
    const errorMsg = 'Что-то пошло не так',
        successMsg = 'Спасибо! Мы свяжимся с вами в ближайшее время',
        responseWindow = document.getElementById('responseMessage'),
        modalOverlay = document.querySelector('.modal-overlay');
    const forms = [...document.querySelectorAll('div')].filter(el => /^(callback|feedback|application)$/.test(el.id));
    const statusMessage = document.querySelector('div.modal-content'),
        tel = document.querySelector('[name="tel"]'),
        name = document.querySelector('[name="fio"]'),
        text = document.querySelector('[placeholder="Ваше сообщение"]');

    tel.addEventListener('input', e => {
        const target = e.target;
        target.value = target.value.replace(/[^+0-9]/g, '');
    });

    name.addEventListener('input', e => {
        const target = e.target;
        target.value = target.value.replace(/[^а-яА-Я ]/g, '');
    });

    if (text) {
        text.addEventListener('input', e => {
            const target = e.target;
            target.value = target.value.replace(/[^а-яА-Я0-9 ,.!]/g, '');
        });
    }

    const addResponse = () => {
        responseWindow.style.cssText = `
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

    addResponse();

    forms.forEach(form => form.addEventListener('submit', e => {
        e.preventDefault();
        const formFields = form.querySelectorAll('.form-control');

        const body = {};
        for (let i = 0; i < formFields.length; i++) {
            body[formFields[i].attributes.name.value] = formFields[i].value;
        }

        const responseSuccess = () => {
            statusMessage.textContent = successMsg;
        };

        const responseFailure = resStatus => {
            statusMessage.textContent = errorMsg;
            throw new Error(`response.status === ${resStatus}`);
        };

        const responseHandler = async() => {
            const response = await fetch('./server.php', {
                method: 'POST',
                body: JSON.stringify(body)
            });

            form.style.display = 'none';
            responseWindow.style.display = 'block';
            if (!response.ok) {
                return responseFailure(response.status);
            } else {
                return responseSuccess();
            }
        };

        responseHandler()
            .catch(err => {
                console.error(err);
            });

        formFields.forEach(el => el.value = '');
    }));

    document.addEventListener('click', e => {
        if (e.target === modalOverlay || e.target.closest('.button.btn.fancyClose')) {
            e.preventDefault();
            responseWindow.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    });
};

export default sendForm;