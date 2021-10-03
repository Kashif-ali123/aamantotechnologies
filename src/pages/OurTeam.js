import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import TeamBanner from '../components/Common/TeamBanner'
import Footer from "../components/App/Footer"
import Team1 from '../components/Team1'
// import StartProject from '../components/Common/StartProject'

const OurTeam = () => {
    return (
        <Layout>
            <Navbar />
            <TeamBanner
                pageTitle="Team1" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Team1" 
            />
            <Team1 />
            {/* <StartProject /> */}
            <hr></hr>
            <Footer />
        </Layout>
    );
}

export default OurTeam