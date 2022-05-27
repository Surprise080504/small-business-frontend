import React from "react";
import { Link } from "react-router-dom";
import { Setname_title_linkedin_photo } from "../actions/SignupAction";
import { connect } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import "../scss/IntroSelf.scss";
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photourl: "",
            name: '',
            title: '',
            linkedinURL: ''
        }
    }
    loadFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            var purl = URL.createObjectURL(event.target.files[0]);
            console.log(purl);
            this.setState({ photourl: purl });
        }
    };
    filedialog = () => {
        document.getElementById('photo').click();
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="Cmaindiv">
                <div className="BackBtnOut" onClick={this.props.funcback}>
                    <FaChevronLeft className="BackBtn" />
                </div>
                <div className="NextBtnOut" onClick={() => {
                    const { photourl, name, title, linkedinURL } = this.state;
                    this.props.Setname_title_linkedin_photo(name, title, linkedinURL, photourl);
                    this.props.funcup();
                }}>
                    <FaChevronRight className="NextBtn" />
                </div>
                <div className="Ctitle">Introduce yourself to Moonhub members:</div>
                <div className="infordetail">
                    <div className="detailLeft">
                        <div className="photo" >
                            <img src={this.state.photourl} width="100%" draggable={false} />
                            <BsFillCameraFill className="cameraIcon" onClick={() => this.filedialog()} />
                        </div>
                    </div>
                    <div className="detailRight">
                        <div className="group">
                            <p>Name</p>
                            <input type="text" onChange={(e) => this.handleChange(e)} name="name" className="selfinput" />
                        </div>
                        <div className="grouptitle">
                            <p>Title<span>e.g. Software Engineer at Google</span></p>
                            <input type="text" onChange={(e) => this.handleChange(e)} name="title" className="selfinput" />
                        </div>
                        <div className="grouplinkedin">
                            <p>LinkedIn</p>
                            <div className="linkedinUrl">
                                <p>www.linkedin.com./in/</p>
                                <input type="text" onChange={(e) => this.handleChange(e)} name="linkedinURL" className="linkedininput" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="file" id="photo" style={{ display: 'none' }} onChange={this.loadFile} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {};
};
export default connect(mapStateToProps, { Setname_title_linkedin_photo })(Intro);