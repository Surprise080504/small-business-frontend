import React from "react";
import Message from "../../assets/images/message.svg";
import Avatar from "../../assets/images/User_Avater.png";
import "./Ambassadors_simple.scss";
const Ambassadors = () => {
    return (
        <div className="CardContainer">
            <div className="CardHeader">
                <img
                    src={Avatar}
                    alt="avatar"
                    className="Avatar_image"
                    width="150px"
                    height="150px"
                />
                <img
                    src={Message}
                    className="message_icon"
                    alt="message"
                    width="32px"
                    height="33px"
                />
                <div className="CardTitle">nancy xu</div>
            </div>
            <div className="CardContent">
                <div className="CardReferrals">
                    <div className="ReferralsTitle">
                        <span className="TitleTopic">Founder at Jobhub</span>
                        <span className="TitleLink">linkdin.com/in/xnancy</span>
                    </div>
                </div>
                <div className="AboutMe">
                    <div className="AboutTitle">About Me</div>
                    <div className="AboutContent">
                        I love working with high-growth AI companies to hire machine
                        learning engineer talent. The majority of my referrals are through
                        my personal network.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ambassadors;
