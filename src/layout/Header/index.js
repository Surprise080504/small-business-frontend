import React, { useState } from "react";
import { Link } from "react-router-dom";
import MatchModal from "../../components/MatchModal";
import "./header.css";
import { RiMessage2Fill } from "react-icons/ri";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
export default function Header() {
    const [Resflag, setResflag] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleOk = () => {
        setVisible(true);
    }
    const handleCancel = () => {
        setVisible(false);
    }
    return (
        <div className="CComHeader">
            <MatchModal
                visible={visible}
                handleCancel={() => handleCancel()}
                title="Let Moonhub Experts match you with startups!"
                subtitle="Tell us about the type of roles you’re interested in, stage / sector of company, criteria, and your timeline. Someone from our team of startup experts will reply in <24 hours!"
            />
            <div className="CmainHeader">
                <div className="CmainHeaderLeft">
                    <Link to='/'>
                        <div className="CHeaderlogo">
                            <img src="img/homelogo.png" width={35} className="Chomelogo" />
                            <p>Moonhub</p>
                        </div>
                    </Link>
                    <Link to='/partner'>
                        <div className="CheaderItem logomargin">Companies</div>
                    </Link>
                    <Link to='/referrals'>
                        <div className="CheaderItem">Referrals</div>
                    </Link>
                </div>
                <div className="CmainHeaderRight">
                    <div className="CheadermatchBtn" onClick={() => handleOk()}>Get Matched</div>
                    <Link to='/wallet'>
                        <GiTwoCoins className="CHeaderRightItemCoin" />
                    </Link>
                    <Link to='/chatroom'>
                        <RiMessage2Fill className="CHeaderRightItem" />
                    </Link>
                    <Link to='/profile'>
                        <FaUserCircle className="CHeaderRightItemUser" />
                    </Link>
                    <FaBars className="CResHeaderRightItemBar" onClick={() => setResflag(!Resflag)} />
                </div>
            </div>
            {
                Resflag && <div className="CResPanel">
                    <Link to="/partner">
                        <div className="CheaderItemRes">Companies</div>
                    </Link>
                    <Link to='/referrals'>
                        <div className="CheaderItemRes">Referrals</div>
                    </Link>
                    <div className="CResItems">
                        <Link to='/wallet'>
                            <GiTwoCoins className="CResHeaderRightItemCoin" />
                        </Link>
                        <Link to='/chatroom'>
                            <RiMessage2Fill className="CResHeaderRightItem" />
                        </Link>
                        <Link to='/profile'>
                            <FaUserCircle className="CResHeaderRightItemUser" />
                        </Link>
                    </div>
                    <div className="ResMatchOut">
                        <div className="CheadermatchBtnRes" onClick={() => handleOk()}>Get Matched</div>
                    </div>
                </div>
            }
        </div >
    );
}
