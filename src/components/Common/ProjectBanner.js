import React from 'react'
 import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/banner1-img.jpg'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

const ProjectBanner = () => {
    return (
        <div className="page-title-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px"}}>Project Management</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify"}}>Agile project management offers a host of potential benefits to the IT organization, including faster deployments, greater adaptability, and better alignment with business or customer needs. The adoption of agile mindsets and frameworks is a proven success in todays delivery teams.</p>
                           
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

export default ProjectBanner;