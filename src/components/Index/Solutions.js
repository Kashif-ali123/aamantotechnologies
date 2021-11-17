import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
import starIcon from '../../assets/images/star-icon.png'
// import caseStudy1 from '../../assets/images/case-study/case-study1.jpg'
import Loadable from '@loadable/component'
// import scientist1 from '../../assets/images/icons/icon1.png'
// import project1 from '../../assets/images/services/personal-crm.png'
// import project2 from '../../assets/images/services/ecommerce.png'
// import project3 from '../../assets/images/services/service5.png'
// import project4 from '../../assets/images/projects/project2.jpg'
// import project5 from '../../assets/images/projects/project5.jpg'
// import project6 from '../../assets/images/projects/project7.jpg'
// import project6 from '../../assets/images/projects/project6.jpg'
// import OurSolutions from './OurSolutions'
import {bannerData} from '../data'
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
    return(
        <>
         
          <div >
          {bannerData.map((data, key) => {
            return (
              <div key={key}>
                <Solution
                  key={key}
                solutions={data.solutions}
                 desc={data.desc}
                 title={data.title}
                 desc1={data.desc1}
                 title1={data.title1}
                 desc2={data.desc2}
                 btn={data.btn}
                 title2={data.title2}
                 desc3={data.desc3}
                 title3={data.title3}
                 desc4={data.desc4}
                 title4={data.title4}
                 desc5={data.desc5}
                 title5={data.title5}
                 desc6={data.desc6}
                 company_img={data.company_img}
                 img1={data.img1}
                 img2={data.img2}
                 img3={data.img3}
                 img4={data.img4}
                 img5={data.img5}
                
              
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
     
    const Solution = ({ solutions, desc, title, desc1,title1, desc2,title2, desc3,title3, company_img,desc4, img1, img2, img3, img4, img5,title4, desc5,title5, desc6, btn}) => {
        if (!solutions) return <div />;   
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="case-study-are">
            <div className="section-title">
            <ReactWOW delay='.1s' animation='bounceInUp'>
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="star" style={{width:"50px"}} /> 
                     {solutions}
                    </span>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    {/* <h2>We Different From Others Should Choose Us</h2> */}
                    <p>{desc}</p>
                </ReactWOW>
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
                                <img src={company_img} alt="project" />

                                <Link className="link-btn" to="/crm">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="/crm">
                                    {title}
                                    </Link>
                                </h1>
                              <p>{desc1}</p>
                              <Link to="/crm" className="view-details-btn" style={{color:"red"}} >
                           {btn}
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={img1} alt="project" />

                                <Link className="link-btn" to="/ecommerce">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="/ecommerce">
                                {title1}
                                    </Link>
                                </h1>
                               <p>{desc2}</p>
                               <Link to="/ecommerce" className="view-details-btn" style={{color:"red"}} >
                           {btn}
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={img2} alt="project" />

                                <Link className="link-btn" to="/mobile-detail">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="/mobile-detail">
                                      {title2}
                                    </Link>
                                </h1>
                                <p>{desc3}</p>
                                <Link to="/mobile-detail" className="view-details-btn" style={{color:"red"}} >
                            {btn}
                            </Link>
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
                        <div className="col-lg-4 col-md-6" >
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={img3} alt="project" />

                                <Link className="link-btn" to="/web">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="/web">
                                   {title3}
                                    </Link>
                                </h1>
                              <p>{desc4}</p>
                              <Link to="/web" className="view-details-btn" style={{color:"red"}} >
                            {btn}
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box ">
                            <div className="image">
                                <img src={img4} alt="project" />

                                <Link className="link-btn" to="/software">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h1>
                                    <Link to="/software">
                                   {title4}
                                    </Link>
                                </h1>
                                <p>{desc5}</p>
                                <Link to="/software" className="view-details-btn" style={{color:"red"}} >
                           {btn}
                            </Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={img5} alt="project" />

                                <Link className="link-btn" to="#">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div> 

                            <div className="content">
                                <h1>
                                    <Link to="#">
                                   {title5}
                                    </Link>
                                </h1>
                              <p> {desc6}</p>
                              <Link to="#" className="view-details-btn" style={{color:"red"}} >
                           {btn}
                            </Link>
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