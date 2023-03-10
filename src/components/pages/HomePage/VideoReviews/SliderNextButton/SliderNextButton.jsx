//импорт модулей
import React from 'react';
import { useSwiper } from 'swiper/react';

const SliderNextButton = () => {
    const swiper = useSwiper();

    return (
        <div
            onClick={() => swiper.slideNext()}
        >
            <div className="swiper-button-next video-review-slider-button-next"></div>
        </div>
    );
}

export default SliderNextButton;