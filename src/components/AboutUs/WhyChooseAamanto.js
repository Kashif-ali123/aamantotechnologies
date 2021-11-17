import React from 'react'
import ReactWOW from 'react-wow'
import icon1 from '../../assets/images/services/service-icon1.png'
import icon2 from '../../assets/images/services/service-icon2.png'
import icon3 from '../../assets/images/services/service-icon3.png'
import icon4 from '../../assets/images/services/service-icon4.png'
import icon5 from '../../assets/images/services/service-icon5.png'

import shape1 from '../../assets/images/services/service-shape1.png'
import shape2 from '../../assets/images/services/service-shape2.png'

const WhyChooseAamanto = () => {
    return (
        <section className="services-area3 ptb-100 bg-e3fbff" style={{marginTop:"40px"}}>
            <div className="container">
                <div className="section-title">
                <ReactWOW delay='.1s' animation='bounceInUp'>
                   
                    <p>Team up with us to take advantage of the following Aamanto advantages:</p>
               </ReactWOW >
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                                <img src={icon1} alt="image" />
                                </ReactWOW>

                            </div>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h3>
                                
                                Advanced Technology
                                
                            </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p>We at Aamanto are continuously up to date on the latest advances in the field of information technology.  All new discoveries and learning are fed as practical benefits into our software as product features by our team of technology enthusiasts. This enables our clients to stand out, scale, grow and outperform their competitors.</p>
                                </ReactWOW>
                          
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                                <img src={icon2} alt="image" />
                                </ReactWOW>
                            </div>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h3>
                               
                            Project Management
                               
                            </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p>At Aamanto, we employ the best project management methodologies. This is due to our years’ experience, practical knowledge, and domain leadership. Our well-defined processes aid in the timely delivery of solutions that adhere to worldwide software development norms and satisfy our clients' demands.</p>

                           </ReactWOW>
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                                <img src={icon3} alt="image" />
                                </ReactWOW>
                            </div>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <h3>
                                
                            Customer-Centric
                               
                            </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <p>All of Aamanto actions are guided by the objectives and expectations of our customers. In all we do, we strive for honesty and integrity. This is why every project begins with a forum to discuss expectations. We make every attempt to comprehend our clients' businesses, critical areas, and requirements.  </p>
                            </ReactWOW>
                          
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                                <img src={icon4} alt="image" />
                                </ReactWOW>
                            </div>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <h3>
                               
                            Teamwork
                                
                            </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <p>We need the smartest candidates to produce the best results. Aamanto is a team of seasoned professionals with deep industry expertise and fresh ideas who specialize in CRM activities.</p>
                            </ReactWOW>
                           
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item">
                            <div className="icon">
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                                <img src={icon5} alt="image" />
                                </ReactWOW>
                            </div>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <h3>
                                
                                Infrastructure
                                
                            </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <p>We provide the finest infrastructure to support our software offerings. This improves performance and guarantees that our client’s operations run smoothly.</p>
                            </ReactWOW>
                           
                            
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    )
}

export default WhyChooseAamanto