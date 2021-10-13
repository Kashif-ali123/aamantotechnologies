import React from 'react';
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
import bannerImg from '../../assets/images/cr.png'

// import Loadable from '@loadable/component'
// const ModalVideo = Loadable(() => import('react-modal-video'))
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

// const options = {
//     loop: true,
//     nav: true,
//     dots: false,
//     autoplayHoverPause: true,
//     autoplay: true,
//     items: 1,
//     navText: [
//         "<i class='flaticon-left-1'></i>",
//         "<i class='flaticon-right-1'></i>"
//     ]
// };

const CrmBanner = () => {
    // Popup Video
    // const [isOpen, setIsOpen] = React.useState(true);
    // const openModal = () => {
    //     setIsOpen(!isOpen);
    // }

    // Owl Carousel
    // const [display, setDisplay] = React.useState(false);

    // React.useEffect(() => {
    //     setDisplay(true);
    // }, [])

    return (
       
         
                <div className="main-banner-item item-bg1">
                <div className="page-title-are">
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 col-md-12">
                    <div className="main-banner-content">
                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h1 style={{fontSize:"30px", color:"#fff"}}>CRM</h1>
                        </ReactWOW>

                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{textAlign:"justify",  color:"#fff"}}>Aamanto provide CRM Development Solutions to help you get all the more effective customer interaction and profitable business.</p>
                           
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

                <div className="col-lg-6 col-md-12" >
                    <ReactWOW delay='.1s' animation='fadeInUp'>
                        <div className="main-banner-layer" >
                            <img src={bannerImg} alt="banner"  />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        </div>
   </div>
</div>
        
    )
}

export default CrmBanner;