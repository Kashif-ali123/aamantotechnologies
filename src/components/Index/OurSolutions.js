import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'

import starIcon from '../../assets/images/star-icon.png'
// import caseStudy1 from '../../assets/images/case-study/case-study1.jpg'
import Loadable from '@loadable/component'
import scientist1 from '../../assets/images/icons/icon1.png'
import scientist2 from '../../assets/images/icons/icon2.png'
import scientist3 from '../../assets/images/icons/icon3.png'
import scientist4 from '../../assets/images/icons/icon4.png'
import scientist5 from '../../assets/images/icons/icon5.png'
import scientist6 from '../../assets/images/icons/icon6.png'
import {bannerData} from '../data'

const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const OurSolutions = () => {
  
   
        return(
            <>
             
              <div >
              {bannerData.map((data, key) => {
                return (
                  <div key={key}>
                    <Services
                      key={key}
                      services={data.services}
                     paragraph={data.paragraph}
                     title={data.title}
                     desc={data.desc}
                     title1={data.title1}
                     desc1={data.desc1}
                     btn={data.btn}
                     title2={data.title2}
                     desc2={data.desc2}
                     title3={data.title3}
                     desc3={data.desc3}
                     title4={data.title4}
                     desc4={data.desc4}
                     title5={data.title5}
                     desc5={data.desc5}
                    
                  
                   
                      
                    />
                  </div>
                );
              })}
            </div>
          </>
          );
          };
         
        const Services = ({ services, paragraph, title, desc,title1, desc1,title2, desc2,title3, desc3,title4, desc4,title5, desc5, btn}) => {
            if (!services) return <div />;   
            
            const [display, setDisplay] = React.useState(false);

            React.useEffect(() => {
                setDisplay(true);
            }, []);  
    return (
        <div className="case-study-are">
             
            <div className="section-title">
            <ReactWOW delay='.1s' animation='bounceInUp'>
                    <span className="sub-title" style={{marginTop:"40px"}}>
                  
                        <img src={starIcon} alt="star"  style={{width:"50px"}} /> 
                       {services}
                    </span>
                   </ReactWOW>
                   <ReactWOW delay='.1s' animation='bounceInDown'>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p >{paragraph}</p>
                </ReactWOW>
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
                                <Link to="/mobile-details">
                                {title}
                                </Link>
                            </h3>
                            <p>{desc}</p>
                            <Link to="/mobile-details" className="view-details-btn" >
                           {btn}
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
                            <img src={scientist2} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/digital-details">
                              {title1}
                                </Link>
                            </h3>
                            <p>{desc1}</p>
                            <Link to="/digital-details" className="view-details-btn" >
                           {btn}
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
                            <img src={scientist3} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/software-development">
                                {title2}
                                </Link>
                            </h3>
                            <p>{
                            desc2}</p>
                            <Link to="/software-development" className="view-details-btn" >
                            {btn}
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
                            <img src={scientist4} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/services-cloud">
                              {title3}
                                </Link>
                            </h3>
                            <p>{desc3}</p>
                            <Link to="/services-cloud" className="view-details-btn" >
                         {
                         btn}
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
                            <img src={scientist5} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/services-data">
                              {title4}
                                </Link>
                            </h3>
                            <p>{desc4}</p>
                            <Link to="/services-data" className="view-details-btn" >
                           {btn}
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
                            <img src={scientist6} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/cyber-details">
                               {title5}
                                </Link>
                            </h3>
                            <p>{desc5}</p>
                            <Link to="/cyber-details" className="view-details-btn" >
                       {btn}
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
                {/* <div className="single-case-study-item pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6" >
                        <div className="single-solutions-box"  >
                            <div className="icon">
                            <img src={scientist4} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/internet-details">
                                INTERNET OF THINGS (IoT)
                                </Link>
                            </h3>
                            <p>Aamanto offers a range of services and innovative consumer electronics startups to develop IoT solutions. We guide our clients in the development of smart devices, the conversion of analogue products to digital </p>
                            <Link to="/internet-details" className="view-details-btn" >
                            Read More */}
                            {/* </Link> */}
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                    {/* //     </div>
                    // </div> */}
                    {/* <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-solutions-box" >
                            <div className="icon">
                            <img src={scientist5} alt="about" />
                            </div>
                            
                            <h3>
                                <Link to="/artifical-details">
                                ARTIFICAL INTELLIGENCE
                                </Link>
                            </h3>
                            <p>Aamanto also develops and builds industry-leading digital transformation technologies. We use block chain and AI to turn sophisticated products into quick fixes. We have a large team of highly</p>
                            <Link to="/artifical-details" className="view-details-btn" >
                            Read More
                            </Link> */}
                            {/* <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market .</p> */}

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                            
                        {/* </div>
                    </div>
                  
                   */}



                            {/* <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link to="/case-studies-details" className="d-block">
                                        <img src={caseStudy1} alt="case-study" />
                                    </Link>
                                </div>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </OwlCarousel> : ''}
        </div>
    )
}

export default OurSolutions;