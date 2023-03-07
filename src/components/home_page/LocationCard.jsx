import React from 'react'
import "./locationStyle.css"

export default function LocationCard() {
  return (
    <div className='location-card'>
        <div className='location-container'>
           <img style={{objectFit:"fill"}} src="https://static.uacdn.net/ocx/centreicons/bangalore-active.png?q=75&fm=webp&w=48" alt="" width="35px" height="37px"/>
           <div className="state">
            <p style={{fontWeight:"500"}}>banglore</p>
            <p style={{fontSize:"14px",marginTop:"-5px"}}>karnataka</p>
           </div>
        </div>
    </div>
  )
}
