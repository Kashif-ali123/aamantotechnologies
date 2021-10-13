import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Page1Banner from '../components/Common/Page1Banner'
import Footer from "../components/App/Footer"
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
            <Page1Banner
            //   pageTitle="Software Development"   
            />
            <ServiceDetailsContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Details