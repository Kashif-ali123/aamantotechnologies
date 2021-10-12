import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"

import MobileBanner from '../components/Common/MobileBanner'
import MobileApplication from '../components/ServiceDetails/MobileApplication'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Mobile = () => {
    return (
        <Layout>
            <Navbar />
            <MobileBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <MobileApplication />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Mobile