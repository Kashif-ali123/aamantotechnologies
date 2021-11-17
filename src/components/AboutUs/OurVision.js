import React from 'react';

import ReactWOW from 'react-wow'
import serviceIcon7 from '../../assets/images/integration.png'
import serviceIcon8 from '../../assets/images/application.png'
import serviceIcon9 from '../../assets/images/implementation.png'
import serviceIcon10 from '../../assets/images/support.png'
import serviceShape4 from '../../assets/images/services/service-shape4.png'

const OurVision = () => {
    return (
        <section className="services-area1 ptb-100">
        <div className="container">
           

            <div className="row">
            <ReactWOW delay='.1s' animation='bounceInUp'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item" style={{background: " linear-gradient( 64.5deg,   rgba(89,97,223,1) 50.7% ,rgba(29,133,163,1) 49.7%)"}}>
                        <div className="icon">
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                            <img src={serviceIcon7} alt="services"  style={{Color:"#fff"}}/>
                            </ReactWOW>
                        </div>
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                        <h3 style={{color:"#fff"}}>
                           
                        Integrity 
                           
                        </h3>
                        </ReactWOW>
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                        <p style={{color:"#fff"}}>We emphasize honesty in all interactions with our clients, each other, and the world.</p>
                      </ReactWOW>
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInUp'>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item" style={{background: "linear-gradient( 180.4deg,  rgba(188,120,236,1) 2.2%, rgba(29,133,163,1) 83.5% )"}}>
                        <div className="icon">
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                            <img src={serviceIcon8} alt="services" />
                            </ReactWOW>
                        </div>
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                        <h3 style={{color:"#fff"}}>
                           
                        Candor 
                           
                        </h3>
                        </ReactWOW>
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                        <p style={{color:"#fff"}}>During all stages of the project cycle, we keep our clients updated on the situation. An agile approach is adopted to keep deliverables as per requirements and ensure timely delivery.</p>
                        </ReactWOW>
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item " style={{background: "linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% )"}}>
                        <div className="icon">
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                            <img src={serviceIcon9} alt="services" />
                       </ReactWOW>
                        </div>
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                        <h3 style={{color:"#fff"}}>
                            
                        Innovation 
                            
                        </h3>
                        </ReactWOW>
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                        <p style={{color:"#fff"}}>We aim to stay ahead of the curve. Never resting on our laurels, we strive to provide innovative solutions using cutting-edge technologies.</p>
                       </ReactWOW>
                        <div className="shape">
                            <img src={serviceShape4} alt="services"  />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-services-box-item" style={{background: "linear-gradient( 109.2deg,  rgba(107,52,255,1) 16.5%, rgba(51,159,247,1) 81% )"}}>
                        <div className="icon">
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                            <img src={serviceIcon10} alt="services" />
                        </ReactWOW>
                        </div>
                        <ReactWOW delay='.1s' animation='bounceInUp'>
                        <h3 style={{color:"#fff"}}>
                            
                        Growth 
                           
                        </h3>
                        </ReactWOW>
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                        <p style={{color:"#fff"}}>Success is a journey, not a destination. Every problem is an opportunity to grow and improve.</p>
                       </ReactWOW>
                        <div className="shape">
                            <img src={serviceShape4} alt="services" />
                        </div>
                    </div>
                </div>
                </ReactWOW>
                </div>
            
                </div>
           
    </section>
    )
}

export default OurVision;