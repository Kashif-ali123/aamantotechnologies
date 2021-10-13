import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerdigital from '../../assets/images/banner/digital-transformation.png'

const DigitalBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Digital Transformation</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>As digital transformation is a journey, not a destination, you will need an experienced team to assist you in leveraging new technologies and reaping the benefits of being a digital business.
</p>
                            </ReactWOW>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image">
                                <img src={bannerdigital} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalBanner;
