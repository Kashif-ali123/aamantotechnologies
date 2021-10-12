import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import DigitalBanner from '../components/Common/DigitalBanner'
import Footer from "../components/App/Footer"

import DigitalTransformation from '../components/ServiceDetails/DigitalTransformation'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Digital = () => {
    return (
        <Layout>
            <Navbar />
            <DigitalBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <DigitalTransformation />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Digital