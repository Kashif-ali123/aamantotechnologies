import React from 'react'
// import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'

// import developmentImg from '../../assets/images/development.png'
// import applicationImg from '../../assets/images/application.png'
// import implementationImg from '../../assets/images/implementation.png'
import integrationImg from '../../assets/images/integration.png'
import supportImg from '../../assets/images/support.png'
import managementImg from '../../assets/images/hr-management.png'
import consultingImg from '../../assets/images/consulting.png'
// import optimizeImg from '../../assets/images/optimize.png'
// import featureImg from '../../assets/images/feature.png'


const FeaturedServices = () => {
  
    return (
        <section className="featured-services-area pt-100 pb-70 bg-gray">
            <div className="container">
                <div className="section-title">
                    <h2>Different Kinds of Custom CRM Development Solutions: </h2>
                   
                </div>
               
                <div className="row">
                  
                   
                               
                            <div className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={integrationImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            Strategic CRM 
                            
                            </h3>
                            <p style={{ marginLeft:"20px"}}> Strategic CRM is the answer for firms that priorities and value customers above anything else. It collects, classifies, and applies client information seamlessly, as well as analyses market trends to deliver the finest solutions.</p>
                        </div>
                    </div>
                  
                          
                    <div className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={supportImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            Operational CRM
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}> Client-centric processes are the emphasis of operational CRM, in which all data and information about a single client is consolidated into a single file. You can provide better services if you know the client purchasing history, previous communications, contact information, and other factors.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={managementImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            Collaborative CRM
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>The goal of collaborative CRM is to make business transactions go as smoothly as possible. It combines data about external interactions and gives all relevant information to all parties concerned. Instant messaging, EDI, and other communication tools and technologies are included.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={consultingImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            Analytical CRM
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>Analytical CRM allows you to analyses customer data to find the best marketing and sales strategies for increasing future sales. The latest market tendencies can be discovered through data mining and analysis from a broader perspective.</p>
                        </div>
                    </div>
                    <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Get a Code
                                        <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                            
                            
                        </div>
                        
                        </div>  
                
            
        </section>
    )
}

export default FeaturedServices