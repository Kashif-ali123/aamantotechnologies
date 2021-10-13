import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerartificial from '../../assets/images/banner/artificial.png'

const ArtificialBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Artificial Intelligence</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Aamanto also develops and builds industry-leading digital transformation technologies.</p>
                            </ReactWOW>

                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image" style={{width:'33em', paddingTop:'50px'}}>
                                <img src={bannerartificial} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtificialBanner;