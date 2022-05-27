import React from "react";
import Avatar from "../../assets/images/User_Avater.png";
import "./Person.scss";
const Person = () => {
    return (
        <div className="PersonContainer">
            <img src={Avatar} alt="avatar" width="150px" height="150px" />
            <div className="personDetail">
                <span className="name">nancy xu</span>
                <span className="total">34 total referrals</span>
                <span className="active">3 active referrals</span>
            </div>
        </div>
    );
};

export default Person;
