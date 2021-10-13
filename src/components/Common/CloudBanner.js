import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannercloud from '../../assets/images/banner/cloud.png'

const MainBanner = () => {
    return (
        <div className="digital-agency-banner" style={{paddingTop:'200px'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Cloud Adoption</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions</p>
                            </ReactWOW>

                           
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image-cloud">
                                <img src={bannercloud} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
