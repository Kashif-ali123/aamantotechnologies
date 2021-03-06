import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg3 from '../../assets/images/services/cyber-security.png'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

 const CyberBanner = () => {
    return (
        <div className="digital-agency-banner5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="banner-wrapper-content">
                       
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1>CYBER SECURITY</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p>People and organizations can be protected using technology and skill.Starting from a set of identification data items, such as brands, names, IPs, DNS domains, etc., data is obtained, correlated and transformed into information, which is then evaluated and transformed into intelligence.</p>
                           
                            
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
                        <div className="banner-wrapper-image" style={{height:"400px"}}>
                            <img src={bannerImg3} alt="banner" style={{height:"450px"}}/>
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
    </div>


    )
}

export default CyberBanner;