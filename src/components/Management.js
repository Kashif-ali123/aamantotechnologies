import React from 'react'
import {Link} from 'gatsby'
// import Banner1 from './Banner1'

import scientist1 from '../assets/images/management/scientist1.png'
import scientist2 from '../assets/images/management/scientist2.png'
import scientist3 from '../assets/images/management/scientist3.png'
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
                <h2 style={{marginBottom:"40px", textAlign:"center"}}>We Provide Value-Based Agile Solutions to Our Customers</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Requirements Gathering
                                </Link>
                            </h3>
                            <p style ={{textAlign:"justify"}}>Requirements change is one of the most critical areas of focus in software development. Dealing with this ensures the success of the software development.</p>
                                <ul className="features-list" style={{ fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><p> Evaluate proposed change requests</p></li>
                                    <li> <p style={{marginLeft:"-47px"}}> Execute the proposed change</p></li>
                                    <li> <p style={{marginLeft:"-67px"}}> Communicate the Change</p></li>
                                    
                                </ul>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist2} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Agile Communication
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We translate your business goals and objectives into a plan of action that is delivered following the agile methodology.</p>
                            <ul className="features-list" style={{ fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><p style={{marginLeft:"-37px"}}> Communication Technology</p></li>
                                    <li> <p style={{marginLeft:"-47px"}}> Stakeholder Management</p></li>
                                    <li> <p style={{marginLeft:"-87px"}}> Report Performance</p></li>
                                    
                                </ul>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist3} alt="about" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Continuous Improvement
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We ensure to learn from the experiences of past projects and sprints to refine our process and improve in all facets.</p>
                            <ul className="features-list" style={{ fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><p style={{marginLeft:"-87px"}}> User Stories Sessions</p></li>
                                    <li> <p style={{marginLeft:"-132px"}}> Design Stories</p></li>
                                    <li> <p style={{marginLeft:"-52px"}}> Agile Development Phase</p></li>
                                    <li> <p style={{marginLeft:"-87px"}}> Release Managment</p></li>
                                    
                                </ul>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                              
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title" style={{marginLeft:"10px", color:"#000", fontWeight:"bold", fontSize:"25px", marginTop:"40px"}}>
                                    {/* <img src={starIcon} alt="banner"  style={{marginLeft:"30px"}}/>  */}
                                    Agile Challenges teams are facing today with Software Development
                                </span>
                                {/* <h2>Drive Digital Revolution Through Data Science</h2> */}
                              <ul>
                                  <li style={{fontSize:"20px"}}>Honoring new processes / procedures</li>
                                  <li style={{fontSize:"20px"}}>Communicating effectively with stakeholders and business owners.</li>
                                  <li style={{fontSize:"20px"}}>Adapting to changes in business requirements while minimizing wasted effort.</li>
                                  <li style={{fontSize:"20px"}}>Adaptive Change: Coming to Terms with Iterative Work</li>
                              </ul>

                              <p style={{marginLeft:"15px"}}>Our in house lean agile methodology mitigates those risks and ensure each area is focused and risks are mitigated ensuring smooth operations and continuous delivery.</p>
                                {/* <Link to="/about-us" className="default-btn"  style={{marginLeft:"30px"}}>
                                <i className="flaticon-right"></i> Learn More <span></span>
                            </Link> */}
                               
                            </div>
                        </div>
                        
                </div>
                <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={project1} alt="banner"  style={{width:"100%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="single-solutions-box"> */}
                            {/* <div className="icon">
                            <img src={scientist2} alt="about" />
                            </div> */}
   
                            <h3 style={{marginTop:"50px"}}>
                                <Link to="/service-details">
                                We Help You Optimize Your Software Design
                                </Link>
                            </h3>

                           
                         

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        {/* </div> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={project2} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Interface Design
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={project3} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Creative Web Solution
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>We translate your business goals and objectives into insightful UX, remarkable UI and distinctive</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={project4} alt="about" />
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
                            <img src={project5} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Business Analysis
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={project6} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Design & Development
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Business Analysis is the practice of enabling change in an organizational context, by defining needs</p>
                           

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                  </div>
            </div>
        </section>
        </>
    )
}

export default Management