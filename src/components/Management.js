import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
// import Banner1 from './Banner1'

import scientist1 from '../assets/images/icons/icon4.png'
import scientist2 from '../assets/images/icons/icon5.png'
import scientist3 from '../assets/images/icons/icon6.png'
import project1 from '../assets/images/management/project1.png'
import project2 from '../assets/images/management/project2.png'
import project3 from '../assets/images/management/project3.png'
import project4 from '../assets/images/management/project4.png'
import project5 from '../assets/images/management/project5.png'
import project6 from '../assets/images/management/project6.png'



const Management = () => {
    return (
        <>
        {/* <Banner1 /> */}
        <section className="solutions-area pt-100 pb-70">

            <div className="container">
            <ReactWOW delay='.5s' animation='fadeInRight'>
         
                <h2 style={{marginBottom:"40px", textAlign:"center"}}>We Provide Value-Based Agile Solutions to Our Customers
                
                </h2>
                </ReactWOW>
               
                
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                       
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={scientist1} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <h3>
                                <Link to="#">
                                Requirements Gathering
                                </Link>
                            </h3>
                            <p style ={{textAlign:"justify"}}>Requirements change is one of the most critical areas of focus in software development. Dealing with this ensures the success of the software development.</p>
                                
                                   <p style={{textAlign:"justify"}}> Evaluate proposed change requests</p>
                                     <p style={{textAlign:"justify"}}> Execute the proposed change</p>
                                    <p style={{textAlign:"justify"}}> Communicate the Change</p>
                                    
                                
                                </ReactWOW>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={scientist2} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <h3>
                                <Link to="">
                                Agile Communication
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We translate your business goals and objectives into a plan of action that is delivered following the agile methodology.</p>
                          
                                    <p style={{textAlign:"justify"}}> Communication Technology</p>
                                   <p style={{textAlign:"justify"}}> Stakeholder Management</p>
                                   <p style={{textAlign:"justify"}}> Report Performance</p>
                                    
                                
                               </ReactWOW>
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={scientist3} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <h3>
                                <Link to="#">
                                Continuous Improvement
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We ensure to learn from the experiences of past projects and sprints to refine our process and improve in all facets.</p>
                            
                                   <p style={{textAlign:"justify"}}> User Stories Sessions</p>
                                     <p style={{textAlign:"justify"}}> Design Stories</p>
                                    <p style={{textAlign:"justify"}}> Agile Development Phase</p>
                                     <p style={{textAlign:"justify"}}> Release Managment</p>
                                    
                               
                                </ReactWOW>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                              
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" >
                        <div className="about-content">
                            <div className="content">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                                <span className="sub-title" style={{marginLeft:"10px", color:"#000", fontWeight:"bold", fontSize:"25px", marginTop:"40px"}}>
                                    {/* <img src={starIcon} alt="banner"  style={{marginLeft:"30px"}}/>  */}
                                    Agile Challenges teams are facing today with Software Development
                                </span>
                                {/* <h2>Drive Digital Revolution Through Data Science</h2> */}
                               <ul>
                                  <li ><p>Honoring new processes / procedures</p></li>
                                  <li ><p>Communicating effectively with stakeholders and business owners.</p></li>
                                  <li ><p>Adapting to changes in business requirements while minimizing wasted effort.</p></li>
                                  <li ><p>Adaptive Change: Coming to Terms with Iterative Work</p></li>
                                </ul>

                              <p style={{marginLeft:"15px"}}>Our in house lean agile methodology mitigates those risks and ensure each area is focused and risks are mitigated ensuring smooth operations and continuous delivery.</p>
                                {/* <Link to="/about-us" className="default-btn"  style={{marginLeft:"30px"}}>
                                <i className="flaticon-right"></i> Learn More <span></span>
                            </Link> */}
                            </ReactWOW>
                               
                            </div>
                        </div>
                        
                </div>
                <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                        <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={project1} alt="banner"  style={{width:"100%"}}/>
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="single-solutions-box"> */}
                            {/* <div className="icon">
                            <img src={scientist2} alt="about" />
                            </div> */}
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <h3 style={{marginTop:"50px"}}>
                                <Link to="#">
                                We Help You Optimize Your Software Design
                                </Link>
                            </h3>
                            </ReactWOW>

                           
                         

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        {/* </div> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={project2} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <h3>
                                <Link to="#">
                                Interface Design
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={project3} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <h3>
                                <Link to="#">
                                Creative Web Solution
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We translate your business goals and objectives into insightful UX, remarkable UI and distinctive</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={project4} alt="about" />
                            </ReactWOW>
                            </div>
   
                            {/* <h3>
                                <Link to="/service-details">
                                Creative Web Solution
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We translate your business goals and objectives into insightful UX, remarkable UI and distinctive</p> */}
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={project5} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <h3>
                                <Link to="#">
                                Business Analysis
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={project6} alt="about" />
                            </ReactWOW>
                            </div>
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                            <h3>
                                <Link to="#">
                                Design & Development
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Business Analysis is the practice of enabling change in an organizational context, by defining needs</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            </ReactWOW>
                        </div>
                    </div>

                  </div>
            </div>
        </section>
        </>
    )
}

export default Management