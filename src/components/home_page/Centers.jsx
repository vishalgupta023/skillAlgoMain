import React, { useEffect, useState } from 'react'
import "./centerstyle.css"
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import LocationCard from './LocationCard'
import LocationData from './LocationDetails'

export default function Centers() {
    // LOCATION SCROLqueLING
    const[box,setBox]=useState(null)
    useEffect(()=>{
        setBox(document.querySelector(".location"));
    })
    function leftButton(){
        box.scrollLeft=box.scrollLeft-180
        // console.log("hello")
    }
     function rightButton(){
        box.scrollLeft=box.scrollLeft+180;
        // console.log("hello")
    }

    // let leftButton=document.querySelector(".left-btn")
    // let rightButton=document.querySelector(".right-btn")
    

  return (
    <div className='centers-container'>
        <div className="centers-main">
            {/* <img src="https://static.uacdn.net/web-cms/uncentre_LP_b041622b0f.jpg?q=75&fm=webp&w=1096" alt="video-tour" /> */}
            <div className="center-details">
                <h4 style={{marginTop:"50px"}}>Explore Unacademy Centres</h4>
                <p style={{color:"#666"}}>Learn from top educators in your own city</p>
                <div className='center-char'>
                    <p><span style={{color:"#6749C6"}}><IoMdCheckmarkCircleOutline/></span> In-person classes & doubt solving</p>
                    <p><span style={{color:"#6749C6"}}><IoMdCheckmarkCircleOutline/></span> Exclusive quiet spaces for your self-study</p>
                    <p><span style={{color:"#6749C6"}}><IoMdCheckmarkCircleOutline/></span> Bonus access to online learning</p>
                </div>
                <div className="locations">
                    <h5 style={{marginBottom:"25px"}}>Our Centres are now open across India</h5>
                    <div className="scroll-buttons">
                    <button onClick={leftButton} className='left-btn'>&lt;</button>
                    <button onClick={rightButton} className='right-btn'>&gt;</button>
                    </div>
                    <div className="location">
                        {
                            LocationData.map((item,i)=>{
                            return(
                                <LocationCard key={i}/>
                            )
                            })
                        }
                        <LocationCard/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
