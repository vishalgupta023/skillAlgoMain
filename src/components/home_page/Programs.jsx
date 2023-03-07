import "./programstyle.css"
import ProgramCard from "./ProgramCard"
import React from 'react'

export default function Programs() {
  return (
    <div className="main-programs">
      <h2 style={{ borderBottom: "2px solid gray", display: "inline-block", paddingBottom: "5px" }} >Popular programes</h2>
      <p style={{ marginTop: "-5px", color: "#6749C6" }}>most in demand and watched by people</p>
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
