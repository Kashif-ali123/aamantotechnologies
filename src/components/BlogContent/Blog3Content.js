import React from 'react'
// import {Link} from 'gatsby'
import BlogSidebar from './BlogSidebar'
import img6 from '../../assets/images/blog/ml.jpg'
import img4 from '../../assets/images/blog/al.jpg'
import img5 from '../../assets/images/blog/blog-img4.jpg'
import img7 from '../../assets/images/blog/blog-img7.jpg'
import {teleData} from '../data1'
// import img11 from '../../assets/images/blog/blog-img11.jpg'
// import img12 from '../../assets/images/blog/blog-img12.jpg'
// import user1 from '../../assets/images/user1.jpg'
// import user2 from '../../assets/images/user2.jpg'
// import user3 from '../../assets/images/user3.jpg'
// import user4 from '../../assets/images/user4.jpg'

const Blog3Content = () => {
    return(
        <>
         
          <div >
          {teleData.map((data, key) => {
            return (
              <div key={key}>
                <Content
                  key={key}
                  tit4={data.tit4}
                  paragrap={data.paragrap}
                  btn={data.btn}
                  paragrap1={data.paragrap1}
                  paragrap2={data.paragrap2}
                  tit5={data.tit5}
                  list={data.list}
                  list1={data.list1}
                  list2={data.list2}
                  list3={data.list3}
                  tit6={data.tit6}
                  unlist={data.unlist}
                  unlist1={data.unlist1}
                  unlist2={data.unlist2}
                  unlist3={data.unlist3}
                  unlist4={data.unlist4}
                  leave={data.leave}
                  paragrap3={data.paragrap3}
                  paragrap4={data.paragrap4}

                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const Content = ({ tit4,paragrap,btn,paragrap1,paragrap2,paragrap3,paragrap4,leave,tit5,list,list1,list2,list3,tit6,unlist,unlist1,unlist2,unlist3,unlist4}) => {
        if (!tit4) return <div />;    
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

                                <h3>{tit4}</h3>

                                <p>{paragrap}</p>

                                <p>{paragrap1}</p>

                                {/* <blockquote>
                                    <h3>Artificial Intelligence (AI)</h3>
                                    <cite>Tom Cruise</cite>
                                </blockquote> */}

                                <p>{paragrap2}</p>
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

                                <h3>{tit5}</h3>

                                <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> {list}</li>
                                    <li><i className='bx bx-badge-check'></i> {list1}</li>
                                    <li><i className='bx bx-badge-check'></i> {list2}</li>
                                    <li><i className='bx bx-badge-check'></i> {list3}</li>
                                </ul>

                                <h3>{tit6}</h3>
                               <ul>
                                   <li><p>{unlist}</p></li>
                                   <li><p>{unlist1}</p></li>
                                   <li><p>{unlist2}</p></li>
                                   <li><p>{unlist3}</p></li>
                                <li><p>{unlist4}</p></li>
                                 
                               </ul>

                              
                            </div>

                            

                            
                          
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>

                    <div className="comments-area" style={{backgroundColor:"blue"}}>       
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title" style={{color:"#fff"}}>{leave}</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes" style={{color:"#fff"}}>{paragrap3}</span>
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
                                            <label style={{color:"#fff"}}>{paragrap4}</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value={btn} style={{marginBottom:"50px"}}/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                   
                    
                </div>
            </div>
        
          
            
        </section>
    )
}

export default Blog3Content