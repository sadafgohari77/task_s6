import React,{useState,useEffect} from 'react'

import Card from "../Card/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

import '../../assets/css/montav2.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './OfferSuperMarket.css'
import '../../assets/css/monta.css'

import logo from '../../assets/image/offerSuperMarket/93723234.png'

SwiperCore.use([Navigation, Pagination]);

const OfferSuperMarket = (props) => {
    const [isMobile,setIsMobile]=useState(false)
    let width;

    useEffect(()=> {
        width =window.innerWidth;
      if (width<=375){
        setIsMobile(true);
    }})

    const card = props.offerSuperMarket.map(item => {
        return (
            <SwiperSlide>
                <Card{...item} />
            </SwiperSlide>
        )
    })

    return(
        <div className="columns is-flex has-background-success space-4-top-n">
            <div className="column is-2 space-4-right-n is-flex-column-center is-hidden-mobile">
                <div>
                    <img className="size-logo-offer" src={logo}/>
                </div>
                <div className="button show-all">
                    <a className="text-white-n" href="https://www.digikala.com/fresh-offers/">
                        نمایش همه
                    </a>
                </div>
            </div>
            <div className="column is-10 is-12-mobile is-flex s ">
                <Swiper
                    width={250}
                    slidesPerView={1}
                    spaceBetween={20}
                    Navigation= {{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}

                >
                    <div className="swiper-button-next is-hidden-mobile"/>
                    {isMobile &&
                        <SwiperSlide >
                            <div className="column is-1 space-4-right-n is-flex-column-center ">
                                <div>
                                    <img className="size-logo-offer" src={logo}/>
                                </div>
                                <div className="button show-all">
                                    <a className="text-white-n" href="https://www.digikala.com/fresh-offers/">
                                    نمایش همه
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    }
                    {(card)? card:""}
                    <div className="swiper-button-prev is-hidden-mobile"/>
                </Swiper>
            </div>
        </div>
    )
}

export default OfferSuperMarket;