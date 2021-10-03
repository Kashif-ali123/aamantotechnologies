import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import process1 from '../../assets/images/process/process1.png'
import process2 from '../../assets/images/process/process2.png'
import process3 from '../../assets/images/process/process3.png'
import process4 from '../../assets/images/process/process4.png'
import process5 from '../../assets/images/process/process5.png'
import process6 from '../../assets/images/process/process6.png'
import shape from '../../assets/images/shape/circle-shape1.png'

const HowItWork = () => {
    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Our Vision at Aamanto
                    </span>
   
                    <p style={{textAlign:"justify"}}>At Aamanto, we have a clear vision which guides us in all our interactions and defines how we conduct business. We have a clearly defined set of morals and ethical guidelines which we follow to deliver any business interaction.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src={process1} alt="about" />
                            </div>
                            <h3>Integrity</h3>
                            <p style={{textAlign:"justify"}}>Our clients trust us to always make the right decision. We have a set of morals that we work by, and these are never compromised.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src={process2} alt="about" />
                            </div>
                            <h3>Candor</h3>
                            <p style={{textAlign:"justify"}}>We emphasize honesty in all interactions with our clients, each other, and the world. During all stages of the project cycle, we keep our clients updated on the situation.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src={process3} alt="about" />
                            </div>
                            <h3>Innovation</h3>
                            <p style={{textAlign:"justify"}}>We aim to stay ahead of the curve. Never resting on our laurels, we strive to provide innovative solutions using cutting-edge technologies.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-process-box ">
                            <div className="number">4</div>
                            <div className="image">
                                <img src={process4} alt="about" />
                            </div>
                            <h3>Growth</h3>
                            <p style={{textAlign:"justify"}}>Success is in the journey, not the destination. Every problem is an opportunity to grow and improve.</p>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">5</div>
                            <div className="image">
                                <img src={process5} alt="about" />
                            </div>
                            <h3>Perform In-depth Analysis</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">6</div>
                            <div className="image">
                                <img src={process6} alt="about" />
                            </div>
                            <h3>Communicate Results</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape} alt="about" />
            </div>
        </section>
    )
}

export default HowItWork