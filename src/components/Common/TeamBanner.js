import React from 'react'
import ReactWOW from 'react-wow'
import shape1 from '../../assets/images/shape/shape1.svg'
import shape2 from '../../assets/images/shape/shape2.png'
import shape3 from '../../assets/images/shape/shape3.png'

const TeamBanner = ({pageTitle}) => {
    return (
        <div className="team-title">
            <div className="container">
                <div className="page-title-content">
                <ReactWOW delay='.1s' animation='bounceInUp'>
                    <h2 style={{textAlign:"center", color:"#fff", marginBottom:"200px"}}>{pageTitle}</h2>
                  </ReactWOW>
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape1} alt="banner" />
            </div>
            <div className="shape-img2">
                <img src={shape2} alt="banner" />
            </div>
            <div className="shape-img3">
                <img src={shape3} alt="banner" />
            </div>
        </div>
    )
}

export default TeamBanner;