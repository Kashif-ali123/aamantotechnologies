import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"
import CloudContent from '../components/ServiceDetails/CloudContent'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
import CloudBanner from '../components/Common/CloudBanner'
 
const Cloud= () => {
    return (
        <Layout>
            <Navbar />
            <CloudBanner
              
            />
            <CloudContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Cloud