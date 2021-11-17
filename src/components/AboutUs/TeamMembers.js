import React from 'react'
import ReactWOW from 'react-wow'
// import {Link} from 'gatsby'
// import starIcon from '../../assets/images/star-icon.png'
import scientist1 from '../../assets/images/scientist/scientist1.png'
import scientist2 from '../../assets/images/scientist/scientist2.png'
import scientist3 from '../../assets/images/scientist/scientist3.png'
import scientist4 from '../../assets/images/scientist/scientist4.png'

const TeamMembers = () => {
    return (
        <section className="scientist-area bg-color pb-70">
            <div className="container">
                <div className="section-title">
                <ReactWOW delay='.5s' animation='fadeInRight'>
                    <span className="sub-title">
                        {/* <img src={starIcon} alt="about" /> 
                        Team Members */}
                    </span>
                    <h2>A Well-Defined Process Leading to Success</h2>
                    <p style={{textAlign:"justify"}}>We have a well-defined agile process which we follow to deliver all kind of high-quality solutions. We utilize the following 4-step approach for development and service provisioning: Analysis, Design, Architecture, and Orchestration.</p>
                   </ReactWOW>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box" >
             
                <div className="content">
                <ReactWOW delay='.5s' animation='fadeInRight'>
                                <h3 style={{marginBottom:"15px"}}>Analysis</h3>
                                <p style={{textAlign:"justify"}}>We take the time to understand and analyze our client needs and their time to market strategy also analyze work .</p>

                                {/* <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul> */}
                                </ReactWOW>
                            </div>
               
                            <div className="image" >
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                                <img src={scientist1} alt="about"   />
                                </ReactWOW>
                            </div>
                            {/* <div className="content">
                                <h3>Merv Adrian</h3>
                                <span>Data Management</span>

                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            {/* <div className="image">
                                <img src={scientist2} alt="about" />
                            </div> */}
                            <div className="content">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                                <h3 style={{marginBottom:"15px"}}>Design</h3>
                                <p style={{textAlign:"justify"}}>We use well defined and innovative thinking strategy to develop agile plan to address client goals with keeping in mind time, scope.</p>
                                
                                {/* <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul> */}
                                </ReactWOW>
                            </div>
                            <div className="image">
                            <ReactWOW delay='.5s' animation='fadeInLeft'>
                                <img src={scientist2} alt="about"   />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                    <div className="content">
                    <ReactWOW delay='.5s' animation='fadeInRight'>
                                <h3 style={{marginBottom:"15px"}}>Architecture</h3>
                                <p style={{textAlign:"justify"}}>Given a design, we develop an architecture based on used patterns and enhanced security enabling safety and future extendibility.</p>
                                
                                {/* <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul> */}
                                </ReactWOW>
                            </div>
                    {/* <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box"> */}
                            <div className="image">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                                <img src={scientist3} alt="about" />
                                </ReactWOW>
                            </div>
                            {/* <div className="content">
                                <h3>Carla Gentry</h3>
                                <span>Analytical Solutions</span>
                                
                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            {/* <div className="image">
                                <img src={scientist4} alt="about" />
                            </div> */}
                            <div className="content">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                                <h3 style={{marginBottom:"15px"}}>Orchestration</h3>
                                <p style={{textAlign:"justify"}}>Orchestration of technology in heterogeneous systems, potentially servicing a global cloud deployment in different geographical .</p>
                                
                                {/* <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul> */}
                                </ReactWOW>
                            </div>
                            <div className="image">
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                                <img src={scientist4} alt="about"   />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers