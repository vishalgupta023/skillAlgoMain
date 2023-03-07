import React from 'react'
import Training01 from './TrainingComponent/Training01'
import Training02 from './TrainingComponent/Training02'
import "./trainingStyle.css"
import Header from "../Head&Foot/Header"
import Training03 from './TrainingComponent/Training03'
import Training04 from './TrainingComponent/Training04'
import Training05 from './TrainingComponent/Training05'

export default function Training() {
  return (
    <div>
      <Header/>
      <Training01/>
      <Training02/>
      <Training03/> 
       <Training04/>
      <Training05/> 
    </div>
  )
}
