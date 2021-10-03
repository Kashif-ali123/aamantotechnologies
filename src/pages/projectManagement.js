import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import ProjectBanner from '../components/Common/ProjectBanner'
import Footer from "../components/App/Footer"
import Management from '../components/Management'

// import StartProject from '../components/Common/StartProject'

const projectManagement = () => {
    return (
        <Layout>
            <Navbar />
            <ProjectBanner
                pageTitle="Management" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Management" 
            />
            <Management />
            {/* <StartProject /> */}
            <hr></hr>
            <Footer />
        </Layout>
    );
}

export default projectManagement