import React from "react";
import "./headerStyle.css"
import { CiSearch } from "react-icons/ci"
import { IoMdCall } from "react-icons/io"
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    
  

    return (
        <header className="header">
            <div className="main-nav">
                <div className="upperBody">
                    <div className="up-nav-left-content">
                        <img src="https://static.uacdn.net/production/_next/static/images/logoCups.svg?q=75&fm=webp&w=32" alt="Unacadmey-Logo" width="25px"/>
                        <button style={{backgroundColor:"white",fontSize:"16px",
                    marginLeft:"0px",fontWeight:"600",border:"none",color:"#555b7"}}>
                           <Link style={{textDecoration:"none",color:"black"}} to="/">IIT JEE </Link> <span ><i class="arrow down"></i></span>
                        </button>
                    </div>
                    <div className="up-nav-right-content">
                        <div className="search-nav">
                            <CiSearch className="search-icon" />
                            <input type="text" placeholder="Search courses, test series and educators" />
                        </div>
                        <div className="nav-contact">
                            <IoMdCall className="nav-phone-icon" />
                            <div className="nav-contact-num">
                                <div style={{ fontSize: "12px",marginLeft:"5px",color:"gray",marginBottom:"-3px" }}>Talk to our experts</div>
                                <div style={{ fontSize: "14px", fontWeight: "bold",color:"#666"}}>+91-8585858585</div>
                            </div>
                        </div>
                            <img src="https://static.uacdn.net/production/_next/static/images/newGoalHeaderGift.svg?q=75&w=1920" alt="gift-img" width="40px"/>

                        <button className="nav-btn login-btn" style={{backgroundColor:"#fff"}}>Log in</button>
                        <button className="nav-btn" style={{backgroundColor:"#3c4852",color:"white"}}>Join for free</button>
                    </div>
                </div>
                <div className="lowerBody">
                    <div className="lowerBodyChild">
                    <a href="#">Get started</a>
                    <NavLink  className="nav_link" to='/Main'>Main</NavLink>
                    {/* <a href="#">Batch</a> */}
                    <NavLink className="nav_link" to='/campus'>Campus Link</NavLink>
                    <a href="/training">Training</a>
                    <a href="#">Subscription plan</a>
                    <a href="#">Success stories</a>
                    <a href="#">About exam</a>
                    </div>
                </div>
            </div>
        </header >
    )
}
