import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import caseStudy1 from '../../assets/images/case-study/case-study1.jpg'
import Loadable from '@loadable/component'
import scientist1 from '../../assets/images/icons/icon1.png'
import scientist2 from '../../assets/images/icons/icon2.png'
import scientist3 from '../../assets/images/icons/icon3.png'
import scientist11 from '../../assets/images/scientist/scientist11.jpg'
import scientist17 from '../../assets/images/scientist/scientist17.png'
import scientist18 from '../../assets/images/scientist/scientist18.png'
import scientist20 from '../../assets/images/scientist/scientist20.png'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const OurSolutions = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="case-study-are">
            <div className="section-title">
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="star"  /> 
                        Our Services
                    </span>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p style={{textAlign:"justify"}}>We understand your business requirements and we have the right team to design and deliver your solutions. Whether you require software development, digital transformation, cloud adoption, data science, AI and analytical services – we are there to help you!</p>
                </div>
            {display ? <OwlCarousel 
                className="case-study-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-case-study-item pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                MOBILE APPLICATION DEVELOPMENT
                                </Link>
                            </h3>
                            <p>We're pushing the boundaries of what's achievable on mobile by building revolutionary mobile experiences for clients ranging from huge</p>
                            <Link to="/service-details" className="view-details-btn" >
                            Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                DIGITAL TRANSFORMATION
                                </Link>
                            </h3>
                            <p>As digital transformation is a journey, not a destination, you will need an experienced team to assist you in leveraging new technologies and reaping the benefits of being a digital business</p>
                            <Link to="/service-details" className="view-details-btn" >
                            Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                BESPOKE SOFTWARE DEVELOPMENT 
                                </Link>
                            </h3>
                            <p>Aamanto is a full-service Custom Software Development, Cloud Engineering, Quality Assurance, and DevOps firm that specializes in the development of time-sensitive</p>
                            <Link to="/service-details" className="view-details-btn" >
                            Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                CLOUD ADOPTION
                                </Link>
                            </h3>
                            <p>Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions and developing innovative applications for companies ranging from small</p>
                            <Link to="/service-details" className="view-details-btn" >
                            Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                DATA SCIENCE AND ANALYTICS
                                </Link>
                            </h3>
                            <p>Aamanto enables businesses to provide quality services to the customers by assisting them in advancing the analytics maturity curve by providing actionable insights</p>
                            <Link to="/service-details" className="view-details-btn" >
                            Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="#">
                                CYBER SECURITY
                                </Link>
                            </h3>
                            <p>Starting from a set of identification data items, such as brands, names, IPs, DNS domains, etc., data is obtained, correlated and transformed into information, which is then evaluated , which is then evaluated and</p>
                            <Link to="/service-details" className="view-details-btn" >
                                Read More
                            </Link>
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
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

export default OurSolutions;