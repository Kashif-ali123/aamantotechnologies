import React from 'react'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/ser.jpg'
import project2 from '../../assets/images/services/dig.jpg'
// import charts from '../../assets/images/services/charts1.jpg'
import {Link} from 'gatsby'

import ProjectStart1 from '../../assets/images/project-start1.png'
import CircleShape1 from '../../assets/images/shape/circle-shape1.png'
import subscribeImg1 from '../../assets/images/subscribe-img1.png'
import shape6 from '../../assets/images/shape/vector-shape6.png'
const DigitalTransformation = () => {
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
                            <span className="sub-title"><h1>Digital Transformation</h1></span>
                            <p className="service-description">As digital transformation is a journey, not a destination, you will need an experienced team to assist you in leveraging new technologies and reaping the benefits of being a digital business.<br/>
                            Aamanto Digital Transformation practice is built on considerable experience transforming legacy systems into cutting-edge design environments. We know how to break down internal barriers, move and improve applications in the cloud, accelerate custom software development operations, and execute a data-driven approach to digital service delivery. Engage with Aamanto Technologies to speed up your cloud migration, develop new consumer experiences, rethink business strategies, and boost efficiency and productivity. We operate quickly to accomplish your objective in a secure, dependable, and scalable manner.</p>
                           
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
                                            <li>The Field of Digital Transformation</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <section>            
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-image">
                            <img src={subscribeImg1} alt="subscribe" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-content">
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <form className="newsletter-form">
                                <input type="text" className="input-newsletter" placeholder="Enter your email address" name="email" required />
                                <button type="submit" className="default-btn">
                                    <i className="flaticon-tick"></i> 
                                    Subscribe Now <span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src={shape6} alt="shape" />
            </div>
        </div>
        </section>


                            {/* <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p> */}
                            

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

export default DigitalTransformation