import React from 'react'
import ReactWOW from 'react-wow'
import bannerImg from '../../assets/images/services/personal-crm.png'

const AboutAamanto = () => {
    return (
        <>
        <section className="services-details-area ptb-100" style={{marginTop:"50px"}}>
            <div className="container">
           
                            
                <div className="row">
                    <div className="col-lg-12 col-md-12" >
                        <div className="services-details-image" >
                            {/* <img src={details1} alt="about"  style={{height:"550px"}}/> */}
                        </div>

                      

                            {/* <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p> */}
                            <ReactWOW delay='.1s' animation='bounceInRight'>
                <h2 style={{textAlign:"center"}}>About Aamanto</h2>
                </ReactWOW>
                <ReactWOW delay='.1s' animation='bounceInLeft'>
            <p style={{color:"#fff"}}>Our team of experienced professionals specialize in delivering software solutions to clients in a wide range of industries. We utilize cutting-edge technologies to provide services such as end-to-end software development, data analytics, artificial intelligence, cloud adoption, digital transformation, agile development and project management. Our research and development team studies emerging technologies and market demand to provide quality industry-specific and innovative solutions to our clients worldwide. At Aamanto, we emphasize our core values of creativity, respect, teamwork, and transparency. Our employees are customer-focused and strive to provide valuable services and advice to all of our clients.</p>
                     </ReactWOW>
                          
                           

                           
                         
                        </div>
                    </div>
                  
                    
                    {/* <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div> */}
                    </div>
         
            </section>
             
 </>
            
       
    )
}

export default AboutAamanto