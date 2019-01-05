import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="I write stuff" />
    <h1>I write stuff</h1>
    <p>Welcome to blog page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
