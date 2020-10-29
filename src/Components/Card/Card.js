/**import React from "react";
import './Card.css'
const  Card= (props)=> {
    console.log(props)
    props.offerProductsArray.map( item =>  {
        return (
            <div className="card is-2">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <br/>
                    <div className="is-flex-row-end">
                        <div className="offer-box is-flex half-space-left">
                            <span className="has-text-centered text-subtitle has-text-weight-bold">50%</span>
                        </div>
                        <span className="text-dark-grey-n B2O4IBB-o-f text-subtitle">1,000,000 تومان</span>
                    </div>
                    <div className="is-flex-row-end">
                        <span>تومان  </span>
                    </div>
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>

        )
    }).join();
}

export default Card;


**/






