import React from "react";

import './Card.css'
import "../../assets/css/monta.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmbulance} from '@fortawesome/free-solid-svg-icons';
import Timer from "../Timer/Timer";

let startDate = new Date().getTime() + 31536000000;

const Card = (props) => {
    let priceAfterDiscount = 0;
    let item = props;

    if (item.discount !== "0") {
        priceAfterDiscount =  item.price - ( (item.discount * item.price) / 100);

    } else {
        priceAfterDiscount = item.price;
    }

    return (
        <div className="card box">
            {
                (item.addressImage !== "")  ?
                    <div>
                         <div className="card-image">
                             <div className="products-image">
                                <img src={ require(`../../assets/image/${item.type}/${item.addressImage}`).default}/>
                             </div>
                         </div>
                        {
                            (item.sendFast === "true") ?
                                <div className="is-flex-row-end space-24-right-n">
                                    <FontAwesomeIcon className="icon-fast-send" icon={faAmbulance}/>
                                </div>
                            : ""
                        }
                    </div>
                : ""
            }
            <div className="content">
                {
                    (item.name !== "") ?
                        <div className="space-top-desktop grey-color height-40">
                            {item.name}
                            <br/>
                        </div> : ""
                }
                {
                    ( (item.discount !== "0") && (item.price !== "") ) ?
                        <div>
                            <div className="column is-flex-row-end is-paddingless-right">
                                 <span className="dark-grey-color line-through price is-padding-right">
                                     {item.price}
                                 </span>
                                 <div className="offer-box is-flex ">
                                      <span
                                          className="has-text-centered is-flex-row-center has-text-weight-bold discount">
                                             %{item.discount}
                                     </span>
                                 </div>
                            </div>
                            <div className="is-flex-row-end">
                                <span className="text-h1 has-text-weight-bold half-space-left">
                                    {priceAfterDiscount}
                                    <span className="padding-right">
                                     تومان
                                    </span>
                                </span>
                            </div>
                        </div> : ""
                }
                {
                    ( (item.price !== "0") && (item.discount === "0") ) ?
                        <div className="is-flex-row-end">
                            <span className="text-h1 has-text-weight-bold half-space-left">
                                {item.price}
                            </span>
                            <span>
                               تومان
                            </span>
                        </div>
                        : ""
                }
                {
                    (item.time !== "0") ?
                        <div className="is-flex-row-end is-paddingless-right">
                            <Timer startDate={startDate}/>
                        </div> : ""
                }
            </div>
        </div>

    );
}

export default Card;


