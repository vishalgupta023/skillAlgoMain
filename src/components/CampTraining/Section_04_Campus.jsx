import React from "react";
import "./Section_04_Campus.css"
import starSolid from "../assets/starSolid.svg"
import starHalfSolid from "../assets/starHalfSolid.svg"
import googleRating from "../assets/googleRating.png"
import ASHWIN_1616570244 from "../assets/ASHWIN_1616570244.png";
import ABHIJEET_Dhillon from "../assets/ABHIJEET_Dhillon.png";
import ABHISHEK_Hupele from "../assets/ABHISHEK_Hupele.png";
import KANNAN_Saravanan from "../assets/KANNAN_Saravanan.png";


function Section_04_Campus() {
    return (
        <div>
            <p className="p1 p1_sec03" style={{ fontSize: '36px', marginTop: '65px' }}>What our students say?</p>
            <div className="sec04_container">
                <div className="sec04_container2">
                    <img src={googleRating} alt="" />
                    <hr aria-orientation="vertical" className="line" />
                    <div className="star-rating">
                        4.6
                        <div className="stars">
                            <img src={starSolid} alt="" />
                            <img src={starSolid} alt="" />
                            <img src={starSolid} alt="" />
                            <img src={starSolid} alt="" />
                            <img src={starHalfSolid} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card_container">
                    <div className="card">
                        <img src={ASHWIN_1616570244} alt="" />
                        <div className="card_info">
                            <h3 className="card_title"> Ashwin Rajesh</h3>
                            <a href=""><span className="card__category">Course: Post Graduate Program in CAD</span></a>
                        </div>
                        <p>Skill lync is a place where I discovered myself as a Mechanical Engineer. It has been a wonderful journey. Had I not acquired such skills, I wouldn’t have come across opportunities like this.</p>
                        <a href="">Read More</a>
                    </div>
                    <div className="card">
                        <img src={KANNAN_Saravanan} alt="" />
                        <div className="card_info">
                            <h3 className="card_title"> Kannan Saravanan</h3>
                            <a href=""><span className="card__category">Course: Post Graduate Program in CAE</span></a>
                        </div>
                        <p>All the projects that I did in Skill-Lync are extremely close to the industry standards and are very useful to crack the interview as a fresher.</p>
                        <a href="">Read More</a>
                    </div>
                    <div className="card">
                        <img src={ABHISHEK_Hupele} alt="" />
                        <div className="card_info">
                            <h3 className="card_title"> Abhishek Hupele</h3>
                            <a href=""><span className="card__category">Course: Post Graduate Program in Hybrid Electric Vehicle Design and Analysis</span></a>
                        </div>
                        <p>Skill lync is a place where I discovered myself as a Mechanical Engineer. It has been a wonderful journey. Had I not acquired such skills, I wouldn’t have come across opportunities like this.</p>
                        <a href="">Read More</a>
                    </div>
                    <div className="card">
                        <img src={ABHIJEET_Dhillon} alt="" />
                        <div className="card_info">
                            <h3 className="card_title"> Abhijeet Dhillon</h3>
                            <a href=""><span className="card__category">Course: Post Graduate Program in Hybrid Electric Vehicle Design and Analysis</span></a>
                        </div>
                        <p>Skill Lync support team right from the CATIA support engineers to Simulink support engineers really helped me improve my skills at various software like Hypercrash, ANSYS Fluent. For all the courses I'll give 10/10.</p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section_04_Campus;