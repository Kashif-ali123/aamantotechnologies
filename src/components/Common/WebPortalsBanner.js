import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/community-portal-img.jpg'
import shape7 from '../../assets/images/shape/vector-shape7.png'
import shape8 from '../../assets/images/shape/vector-shape8.png'




const WebPortalsBanner = () => {
 

    return (
       
         
                <div className="main-banner-item item-bg2" >
                
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff"}}>WEB PORTAL</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>Aamanto builds adaptive solutions to power end customers regardless of the technology at their disposal as we provide web portal services. In order to ensure that our portals are stable and secure across devices and platforms, we focus on system performance. We help technology-driven enterprises improve their performance by providing portal solutions with well-thought-out UX and enticing functionalities.</p>
                           
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Quote<span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12" style={{marginTop:"200px"}}  >
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"  />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
       
    
           
            <div className="vector-shape7">
                <img src={shape7} alt="features" />
            </div>
            <div className="vector-shape8">
                <img src={shape8} alt="features" />
            </div>
   </div>

        
    )
}

export default WebPortalsBanner;