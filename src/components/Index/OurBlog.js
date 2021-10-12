import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import blog1 from '../../assets/images/blog/blog-img1.jpg'
import blog5 from '../../assets/images/blog/blog-img5.jpg'
import blog6 from '../../assets/images/blog/blog-img6.jpg'
import user1 from '../../assets/images/user4.png'
import user2 from '../../assets/images/user5.png'
import user3 from '../../assets/images/user6.png'

const OurBlog = () => {
    return (
        <section className="blog-area pt-100 pb-70 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="blog" /> 
                        Recent Blog
                    </span>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog1} alt="blog" style={{height:"270px"}} />
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={user1} className="rounded-circle" alt="blog" />
                                            <span>Moe Mahmood</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul> */}
                                <h3>
                                    <Link to="#">
                                       How Companies Use Machine Learning
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog5} alt="blog" style={{height:"270px"}} />
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={user2} className="rounded-circle" alt="blog" />
                                            <span>Masood Khan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul> */}
                                <h3>
                                    <Link to="#">
                                    How Companies Use Machine Learning
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog6} alt="blog" style={{height:"270px"}} />
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src={user3} className="rounded-circle" alt="blog" />
                                            <span>Kashif Khan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul> */}
                                <h3>
                                    <Link to="#">
                                    How Companies Use Machine Learning
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBlog