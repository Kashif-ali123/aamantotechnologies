import React from 'react'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/data-science.jpg'
import project2 from '../../assets/images/services/science.jpg'
// import charts from '../../assets/images/services/chart3.jpg'

const DataContent = () => {
    return (
        <>
        <section className="services-details-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="services-details-image">
                            {/* <img src={details1} alt="about" /> */}
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title"><h1>Data Science & Analytics</h1></span>
                            <p className="service-description">Aamanto enables businesses to provide quality services to the customers by assisting them in advancing the analytics maturity curve by providing actionable insights that lead to data-driven solutions. At Aamanto, we employ cutting-edge business intelligence and data intelligence solutions to help clients extract meaningful insights from a variety of real-time and large sets of data. We help businesses integrate huge amounts of structured, semi-structured, and unstructured information from different sources into a single, holistic ecosystem that can be utilized to model and predict emerging opportunities.

</p>
                            
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
                                            <li>The Field of Data Science</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                          
                           
                            {/* <div className="charts-image">
                                <img src={charts} alt="about" />
                            </div> */}
                            <h3>Data Science and Analytics Offerings</h3>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Predictive & Descriptive Analytics
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Data Engineering
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Big Data & Real-Time Analytics
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Pattern Recognition
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Statistical Modeling
                                    </div>
                                </div>
            
                               
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Attribution Modeling
                                    </div>
                                </div>
                            
                            <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Decision/Portfolio Optimization
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Content Optimization
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Dashboard Presentation
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
                    
                    {/* <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div> */}
                    </div>
            </div>
            </section>
             
 </>
            
       
    )
}

export default DataContent