import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const OSSPage = () => (
  <Layout>
    <SEO title="I build things" />
    <h1>I build things</h1>
    <p>Welcome to oss page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OSSPage
