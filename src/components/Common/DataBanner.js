import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerImg3 from '../../assets/images/banner-img3.png'
import banner from '../../assets/images/banner/data-science.png'

const DataBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Data Science & Analytics</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Aamanto enables businesses to provide quality services to the customers by assisting them in advancing the analytics maturity curve by providing actionable insights that lead to data-driven solutions.</p>
                            </ReactWOW>

                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image">
                                <img src={banner} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataBanner;
