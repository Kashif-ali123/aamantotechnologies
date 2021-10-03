import React from 'react'

const ContactInfo = () => {
    return (
        <>
       
        <div className="contact-info-area pt-100 pb-70">
        <h2 style={{textAlign:"center", marginTop:"60px", marginBottom:"60px", fontSize:"25px"}}>Contact Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                           
                            <h3>Our Address</h3>
                            <p>10 Streamside Street Kleinburg, Ontario Canada L4H 4V3</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p>Mobile: <a href="tel:+1 (833) 540-1866">+1 (833) 540-1866</a></p>
                            <p>E-mail: <a href="mailto:info@aamanto.com">info@aamanto.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Hours of Working Days</h3>
                            <p>Monday - Friday: 10:00 - 8:00</p>
                            <p>Sunday & Saturday: Close</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactInfo