import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Identity Executive</title>
        <meta property="og:title" content="Dynamic Identity Executive" />
      </Helmet>
    </div>
  )
}

export default Home
