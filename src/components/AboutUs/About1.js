import React from 'react'
import ReactWOW from 'react-wow'

import bannerImg from '../../assets/images/services/personal-crm.png'

// import icon4 from '../../assets/images/icons/icon4.png'
// import icon5 from '../../assets/images/icons/icon5.png'
// import icon6 from '../../assets/images/icons/icon6.png'
// import icon7 from '../../assets/images/icons/icon7.png'
// import shape1 from '../../assets/images/shape/circle-shape1.png'
 
const About1 = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    

                    <div className="col-lg-6 col-md-12"  style={{ background: "linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% )"}} >
                        <div className="about-content" style={{marginLeft:"30px", color:"#fff"}}>
                            <div className="content">
                                <br></br>
                            <ReactWOW delay='.5s' animation='fadeInRight'>
                              <h2 style={{textAlign:"center"}}>
                                    CRM
                               </h2>
                                {/* <h2>Drive Digital Revolution Through Data Science</h2> */}
                                <p style={{ color:"#fff", marginBottom:"70px"}}>It brings together the support team, the sales department, and the production team, as well as service users and consumers. This ensures that the company provides better support and added features throughout the lifecycle of the business, lowering costs and improving client loyalty. If you're looking to start a CRM to communicate with your customers, you've come to the perfect place. Aamanto has a qualified CRM development team that can painstakingly assess your business demands and come up with a solution that completely fits your business aims.</p>
                               
                               
                               
                                </ReactWOW>
                            </div>
                        </div>
                        
                </div>
                <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                        <ReactWOW delay='.5s' animation='fadeInLeft'>
                            <img src={bannerImg} alt="banner"  />
                            </ReactWOW>
                        </div>
                    </div>
                    </div>
            </div>

          
        </section>
    )
}

export default About1;