import React from 'react';

// import FunIcon1 from '../../assets/images/funfacts/fun-icon1.png'
// import FunIcon2 from '../../assets/images/funfacts/fun-icon2.png'
// import FunIcon3 from '../../assets/images/funfacts/fun-icon3.png'
// import FunIcon4 from '../../assets/images/funfacts/fun-icon4.png'

const Funfacts = () => {
    return (
        <div className="funfacts-area pb-70">
            <div className="container">
                <div className="row">
                    <h2 style={{marginTop:"30px"}}>WHY CHOOSE AAMANTO FOR CUSTOM SOFTWARE DEVELOPMENT</h2>
                    <p style={{marginBottom:"30px"}}>Aamanto employ cutting-edge techniques and substantial experience as a global leader in web development solutions to provide you with the best outcomes.</p>
                    <div className="col-lg-6 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box " >
                             {/* <div className="icon">
                                <img src={FunIcon1} alt="funfacts" />
                            </div>  */}
                            <h3  >Fast and Reliable Service</h3>
                            <p >Our organization is dedicated to its work and to meeting deadlines, so you can receive your website on time.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            {/* <div className="icon">
                                <img src={FunIcon2} alt="funfacts" />
                            </div> */}
                            <h3>Dedicated Team Members</h3>
                            <p>Every developer and designer on the team of Aamanto has been hand-picked to deliver better results. They work on each project with sincere devotion.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            {/* <div className="icon">
                                <img src={FunIcon2} alt="funfacts" />
                            </div> */}
                            <h3>Prioritize Customer Satisfaction</h3>
                            <p>Client satisfaction is of the utmost importance to us. As a result, we make every effort to create a website that exceeds your objectives.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            {/* <div className="icon">
                                <img src={FunIcon4} alt="funfacts" />
                            </div> */}
                            <h3>Result-Oriented Methods</h3>
                           <p> We create a set of criteria to focus on your prestigious project and give exactly what you've paid for in order to take over the market.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            {/* <div className="icon">
                                <img src={FunIcon4} alt="funfacts" />
                            </div> */}
                            <h3>Complete Confidentiality</h3>
                           <p> Our team will keep you updated on the development and share any necessary information with you at every stage of the procedure.</p>
                        </div>
                    </div>
                </div>
            </div>
     
    )
}

export default Funfacts;