import React from 'react';

import "./BannerHeader.css";

import bannerHeader from '../../assets/image/banner/banner1.jpg';

function BannerHeader() {
    return (
        <div className="banner-header">
            <img className="img-header" src={ bannerHeader } alt="9999"/>
        </div>
    );
}

export default BannerHeader ;