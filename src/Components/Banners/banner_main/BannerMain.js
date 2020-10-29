import React from "react";
import Slider from "../Slider/Slider";
import BannerImage1 from "../../../assets/image/banner/banner2-1.jpg"
import BannerImage2 from "../../../assets/image/banner/banner2-2.jpg"
function BannerMain (){
    return(
        <div className="tile is-ancestor height-90 half-space">
            <div className="tile is-parent">
                <div className="tile is-child box width-30">
                   slider
                </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child   is-paddingless">
                    <img className="banner-main-img radius-7px" src={BannerImage1}/>
                </div>
                <div className="tile is-child   is-paddingless">
                    <img className="banner-main-img radius-7px" src={BannerImage2}/>
                </div>
            </div>
        </div>
    );
}

export default BannerMain;
