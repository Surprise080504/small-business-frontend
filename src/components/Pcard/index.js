import React from "react";
import { Link } from "react-router-dom";
import "./Pcard.style.scss";
export default function Pcard({ logo, title, subtitle }) {
    return (
        <Link to='/owner'>
            <div className="Pcard">
                <img src={logo} className="CCardlogo" width={150} height={150} />
                <div className="ccardtitle">{title}</div>
                <div className="Ccardsubtitle">{subtitle}</div>
            </div>
        </Link>
    );
}
