import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"


import InternetThing from '../components/ServiceDetails/InternetThing'
import InternetBanner from '../components/Common/InternetBanner'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Internet = () => {
    return (
        <Layout>
            <Navbar />
            <InternetBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <InternetThing />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Internet