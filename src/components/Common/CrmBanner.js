import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/cr.png'



const CrmBanner = () => {
  

    return (
       
         
                <div className="main-banner-item item-bg1"  style={{height:"650px"}}>
                
        <div className="container">
        <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content" style={{marginTop:"90px"}}>
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff", marginTop:"10px"}}>CRM</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>Customer Relationship Management (CRM) is a tool for managing customer relationships. In today's world, when consumers are a company's most precious asset and must be prioritized above all else, adopting technology that connects businesses directly with them has become critical. CRM is one solution that makes it possible and increases the company's profitability. </p>
                           
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
                            <img src={bannerImg} alt="banner"  />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

        
    )
}

export default CrmBanner;