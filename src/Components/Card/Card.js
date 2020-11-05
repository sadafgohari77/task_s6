import React from "react";
import './Card.css'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import Timer from "../Timer/Timer";
let  startDate = new Date().getTime() + 31536000000;

const  Card = (props) => {
    let priceafterdiscount=0;
    console.log(props)
    props.offerProductsArray.map( item => {
        if(props.offerProductsArray.discount1="0"){
            priceafterdiscount=( props.offerProductsArray.discount1 * props.offerProductsArray.price ) /100 ;
        } else {
            priceafterdiscount = props.offerProductsArray.price;
        }
        return (
            <div className="card is-2">
                {
                    (props.offerProductsArray.addressImage != "") && (props.offerProductsArray.sendFast == "true") ?
                        `<div className="card-image">
                                   <figure className="image is-3by4">
                                          <img src={require(props.offerProductsArray.addressImage)}/>
                                   </figure>
                                  <FontAwesomeIcon  className="is-flex-row-end icon-fast-send"  icon={faAmbulance}/>
                            </div>
                            ` : `
                            <div className="card-image">
                                  <figure className="image is-3by4">
                                       <img src={require(props.offerProductsArray.addressImage)}/>
                                  </figure>
                            </div>`
                }
                <div className="content">
                    {
                        (props.offerProductsArray.name != "") ?
                            `<div className="space-top-desktop grey-color">
                                          ${props.offerProductsArray.name}
                                            <br/>
                                      </div>` : ""
                    }
                    {
                        ((props.offerProductsArray.discount != 0) && (props.offerProductsArray.price != "")) ?
                            ` <div>
                                         <div className="column is-flex-row-end is-paddingless-right ">
                                             <span className="dark-grey-color line-through" style="font-size: 11px;">
                                                 ${props.offerProductsArray.price}
                                             </span>
                                             <div className="offer-box is-flex half-space-left">
                                                  <span className="has-text-centered is-flex-row-center has-text-weight-bold"
                                                         style="font-size: 11px;font-weight: bold;padding-right: 3px;">
                                                         %${props.offerProductsArray.discount }
                                                 </span>
                                             </div>
                                         </div>
                                          <div className="is-flex-row-end">
                                                <span className="text-h1 has-text-weight-bold half-space-left">
                                                   ${priceafterdiscount}
                                                   تومان
                                                </span>
                                          </div>
                                    </div>` : `
                                    <div className="is-flex-row-end">
                                         <span className="text-h1 has-text-weight-bold half-space-left">
                                            ${props.offerProductsArray.price}
                                         </span>
                                         <span>
                                         تومان
                                         </span>
                                     </div>`
                    }
                    {
                        (props.offerProductsArray.time != "0") ?
                            `<div class=" is-flex-row-end is-paddingless-right ">
                                         <Timer startDate={startDate} />
                            </div>` : ""
                    }
                </div>
            </div>
        )
    }).join('')
}
export default Card;


