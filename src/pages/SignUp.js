import React from "react";
import { Link } from "react-router-dom";
import { Setemail_pass_code } from "../actions/SignupAction";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { ServerURL } from '../config/port';
import { notification } from "antd";
import { IoMdLock } from "react-icons/io";
import { connect } from 'react-redux';
import { MdEmail } from "react-icons/md";
import "../scss/SignUp.scss";
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            code: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    Setemail_pass = () => {
        const { email, code, pass } = this.state;
        axios.post(`${ServerURL}/checkcode`, { code }).then(e => {
            if (e) {
                if (e.data == true) {
                    this.props.Setemail_pass_code(email, pass, code);
                    this.props.funcintro();
                } else {
                    notification.error({ message: "Warning", description: "Invalid referral code.\n You need a referral code from an existing member to Join" })
                }
            }
        }).catch(err => notification.warning({ message: "Warning", description: err.response.data }))
    }
    render() {
        const { email, code, pass } = this.state;
        return (
            <div className="SSmaindiv">
                <div className="SSmainleft">
                    <img src="img/logo.png" alt="logo" />
                    <div className="SSwelcomeText">Welcome to <span style={{ color: '#7adefd' }}>Moonhub</span></div>
                    <div className="SSSubText">
                        <p><BiRightArrowAlt className="SSrightIcon" />Grow your career</p>
                        <p><BiRightArrowAlt className="SSrightIcon" />Explore top startups</p>
                        <p><BiRightArrowAlt className="SSrightIcon" />Earn $ and rewards</p>
                    </div>
                </div>
                <div className="SSmainright">
                    {/* <AiOutlineCloseCircle className="SScloseIcon" /> */}
                    <div className="SSjoinCommunity">
                        <p>Connect with the world’s fastest growing companies.</p>
                        <div className="SStitle">
                            Join the Community!
                        </div>
                        <div className="SSemailPart">
                            <p>E-Mail or Username</p>
                            <div className="SSemailinput">
                                <MdEmail className="SSemailIcon" />
                                <input type="text" name="email" onChange={(e) => this.handleChange(e)} value={email} className="signUpInput" placeholder="des..." />
                            </div>
                        </div>
                        <div className="SSemailPart">
                            <p>Password</p>
                            <div className="SSemailinput">
                                <IoMdLock className="SSemailIcon" />
                                <input type="password" name="pass" onChange={(e) => this.handleChange(e)} value={pass} className="signUpInput" placeholder="e.g.:X AE A-12" />
                            </div>
                        </div>
                        <div className="SSemailPart">
                            <p>Referral Code</p>
                            <div className="SSemailinput">
                                <input type="text" name="code" onChange={(e) => this.handleChange(e)} value={code} className="SSreferralcode" placeholder="des..." />
                            </div>
                        </div>
                        <div className="SSSignBtnOut">
                            <div className="SSSignBtn" onClick={() => this.Setemail_pass()}>Join Now</div>
                        </div>
                        <div className="SSlogin">Already a memeber?
                            <p onClick={() => this.props.func()} style={{ cursor: "pointer" }}>Login here<BiRightArrowAlt /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        codeflag: state.signupdata.checkcodeflag
    };
};
export default connect(mapStateToProps, { Setemail_pass_code })(SignUp);