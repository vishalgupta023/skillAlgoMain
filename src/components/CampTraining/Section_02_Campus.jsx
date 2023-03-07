import React from "react";
import "./Section_02_Campus.css";
import capgemini from "../assets/capgemini.png";
import continental from "../assets/continental.png";
import cyient from "../assets/cyient.png";
import expleo from "../assets/expleo.png";
import hcl from "../assets/hcl.png";
import kpit from "../assets/kpit.png";
import mahindraRise from "../assets/mahindraRise.png";
import ola from "../assets/ola.png";
import renault from "../assets/renault.png";
import sona from "../assets/sona.png";
import tata from "../assets/tata.png";
import tataelxsi from "../assets/tataelxsi.png";
import techMahindra from "../assets/techMahindra.png";
import zf from "../assets/zf.png";
import desktopPlace from "../assets/desktopPlacementImage.png"

function Section_02_Campus() {
    return (
        <div>
            <div className="sec_02_h1">
                <p className="p1" style={{ fontSize: '36px' }}><b>Top industry players</b></p>
                <p className="p2" style={{ fontSize: '36px' }}>Who have hired from Skill-lync</p>
            </div>
            <div class="marquee">
                <div className="companies">
                    <img src={capgemini} alt="testimonials" />
                    <img src={continental} alt="testimonials" />
                    <img src={cyient} alt="testimonials" />
                    <img src={expleo} alt="testimonials" />
                    <img src={hcl} alt="testimonials" />
                    <img src={kpit} alt="testimonials" />
                    <img src={mahindraRise} alt="testimonials" />
                    <img src={ola} alt="testimonials" />
                    <img src={renault} alt="testimonials" />
                    <img src={sona} alt="testimonials" />
                    <img src={tata} alt="testimonials" />
                    <img src={tataelxsi} alt="testimonials" />
                    <img src={techMahindra} alt="testimonials" />
                    <img src={zf} alt="testimonials" />
                </div>
            </div>
            <div className="deskimg"><img src={desktopPlace} alt="" /></div>
        </div>
    )
}

export default Section_02_Campus;