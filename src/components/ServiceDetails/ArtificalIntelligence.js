import React from 'react'

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

const ArtificalIntelligence = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <ReactWOW delay='.1s' animation='bounceInUp'>
        <h2 style={{marginTop:"50px", marginLeft:"100px"}}>ARTIFICAL INTELLIGENCE</h2>
        </ReactWOW>
        <ReactWOW delay='.1s' animation='bounceInDown'>
        <p style={{marginTop:"20px", marginLeft:"100px", marginRight:"100px"}}>Aamanto also develops and builds industry-leading digital transformation technologies. We use block chain and AI to turn sophisticated products into quick fixes. We have a large team of highly qualified AI developers and Consultants who have executed end-to-end initiatives in machine learning, natural language processing, computer vision, and predictive analysis. We are a leading machine learning startup that uses powerful algorithms to assist organizations to automate processes and prioritize regular decision making. This reduces the risk of human mistakes and allows us to move away from traditional rule-based procedures and toward more intelligent ones, allowing us to find new unstructured data sets and patterns. </p>
       </ReactWOW>     
        <section className="testimonials-area bg-23173a pt-100 pb-70" style={{marginTop:"10px"}}>
        <div className="container">
                  
                           
        <ReactWOW delay='.1s' animation='bounceInUp'>
              <h1 style={{textAlign:"left", color:"#fff"}}>Advantages of Artificial Intelligence in Your Business Transformation Journey</h1>
            </ReactWOW>
            <ReactWOW delay='.1s' animation='bounceInDown'>
              <p style={{marginBottom:"30px", color:"#fff"}}>Artificial intelligence is helping organizations achieve higher returns on investment and more pleasant working conditions. We make certain that you have the assistance you need for your IT infrastructure to make business operation and management easier.</p>
               </ReactWOW>
           

            {display ? <OwlCarousel 
                className="testimonials-slides owl-carousel owl-theme"
                {...options}
            > 
             <ReactWOW delay='.1s' animation='bounceInUp'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h2 >Reduced Cost</h2>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <p style={{textAlign:"left"}}>Artificial intelligence technologies integrated into your organization would not only share your workload but also save you money. Empower artificial intelligence to engage with your company at a lower cost.</p>
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
             <ReactWOW delay='.1s' animation='bounceInDown'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h1 >Integrated Information</h1>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <p style={{textAlign:"left"}}>Big data solutions have captured all of the pertinent information about your company. Integrate the data with the AI solution for improved analysis and strategy development that will only yield positive results.

</p>
</ReactWOW>
                   
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInUp'>
              
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h3>Customer Service Improvements</h3>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <p style={{textAlign:"left"}}>Artificial intelligence (AI) solutions make it easier to communicate with your consumers. Your clients will be able to identify with your brand if you provide them with a tailored communication experience. It helps in the formation of market credibility.</p>
                  </ReactWOW>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h1>Better Security </h1>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInup'>
                    <p style={{textAlign:"left"}}>The most pressing problem for most firms these days is data security. You can keep your confidential information safe and secure by integrating AI technology into your organization. Reduce the possibility of privacy violations to "zero."</p>
                  </ReactWOW>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInUp'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h1>Digital Transformation</h1>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <p style={{textAlign:"left"}}>AI has played a role in the digital transformation of both large and small businesses. There are numerous considerations to be made at first. Our team's AI support helps you in the efficient implementation and control of your business.</p>
                  </ReactWOW>
                </div>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInDown'>
                <div className="single-testimonials-box">
                    {/* <img src={user1} className="shadow-sm" alt="testimonials" style={{backgroundColor:"#fff", width:"300px"}} /> */}
                    <ReactWOW delay='.1s' animation='bounceInDown'>
                    <h1>Complete Discretion</h1>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='bounceInUp'>
                    <p style={{textAlign:"left"}}>You will have complete transparency and access to all of the data and additional integrations we offer. We make sure that the project development is transparent and that you are aware of where your solution is at all times.</p>
                  </ReactWOW>
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
    </>
     
    )
}

export default ArtificalIntelligence