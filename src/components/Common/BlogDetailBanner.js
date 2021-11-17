import React from 'react';
import {teleData} from '../data1'


const TelecomBanner = () => {
    return(
        <>
         
          <div >
          {teleData.map((data, key) => {
            return (
              <div key={key}>
                <Tele
                  key={key}
                 title={data.title}
                  desc={data.desc}
                 para={data.para}
              
               
                  
                />
              </div>
            );
          })}
        </div>
      </>
      );
      };
      const Tele = ({title, desc,para}) => {
        if (!title) return <div />;      

    return (
        <React.Fragment>

            
                <div className="main-banner-item item-bg-blog-detail">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">{title}</span>
                                    <h1>{desc}</h1>
                                    <p>{para}</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </React.Fragment>
    )
}

export default TelecomBanner;