import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import {softwareData} from '../softwaredevelopmentdata'
import bannerImg3 from '../../assets/images/services/software.png'
import VectorShape4 from '../../assets/images/shape/vector-shape4.png'
import VectorShape11 from '../../assets/images/shape/vector-shape11.png'


const SoftwareDevelopment = () => {
    return(
        <>
         
          <div >
          {softwareData.map((data, key) => {
            return (
              <div key={key}>
                <SoftwareBanners
                  key={key}
                  title={data.title}
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
      const SoftwareBanners = ({ title, desc,btn}) => {
        if (!title) return <div />;    
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                           
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>{title}</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>{desc}</p>

                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                       {btn}
                                        <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="vector-shape4">
                <img src={VectorShape4} alt="Vector Shape" />
            </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="banner-wrapper-image">
             
                                <img src={bannerImg3} alt="banner" />
             
                                <div className="vector-shape11">
                <img src={VectorShape11} alt="Vector Shape" />
            </div> 
                  </div>
           
           
                        </ReactWOW>
                    </div>
           
                </div>
            </div>
        </div>
    )
}

export default SoftwareDevelopment
