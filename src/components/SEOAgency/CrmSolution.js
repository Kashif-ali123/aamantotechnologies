import React from 'react'
// import {Link} from 'gatsby'

import developmentImg from '../../assets/images/development.png'
import applicationImg from '../../assets/images/application.png'
import implementationImg from '../../assets/images/implementation.png'
import integrationImg from '../../assets/images/integration.png'
import supportImg from '../../assets/images/support.png'
import managementImg from '../../assets/images/hr-management.png'
import consultingImg from '../../assets/images/consulting.png'
import optimizeImg from '../../assets/images/optimize.png'
import featureImg from '../../assets/images/feature.png'


const FeaturedServices = () => {
  
    return (
        <section className="featured-services-area pt-100 pb-70 bg-gray">
            <div className="container">
                <div className="section-title">
                    <h2>Result-Driven Customer Relationship Management Solutions</h2>
                    <p>Aamanto provides dozens of CRM software solutions for small businesses, including free options and features for startups.</p>
                </div>
               
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-featured-services-box">
                          
                            <img src={developmentImg} alt="development"  style={{marginBottom:"15px", marginLeft:"20px",marginTop:"20px"}}  />
                           
                            <h3 style={{color:"#1e1666", marginLeft:"20px"}}>
                                
                                CRM Software Development
                               
                            </h3>
                            <p style={{ marginLeft:"20px"}}> CRM software that serves your business model and objectives. We will analyze essential elements to deliver you result-oriented solutions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-featured-services-box">
                           
                            <img src={applicationImg} alt="development"  style={{marginBottom:"15px", marginTop:"15px", marginLeft:"20px"}} />
                           
                            <h3 style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                                CRM Mobile Application
                              
                            </h3>
                            <p style={{ marginLeft:"20px"}}> Aamanto offers a CRM application service to deliver an integrated platform that is compatible with all the devices and operating systems.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={implementationImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Implementation
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}> You need to implement the program with meticulous planning and a step-by-step development process and that is where our team has got your back.</p>
                        </div>
                    </div>
                   
                               
                            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={integrationImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Integration Service
                            
                            </h3>
                            <p style={{ marginLeft:"20px"}}> If you already have CRM software and want to integrate it with other applications, then Aamanto is the perfect destination for you. We will help you integrate your application smoothly and without any error.</p>
                        </div>
                    </div>
                  
                          
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={supportImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Maintenance & Support
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}> Considering how crucial the CRM platform is, you cannot compromise on its quality. A small bug can ruin all the clients’ information and data in a split second.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={managementImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Customization
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>We understand that one solution cannot serve everyone’s purpose. Every business has an individual demand and needs according to their goals.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={consultingImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Consulting Services
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>Then connect with our CRM consultancy team for help. Our developers and strategists will scrutinize your project to find the perfect solution for your organization.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={optimizeImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Migration Solutions
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>We have employed a separate team of CRM developers who provide you with support to migrate your data to a new CRM platform without hampering any information or breaking any rules.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-featured-services-box">
                        <img src={featureImg} alt="implementation"  style={{marginBottom:"15px", marginTop:"40px", marginLeft:"20px"}} />
                           
                            <h3  style={{color:"#1e1666", marginLeft:"20px"}}>
                               
                            CRM Extensions
                            
                            </h3>
                            <p style={{marginLeft:"20px"}}>Aamanto has come up with CRM extension development services to make your website powerful and fully-featured. With extended functionalities of CRM, you can solve business problems and address your clients’ queries instantly.</p>
                        </div>
                    </div>
                            
                            
                        </div>
                        
                        </div>  
                
            
        </section>
    )
}

export default FeaturedServices