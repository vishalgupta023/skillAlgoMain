import React from 'react'
import {Link} from 'react-router-dom'

export default function Training03() {
  return (
    <div className='Training03-main-container'>
       <div className="training03-contents">
         <div className="training03-contenet1" style={{borderBottom:"2px solid white"}}>
            <div className="leftbox03">
               <div className="training03-section1-img"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="rightbox03">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae fuga quo asperiores accusamus, nisi quia repellat earum consectetur cumque, veritatis dicta hic officia eius debitis labore commodi obcaecati, reprehenderit accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum voluptatibus officiis? Quis fugit vero magni ab iure fuga eos deleniti, veniam nostrum.
            </div>
         </div>   
         <div className="training03-contenet2">
           <h2>Skill-Lync Advantage</h2>
           <div className="advantage-content">
            <div className="advantage1">
                <img src="https://skill-lync.com/nsimages/advantage1.png" alt="" />
                <p>Customized bootcamps & technical projects</p>
            </div>
            <div className="advantage1">
                <img src="https://skill-lync.com/nsimages/advantage1.png" alt="advantage1.png" />
                <p>Customized bootcamps & technical projects</p>
            </div>
            <div className="advantage1">
                <img src="https://skill-lync.com/nsimages/advantage1.png" alt="" />
                <p>Customized bootcamps & technical projects</p>
            </div>
            <div className="advantage1">
                <img src="https://skill-lync.com/nsimages/advantage1.png" alt="" />
                <p>Customized bootcamps & technical projects</p>
            </div>
           </div>
         </div>
         <div className="training03-contenet3">
            <h3>Impactful Skill Development for all engineering teams</h3>
            <div className="training03-branches">
                <div className="engineer-branch">
                    <p style={{color:"#5AD6A0",fontWeight:"500"}}>CHOOSE AN ENGINEERING DOMAIN</p>
                    <div className="branch-button">
                        <button>Mechaical</button>
                        <button>Mechaical</button>
                        <button>Mechaical</button>
                        <button>Mechaical</button>
                        <button>Mechaical</button>
                        <button>Mechaical</button>
                    </div>
                </div>
                <div className="branches-link">
                    <p style={{color:"#5AD6A0",fontWeight:"500"}}>TOP COURSES FROM SELECTED DOMAIN - MECHANICAL</p>
                    <div className="all-branch-link">
                        <Link>Introduction to Model-Based Development using MATLAB and Simulink</Link>
                        <Link>Introduction to Model-Based Development using MATLAB and Simulink</Link>
                        <Link>Introduction to Model-Based Development using MATLAB and Simulink</Link>
                        <Link>Introduction to Model-Based Development using MATLAB and Simulink</Link>
                        <Link>Introduction to Model-Based Development using MATLAB and Simulink</Link>
                    </div>

                </div> 
            </div>
         </div>
       </div>
    </div>
  )
}
