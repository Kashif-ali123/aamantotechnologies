import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import SoftwareDevelopment from '../components/Common/SoftwareDevelopment'
import Footer from "../components/App/Footer"
import SoftwareDevelopmentContent from '../components/ServiceDetails/SoftwareDevelopmentContent'
// import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
            <SoftwareDevelopment
               
            />
            <SoftwareDevelopmentContent />
            {/* <RelatedServices /> */}
            <Footer />
        </Layout>
    );
}

export default Details