import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'
import IBuildSection from '@components/IBuildSection'
import IBlogSection from '@components/IBlogSection'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Dinesh Pandiyan"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard />
    <IBuildSection />
    <IBlogSection />
  </Layout>
)

export default IndexPage
