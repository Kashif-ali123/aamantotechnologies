import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Blog1Banner from '../components/Common/Blog1Banner'
import Footer from "../components/App/Footer"
import BlogsDet from '../components/BlogContent/BlogsDet'

const BlogsDetail = () => {
    return (
        <Layout>
            <Navbar />
            {/* <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            />  */}
            <Blog1Banner />
            <BlogsDet />
            <Footer />
        </Layout>
    )
}

export default BlogsDetail;