import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Aamanto Technologies</title>
                <meta name="description" content="Aamanto Technologies" />
                <meta name="og:title" property="og:title" content="Aamanto Technologies"></meta>
                <meta name="twitter:card" content="Aamanto technologies"></meta>
                <link rel="canonical" to="/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
