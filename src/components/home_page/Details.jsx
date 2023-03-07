import React from 'react'
import "./details.css"
import {HiOutlineClipboardCheck} from "react-icons/hi"

export default function Details() {
  return (
    <div className='main-container' >
      <div className="main-details">
        <div>
          <h4>All about JEE (Mains and Advanced) Exam</h4>
          <p style={{color:"#666"}}>Prepare for the Highly Competitive Entrance Exam with SkillAlgo</p>
          <div className="questions">
            <div className='whatIsThis'>
              <p>What is that Course <span className='arrow'></span></p>
              <p>Eligiblity for Course<span className='arrow'></span></p>
            </div>
            <div className='whatIsThis'>
              <p>What is this 3 <span className='arrow'></span></p>
              <p>What is this 4 <span className='arrow'></span></p>
            </div>
          </div>
        </div>
        <img src="https://static.uacdn.net/production/_next/static/images/all-about-exam.svg?q=75&w=128" alt="" />
      </div>
      <div className="new_things">
        <div className="adv-footer">
          <div className='adv-content'>
            <h1 style={{width:"600px"}}>Online preparation like never before</h1>
            <div className='advantage'>
              <p><span className='span-icon'><HiOutlineClipboardCheck/></span> Interactive live classes</p>
              <p><span className='span-icon'><HiOutlineClipboardCheck/></span> Mock tests and practice questions</p>
              <p><span className='span-icon'><HiOutlineClipboardCheck/></span> High-quality notes</p>
              <p><span className='span-icon'><HiOutlineClipboardCheck/></span> Doubt solving</p>
            </div>
            <div className='adv-image'>
              <img src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=150" alt="appleStore"/><img src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=150" alt="playstore" height="50px"/>
            </div>
          </div>
          <div>
            {/* <img src="https://static.uacdn.net/production/_next/static/images/NewAppDownload.svg?q=75&w=640" alt="advertisement" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
