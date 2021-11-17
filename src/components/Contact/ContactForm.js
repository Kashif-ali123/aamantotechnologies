import React from 'react'
import ReactWOW from 'react-wow'
import {bannerData} from '../data'
import starIcon from '../../assets/images/star-icon.png'
// import contact from '../../assets/images/contact.png'

const ContactForm = () => {
    return(
        <>
         
          <div >
          {bannerData.map((data, key) => {
            return (
              <div key={key}>
                <Contact
                  key={key}
                  contact={data.contact}
               
                 paragraph={data.paragraph}
               
                 contact_img={data.contact_img}
              
                
               

                 />
                 </div>
               );
             })}
           </div>
         </>
         );
         };
         const Contact = ({ contact, paragraph,  contact_img }) => {
            if (!contact) return <div />;   
    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                <ReactWOW delay='.5s' animation='fadeInRight'>
                    <span className="sub-title" style={{marginTop:"40px"}}>
                        <img src={starIcon} alt="contact" style={{width:"50px"}} /> 
                    {contact}
                    </span>
                    {/* <h2>Ready to Get Started?</h2> */}
                    <p>{paragraph}</p>
                  </ReactWOW>
                </div>

                <div className="row">
                    {/* <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src={contact} alt="contact" />
                        </div>
                    </div> */}

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                        <ReactWOW delay='.5s' animation='fadeInRLeft'>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required placeholder="Your name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required placeholder="Your email address" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required placeholder="Your phone number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Write your message..." />
                                        </div>
                                    </div>
                    

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                            <i className="flaticon-tick"></i> 
                                            Send Message <span></span>
                                        </button>
                                    </div>
                                  
                                </div>
                            </form>
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                        <ReactWOW delay='.5s' animation='fadeInRight'>
                            <img src={ contact_img} alt="contact" />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm