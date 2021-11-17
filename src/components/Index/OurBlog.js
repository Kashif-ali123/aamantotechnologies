import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import {bannerData} from '../data'
// import blog1 from '../../assets/images/blog/blog-img1.jpg'
// import blog5 from '../../assets/images/blog/blog-img5.jpg'
// import blog6 from '../../assets/images/blog/blog-img6.jpg'


const OurBlog = () => {
    return(
        <>
         
          <div >
          {bannerData.map((data, key) => {
            return (
              <div key={key}>
                <Blog
                  key={key}
                  blog={data.blog}
               
                 title={data.title}
                
                 title1={data.title1}
                 title2={data.title2}
                 blog_img={data.blog_img}
                 blog_img1={data.blog_img1}
                 blog_img2={data.blog_img2}
                
               

                 />
                 </div>
               );
             })}
           </div>
         </>
         );
         };
         const Blog = ({ blog,title2, title, title1, blog_img,blog_img1,blog_img2 }) => {
            if (!blog) return <div />;   
            
    return (
        <section className="blog-area pt-100 pb-70 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="blog" /> 
                       {blog}
                    </span>
                   
                   
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog_img} alt="blog" style={{height:"270px"}} />
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
                                       {title}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog_img1} alt="blog" style={{height:"270px"}} />
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
                                  {title1}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link to="#">
                                    <img src={blog_img2} alt="blog" style={{height:"270px"}} />
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
                                  {title2}
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