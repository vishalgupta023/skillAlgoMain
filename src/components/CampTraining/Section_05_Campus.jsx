import React from "react";
// import ASHWIN_1616570244 from "../assets/ASHWIN_1616570244.png";
import sarang from "../assets/sarang.png";
import pradeep from "../assets/pradeep.png"
import amod from "../assets/amod.png"
import vatsal from "../assets/vatsal.jpg"
import jegan from "../assets/jegan.jpg"
import vishruth from "../assets/vishruth.png"
import modi from "../assets/modi.png"
import sarvani from "../assets/sarvani.jpg"
import anuShaju from "../assets/anuShaju.png"
import "./Section_05_Campus.css";




function Section_05_Campus() {
    return (
        <div>

            <p className="p1 p1_sec03" style={{ fontSize: '36px', marginTop: '65px' }}>Our Full-Time <br />
                Faculty Members</p>
            <div className="Section_05_container">
                <div className="card_container_sec05">

                    <div className="card">
                        <img src={sarang} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}> Sarangaranjan V</h3>
                            <p className="p3">Co-Founder, CFD-University Of Wisconsin Madison, Ex-Convergent Science.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pradeep} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}> Pradeep Kumar Keloth</h3>
                            <p className="p3">Principal Architect, EV-30 years Ex-Head Of EV, Robert BOSCH Respected & Senior Faculty. </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={amod} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}>Dr. Amod AnandKumar</h3>
                            <p className="p3">Director, Curriculum & Application-10+ years including R&D.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={vatsal} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}>Vatsal Shah</h3>
                            <p className="p3">Technical Specialist, Electric Vehicle -11 + years, including 8 years of teaching.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={jegan} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}> Jegan Amirthalingam</h3>
                            <p className="p3">Texhnical Specialist, Embedded Systems-10 + years, Ex-KPIT, Ex-Renault Nissan.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={vishruth} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}> Vikranth Kambhaluru</h3>
                            <p className="p3">Technical Specialist, Mechanical Design - 12 + years, Ex-Robert BOSCH.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={modi} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}>Mayur Modi</h3>
                            <p className="p3">Technical Specialist , Data-Science - Ex-Michelin, <br /> Ex-Axtria.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={sarvani} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}>Sarvani Bhamidipati</h3>
                            <p className="p3">Techical Specialist , Data-Science - Ex-IBM Watson Health.</p>
                        </div>

                    </div>
                    <div className="card">
                        <img src={anuShaju} alt="" />
                        <div className="card_info">
                            <h3 className="card_title" style={{ color: '#08BD80' }}> Anu Shaju</h3>
                            <p className="p3">Technical Specialist , Civil - 16 + years, Commercial & Industrial Structures.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )

}

export default Section_05_Campus;



































