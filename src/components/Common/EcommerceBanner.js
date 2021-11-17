import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/services/ecommerce.png'


const EcommerceBanner = () => {
    

    return (
       
         
                <div className="main-banner-item item-bg5" >
               
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff"}}>Ecommerce</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>Aamanto help retail companies, distributors, manufacturers, and wholesalers increase customer satisfaction, increase revenues, and grow their audiences by combining our expertise in information technology and ecommerce development. We strive to provide ecommerce solutions that are both technically sound and visually appealing, allowing your business to stand out in the ecommerce industry.</p>
                           
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

                <div className="col-lg-6 col-md-12" style={{marginTop:"150px"}}>
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"  />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

        
    )
}

export default EcommerceBanner;