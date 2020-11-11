import React from "react";

import '../../assets/css/monta.css'
import '../../assets/css/montav2.css'
import './OfferAdvertising.css'

const OfferAdvertising =(props) =>{
    let countAD=props.offer.length;
    return(
        <div className="columns space-4-top-n is-flex">
            {
                props.offer.map(item =>{

                    return(
                         --countAD%2==0  ?
                              <div className="column ">
                                <img className="radius-15" src={require(`../../assets/image/offeradvertising/${item.imageAddress}`).default}/>
                              </div>
                            :
                            <div className="column is-hidden-mobile">
                                <img className="radius-15" src={require(`../../assets/image/offeradvertising/${item.imageAddress}`).default}/>
                            </div>

                    )

                })

            }
        </div>
    );
}

export default OfferAdvertising;