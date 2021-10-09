import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import details1 from '../../assets/images/services/data-science.jpg'
import project2 from '../../assets/images/services/science.jpg'
import charts from '../../assets/images/services/chart3.jpg'

const DataContent = () => {
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
                            <span className="sub-title"><h1>Data Science</h1></span>
                            <h3>About this Services</h3>
                            <p>At Aamanto – we understand that data is our gateway to increasing customer engagement, satisfaction, and building the products that our clients need.</p>
                             <p>By applying cutting-edge machine learning, data analysis and data visualization techniques to our clients’ data – we are able to derive insights that help our clients solve complex business problems, uncover hidden trends, explain historical events, and predict future behavior.</p>
                            <p>Rest assured – if you have data, Aamanto can help you gain a competitive edge by allowing you to make smart data-driven decisions.</p>
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

                            <p>At Aamanto – we understand that data is our gateway to increasing customer engagement, satisfaction, and building the products that our clients need. By applying cutting-edge machine learning, data analysis and data visualization techniques to our clients’ data – we are able to derive insights that help our clients solve complex business problems, uncover hidden trends, explain historical events, and predict future behavior. We provide data science services for all forms, sizes, and sources of data across all kinds of different industries. Rest assured – if you have data, Aamanto can help you gain a competitive edge by allowing you to make smart data-driven decisions.</p>
                            
                           
                            <div className="charts-image">
                                <img src={charts} alt="about" />
                            </div>
                            <h3>Data Science and Analytics Offerings</h3>

                            <div className="row">
                                <div className="col-lg-12 col-sm-6 col-md-6">
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
                    
                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div>
                    </div>
            </div>
            </section>
             
 </>
            
       
    )
}

export default DataContent