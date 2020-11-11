import React from "react";

import Slider from "../slider/Slider";
import "./BannerMain.css"
import BannerImage1 from "../../assets/image/banner/banner2-1.jpg"
import BannerImage2 from "../../assets/image/banner/banner2-2.jpg"

function BannerMain (){
    return(
        <div className="tile is-ancestor is-fullwidth ">
            <div className="tile is-parent is-paddingless ">
                <div className="tile is-child is-mobile-padding-bottom-10 ">
                    <Slider />
                </div>
            </div>
            <div className="tile is-4 is-vertical is-parent is-hidden-mobile">
                <div className="tile is-child is-paddingless" >
                    <a href="https://www.digistyle.com/?utm_source=Digikala&utm_medium=lftbnr&utm_campaign=Fallstyle&promo_name=%D8%A7%D8%B3%D8%AA%D8%A7%DB%8C%D9%84+%D9%BE%D8%A7%DB%8C%DB%8C%D8%B2%DB%8C%21&promo_position=home_left_banner_bottom&promo_creative=50190&bCode=50190">
                        <img className="banner-main" src={BannerImage1}/>
                    </a>
                </div>
                <div className="tile is-child   is-paddingless">
                    <a href="https://www.digikala.com/digiclub/">
                        <img className="banner-main" src={BannerImage2}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BannerMain;
