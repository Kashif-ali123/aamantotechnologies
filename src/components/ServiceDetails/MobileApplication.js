import React from 'react'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/ser.jpg'
import project2 from '../../assets/images/services/mobi.png'
// import charts from '../../assets/images/services/charts1.jpg'

const MobileApplication = () => {
    return (
        <>
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="services-details-image" >
                            {/* <img src={details1} alt="about"  style={{height:"550px"}}/> */}
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title"><h1>MOBILE APPLICATION DEVELOPMENT</h1></span>
                            <h3>About this Services</h3>
                            <p>We're pushing the boundaries of what's achievable on mobile by building revolutionary mobile experiences for clients ranging from huge corporations to innovative startups and creative entrepreneurs. We ensure that your vision is translated into a beautifully designed, understanding of native iOS, Android, and cross-platform app development. user-friendly, and engaging mobile solution of exceptional quality using our thorough. </p>
                           
                           
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
                                            <li>The Field of Mobile Application Development</li>
                                            <li>Increase exposure across smart phone users</li>
                                            <li>Enhance the brand visibility</li>
                                            <li>Builds relationship & loyalty</li>
                                            <li>Create a strong sell through</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p> */}
                            <h3>Mobile Application Development Benefits</h3>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Strengthen customer engagement
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Increase accessibility
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Provide value for customers
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
                                        Build brand awareness and recognition
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
                                        Cultivate customer loyalty
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Unique services and payment
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

export default MobileApplication