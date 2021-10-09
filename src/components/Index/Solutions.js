import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import project1 from '../../assets/images/projects/project1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import project3 from '../../assets/images/projects/project3.jpg'
import project4 from '../../assets/images/projects/project4.jpg'
import project5 from '../../assets/images/projects/project5.jpg'
import project6 from '../../assets/images/projects/project6.jpg'

const Solutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="star"  /> 
                     Solutions We Offer
                    </span>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project1} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                     CRM
                                    </Link>
                                </h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project2} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                       E Commerce
                                    </Link>
                                </h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project3} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                       Mobile App
                                    </Link>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project4} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                    Web Portals
                                    </Link>
                                </h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box ">
                            <div className="image">
                                <img src={project5} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                    Softwares
                                    </Link>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project6} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                    Applications
                                    </Link>
                                </h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions;