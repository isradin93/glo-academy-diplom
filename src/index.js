import "@babel/polyfill";
import scrolling from "./modules/scrolling";
import aboutCompanyCounter from "./modules/aboutCompanyCounter";
import callbackModal from "./modules/callbackModal";
import feedbackModal from "./modules/feedbackModal";
import sliderCarousel from "./modules/sliderCarousel";
import autoSlider from "./modules/autoSlider";
import accordion from "./modules/accordion";
import sendForms from "./modules/sendForms";


window.addEventListener('DOMContentLoaded', () => {
    scrolling('.pageup');
    aboutCompanyCounter();
    callbackModal();
    feedbackModal();
    sliderCarousel();
    autoSlider();
    accordion();
    sendForms();
});