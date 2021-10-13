import React from 'react'
// import starIcon from '../../assets/images/star-icon.png'


const Crm = () => {
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                  
                    <h2>CRM is a Strategy Focused on Managing Relations with Customers</h2>
                    <p>A CRM framework improves your client care to delight your clients with the correct information at the right time.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6" style={{boxShadow:"#000"}}>
                        <div className="single-testimonials-item">
                           <h3 style={{textAlign:"left",color:"#1e1666"}}>Valuable details of clients</h3>
                          <p style={{textAlign:"left"}}>  History of previous purchases and activities</p>
                          <p style={{textAlign:"left"}}> A complete view of leads and visitors</p>
                          <p style={{textAlign:"left"}}> Social, contact and general data</p>
                          <p style={{textAlign:"left"}}> Customer hierarchy</p>
                          <p style={{textAlign:"left"}}>Centralized information of clients</p>
                          <p style={{textAlign:"left"}}> Communication history</p>
                          
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <img src={client1} alt="about" /> */}
                                    {/* <div className="title">
                                        <h3>Alex Maxwell</h3>
                                        <span>CEO at EnvyTheme</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                        <h3 style={{textAlign:"left",color:"#1e1666"}}>Increased productivitys</h3>
                          <p style={{textAlign:"left"}}>  Easy access to the data via tabs and smartphones</p>
                          <p style={{textAlign:"left"}}>  Automated data hunting and entering</p>
                          <p style={{textAlign:"left"}}> Direct contact between clients and the sales team</p>
                          <p style={{textAlign:"left"}}> The selling process is organized and systematic</p>
                          <p style={{textAlign:"left"}}>A clear understanding of customer demands</p>
                          <p style={{textAlign:"left"}}>Automatic integration with Outlook</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">

                                    {/* <img src={client2} alt="about" /> */}
                                    {/* <div className="title">
                                        <h3>David Warner</h3>
                                        <span>CEO at Envato</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                        <h3 style={{textAlign:"left",color:"#1e1666"}}>Better business opportunities</h3>
                          <p style={{textAlign:"left"}}>  Registration of potential customers</p>
                          <p style={{textAlign:"left"}}>  Contractual documentation</p>
                          <p style={{textAlign:"left"}}>  Effective management of business activities</p>
                          <p style={{textAlign:"left"}}>  Active campaigns to boost sales</p>
                          <p style={{textAlign:"left"}}> Easy tracking of why deals are won or not</p>
                          <p style={{textAlign:"left"}}> Management of business cases</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <img src={client3} alt="about" />
                                    <div className="title">
                                        <h3>Sarah Taylor</h3>
                                        <span>CEO at ThemeForest</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                        <h3 style={{textAlign:"left",color:"#1e1666"}}>Consolidated sales report</h3>
                          <p style={{textAlign:"left"}}> Connection to Power BI and DWH</p>
                          <p style={{textAlign:"left"}}>  Keeps all the data in one place</p>
                          <p style={{textAlign:"left"}}>  Helps to shape company strategy</p>
                          <p style={{textAlign:"left"}}>  Sales reporting according to various criteria</p>
                          <p style={{textAlign:"left"}}>  Managerial insight on data</p>
                          <p style={{textAlign:"left"}}> Generating reports is a matter of a few hours</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <img src={client1} alt="about" />
                                    <div className="title">
                                        <h3>Alex Maxwell</h3>
                                        <span>CEO at EnvyTheme</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crm