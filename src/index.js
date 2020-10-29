import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BannerMain from "./Components/Banners/banner_main/BannerMain";
import Navbar from "./Components/navbars/Navbar";
import Menu from "./Components/menus/Menu";
import BannerHeader from "./Components/Banners/banner_header/BannerHeader";
import { products } from '../src/assets/data/products';

const allProducts = JSON.parse(JSON.stringify(products));
console.log(allProducts);

const offerProductsArray =allProducts.filter(item => item.type== "offerProduscts")
console.log(offerProductsArray)
ReactDOM.render(
        <React.StrictMode>
            <Navbar />
            <Menu />
            <BannerHeader />
            <BannerMain />
            <Card{...offerProductsArray} />
        </React.StrictMode>
    ,
  document.getElementById('root')
);

