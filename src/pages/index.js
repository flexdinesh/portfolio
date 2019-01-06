import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import NameBoard from '@components/NameBoard'
import IBuildSection from '@components/IBuildSection'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Dinesh Pandiyan"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <NameBoard siteMetadata={data.site.siteMetadata} />
    <IBuildSection />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        fullName
        twitterHandle
        githubHandle
        stackOverflowHandle
        devToHandle
        mediumHandle
        linkedInHandle
      }
    }
  }
`

export default IndexPage
