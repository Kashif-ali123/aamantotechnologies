import React from 'react'
import {Link} from 'gatsby'
import BlogSidebar from './BlogSidebar'
import img6 from '../../assets/images/blog/ml.jpg'
import img4 from '../../assets/images/blog/al.jpg'
import img5 from '../../assets/images/blog/blog-img4.jpg'
import img7 from '../../assets/images/blog/blog-img7.jpg'
import img11 from '../../assets/images/blog/blog-img11.jpg'
import img12 from '../../assets/images/blog/blog-img12.jpg'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'
import user4 from '../../assets/images/user4.jpg'

const Blog3Content = () => {
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <img src={img6} alt="bb" />
                            </div>

                             <div className="article-content">
                               {/* <div className="entry-meta">
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
                                </div> */}

                                <h3>Artificial Intelligence (AI)</h3>

                                <p>At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving. It also encompasses sub-fields of machine learning and deep learning, which are frequently mentioned in conjunction with artificial intelligence.</p>

                                <p>These disciplines are comprised of AI algorithms which seek to create expert systems which make predictions or classifications based on input data.</p>

                                <blockquote>
                                    <h3>Artificial Intelligence (AI)</h3>
                                    <cite>Tom Cruise</cite>
                                </blockquote>

                                <p>Artificial intelligence (AI) is an ever-growing part of our everyday lives. AI makes it possible for machines to perform human-like tasks by identifying patterns in the immense amount of data available in our modern world. By using AI, computers can be trained to accurately perform complex tasks such as speech recognition, natural language processing, image recognition, real-time recommendations, spam and fraud detection, robotics, and much more.</p>
                                <p>Given the wide range of applications, you can be sure that there are ways that AI can work for you to modernize and enhance your business, reduce overhead costs, and more. At Aamanto, our qualified team of data scientists and machine learning engineers are trained to convert various kinds of business problems into actionable solutions which take advantage of the extensive capabilities of machine learning.</p>
                                <p>Whether it be using our pre-trained machine learning models or developing custom solutions for your own use cases, we at Aamanto allow our clients to unlock the true power of power of AI without needing to write any complex code themselves.</p>
                                <ul className="wp-block-gallery columns-3">
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
                                </ul>

                                <h3>Four major elements that we offer:</h3>

                                <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> Scientific skills for getting a better result</li>
                                    <li><i className='bx bx-badge-check'></i> Communication skills to getting in touch</li>
                                    <li><i className='bx bx-badge-check'></i> A career overview opportunity available</li>
                                    <li><i className='bx bx-badge-check'></i> A good work environment for work</li>
                                </ul>

                                <h3>Advantages of Incorporating AI Solutions into Your Business</h3>
                               <ul>
                                   <li><p>Zero risks and zero human error. Plus, it’s quick and simple to set up.</p></li>
                                   <li><p>Low-cost alternative. Outsourcing AI can prove to be cost effective compared to developing in-house software using expensive hardware.</p></li>
                                   <li><p>Faster decision making and round-the-clock availability of qualified professionals without the need to hire a team of experts.</p></li>
                                   <li><p>It’s flexible. Our AIaaS provides customization options, so you can adapt our AI tools to your business needs.</p></li>
                                   <li><p>It’s transparent. You only pay for what you use.</p></li>
                                   <li><p>It’s scalable. You have the ability to scale up or down based on business growth or needs.</p></li>
                               </ul>

                                {/* <h3>The rise of marketing and why you need it</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> */}
                            </div>

                            <div className="article-footer">
                              
                            </div>

                            

                              

                            <div className="comments-area">       
                                <div className="comment-respond">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
           
          
            
        </section>
    )
}

export default Blog3Content