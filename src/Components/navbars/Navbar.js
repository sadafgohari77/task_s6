import React from 'react';
import "../../css/monta.css";
import "./Navbar.css";
import logo from '../../assets/image/logo/Digikala-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
function Navbar (){
  return (
      <div class="box no-shadow is-paddingless-bottom">
         <div class="columns">
            <div className="column is-1 padding-top-4px">
                <img className="logo-size" src={logo}/>
            </div>
            <div className="column is-6 padding-top-4px">
                <div className="field">
                    <div className="control field has-icons-right half-space ">
                           <span className="icon is-medium space-12-top-n is-flex-row-start">
                            <FontAwesomeIcon className="is-flex-column-end"  icon={faSearch}/>
                          </span>
                        <input className="input input-search" placeholder="جستوجو در دیجی کالا..."/>
                    </div>
                </div>
            </div>
            <div class="column is-flex-row-end padding-top-4px">
                 <div className="level ">
                      <div className="level-left">
                          <div className="level-item">
                              <button className="button radius-7px is-medium ">
                                  <FontAwesomeIcon className="space-10-left-n" icon={faUser}/>
                                  <span className="text-size-12-n has-text-grey">ورود به حساب کاربری</span>
                              </button>
                          </div>
                          <div className="level-item">
                              <div className="slicer"/>
                          </div>
                          <div className="level-item">
                              <FontAwesomeIcon icon={faShoppingCart} />
                          </div>
                      </div>
                 </div>
            </div>
         </div>
      </div>
  );
}

export default Navbar ;