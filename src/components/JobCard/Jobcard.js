import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import favicon from "../../assets/images/favicon.png";
import card_mark from "../../assets/images/card_mark.png";
import "./Jobcard.scss";
const Jobcard = () => {
    return (
        <div className="JobcardContainer">
            <div className="JobcardHeader">
                <div className="Title">
                    <img src={favicon} alt="favicon" width="52px" height="52px" />
                    <div className="Main">
                        <span className="MainTitle">Front-end Engineer</span>
                        <div className="detail">
                            <div className="youdotcom">you.com</div>
                            <div className="pos">
                                <GiPositionMarker />
                                <span>Remote</span>
                            </div>
                            <div className="job">
                                <MdWorkOutline />
                                <span>Full time</span>
                            </div>
                            <AiOutlineClockCircle className="clock_icon" />
                        </div>
                    </div>
                </div>
                <div className="Price">
                    {/* <span className="Mainprice">$1000</span>
                    <div className="Subprice">
                        <div className="value">100</div>
                        <img src={card_mark} alt="card_mark" width="42px" height="33px" />
                    </div> */}
                </div>
            </div>
            <div className="JobcardBody">
                Looking for strong FE engineer with 2-3 years experience in Javascript,
                React stack. Sells: lots of ownership over product.
            </div>
        </div>
    );
};

export default Jobcard;
