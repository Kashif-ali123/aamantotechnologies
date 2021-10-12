import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/cyber.jpg'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

 const CyberBanner = () => {
    return (
        <div className="page-title-area">
        <div className="container">
            <div className="row align-items-center" >
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px"}}>CYBER SECURITY</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                      <p style={{textAlign:"justify"}}>Starting from a set of identification data items, such as brands, names, IPs, DNS domains, etc., data is obtained, correlated and transformed into information, which is then evaluated and transformed into intelligence.
</p>
                           
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
                       
                            <img src={bannerImg} alt="banner" />
                       
                    </ReactWOW>
                </div>
            </div>
        </div>
  </div>

    )
}

export default CyberBanner;