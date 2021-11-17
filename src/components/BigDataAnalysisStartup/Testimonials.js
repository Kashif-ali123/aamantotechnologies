import React from 'react'
import user1 from '../../assets/images/services/gather.png'
import user2 from '../../assets/images/services/featured.jpg'
import user3 from '../../assets/images/services/images.png'
import user4 from '../../assets/images/services/strategy.png'
import user5 from '../../assets/images/services/stock.png'
import user6 from '../../assets/images/services/download.png'
import shape9 from '../../assets/images/shape/vector-shape9.png'
import shape10 from '../../assets/images/shape/vector-shape10.png'
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

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="testimonials-area bg-23173a pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>PROCESS OF CUSTOM SOFTWARE DEVELOPMENT</h2>
                    <p>Aamanto web design and development team has developed a number of useful services to help you transform your business.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-box" style={{height:"454px"}}>
                        <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} />
                        <h1 style={{marginTop:"100px"}}>Gathering Information</h1>
                        <p>Clients are our top priority, and we endeavor to provide them with only the best service. As a result, we begin by examining the expectations and requirements of our clients. Our team gathers all relevant information about your company, goals, market, rivals, and other factors before moving forward.</p>
{/* 
                        <div className="client-info">
                            <div className="title">
                                <h3>Alex Maxwell</h3>
                                <span>CEO at EnvyTheme</span>
                            </div>
                        </div> */}
                    </div>

                    <div className="single-testimonials-box" style={{height:"454px"}}>
                        <img src={user2} className="shadow-sm" alt="testimonials" />
                        <h1 style={{marginTop:"100px"}}>Features Declarations</h1>
                        <p>We will produce a framework detailing those elements, including features, design, and functions, once we have all of the crucial facts that our client is seeking on the website. Clients are able to review the pre-defined guidelines and make any adjustments they see appropriate.</p>

                        {/* <div className="client-info">
                            <div className="title">
                                <h3>David Warner</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div> */}
                    </div>

                    <div className="single-testimonials-box" style={{height:"454px"}}>
                        <img src={user3} className="shadow-sm" alt="testimonials" />
                        <h1 style={{marginTop:"100px"}}>Strategy Formulation</h1>
                        <p>Our team moves forward with the strategy development process after enumerating all of the demands and comprehending our clients' perspectives. Our experts will offer the ideal solution for your project based on your objectives, ensuring that you receive only the best web development services.</p>

                        {/* <div className="client-info">
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at ThemeForest</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="single-testimonials-box">
                        <img src={user4} className="shadow-sm" alt="testimonials" />
                        <h1 style={{marginTop:"100px"}}>Design and Coding</h1>
                        <p>Following that, we'll begin the coding and design process while keeping the standards insight. Our in-house designer will take care of all the essential details for a perfect and user-friendly website. They'll also make sure the website adheres to all of Google's and SEO's most recent rules. All modifications will be sent to the clients for finalization.</p>

                        {/* <div className="client-info">
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at ThemeForest</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="single-testimonials-box">
                        <img src={user5} className="shadow-sm" alt="testimonials" />
                        <h1 style={{marginTop:"100px"}}>Debugging</h1>
                        <p>We are pleased with our high-quality service and will not compromise it at any cost. We've established a separate team of skilled workers to oversee the tasks we do. The website will be sent to the customer once it has been approved. We also provide our clients with post-delivery support to guarantee  fully comprehend the functionality.</p>

                        {/* <div className="client-info">
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at ThemeForest</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="single-testimonials-box">
                        <img src={user6} className="shadow-sm" alt="testimonials" />
                        <h1 style={{marginTop:"100px"}}>Project Execution</h1>
                        <p>Websites are prone to bugs and technological faults, as we all know. As a result, each designed website must go through a rigorous quality testing process before being delivered. The client has access to it after it is clear of any problems and issues. We also keep in touch with the client on a regular basis in case he or she has any concerns about the website.</p>

                        {/* <div className="client-info">
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at ThemeForest</span>
                            </div>
                        </div> */}
                    </div>
                </OwlCarousel> : ''}
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="testimonials" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="testimonials" />
            </div>
        </section>
    )
}

export default Testimonials