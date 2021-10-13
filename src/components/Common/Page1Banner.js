import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import banner from '../../assets/images/services/software.png'

const Page1Banner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Our Service</span>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Software Development</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                            </ReactWOW>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image-software">
                                <img src={banner} alt="banner" />
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page1Banner
