import React from 'react';
import {telData} from '../data2'


const TelecomBanner = () => {
    return(
        <>
         
          <div >
          {telData.map((data, key) => {
            return (
              <div key={key}>
                <BlogBanner
                  key={key}
                  titl={data.titl}
                  descr={data.descr}
                  paragr={data.paragr}
              
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const BlogBanner = ({ titl, descr,paragr}) => {
        if (!titl) return <div />;    

    return (
        <React.Fragment>

            
                <div className="main-banner-item item-bg-blog">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">{titl}</span>
                                    <h1>{descr}</h1>
                                    <p>{paragr}</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </React.Fragment>
    )
}

export default TelecomBanner;