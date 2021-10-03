import React from 'react'
import {Link} from 'gatsby'
// import Banner1 from './Banner1'
import scientist1 from '../../assets/images/scientist/scientist1.png'
import scientist2 from '../../assets/images/scientist/scientist2.png'
import scientist3 from '../../assets/images/scientist/scientist3.png'
import scientist11 from '../../assets/images/scientist/scientist11.jpg'
import scientist17 from '../../assets/images/scientist/scientist17.png'
import scientist18 from '../../assets/images/scientist/scientist18.png'
import scientist20 from '../../assets/images/scientist/scientist20.png'

const ServicesOne = () => {
    return (
        <>
        {/* <Banner1 /> */}
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist1} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Software Development
                                </Link>
                            </h3>
                            <p style ={{textAlign:"justify"}}>Our Software Development Life Cycle methodology and practices encourage our customers to perform their operations efficiently and productively. We continue to transform many ideations into viable products for many of our clients worldwide.</p>
                            <p style ={{textAlign:"justify"}}>Our team is professional and very experienced in full stack software development with structured and non-structured databases.</p>
                            <p style ={{textAlign:"justify"}}>Our security teams ensure the products are designed, developed and tested with latest security solutions in the market while ensuring performance and reliability.</p>

                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist2} alt="about" />
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                Data Science
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>At Aamanto – we understand that data is our gateway to increasing customer engagement, satisfaction, and building the products that our clients need.</p>
                            <p style={{textAlign:"justify"}}>By applying cutting-edge machine learning, data analysis and data visualization techniques to our clients’ data – we are able to derive insights that help our clients solve complex business problems, uncover hidden trends, explain historical events, and predict future behavior.</p>
                            <p style={{textAlign:"justify"}}>Rest assured – if you have data, Aamanto can help you gain a competitive edge by allowing you to make smart data-driven decisions.</p>
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                            <img src={scientist3} alt="about" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Cloud Technologies
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Transformation is a complex process that requires intricate planning and flawless execution.</p>
                            <p style={{textAlign:"justify"}}>A single misstep can prove to be costly and time consuming.</p>
                            <p style={{textAlign:"justify"}}>Whether your business is transitioning from on-premises to multi-cloud or hybrid cloud, our experience and utilization of best practices and effective project management ensures our clients are satisfied and their migration is successful – opening the doors for future business growth.</p>
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="single-solutions-box"> */}
                            {/* <div className="icon">
                                <i className="flaticon-segmentation"></i>
                            </div> */}

                            <h3>
                                <Link to="/service-details">
                                WHY CHOOSE US

                                </Link>
                            </h3>
                            <br></br>
                            <h2>
                                <Link to="/service-details">
                                Our Technologies

                                </Link>
                            </h2>
                            <br></br>
                            <p>Our developers are experienced in a wide range of technologies and offerings more everyday.</p>
                           
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        {/* </div> */}
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                {/* <i className="flaticon-analytics"></i> */}
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Cloud Architecture
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Cloud Architecture establishment and management of public and private cloud platforms.  We work with Microsoft Azure, Google Cloud Platform and Amazon Web Services to provide IaaS, PaaS, FaaS, and SaaS Solutions.</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                {/* <i className="flaticon-settings"></i> */}
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Web & Mobile
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Development of integrated web-enabled front-end and back-end solutions, along with end-to-end development of mobile applications</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="single-solutions-box"> */}
                        <div className="image">
                                <img src={scientist11} alt="about" />
                            </div>

                          
                        {/* </div> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                {/* <i className="flaticon-settings"></i> */}
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Internet of Things (IoT)
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Development and integration of IoT solutions from silicon to cloud (including sensors, embedded software, edge processing, communications and analytics)</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                {/* <i className="flaticon-settings"></i> */}
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Product Design
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Benefit from complete product design, development and test in accordance with a customer’s specifications.</p>
                            <p style={{textAlign:"justify"}}>The Product Design process is a critical framework that our designers use to design products.</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                        <div className="image">
                                <img src={scientist17} alt="about"  />
                            </div>


                            <h3>
                                <Link to="/service-details">
                                Data Science Solutions
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>With so much business conducted in the digital realm, you’re gathering tons of data each day on your clients. Collecting and analyzing that data leads to more informed business decisions that target your customers. The more you know about their desires and fears, their purchasing habits and online behaviors, the better you can meet or exceed their needs with your products or services.</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                        <div className="image">
                                <img src={scientist18} alt="about"  />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Artificial Intelligence (AI)
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving. It also encompasses sub-fields of machine learning and deep learning, which are frequently mentioned in conjunction with artificial intelligence. These disciplines are comprised of AI algorithms which seek to create expert systems which make predictions or classifications based on input data.</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                        <div className="image">
                                <img src={scientist20} alt="about"  />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                IT Automation
                                </Link>
                            </h3>

                            <p style={{textAlign:"justify"}}>Automation enables efficient and cost-effective operations for many businesses today. Core business enhancement enables intelligent new altercations across industries. Aamanto enables business to perform effective and productive every day.</p>
                            
                            {/* <Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                </div>
                <h3>Software Development</h3>
                                <p>We offer software development services through our skilled staff to ensure your product is a fit for the modern digital arena. We have the combination of experience delivering critical projects, as well as the requisite skills in software development, cloud technologies and project management to make your project a success. Our agile methodology ensures that the client is always involved in the design and development process.</p>

                                <h3>Summary of Technologies</h3>
                                <ul className="features-list" style={{listStyleType:"none", fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><i className='bx bx-badge-check' style={{color:"red"}}></i> Web-Related: NodeJS, Angular JS, Vue JS, Flask, Laravel, ASP.Net, PHP Frameworks, XML, etc.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Data Science: Python, R, PyTorch/TensorFlow, Apache Spark, Hadoop, SQL, Tableau</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Cloud Technologies: Amazon Web Services, Microsoft Azure, Google Cloud Platform</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Content Management System: Customized CMS, WordPress, Joomla, Shopify</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Microsoft Related: C#, VB.NET, ASP.NET</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Mobile: Android, iOS, React Native, Hybrid Mobile Solutions</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Database Related: MongoDB, PostGreSQL, MySQL, MS SQL Server, MySQL, Oracle, Sybase etc.</li>
                                </ul>

                                <h3>Data Science</h3>
                                <p>At Aamanto – we understand that data is our gateway to increasing customer engagement, satisfaction, and building the products that our clients need. By applying cutting-edge machine learning, data analysis and data visualization techniques to our clients’ data – we are able to derive insights that help our clients solve complex business problems, uncover hidden trends, explain historical events, and predict future behavior. We provide data science services for all forms, sizes, and sources of data across all kinds of different industries. Rest assured – if you have data, Aamanto can help you gain a competitive edge by allowing you to make smart data-driven decisions.</p>
                                <h4>Data Science and Analytics Offerings</h4>
                                <p>Our team of data scientists can deliver a wide portfolio of services to help you better understand your customer, and identify untapped avenues of potential growth:</p>
                                <ul className="features-list" style={{listStyleType:"none", fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><i className='bx bx-badge-check' style={{color:"red"}}></i> Predictive & Descriptive Analytics</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Big Data & Real-Time Analytics</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Pattern Recognition</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Statistical Modeling</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Data Engineering</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Attribution Modeling</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Decision/Portfolio Optimization</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Content Optimization</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Dashboard Presentation</li>
                                </ul>

                                <h3>Cloud Transition & Adoption</h3>
                                <p>Transformation is a complex process that requires intricate planning and flawless execution. A single misstep can prove to be costly and time consuming. Whether your business is transitioning from on-premises to multi-cloud or hybrid cloud, our experience and utilization of best practices and effective project management ensures our clients are satisfied and their migration is successful – opening the doors for future business growth.</p>
                                <h5>Service Offerings</h5>
                                <p>We study our clients’ requirements and deliver a plan specifically tailored for them and their needs. We guide them every step of the way in their transition to the cloud so they can seamlessly scale up their business and lower their total cost of ownership.</p>
                                <p>We are fully equipped to offer all varieties of cloud services, such as:</p>
                                <h5>Infrastructure-as-a-Service (IaaS)</h5>
                                <p>Providing clients with the compute, networking, and storage resources they require on an as-needed basis.</p>
                                <h5>Platform-as-a-Service (PaaS)</h5>
                                <p>Providing users with a cloud environment in which they can develop, manage and deliver their applications.</p>
                                <h5>Software-as-a-Service (SaaS)</h5>
                                <p>Providing users with the tools necessary to build, deploy, and make available their own software on the cloud – where it can be accessed by their customers.</p>
                                <p>Providing clients with the compute, networking, and storage resources they require on an as-needed basis.</p>
                                <h5>Function-as-a-Service (FaaS)</h5>
                                <p>Providing users with the ability to execute code in response to trigger events, without having to worry about the infrastructure normally required to build and deploy such micro-service applications.</p>
                                <h3>Artificial Intelligence (AI)</h3>
                                <p>Artificial intelligence (AI) is an ever-growing part of our everyday lives. AI makes it possible for machines to perform human-like tasks by identifying patterns in the immense amount of data available in our modern world. By using AI, computers can be trained to accurately perform complex tasks such as speech recognition, natural language processing, image recognition, real-time recommendations, spam and fraud detection, robotics, and much more.</p>
                                <p>Given the wide range of applications, you can be sure that there are ways that AI can work for you to modernize and enhance your business, reduce overhead costs, and more. At Aamanto, our qualified team of data scientists and machine learning engineers are trained to convert various kinds of business problems into actionable solutions which take advantage of the extensive capabilities of machine learning.</p>
                                <p>Whether it be using our pre-trained machine learning models or developing custom solutions for your own use cases, we at Aamanto allow our clients to unlock the true power of power of AI without needing to write any complex code themselves.</p>
                                <h5>Advantages of Incorporating AI Solutions into Your Business</h5>
                                <ul className="features-list" style={{listStyleType:"none", fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><i className='bx bx-badge-check' style={{color:"red"}}></i> Zero risks and zero human error. Plus, it’s quick and simple to set up.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Low-cost alternative. Outsourcing AI can prove to be cost effective compared to developing in-house software using expensive hardware.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Faster decision making and round-the-clock availability of qualified professionals without the need to hire a team of experts.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> It’s flexible. Our AIaaS provides customization options, so you can adapt our AI tools to your business needs.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> It’s transparent. You only pay for what you use.</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> It’s scalable. You have the ability to scale up or down based on business growth or needs.</li>
                                    
                                </ul>
                                <h3>IT Automation</h3>
                                <p>We drive innovation and enhance productivity through our adoption of IT automation. IT automation allows software to perform easily repeatable processes – resulting in less manual intervention by human workers. By utilizing IT automation to repeat a set of instructions/policies, you can save cost by allocating your staff to more strategic work. Furthermore, IT automation reduces the chances of human error and security breaches.</p>
                                <h5>Automation Solutions We Offer</h5>
                                <ul className="features-list" style={{listStyleType:"none", fontFamily:"Open Sans sans-serif", color:"#6b6b84"}}>
                                    <li ><i className='bx bx-badge-check' style={{color:"red"}}></i> Network automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Backup automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Scalability automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Failover automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Data automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Events automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Security automation</li>
                                    <li><i className='bx bx-badge-check' style={{color:"red"}}></i> Storage automation</li>
                                </ul>
            </div>
        </section>
        </>
    )
}

export default ServicesOne