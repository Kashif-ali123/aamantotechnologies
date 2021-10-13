import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import DataBanner from '../components/Common/DataBanner'
import Footer from "../components/App/Footer"
import DataContent from '../components/ServiceDetails/DataContent'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Data = () => {
    return (
        <Layout>
            <Navbar />
            <DataBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <DataContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Data