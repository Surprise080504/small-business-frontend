import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RewardsCard from "../components/RewardCard";
import "../scss/Referrals.scss";
const Referrals = () => {
    return (
        <div className="ReviewContainer">
            <Header />
            <div className="ReviewTitle">Your Referrals</div>
            <div className="Reviewmaindiv">
                <div className="ReviewmainTitleOut">
                    <div className="ReviewmainTitle">Refer a Contact</div>
                </div>
                <div className="Reviewmainsubtitle">
                    <p>When you refer someone to Moonhub:</p>
                    <ul>
                        <li>
                            Earn
                            <span> 5</span>
                            <img src="img/logo.png" width={43} height={43} style={{ margin: '0 5px' }} />
                            when they join.
                        </li>
                        <li>
                            Earn
                            <span> 3% of all</span>
                            <img src="img/logo.png" width={43} height={43} style={{ margin: '0 5px' }} />
                            they earn through referrals in their first year.
                        </li>
                        <li>
                            Earn
                            <span> 25</span>
                            <img src="img/logo.png" width={43} height={43} style={{ margin: '0 5px' }} />
                            and
                            <span> $500</span> if they find a job on Moonhub in their first year.
                        </li>
                    </ul>
                </div>
                <div className="ReviewmainSharelink">
                    <p>Share your link</p>
                    <div className="ReviewmainSharelink_share">
                        <input placeholder="https://moonhub.xyz/te/dkfie" />
                        <div className="ReviewmainCopyBtn">Copy</div>
                    </div>
                </div>
                <div className="ReviewmainSharelink">
                    <p>Invite through Email</p>
                    <div className="ReviewmainSharelink_share">
                        <input placeholder="email here" />
                        <div className="ReviewmainCopyBtn">Invite</div>
                    </div>
                </div>
                <div className="ReviewmainSharelink">
                    <p>Share Your Referral Code</p>
                    <div className="ReviewmainSharelink_share">
                        <input placeholder="Xyek143A" />
                        <div className="ReviewmainCopyBtn">Copy</div>
                    </div>
                </div>
                <div className="ReviewRefferalOut">
                    <div className="ReviewRefferal">Referral Activity</div>
                </div>
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
            </div>
            <Footer />
        </div>
    );
};

export default Referrals;
