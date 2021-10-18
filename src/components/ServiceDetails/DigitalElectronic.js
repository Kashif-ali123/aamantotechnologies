import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
// import ServiceSidebar from './ServiceSidebar'
// import details1 from '../../assets/images/services/cloud-adoption.jpg'
// import shape9 from '../../assets/images/shape/vector-shape9.png'
// import shape10 from '../../assets/images/shape/vector-shape10.png'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
};

const DigitalElectronic = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <section className="testimonials-area bg-231733 pt-100 pb-70" style={{marginTop:"50px"}}>
        <div className="container">
            <h2 style={{marginTop:"-40px", marginBottom:"40px", textAlign:"center"}}>DigitalElectronic | ASSETS | EQUIPMENT</h2>
          

            {display ? <OwlCarousel 
                className="testimonials-slides owl-carousel owl-theme"
                {...options}
            > 
         
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <h1>DigitalElectronic </h1>
                    <h2 >Connect products and services</h2>
                    <p style={{textAlign:"left"}}>WWe turn devices into data sources to enable consumer electronics companies to experiment with new revenue streams. Our Digital Transformation services team can help you with:</p>
                    <ol style={{textAlign:"left"}}>
                        <li><p>Prototype, design, and test a customer-facing gadget.</p></li>
                        <li><p>Add new functionality to smart gadgets.</p></li>
                        <li><p>For a connected product, create online, mobile, and embedded applications.</p></li>
                        <li><p>To personalize the customer experience, track and process device usage data.</p></li>
                    </ol>
{/* 
                    <div className="client-info">
                        <div className="title">
                            <h3>Alex Maxwell</h3>
                            <span>CEO at EnvyTheme</span>
                        </div>
                    </div> */}
                     <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Code <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                </div>
             

               
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                   
                    <h1 >ASSETS</h1>
                    <h1>Assets Arrangement: </h1>
                    <p style={{textAlign:"left"}}>We create software to track industrial assets, products, and resources. Manufacturing, automotive, logistics, and retail industries can use the solutions to:</p>
                    <ol style={{textAlign:"left"}}>
                        <li><p>Sensors and RFID tags are used to keep track of assets.</p></li>
                        <li><p>Facilitate picking and packing process in the warehouse</p></li>
                        <li><p>Streamline inventory management and automate replenishment.</p></li>
                        <li><p>Optimize your fuel usage and route planning.</p></li>
                    </ol>
{/* 
                    <div className="client-info">
                        <div className="title">
                            <h3>Alex Maxwell</h3>
                            <span>CEO at EnvyTheme</span>
                        </div>
                    </div> */}
                     <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Code <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                </div>
               
                
              
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <h1 >EQUIPMENT</h1>
                    <h1>Equipment Maintenance: </h1>
                    <p style={{textAlign:"left"}}>We embed sensors in industrial machinery and use Machine Learning to interpret the data they provide so that our customers can:</p>
                    <ol style={{textAlign:"left"}}>
                        <li><p> Keep an eye on the equipment's condition and health.</p></li>
                        <li><p>Streamline production processes.</p></li>
                        <li><p>Prepare for failure.</p></li>
                        <li><p>Enhance customer service</p></li>
                        <li><p>Make minor adjustments to the machine's performance (onsite and remotely)</p></li>
                    </ol>
{/* 
                    <div className="client-info">
                        <div className="title">
                            <h3>Alex Maxwell</h3>
                            <span>CEO at EnvyTheme</span>
                        </div>
                    </div> */}
                     <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get a Code <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                </div>
             

              
            </OwlCarousel> : ''}
        </div>

        {/* <div className="vector-shape9">
            <img src={shape9} alt="testimonials" />
        </div>
        <div className="vector-shape10">
            <img src={shape10} alt="testimonials" />
        </div> */}
    </section>
     
    )
}

export default DigitalElectronic