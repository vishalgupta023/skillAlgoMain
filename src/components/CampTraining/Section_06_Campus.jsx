import React from "react";
import nasscom from "../assets/nasscom.png"
import nsdc from "../assets/nsdc.png"
import asme from "../assets/asme.png"
import amtz from "../assets/amtz.png"

import "./Section_06_Campus.css";

function Section_06_Campus() {
    return (
        <div>


            <p className="p1 p1_sec03" style={{ fontSize: '36px', marginTop: '65px' }}>Our curriculum is well integrated with <br />
                leading industry bodies</p>
            <div className="sec06_card_container">
                <div className="sec06_card">
                    <img className="sec06_img" src={nasscom} alt="" />
                    <div className="card_info">
                        <h3 className="card_title" style={{ color: '#6749C6' }}> NASSCOM</h3>
                        <ul>
                            <li>Skilling Partner - Design & Engineering Summit,2021</li>
                            <li>Driving an expert group for talent development to set up embedded finishing schools</li>
                        </ul>
                    </div>
                </div>
                <div className="sec06_card">
                    <img className="sec06_img" src={nsdc} alt="" />
                    <div className="card_info">
                        <h3 className="card_title" style={{ color: '#6749C6' }}> National Skill Development Corporation (NSDC)</h3>
                        <ul>
                            <li>Knowledge Partner - For pilot programs in emerging technologies</li>
                            <li>Non-Funded Training Partner - <br /> Joint Course Certification</li>
                        </ul>
                    </div>
                </div>
                <div className="sec06_card">
                    <img className="sec06_img" src={asme} alt="" />
                    <div className="card_info">
                        <h3 className="card_title" style={{ color: '#6749C6' }}> ASME</h3>
                        <ul>
                            <li>Authorized Training Partner - Joint course Certification</li>
                            <li>Skill-lync content hosted on ASME website</li>
                            <li>Skill-lync content hosted on ASME website</li>
                        </ul>
                    </div>
                </div>
                <div className="sec06_card">
                    <img className="sec06_img" src={amtz} alt="" />
                    <div className="card_info">
                        <h3 className="card_title" style={{ color: '#6749C6' }}>Andhra Pradesh MedTech Zone (AMTZ)</h3>
                        <ul>
                            <li>Executive PG program in Medical Technology launched with AMTZ</li>
                            <li>Experiential Learning for Skill-lync Students at the scientific facilities in AMTZ campus</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Section_06_Campus;