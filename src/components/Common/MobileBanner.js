import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg3 from '../../assets/images/services/mobile-app.png'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

 const MobileBanner = () => {
    return (
        <div className="digital-agency-banner4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper-content">
                       
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1>MOBILE APPLICATION DEVELOPMENT </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p>Get access from anywhere, anytime with Aamanto Top Notch Mobile Application Development Services.</p>
                           
                            
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
                            <img src={bannerImg3} alt="banner" />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
    </div>

    )
}

export default MobileBanner;