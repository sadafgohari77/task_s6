import React from "react"
import ScrollUpButton from "react-scroll-up-button";

import "../../assets/css/montav2.css"
import "../../assets/css/monta.css"
import "./BackToTop.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
     return(
         <div className="columns is-flex-column-center space-8-top-n is-hidden-mobile">
             <div className="column slicer-back-to-top"/>
             <div className="column back-to-up is-flex is-marginless">
                <ScrollUpButton>
                     <FontAwesomeIcon className="is-large is-marginless" icon={faArrowAltCircleUp}/>
                    <span className="text-size-20-n">برگشت به بالا</span>
                </ScrollUpButton>
             </div>
         </div>
     )
}

export default BackToTop