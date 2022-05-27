import React from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Card from "../components/Pcard";
import "../scss/PpartnerHome.scss";
export default function PpartnerHome() {
    return (
        <div className="ExpPartnerOut">
            <Header />
            <div className="ExpToptitle">
                Explore Companies
            </div>
            <div className="Expmaindiv">
                <div className="ExpGroups">
                    <div className="ExpGroupTitle">
                        <div className="ExpGroupTitleLeft" />
                        <div className="ExpGroupTitleRight">
                            <input placeholder="e.g. Elon Corp" />
                            <BiSearch className="ExpsearchIcon" />
                        </div>
                    </div>
                    {[...new Array(10)].map((e, k) => <div className="ExpCardRow" key={k}>
                        <div className="ExpcardTwo">
                            <Card logo='img/codelogo.png' title='Verkada' subtitle='10 roles' />
                            <Card logo='img/codelogo.png' title='Verkada' subtitle='10 roles' />
                        </div>
                        <div className="ExpcardTwo">
                            <Card logo='img/codelogo.png' title='Verkada' subtitle='10 roles' />
                            <Card logo='img/codelogo.png' title='Verkada' subtitle='10 roles' />
                        </div>
                    </div>)}
                </div>
            </div>
            <Footer />
        </div>
    );
}
