import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerImg3 from '../../assets/images/services/cloud.png'
import footerMap from "../../assets/images/footer-map.png"

const CloudBanner = () => {
    return (
        <div className="digital-agency-banner1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                           
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>CLOUD ADOPTION </h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions and developing innovative applications for companies ranging from small businesses to large enterprises, whether you are already in the Cloud, having considered Cloud Migration, or looking to develop a Cloud-Native application.</p>
                                
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
                <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
            </div>
        </div>
    )
}

export default CloudBanner;