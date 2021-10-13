import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import banneriot from '../../assets/images/services/iot.png'

const MainBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Internet Of Things (IoT)</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Aamanto offers a range of services and innovative consumer electronics startups to develop IoT solutions</p>
                            </ReactWOW>

                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image" style={{width:'20em'}}>
                                <img src={banneriot} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
