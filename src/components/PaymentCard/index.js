import React from "react";
import "./PaymentCard.scss";
import Jobcard from "../PayRightCard";
const PaymentCard = () => {
    return (
        <div className="RecentItemContainer">
            <div className="tooltip_date">Jun 3 2022</div>
            <div className="UserLink">
                <span className="UserName">Annie Smith</span>
                <span className="Linkdin">
                    <div className="LinkedinText">linkedin.com/in/asmith</div>
                </span>
            </div>
            <img src='img/allow.png' alt="allow" width="132px" height="87px" className="arrowrecentmark" />
            <Jobcard />
        </div>
    );
};

export default PaymentCard;
