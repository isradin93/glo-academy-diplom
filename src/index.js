import scrolling from "./modules/scrolling";
import aboutCompanyCounter from "./modules/aboutCompanyCounter";


window.addEventListener('DOMContentLoaded', () => {
    scrolling('.pageup');
    aboutCompanyCounter();
});