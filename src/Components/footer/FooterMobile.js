import React from 'react'

import bazar from "../../assets/image/footer/1.png";
import sibapp from "../../assets/image/footer/2.png";
import googlePlay from "../../assets/image/footer/3.png";
import instgramFollow from "../../assets/image/footer/digikala_instagram.PNG"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const FooterMobile =()=>{
    return(
      <div className="is-hidden-desktop">
          <div className="is-hidden-desktop liner">
              <div className="has-text-grey text-size-16-n has-text-centered half-padding-bottom">تخفیف های جذاب را از اپلیکیشن دنبال کتید!</div>
              <div className="box-log-app">
                  <img className="app-logo" src={bazar} />
                  <img className="app-logo" src={sibapp}/>
                  <img className="app-logo" src={googlePlay}/>
              </div>
          </div>
          <div className="is-hidden-desktop liner space-12-top-n">
              <div className="has-text-grey text-size-16-n has-text-centered half-padding-bottom">از تخفیف ها و جدیدترین های دیجی کالا با خبر شوید!</div>
              <div className="field">
                  <div className="control field has-icons-right half-space ">
                                    <span className="icon is-medium  is-flex-row-start">
                                          <FontAwesomeIcon className="space-8-bottom-n" icon={faEnvelope}/>
                                    </span>
                      <input className="input input-search has-background-link-light" placeholder="ادرس ایمیل"/>
                      <button className="Confirmation-email " > تایید ایمیل</button>
                  </div>
              </div>
          </div>
          <div className="is-hidden-desktop liner">
              <div className="has-text-grey text-size-16-n has-text-centered half-padding-bottom">ما را در شبکه های اجنماعی دنبال کتید</div>
              <div className="box-log-app">
                  <img className="radius-15" src={instgramFollow} />

              </div>
          </div>
      </div>
    )
}

export default FooterMobile