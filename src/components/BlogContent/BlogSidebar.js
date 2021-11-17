import React from 'react'
import {Link} from 'gatsby'
import {teleData} from '../data1'
const BlogSidebar = () => {
    return(
        <>
         
          <div >
          {teleData.map((data, key) => {
            return (
              <div key={key}>
                <Sidebar
                  key={key}
                  tit={data.tit}
                  des={data.des}
                  tit1={data.tit1}
                  date={data.date}
                   date1={data.date1}
                   des1={data.des1}
                   date2={data.date2}
                   des2={data.des2}
                   tit2={data.tit2}
                   design={data.design}
                  number={data.number}
                  development={data.development}
                  number1={data.number1}
                  tit3={data.tit3}
                  business={data.business}
                  number3={data.number3}
                  smart={data.smart}
                  marketing={data.marketing}
                  tips={data.tips}
                  number5={data.number5}
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const Sidebar = ({ tit, des,tit1,date,date1,des1, date2,des2,tit2,design, number,development, number1,tit3,business,number3,smart,marketing,tips,number5}) => {
        if (!tit) return <div />;      
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">{tit}</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </div>

            <div className="widget widget_tracer_posts_thumb">
                <h3 className="widget-title">{tit1}</h3>

                <article className="item">
                    <Link to="/blog-details" className="thumb">
                        <span className="fullimage cover bg1" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>{date}</span>
                        <h4 className="title usmall">
                            <Link to="/blog-details">
                                {des}
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link to="/blog-details" className="thumb">
                        <span className="fullimage cover bg2" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>{date1}</span>
                        <h4 className="title usmall">
                            <Link to="/blog-details">
                               {des1}
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link to="/blog-details" className="thumb">
                        <span className="fullimage cover bg3" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>{date2}</span>
                        <h4 className="title usmall">
                            <Link to="/blog-details">
                                {des2}
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">{tit2}</h3>

                <ul>
                    <li>
                        <Link to="/blog">
                            {design}<span className="post-count">{number}</span>
                        </Link>
                    </li>
                  
                    <li>
                        <Link to="/blog">
                           {development}<span className="post-count">{number1}</span>
                        </Link>
                    </li>
                   
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">{tit3}</h3>

                <div className="tagcloud">
                    <Link to="/blog">
                       {business}<span className="tag-link-count">{number3}</span>
                    </Link>
                    <Link to="/blog">
                        {design} <span className="tag-link-count">{number}</span>
                    </Link>
                  
                    <Link to="/blog">
                       {development} <span className="tag-link-count">{number1}</span>
                    </Link>
                    <Link to="/blog">
                        {smart} <span className="tag-link-count">{number1}</span>
                    </Link>
                    <Link to="/blog">
                        {marketing}<span className="tag-link-count">{number1}</span>
                    </Link>
                    <Link to="/blog">
                       {tips} <span className="tag-link-count">{number5}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar