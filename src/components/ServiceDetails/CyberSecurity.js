import React from 'react'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/ser.jpg'
import project2 from '../../assets/images/services/cy.jpg'
// import charts from '../../assets/images/services/charts1.jpg'

const CyberSecurity = () => {
    return (
        <>
        <section className="services-details-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="services-details-image" >
                            {/* <img src={details1} alt="about"  style={{height:"550px"}}/> */}
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title"><h1>CYBER SECURITY</h1></span>
                            <p className="service-description">Starting from a set of identification data items, such as brands, names, IPs, DNS domains, etc., data is obtained, correlated and transformed into information, which is then evaluated and transformed into intelligence. This intelligence is the actionable asset you require to take your digital security to an advanced level. We can provide a much broader understanding of critical infrastructure, computer security, and security policy to your firm since we're always on the pulse of current cybersecurity developments. Allow us to serve as your sole security resource or to supplement your existing IT capabilities by approaching your environment objectively and resolving your most difficult security concerns.</p>
                           
                           
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src={project2} alt="about" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Important Facts</h3>
                                        <ul>
                                            <li>The Field of Cyber Security</li>
                                            <li>Communicate data breaches</li>
                                            <li>Appoint a data protection officer</li>
                                            <li>Require user consent to process information</li>
                                            <li>Anonymize data for privacy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p> */}
                            <h3>Cyber Security Benefits</h3>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Protection for your business
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Increased productivity
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Inspires customer confidence
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Transforming the retail experience
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Stops your website from going down
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Stand out from the competition
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Allows Employees to Work Safely 
                                    </div>
                                </div>
                               </div>

                            {/* <h3>Technologies That We Use</h3>
                            <ul className="technologies-features">
                                <li><span>JavaScript</span></li>
                                <li><span>Python</span></li>
                                <li><span>Java</span></li>
                                <li><span>React Js </span></li>
                                <li><span>PHP</span></li>
                                <li><span>Swift</span></li>
                                <li><span>C# (C- Sharp)</span></li>
                                <li><span>Reactive Native</span></li>
                                <li><span>Angular</span></li>
                                <li><span>Node Js</span></li>
                                <li><span>MongoDB</span></li>
                                <li><span>MYSQL</span></li>

                                
                            </ul> */}
                            {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                <img src={charts} alt="about" />
                            </div> */}
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div> */}
                    </div>
            </div>
            </section>
             
 </>
            
       
    )
}

export default CyberSecurity