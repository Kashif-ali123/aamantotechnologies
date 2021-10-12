import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"
import ArtificalBanner from '../components/Common/ArtificalBanner'
import ArtificalIntelligence from '../components/ServiceDetails/ArtificalIntelligence'



// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Artifical = () => {
    return (
        <Layout>
            <Navbar />
            <ArtificalBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <ArtificalIntelligence />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Artifical