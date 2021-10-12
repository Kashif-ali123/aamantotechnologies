import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import bannerImg from '../../assets/images/services/data-science.jpg'



const DataBanner = () => {
    return (
        <div className="page-title-area">
        <div className="container">
            <div className="row align-items-center" >
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px"}}>Data Science & Analytics</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                      <p style={{textAlign:"justify"}}>Aamanto enables businesses to provide quality services to the customers by assisting them in advancing the analytics maturity curve by providing actionable insights that lead to data-driven solutions.</p>
                           
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

export default DataBanner;