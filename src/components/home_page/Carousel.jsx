import React, { useEffect } from 'react'
import "./CarouselStyle.css"
import CorouselData from './CarouselData'
export default function Carousel() {

  useEffect(()=>{ 
    let box=document.querySelector(".carousel");
   // console.log(box)
   let id;
   function event(){
     id=setInterval(()=>{
      box.scrollLeft=box.scrollLeft+box.clientWidth;
      // console.log(box.scrollLeft)
      // console.log((CorouselData.length-1)*box.clientWidth)
      if(box.scrollLeft==(CorouselData.length-1)*box.clientWidth){
          box.scrollLeft=0
          // console.log("jsvjk")
     
        // if(box.scrollLeft==0){
        //   clearInterval(id)
        // }
      }
    },2500)
   }
   event();

 box.addEventListener("mouseenter",()=>{
  //  console.log("event called");
  //  console.log(id)
   clearInterval(id)
 })
 box.addEventListener("mouseleave",()=>{
  //  console.log("event fired");
   event();
 })
  },[])

  return (
    <div className='carousel-container'>
        <div className="carousel">
        {
            CorouselData.map(item=>(
                <img src={item.img} alt="Advertisement" style={{objectFit:"cover",width:"100%"}}/>    
            ))
        }
        </div>
    </div>
  )
}
