import  Swiper from 'swiper';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

// Install modules
SwiperCore.use([Navigation, Pagination,Autoplay]);
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.swiper-container');

    sliders.forEach((slider) => {      
        const settingobject = JSON.parse(slider.dataset.settings); 
        if (slider) {
            new Swiper(slider, settingobject);
        }
    });
});

