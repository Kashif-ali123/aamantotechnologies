import React from 'react'
 import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/banner-img11.png'
// import shape1 from '../../assets/images/shape/shape1.svg'
// import shape2 from '../../assets/images/shape/shape2.png'
// import shape3 from '../../assets/images/shape/shape3.png'

const Blog1Banner = () => {
    return (
        <div className="page-title-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px"}}>How AI Chatbot Technology is Changing The Health Industry  </h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify"}}>There is no denying that artificial intelligence is having a significant impact on the healthcare industry. According to Accenture research, more than 40% of healthcare executives believe AI will have the most critical influence on their organizations within the next three years. In addition, various types of artificial intelligence, such as predictive analytics or machine learning, are already being used by healthcare practitioners to address multiple concerns. </p>
                            {/* <p style={{textAlign:"justify"}}>But do you think cloud adoption is easy?  </p>
                            <p style={{textAlign:"justify"}}>If you're curious to learn more about cloud adoption, you've come to the right place. As we will discuss the many stages of cloud adoption in this article, we will better understand how to proceed with cloud migration and the various procedures that occur. </p>
                            <p style={{textAlign:"justify"}}>Let's have a peek at the Cloud journey before moving on.</p> */}
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get Started <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer">
                            <img src={bannerImg} alt="banner" style={{borderRadius:"100px 50px 100px 50px", height:"360px", marginBottom:"100px"}} />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>

               
    )
}

export default Blog1Banner;