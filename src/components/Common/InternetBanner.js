import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg3 from '../../assets/images/services/iot.png'


 const InternetBanner = () => {
    return (
        <div className="digital-agency-banner6">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper-content">
                       
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1>INTERNET OF THINGS (IoT)  </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p>With our IoT expertise we provide cutting-edge engineering and enterprise-wide IoT solutions tailored to the needs of our clients.Aamanto offers a range of services and innovative consumer electronics startups to develop IoT solutions.</p>
                           
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Quote
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="banner-wrapper-image">
                            <img src={bannerImg3} alt="banner" style={{height:"550px"}}/>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
    </div>

    )
}

export default InternetBanner;