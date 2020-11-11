import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./PanelProducts.css"
import "../../assets/css/monta.css"
import "../../assets/css/montav2.css"

import Card from "../Card/Card";


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

const PanelProducts = (props) => {
    const card = props.products.map(item => {
        return (
            <SwiperSlide>
                <div className="card-products space-16-right-n is-mobile">
                     <Card{...item} />
                </div>
            </SwiperSlide>
        )
    })

    return(
        <div className="panel-products">
            <div className="is-flex">
                <div className="name-products">{props.nameCategory}</div>
                <div className="is-fullwidth column border-category"/>
            </div>
            <div className="space-8-top-n" >
                <Swiper
                    width={260}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation= {{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                >
                    <div className="swiper-button-next is "/>
                         {(card)? card:""}
                    <div className="swiper-button-prev"/>
                </Swiper>
            </div>
        </div>
    )
}

export default PanelProducts