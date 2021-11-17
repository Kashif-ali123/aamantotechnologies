import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerImg3 from '../../assets/images/services/data-science.png'
import shape1 from '../../assets/images/shape/map-shape1.png'
import footerMap from "../../assets/images/footer-map.png"



const DataBanner = () => {
    return (
        <div className="digital-agency-banner2">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper-content">
                       
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1>DATA SCIENCE AND ANALYTICS </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p>Employ big data experts from Aamanto, a company that provides big data services, to assist you in selecting the best infrastructure solutions.</p>
                         
                            
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
        <ReactWOW delay='.1s' animation='fadeInLeft'>
        <div className="map-shape1" style={{marginTop:"50px", alignItems:"center"}}>
        
                                <img src={shape1} alt="banner" />
                               
                            </div>
                            </ReactWOW>
                            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
    </div>

    )
}

export default DataBanner;