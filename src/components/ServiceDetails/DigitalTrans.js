import React from 'react';

import ReactWOW from 'react-wow'

const DigitalTrans = () => {
    return (
        <div className="funfacts-area bg-image">
            <div className="container">
                <div className="row">
                <ReactWOW delay='.1s' animation='bounceInUp'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            {/* <div className="icon">
                                <img src={FunIcon1} alt="FunIcon" />
                            </div> */}
                              <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h3 style={{marginTop:"50px"}}> Strategy </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p style={{color:"#fff"}}>To rule out technological hurdles, we start with a Business Analysis. With each phase, our Digital Transformation services team develops an iterative project roadmap to achieve business benefits (a technical vision, prototype, and features).</p>
                          </ReactWOW>
                        </div>
                    </div>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            {/* <div className="icon">
                                <img src={FunIcon2} alt="FunIcon" />
                            </div> */}
                              <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h3 style={{marginTop:"50px"}}>Consultancy </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p style={{color:"#fff"}}>Our Digital Transformation experts work with your company's stakeholders to set project goals, design a high-level framework for your cyber-physical system, estimate development costs, and identify the boundaries.</p>
                          </ReactWOW>
                        </div>
                    </div>
                   </ReactWOW>
                   <ReactWOW delay='.1s' animation='bounceInDown'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item" >
                            {/* <div className="icon">
                                <img src={FunIcon3} alt="FunIcon" />
                            </div> */}
                              <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h3 style={{marginTop:"50px"}}>ASSISTING </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p style={{color:"#fff"}}>After we've completed a successful migration, we'll use a centralized monitoring system to assist you in maintaining and managing your resources, apps, and data.</p>
                        </ReactWOW>
                        </div>
                    </div>
            </ReactWOW>
                   
                </div>
            </div>
        </div>
    )
}

export default DigitalTrans;