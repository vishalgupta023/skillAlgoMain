import React from 'react'
import Header from "../Head&Foot/Header"
import  Carousel  from "./Carousel"
import  Programs  from "./Programs"
import  About  from "./About"
import Centers from './Centers'
import Details from './Details'
import Footer from  "../Head&Foot/Footer"

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <Programs/>
        <About/>
        <Centers/>
        <Details/>
        <Footer/>   
    </div>
  )
}
