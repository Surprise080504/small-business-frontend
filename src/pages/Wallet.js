import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RewardsCard from "../components/RewardCard";
import { Modal } from "antd";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Withdraw from "./Withdraw";
import CashActivityCard from "../components/CashActivityCard";
import "../scss/Wallet.scss";
const Wallet = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="ReviewContainer">
            <Header />
            <div className="ReviewTitle">Your Wallet</div>
            <div className="walletGroup">
                <div className="walletItem">
                    <img src="img/Crescent.png" />
                    <div className="redeemBtn" onClick={() => setVisible(true)}>Withdraw</div>
                </div>
                <div className="walletItem">
                    <img src="img/cash.png" />
                    {/* <div className="redeemBtn">Redeem</div> */}
                </div>
            </div>
            <div className="Reviewmaindiv">
                <div className="ReviewRefferal">Crescent Activity </div>
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
                <div className="ReviewRoadmoreBtnOut">
                    <div className="ReviewRoadmoreBtn">
                        Load More
                    </div>
                </div>
            </div>
            <div className="Reviewmaindiv">
                <div className="ReviewRefferal">Cash Activity</div>
                <div className="payoutout">
                    <div className="payoutText">$Payouts for Community Hires<BsFillInfoCircleFill className="inforIcon" /></div>
                </div>
                {
                    [...new Array(4)].map((e, k) => <CashActivityCard
                        key='k'
                        date="Jan 3, 2022"
                        title="Annie Smith"
                        email="asmith@gmail.com"
                        rightText="Joined Moonhub through your referral."
                        num="0.60"
                    />)
                }
                <div className="ReviewRoadmoreBtnOut">
                    <div className="ReviewRoadmoreBtn">
                        Load More
                    </div>
                </div>
            </div>
            <Footer />
            <Modal visible={visible} width={1100} footer={false} onCancel={() => setVisible(false)}>
                <Withdraw />
            </Modal>
        </div>
    );
};

export default Wallet;
