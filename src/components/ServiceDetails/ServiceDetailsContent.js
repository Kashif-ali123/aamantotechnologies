import React from 'react'
import {Link} from 'gatsby'
import StarIcon from '../../assets/images/star-icon.png'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/ser.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
// import charts from '../../assets/images/services/charts1.jpg'
import ReactWOW from 'react-wow'
import starIcon from '../../assets/images/star-icon.png'
import process7 from '../../assets/images/process/process7.png'
import small1 from '../../assets/images/process/process-small1.png'
import small4 from '../../assets/images/process/process-small4.png'
import small5 from '../../assets/images/process/process-small5.png'
import small6 from '../../assets/images/process/process-small6.png'
import subscribeImg1 from '../../assets/images/subscribe-img1.png'
import shape6 from '../../assets/images/shape/vector-shape6.png'
const ServiceDetailsContent = () => {
    return (
        <>
        <section className="services-details-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="services-details-image" >
                            {/* <img src={details1} alt="about"  style={{height:"550px"}}/> */}
                        </div>

                        <div className="services-details-desc">
                        <ReactWOW delay='1s' animation='fadeInRight'>
                            <span className="sub-title"><h1>Software Development</h1></span>
                        </ReactWOW>
                         <ReactWOW delay='1.5s' animation='fadeInUp'>   
                            <p className="service-description">Aamanto is a full-service Custom Software Development, Cloud Engineering, Quality Assurance, and DevOps firm that specializes in the development of time-sensitive and technological ideas. Aamanto provides subject experience, excellent engineering talent, rigorous Agile development methodologies, commitment to client IP protection, and accountability of outstanding reputation to every project.</p>
                        </ReactWOW>                 
                            
                            <div className="row align-items-center" style={{display:"none"}}>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                                        <img src={project2} alt="about" />
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Important Facts</h3>
                                        <ul>
                                            <li>The Field of Software Development</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ReactWOW delay='1.8s' animation='fadeInUp'>
                            <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p>
                            </ReactWOW>
                            <section className="process-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    {/* <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        How It's Work
                    </span> */}
                    <ReactWOW delay='1.5s' animation='fadeInDown'> 
                    <h2>Why Choose Aamanto For Custom Software Development</h2>
                    <p>We employ cutting-edge techniques and substantial experience as a global leader in web development solutions to provide you with the best outcomes.</p>
                    </ReactWOW>
                </div>
                <div className="row align-items-center m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="process-image">
                        <ReactWOW delay='2s' animation='fadeInLeft'>
                            <img src={process7} alt="banner" />
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="process-content">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3> Fast and Reliable Service</h3>
                                            <div className="number">1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3> Dedicated Team Members</h3>
                                            <div className="number">2</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small1} alt="banner" />
                                            </div>
                                            <h3>Prioritize Customer Satisfaction</h3>
                                            <div className="number">3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small4} alt="banner" />
                                            </div>
                                            <h3>Result-Oriented Methods</h3>
                                            <div className="number">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-box-item">
                                        <div className="d-flex align-items-center">
                                            <div className="image">
                                                <img src={small5} alt="banner" />
                                            </div>
                                            <h3>Complete Confidentiality</h3>
                                            <div className="number">5</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>


            <section className="solutions-area pt-100 pb-70">
            <div className="container">
                {/* <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="image" /> 
                        Our Solutions
                    </span>
                    <h2>We Different From Others Should Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div> */}

                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single-solutions-box-software">
                            <div className="icon-software">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Fast and Reliable Delivery
                                </Link>
                            </h3>
                            <p>Our organization is dedicated to its work and to meeting deadlines, so you can receive your website on time with reliability.</p>

                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-solutions-box-software">
                            <div className="icon-software">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Dedicated Team Members
                                </Link>
                            </h3>

                            <p>Every developer and designer on the team of Aamanto has been hand-picked to deliver better results. They work on each project with sincere devotion.</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box-software">
                            <div className="icon-software">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Prioritize Customer Satisfaction
                                </Link>
                            </h3> 

                            <p>Client satisfaction is of the utmost importance to us. As a result, we make every effort to create a website that exceeds your objectives.</p>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="single-solutions-box-software">
                            <div className="icon-software">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Result-Oriented Methods
                                </Link>
                            </h3>

                            <p>We create a set of criteria to focus on your prestigious project and give exactly what you've paid for in order to take over the market.</p>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6" style={{margin:'0px auto'}}>
                        <div className="single-solutions-box-software">
                            <div className="icon-software">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Complete Confidentiality
                                </Link>
                            </h3>

                            <p>Our team will keep you updated on the development and share any necessary information with you at every stage of the procedure.</p>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>            
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-image">
                            <img src={subscribeImg1} alt="subscribe" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-content">
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <form className="newsletter-form">
                                <input type="text" className="input-newsletter" placeholder="Enter your email address" name="email" required />
                                <button type="submit" className="default-btn">
                                    <i className="flaticon-tick"></i> 
                                    Subscribe Now <span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src={shape6} alt="shape" />
            </div>
        </div>
        </section>
    
                            {/* <h3>Technologies That We Use</h3>
                            <ul className="technologies-features">
                                <li><span>JavaScript</span></li>
                                <li><span>Python</span></li>
                                <li><span>Java</span></li>
                                <li><span>React Js </span></li>
                                <li><span>PHP</span></li>
                                <li><span>Swift</span></li>
                                <li><span>C# (C- Sharp)</span></li>
                                <li><span>Reactive Native</span></li>
                                <li><span>Angular</span></li>
                                <li><span>Node Js</span></li>
                                <li><span>MongoDB</span></li>
                                <li><span>MYSQL</span></li>

                                
                            </ul> */}
                            {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                <img src={charts} alt="about" />
                            </div> */}
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div> */}
                    </div>
            </div>
            </section>
             
 </>
            
       
    )
}

export default ServiceDetailsContent