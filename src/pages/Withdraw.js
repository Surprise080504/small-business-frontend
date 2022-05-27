import React from "react";
import "../scss/Withdraw.scss";
export default function Withdraw() {
    return (
        <div className="withbody">
            <div className="withtitle">Ready to withdraw your rewards?</div>
            <div className="withsubtoptext">Send an email to <span>rewards@moonhub.xyz</span> from your account email with the amount you’d like to withdraw, as well as your Venmo, Paypal, or Checking Account details for the deposit.</div>
            <div className="withsubtext">You withdrawal request will be processed within 48 hours.</div>
            <div className="withBtnOut">
                <div className="withBtn">Help Chat</div>
            </div>
        </div>
    );
}
