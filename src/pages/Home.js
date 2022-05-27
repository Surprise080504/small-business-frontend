import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import Footer from "../layout/Footer";
import JoinNow from "./FirstPage";
import IntroSelf from "./IntroSelf";
import AboutMe from "./AboutMe";
import SignUp from "./SignUp";
import { Slide } from 'react-slideshow-image';
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import MatchModal from "../components/MatchModal";
import "../scss/Home.scss";
import { FaSignInAlt } from "react-icons/fa";
class FirstPage extends React.Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.state = {
            visible: false,
            joinvisible: false,
            selfvisible: false,
            aboutvisible: false,
            signvisible: false,
            current: 0
        }
    }
    handleOk = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
            joinvisible: false,
            selfvisible: false,
            aboutvisible: false,
            signvisible: false,
        });
    }
    back = () => {
        this.slideRef.current.goBack();
    }

    next = () => {
        this.slideRef.current.goNext();
    }
    SignInFunc = () => {
        this.setState({ joinvisible: false, signvisible: true });
    }
    selfFunc = () => {
        this.setState({ selfvisible: false, aboutvisible: true });
    }
    toJoinnowfunc = () => {
        this.setState({ selfvisible: false, signvisible: true });
    }
    tointrofunc = () => {
        this.setState({ aboutvisible: false, selfvisible: true });
    }
    tologinfunc = () => {
        this.setState({ signvisible: false, joinvisible: true });
    }
    togofunc = () => {
        this.setState({ signvisible: false, selfvisible: true });
    }
    render() {
        const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
            indicators: (i) => <div className="indicator">{i + 1}</div>
        };
        const slideImages = [
            "img/ai.png",
            "img/dandy.png",
            "img/youcompany.png",
            "img/para.png",
        ];
        return (
            <div className="Hroot">
                <div className="Hmaindiv">
                    <div className="header">
                        <Link to='/'>
                            <div className="headerleft">
                                <img src="img/homelogo.png" width={30} className="homelogo" />
                                <p>Moonhub</p>
                            </div>
                        </Link>
                        <div className="headerright">
                            <span onClick={() => this.setState({ joinvisible: true })}>Sign In</span>
                            <div className="AccessBtn" onClick={() => this.SignInFunc()}>Get Access</div>
                        </div>
                    </div>
                    <div className="topDivOut">
                        <div className="hometitle">
                            Join the New Era of Startups and Top Talent.
                        </div>
                        <div className="homesubtitle">
                            Moonhub brings together to world’s best talent and fastest growing startups.
                            Earn <img src="img/homelogo.png" width={30} /> for growing the community. <img src="img/homelogo.png" width={30} /> pay you $ every time anyone finds a job on Moonhub.
                        </div>
                        <div className="joinText">
                            <span>Earn</span> 5&nbsp;&nbsp;<img src="img/homelogo.png" width={30} />&nbsp; when you join.<br />
                            + 50 &nbsp;<img src="img/homelogo.png" width={30} /> when you find a job
                        </div>
                        <div className="joinBtn" onClick={() => this.SignInFunc()}>
                            Join Moonhub
                        </div>
                    </div>
                    <div className="bottomDivOut">
                        <div className="bottomDiv">
                            <div className="bottomtitle">
                                <div className="bottomtitle_left">
                                    Discover moonshots with Moonhub.
                                </div>
                                <div className="bottomtitle_right">
                                    <BiLeftArrow className="bottomtitle_right_slide_icon" onClick={this.back} />
                                    <BiRightArrow className="bottomtitle_right_slide_icon" onClick={this.next} />
                                </div>
                            </div>
                            <div className="slide-container">
                                <Slide ref={this.slideRef} {...properties}>
                                    {slideImages.map((each, index) => (
                                        <div key={index} className="each-slide">
                                            <img className="lazy" src={each} alt="sample" />
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                            {/* </div> */}
                            <div className="roadmap">
                                <p className="howitworks">How it Works</p>
                                <div className="roadmapNum">
                                    <div className="roadmapNumItem">
                                        <img src="img/num1.png" width={100} height={100} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                    <div className="roadmapNumItem">
                                        <img src="img/num2.png" width={100} height={100} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                    <div className="roadmapNumItem">
                                        <img src="img/num3.png" width={100} height={100} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                <Modal footer={false} width={1140} visible={this.state.joinvisible} onCancel={() => this.handleCancel()}>
                    <JoinNow func={this.SignInFunc} />
                </Modal>
                <Modal footer={false} width={1140} visible={this.state.selfvisible} onCancel={() => this.handleCancel()}>
                    <IntroSelf funcback={this.toJoinnowfunc} funcup={this.selfFunc} />
                </Modal>
                <Modal footer={false} width={1140} visible={this.state.aboutvisible} onCancel={() => this.handleCancel()}>
                    <AboutMe func={this.tointrofunc} />
                </Modal>
                <Modal footer={false} width={1140} visible={this.state.signvisible} onCancel={() => this.handleCancel()}>
                    <SignUp func={this.tologinfunc} funcintro={this.togofunc} />
                </Modal>
            </div>
        )
    }
}
export default FirstPage;