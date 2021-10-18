import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg3 from '../../assets/images/services/artificial.png'


const ArtificalBanner = () => {
    
    return (
        <div className="digital-agency-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper-content">
                       
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1>ARTIFICAL INTELLIGENCE </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p>With our AI services, we have helped numerous businesses become more operationally agile and efficient.</p>
                           
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                   Get a Code
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

export default ArtificalBanner;