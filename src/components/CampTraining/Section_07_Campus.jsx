import React from "react";
import "./Section_07_Campus.css";
import sec_07_img from "../assets/sec_07_img.png"



function Section_07_Campus() {
    return (
        <div>
            <div className="sec_01">
                <img  className="sec_07_img" src={sec_07_img} alt="" />
                <div className="content_sec_01">
                    <p className="p2">
                        View projects by <br />
                        Skill-Lync students
                    </p>
                    <p className="p3">At Skill-Lync, students undertake
                        multiple technical projects &
                        share their reports.</p>
                    <div className="sec_01_btn">
                        <button type="submit">Know More</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section_07_Campus;