import React from 'react'
import {Link} from 'gatsby'
import ReactWOW from 'react-wow'
// import img4 from '../../assets/images/blog/higher.png'
// import img5 from '../../assets/images/blog/conversation.jpg'
// import img6 from '../../assets/images/blog/blog-img6.jpg'
// import img7 from '../../assets/images/blog/blog-img7.jpg'
// import img8 from '../../assets/images/blog/blog-img8.jpg'
// import img10 from '../../assets/images/blog/blog-img10.jpg'
import {telData} from '../data2'
// import user1 from '../../assets/images/user1.jpg'
// import user2 from '../../assets/images/user2.jpg'
// import user3 from '../../assets/images/user3.jpg'
// import user4 from '../../assets/images/user4.jpg'
// import user5 from '../../assets/images/user5.jpg'
// import user6 from '../../assets/images/user6.jpg'

const BlogCard = () => {
    return(
        <>
         
          <div >
          {telData.map((data, key) => {
            return (
              <div key={key}>
                <BlogBanner
                  key={key}
                
                  
                  paragr1={data.paragr1}
                  paragr2={data.paragr2}
                  paragr3={data.paragr3}
                  paragr4={data.paragr4}
                  paragr5={data.paragr5}
                  paragr6={data.paragr6}
                  btn={data.btn}
                  blog_img={data.blog_img}
                  blog_img1={data.blog_img1}
                  blog_img2={data.blog_img2}
                  blog_img3={data.blog_img3}
                  blog_img4={data.blog_img4}
                  blog_img5={data.blog_img5}
              
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const BlogBanner = ({ paragr1, paragr2,paragr3,paragr4,paragr5,paragr6,btn,blog_img,blog_img1,blog_img2,blog_img3,blog_img4,blog_img5}) => {
        if (!paragr1) return <div />;    
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6" style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        {paragr1}
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                  {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                      
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img1} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                
                                <h3>
                                    <Link to="/blog-details">
                                      {paragr2}
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                  {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img2} alt="image" style={{height:"165px"}} />
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link to="/blog-details">{paragr3}
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                   {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img3} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                
                                <h3>
                                    <Link to="/blog-details">
                                        {paragr4}
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                   {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img4} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        {paragr5}
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                  {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6"  style={{width: "300px",marginLeft:"50px"}}>
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={blog_img5} alt="image" style={{height:"185px"}}/>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        <a>{paragr6}</a>
                                    </Link>
                                </h3>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                            <div className="btn-box">
                                <Link to="/blog-details" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                   {btn}
                                    <span></span>
                                </Link>
                            </div>
                        </ReactWOW>
                            </div>
                        </div>
                    </div>
 
                    <div className="col-lg-12 col-md-12">
                        {/* Pagination */}
                        <div className="pagination-area text-center">
                            <Link to="#" className="prev page-numbers">
                                <i className='bx bx-chevrons-left'></i>
                            </Link>
                            <span className="page-numbers current" aria-current="page">1</span>
                            <Link to="#" className="page-numbers">
                                2
                            </Link>
                            <Link to="#" className="page-numbers">
                                3
                            </Link>
                            <Link to="#" className="page-numbers">
                                4
                            </Link>
                            <Link to="#" className="next page-numbers">
                                <i className='bx bx-chevrons-right'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard