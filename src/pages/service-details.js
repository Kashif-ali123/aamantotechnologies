import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/Page1Banner'
import Footer from "../components/App/Footer"
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Software Development" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Software Development" 
            />
            <ServiceDetailsContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Details