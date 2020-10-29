import React from "react";
import "../../css/monta.css"
import '../navbars/Navbar.css'
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarked} from '@fortawesome/free-solid-svg-icons';

function Menu(){
    return (
        <div className="level has-background-white half-padding">
            <div className="level-right">
                <div className="tabs is-medium">
                    <ul className="text-size-12-n has-text-weight-bold">
                        <li><a>فروشنده شوید</a></li>
                        <li><a>سوالی دارید؟</a></li>
                        <li><a>دی جی کلاب</a></li>
                        <li><a>دی جی پلاس</a></li>
                        <li><a>دی جی کالای من</a></li>
                        <li><a>نحفیف ها و پیشنهاد ها</a></li>
                        <li><a>سوپرمارکت</a></li>
                        <li><a>دسته‌بندی کالاها</a></li>
                    </ul>
                </div>
            </div>
            <div className="level-left">
                <div className="level-item text-size-12-n"> لطفا شهر و استان خود را انتخاب کتید</div>
                <div className="level-item">
                    <FontAwesomeIcon icon={faMapMarked} />
                </div>
            </div>
        </div>

    );
}
export default Menu ;