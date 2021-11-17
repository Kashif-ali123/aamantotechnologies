import React from 'react'
import ReactWOW from 'react-wow'
// import starIcon from '../../assets/images/star-icon.png'
import history1 from '../../assets/images/history/history1.jpg'
// import history2 from '../../assets/images/history/history2.jpg'
// import history3 from '../../assets/images/history/history3.jpg'
// import history4 from '../../assets/images/history/history4.jpg'

const OurHistory = () => {
    return (
        <section className="history-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    {/* <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        Our History
                    </span>
                    <h2>History Begins in 2010</h2> */}
                </div>

                {/* <ol className="timeline history-timeline">
                    <li className="timeline-block"> */}
                        {/* <div className="timeline-date">
                            <span>2010</span>
                            February 20
                            <sup>th</sup>
                        </div> */}

                        {/* <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div> */}

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                    <ReactWOW delay='.5s' animation='fadeInLeft'>
                                        <h3>Work Culture</h3>
                                        <p style={{fontSize:"15px"}}>At Aamanto, we realize how important having a healthy work-life balance is to boosting productivity. Keeping that in mind, our policy ensures our employees enjoy a healthy work environment where their opinions and ideas are valued. We know that the quality of a company can directly be measured by the quality of their employees, which is why we encourage employees to continuously grow and learn new skills and technologies. With a team comprised of various different nationalities and backgrounds, we foster a culture of diverse people and diverse ideas – because that is what drives innovation.</p>

                                        <h3>Careers</h3>
                                        <p style={{fontSize:"15px"}}>We are an equal opportunity employer and encourage candidates with all levels of experience to apply. Please navigate to our Careers page for current job openings.</p>
                                        </ReactWOW>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                    <ReactWOW delay='.5s' animation='fadeInRight'>
                                        <img src={history1} alt="banner" style={{marginTop:"40px"}} />
                                      </ReactWOW>                            
                                            </div>
                                </div>
                            </div>
                        </div>
                    {/* </li> */}

                    {/* <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2013</span>
                            January 14
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Global Success</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history2} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2016</span>
                            March 25
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>Founded Data Center</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history3} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2020</span>
                            December 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>International Award</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history4} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}
                {/* </ol> */}
            </div>
        </section>
    )
}

export default OurHistory