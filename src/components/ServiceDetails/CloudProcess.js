import React from 'react';
import ReactWOW from 'react-wow'


const CloudProcess = () => {
    return (
        <div className="funfacts-area bg-image">
            <div className="container">
                <div className="row">
                <ReactWOW delay='.1s' animation='fadeInRight'>
                    <h1 style={{color:"#fff", marginTop:"30px"}}>PROCESS OF CLOUD ADOPTION SERVICE</h1>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='fadeInRight'>
                    <p style={{color:"#fff"}}>We use a four-step process to swiftly and safely move your datacenter to an Azure, AWS, or GCP cloud - based solution.</p>
                      </ReactWOW>
                      <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <p style={{color:"#fff", marginBottom:"50px"}}>We collaborate with you to classify your apps and create a new infrastructure and migration strategy. Integration options, security enhancements, latency reduction, scalability, and inventiveness will all be taken into account so that we can develop the finest solution for your business.</p>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='fadeInRight'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            {/* <div className="icon">
                                <img src={FunIcon1} alt="FunIcon" />
                            </div> */}
                             <ReactWOW delay='.1s' animation='fadeInRight'>
                            <h3> EXECUTION </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <p style={{color:"#fff"}}>We develop a complete migration plan that ensures a smooth transition, with minimal disruption to your core company, by managing your infrastructure with tried and true DevOps approaches and practices.</p>
                            </ReactWOW>
                        </div>
                    </div>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item">
                            {/* <div className="icon">
                                <img src={FunIcon2} alt="FunIcon" />
                            </div> */}
                             <ReactWOW delay='.1s' animation='fadeInLeft'>
                            <h3>OPTIMISATION </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInRight'>
                            <p style={{color:"#fff"}}>We use the optimization phase to think about geo-specific pricing, services, and data storage, as well as scaling and containerizing your important applications. This provides you with the best suitable Cloud-based solution for your requirements.</p>
                          </ReactWOW>
                        </div>
                    </div>
                    </ReactWOW>
                    <ReactWOW delay='.1s' animation='fadeInRight'>
                    <div className="col-lg-6 col-sm-3 col-6 col-md-3">
                        <div className="single-funfacts-item" >
                            {/* <div className="icon">
                                <img src={FunIcon3} alt="FunIcon" />
                            </div> */}
                             <ReactWOW delay='.1s' animation='fadeInRight'>
                            <h3>ASSISTING </h3>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='fadeInleft'>
                            <p style={{color:"#fff"}}>After we've completed a successful migration, we'll use a centralized monitoring system to assist you in maintaining and managing your resources, apps, and data.</p>
                           </ReactWOW>
                        </div>
                    </div>
                    </ReactWOW>

                   
                </div>
            </div>
        </div>
    )
}

export default CloudProcess;