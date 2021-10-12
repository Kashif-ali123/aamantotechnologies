import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import caseStudy1 from '../../assets/images/case-study/case-study1.jpg'
import Loadable from '@loadable/component'
import scientist1 from '../../assets/images/icons/icon1.png'
import project1 from '../../assets/images/projects/project1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import project3 from '../../assets/images/projects/project3.jpg'
import project4 from '../../assets/images/projects/project4.jpg'
import project5 from '../../assets/images/projects/project5.jpg'
import project6 from '../../assets/images/projects/project6.jpg'
import OurSolutions from './OurSolutions'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const Solutions = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="case-study-are">
            <div className="section-title">
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="star"  /> 
                     Solutions We Offer
                    </span>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            {display ? <OwlCarousel 
                className="case-study-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-case-study-item pb-100">
                    <div className="container">
                        <div className="row align-items-center">
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

                            {/* <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link to="/case-studies-details" className="d-block">
                                        <img src={caseStudy1} alt="case-study" />
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="single-case-study-item pb-100">
                    <div className="container">
                        <div className="row align-items-center">
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

                            {/* <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link to="/case-studies-details" className="d-block">
                                        <img src={caseStudy1} alt="case-study" />
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </div>
    )
}

export default Solutions;