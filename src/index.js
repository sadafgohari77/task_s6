import React from 'react';
import ReactDOM from 'react-dom';


import BannerMain from "./Components/bannernain/BannerMain";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import BannerHeader from "./Components/banner_header/BannerHeader";
import Offerproduct from "./Components/offerproduct/OfferProduct";
import OfferSuperMarket from "./Components/offersupermarket/OfferSuperMarket";
import OfferAdvertising from "./Components/offeradvertising/OfferAdvertising";
import PanelProducts from "./Components/products/PanelProducts";
import BackToTop from "./Components/backtotop/BackToTop";
import Footer from "./Components/footer/Footer";
import { products } from '../src/assets/data/products';

import './index.css'
const allProducts = JSON.parse(JSON.stringify(products));
const offerProducts = allProducts.filter(item => item.type=== "offerProducts")
const offerSuperMarkets = allProducts.filter(item => item.type=== "offerSuperMarket")
const book = allProducts.filter(item => item.type === "book")
const mobile = allProducts.filter(item => item.type === "mobile")
const laptop =allProducts.filter(item=>item.type ==="laptop")
const bannerOfferAdvertisingOne =[{imageAddress:"1.jpg"},{imageAddress:"2.jpg"},{imageAddress:"3.jpg"},{imageAddress:"4.jpg"}];
const bannerOfferAdvertisingTwo =[{imageAddress:"5.jpg"},{imageAddress:"6.jpg"}];
const bannerOfferAdvertisingThree =[{imageAddress:"7.jpg"},{imageAddress:"8.jpg"}];
const footerImage=[{imageAddress:"f1.PNG"},{imageAddress:"f2.PNG"},{imageAddress:"f3.PNG"},{imageAddress:"f4.PNG"},{imageAddress:"f5.PNG"}]
const product= {
  book:"کتاب",
  mobile:"گوشی موبایل" ,
  labtop:"لب تاپ"
}
let show=false;
ReactDOM.render(
        <React.StrictMode>
            <BannerHeader/>
            <Navbar/>
            <Menu/>
            <div className=" column is-12-mobile has-background-white-ter">
                <div className="m--control-container container is-fullhd space-14-mobile-n  is-paddingless-bottom">
                    <BannerMain />
                    <Offerproduct offerProducts={offerProducts}/>
                    <OfferAdvertising  offer={bannerOfferAdvertisingOne} />
                    <OfferSuperMarket offerSuperMarket={offerSuperMarkets} />
                    <OfferAdvertising offer={bannerOfferAdvertisingTwo}/>
                    <PanelProducts products={book} nameCategory={product.book}  />
                    <OfferAdvertising offer={bannerOfferAdvertisingThree}/>
                    <PanelProducts products={mobile} nameCategory={product.mobile}  />
                    <PanelProducts products={laptop} nameCategory={product.labtop} />
                </div>
            </div>
            <BackToTop/>
            <Footer footerImage={footerImage}/>
        </React.StrictMode>
    ,
  document.getElementById('root')
);

