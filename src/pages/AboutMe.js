import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Setaboutme, Send_signdata } from "../actions/SignupAction";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../scss/AboutMe.scss";
class ChoosePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutme: ''
        }
    }
    Send_SignUp = () => {
        const { email, password, referralcode, name, title, linkedinURL, photoURL } = this.props.signdata;
        const { aboutme } = this.state;
        var data = {
            email,
            password,
            referralcode,
            name,
            title,
            linkedinURL,
            photoURL,
            aboutme
        };
        this.props.Send_signdata(data);
    }
    render() {
        return (
            <div className="ACmaindiv">
                <div className="ABackBtnOut" onClick={this.props.func}>
                    <FaChevronLeft className="ABackBtn" />
                </div>
                {/* <div className="AANextBtnOut">
                        <FaChevronRight className="AANextBtn" />
                    </div> */}
                <div className="ACtitle">Tell us about you</div>
                <div className="Adetail">
                    <div className="AdetailTitle">About Me</div>
                    <div className="AdetailContent">
                        Share a few sentences about who you are, what brings you to Moonhub, and how you want to grow the startup community through connections. If you’re open to referrals -- share with the community  what types of opportunities you’re looking for.
                    </div>
                    <textarea className="textarea" onChange={(e) => this.setState({ aboutme: e.target.value })} />
                    <div className="ANextBtnOut">
                        <Link to='/partner'>
                            <div className="ANextBtn" onClick={() => this.Send_SignUp()}>
                                Join!
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        signdata: state.signupdata
    };
};
export default connect(mapStateToProps, { Setaboutme, Send_signdata })(ChoosePage);