import React from "react"

import FooterMobile from "./FooterMobile";

import '../../assets/css/monta.css'
import './Footer.css'
import '../../assets/css/montav2.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer =(props) =>{
    return(
        <div className="background-color-footer padding-32-n half-padding-mobile">
            <div className="m--control-container container is-fullhd   is-paddingless-bottom">
                <div class="level has-background-info-light slicer-footer is-hidden-mobile">
                    {props.footerImage.map( item => {
                        return(
                            <div className="level-item has-text-centered">
                                 <img src={require(`../../assets/image/footer/${item.imageAddress}`).default}/>
                            </div>
                        )}
                    )}
                </div>
                <FooterMobile/>
                <div className="columns is-flex space-14-mobile-n">
                    <div className="column space-4-right-n is-3 is-mobile-text-gery ">
                        <div className="title-footer is-hidden-mobile">راهنمایی خرید از دیجی کالا</div>
                        <div className="has-pointer-cursor">نحوه ثبت سفارش</div>
                        <div className="has-pointer-cursor">رویه ارسال سفارش</div>
                        <div className="has-pointer-cursor">شیوه‌های پرداخت</div>
                    </div>
                    <div className="column is-3 is-mobile-text-gery ">
                        <div className="title-footer is-hidden-mobile ">خدمات مشتریان</div>
                        <div className="has-pointer-cursor">پاسخ به پرسش‌های متداول</div>
                        <div className="has-pointer-cursor">رویه‌های بازگرداندن کالا</div>
                        <div className="has-pointer-cursor">شرایط استفاده</div>
                        <div className="has-pointer-cursor">حریم خصوصی</div>
                        <div className="has-pointer-cursor">گزارش باگ</div>
                    </div>
                    <div className="column is-2 is-hidden-mobile">
                        <div className="title-footer ">با دیجی‌کالا</div>
                        <div className="has-pointer-cursor"> اتاق خبر دیجی‌کالا</div>
                        <div className="has-pointer-cursor">فروش در دیجی‌کالاا</div>
                        <div className="has-pointer-cursor">فرصت‌های شغلی</div>
                        <div className="has-pointer-cursor">تماس با دیجی‌کالا</div>
                        <div className="has-pointer-cursor">درباره دیجی‌کالا</div>
                        <div className="has-pointer-cursor">راهنمای هویت بصری</div>
                    </div>
                    <div className="column is-hidden-mobile ">
                        <div className="text-size-14-n space-32-top-n space-16-bottom-n">از تخفیف‌ها و جدیدترین‌های دیجی‌کالا باخبر شوید:</div>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" placeholder=" آدرس ایمیل خود را وارد کنید "/>
                            </div>
                            <div className="control">
                                <a className="button button-send-email">
                                    ارسال
                                </a>
                            </div>
                        </div>
                        <div className="text-size-14-n space-32-top-n space-16-bottom-n">دیجی‌کالا را در شبکه‌های اجتماعی دنبال کنید:</div>
                        <div className="columns is-mobile">
                            <div>
                                <FontAwesomeIcon className="svg" icon={faInstagram}/>
                            </div>
                            <div>
                                <FontAwesomeIcon className="svg" icon={faLinkedin}/>
                            </div>
                            <div>
                                <FontAwesomeIcon className="svg" icon={faTwitter}/>
                            </div>
                            <div>
                                <FontAwesomeIcon className="svg" icon={faTelegram}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer