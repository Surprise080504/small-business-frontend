import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Jobcard from "../components/JobCard/Jobcard";
import MatchModal from "../components/MatchModal";
import "../scss/Owner.scss";
import You from "../assets/images/you.png";
import AvatarImage from "../assets/images/avatar_image.png";
const Owner = () => {
    const [initOldPassword, setInitOldPassword] = useState("");
    const [initNewPassword, setInitNewPassword] = useState("");
    const [initPasswordConfirm, setInitPasswordConfirm] = useState("");
    const [initRole, setInitRole] = useState("");
    const [initReward, setInitReward] = useState("");
    const [initLocation, setInitLocation] = useState("");
    const [initType, setInitType] = useState("");
    const [initNote, setInitNote] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleCancel = () => {
        setVisible(false);
    }
    return (
        <div className="OwnerContainer">
            <Header />
            <div className="OwnerTitle">
                <img src={You} alt="you" width="150px" height="150px" />
                <div className="OwnerSmallTitle">
                    <div>
                        <span>You</span>
                    </div>
                </div>
                <div className="OwnerSubTitle">
                    <span>You.com</span>
                </div>
                <div className="connectgroupPart">
                    <p>
                        Talk with a Moonhub Expert <span>to</span> learn more <span>about opportunities at You &</span> get a warm intro.
                    </p>
                    <div className="connectbtnout">
                        <button
                            className="resetButton"
                            onClick={() => setVisible(true)}
                        >
                            CONNECT
                        </button>
                    </div>
                </div>
            </div>
            <div className="OwnerContent">
                <div className="YourPartner">
                    <div className="YourPartnerHeader">Why Join You.com</div>
                    <div className="YourPartnerContent">
                        You.com is founded by Stanford professor, exEVP @ Salesforce.
                        <br />
                        They have one of the best teams out there  with high growth, top VCs, and a repeat founder.
                    </div>
                </div>
                <div className="OpenJobs">
                    <div className="OpenJobsHeader">Open Roles</div>
                    <div className="roleSearchInputOut">
                        <div className="ExpGroupTitleRight">
                            <input placeholder="e.g. Elon Corp" />
                            <BiSearch className="ExpsearchIcon" />
                        </div>
                    </div>
                    <div className="OpenJobsContent">
                        {[...new Array(8)].map((e, k) => <div className="rolecardgroup">
                            <Jobcard />
                            <Jobcard />
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="openrolesfooterout">
                <Footer />
            </div>
            {showPasswordModal && (
                <>
                    <div className="ResetPasswordModal">
                        <div className="PasswordModalHeader">
                            <span className="PasswordModalTitle">Change Password</span>
                            <AiOutlineCloseCircle
                                className="close_icon"
                                onClick={() => setShowPasswordModal(!showPasswordModal)}
                            />
                        </div>
                        <div className="PasswordModalFormControl">
                            <div className="FormControl">
                                <label>Old password</label>
                                <input
                                    type="text"
                                    value={initOldPassword}
                                    onChange={(e) => setInitOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <div className="FormControlHeader">
                                    <label>New password</label>
                                    <div className="check">
                                        <input type="checkbox" />
                                        <div>ShowPassword</div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    value={initNewPassword}
                                    onChange={(e) => setInitNewPassword(e.target.value)}
                                />
                                <div className="state">X Numbers X Symbols</div>
                            </div>
                            <div className="FormControl">
                                <label>Confirm New password</label>
                                <input
                                    type="text"
                                    value={initPasswordConfirm}
                                    onChange={(e) => setInitPasswordConfirm(e.target.value)}
                                />
                            </div>
                            <button className="Save_Button">Save</button>
                        </div>
                    </div>
                    <div
                        className="underground"
                        onClick={() => setShowPasswordModal(false)}
                    ></div>
                </>
            )}
            {showAddModal && (
                <>
                    <div className="AddModal">
                        <AiOutlineCloseCircle
                            className="close_icon"
                            onClick={() => setShowAddModal(!showAddModal)}
                        />
                        <div className="AddModalHeader">New job</div>
                        <div className="AddModalContent">
                            <div className="important">
                                <div className="FormControl">
                                    <label>Role</label>
                                    <input
                                        type="text"
                                        placeholder="Front-end engineer"
                                        value={initRole}
                                        onChange={(e) => setInitRole(e.target.value)}
                                    />
                                </div>
                                <div className="FormControl">
                                    <label>Reward(USD)</label>
                                    <input
                                        type="text"
                                        placeholder="$!0,000"
                                        value={initReward}
                                        onChange={(e) => setInitReward(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="FormControl">
                                <label>Location</label>
                                <input
                                    type="text"
                                    placeholder="remote"
                                    value={initLocation}
                                    onChange={(e) => setInitLocation(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <label>Type</label>
                                <input
                                    type="text"
                                    placeholder="Full time"
                                    value={initType}
                                    onChange={(e) => setInitType(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <label>Looking for / job description</label>
                                <textarea
                                    placeholder="Notes here"
                                    value={initNote}
                                    onChange={(e) => setInitNote(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="ListJob">List Job</button>
                    </div>
                    <div
                        className="underground"
                        onClick={() => setShowAddModal(false)}
                    ></div>
                </>
            )}
            <MatchModal
                width={1200}
                visible={visible}
                handleCancel={() => handleCancel()}
                title="Connect with an expert about opportunities at You.com"
                subtitle="Ready for a warm intro or here to learn more? Tell Moonhub’s Experts what you’re looking for and start chatting (or get intro’d!) in <24 hours." />
        </div>
    );
};

export default Owner;
