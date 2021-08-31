const scrolling = () => {

    const links = document.querySelectorAll('[href^="#"]'),
        speed = 0.6;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const hightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            const step = time => {
                if (start === null) {
                    start = time;
                }

                const progress = time - start,
                    r = (toBlock < 0 ? Math.max(hightTop - progress / speed, hightTop + toBlock) :
                        Math.min(hightTop + progress / speed, hightTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r !== hightTop + toBlock) {
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