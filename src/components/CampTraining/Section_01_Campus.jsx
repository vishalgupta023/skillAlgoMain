import React from "react";
import "./Section_01_Campus.css";
import sec_01_img from  "../assets/sec_01_img.png";
function Section_01_Campus() {
    return (
        <div>
            <div className="sec_01">
                <div className="content_sec_01">
                    <p className="p1">Skill-lync Academia</p>
                    <p className="p2">
                        Equip your engineering
                        <br />
                        students with
                        <br />
                        industry-relevant
                        <br />
                        skills
                    </p>
                    <p className="p3">The first of its kind, Skill-Lync is world's leading e-learning platform revolutionising engineering education.</p>
                    <p className="p4">
                        Compliant with UGC Guidelines 2022
                    </p>
                    <div className="sec_01_btn">
                        <button type="submit">Get Started</button>
                    </div>
                </div>
                <img src={sec_01_img} alt="" />
            </div>
            <div className="numbers_sec_01">
                <div>
                    <p className="num1">250 +</p>
                    <div className="numbers_sec_01_description">Courses</div>
                </div>
                <div>
                    <p className="num2">1250 +</p>
                    <div className="numbers_sec_01_description">Industry experts</div>
                </div>
                <div>
                    <p className="num3">1000 +</p>
                    <div className="numbers_sec_01_description">Core engineering placements <br /> <span>in last one year</span> </div>
                </div>
                <div>
                    <p className="num4">6000 +</p>
                    <div className="numbers_sec_01_description">Hours of recorded content</div>
                </div>

            </div>
        </div>
    )
}

export default Section_01_Campus;