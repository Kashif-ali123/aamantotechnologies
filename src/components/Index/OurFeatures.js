import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import serviceIcon1 from '../../assets/images/services/service-icon1.png'
import serviceIcon2 from '../../assets/images/services/service-icon2.png'
import serviceIcon3 from '../../assets/images/services/service-icon3.png'
import serviceIcon4 from '../../assets/images/services/service-icon4.png'
import serviceIcon5 from '../../assets/images/services/service-icon5.png'
import serviceIcon6 from '../../assets/images/services/service-icon6.png'

const OurFeatures = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="feature" /> 
                        Areas of Expertise
                    </span>

                    <h2>Strategic Planning to Deliver Your Solutions</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon1} alt="feature" />
                            </div>
                            <h3>Agile Workflow</h3>
                            <p style={{textAlign:"justify"}}>We actively engage with our clients to understand your needs and objectives. With your input and goals in mind, we design and deliver quality IT services to meet your needs.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon2} alt="feature" />
                            </div>
                            <h3>Strategic Alignment</h3>
                            <p style={{textAlign:"justify"}}>Our technology roadmap is aligned with your business goals and we remain transparent throughout all stages of communication with our clients. </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon3} alt="feature" />
                            </div>
                            <h3>Personalized Solutions</h3>
                            <p style={{textAlign:"justify"}}>A personalized solution to your business needs is delivered through the adoption of mastered agile and development methodology leveraging cloud. </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon4} alt="feature" />
                            </div>
                            <h3>SMART Approach</h3>
                            <p style={{textAlign:"justify"}}>Our SMART approach enables continuous improvement, and ensures that our goals are realistic, attainable, and clearly defined to allow for swift execution.</p>
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon5} alt="feature" />
                            </div>
                            <h3>Drag and Drop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon6} alt="feature" />
                            </div>
                            <h3>Deadline Reminders</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default OurFeatures