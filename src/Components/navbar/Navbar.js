import React from 'react';
import "../../assets/css/monta.css";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import logo from "../../assets/image/logo/Digikala.png"

const  Navbar = () =>{
    return (
        <div className="has-background-white  " >
            <div className="m--control-container container is-fullhd  is-paddingless-bottom mobile-padding">
                <div className="columns space-8-left-n space-8-right-n">
                    <div className="is-hidden-desktop slicer-navbar is-marginless-mobile">
                        <div className="navbar" role="navigation" aria-label="main navigation">
                            <div className="navbar-brand is-right">
                                <div className="level is-flex is-fullwidth">
                                    <div className="level-right">
                                        <a role="button" className="navbar-burger burger" aria-label="menu"
                                           aria-expanded="false" data-target="navbarBasicExample">
                                            <span aria-hidden="true"></span>
                                            <span aria-hidden="true"></span>
                                            <span aria-hidden="true"></span>
                                        </a>
                                    </div>
                                    <div className="level-item">
                                        <a className="navbar-item is-marginless-bottom" >
                                            <img src={logo} width="100" height="80"/>
                                        </a>
                                    </div>
                                    <div className="level-left">
                                         <span className="icon is-medium  is-flex-row-start">
                                             <FontAwesomeIcon className="is-flex-column-end" icon={faQuestion}/>
                                         </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-1 padding-top-4px is-hidden-mobile">
                        <img className="logo-size" src={logo} />
                    </div>
                    <div className="is-flex is-fullwidth slicer-navbar is-marginless-mobile">
                         <div className="column is-6 padding-top-4px is-10-mobile">
                            <div className="field">
                                <div className="control field has-icons-right half-space">
                                    <span className="icon is-medium  is-flex-row-start">
                                          <FontAwesomeIcon className="is-flex-column-end" icon={faSearch}/>
                                    </span>
                                    <input className="input input-search" placeholder="جستوجو در دیجی کالا..."/>
                                </div>
                            </div>
                        </div>
                        <div class="column is-flex-row-end padding-top-4px is-2-mobile">
                             <div className="level ">
                                  <div className="level-left">
                                      <div className="level-item">
                                          <button  className="button radius-7px is-medium is-hidden-mobile ">
                                              <a href="https://www.digikala.com/users/login-register/?_back=https://www.digikala.com/fresh-offers/">
                                                  <FontAwesomeIcon className="space-10-left-n has-text-grey" icon={faUser}/>
                                                  <span className="text-size-12-n has-text-grey">ورود به حساب کاربری</span>
                                              </a>
                                          </button>
                                      </div>
                                      <div className="level-item is-hidden-mobile">
                                          <div className="slicer"/>
                                      </div>
                                      <div className="level-item">
                                          <FontAwesomeIcon className="space-10-left-n is-hidden-desktop " icon={faUser}/>
                                          <FontAwesomeIcon icon={faShoppingCart}/>
                                      </div>
                                  </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
}

export default Navbar ;