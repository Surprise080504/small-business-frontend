import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import favicon from "../../assets/images/favicon.png";
import card_mark from "../../assets/images/card_mark.png";
import "./Payright.scss";
const Jobcard = () => {
    return (
        <div className="PayJobcardContainer">
            <div className="PayJobcardHeader">
                <div className="PayTitle">
                    <img src={favicon} alt="favicon" width="52px" height="52px" />
                    <div className="PayMain">
                        <span className="PayMainTitle">Front-end Engineer</span>
                        <div className="Paydetail">
                            <div className="Payyoudotcom">you.com</div>
                            <div className="Paypos">
                                <GiPositionMarker />
                                <span>Remote</span>
                            </div>
                            <div className="Payjob">
                                <MdWorkOutline />
                                <span>Full time</span>
                            </div>
                            <AiOutlineClockCircle className="Payclock_icon" />
                        </div>
                    </div>
                </div>
                <div className="PayPrice">
                    <span className="PayMainprice">$1000</span>
                    <div className="PaySubprice">
                        <div className="Payvalue">100</div>
                        <img src={card_mark} alt="card_mark" width="42px" height="33px" />
                    </div>
                </div>
            </div>
            <div className="PayJobcardBody">
                Looking for strong FE engineer with 2-3 years experience in Javascript,
                React stack. Sells: lots of ownership over product.
            </div>
        </div>
    );
};

export default Jobcard;
