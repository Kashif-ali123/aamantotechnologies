import React from 'react'
import ReactWOW from 'react-wow'
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

const CloudContent = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <section className="testimonials-area bg-231733 pt-100 pb-70" style={{marginTop:"50px"}}>
        <div className="container">
        <ReactWOW delay='.1s' animation='fadeInRight'>
          <h2>CLOUD ADOPTION</h2>

          <p>Aamanto will support you with our in-depth cloud engineering expertise and over years of experience modernizing legacy solutions and developing innovative applications for companies ranging from small businesses to large enterprises, whether you are already in the Cloud, having considered Cloud Migration, or looking to develop a Cloud-Native application. We thrive in private, hybrid, and public cloud systems, assisting our customers in the development of high-performance, scalable, and reliable solutions that maximize the return on cloud projects, reduce costs, and minimize risk.</p>
                                
         </ReactWOW>

            <div className="section-title">
            <ReactWOW delay='.1s' animation='fadeInLeft'>
                <h2>FEATURES OF OUR SERVICES INCLUDES:</h2>
                </ReactWOW>
               
            </div>

            {display ? <OwlCarousel 
                className="testimonials-slides owl-carousel owl-theme"
                {...options}
            > 
             <ReactWOW delay='.1s' animation='fadeInRight'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <h1 >Recovery and Backup</h1>
                    <p>When it comes to cloud backup and recovery, our solution takes care of your company's Amazon Web Services (AWS) data. This involves providing a secure, scalable, and extremely durable storage solution that eliminates the need for on-premise infrastructure.</p>
                   </ReactWOW>
{/*                
                    <div className="client-info">
                        <div className="title">
                            <h3>Alex Maxwell</h3>
                            <span>CEO at EnvyTheme</span>
                        </div>
                    </div> */}
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='fadeInLeft'>
                <div className="single-testimonials-box">
                    {/* <img src={user2} className="shadow-sm" alt="testimonials" /> */}
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <h1>AWS Cloud Databases</h1>
                    <p>The AWS cloud database services are comprehensive enough to fulfill your company's application needs. Amazon Aurora, Amazon DynamoDB, Amazon Relational Database Service (Amazon RDS), Amazon Redshift, and Amazon ElastiCache are among the services offered.  Our services manage everything.</p>
                   </ReactWOW>
                    {/* <div className="client-info">
                        <div className="title">
                            <h3>David Warner</h3>
                            <span>CEO at Envato</span>
                        </div>
                    </div> */}
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='fadeInRight'>

                <div className="single-testimonials-box">
                    {/* <img src={user3} className="shadow-sm" alt="testimonials" /> */}
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <h1 >Amazon CloudFront</h1>
                    <p>Amazon CloudFront is a global content delivery network (CDN) service that provides highly secure distribution of data, videos, applications, and APIs. Our professionals are dedicated to ensuring that CloudFront runs smoothly for you.</p>
                   </ReactWOW>
                    {/* <div className="client-info">
                        <div className="title">
                            <h3>Sarah Taylor</h3>
                            <span>CEO at ThemeForest</span>
                        </div>
                    </div> */}
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='fadeInLeft'>
                <div className="single-testimonials-box">
                    {/* <img src={user4} className="shadow-sm" alt="testimonials" /> */}
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <h1 >Faster Problem Recovery</h1>
                    <p>Enterprises increasingly want cloud-based disaster recovery for their essential IT systems that operate without disrupting workflow in the case of a disaster. The AWS cloud simulates a successful disaster recovery scenario, and we guide businesses through the entire process.</p>
                   </ReactWOW>
                    {/* <div className="client-info">
                        <div className="title">
                            <h3>Sarah Taylor</h3>
                            <span>CEO at ThemeForest</span>
                        </div>
                    </div> */}
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='fadeInRight'>
                <div className="single-testimonials-box">
                    {/* <img src={user5} className="shadow-sm" alt="testimonials" /> */}
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <h1 >Data Archiving</h1>
                    <p>Are you thinking about archiving your data? You might be able to use services like Amazon Glacier or Amazon Simple Storage Service in your cloud. Our experts will assist you in making the best decision for your company's needs. </p>
                    </ReactWOW>
                    {/* <div className="client-info">
                        <div className="title">
                            <h3>Sarah Taylor</h3>
                            <span>CEO at ThemeForest</span>
                        </div>
                    </div> */}
                </div>
                </ReactWOW>
              
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

export default CloudContent