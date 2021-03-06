import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/mobile-App1.png'



const MobileAppBanner = () => {
   
    return (
       
         
                <div className="main-banner-item item-bg3" style={{height:"670px"}} >
                
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff" }}>MOBILE APPS</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>We will assist you from the first concept design of your app through its launch on selected platforms, since we've produced over 1000+ apps. We have the appropriate combination of amazing technology, people, and experience to create unique apps that work wonders for your organization. Get solutions that help you stand out from the crowd, from native to cross-platform apps. </p>
                           
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Quote <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12"style={{marginTop:"100px"}} >
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"   />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

        
    )
}

export default MobileAppBanner;