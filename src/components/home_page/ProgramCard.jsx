import React from 'react'
import "./programstyle.css"
import {VscEye} from "react-icons/vsc"

export default function ProgramCard() {
  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src="https://static.uacdn.net/thumbnail/course/v2/1CA2DB91-E188-422D-8D61-70484FE41AB2_special_class.png?q=75&w=384&fm=webp" alt="" 
        width="100%"/>
        <p className='watch-count'> <VscEye/> <span style={{fontSize:"12px",fontWeight:"500"}}>6.2k</span></p>
      </div>  
      <div className="content">
         <div className="row1">
          <h6 className='langauge'>Hindi</h6>
          <h4 className='subject-name'>Subject name</h4>
        </div>
        <h5 className='card-title'>Subject title or importance of subject</h5>
        <p style={{fontSize:"16px",marginTop:"10px",color:"gray"}}>faculty name</p>
      </div>

    </div>
  )
}
