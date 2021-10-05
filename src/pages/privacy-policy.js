import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'
import privacyPolicy from '../assets/images/privacy-policy.jpg'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <Navbar />
            {/* <PageBanner
                pageTitle="Privacy Policy" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Privacy Policy" 
            /> */}
            <section className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="privacy-policy-content">
                                {/* <img src={privacyPolicy} alt="pp" /> */}
                                <h3 style={{fontSize:"35px", marginBottom:"20px", marginTop:"80px"}}><i>Privacy Policy</i></h3>
                                 <p style={{fontFamily:"Open Sans, sans-serif"}}>Aamanto Technologies is fully committed to comply with applicable data protection laws, as we believe that ensuring data protection is the basis of trustworthy business relationships.</p>
                                 <p style={{fontFamily:"Open Sans, sans-serif"}}>We are always working to stay compliant – encourage audits, certifications, and provide industry-standard contractual protections. Our privacy policy is based upon the values set by the Canadian Standards Association’s Model Code for the Protection of Personal Information and Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
                                <h3> PRINCIPLES OF PERSONAL DATA PROCESSING</h3>
                            
                                    <p style={{fontFamily:"Open Sans, sans-serif"}}>We have to collect and use (to process) certain types of information (Personal Data) that relates to the people (Data Subjects) who we come into contact with in order to carry out our business.</p>
                                    <p style={{fontFamily:"Open Sans, sans-serif"}}>Therefore we presume and agree that Personal data shall be:</p>
                                    <ol>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>processed lawfully, fairly and in a transparent manner in relation to the data subject (‘lawfulness, fairness and transparency’)</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes (‘purpose limitation’)</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed (‘data minimisation’);</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay (‘accuracy’);</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed (‘storage limitation’);</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}> processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures (‘integrity and confidentiality’).</li>
                                </ol>
                                
                                <h3>LAWFULNESS OF PROCESSING</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.</p>
                                <h3>HOW DO WE COLLECT YOUR PERSONAL INFORMATION</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>These are the main ways we collect your information:</p>
                                <ul>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>you contact us directly via our website to request information about our services.</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>you reply to our direct marketing campaigns.</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>we acquired your personal data from other sources, such as social media sites.</li>
                                    
                                </ul>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>If you are under 16, please do not provide us with any of your information unless you have the permission of your parent or guardian.</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Please help us to keep your information up to date by informing us of any changes to your contact details as we respect your right to obtain the rectification of inaccurate personal data and the right to have incomplete personal data completed.</p>
                                
                                <h3>WHAT PERSONAL DATA MAY BE COLLECTED</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>The following types of personal information about you may be collected:</p>

                                <ul>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>name,</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>address,</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>phone numbers,</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>e-mail address.</li>

                                </ul>
                                <h3>HOW DO WE KEEP PERSONAL DATA SAFE</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>We believe that personal information must be collected and dealt with appropriately, thus there must be safeguards in place to ensure this. Although data transmission over the Internet cannot be guaranteed to be secure, we work hard to maintain physical, electronic and procedural safeguards to protect your information in accordance with applicable data protection requirements. We use technical and organizational security measures including encryption and authentication tools to protect your personal information, against manipulation, loss, destruction, and access by third parties. Our main security measures are:</p>
                                <ul>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>restricted access to your data on a “need to know” basis</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>transfer of data only in encrypted form</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>firewalled IT systems to prohibit unauthorised access</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}>permanently monitored access to IT systems to detect and stop any misuse.</li>
                                </ul>
                                <h3>YOUR RIGHTS</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}> PIPEDA provides a general right of <b> access</b> to personal information. PIPEDA Section 4.9 states:</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>“Upon request, an individual shall be informed of the existence, use, and disclosure of his or her personal information and shall be given access to that information.”</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Section 4.9 also provides a right to <b>rectification:</b></p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>“An individual shall be able to challenge the accuracy and completeness of the information and have it amended as appropriate.”</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>There is also a limited right to <b>erasure:</b></p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>“Depending upon the nature of the information challenged, amendment involves the correction, <b>deletion</b>, or addition of information.”</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>In order to exercise your rights, please contact us at: <a href="mailto:info@aamanto.com"> info@aamanto.com</a></p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Additional Information</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Cookies</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>A cookie is a small computer file or piece of information that may be stored in your computer’s hard drive when you visit our websites. We may use cookies to improve our website’s functionality and in some cases, to provide visitors with a customized online experience.</p>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Cookies are widely used and most web browsers are configured initially to accept cookies automatically. You may change your Internet browser settings to prevent your computer from accepting cookies or to notify you when you receive a cookie so that you may decline its acceptance. Please note, however, if you disable cookies, you may not experience optimal performance of our website.</p>
                                <h3> Third-Partyinks/Websites</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>At times, we link to third-party websites and services as per the requirements. We do this mostly for the purpose of sharing information to our users and enhancing their knowledge. However, we are not responsible for any incorrect information on these third party websites, their privacy statements, unlawful practices or the contents. We do take care that we link only genuine and informative links but we cannot guarantee 100% authenticity of other websites and won’t be held liable for the same. We would also like to mention the fact that by linking to any third party sites, we are not endorsing them or promoting them or showcasing a partnership with them unless it is specified explicitly by us.</p>
                                <h3>Storing Your Information</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>In this section of the privacy policy, we will tell you where we store any information that you provide us, how we take care of it and till when we will be keeping it with us.</p>
                                <ul>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}><b>Where we store it :</b> If you are just using the website then we store your information in the form of cookies on our servers or on your device. If you provide us with any personal information, we store it on our server. Any kind of sensitive information is saved on our servers which have strong layers of security for the purposes of data protection and confidentiality.</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}><b>How we secure your data :</b>  As we mentioned before, we take data privacy seriously and any breach of your information will be dealt with utmost seriousness. We ensure that any personal or non-personal information shared by you remains safe and secure from unauthorized usage, access, loss, leak or destruction. We store your information on a secured web server managed solely by us. To protect your data from unauthorized access, we have several physical, electronic and managerial methods in place that help us safeguard your information.</li>
                                    <li style={{fontFamily:"Open Sans, sans-serif"}}><b>For how long we keep your data :</b>  As a website user, your information will be stored only for a short period of time by us. If you sign a contract with us for your project, then we will keep your information and maintain the account for as long as the project isn’t completed or the contract remains valid. Once the contract ends, your data, database and code will be backed up for repository purposes in a secured environment. We will also retain some other information for keeping a record of your project and future financial and legal purposes for as long as permitted by the law.</li>
                                </ul>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>If you think that we have any personal, non-personal or sensitive information of yours by mistake, or through some third-party or if you wish to delete any information of yours, feel free to contact us for deletion of the same. We will not be taking, saving, using or sharing any of your information without your consent in the matter.</p>
                                <h3>Changes to Privacy Policy</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>We reserve the right to modify this Privacy Policy by way of rewriting, changing, editing or amending it at any point of time without any prior notice. Whenever we modify the content of this policy, we will be mentioning the last date of updating at the bottom of the page. We encourage our users, partners and affiliates to keep revisiting this page for staying up to date with any and all changes that we may perform on the page. If you continue to use the website, then we will assume that you agree with and accept the changes in the policy.</p>
                                <h3>Contact Us</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>In case of any queries or questions regarding our Privacy Policy, feel free to get in touch with us through “Contact Us Form”.</p>
                                <h3>Other Websites</h3>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>Our website may contain links to other third party sites that are not governed by this privacy policy. Although we endeavour to only link to sites with high privacy standards, our privacy policy will no longer apply once you leave our website. Additionally, we are not responsible for the privacy practices employed by third party websites. Therefore, we suggest that you examine the privacy statements of those sites to learn how your information may be collected, used, shared and disclosed.</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_insight">
                                    <ul>
                                        <li>
                                            <Link to="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Purchase Guide
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Terms of Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget widget_recent_courses">
                                    <h3 className="widget-title">Recent Courses</h3>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg1" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$49.00</span>
                                            <h4 className="title usmall"><Link to="#">The Data Science Course 2020: Complete Data Science Bootcamp</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg2" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$59.00</span>
                                            <h4 className="title usmall"><Link to="#">Java Programming MasterclassName for Software Developers</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg3" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$69.00</span>
                                            <h4 className="title usmall"><Link to="#">Deep Learning A-Z™: Hands-On Artificial Neural Networks</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>

                                    <div className="tagcloud">
                                        <Link to="#">Business <span className="tag-link-count"> (3)</span></Link>
                                        <Link to="#">Design <span className="tag-link-count"> (3)</span></Link>
                                        <Link to="#">Braike <span className="tag-link-count"> (2)</span></Link>
                                        <Link to="#">Fashion <span className="tag-link-count"> (2)</span></Link>
                                        <Link to="#">Travel <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Smart <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Marketing <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Tips <span className="tag-link-count"> (2)</span></Link>
                                    </div>
                                </div>
                            </aside>
                        </div> */}
                    </div>
                </div>
            </section>
            <hr></hr>
            <Footer />
        </Layout>
    )
}

export default PrivacyPolicy;