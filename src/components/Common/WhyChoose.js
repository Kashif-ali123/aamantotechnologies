import React from 'react'
import ReactWOW from 'react-wow'


import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/aamant.jpg'
import shape7 from '../../assets/images/shape/vector-shape7.png'
import shape8 from '../../assets/images/shape/vector-shape8.png'

const WhyChoose = ({pageTitle}) => {
    return (
        <div className="main-banner-item item-bg2" >
                
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <h2 style={{color:"#fff", marginBottom:"20px"}}>{pageTitle}</h2>
                   </ReactWOW>
                   <ReactWOW delay='.1s' animation='bounceInDown'>
                   <p style={{ color:"#fff", marginBottom:"50px"}}>Aamanto Technologies Inc. is the most trusted name in IT consulting and software development services. We deliver years of domain expertise and unrivalled value to our clients. Our solutions power the operations of clients across diverse industries such as finance, government, healthcare, education, transportation, retailing, telecommunication and energy. We are a one-stop solution for all of your IT needs, including mobile app development, responsive web application development, cloud adoption, cyber security, digital transformation and data analytics.</p>
                </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Quote<span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12" style={{marginTop:"200px"}}  >
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"  />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
       
    
           
            <div className="vector-shape7">
                <img src={shape7} alt="features" />
            </div>
            <div className="vector-shape8">
                <img src={shape8} alt="features" />
            </div>
   </div>

        
    )
}

export default WhyChoose;