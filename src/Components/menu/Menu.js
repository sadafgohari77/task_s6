import React from "react";

import "../../assets/css/monta.css"
import "../../assets/css/montav2.css"
import '../navbar/Navbar.css'
import './Menu.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarked} from '@fortawesome/free-solid-svg-icons';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {faPercent} from "@fortawesome/free-solid-svg-icons";
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {faCube} from "@fortawesome/free-solid-svg-icons";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

function Menu() {
    return (
        <div className="has-background-white half-padding is-paddingless-bottom ">
            <div className="m--control-container container is-fullhd  mobile-padding  is-paddingless-bottom">
                <div className="level">
                    <div className="level-right is-hidden-mobile">
                        <div className="tabs is-medium">
                            <ul className="text-size-12-n has-text-weight-bold">
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faBars}/>
                                        <span>دسته‌بندی کالاها</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faShoppingBasket}/>
                                        <span>سوپرمارکت</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faPercent}/>
                                        <span>نحفیف ها و پیشنهاد ها</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faChild}/>
                                        <span>دی جی کالای من</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faCube}/>
                                        <span >دی جی پلاس</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <FontAwesomeIcon icon={faSmile}/>
                                        <span>دی جی کلاب</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>سوالی دارید؟</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>فروشنده شوید</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="level-left is-flex slicer-navbar is-5 ">
                        <div className="column text-size-12-n is-10-mobile paddingless-top-mobile is-11-desktop">
                            <span className="is-hidden-desktop half-padding">
                                <FontAwesomeIcon icon={faMapPin}/>
                            </span>
                            <span>
                                لطفا شهر و استان خود را انتخاب کتید
                            </span>
                            </div>
                        <div className="column is-paddingless-right is-hidden-mobile">
                            <FontAwesomeIcon icon={faMapMarked}/>
                        </div>
                        <div className="column  is-hidden-desktop has-text-left paddingless-top-mobile">
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu ;