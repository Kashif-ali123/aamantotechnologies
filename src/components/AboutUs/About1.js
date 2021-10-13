import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import bannerImg from '../../assets/images/cr.jpg'
import starIcon from '../../assets/images/star-icon.png'
// import icon4 from '../../assets/images/icons/icon4.png'
// import icon5 from '../../assets/images/icons/icon5.png'
// import icon6 from '../../assets/images/icons/icon6.png'
// import icon7 from '../../assets/images/icons/icon7.png'
// import shape1 from '../../assets/images/shape/circle-shape1.png'
 
const About1 = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner"  style={{marginLeft:"30px",width:"70px"}}/> 
                                    CRM
                                </span>
                                {/* <h2>Drive Digital Revolution Through Data Science</h2> */}
                                <p style={{marginLeft:"30px", textAlign:"justify"}}>A full-featured and customized CRM software development solution to help cover various customer touchpoints.</p>
                                <p style={{marginLeft:"30px", textAlign:"justify", marginTop:"1px"}}>Customer Relationship Management (CRM) by its very name signifies that it is a tool to manage relationships with the clients. In the present era, when customers are the most valuable asset of the company and need to be put first before anything else, it has become essential to adopt a technology that connects the companies directly with them.</p>
                                 
                                <Link to="/contact" className="default-btn"  style={{marginLeft:"30px"}}>
                                <i className="flaticon-right"></i> Get Started <span></span>
                            </Link>
                                {/* <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>10 Years</h3>
                                        <p>On the market</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>45+</h3>
                                        <p>Team members</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>80%</h3>
                                        <p>Senior scientist</p>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link> */}
                                </ReactWOW>
                            </div>
                        </div>
                        
                </div>
                <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                        <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={bannerImg} alt="banner"  />
                            </ReactWOW>
                        </div>
                    </div>
                    </div>
            </div>

            {/* <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our History</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Activate Listening</li>
                                    <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                    <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                    <li><i className="flaticon-tick"></i> Branding it better!</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Mission</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                    <li><i className="flaticon-tick"></i> Expect more</li>
                                    <li><i className="flaticon-tick"></i> Good thinking</li>
                                    <li><i className="flaticon-tick"></i> In real we trust</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>Who we are</h3>
                                <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                    <li><i className="flaticon-tick"></i> We have you covered</li>
                                    <li><i className="flaticon-tick"></i> We turn heads</li>
                                    <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div> */}
        </section>
    )
}

export default About1;