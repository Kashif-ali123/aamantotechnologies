import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"
import CloudContent from '../components/ServiceDetails/CloudContent'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
import CloudBanner from '../components/Common/CloudBanner'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
            <CloudBanner
                // pageTitle="Cloud Adoption" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Cloud Adoption" 
            />
            <CloudContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Details