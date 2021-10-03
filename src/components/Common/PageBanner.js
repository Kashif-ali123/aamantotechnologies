import React from 'react'
 import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/banner-img1.png'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

const PageBanner = () => {
    return (
        <div className="page-title-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px"}}>Software Services</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify"}}>We offer the software development services needed to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p>
                           
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get Started <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer">
                            <img src={bannerImg} alt="banner" />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

               
    )
}

export default PageBanner;