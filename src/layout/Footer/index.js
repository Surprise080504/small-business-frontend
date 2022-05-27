import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="ComFooter">
            <div className="Comfootertitle">Stay up to date on movements in Moonhub.</div>
            <div className="ComjoindiscordBtnOut">
                <div className="ComjoindiscordBtn">Join Discord <FaDiscord className="ComjoinBtnIcon" /></div>
            </div>
            <div className="ComsocialIcons">
                <Link to='/'>
                    <div className="ComsocialIcon_left"><img src="img/homelogo.png" width={35} /></div>
                </Link>
                <div className="ComsocialIcon_right">
                    <FaInstagram className="ComsocialItem" />
                    <FaTwitter className="ComsocialItem" />
                    <FaDiscord className="ComsocialItem" />
                </div>
            </div>
        </div>
    );
}
