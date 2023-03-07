import React from 'react'
import "./achivementstyle.css"
import about1 from "../images/about1.jpeg"
import about2 from "../images/about2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        AOS.init({
            duration:1000
        });
      }, [])
    return (
        <div className='about-container'>
            <div className="about-flex">
                <div className="image-container"  data-aos="fade-up" >
                    <img src={about1} alt="" className='about1-img'/>
                    <img src={about2} alt="" className='about2-img'/>
                </div>
                <div className="about-content">
                    <h2 className='about-heading'>About Us</h2>
                    <p  data-aos="fade-up" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet nisi a laboriosam quae deserunt quod officia est! Distinctio reprehenderit ad ipsum nesciunt eligendi fugiat saepe iure modi ratione perspiciatis!</p>
                    <p  data-aos="fade-up" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rem laborum voluptas eveniet voluptatum quasi nesciunt accusamus vero quos voluptate libero ipsa quod nisi, soluta accusantium modi dignissimos repudiandae dolorem.</p>

                    <button className='read-btn'  data-aos="fade-up" >Read More</button>
                </div>

            </div>
        </div>

    )
}
