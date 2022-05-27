import React from "react";
import { Modal } from "antd";
import "./matchmodal.scss";
const MatchModal = ({ visible, handleCancel, title, subtitle }) => {
    return (
        <Modal width={1200} visible={visible} footer={false} onCancel={handleCancel}>
            <div className="antd_Modal" >
                <div className="accessModalTitle">
                    {title}
                </div>
                <div className="accessModalsubtitle">
                    {subtitle}
                </div>
                <textarea placeholder="Notes here" className="antdModalTextarea" />
                <div className="ChatBtnOut">
                    <div className="ChatBtn">Chat</div>
                </div>
            </div>
        </Modal>
    );
};

export default MatchModal;
