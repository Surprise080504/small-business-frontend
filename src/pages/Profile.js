import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Modal } from "antd";
import { BsCameraFill } from "react-icons/bs";
import RewardsCard from "../components/RewardCard";
import { BiEdit } from "react-icons/bi";
import "../scss/Profile.scss";
const Referrals = () => {
    const [visible, setVisible] = useState(false);
    const [newpassType, setNewpassType] = useState('password');
    const handleOk = () => {
        setVisible(true);
    }
    const handleCancel = () => {
        setVisible(false);
    }
    const handleChange = () => {
        setNewpassType(newpassType == "password" ? "text" : "password");
    }
    return (
        <div className="ProReviewContainer">
            <Header />
            <div className="ProReviewTitle">
                <div className="ProReviewTitleBack" />
                <div className="ProreviewTitleMain">
                    <div className="ProReviewTitle_left">
                        <div className="Prophotoposition">
                            <img src="img/woman.png" width="100%" height="100%" />
                            <BsCameraFill className="ProReviewCameraIcon" />
                        </div>
                        <div className="ProphotoRight">
                            <div className="Profilename">Nancy Xu<BiEdit className="editbtn" /></div>
                            <div className="profilejob">Founder at Jobhub<BiEdit className="editbtn" /></div>
                            <div className="profilelinkedin">linkedin.com/in/xnancy<BiEdit className="editbtn" /></div>
                        </div>
                    </div>
                    <div className="ProresetBtnout">
                        <div className="ProresetBtn" onClick={handleOk}>Reset Password</div>
                    </div>
                </div>
            </div>
            <div className="ProReviewmaindiv">
                <div className="ProReviewmainsubtitle">
                    <div className="Proabouttitle">
                        <p />
                        <p><BiEdit className="editbtn" /></p>
                    </div>
                    <div className="ProaboutText">
                        I love working with high-growth AI companies to hire machine learning engineer talent. The majority of my referrals are through my personal network.
                    </div>
                </div>
                {/* <div className="ProReviewRefferalOut">
                    <div className="ProReviewRefferal">Community Referrals on Moonhub</div>
                </div> */}
                {
                    [...new Array(4)].map((e, k) => <RewardsCard
                        key='k'
                        date="Jan 3, 2022"
                        title="Annie Smith"
                        email="asmith@gmail.com"
                        rightText="Joined Moonhub through your referral."
                        num="+5"
                    />)
                }
                <div className="moremain">Load More</div>
            </div>
            <Modal
                width={560}
                visible={visible}
                footer={false}
                onCancel={handleCancel}
                title={<div className="resetpassmodaltitle">Change Password</div>}>
                <div className="resetpassMain">
                    <p>Old Password</p>
                    <input className="oldpassinput" type="password" />
                    <div className="newpasswordmain">
                        <div className="newpasswordlabel">
                            <p>New Password</p>
                            <p>
                                <input type="checkbox" onChange={handleChange} className="showpasscheckbox" />
                                Show Password
                            </p>
                        </div>
                        <input className="oldpassinput" type={newpassType} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>Confirm New Password</p>
                        <input className="oldpassinput" type="password" />
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="resetpassSaveBtn">Save</div>
                    </div>
                </div>
            </Modal>
            <Footer />
        </div>
    );
};

export default Referrals;
