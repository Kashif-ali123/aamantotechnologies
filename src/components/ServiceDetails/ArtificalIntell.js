import React from 'react';
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import serviceIcon7 from '../../assets/images/services/machine.png'
import serviceIcon8 from '../../assets/images/services/computer.png'
import serviceIcon9 from '../../assets/images/services/predictive.png'
import serviceIcon10 from '../../assets/images/services/natural.png'
// import serviceIcon11 from '../../assets/images/services/service-icon11.png'
// import serviceIcon12 from '../../assets/images/services/service-icon12.png'
import serviceShape4 from '../../assets/images/services/service-shape4.png'

const ArtificalIntell = () => {
    return (
        <section className="services-area ptb-100">
        <div className="container">
           

            <div className="row">
            <ReactWOW delay='.1s' animation='bounceInUp'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item">
                        <div className="icon">
                            <img src={serviceIcon7} alt="services" />
                        </div>
                        <h3>
                           
                            Machine Learning 
                           
                        </h3>
                        <p>Artificial intelligence and Machine learning have enabled organizations to use highly personalized solutions equipped with advanced Machine Learning Techniques.</p>
                        {/* <Link to="#" className="learn-more-btn">
                            <i className="flaticon-right"></i> 
                            Learn More
                        </Link> */}
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInUp'>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item">
                        <div className="icon">
                            <img src={serviceIcon8} alt="services" />
                        </div>
                        <h3>
                           
                            Computer Vision
                           
                        </h3>
                        <p>Visual data analysis has been scaled up, new image-based functions have been created, and the way firms from many verticals use video elements has been altered due to computer vision technology.</p>
                        {/* <Link to="#" className="learn-more-btn">
                            <i className="flaticon-right"></i> 
                            Learn More
                            
                        </Link> */}
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item ">
                        <div className="icon">
                            <img src={serviceIcon9} alt="services" />
                        </div>
                        <h3>
                            
                            Predictive Analysis
                            
                        </h3>
                        <p>Aamanto’s predictive analytics solutions deliver accurate and timely findings, allowing you to spot changes and anomalies in your business strategies and processes.</p>
                        {/* <Link to="#" className="learn-more-btn">
                            <i className="flaticon-right"></i> 
                            Learn More
                            
                        </Link> */}
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item">
                        <div className="icon">
                            <img src={serviceIcon10} alt="services" />
                        </div>
                        <h3>
                            
                            Natural Learning Processing
                           
                        </h3>
                        <p>Aamanto provides powerful Natural Language Processing (NLP) applications that are designed with cutting-edge techniques Applications for Natural Language Processing.</p>
                        {/* <Link to="#" className="learn-more-btn">
                            <i className="flaticon-right"></i> 
                            Learn More
                        </Link> */}
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                </div>
            
                </div>
           
    </section>
    )
}

export default ArtificalIntell;