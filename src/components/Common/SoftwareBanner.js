import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/soft.png'



const SoftwareBanner = () => {
   
    return (
       
         
                <div className="main-banner-item item-bg4" style={{height:"650px"}} >
               
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff"}}>SOFTWARE DEVELOPMENT </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>Aamanto have a track record of developing dependable and scalable corporate solutions that provide new value to your company. Our skilled engineers use a combination of cutting-edge technology to provide future-proof services that help you achieve your business objectives. Receive all kinds of unique solutions that drive business efficiency, whether it's ERP, HCM, or CRM.</p>
                           
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

                <div className="col-lg-6 col-md-12" style={{marginTop:"150px"}} >
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"  style={{height:"400px"}} />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

        
    )
}

export default SoftwareBanner;