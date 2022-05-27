import React from "react";
import "./RewardCard.style.scss";
export default function index({ key, date, title, email, rightText, num }) {
    return (
        <div className="RewardsCard" key={key + "bot"}>
            <div className="RewardsCard_date">{date}</div>
            <div className="RewardsCard_Row" >
                <div className="RewardsCard_Row_left">
                    <p>{title}</p>
                    <div>{email}</div>
                </div>
                <img src="img/arrowrightthree.png" width={80} style={{ margin: '0 30px' }} />
                <div className="RewardsCard_Row_right">
                    {rightText}
                </div>
                <div className="RewardsCard_Row_right_mark">
                    <p>{num}</p>
                    <img src="img/logo.png" width={50} height={50} />
                </div>
            </div>
        </div >
    );
}
