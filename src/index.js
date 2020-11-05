import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BannerMain from "./Components/Banners/banner_main/BannerMain";
import Navbar from "./Components/navbars/Navbar";
import Menu from "./Components/menus/Menu";
import BannerHeader from "./Components/Banners/banner_header/BannerHeader";
import Card from "./Components/Card/Card";

import { products } from '../src/assets/data/products';
const allProducts = JSON.parse(JSON.stringify(products));
const offerProductsArray = allProducts.filter(item => item.type== "offerProduscts")
let  logo = {addressimage : "../../assets/image/logo/Digikala-logo.png",textimage : "logo Digikala"};

ReactDOM.render(
        <React.StrictMode>
            <Navbar{...logo} />
            <Menu />
            <BannerHeader />
            <BannerMain />
            {offerProductsArray.map(item => {
                    return <Card{...item} />
                }
            )}
            <Card{...offerProductsArray} />
        </React.StrictMode>
    ,
  document.getElementById('root')
);

