import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'
import IBuildSection from '@components/IBuildSection'
import IBlogSection from '@components/IBlogSection'
import ITalkSection from '@components/ITalkSection'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Full Stack Dev"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard />
    <IBuildSection />
    <IBlogSection />
    <ITalkSection />
  </Layout>
)

export default IndexPage
