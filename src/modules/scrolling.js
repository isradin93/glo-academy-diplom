const scrolling = upSelector => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 550) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf

    const links = document.querySelectorAll('[href^="#"]'),
        speed = 0.5;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const heightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            const step = time => {
                if (start === null) {
                    start = time;
                }

                const progress = time - start,
                    r = (toBlock < 0 ? Math.max(heightTop - progress / speed, heightTop + toBlock) :
                        Math.min(heightTop + progress / speed, heightTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r !== heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            };

            requestAnimationFrame(step);
        });
    });
};

export default scrolling;