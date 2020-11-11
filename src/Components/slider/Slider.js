import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

import img1 from '../../assets/image/slider/1.jpg'
import img2 from '../../assets/image/slider/2.jpg'
import img3 from '../../assets/image/slider/4.jpg'
import img4 from '../../assets/image/slider/5.png'

import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "./Slider.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

const Slider = () => {
    return(
        <Swiper
            width={900}
            autoHeight={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{

                clickable: true }}
        >
                <div className="swiper-button-next"/>

                <SwiperSlide>
                    <img className="img-size-slider" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img-size-slider" src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img-size-slider" src={img4} />
                </SwiperSlide>
                <div className="swiper-button-prev"/>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}

export default Slider;