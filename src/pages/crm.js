import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import CrmBanner from '../components/Common/CrmBanner'
import Footer from "../components/App/Footer"
import About1 from '../components/AboutUs/About1'
import CrmSolution from '../components/SEOAgency/CrmSolution'
import Crm from '../components/Crm'

// import DigitalTransformation from '../components/ServiceDetails/DigitalTransformation'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Digital = () => {
    return (
        <Layout>
            <NavbarTwo />
            <CrmBanner
                // pageTitle="Data Science" 
                // homePageText="Home" 
                // homePageUrl="/" 
                // activePageText="Data Science" 
            />
            <About1 />
            <CrmSolution />
            <Crm />
            {/* <DigitalTransformation /> */}
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Digital