import React from 'react';
import bannerHeader from '../../../assets/image/banner/banner1.jpg';
import "../Banner.css";
function BannerHeader(){
    return (
        <div className="banner-header is-paddingless-bottom">
            <img className="img-header" src={ bannerHeader } alt="9999"/>
        </div>
    );
}
export default BannerHeader ;