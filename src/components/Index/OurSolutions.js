import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="star"  /> 
                        Our Services
                    </span>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p style={{textAlign:"justify"}}>We understand your business requirements and we have the right team to design and deliver your solutions. Whether you require software development, digital transformation, cloud adoption, data science, AI and analytical services – we are there to help you!</p>
                </div>

                <div className="row">
              
                    <div className="col-lg-4 col-sm-6" >
                    
                        <div className="single-solutions-box" >
                     
                            <div className="icon">
                                <i className="flaticon-rocket" ></i>
                           
                            </div>
                            
                          
                            <h3 >
                                <Link to="#"  >
                                Software Development
                                </Link>
                            </h3>
                            <p style={{textAlign:"justify"}}>Transform your ideas into reality with the help of our experienced software development team.</p>
                            
                            <Link to="/service-details" className="view-details-btn" >
                                View Details
                            </Link>
                            </div>
                        </div>
                    
                 
                   
                    <div className="col-lg-4 col-sm-6" >
                  
                        <div className="single-solutions-box" >
                      
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
                        

                            <h3>
                                <Link to="#" >
                                Cloud Adoption
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Embrace the power of the cloud to scale your business accordingly while improving architectural flexibility.</p>
                            {/* <ul>
                                <li>Website Development</li>
                            </ul> */}
                            
                            <Link to="/service-deatils" className="view-details-btn" >
                                View Details
                            </Link>
                        </div>
                    </div>
                    

                    <div className="col-lg-4 col-sm-6 " >
                    
                        <div className="single-solutions-box" >
                        
                            <div className="icon">
                                <i className="flaticon-money"></i>
                                
                            </div>
                            
                          
                            
                         
                            <h3>
                                <Link to="#" >
                                Data Science
                                </Link>
                            </h3> 

                            <p style={{textAlign:"justify"}}>Derive insights from your data to better understand your business and make data-driven decisions.</p>
                            
                            
                            <Link to="/services-data" className="view-details-btn" >
                                View Details
                            </Link>
                            </div>
                            </div>
                           
                    </div>
                </div>
            
        </section>
    )
}

export default OurSolutions;