import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/cloud-adoption.jpg'
import project2 from '../../assets/images/services/cloud.png'
import charts from '../../assets/images/services/chart2.png'
import AboutImage from '../../assets/images/about/about-img10.png'
import AboutShape from '../../assets/images/about/about-shape1.png'
import StarIcon from '../../assets/images/star-icon.png'
import OurMissionShape from '../../assets/images/our-mission/our-mission-shape2.png'
import CircleShape from '../../assets/images/shape/circle-shape1.png'

const CloudContent = () => {
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
                            <span className="sub-title"><h1>Cloud Adoption</h1></span>
                            
                            <p  className="service-description">Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions and developing innovative applications for companies ranging from small businesses to large enterprises, whether you are already in the Cloud, having considered Cloud Migration, or looking to develop a Cloud-Native application. We thrive in private, hybrid, and public cloud systems, assisting our customers in the development of high-performance, scalable, and reliable solutions that maximize the return on cloud projects, reduce costs, and minimize risk.<br/>
                            WTransformation is a complex process that requires intricate planning and flawless execution. A single misstep can prove to be costly and time consuming. Whether your business is transitioning from on-premises to multi-cloud or hybrid cloud, our experience and utilization of best practices and effective project management ensures our clients are satisfied and their migration is successful – opening the doors for future business growth.</p>
                            
                            

                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
             
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                        <ReactWOW delay='2.2s' animation='fadeInLeft'>
                            <img src={AboutImage} alt="About Image" />
                        </ReactWOW>
                            <div className="shape">
                                <img src={AboutShape} alt="About Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                            <ReactWOW delay='2s' animation='fadeInLeft'>
                                <h2>Cloud Services</h2>
                                <p>Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions and developing innovative applications</p>
                            </ReactWOW>
                            <ReactWOW delay='2.5s' animation='fadeInRight'>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Big Data
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Visualization
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Warehousing
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Management
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src={OurMissionShape} alt="Our Mission Shape" />
                                    </li>
                                </ul>
                              </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={CircleShape} alt="Circle Shape" />
            </div>
        </section>
    ) 
 </>
            
       
    )
}

export default CloudContent