const aboutCompanyCounter = () => {

    const num1 = document.querySelector('span#num1'),
        num2 = document.querySelector('span#num2'),
        num3 = document.querySelector('span#num3'),
        num4 = document.querySelector('span#num4'),
        windowInnerHeight = window.innerHeight;

    const getYearsOfWork = started => {
        const dateNow = new Date().getFullYear();
        return dateNow - started;
    };

    const nums = [num1, num2, num3, num4];

    const counterRoller = () => {
        for (let i = 0; i < nums.length; i++) {
            const value = [+num1.dataset.value,
                getYearsOfWork(+num2.dataset.value), +num3.dataset.value, +num4.dataset.value
            ];
            let count = 0,
                counterId;
            const animateCounter = () => {
                counterId = requestAnimationFrame(animateCounter);
                count += value[i] / 30;
                if (count < value[i]) {
                    nums[i].textContent = Math.round(count);
                } else {
                    cancelAnimationFrame(counterId);
                    nums[i].textContent = value[i];
                    count = 0;
                }
            };

            counterId = requestAnimationFrame(animateCounter);
        }
    };

    let breakCounter = 0;

    window.addEventListener('scroll', () => {

        if ((windowInnerHeight > num1.getBoundingClientRect().y) &&
            (num1.getBoundingClientRect().y > 0) &&
            breakCounter !== 1) {
            counterRoller();
            breakCounter = 1;
        }

        if ((windowInnerHeight < num1.getBoundingClientRect().y) &&
            breakCounter !== 0 ||
            (num1.getBoundingClientRect().y < 0) &&
            breakCounter !== 0) {
            breakCounter = 0;
        }
    });
};

export default aboutCompanyCounter;