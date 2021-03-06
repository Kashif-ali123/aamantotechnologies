import React from 'react'
import ReactWOW from 'react-wow'
import {bannerData} from '../data'
// import bannerImg from '../../assets/images/banner-img1.png'

const Banner = () => {
    return(
        <>
         
          <div >
          {bannerData.map((data, key) => {
            return (
              <div key={key}>
                <Banners
                  key={key}
                  company={data.company}
                  desc={data.desc}
                  btn={data.btn}
              
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const Banners = ({ company, desc,btn}) => {
        if (!company) return <div />;      
    return (
        <div className="it-services-banner" >
            <div className="container" >
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1 style={{fontSize:"30px", marginTop:"400px"}}>Aamanto Technologies</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p style={{fontSize:"28px", color: "#212529"}}>{desc} <b className="heading-highlight" style={{backgroundColor:"#ff5d22"}}>{btn}</b></p>
                            </ReactWOW>

                            {/* <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Get Started <span></span>
                                    </Link>
                                </div>
                            </ReactWOW> */}
                        </div>
                    </div>

                    {/* <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-layer"> */}
                                {/* <img src={bannerImg} alt="banner" /> */}
                            {/* </div>
                        </ReactWOW>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Banner