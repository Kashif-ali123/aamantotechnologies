import React from 'react'
import ReactWOW from 'react-wow'
import {Link} from 'gatsby'
// import projectStart from '../../assets/images/project-start1.png'
// import shape from '../../assets/images/shape/circle-shape1.png'
import {bannerData} from '../data'
const ProjectStartArea = () => {
    return(
        <>
         
          <div >
          {bannerData.map((data, key) => {
            return (
              <div key={key}>
                <Team
                  key={key}
                  team={data.team}
                  paragraph={data.paragraph}
                  btn={data.btn}
                  team_img={data.team_img}
               
              
                
               

                 />
                 </div>
               );
             })}
           </div>
         </>
         );
         };
         const Team = ({ team, paragraph,btn, team_img }) => {
            if (!team) return <div />;   
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                            <img src={team_img} alt="project" style={{width:"300px"}} />
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                        <ReactWOW delay='.1s' animation='bounceInDown'>
                            <h2>{team}</h2>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInUp'>
                            <p>{paragraph}</p>
                            </ReactWOW>
                            <ReactWOW delay='.1s' animation='bounceInDown'>
                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                {btn}
                                <span></span>
                            </Link>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
              
            {/* <div className="circle-shape1">
            <ReactWOW delay='.1s' animation='bounceInDown'>
                <img src={shape} alt="project" />
                </ReactWOW>
            </div> */}
        </div>
    )
}

export default ProjectStartArea;