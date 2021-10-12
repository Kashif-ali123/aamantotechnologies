import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"

import CyberBanner from '../components/Common/CyberBanner'
import CyberSecurity from '../components/ServiceDetails/CyberSecurity'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Cyber = () => {
    return (
        <Layout>
            <Navbar />
            <CyberBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <CyberSecurity />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Cyber