import React from "react";
import './Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import Timer from "../Timer/Timer";
let  startDate = new Date().getTime() + 31536000000;

const  Card = (props) => {
    let priceafterdiscount=0;
    let item =props;
   console.log(item,"item")
        if(item.discount=="0"){
            priceafterdiscount=( item.discount * item.price ) /100 ;
        } else {
            priceafterdiscount = item.price;
        }
        return (
            <div className="column is-3">
             <div className="card ">
                {
                    (item.addressImage != "") && (item.sendFast == "true") ?
                        <div className="card-image">
                                   <figure className="image is-3by4">
                                          <img src={item.addressImage}/>
                                   </figure>
                                  <FontAwesomeIcon  className="is-flex-row-end icon-fast-send"  icon={faAmbulance}/>
                            </div>
                             :
                            <div className="card-image">
                                  <figure className="image is-3by4">
                                       <img src={item.addressImage}/>
                                  </figure>
                            </div>
                }
                <div className="content">
                    {
                        (item.name != "") ?
                            <div className="space-top-desktop grey-color">
                                          {item.name}
                                            <br/>
                                      </div> : ""
                    }
                    {
                        ((item.discount != 0) && (item.price != "")) ?
                             <div>
                                         <div className="column is-flex-row-end is-paddingless-right ">
                                             <span className="dark-grey-color line-through price" >
                                                 {item.price}
                                             </span>
                                             <div className="offer-box is-flex half-space-left">
                                                  <span className="has-text-centered is-flex-row-center has-text-weight-bold discount">
                                                         %{item.discount }
                                                 </span>
                                             </div>
                                         </div>
                                          <div className="is-flex-row-end">
                                                <span className="text-h1 has-text-weight-bold half-space-left">
                                                   ${priceafterdiscount}
                                                   تومان
                                                </span>
                                          </div>
                                    </div> :
                                    <div className="is-flex-row-end">
                                         <span className="text-h1 has-text-weight-bold half-space-left">
                                            {item.price}
                                         </span>
                                         <span>
                                         تومان
                                         </span>
                                     </div>
                    }
                    {
                        (item.time != "0") ?
                            <div class=" is-flex-row-end is-paddingless-right">
                                         <Timer  startDate={startDate} />
                            </div> : ""
                    }
                </div>
            </div>
            </div>
        )
}
export default Card;


