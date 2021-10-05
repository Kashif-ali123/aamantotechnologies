import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
// import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'
import termsImg from '../assets//images/terms-of-service.jpg'

const TermsOfService = () => {
    return (
        <Layout>
            <Navbar />
            {/* <PageBanner
                pageTitle="Terms of Service" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms of Service" 
            /> */}
            <section className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="terms-of-service-content">
                                {/* <img src={termsImg} alt="tt" /> */}
                                <h3 style={{fontSize:"35px", marginBottom:"60px", marginTop:"80px"}}><i>Terms of Use</i></h3>
                                <h3>1. Use of the Website</h3>
                                
                                    <p>You are hereby deemed to agree to the following terms and conditions as set forth in this section. In any case, if you do not accept these terms and conditions, you are requested not to use this website or download any material from it.</p>
                                    <p>The use of this website is totally discretionary, therefore you agree to hold the responsibility for any consequences that arise from your use of this website. Aamanto Technologies Inc. is not liable to any outcome that is generated due to such actions.</p>
                                    <p>Aamanto holds the sole authority over the website and all its material (except any applicable third party materials) under worldwide intellectual property rights (IPR) laws and treaty provisions. This prevents you to copy any material unless if permitted.</p>
                                    <p>Aamanto Technologies carries out business dealings with a number of (but not restricted to) customers, suppliers, and government. The website has used words like joint venture, partnership, partners, and others to indicate business relationships. We are not obligated to indicate any precise legal relationships unless if required by law.</p>
                                    <p>You will find that this website also includes some links to other websites. Any links to third-party websites are provided solely as a convenience to you. Aamanto does not endorse the contents on any such third-party websites. We are not responsible for the content of or any damage that may result from your access to or reliance on these third-party websites. If you link to third-party websites, you do so at your own risk.</p>
                                
                                <h3>2. Use of License</h3>
                                <p>Unless otherwise stated, Aamanto Technologies Inc. and/or its licensors own the intellectual property rights for all material on this website. Aamanto has granted permission to temporarily download a copy of the materials (information or services) on Aamanto’ website. All intellectual property rights are reserved. In any case, whatsoever, you are not allowed to:</p>
                                <ul>
                                <li>Republish material from this website</li>
                                <li>Sell, rent, transfer or sub-license material from this website</li>
                                <li>Reproduce, duplicate or copy material from this website</li>
                                <li>Modify or change material on this website and display it as your own</li>
                                </ul>
                                <p>This is the grant of a license, not a transfer of title. You also agree that you will not interrupt or attempt to interrupt the operation of the website in any manner.</p>
                                <h3>3. Blogs</h3>
                                <p>This is to inform that individuals (including but not limited to employees and freelancers working for Aamanto and referred to as “individuals” ) contribute articles, blog content, and opinions on this website on a regular basis. The opinions mentioned in the blogs and contents are the opinions of the individuals in their personal capacity and the official positions do not hold any liability over them. We hold the copyright over all this blog content.</p>
                                <h3>4.  Disclaimer</h3>
                                <p>We reserve the right to keep any links on this website or other linked websites on our discretion. You may request to remove any link/s that you find objectionable for any reason. However, we are not under any obligation to remove such links unless if required by the law.
We try, to the best of our capability, that the information on this website is correct and updated. However, we do not warrant the completeness, accuracy, timelessness or updated versions of the website.
All the rights to changing or modifying the website, materials, links, products, services or programs are held by Aamanto. All prices (if any) shown on the website are only for information and are subject to change without prior notice. All images appearing on the website are for representational purposes only.
Along with this, Aamanto may also enact limits on particular features and services. It can also block your access to certain sections or the entire website without any notice.</p>
                               
                                <h3>5. Unlawful or Prohibited Use of the Website</h3>
                                <p>You may not use any technique to alter the visual presentation or appearance of our website in any way howsoever. This is only permitted if you have prior written approval from us.</p>
                                <p>Damaging, disabling, overburdening or impairing any Aamanto server, or the network connected to any Aamanto server by using the website in any manner is prohibited.
Any attempt to get unauthorized access to any section of the website, accounts, computer systems or networks connected to any Aamanto server or to any of the services related with the website through hacking, password mining or any other manner is against the terms and conditions of this website.</p>
                                <p>You are not allowed to acquire or attempt to acquire any material or information in any way not intentionally made available through the website. We hold the right to terminate your use of our mobile app development service at any time if you are not in accordance with the above-mentioned terms and conditions.</p>
                                
                                <h3>6. Modifications in Terms of Use</h3>
                                <p>We are under no obligation to give prior notice about any changes or modifications in the terms and conditions, in part or whole. However, these modifications come into action after the notice about them has been posted.</p>
                                <p>If you continue to use the website after modifications in Terms and conditions, we will consider it as your acceptance of such modifications.</p>

                                <h3>7. Governing Law</h3>
                                <p>The terms and conditions and transactions contemplated hereby will be governed by and interpreted in accordance with, the state of Gujarat, India. Any action seeking legal or equitable relief arising out of or relating to these Terms and Conditions will be resolved only in the courts of Toronto, Canada.</p>
                                

                                <h3>8. Cookies in use</h3>
                                <p>We employ the use of cookies. By accessing our website, you agree to use cookies in agreement with the Aamanto Privacy Policy.</p>
                                <p>Most interactive websites use cookies to retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.</p>
                                
                                <h3>9. Agreement to be bound</h3>
                                <p>By using this website or using any service, you acknowledge that you have read and agree to be bound by this agreement and all terms and conditions on this website.</p>
                                
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

export default TermsOfService;