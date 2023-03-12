import "./programstyle.css"
import ProgramCard from "./ProgramCard"
import React, { useEffect } from 'react'

export default function Programs() {
  let box;
  useEffect(()=>{
     box=document.querySelector(".program-container");
    console.log(box)
  });
  function lessClick(){
    box.scrollLeft=box.scrollLeft-box.clientWidth;
  }
  function greatClick(){
    box.scrollLeft=box.scrollLeft+box.clientWidth;
  }


  return (
    <div className="main-programs">
      <div className="programs-head">
      <h2 style={{ borderBottom: "2px solid gray", display: "inline-block", paddingBottom: "5px" }} >Popular programes</h2>
      <p style={{ marginTop: "-5px", color: "#6749C6" }}>most in demand and watched by people</p>
      <button onClick={lessClick} className="lessTnBtn">&lt;</button>
      <button onClick={greatClick} className="greatTnBtn">&gt;</button>
      </div>

      <div className="overflow-container">
        <div className="program-container">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </div>
  )
}
