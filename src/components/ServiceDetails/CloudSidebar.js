import React from 'react'
import {Link} from 'gatsby'

const CloudSidebar = () => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                <li>
                    <Link to="/service-details" className="active">
                    Cloud Adoption
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                    Cloud Migration
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                    SaaS Development
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                    DevOps Consulting
                    </Link>
                </li>
                {/* <li>
                    <Link to="/service-details">
                        Data Visualization
                    </Link>
                </li> */}
            </ul>

            {/* <div className="download-file">
                <h3>Brochures</h3>

                <ul>
                    <li>
                        <Link to="#">
                            PDF Download <i className='bx bxs-file-pdf'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            Services Details.txt <i className='bx bxs-file-txt'></i>
                        </Link>
                    </li>
                </ul>
            </div> */}

            <div className="services-contact-info">
                <h3>Contact Info</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Phone:</span>
                        <a href="tel:+1 (833) 540-1866">+1 (833) 540-1866</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        10 Streamside Street Kleinburg, Ontario Canada L4H 4V3
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>Email:</span>
                        <a href="mailto:info@aamanto.com">info@aamanto.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CloudSidebar