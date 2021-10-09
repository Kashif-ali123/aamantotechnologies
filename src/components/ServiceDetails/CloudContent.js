import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import details1 from '../../assets/images/services/cloud-adoption.jpg'
import project2 from '../../assets/images/services/cloud.png'
import charts from '../../assets/images/services/chart2.png'

const CloudContent = () => {
    return (
        <>
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src={details1} alt="about" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title"><h1>Cloud Adoption</h1></span>
                            <h3>About this Services</h3>
                            <p>Transformation is a complex process that requires intricate planning and flawless execution.</p>
                             <p>A single misstep can prove to be costly and time consuming.</p>
                             <p>Whether your business is transitioning from on-premises to multi-cloud or hybrid cloud, our experience and utilization of best practices and effective project management .</p>
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
                                            <li>The Field of Cloud Adoption</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p>WTransformation is a complex process that requires intricate planning and flawless execution. A single misstep can prove to be costly and time consuming. Whether your business is transitioning from on-premises to multi-cloud or hybrid cloud, our experience and utilization of best practices and effective project management ensures our clients are satisfied and their migration is successful – opening the doors for future business growth.</p>
                            <h3>Service Offerings</h3>
                            <p>We study our clients’ requirements and deliver a plan specifically tailored for them and their needs. We guide them every step of the way in their transition to the cloud so they can seamlessly scale up their business and lower their total cost of ownership.</p>
                            <p>We are fully equipped to offer all varieties of cloud services, such as:</p>

                            <h3>Infrastructure-as-a-Service (IaaS)</h3>
                            <p>Providing clients with the compute, networking, and storage resources they require on an as-needed basis.</p>
                            <h3>Platform-as-a-Service (PaaS)</h3>
                            <p>Providing users with a cloud environment in which they can develop, manage and deliver their applications.</p>
                            <h3>Software-as-a-Service (SaaS)</h3>
                            <p>Providing users with the tools necessary to build, deploy, and make available their own software on the cloud – where it can be accessed by their customers.</p>
                            <p>Providing clients with the compute, networking, and storage resources they require on an as-needed basis.</p>
                            <h3>Function-as-a-Service (FaaS)</h3>
                            <p>Providing users with the ability to execute code in response to trigger events, without having to worry about the infrastructure normally required to build and deploy such micro-service applications.</p>
                           
                            <div className="charts-image">
                                <img src={charts} alt="about" />
                            </div>
                            <h3>Application Areas</h3>

                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        File storage.
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Software testing and development.
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Big Data Analytics
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Data backups and archiving
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Disaster recovery
                                    </div>
                                </div>
            
                              
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Infrastructure as a service (IaaS) 
                                    </div>
                                </div>
                            
                            <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Platform as a service (PaaS)
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Communication
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
                           
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div>
                    </div>
            </div>
            </section>
             
 </>
            
       
    )
}

export default CloudContent