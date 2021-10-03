import React from 'react'
import {Link} from 'gatsby'
// import Banner1 from './Banner1'

import team3 from '../assets/images/team3.jpg'
import moe from '../assets/images/moe.png'
import masood from '../assets/images/masood.png'
import kashif from '../assets/images/kashif.png'

const Team1 = () => {
    return (
        <>
        {/* <Banner1 /> */}
        <section className="solutions-area pt-100 pb-70">

            <div className="container">
                <h2 style={{marginBottom:"40px", textAlign:"center"}}>Our motto: be quick,
but don't hurry.</h2>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-6">
                        {/* <div className="single-solutions-box"> */}
                            <div className="icon">
                            <img src={team3} alt="about" style={{marginLeft:"150px"}} />
                            </div>
                           
                           <h1 style={{marginTop:"50px"}}>Our talented & experienced team
delivers amazing results.</h1>

                         <h4 style={{textAlign:"center", marginTop:"20px"}}>we have a can-do attitude backed up with 30 years+ industry experience delivering high-end, on time and in budget projects.</h4>
                           
                        {/* </div> */}
                    </div>

                    <h1 style={{textAlign:"center", marginTop:"80px", marginBottom:"30px"}}>Meet our team members</h1>
                    <p style={{marginBottom:"60px"}}>Aamanto is led by the firm’s founder and CEO, Moe Mahmood, CTO Architecture & Solutions, Masood Khan, and Kashif Khan leading Data Analytics and Artificial Intelligence.  We each are experienced in leadership at each of our platforms.</p>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="image">
                            <img src={moe} alt="about"  style={{borderRadius:"50%", width:"250px"}} />
                            </div>
                           
                           <h1 style={{marginTop:"50px"}}>Moe Mahmood</h1>

                         <h6 style={{textAlign:"center", marginTop:"20px"}}>CEO / Founder of Aamanto</h6>
                      <ul style={{listStyleType:"none"}}>
                         <li >
                                   
                                    <a href="mailto:moe.mahmood@aamanto.com">moe.mahmood@aamanto.com</a>
                                </li>
                           </ul>
                           <a href="https://www.linkedin.com/in/mahmoodmobasher/" className="view-details-btn">
                               in
                            </a>
                        </div>
                       
                    </div>

                   

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="image">
                            <img src={masood} alt="about"  style={{borderRadius:"50%", width:"250px"}} />
                            </div>
                           
                           <h1 style={{marginTop:"50px"}}>Masood Khan</h1>

                         <h6 style={{textAlign:"center", marginTop:"20px"}}>Chief Technology Officer</h6>
                      <ul style={{listStyleType:"none"}}>
                         <li >
                                   
                                    <a href="mailto:masood.khan@aamanto.com">masood.khan@aamanto.com</a>
                                </li>
                           </ul>

                           <a href="https://www.linkedin.com/in/masood-khan-08051729/" className="view-details-btn">
                               in
                            </a>
                        </div>
                       
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="image">
                            <img src={kashif} alt="about"  style={{borderRadius:"50%", width:"250px"}} />
                            </div>
                           
                           <h1 style={{marginTop:"50px"}}>Kashif Khan</h1>

                         <h6 style={{textAlign:"center", marginTop:"20px"}}>VP - Data Analytics & Artificial Intelligence</h6>
                      <ul style={{listStyleType:"none"}}>
                         <li >
                                   
                                    <a href="mailto:kashif.khan@aamanto.com">kashif.khan@aamanto.com</a>
                                </li>
                           </ul>
                           <a href="https://www.linkedin.com/in/kmkhan3/" className="view-details-btn">
                               in
                            </a>
                        </div>
                       
                    </div>

  
                   
                 
                    </div>
                    </div>
                    
        </section>
        </>
    )
}

export default Team1