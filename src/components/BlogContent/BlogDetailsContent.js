import React from 'react'
import {Link} from 'gatsby'
// import BlogSidebar from './BlogSidebar'
// import img6 from '../../assets/images/blog/blog-img6.jpg'
// import img4 from '../../assets/images/blog/blog-img4.jpg'
// import img5 from '../../assets/images/blog/blog-img5.jpg'
// import img7 from '../../assets/images/blog/blog-img7.jpg'
// import img11 from '../../assets/images/blog/blog-img11.jpg'
// import img12 from '../../assets/images/blog/blog-img12.jpg'
// import user1 from '../../assets/images/user1.jpg'
// import user2 from '../../assets/images/user2.jpg'
// import user3 from '../../assets/images/user3.jpg'
// import user4 from '../../assets/images/user4.jpg'

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="blog-details-desc">
                            {/* <div className="article-image">
                                <img src={img6} alt="bb" />
                            </div> */}

                            {/* <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <Link to="/blog">
                                                Fashion
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <span>View</span>
                                            <Link to="#">
                                                813,454
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            <Link to="#">
                                                25/04/2020
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <h3>It’s Time To Think Differently About Homeschooling</h3> */}
                                  <h3>6 Stages of Cloud Adoption </h3>
                                  <p style={{textAlign:"justify"}}>Cloud is the future; in the coming time, everything will be handled within the cloud systems, and we won't have to worry about storage, encryption, or any other such factor. </p>
                            <p style={{textAlign:"justify"}}>But do you think cloud adoption is easy?  </p>
                            <p style={{textAlign:"justify"}}>If you're curious to learn more about cloud adoption, you've come to the right place. As we will discuss the many stages of cloud adoption in this article, we will better understand how to proceed with cloud migration and the various procedures that occur. </p>
                            <p style={{textAlign:"justify"}}>Let's have a peek at the Cloud journey before moving on.</p>

                                {/* <ul className="wp-block-gallery columns-3">
                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img4} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img5} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img7} alt="bb" />
                                        </figure>
                                    </li>
                                </ul> */}

                                <h3 style={{marginTop:"35px"}}>What is Cloud Journey? </h3>

                                {/* <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> Scientific skills for getting a better result</li>
                                    <li><i className='bx bx-badge-check'></i> Communication skills to getting in touch</li>
                                    <li><i className='bx bx-badge-check'></i> A career overview opportunity available</li>
                                    <li><i className='bx bx-badge-check'></i> A good work environment for work</li>
                                </ul> */}
                                <p style={{textAlign:"justify"}}> The cloud has established itself as the foundation for enterprises to transform, differentiate, and achieve a competitive edge. As they work to expand the usage of cloud services across the business, many firms are focusing on cloud-first strategies. According to a recent Gartner survey, 40% of firms in North America aim to spend the majority of new or extra spending on a cloud.</p>
                                <p style={{textAlign:"justify"}}> In short, a cloud journey is a process of migrating all of your business operations to the cloud format, which will be entirely managed by external service providers and can be accessed through the internet. </p>
                                <p style={{textAlign:"justify"}}>This is not only for those who want to bring their products on the cloud platforms but also for those who want to take their products from one cloud platform to another. Under the cloud migration process, you would notice data movements, recreating the overall resources for computing, transitioning applications to the complete cloud infrastructure and many more. </p>
                                <p style={{textAlign:"justify"}}>It has a lot of advantages, including cost savings, increased resilience, greater performance, and more.</p>
                                <h3 style={{marginTop:"35px"}}><u>6 Stages of a Cloud Adoption Journey:</u> </h3>
                                <p style={{textAlign:"justify"}}>Most people think that a cloud journey is all about the technical changes that are involved in the framework of your products and services. But that's not the complete truth, as there are several changes and stages of a cloud migration journey. </p>
                                 <p style={{textAlign:"justify"}}>In this section, we are going to discuss everything about those different stages of a cloud journey. </p>

                                <h3>1. Create a multi-cloud and cloud-first strategy: </h3>
                                <p style={{textAlign:"justify"}}>A cloud-first approach should go beyond the IT department's purview. It must be comprehended and accepted by the entire organization. As a result, IT organizations must concentrate on more than just the technical aspects of a cloud-first strategy. They must evangelize the benefits of cloud computing to company executives to assist them in developing and extracting business benefits that will give them a competitive advantage and increase profits.</p>
                                <p style={{textAlign:"justify"}}>The phrase "cloud-first" does not imply "cloud always." The long-term goal for some firms may be to migrate all applications out of their data centers. Others may define cloud-first as shifting a portion of their apps to the public cloud". Regardless of the approach, it is essential to prioritize investments to enhance the organization's use of cloud services.</p>
                                <h3>2. Conduct workload placement reports daily:</h3>
                                <p style={{textAlign:"justify"}}>Because the workload placement, for example, in the on-premises data center was often a given conclusion, assessments have traditionally focused heavily on feature comparisons to alternative solutions. Yet, in the cloud era, new extended possibilities for stack element placement and ownership become available, and traditional workload life cycle management models must be updated.</p>
                                <p style={{textAlign:"justify"}}>Ongoing workload placement analysis entails reassessing workloads frequently, determining if the existing execution venue adequately fulfills the organization's demands and whether moving to a different model provides more value without putting the organization's operations at risk.</p>
                                <h3>3. Make a strategy for cloud adoption competence:</h3>
                                <p style={{textAlign:"justify"}}>Cloud projects are complicated, and while it takes time for businesses to develop the appropriate skill sets across all of the relevant functional areas, they must also continue to enhance processes as they go along their maturation path. A most successful firms meticulously plan out a multiyear effort to improve their cloud adoption, concentrating on numerous streams of work across multiple stages of maturity.</p>
                                <h3>4. Develop multi-cloud governance and management mechanism:</h3>
                                <p style={{textAlign:"justify"}}>Considerably with a single cloud provider, cloud computing governance is problematic. It becomes even more difficult as enterprises go to multi-cloud. Cloud providers provide on-demand, self-service services with infinite capacity, finding it challenging for businesses to see and manage what is being used. As a reason, enterprises must manage cloud service usage per provider and cloud service consumption across providers. It is untenable to govern and manage the environment without visibility into consumption.</p>
                                <h3>5. Create a tooling approach for multicloud maintenance: </h3>
                                <p style={{textAlign:"justify"}}>Selecting and implementing the most appropriate cloud management solutions can help organizations establish a cloud management tools strategy. However, a well-defined, systematic approach to solidifying criteria and matching tools to these requirements is required to develop a coherent cloud management tooling approach. The goal is to reduce the number of tools required while still meeting all management requirements.</p>
                                <p style={{textAlign:"center" }}>"Organizations should prioritize the use of the cloud platform's native toolset."</p>
                                <p style={{textAlign:"justify"}}>The optimal option is a mix of solutions based on the desired cross-platform consistency and platform-specific functionality. In all circumstances, companies should emphasize using the cloud platform's core toolset, supplementing where necessary with third-party cloud management platforms, cloud management point tools, DIY alternatives, and outsourcing."</p>
                                <h3>6. Examine the criteria for multi-cloud SaaS integration:</h3>
                                <p style={{textAlign:"justify"}}>Organizations can give the best options to people in charge of extending and integrating SaaS systems by regularly analyzing requirements. For example, instead of using a PaaS technology that may have a cost-per solution, organizations may receive a greater return from an existing SaaS service by transferring some applications and interfaces to it. To maintain the right combination of SaaS-provided capabilities and PaaS technologies, enterprises must regularly analyze their demands and compare them to the possibilities of a SaaS solution.</p>
                            {/* </div> */}

                            <div className="article-footer">
                                {/* <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>

                                    <Link to="/blog">Fashion</Link>
                                    <Link to="/blog">Games</Link>
                                    <Link to="/blog">Travel</Link>
                                </div> */}

                                {/* <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <Link to="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
                                                <i className='bx bxl-facebook'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer">
                                                <i className='bx bxl-twitter'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/" className="linkedin" target="_blank" rel="noreferrer">
                                                <i className='bx bxl-instagram'></i>
                                            </Link>
                                        </li> */}
                                        {/* <li>
                                            <Link to="https://www.linkedin.com/" className="instagram" target="_blank" rel="noreferrer">
                                                <i className='bx bxl-linkedin'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div> 

                            {/* <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        <img src={user1} className="shadow-sm" alt="uu" />
                                        <h4>Chris Orwig</h4>
                                        <span className="d-block">Photographer, Author, Writer</span>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tracer-post-navigation">
                                <div className="prev-link-wrapper">
                                    <div className="info-prev-link-wrapper">
                                        <Link to="#">
                                            <span className="image-prev">
                                                <img src={img11} alt="bb" />
                                                <span className="post-nav-title">Prev</span>
                                            </span>
        
                                            <span className="prev-link-info-wrapper">
                                                <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 21, 2020</span>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
         */}
                                {/* <div className="next-link-wrapper">
                                    <div className="info-next-link-wrapper">
                                        <Link to="#">
                                            <span className="next-link-info-wrapper">
                                                <span className="next-title">28 Student-Centered Instructional Strategies</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 19, 2020</span>
                                                </span>
                                            </span>
        
                                            <span className="image-next">
                                                <img src={img12} alt="bb" />
                                                <span className="post-nav-title">Next</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">2 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user1} className="avatar" alt="uu" />
                                                    <b className="fn">John Jones</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <span>April 24, 2019 at 10:59 am</span>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user2} className="avatar" alt="uu" />
                                                            <b className="fn">Steven Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={user3} className="avatar" alt="uu" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>
                    
                                                                <div className="comment-metadata">
                                                                    <a href="#">
                                                                        <span>April 24, 2019 at 10:59 am</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                    
                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>
                    
                                                            <div className="reply">
                                                                <Link to="#" className="comment-reply-link">
                                                                    Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li> */}

                                    {/* <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user4} className="avatar" alt="uu" />
                                                    <b className="fn">John Doe</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="#">
                                                        <span>April 24, 2019 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </div> */}

                                            {/* <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div> */}

                                        {/* <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user1} className="avatar" alt="uu" />
                                                            <b className="fn">James Anderson</b>
                                                            <span className="says">says:</span>
                                                        </div> */}
            
                                                        {/* <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <Link to="#" className="comment-reply-link">
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol> */}

                                {/* <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked 
                                            <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name <span className="required">*</span></label>
                                            <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>Email <span className="required">*</span></label>
                                            <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                        </p>
                                        <p className="comment-form-url">
                                            <label>Website</label>
                                            <input type="url" id="url" placeholder="Website" name="url" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                        </p>
                                    </form>
                                </div> */}
                            {/* </div>*/}
                        </div>
                    </div> 

                    {/* <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent