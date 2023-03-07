import React from "react";
import "./Section_03_Campus.css"
import whyHireImg3 from "../assets/whyHireImg3.png"
import whyHireImg1 from "../assets/whyHireImg1.png"
import tailormade2 from "../assets/tailormade2.png"
import tailorMade3 from "../assets/tailorMade3.png"
import skillCenter from "../assets/skillCenter.png"



function Section_03_Campus() {
    return (
        <div>
            <p className="p1 p1_sec03" style={{ fontSize: '36px' }}>Tailormade solutions <br />
                for academic partners</p>
            <div className="Section_03_Campus_Container">
                <img src={whyHireImg3} alt="" />
                <div className="Section_03_Campus_Container_right">
                    <p className="p2">1. Curriculum - integrated programs</p>
                    <div className="Section_03_Campus_Container_right_down p3">At Skill-Lync, we work with your institute to introduce a wide range of programs across domains which will be integrated with the credit system as electives, projects etc., to offer your students a unique, customised training experience coupled with industry-relevant projects, accelerating your engineering admissions.</div>
                </div>
                <img src={tailormade2} alt="" />
                <div className="Section_03_Campus_Container_right">
                    <p className="p2">2. Booster programs with placement</p>
                    <div className="Section_03_Campus_Container_right_down p3">Our specialised booster programs are aimed at your final year students and graduates, equipping them with leading skills that will help them get a jumpstart on their careers.</div>
                </div>
                <img src={whyHireImg1} alt="" />
                <div className="Section_03_Campus_Container_right">
                    <p className="p2">3. 250+ specialised courses</p>
                    <div className="Section_03_Campus_Container_right_down p3">Skill-Lync’s extensive digital library carries 250+ courses and PG programs with over 6000 hours of recorded content. Choose from our wide repository of courses across core and IT domains</div>
                </div>
                <img src={skillCenter} alt="" />
                <div className="Section_03_Campus_Container_right">
                    <p className="p2">4. Skill-Lync’s Center of Excellence</p>
                    <div className="Section_03_Campus_Container_right_down p3">Skill-Lync introduces “EV Labs'' – a dedicated space to carry out virtual simulations and give your students hands-on training in electric vehicle design. Based on your preference, you can set up a virtual EV Lab or a physical lab with the latest hardware and infrastructure.</div>
                </div>
                <img src={tailorMade3} alt="" />
                <div className="Section_03_Campus_Container_right">
                    <p className="p2">5. Personalized placement support</p>
                    <div className="Section_03_Campus_Container_right_down p3">
                        <ul className="ul_sec_03">
                            <li>5 guaranteed interviews</li>
                            <li>Creative resume and LinkedIn profile creation</li>
                            <li>Mock interviews</li>
                            <li>Communication &amp; aptitude training</li>
                            <li>Technical assessments</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section_03_Campus;